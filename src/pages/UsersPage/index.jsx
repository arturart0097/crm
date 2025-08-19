import { useState } from "react";

import { mockUsers } from "@/mocks/users";

import { AddModal } from "@/components/UI/AddModal";
import { ButtonAdd } from "@/components/UI/ButtonAdd";
import { FilterPanel } from "@/components/UI/FilterPanel";
import { HeaderRow } from "@/components/UI/HeaderRow";
import { User } from "@/components/Users/User";

export default function UsersPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [game, setGame] = useState("");

  function handleAdd() {
    console.log("Add subAdmin:", { name, role, game });
    setIsOpen(false);
    setName("");
    setRole("");
    setGame("");
  }

  return (
    <>
      <FilterPanel
        title={`Users (1)`}
        onStatusChange={(v) => console.log("status:", v)}
        onDateChange={(v) => console.log("date:", v)}
      />

      <HeaderRow
        labels={["User", "Game", "Created at", "Status", "Last activity"]}
      />

      {mockUsers.map((user) => (
        <User
          cover={user.avatar}
          name={user.name}
          game={user.game}
          status={user.status}
          lastActivity={user.ago}
          createdAt={user.submittedAt}
        />
      ))}

      <ButtonAdd setIsOpen={setIsOpen} />
      <AddModal
        onHandleAdd={handleAdd}
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        setName={setName}
        setRole={setRole}
        setGame={setGame}
        name={name}
        role={role}
        game={game}
      />
    </>
  );
}
