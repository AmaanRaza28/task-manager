"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuSub } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Pencil, Trash, UserPlus } from "lucide-react";
import Link from "next/link";

export type Task = {
  id: number;
  title: string;
  status: string;
  runtime: number;
  finishDate: string;
  date: string;
  admin: { name: string; avatar: string };
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "runtime",
    header: "Runtime",
  },
  {
    accessorKey: "finishDate",
    header: "Finish Date",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "admin",
    header: () => <div>Admin</div>,
    cell: ({ row }) => {
      const { admin } = row.original;
      return (
        <div className="mx-auto">
          <Avatar className="ml-2">
            <AvatarImage src={admin.avatar} />
            <AvatarFallback>{admin.name[0]}</AvatarFallback>
          </Avatar>
          <span>{admin.name}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      // use task.id to delete/update/edit the task
      const task = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <Link href={"/dashboard/tasks"}>
              <DropdownMenuItem>
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Update Status</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Badge
                      variant="outline"
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                      In progress
                    </Badge>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Badge
                      variant="outline"
                      className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                    >
                      On hold
                    </Badge>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-700 px-2 py-1 rounded-full"
                    >
                      Done
                    </Badge>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Trash className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
