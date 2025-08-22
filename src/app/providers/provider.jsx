import { PrivyProvider } from "@privy-io/react-auth";

import { privyClientConfig } from "../configs/privyConfig";

export default function Provider({ children }) {
  const appId = import.meta.env.VITE_PRIVY_APP_ID;
  return (
    <PrivyProvider appId={appId} config={privyClientConfig}>
      {children}
    </PrivyProvider>
  );
}
