import type { Chain } from "wagmi";

export const baseGoerli: Chain = {
  id: 84531,
  name: "Base Goerli",
  network: "basegoerli",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://goerli.base.org"],
      webSocket: ["wss://goerli.base.org/ws"],
    },
    public: {
      http: ["https://goerli.base.org"],
      webSocket: ["wss://goerli.base.org/ws"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Base Goerli Explorer",
      url: "https://base-goerli.blockscout.com/"
    },
    default: {
      name: "Base Goerli Explorer",
      url: "https://base-goerli.blockscout.com/"
    },
  },
  testnet: true,
};
