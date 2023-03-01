import * as Separator from '@radix-ui/react-separator';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from 'ethers';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  Address,
  useAccount,
  useContractEvent,
  useContractWrite,
  usePrepareContractWrite,
  useProvider,
  useSigner,
  useWaitForTransaction,
} from 'wagmi';
import { EscrowFactory__factory } from '../types/ethers-contracts/factories/contracts/EscrowFactory__factory';
import { Escrow__factory } from '../types/ethers-contracts/factories/contracts/Escrow__factory';
import {
  Header,
  HeaderSeparator,
  LeftNav,
  LoadingContainer,
  Main,
  Nav,
} from './App.css';
import { CreateBet } from './CreateBet';
import { Deposit } from './Deposit';

export function App() {
  // wagmi hooks
  const { data: signer } = useSigner();
  const provider = useProvider();
  const { address, isConnected } = useAccount();

  // bet creation
  const [activeEscrowAddress, setActiveEscrowAddress] = useState<Address>(
    ethers.constants.AddressZero
  );
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
  const [betAmountStr] = useState('0.345');

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
      console.log('[EscrowCreated] address: ', escrowAddress);
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
      console.log(depositorAddress, 'Deposited');
      if (depositorAddress === p1Address) {
        setPlayer1HasDeposited(true);
        toast.success('Player 1 deposited');
      } else if (depositorAddress === p2Address) {
        setPlayer2HasDeposited(true);
        toast.success('Player 2 deposited');
      }
    },
  });

  // Once players have deposited, watch for game start
  const [gameStarted, setGameStarted] = useState(false);
  useContractEvent({
    address: activeEscrowAddress,
    abi: Escrow__factory.abi,
    eventName: 'GameStarted',
    listener: () => {
      console.log('GameStarted');
      setGameStarted(true);
    },
  });

  // Once game has started, watch for game end
  const [gameEnded, setGameEnded] = useState(false);
  const [winner, setWinner] = useState<Address>(ethers.constants.AddressZero);
  useContractEvent({
    address: activeEscrowAddress,
    abi: Escrow__factory.abi,
    eventName: 'GameEnded',
    listener: (winner) => {
      console.log('[GameEnded] winner: ', winner);
      setWinner(winner);
      setGameEnded(true);
    },
  });

  // Claim call
  const [claimed, setClaimed] = useState(false);
  const { config } = usePrepareContractWrite({
    address: activeEscrowAddress,
    abi: Escrow__factory.abi,
    functionName: 'claimWinnings',
    enabled: winner !== ethers.constants.AddressZero && !claimed,
  });
  const {
    data,
    write: claim,
    isLoading: isWriteLoading,
  } = useContractWrite(config);
  const { isLoading: isWaitLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => {
      toast.success(`Claimed Ξ ${Number(betAmountStr) * 2}!`);
      setClaimed(true);
    },
  });

  const getScreen = () => {
<<<<<<< HEAD
    // console.log('[getscreen] activeEscrowAddress', activeEscrowAddress);
    // console.log('[getscreen] player1HasDeposited', player1HasDeposited);
    // console.log('[getscreen] player2HasDeposited', player2HasDeposited);
    // console.log('[getscreen] activeEscrowAddress', activeEscrowAddress);
    if (
      activeEscrowAddress === ethers.constants.AddressZero
      ) {
=======
    if (activeEscrowAddress === ethers.constants.AddressZero) {
>>>>>>> 40afe00 (clean it up a bit + new conch types)
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
    } else if (
      activeEscrowAddress !== ethers.constants.AddressZero &&
      (!player1HasDeposited || !player2HasDeposited)
    ) {
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
    } else if (
      player1HasDeposited && player2HasDeposited && !gameStarted
      ) {
      return (
        <div className={LoadingContainer}>
          <p>WAITING FOR GAME...</p>
        </div>
      );
    } else if (
      player1HasDeposited &&
      player2HasDeposited &&
      gameStarted &&
      !gameEnded
    ) {
      return (
        <div className={LoadingContainer}>
          <p>GAME IN PROGRESS...</p>
        </div>
      );
    } else if (
      gameStarted && gameEnded) {
      // TODO: refactor this out into a game end screen
      return (
        <div className={LoadingContainer}>
          <h3>GAME!</h3>
          {winner === address ? (
            <button
              disabled={!claim || !(winner === address) || claimed}
              onClick={() => claim?.()}
              style={{
                marginTop: '1rem',
                width: '12rem',
                alignSelf: 'center',
                height: '1.75rem',
              }}
            >
              Claim
            </button>
          ) : (
            <p style={{ marginTop: '0.75rem' }}>You Lost :(</p>
          )}
          <button
            style={{
              marginTop: '1rem',
              width: '12rem',
              alignSelf: 'center',
              height: '1.75rem',
            }}
            onClick={() => window.location.reload()}
          >
            Play Again?
          </button>
        </div>
      );
    }
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
