import { mockGames } from "@/mocks/games";

import { Game } from "@/components/UI/Game";

import "./style.css";

export const ListGames = () => {
  return (
    <div>
      <div className="list-title">
        <h2> All Games ({mockGames.length}) </h2>
      </div>

      {mockGames.map((game) => (
        <Game
          cover={game.cover}
          name={game.name}
          aiModel={game.aiModel}
          integrate={game.integrate}
          details={game.details}
          id={game.id}
        />
      ))}
    </div>
  );
};
