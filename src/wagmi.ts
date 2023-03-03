import { configureChains, createClient } from 'wagmi';
import { localhost, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Web3AuthConnectorInstance from "./Web3AuthConnectorInstance";

console.log(import.meta.env?.MODE);
const { chains, provider, webSocketProvider } = configureChains(
  [
    ...(import.meta.env?.MODE === 'development'
      ? [localhost]
      : [polygonMumbai]),
  ],
  [
    alchemyProvider({ apiKey: import.meta.env?.VITE_ALCHEMY_API_KEY }),
    publicProvider(),
//
  ]
);

export const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

export { chains };
