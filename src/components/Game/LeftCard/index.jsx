import { useState } from "react";

import { patchGameApprove } from "@/api/patchGameApprove";
import { usePrivy } from "@privy-io/react-auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/UI/Button";
import { Modal } from "@/components/UI/Modal";

import gameDone from "@/assets/icons/gameDone.svg";
import gameUnDone from "@/assets/icons/gameUnDone.svg";

import "./style.css";

export const LeftCard = ({ game }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState("");
  const { getAccessToken } = usePrivy();
  const queryClient = useQueryClient();

  const approveMutation = useMutation({
    mutationFn: patchGameApprove(getAccessToken, {
      game_id: game.id,
      approval: "approved",
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["approved-projects"] });
      queryClient.invalidateQueries({ queryKey: ["disapproved-projects"] });
    },
    onError: (error) => {
      console.error("Failed to approve game:", error);
    },
  });

  const disapproveMutation = useMutation({
    mutationFn: patchGameApprove(getAccessToken, {
      game_id: game.id,
      approval: "rejected",
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["approved-projects"] });
      queryClient.invalidateQueries({ queryKey: ["disapproved-projects"] });
      setIsOpen(false);
      setComment("");
    },
    onError: (error) => {
      console.error("Failed to disapprove game:", error);
    },
  });

  const handleApprove = () => {
    approveMutation.mutate();
  };

  const sendCommentHandler = () => {
    if (comment.trim()) {
      disapproveMutation.mutate();
    }
  };

  function open() {
    setIsOpen(true);
  }

  function close() {
    if (!approveMutation.isPending && !disapproveMutation.isPending) {
      setIsOpen(false);
    }
  }

  return (
    <>
      <div className="left-card">
        <div className="field">
          <p className="field-title">Name</p>
          <p className="field-value">{game.title}</p>
        </div>

        <div className="field">
          <p className="field-title">AI Code Generation Model</p>
          <p className="field-value">{game.ai_model}</p>
        </div>

        {game.details ? (
          <div />
        ) : (
          <div className="field">
            <p className="field-title">Prompt</p>
            <p className="field-description">
              {!game.details.prompt ? "no prompt" : game.details.prompt}
            </p>
          </div>
        )}

        <div className="field">
          <p className="field-title">Integrate with GameGPT</p>
          <ul className="integrations">
            <li className="integration-item">
              <div className="integration-left">
                <img
                  src={game.integrate.integrate ? gameDone : gameUnDone}
                  alt={game.integrate.integrate ? "done" : "not done"}
                />
                <span className="integration-label">
                  Ready Check (ready event)
                </span>
              </div>
            </li>
            <li className="integration-item">
              <div className="integration-left">
                <img
                  src={game.integrate.gameOver ? gameDone : gameUnDone}
                  alt={game.integrate.gameOver ? "done" : "not done"}
                />
                <span className="integration-label">
                  Score Reported (game over event)
                </span>
              </div>
            </li>
            <li className="integration-item">
              <div className="integration-left">
                <img
                  src={game.integrate.playAgain ? gameDone : gameUnDone}
                  alt={game.integrate.playAgain ? "done" : "not done"}
                />
                <span className="integration-label">
                  Play again implemented (play again handler)
                </span>
              </div>
            </li>
            <li className="integration-item">
              <div className="integration-left">
                <img
                  src={game.integrate.wagerHandler ? gameDone : gameUnDone}
                  alt={game.integrate.wagerHandler ? "done" : "not done"}
                />
                <span className="integration-label">
                  Wagering implemented (wager handler)
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div className="actions">
          <Button
            style={{ width: 374 }}
            onClick={handleApprove}
            disabled={approveMutation.isPending}
          >
            {approveMutation.isPending ? "Approving..." : "Approve"}
          </Button>
          <button
            className="disapprove"
            onClick={open}
            disabled={disapproveMutation.isPending}
          >
            {disapproveMutation.isPending ? "Disapproving..." : "Disapprove"}
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
          disabled={disapproveMutation.isPending}
        >
          {disapproveMutation.isPending ? "Sending..." : "Send"}
        </Button>
        <button className="modal-close" type="button" onClick={close}>
          Close
        </button>
      </Modal>
    </>
  );
};
