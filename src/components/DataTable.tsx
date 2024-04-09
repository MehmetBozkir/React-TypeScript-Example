"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Users } from "./DataTable.types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function TableDemo() {
  const [users, setUsers] = useState<Users[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  const handleClick2 = () => {
    setCount(Math.floor(Math.random() * 101));
    toast("Count has been created", {
      description: "Your random number is ready!!!",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://randomuser.me/api/?results=${count}`
      );
      console.log(data);
      setUsers(data.results);
      toast("Data has been fetch", {
        description: `Data of ${count} personnel is ready`,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="m-20">
      <div className="text-center m-5">
        <Button onClick={handleClick} className="m-2">
          Show Users
        </Button>
        <Button onClick={handleClick2}>Change Number Users </Button>
      </div>
      {isLoading && (
        <p className="text-center text-4xl text-red-600">Loading...</p>
      )}
      <Table>
        <TableCaption>
          Between 0 and 100 personnel with random information shown.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Picture</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>E-mail</TableHead>
            <TableHead className="text-right">Nationality</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map(({ login, name, email, nat, picture }) => (
            <TableRow key={login.uuid}>
              <TableCell className="font-medium">
                <Avatar>
                  <AvatarImage src={picture.thumbnail} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>
                {name.first} {name.last}
              </TableCell>
              <TableCell>{email}</TableCell>
              <TableCell className="text-right">{nat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Personnel Count</TableCell>
            <TableCell className="text-right"> {count} </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
