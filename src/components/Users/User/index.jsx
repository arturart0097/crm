import { Actions } from "@/components/UI/Actions";

import done from "@/assets/icons/done.svg";
import err from "@/assets/icons/err.svg";

import "./style.css";

export const User = ({
  cover,
  name,
  game,
  status,
  lastActivity,
  createdAt,
}) => {
  return (
    <div className="user-game">
      <img src={cover} alt="game" />

      <div className="user-game-info">
        <p>{name || ""}</p>
      </div>

      <div className="user-game-info">
        <p>{game || ""}</p>
      </div>

      <div className="user-game-info">
        <p>{createdAt || ""}</p>
      </div>

      <div className="user-game-info-dot">
        <p>{status.ok ? "Approved" : "Disapproved"}</p>
        <img
          className="status-icon"
          src={status.ok ? done : err}
          alt={status.ok ? "approved" : "disapproved"}
        />
      </div>

      <div className="user-game-info">
        <p>{lastActivity || ""}</p>
      </div>
    </div>
  );
};
