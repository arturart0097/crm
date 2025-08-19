import deleteIcon from "@/assets/icons/delete.svg";
import editIcon from "@/assets/icons/edit.svg";

import "./style.css";

export const Actions = ({ onEdit, onDelete }) => {
  return (
    <div className="actions-btn">
      <button onClick={onEdit}>
        <img src={editIcon} alt="edit" />
      </button>
      <button onClick={onDelete}>
        <img src={deleteIcon} alt="delete" />
      </button>
    </div>
  );
};
