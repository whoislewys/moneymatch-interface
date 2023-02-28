import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createClient } from 'wagmi'
import { localhost, polygonMumbai } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

console.log(import.meta.env?.MODE)
const { chains, provider, webSocketProvider } = configureChains(
  [...(import.meta.env?.MODE === 'development' ? [localhost] : []), polygonMumbai],
  [
    publicProvider(),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'My wagmi + RainbowKit App',
  chains,
})

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export { chains }
