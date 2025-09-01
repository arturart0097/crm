import { useNavigate } from "react-router";

import done from "@/assets/icons/done.svg";
import err from "@/assets/icons/err.svg";

import "./style.css";

export const Game = ({ cover, name, aiModel, integrate, details, id }) => {
  const navigate = useNavigate();

  console.log(details, "---1");

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
          <p>{integrate ? "Check" : "No Check"}</p>
          <img
            src={integrate ? done : err}
            alt={integrate ? "done" : "No Check"}
          />
        </div>
      </div>
      {details ? (
        <div />
      ) : (
        <div className="game-info">
          <p>Details</p>
          <div className="game-info-dot">
            <p>{details ? "Done" : "Done"}</p>
            <img src={done} alt="done" />
          </div>
        </div>
      )}
    </div>
  );
};
