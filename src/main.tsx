import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { WagmiConfig } from "wagmi";
import { App } from "./App";
import { chains, client } from "./wagmi";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 5000,
      }}
    />
    <WagmiConfig client={client}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);
