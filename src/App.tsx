import * as Separator from '@radix-ui/react-separator';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from 'ethers';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  Address,
  useAccount,
  useContractEvent,
  useProvider,
  useSigner,
} from 'wagmi';
import { EscrowFactory__factory } from '../types/ethers-contracts/factories/contracts/EscrowFactory__factory';
import { Escrow__factory } from '../types/ethers-contracts/factories/contracts/Escrow__factory';
import { Header, HeaderSeparator, LeftNav, Main, Nav } from './App.css';
import { CreateBet } from './CreateBet';
import { Deposit } from './Deposit';
import {LoadingRipple} from './Ripple200';

export function App() {
  const { data: signer } = useSigner();
  const provider = useProvider();
  const { address, isConnected } = useAccount();

  const [activeEscrowAddress, setActiveEscrowAddress] = useState<Address>(
    ethers.constants.AddressZero
  );

  // URL Params
  const url = useMemo(() => {
    return new URL(window.location.href);
  }, []);
  const params = useMemo(() => {
    return new URLSearchParams(url.search);
  }, [url]);

  // PLAYER 1
  const [isP1Active] = useState(
    params.get('isP1Active') === 'true' || params.get('isP1Active') === null
  );
  const [p1ConnectCode, setP1ConnectCode] = useState(
    params.get('p1ConnectCode') ?? ''
  );
  const [p1Address, setP1Address] = useState<Address>(
    (params.get('p1Address') as Address) ?? ethers.constants.AddressZero
  );

  // PLAYER 2
  const [p2ConnectCode, setP2ConnectCode] = useState('');
  const [p2Address, setP2Address] = useState<Address>(
    ethers.constants.AddressZero
  );

  // BOTH PLAYERS
  const [betAmountStr] = useState('0.1');

  // set address and connect code depending on active player
  useEffect(() => {
    if (isP1Active && address) {
      setP1Address(address);
    } else if (!isP1Active && address) {
      setP2Address(address);
    }
  }, [address, isP1Active]);

  useContractEvent({
    address: import.meta.env.VITE_ESCROW_FACTORY_ADDRESS,
    abi: EscrowFactory__factory.abi,
    eventName: 'EscrowCreated',
    listener: (
      player1Id,
      player1Address,
      player2Id,
      player2Address,
      escrowAddress
    ) => {
      console.log('escrow created');
      // Wagmi is infurating for contract events, can't get multiple events or use query filters on the useContract result apparently (had to make my own ethers contract)
      toast.success('Escrow created!');

      setActiveEscrowAddress(escrowAddress);

      (async () => {
        // because can't unscramble indexed player ID's from the event (indexed strings are stored as a hash for the fixed-length properties), use the escrowAddress to query new Escrow contract
        // for player1 and 2's ids
        const Escrow = Escrow__factory.connect(escrowAddress, provider);
        const player1 = await Escrow.player1();
        setP1ConnectCode(player1.id);
        setP1Address(player1Address);

        const player2 = await Escrow.player2();
        setP2ConnectCode(player2.id);
        setP2Address(player2Address);
      })();
    },
  });

  // Once game has started, watch for deposits
  const [player1HasDeposited, setPlayer1HasDeposited] = useState(false);
  const [player2HasDeposited, setPlayer2HasDeposited] = useState(false);
  useContractEvent({
    address: activeEscrowAddress,
    abi: Escrow__factory.abi,
    eventName: 'Deposited',
    listener: (depositorAddress) => {
      console.log('deposited');
      if (depositorAddress === p1Address) {
        setPlayer1HasDeposited(true);
        toast.success('Player 1 deposited');
      } else if (depositorAddress === p2Address) {
        setPlayer2HasDeposited(true);
        toast.success('Player 2 deposited');
      }
    },
  });

  const getScreen = () => {
    console.log('[getscreen] activeEscrowAddress', activeEscrowAddress);
    console.log('[getscreen] player1HasDeposited', player1HasDeposited);
    console.log('[getscreen] player2HasDeposited', player2HasDeposited);
    if (activeEscrowAddress === ethers.constants.AddressZero) {
      // MVP Create Bet Screen. bet amount values hardcoded, p1 fills out his bet copies link, sends it to p2
      return (
        <CreateBet
          isP1Active={isP1Active}
          p1ConnectCode={p1ConnectCode}
          setP1ConnectCode={setP1ConnectCode}
          p1Address={p1Address}
          p2ConnectCode={p2ConnectCode}
          setP2ConnectCode={setP2ConnectCode}
          p2Address={p2Address}
          betAmountStr={betAmountStr}
        />
      );
      // More advanced Create Bet Screen. for letting two players connect p2p and update bet values in real time
      // return <CreateBetMultiTenant />
    } else if (activeEscrowAddress !== ethers.constants.AddressZero && (!player1HasDeposited && !player2HasDeposited)) {
      // TODO: should i do a time-related check in addition to activeEscrowAddress to account for players playing multiple games?
      //  could do a check on gameOver on the Escrow contract
      return (
        <Deposit
          escrowAddress={activeEscrowAddress}
          isP1Active={isP1Active}
          p1ConnectCode={p1ConnectCode}
          p1Address={p1Address}
          player1HasDeposited={player1HasDeposited}
          p2ConnectCode={p2ConnectCode}
          p2Address={p2Address}
          player2HasDeposited={player2HasDeposited}
          betAmountStr={betAmountStr}
        />
      );
    } else if (player1HasDeposited && player2HasDeposited) {
      return <p>Game in progress...</p>
    }
    // TODO: game end screen
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

      {getScreen()}
    </main>
  );
}
