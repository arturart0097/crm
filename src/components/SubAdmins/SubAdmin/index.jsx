import { Actions } from "@/components/UI/Actions";

import "./style.css";

export const SubAdmin = ({
  cover,
  name,
  approved,
  rejected,
  lastActivity,
  createdAt,
}) => {
  return (
    <div className="subAdmin-game">
      <img src={cover} alt="game" />

      <div className="subAdmin-game-info">
        <p>{name || ""}</p>
      </div>

      <div className="subAdmin-game-info">
        <p>{approved || ""}</p>
      </div>

      <div className="subAdmin-game-info">
        <p>{rejected || ""}</p>
      </div>

      <div className="subAdmin-game-info">
        <p>{lastActivity || ""}</p>
      </div>

      <div className="subAdmin-game-info">
        <p>{createdAt || ""}</p>
      </div>

      <div className="subAdmin-game-info">
        <Actions
          onEdit={() => console.log("edit")}
          onDelete={() => console.log("delete")}
        />
      </div>
    </div>
  );
};
