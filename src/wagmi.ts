import { configureChains, createClient } from 'wagmi';
import { localhost, polygonMumbai } from 'wagmi/chains';
// import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { baseGoerli } from './baseChain';
import Web3AuthConnectorInstance from './Web3AuthConnectorInstance';

const chain = 
  (import.meta.env?.MODE === 'development') ?
  localhost :
  (import.meta.env?.VITE_USE_MUMBAI === 'true') ?
  polygonMumbai :
  baseGoerli

const rpcProvider = (import.meta.env?.VITE_USE_MUMBAI === 'true') ?
  jsonRpcProvider({ rpc: () => ({ http: `http://127.0.0.1:3000` }) }) :
  publicProvider()


console.log(import.meta.env?.MODE);
const { chains, provider, webSocketProvider } = configureChains(
  [chain],
  [
    // alchemyProvider({ apiKey: import.meta.env?.VITE_ALCHEMY_API_KEY }),
    rpcProvider,
    //
  ]
);


export const client = createClient({
  autoConnect: true,
  connectors: [Web3AuthConnectorInstance(chains)],
  provider,
  webSocketProvider,
});

export { chains };
