import * as Separator from '@radix-ui/react-separator';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useState} from 'react';
import { toast } from 'react-hot-toast';
import type { Address } from 'wagmi';
import { useContractEvent, useSigner } from 'wagmi';
import { EscrowFactory__factory } from '../types/ethers-contracts/factories/contracts/EscrowFactory__factory';
import { Header, HeaderSeparator, LeftNav, Main, Nav } from './App.css';
import { CreateBet } from './CreateBet';

export function App() {
  const { data: signer } = useSigner();
  const [activeEscrowAddress, setActiveEscrowAddress] = useState<Address>();
  console.log('activeEscrowAddress: ', activeEscrowAddress);

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
      console.log('Escrow created at address: ', escrowAddress);
      setActiveEscrowAddress(escrowAddress);
    },
  });

  const getScreen = () => {
    return (
      <>
        {/* MVP Create Bet Screen. bet amount values hardcoded, p1 fills out his bet copies link, sends it to p2 */}
      <CreateBet />

      { activeEscrowAddress ? (
        <p>active bet addr: ${activeEscrowAddress}</p>
      ) : null
      }

      {/* More advanced Create Bet Screen. for letting two players connect p2p and update bet values in real time */}
      {/* <CreateBetMultiTenant /> */}
      </>
    );
  }

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

      { getScreen() }
    </main>
  );
}
