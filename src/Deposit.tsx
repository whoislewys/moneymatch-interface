import { ethers } from 'ethers';
import { useMemo } from 'react';
import {
  Address,
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useSigner,
  useWaitForTransaction,
} from 'wagmi';
import { Escrow__factory } from '../types/ethers-contracts/factories/contracts/Escrow__factory';
import { PlayerBox, Players, PlayerSeparatorContainer } from './App.css';

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
            <input value={p1ConnectCode} disabled />

            <label style={{ marginTop: '1rem' }}>Wallet Address</label>
            <input disabled value={p1Address} />

            <label style={{ marginTop: '1rem' }}>Bet Amount</label>
            <input disabled value={'Ξ 0.1'} />
          </div>
          {/*TODO: add loading state to button */}
          <button
            style={{
              marginTop: '1rem',
              width: '12rem',
              alignSelf: 'center',
              height: '1.75rem',
            }}
            disabled={!write || !isP1Active || player1HasDeposited}

            onClick={() => {
              write?.();
            }}
          >
            {player1HasDeposited ? 'Deposited' : 'Deposit'}
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
            <input value={p2ConnectCode} disabled />

            <label style={{ marginTop: '1rem' }}>Wallet Address</label>
            <input disabled value={p2Address} />

            <label style={{ marginTop: '1rem' }}>Bet Amount</label>
            <input disabled value={'Ξ 0.1'} />
          </div>
          {/*TODO: add loading state to button */}
          <button
            style={{
              marginTop: '1rem',
              width: '12rem',
              alignSelf: 'center',
              height: '1.75rem',
            }}
            disabled={!write || isP1Active || player2HasDeposited}
            onClick={() => {
              write?.();
            }}
          >
            {player2HasDeposited ? 'Deposited' : 'Deposit'}
          </button>
        </div>
      </div>
    </>
  );
};
