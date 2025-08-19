import { useState } from "react";

import { Button } from "@/components/UI/Button";
import { Modal } from "@/components/UI/Modal";

import gameDone from "@/assets/icons/gameDone.svg";
import gameUnDone from "@/assets/icons/gameUnDone.svg";

import "./style.css";

export const LeftCard = ({ game }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState("");

  const entries = Object.entries(game.integrations);

  const sendCommentHandler = () => {
    // use current comment
    console.log("send comment:", comment);
    setIsOpen(false);
    setComment("");
  };

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="left-card">
        <div className="field">
          <p className="field-title">Name</p>
          <p className="field-value">{game.name}</p>
        </div>

        <div className="field">
          <p className="field-title">AI Code Generation Model</p>
          <p className="field-value">{game.aiModel}</p>
        </div>

        <div className="field">
          <p className="field-title">Prompt</p>
          <p className="field-description">{game.prompt}</p>
        </div>

        <div className="field">
          <p className="field-title">Integrate with GameGPT</p>
          <ul className="integrations">
            {entries.map(([k, item]) => (
              <li key={k} className="integration-item">
                <div className="integration-left">
                  <img
                    src={item.done ? gameDone : gameUnDone}
                    alt={item.done ? "done" : "not done"}
                  />
                  <span className="integration-label">
                    {item.label} ({item.note})
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="actions">
          <Button style={{ width: 374 }}>Approve</Button>
          <button className="disapprove" onClick={open}>
            Disapprove
          </button>
        </div>

        <div className="card-gradient" />
      </div>

      <Modal isOpen={isOpen} close={close}>
        <textarea
          className="modal-textarea"
          placeholder="Write a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          style={{ width: 374 }}
          type="button"
          onClick={sendCommentHandler}
        >
          Send
        </Button>
        <button className="modal-close" type="button" onClick={close}>
          Close
        </button>
      </Modal>
    </>
  );
};
