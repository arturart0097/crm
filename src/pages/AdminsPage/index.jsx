import { useState } from "react";

import { mockAdmins } from "@/mocks/admins";

import { AddModal } from "@/components/UI/AddModal";
import { Admin } from "@/components/Admins/Admin";
import { ButtonAdd } from "@/components/UI/ButtonAdd";
import { FilterPanel } from "@/components/UI/FilterPanel";
import { HeaderRow } from "@/components/UI/HeaderRow";

export default function AdminsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [game, setGame] = useState("");

  function handleAdd() {
    console.log("Add admin:", { name, role, game });
    setIsOpen(false);
    setName("");
    setRole("");
    setGame("");
  }

  return (
    <>
      <FilterPanel
        title={`Admins (${mockAdmins.length})`}
        onStatusChange={(v) => console.log("status:", v)}
        onDateChange={(v) => console.log("date:", v)}
      />
      <HeaderRow labels={["User", "Created at", "Actions"]} />

      {mockAdmins.map((admin) => (
        <Admin
          key={admin.id}
          name={admin.name}
          cover={admin.avatar}
          createdAt={admin.lastLoginAt}
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
