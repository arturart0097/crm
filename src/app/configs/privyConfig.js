import { sepolia } from "viem/chains";

import logo from "@/assets/icons/logo.svg";

export const privyClientConfig = {
  embeddedWallets: {
    createOnLogin: "off",
  },
  // supportedChains: [sepolia],
  loginMethods: ["wallet", "email", "google"],
  appearance: {
    showWalletLoginFirst: true,
    theme: "dark",
    accentColor: "#ba83ff",
    logo: logo,
  },
};

export const privyEnvConfig = {
  appId: import.meta.env.VITE_PRIVY_APP_ID,
  appSecret: import.meta.env.VITE_PRIVY_APP_SECRET,
};
