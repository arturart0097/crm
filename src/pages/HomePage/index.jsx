import { useEffect } from "react";

import { usePrivy } from "@privy-io/react-auth";

import { TitleHome } from "@/components/Home/TitleHome";

export default function HomePage() {
  const { login, user, authenticated, getAccessToken } = usePrivy();

  async function fetchProjects(bearerToken) {
    const response = await fetch("https://builder.be.prism.ai/api/projects", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errText}`);
    }

    return response.json();
  }

  useEffect(() => {
    const run = async () => {
      if (!authenticated) return;
      try {
        const token = await getAccessToken();
        const data = await fetchProjects(token);
        console.log("/projects:", data);
      } catch (err) {
        console.error("Failed to fetch /projects:", err);
      }
    };
    run();
  }, [authenticated, getAccessToken]);

  const fetchtest = async () => {
    const response = await fetch("https://builder.be.prism.ai/cors-check", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errText}`);
    }

    const data = await response.json();
    console.log(data);

    return data;
  };

  useEffect(() => {
    fetchtest().catch((err) => {
      console.error("cors_check request failed:", err);
    });
  }, []);

  const BASE_URL = "https://builder.be.prism.ai/api";

  async function getPreview(id) {
    const token = await getAccessToken();

    const res = await fetch(`${BASE_URL}/preview/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errText}`);
    }

    const data = await res.json();
    console.log("Game preview:", data);
  }

  getPreview("12345").catch(console.error);

  return (
    <>
      <TitleHome />
      {authenticated ? (
        <p>Вітаю, {user?.email || user?.wallet?.address}!</p>
      ) : (
        <button onClick={login}>Увійти</button>
      )}
    </>
  );
}
