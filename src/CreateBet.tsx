import { ethers } from 'ethers';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';
import type { Address } from 'wagmi';
import {
  useAccount,
  useContractWrite,
  useWaitForTransaction,
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
import { LoadingRipple } from './Ripple200';

export const CreateBet = () => {
  const ARBITER_ADDRESS = '0x58438bdd4579f412279dc5bc4763dfe740a7a91f';

  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();

  // Player 1
  const url = useMemo(() => {
    return new URL(window.location.href);
  }, []);
  const params = useMemo(() => {
    return new URLSearchParams(url.search);
  }, [url]);
  const [isP1Active, setIsP1Active] = useState(
    params.get('isP1Active') === 'true' || params.get('isP1Active') === null
  );
  const [p1ConnectCode, setP1ConnectCode] = useState(
    params.get('p1ConnectCode') ?? ''
  );
  const [p1Address, setP1Address] = useState<Address>(
    (params.get('p1Address') as Address) ?? ethers.constants.AddressZero
  );
  // Player 2
  const [isP2Active, setIsP2Active] = useState(
    params.get('isP1Active') === 'false'
  );
  const [p2ConnectCode, setP2ConnectCode] = useState('');
  const [p2Address, setP2Address] = useState<Address>(
    ethers.constants.AddressZero
  );
  const [betAmountStr, setBetAmountStr] = useState('0.1');

  // set address and connect code depending on active player
  useEffect(() => {
    if (isP1Active && address) {
      setP1Address(address);
    } else if (!isP1Active && address) {
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
  const { data, write, isLoading: isWriteLoading } = useContractWrite(config);
  const { isLoading: isWaitLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => {
      toast.success('Bet created!');
    },
  });
  const isLoading = useMemo(() => {
    return isWriteLoading || isWaitLoading;
  }, [isWriteLoading, isWaitLoading]);


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
      </div>

      <div className={Players}>
        <div className={PlayerBox}>
          <h3>Your Details</h3>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: '1rem',
              width: '12rem',
            }}
          >
            <label>Connect Code</label>
            <input
              value={p1ConnectCode}
              disabled={isP2Active}
              onChange={(e) => setP1ConnectCode(e.target.value)}
            />

            <label style={{ marginTop: '1rem' }}>Wallet Address</label>
            <input disabled value={p1Address} />

            <label style={{ marginTop: '1rem' }}>Bet Amount</label>
            <input value={'Ξ 0.1'} disabled />
          </div>
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
          <h3>Opponent's Details</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: '1rem',
              width: '12rem',
            }}
          >
            <label>Connect Code</label>
            <input
              value={p2ConnectCode}
              disabled={isP1Active}
              onChange={(e) => setP2ConnectCode(e.target.value)}
            />

            <label style={{ marginTop: '1rem' }}>Wallet Address</label>
            <input disabled value={p2Address} />

            <label style={{ marginTop: '1rem' }}>Bet Amount</label>
            <input value={'Ξ 0.1'} disabled />
          </div>
        </div>
      </div>

      {
        // Copy link button is only needed when p1 is active
        isP1Active ? (
          <button
            style={{
              marginTop: '4rem',
              width: '12rem',
              alignSelf: 'center',
              height: '1.75rem',
            }}
            onClick={() => {
              const url = new URL(window.location.origin);
              const params = new URLSearchParams(url.search);
              params.append('isP1Active', 'false');
              params.append('p1ConnectCode', p1ConnectCode);
              params.append('p1Address', p1Address);
              const new_url = new URL(`${url.origin}${url.pathname}?${params}`);

              console.log('Bet Link', new_url.href);
              navigator.clipboard.writeText(new_url.href);
              toast.success('Bet link copied!');
            }}
          >
            Copy Bet Link
          </button>
        ) : null
      }

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
          <p>
            Bet Amount Str: {ethers.utils.parseEther(betAmountStr).toString()}
          </p>
          <p>P2 Connect Code: {p2ConnectCode}</p>
          <p>P2 Address: {p2Address}</p>
          <p>
            Bet Amount Str: {ethers.utils.parseEther(betAmountStr).toString()}
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '4rem',
          }}
        >
          <button
            disabled={
              !write ||
              isLoading ||
              p1Address === ethers.constants.AddressZero ||
              p1ConnectCode === '' ||
              p2Address === ethers.constants.AddressZero ||
              p2ConnectCode === ''
            }
            onClick={() => {
              write?.();
            }}
            style={{
              width: '12rem',
              height: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isLoading ? <LoadingRipple /> : 'Create Bet'}
          </button>
        </div>
        <div style={{ marginBottom: '4rem' }} />
      </div>
    </>
  );
};
