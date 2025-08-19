import { useState } from "react";

import { mockSubAdmins } from "@/mocks/subAdmins";

import { SubAdmin } from "@/components/SubAdmins/SubAdmin";
import { AddModal } from "@/components/UI/AddModal";
import { ButtonAdd } from "@/components/UI/ButtonAdd";
import { FilterPanel } from "@/components/UI/FilterPanel";
import { HeaderRow } from "@/components/UI/HeaderRow";

export default function SubAdminsPage() {
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
        title={`SubAdmins (${mockSubAdmins.length})`}
        onStatusChange={(v) => console.log("status:", v)}
        onDateChange={(v) => console.log("date:", v)}
      />
      <HeaderRow
        labels={[
          "User",
          "Approved",
          "Rejected",
          "Last activity",
          "Created at",
          "Actions",
        ]}
      />

      {mockSubAdmins.map((subAdmin) => (
        <SubAdmin
          cover={subAdmin.avatar}
          name={subAdmin.name}
          approved={subAdmin.approved}
          rejected={subAdmin.disapproved}
          lastActivity={subAdmin.lastActiveAt}
          createdAt={subAdmin.createdAt}
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
