import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { TableDemo } from "@/components/DataTable";

function page() {
  return (
    <div>
      <p className="text-6xl text-center m-10">This is a start</p>
      <div className="m-10 text-end bg-primary p-4 rounded-full">
        <ModeToggle />
      </div>

      <TableDemo />
    </div>
  );
}

export default page;
