import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import type { Address } from 'wagmi';
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useSigner,
} from 'wagmi';
import { EscrowFactory__factory } from '../types/ethers-contracts/factories/contracts/EscrowFactory__factory';
import {
  PlayerBox,
  Players,
  PlayerSeparatorContainer,
  Section,
} from './App.css';

export const CreateBetV1 = () => {
  const ARBITER_ADDRESS = '0x58438bdd4579f412279dc5bc4763dfe740a7a91f';

  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();

  const [eventText, setEventText] = useState<any>();
  // Player 1
  const [isP1Active, setIsP1Active] = useState(true); // active player driven by query params
  const [p1ConnectCode, setP1ConnectCode] = useState('');
  const [p1Address, setP1Address] = useState<Address>(
    ethers.constants.AddressZero
  );
  // Player 2
  const [isP2Active, setIsP2Active] = useState(false);
  const [p2ConnectCode, setP2ConnectCode] = useState('');
  const [p2Address, setP2Address] = useState<Address>(
    ethers.constants.AddressZero
  );
  const [betAmountStr, setBetAmountStr] = useState('0.1');

  // set address and connect code depending on active player
  useEffect(() => {
    if (isP1Active && address) {
      setP1Address(address);
    } else if (isP2Active && address) {
      setP2Address(address);
    }
  }, [address, isP1Active, isP2Active]);

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_ESCROW_FACTORY_ADDRESS,
    abi: EscrowFactory__factory.abi,
    functionName: 'createEscrow',
    args: [
      ARBITER_ADDRESS,
      p1ConnectCode,
      p1Address,
      ethers.utils.parseEther(betAmountStr),
      p2ConnectCode,
      p2Address,
      ethers.utils.parseEther(betAmountStr),
    ],
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <>
      <section className={Section}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        ></div>
      </section>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '30%',
          alignSelf: 'center',
          marginTop: '4rem',
        }}
      >
        <p>Betting with MoneyMatch is easy! Just:</p>
        <ol>
          <li>Connect your wallet (at the top right).</li>
          <li>Fill out your connect code.</li>
          <li>
            Click the "Copy Bet Link" button and send the link to your opponent.
          </li>
        </ol>

        <h3>Your Details</h3>
        <label>Your Connect Code</label>
        <input
          value={p1ConnectCode}
          onChange={(e) => setP1ConnectCode(e.target.value)}
        />

        <label style={{ marginTop: '1rem' }}>Your Wallet Address</label>
        <input disabled value={address} />

        <label style={{ marginTop: '1rem' }}>Bet Amount</label>
        <input value={'Ξ 0.1'} disabled />

        <button
          style={{ marginTop: '1rem' }}
          onClick={() => {
            const url = new URL(window.location.origin);
            const params = new URLSearchParams(url.search);
            params.append('isP1Active', 'false');
            params.append('p1ConnectCode', p1ConnectCode);
            params.append('p1Address', p1Address);
            const new_url = new URL(`${url.origin}${url.pathname}?${params}`);

            console.log('Bet Link', new_url.href);
            navigator.clipboard.writeText(new_url.href);
            toast.success('Bet link copied!')
          }}
        >
          Copy Bet Link
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '30%',
          alignSelf: 'center',
          marginTop: '4rem',
        }}
      >
        <div>
          <p>[DEV] Contract Args: </p>
          <p>Arbiter Address: {ARBITER_ADDRESS}</p>
          <p>P1 Connect Code: {p1ConnectCode}</p>
          <p>P1 Address: {p1Address}</p>
          <p>Bet Amount Str: {betAmountStr}</p>
          <p>P2 Connect Code: {p2ConnectCode}</p>
          <p>P2 Address: {p2Address}</p>
          <p>Bet Amount Str: {betAmountStr}</p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem',
          }}
        >
          <button
            disabled={
              !write ||
              p1Address === ethers.constants.AddressZero ||
              p2Address === ethers.constants.AddressZero
            }
            onClick={() => {
              write?.();
            }}
          >
            Create Bet
          </button>
        </div>
      </div>
    </>
  );
};
