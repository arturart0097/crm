export const getDisapproveGame = (getAccessToken, enabled) => {
  return {
    queryKey: ["disapproved-projects"],
    enabled: Boolean(enabled),
    queryFn: async () => {
      const bearerToken = await getAccessToken();
      const response = await fetch(
        `https://builder.be.prism.ai/api/projects/rejected`,
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
