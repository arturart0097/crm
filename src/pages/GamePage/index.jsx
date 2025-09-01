import { getProjectsQueryOptions } from "@/api/projectsQuery";
import { mockGames } from "@/mocks/games";
import { usePrivy } from "@privy-io/react-auth";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";

import { LeftCard } from "@/components/Game/LeftCard";
import { RightPanel } from "@/components/Game/RightPanel";

import backIcon from "@/assets/icons/back.svg";

import "./style.css";

export default function GamePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getAccessToken, authenticated } = usePrivy();

  const { data: listGames, isLoading } = useQuery(
    getProjectsQueryOptions(getAccessToken, authenticated),
  );

  const currentGame = listGames?.find((game) => game.id == id);

  return (
    <div className="game-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <img src={backIcon} alt="back" />
      </button>

      <div className="game-grid">
        <LeftCard game={currentGame} />
        <RightPanel code={currentGame?.code} assets={currentGame?.assets} />
      </div>
    </div>
  );
}
