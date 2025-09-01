import { useEffect } from "react";

import { getProjectsQueryOptions } from "@/api/projectsQuery";
import { usePrivy } from "@privy-io/react-auth";
import { useQuery } from "@tanstack/react-query";

import { TitleHome } from "@/components/Home/TitleHome";

export default function HomePage() {
  // const BASE_URL = "https://builder.be.prism.ai/api";

  // async function getPreview(id) {
  //   const token = await getAccessToken();

  //   const res = await fetch(`${BASE_URL}/preview/${id}`, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   if (!res.ok) {
  //     const errText = await res.text();
  //     throw new Error(`HTTP ${res.status}: ${errText}`);
  //   }

  //   const data = await res.json();
  //   console.log("Game preview:", data);
  // }

  // getPreview("cmdge7xc700bel10mvfo9mqih").catch(console.error);

  return (
    <>
      <TitleHome />
    </>
  );
}
