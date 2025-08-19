import { Actions } from "@/components/UI/Actions";

import "./style.css";

export const Admin = ({ cover, name, createdAt }) => {
  return (
    <div className="admin-game">
      <img src={cover} alt="game" />

      <div className="admin-game-info">
        <p>{name || ""}</p>
      </div>

      <div className="admin-game-info">
        <p>{createdAt || ""}</p>
      </div>

      <div className="admin-game-info">
        <Actions
          onEdit={() => console.log("edit")}
          onDelete={() => console.log("delete")}
        />
      </div>
    </div>
  );
};
