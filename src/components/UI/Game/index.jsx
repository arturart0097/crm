import { useNavigate } from "react-router";

import done from "@/assets/icons/done.svg";

import "./style.css";

export const Game = ({ cover, name, aiModel, integrate, details, id }) => {
  const navigate = useNavigate();

  return (
    <div className="game" onClick={() => navigate(`/listgames/game/${id}`)}>
      <img src={cover} alt="game" />
      <div className="game-info">
        <p>Name</p>
        <p>{name || ""}</p>
      </div>
      <div className="game-info">
        <p>AI model</p>
        <p>{aiModel || ""}</p>
      </div>
      <div className="game-info">
        <p>Integrate</p>
        <div className="game-info-dot">
          <p>{integrate ? "Check" : "Check"}</p>
          <img src={done} alt="done" />
        </div>
      </div>
      <div className="game-info">
        <p>Details</p>
        <div className="game-info-dot">
          <p>{details ? "Done" : "Done"}</p>
          <img src={done} alt="done" />
        </div>
      </div>
    </div>
  );
};
