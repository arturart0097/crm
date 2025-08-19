import add from "@/assets/icons/add.svg";

import { Button } from "../Button";

export const ButtonAdd = ({ setIsOpen }) => {
  return (
    <Button
      style={{
        width: 374,
        position: "fixed",
        top: "90%",
        left: "90%",
        transform: "translate(-60%, 0%)",
        gap: 8,
      }}
      onClick={() => setIsOpen(true)}
    >
      Add Admin <img src={add} alt="add" />
    </Button>
  );
};
