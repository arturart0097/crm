import { PrivyProvider } from "@privy-io/react-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { base, sepolia } from "viem/chains";

import { privyClientConfig } from "../configs/privyConfig";

export default function Provider({ children }) {
  const appId = import.meta.env.VITE_PRIVY_APP_ID;
  const queryClient = new QueryClient();
  return (
    <PrivyProvider
      appId={appId}
      config={{
        ...privyClientConfig,
        defaultChain: sepolia,
        supportedChains: [sepolia],
      }}
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </PrivyProvider>
  );
}
