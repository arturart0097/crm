import { useEffect, useState } from "react";

import { getApprovedGame } from "@/api/getApprovedGame";
import { getDisapproveGame } from "@/api/getDisapproveGame";
import { getProjectsQueryOptions } from "@/api/projectsQuery";
import { usePrivy } from "@privy-io/react-auth";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";

import { Game } from "@/components/UI/Game";

import "./style.css";

export const ListGames = () => {
  const { getAccessToken, authenticated } = usePrivy();
  const { pathname } = useLocation();
  const [typeGames, setTypeGames] = useState("all");

  const { data: listGames, isLoading } = useQuery(
    getProjectsQueryOptions(getAccessToken, authenticated),
  );

  const { data: listGamesApproved, isLoading: isLoadingApproved } = useQuery(
    getApprovedGame(getAccessToken, authenticated),
  );

  const { data: listGamesDisapproved, isLoading: isLoadingDisapproved } =
    useQuery(getDisapproveGame(getAccessToken, authenticated));

  console.log(listGamesDisapproved);

  useEffect(() => {
    if (pathname === "/approved") {
      setTypeGames("approved");
    } else if (pathname === "/disapproved") {
      setTypeGames("disapproved");
    } else {
      setTypeGames("all");
    }
  }, [pathname]);

  return (
    <div>
      <div className="list-title">
        <h2>
          {typeGames === "all"
            ? `All Games (${listGames?.length || 0})`
            : typeGames === "approved"
              ? `Approved Games (${listGamesApproved?.length || 0})`
              : `Disapproved Games (${listGamesDisapproved?.length || 0})`}
        </h2>
      </div>

      {typeGames === "all"
        ? listGames?.map((game) => (
            <Game
              key={game.id}
              cover={game.thumbnail}
              name={game.title}
              aiModel={game.ai_model}
              integrate={game.integrate.integrate}
              details={game.details}
              id={game.id}
            />
          ))
        : typeGames === "approved"
          ? listGamesApproved?.map((game) => (
              <Game
                key={game.id}
                cover={game.thumbnail}
                name={game.title}
                aiModel={game.ai_model}
                integrate={game.integrate.integrate}
                details={game.details}
                id={game.id}
              />
            ))
          : listGamesDisapproved?.map((game) => (
              <Game
                key={game.id}
                cover={game.thumbnail}
                name={game.title}
                aiModel={game.ai_model}
                integrate={game.integrate.integrate}
                details={game.details}
                id={game.id}
              />
            ))}
    </div>
  );
};
