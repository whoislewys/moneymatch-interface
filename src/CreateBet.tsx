import { ethers } from 'ethers';
import { useMemo } from 'react';
import { toast } from 'react-hot-toast';
import TextInput from './TextInput';
import type { Address } from 'wagmi';
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { EscrowFactory__factory } from '../types/ethers-contracts/factories/contracts/EscrowFactory__factory';
import {
  MoneyMatchButton,
  PlayerBox,
  Players,
  PlayerSeparatorContainer,
  Section,
} from './App.css';
import { LoadingRipple } from './Ripple200';

export const CreateBet = ({
  isP1Active,
  p1ConnectCode,
  setP1ConnectCode,
  p1Address,
  p2ConnectCode,
  setP2ConnectCode,
  p2Address,
  betAmountStr,
}: {
  isP1Active: boolean;
  p1ConnectCode: string;
  setP1ConnectCode: (p1ConnectCode: string) => void;
  p1Address: Address;
  p2ConnectCode: string;
  setP2ConnectCode: (p2ConnectCode: string) => void;
  p2Address: Address;
  betAmountStr: string;
}) => {
  // dev
  const ARBITER_ADDRESS = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
  // prod
  // const ARBITER_ADDRESS = '0x58438bdd4579f412279dc5bc4763dfe740a7a91f';

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
      // toast.success('Bet created!');
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
        <p style={{ fontSize: '2rem', textAlign: 'center' }}>$$ MoneyMatch Instructions $$</p>
        <ol style={{ fontSize: '1.2rem' }}>
          <li>Connect your wallet (at the top right).</li>
          <li>Fill out your connect code.</li>
          <li>
            Click the "Copy Bet Link" button and send the link to your opponent.
          </li>
        </ol>
      </div>

      <div className={Players}>
        <div className={PlayerBox}>
          <h3 style={{ fontSize: '1.5rem', textDecoration: 'underline' }}>Your Details</h3>

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
            <label style={{ fontSize: '1.2rem' }}>Connect Code</label>
            <TextInput
              value={p1ConnectCode}
              disabled={!isP1Active}
              onChange={(e) => {
                setP1ConnectCode(e.target.value);
              }}
            />

            <label style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Wallet Address</label>
            <TextInput 
              onChange={(e) => {
                setP1ConnectCode(e.target.value);
              }}
              disabled value={p1Address} 
            />

            <label style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Bet Amount</label>
            <TextInput
             onChange={(e) => {
              setP1ConnectCode(e.target.value);
            }}
              value={'Ξ 0.1'} disabled 
            />
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
          <h3 style={{ fontSize: '1.5rem', textDecoration: 'underline' }}>Opponent's Details</h3>
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
            <label style={{ fontSize: '1.2rem' }}>Connect Code</label>
            <TextInput
              value={p2ConnectCode}
              disabled={isP1Active}
              onChange={(e) => setP2ConnectCode(e.target.value)}
            />

            <label style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Wallet Address</label>
            <TextInput
              onChange={(e) => setP2ConnectCode(e.target.value)}
              disabled value={p2Address} 
            />

            <label style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Bet Amount</label>
            <TextInput 
              onChange={(e) => setP2ConnectCode(e.target.value)}
              value={'Ξ 0.1'} disabled 
            />
          </div>
        </div>
      </div>

      {
        // Copy link button is only needed when p1 is active
        isP1Active ? (
          <button
            className={MoneyMatchButton}
            style={{
              marginTop: '4rem',
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
          alignSelf: 'center',
          marginTop: '4rem',
          width: '12rem',
        }}
      >
        <button
          className={MoneyMatchButton}
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
        >
          {isLoading ? <LoadingRipple /> : 'Create Bet'}
        </button>
      </div>
    </>
  );
};
