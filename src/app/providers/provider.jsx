import { PrivyProvider } from "@privy-io/react-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { privyClientConfig } from "../configs/privyConfig";

export default function Provider({ children }) {
  const appId = import.meta.env.VITE_PRIVY_APP_ID;
  const queryClient = new QueryClient();
  return (
    <PrivyProvider appId={appId} config={privyClientConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </PrivyProvider>
  );
}
