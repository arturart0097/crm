export const patchGameApprove = (getAccessToken, { game_id, approval }) => {
  return async () => {
    const bearerToken = await getAccessToken();
    const response = await fetch(
      `https://builder.be.prism.ai/api/projects/approval`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          game_id,
          approval: approval,
        }),
      },
    );
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errText}`);
    }
    return response.json();
  };
};
