// getting it to run was hella finicky
// had to install `path` dependency (not sure wtf that does)
// this post helped too with vite config
// https://discuss.ipfs.tech/t/ipfs-and-vue-dependency-not-found/14994/7
// seem to have gotten along fine without `util` dependency mentioned
import * as Separator from '@radix-ui/react-separator';
import * as IPFS from 'ipfs'
import OrbitDB from 'orbit-db'
import Identities from "orbit-db-identity-provider";
import {ConnectButton} from '@rainbow-me/rainbowkit';
import {useAccount, useEnsAddress, useSigner} from 'wagmi';
import {
  Header, HeaderSeparator, LeftNav,
  Nav, PlayerBox, Players, PlayerSeparator, PlayerSeparatorContainer, Main, Section,
} from './App.css';
import {Account} from './components';
import {useEffect, useState} from 'react';

const TARC_SLIPPI_NAME = 'TARC#448';

export function App() {
  const [eventText, setEventText] = useState<any>();
  const [yourConnectCode, setYourConnectCode] = useState<any>();
  const [opponentCode, setOpponentCode] = useState<any>();
  const [db, setDb] = useState<any>();

  const {address, isConnected} = useAccount()
  const {data: test123Address, isError, isLoading} = useEnsAddress({
    name: 'test123.eth',
  });

  // Initialize DB
  useEffect(() => {
    (async () => {
      if (address) {
        // TODO: get signer for opponents .eth address
        const opponentIdentity = await Identities.createIdentity({
          type: "ethereum",
          test123Address,
        });
        console.log('Opponent OrbitDB identity: ', opponentIdentity);

        try {
          const connectedPlayerIdentity = await Identities.createIdentity({
            type: "ethereum",
            address,
          });
          console.log('connectedPlayerIdentity: ', connectedPlayerIdentity)

          try {
            const ipfsOptions = {repo: './ipfs', }
            const ipfs = await IPFS.create(ipfsOptions)

            // Create OrbitDB instance
            // https://github.com/orbitdb/orbit-db/blob/main/GUIDE.md#creating-an-identity
            // TODO: should probably create identity as compound key of eth address + slippi uname? would make it easier for other peer to connect
            const orbitdb = await OrbitDB.createInstance(ipfs, {identity: connectedPlayerIdentity});

            // Specify OrbitDB database
            const options = {
              // Give write access to ourselves
              accessController: {
                write: [connectedPlayerIdentity.id, opponentIdentity.id]
              }
            }
            const db = await orbitdb.log('moneymatch', options);
            setDb(db);
            // console.log('log db: ', db)
            // console.log('log db identity: ', db.identity.publicKey)

            // db.address: /orbitdb/zdpuArBijqpzxYSaGnew8gpvvtgeJKuQVHYQ9CBcKpwpyAqoY/moneymatch
            // middle part is multihash. can get data from it with: `ipfs dag get <multihash>`
          } catch (e) {
            console.error('Error creating OrbitDB instance: ', e);
          }

        } catch (e) {
          console.error('Error creating identity: ', e);
        }
      }
    }
    )();
  }, [address])

  const addAndGetTestEvent = async () => {
    // get a log db and add to it
    // https://github.com/orbitdb/orbit-db-eventstore
    console.log('adding event');
    // await db.add('[Game Complete] Type: GAME!');
    await db.add(eventText);
    console.log('gettinge events:');
    const value = db.iterator().collect().map((e: any) => {
      console.log('even: ', e);
    });
  };

  return (
    <main className={Main}>
      <header className={Header}>
        <nav className={Nav}>
          <div className={LeftNav}>
            <h1>MoneyMatch</h1>
          </div>
          <div>
            <ConnectButton />
          </div>
        </nav>
      </header>

      <Separator.Root
        decorative
        orientation='horizontal'
        className={HeaderSeparator}
      />

      <div className={Players}>
        <div className={PlayerBox}>
          <p>Your Connect Code</p>
          <input
            value={yourConnectCode}
            onChange={(e) => setYourConnectCode(e.target.value)}
          />
          {/* <p>Account: {isConnected && <Account address={address} />}</p> */}
          <p>Opponent's Connect Code</p>
          <input></input>
        </div>

        <div className={PlayerSeparatorContainer}>
          {/*
          <Separator.Root
            decorative
            orientation='vertical'
            className={PlayerSeparator}
          />
          */}
        </div>

        <div className={PlayerBox}>
          <p>Connect Code</p>
          <p>
            p2
            {/* <p>Account: {isConnected && <Account address={test123Address === null ? undefined : test123Address} />}</p> */}
          </p>
        </div>
      </div>
    </main>
  )
}
