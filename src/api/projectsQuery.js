export function getProjectsQueryOptions(getAccessToken, enabled) {
  return {
    queryKey: ["projects"],
    enabled,
    queryFn: async () => {
      const bearerToken = await getAccessToken();
      const response = await fetch(
        "https://builder.be.prism.ai/api/projects/all",
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
}
