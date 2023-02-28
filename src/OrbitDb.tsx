import { create } from 'ipfs';
import OrbitDB from 'orbit-db';
import Identities from 'orbit-db-identity-provider';
import { useEffect, useState } from 'react';

export const OrbitDb = () => {
  // Orbit connection stuff
  const [ipfs, setIpfs] = useState<any>();
  const [ipfsNodeId, setIpfsNodeId] = useState<any>(''); // base 58 hash of IPFS node id
  const [db, setDb] = useState<any>();
  const [userSettingsDb, setUserSettingsDb] = useState<any>();

  // Game stuff
  const [betAmount, setBetAmount] = useState<string>('');
  const [opponentConnectCode, setOpponentConnectCode] = useState('');

  useEffect(() => {
    (async () => {
      // Create IPFS node connected to global IPFS network
      const ipfs = await create({
        repo: './ipfs-repo',
        relay: { enabled: true, hop: { enabled: true, active: true } },
        // @ts-ignore
        EXPERIMENTAL: { pubsub: true },
        preload: { enabled: false },
        // swarm is preconfigured by default, can customize swarm servers to join with here
        config: {
          // Bootstrap: [],
          Addresses: {
            // should be default swarm addresses, but i keep getting errors trying to connect to them
            Swarm: [
              // From orbitdb field guide
              // '/p2p-circuit/ipfs/QmWxWkrCcgNBG2uf1HSVAwb9RzcSYYC2d6CRsfJcqrz2FX',
              // '/p2p-circuit/p2p-websocket-star/ipfs/QmWxWkrCcgNBG2uf1HSVAwb9RzcSYYC2d6CRsfJcqrz2FX',
              // Use IPFS dev webrtc signal server
              '/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/',
              '/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star/',
              '/dns4/webrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star/',
              // Use IPFS  webrtc signal server. from web3 workshop
              // '/dns6/ipfs.le-space.de/tcp/9091/wss/p2p-webrtc-star',
              // '/dns4/ipfs.le-space.de/tcp/9091/wss/p2p-webrtc-star',
            ],
          },
        },
      });
      setIpfs(ipfs);

      const peerInfo = await ipfs.id();
      setIpfsNodeId(peerInfo.id.toString());
      // Note: Addresses that start with Qm… are typically CIDv0 content addresses, while addresses that start with zdpu…. are CIDv1. Misunderstanding OrbitDB addresses can lead to some very unexpected - sometimes hilarious, sometimes disastrous outcomes.
      // seems normal for the node id to be v0 and db to be v1
      console.log('ipfs bootstrappers: ', await ipfs.bootstrap.list());
      console.log('ipfs peer info:', peerInfo);
      console.log('my ipfs node id: ', peerInfo.id.toString());
      console.log('addresses im publishing on: ')
      peerInfo.addresses.forEach((addr) => {
        console.log(addr.toString());
      });

      // Create an OrbitDB instance using the IPFS node
      const identity = await Identities.createIdentity({ id: 'user' })
      const orbitdb = await OrbitDB.createInstance(ipfs, { identity } );
      // const orbitdb = await OrbitDB.createInstance(ipfs);
      setDb(orbitdb);
      console.log('orbitdb identity', orbitdb.identity);
      console.log(
        'orbitdb identity id (multihash, same as id of ipfs node): ',
        // @ts-ignore
        orbitdb.identity.id
      );
      // Give write access to ourselves
      const defaultOptions = {
        // @ts-ignore
        accessController: { write: [orbitdb.identity.id] },
        // accessController: { write: ['*'] },
      };

      // create local user db writable only by me
      const userSettingsDb = await orbitdb.kvstore(
        'userSettings',
        defaultOptions
      );
      setUserSettingsDb(userSettingsDb);
      console.log(
        'my user db address (protocol/access control list, type, name/name): ',
        // @ts-ignore
        userSettingsDb.id
      );

      // rehydrate userSettingsDb from local IndexedDB
      await userSettingsDb.load(); // retrieve all of the values via their content addresses and loads the content into memory.
      const betAmount = userSettingsDb.get('bet_amount');
      console.log('betamt: ', betAmount);
      setBetAmount(betAmount === undefined ? '' : betAmount as string);
      // if you have a large database of millions of records, there are perf. implications of loading them all into memory. Part 4 of this book has details (https://github.com/orbitdb/field-manual/blob/main/01_Tutorial/02_Managing_Data.md)

      // Local IPFS node event listeners
      // maybe only works in node env? log when new peer connects
      // ipfs.libp2p.connectionManager.on(
      //   'peer:connect',
      //   (ipfsPeer: any) => {
      //     console.log('new peer: ', ipfsPeer.id.toB58String());
      //   }
      // );

      // subscribe to messages published on my channel
      await ipfs.pubsub.subscribe(peerInfo.id.toString(), (msg) => {
        console.log('message recieved: ', msg);
      });
    })();
  }, []);

  // create / update local user's bet amount in their userSettings db when it changes
  useEffect(() => {
    (async () => {
      if (userSettingsDb) {
        updateUserSetting('bet_amount', betAmount);
      }
    })();
  }, [betAmount, userSettingsDb]);

  async function updateUserSetting(key: string, value: string) {
    if (!userSettingsDb) {
      return;
    }

    userSettingsDb.set(key, value);
    // in the field manual, they use a top-level document store for music pieces
    // they then add a link to another database as a member of that schema, representing a counter db to count the times you've practiced a piece

    console.log('updated setting: ', key, value);
  }

  async function getIpfsPeers() {
    console.log('getting peers...');
    // ipfs peers
    const peerIds = (await ipfs.swarm.peers()).map((peer: any) => peer.peer);
    console.log('peerids: ', peerIds);
    // Note that this number will increase over time as your swarm automatically grows, so check and update periodically.

    const databasePeers = (await ipfs.pubsub.peers(userSettingsDb.address.toString()));
    console.log('pubsub db peers: ', databasePeers);
  }

  async function connectToPeer(
    multiaddr: string,
    protocol = '/p2p-circuit/ipfs/'
  ) {
    if (ipfs) {
      try {
        await ipfs.swarm.connect(protocol + multiaddr);
      } catch (e) {
        console.error('error connecting to peer: ', e);
        throw e;
      }
    }
  }

  return (
    <div>
      <p>ORBIT</p>
      <p
        style={{
          marginTop: '1rem',
        }}
      >
        Me
      </p>
      <p>ipfs node id: {ipfsNodeId}</p>
      <p>orbitdb id: {db?.identity?.id}</p>
      <p>user settings db address id: {userSettingsDb?.id}</p>
      <button onClick={getIpfsPeers}>getIpfsPeers</button>
      <div>
        <p
          style={{
            marginTop: '1rem',
          }}
        >
          Opponent's Connect Code
        </p>
        <input
          value={opponentConnectCode}
          onChange={(e) => setOpponentConnectCode(e.target.value)}
        />
        <button onClick={() => connectToPeer(opponentConnectCode)}>
          Connect
        </button>

        <p
          style={{
            marginTop: '1rem',
          }}
        >
          Bet Amount
        </p>
        <input
          value={betAmount}
          onChange={(e) => setBetAmount(e.target.value)}
        />
      </div>

      <div
        style={{
          marginTop: '2rem',
        }}
      >
        <p>Them</p>
      </div>
    </div>
  );
};
