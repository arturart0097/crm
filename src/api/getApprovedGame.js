export const getApprovedGame = (getAccessToken, enabled) => {
  return {
    queryKey: ["approved-projects"],
    enabled: Boolean(enabled),
    queryFn: async () => {
      const bearerToken = await getAccessToken();
      const response = await fetch(
        `https://builder.be.prism.ai/api/projects/approved`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            Accept: "application/json",
          },
        },
      );
      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errText}`);
      }
      return response.json();
    },
  };
};
