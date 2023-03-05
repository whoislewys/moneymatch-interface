// Web3Auth Libraries
import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { Web3Auth } from "@web3auth/modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { Chain } from "wagmi";

export default function Web3AuthConnectorInstance(chains: Chain[]) {
  // Create Web3Auth Instance
  const name = "Money Match";
  const iconUrl = "https://web3auth.io/docs/contents/logo-ethereum.png";
  const clientId = import.meta.env?.VITE_WEB3AUTH_CLIENT_ID;
  // const activeChainId = "0x13881"; // Mumbai
  const activeChainId = '0x14A33'; // base
  const web3AuthInstance = new Web3Auth({
    clientId: clientId,
    chainConfig: {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      chainId: activeChainId,
    },
  });

  // Add openlogin adapter for customisations
  const openloginAdapterInstance = new OpenloginAdapter({
    adapterSettings: {
      network: "testnet",
      whiteLabel: {
        name: "Money Match",
        logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
        logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
        defaultLanguage: "en",
        dark: true, // whether to enable dark mode. defaultValue: false
      },
    },
  });
  web3AuthInstance.configureAdapter(openloginAdapterInstance);

  return new Web3AuthConnector({
    chains: chains,
    options: {
      web3AuthInstance,
    },
  });
}
