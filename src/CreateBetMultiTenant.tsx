import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
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

export const CreateBetMultiTenant = () => {
  const ARBITER_ADDRESS = '0x58438bdd4579f412279dc5bc4763dfe740a7a91f';

  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();

  const [eventText, setEventText] = useState<any>();
  // Player 1
  const [isP1Active, setIsP1Active] = useState(true); // active player driven by query params
  const [p1ConnectCode, setP1ConnectCode] = useState('TARC#448');
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
        >
          <p style={{ marginTop: '1rem' }}> Bet Amount: 0.1E </p>
        </div>
      </section>

      <div className={Players}>
        <div className={PlayerBox}>
          <p>Your Connect Code</p>
          <input
            value={p1ConnectCode}
            onChange={(e) => setP1ConnectCode(e.target.value)}
          />

          <p
            style={{
              marginTop: '1rem',
            }}
          >
            Opponent's Connect Code
          </p>
          <input
            value={p2ConnectCode}
            onChange={(e) => setP2ConnectCode(e.target.value)}
          />

          <p
            style={{
              marginTop: '1rem',
            }}
          >Bet Amount</p>
          <input
            value={betAmountStr}
            onChange={(e) => setBetAmountStr(e.target.value)}
          />
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
          <p>
            Opponent
            {/* <p>Account: {isConnected && <Account address={test123Address === null ? undefined : test123Address} />}</p> */}
          </p>
        </div>
      </div>

      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '4rem',
        }}
      >
        <div>
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
      </section>
    </>
  );
};
