import { Button } from "@/components/UI/Button";
import { Modal } from "@/components/UI/Modal";

export const AddModal = ({
  onHandleAdd,
  isOpen,
  close,
  setName,
  setRole,
  setGame,
  name,
  role,
  game,
}) => {
  const gameOptions = ["Game 1", "Game 2", "Game 3"];

  return (
    <Modal isOpen={isOpen} close={close}>
      <input
        className="modal-input"
        placeholder="Name User"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="modal-input"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <div className="modal-select-wrapper">
        <select
          className="modal-select"
          value={game}
          onChange={(e) => setGame(e.target.value)}
        >
          <option value="" disabled>
            Game
          </option>
          {gameOptions.map((g) => (
            <option value={g} key={g}>
              {g}
            </option>
          ))}
        </select>
        <span className="modal-caret">▾</span>
      </div>

      <Button style={{ width: 374 }} type="button" onClick={onHandleAdd}>
        Add
      </Button>
      <button className="modal-close" type="button" onClick={close}>
        Close
      </button>
    </Modal>
  );
};
