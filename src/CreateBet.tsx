import { ethers } from 'ethers';
import { useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';
import TextInput from './TextInput';
import { Address, useAccount } from 'wagmi';
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { EscrowFactory__factory } from '../types/ethers-contracts/factories/contracts/EscrowFactory__factory';
import {
  ChevronUpAnimation,
  ChevronDownAnimation,
  InstructionsCard,
  MoneyMatchButton,
  PlayerBox,
  Players,
  PlayerSeparatorContainer,
  Section,
} from './App.css';
import { LoadingRipple } from './LoadingRipple';
import { ChevronDown } from './ChevronDown';

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
  // if dev (hh 0 address)
  // prod (tarc dev wallet)
  const ARBITER_ADDRESS =
    import.meta.env?.MODE === 'development'
      ? '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
      : '0x7643c4F21661691fb851AfedaF627695672C9fac';

  const [areInstructionsOpen, setAreInstructionsOpen] = useState(false);

  const { address } = useAccount();

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
    enabled: !(
      p1Address === ethers.constants.AddressZero ||
      p1ConnectCode === '' ||
      p2Address === ethers.constants.AddressZero ||
      p2ConnectCode === ''
    ),
  });
  const { data, write, isLoading: isWriteLoading } = useContractWrite(config);
  const { isLoading: isWaitLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => {
      console.log('Bet created');
      console.log('player1Id: ', p1ConnectCode);
      console.log('player2Id: ', p2ConnectCode);
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

      <div className={InstructionsCard}>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <p
              style={{
                fontSize: '2rem',
                fontWeight: '600',
                textAlign: 'left',
                marginLeft: '.5rem',
              }}
            >
              Instructions
            </p>
            <div
              onClick={() => setAreInstructionsOpen(!areInstructionsOpen)}
              style={{
                border: 'none',
                background: 'none',
                marginTop: '-2px',
                transition: 'all 0.5s',
              }}
              className={areInstructionsOpen ? ChevronUpAnimation: ChevronDownAnimation}
            >
              <ChevronDown />
            </div>
          </div>
          <div
            style={{
              display: areInstructionsOpen ? '' : 'none',
            }}
          >
            <ol style={{ fontSize: '1.25rem' }}>
              <li>Connect your wallet (at the top right).</li>
              <li style={{ marginTop: '.75rem' }}>
                Fill out your connect code.
              </li>
              <li style={{ marginTop: '.75rem' }}>
                Click the "Copy Bet Link" button and send the link to your
                opponent.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className={Players}>
        <div className={PlayerBox}>
          <h3 style={{ fontSize: '1.5rem', textDecoration: 'underline' }}>
            {isP1Active ? 'Your Details' : "Opponent's Details"}
          </h3>

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
            <label style={{ fontSize: '1.2rem' }}>Connect Code</label>
            <TextInput
              value={p1ConnectCode}
              disabled={!isP1Active}
              onChange={(e: any) => {
                setP1ConnectCode(e.target.value);
              }}
            />

            <label style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
              Wallet Address
            </label>
            <TextInput
              onChange={(e: any) => {
                setP1ConnectCode(e.target.value);
              }}
              disabled
              value={p1Address}
            />

            <label style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
              Bet Amount
            </label>
            <TextInput
              onChange={(e: any) => {
                setP1ConnectCode(e.target.value);
              }}
              value={`Ξ ${betAmountStr}`}
              disabled
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
          <h3 style={{ fontSize: '1.5rem', textDecoration: 'underline' }}>
            {isP1Active ? "Opponent's Details" : 'Your Details'}
          </h3>
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
            <label style={{ fontSize: '1.2rem' }}>Connect Code</label>
            <TextInput
              value={p2ConnectCode}
              disabled={isP1Active}
              onChange={(e: any) => setP2ConnectCode(e.target.value)}
            />

            <label style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
              Wallet Address
            </label>
            <TextInput
              onChange={(e: any) => setP2ConnectCode(e.target.value)}
              disabled
              value={p2Address}
            />

            <label style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
              Bet Amount
            </label>
            <TextInput
              onChange={(e: any) => setP2ConnectCode(e.target.value)}
              value={`Ξ ${betAmountStr}`}
              disabled
            />
          </div>
        </div>
      </div>

      {
        // Copy link button is only needed when p1 is active
        isP1Active ? (
          <button
            className={MoneyMatchButton}
            // disabled={!address}
            disabled={false}
            style={{
              marginTop: '2rem',
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
          marginTop: '2.5rem',
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
