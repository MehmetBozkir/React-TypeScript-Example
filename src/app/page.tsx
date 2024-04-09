import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { TableDemo } from "@/components/DataTable";
import Corner from "@/components/Corner";

function page() {
  return (
    <div>
      <Corner />
      <div className="m-20 text-end bg-primary p-4 rounded-full">
        <ModeToggle />
      </div>
      <TableDemo />
    </div>
  );
}

export default page;
