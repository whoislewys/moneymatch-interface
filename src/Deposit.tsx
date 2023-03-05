import { ethers } from 'ethers';
import { useMemo } from 'react';
import {
  Address,
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { Escrow__factory } from '../types/ethers-contracts/factories/contracts/Escrow__factory';
import {
  MoneyMatchButton,
  PlayerBox,
  Players,
  PlayerSeparatorContainer,
} from './App.css';
import { LoadingRipple } from './LoadingRipple';
import TextInput from './TextInput';

export const Deposit = ({
  escrowAddress,
  isP1Active,
  p1ConnectCode,
  p1Address,
  player1HasDeposited,
  p2ConnectCode,
  p2Address,
  player2HasDeposited,
  betAmountStr,
}: {
  escrowAddress: Address;
  isP1Active: boolean;
  p1ConnectCode: string;
  p1Address: Address;
  player1HasDeposited: boolean;
  p2ConnectCode: string;
  p2Address: Address;
  player2HasDeposited: boolean;
  betAmountStr: string;
}) => {
  const { address } = useAccount();

  const { config } = usePrepareContractWrite({
    address: escrowAddress,
    abi: Escrow__factory.abi,
    functionName: 'deposit',
    args: [address ?? ethers.constants.AddressZero],
    overrides: {
      value: ethers.utils.parseEther(betAmountStr),
    },
  });
  const { data, write, isLoading: isWriteLoading } = useContractWrite(config);
  const { isLoading: isWaitLoading } = useWaitForTransaction({
    hash: data?.hash,
  });
  const isLoading = useMemo(() => {
    return isWriteLoading || isWaitLoading;
  }, [isWriteLoading, isWaitLoading]);

  const getButtonContents = (playerHasDeposited: boolean) => {
    if (playerHasDeposited) {
      return 'Deposited';
    } else if (isLoading) {
      return <LoadingRipple />;
    } else {
      return 'Deposit';
    }
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: '2rem',
        }}
      >
        <h3>Deposit your ETH!</h3>
      </div>

      <div className={Players}>
        <div className={PlayerBox}>
          <h3 style={{ fontSize: '1.5rem', textDecoration: 'underline' }}>
            Your Details
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
            <label style={{fontSize: '1.2rem'}}>Connect Code</label>
            <TextInput
              value={p1ConnectCode}
              disabled
              onChange={() => console.log()}
            />

            <label style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Wallet Address</label>
            <TextInput
              disabled
              value={p1Address}
              onChange={() => console.log()}
            />

            <label style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Bet Amount</label>
            <TextInput
              disabled
              value={`Ξ ${betAmountStr}`}
              onChange={() => console.log()}
            />
          </div>
          {/*TODO: add loading state to button */}
          <button
            className={MoneyMatchButton}
            style={{
              marginTop: '2rem',
              alignSelf: 'center',
              width: '15.5rem',
            }}
            disabled={!write || !isP1Active || player1HasDeposited || isLoading}
            onClick={() => {
              write?.();
            }}
          >
            {getButtonContents(player1HasDeposited)}
          </button>
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
            Opponent's Details
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
              disabled
              onChange={() => console.log()}
            />

            <label style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
              Wallet Address
            </label>
            <TextInput
              disabled
              value={p2Address}
              onChange={() => console.log()}
            />

            <label style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Bet Amount</label>
            <TextInput
              disabled
              value={`Ξ ${betAmountStr}`}
              onChange={() => console.log()}
            />
          </div>
          {/*TODO: add loading state to button */}
          <button
            className={MoneyMatchButton}
            style={{
              marginTop: '2rem',
              alignSelf: 'center',
              width: '15.5rem',
            }}
            disabled={!write || isP1Active || player2HasDeposited || isLoading}
            onClick={() => {
              write?.();
            }}
          >
            {getButtonContents(player2HasDeposited)}
          </button>
        </div>
      </div>
    </>
  );
};
