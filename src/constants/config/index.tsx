import { http, createConfig } from "wagmi";
import { cookieStorage, createStorage } from "wagmi";
import {
  type Chain,
  mainnet,
  sepolia,
  base,
  baseSepolia,
  arbitrum,
  arbitrumSepolia,
  polygon,
  polygonMumbai,
  optimismSepolia,
  optimism,
} from "wagmi/chains";
import { walletConnect, injected, coinbaseWallet } from "wagmi/connectors";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "ETHAbuja",
  description: "ETHAbuja Donation-Dapp",
  url: "https://www.ethabuja.com/",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [
  // mainnet,
  sepolia,
  // base,
  baseSepolia,
  // arbitrum,
  // polygon,
  // polygonMumbai,
  // arbitrumSepolia,
  // optimism,
  // optimismSepolia,
] as [Chain, ...Chain[]];

export const config = createConfig({
  chains,
  transports: {
    // [mainnet.id]: http(),
    [sepolia.id]: http(),
    // [base.id]: http(),
    [baseSepolia.id]: http(),
    // [arbitrum.id]: http(),
    // [arbitrumSepolia.id]: http(),
    // [polygon.id]: http(),
    // [polygonMumbai.id]: http(),
    // [optimism.id]: http(),
    // [optimismSepolia.id]: http(),
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
    }),
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
