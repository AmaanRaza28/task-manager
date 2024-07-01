import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function LatestTasks() {
  const totalTasks = 117;
  const completedTasks = 94;
  const inProgressTasks = 23;
  const todos = [
    {
      id: 1,
      name: "ClientOnboarding - Circle",
      admin: {
        name: "Samantha J.",
        avatar: "/placeholder-user.jpg",
      },
      members: 3,
      status: "In progress",
      runTime: "6 hours",
      finishDate: "6 Mon",
    },
    {
      id: 2,
      name: "Meeting with Webflow & Notion",
      admin: {
        name: "Bob P.",
        avatar: "/placeholder-user.jpg",
      },
      members: 4,
      status: "Done",
      runTime: "2 hours",
      finishDate: "7 Tue",
    },
    {
      id: 3,
      name: "First Handoff with Engineers",
      admin: {
        name: "Kate O.",
        avatar: "/placeholder-user.jpg",
      },
      members: 10,
      status: "In progress",
      runTime: "3 days",
      finishDate: "10 Fri",
    },
    {
      id: 4,
      name: "Client Drafting (2) with Lawrence",
      admin: {
        name: "Jack F.",
        avatar: "/placeholder-user.jpg",
      },
      members: 7,
      status: "In progress",
      runTime: "1 week",
      finishDate: "19 Sun",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-800">Latest tasks</h2>
          <p className="text-gray-600">
            <span className="font-bold text-gray-700">{totalTasks} total</span>,
            proceed to resolve them
          </p>
        </div>
        <div className="flex items-center space-x-8 mt-4 md:mt-0">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-gray-800">
              {completedTasks}
            </span>
            <span className="text-gray-600">Done</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-gray-800">
              {inProgressTasks}
            </span>
            <span className="text-gray-600">In progress</span>
          </div>
        </div>
      </div>
      <Table className="min-w-full bg-white">
        <TableHeader>
          <TableRow className="border-t border-b">
            <TableHead className="w-8 "></TableHead>
            <TableHead className="">Name</TableHead>
            <TableHead className="">Admin</TableHead>
            <TableHead className=" ">Members</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className=" ">Run time</TableHead>
            <TableHead className="">Finish date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id} className=" border-b-0">
              <TableCell className="">
                <Checkbox />
              </TableCell>
              <TableCell>{todo.name}</TableCell>
              <TableCell className="flex items-center space-x-2">
                <Avatar className="mr-2">
                  <AvatarImage src={todo.admin.avatar} />
                  <AvatarFallback>{todo.admin.name[0]}</AvatarFallback>
                </Avatar>
                <span>{todo.admin.name}</span>
              </TableCell>
              <TableCell className=" ">{todo.members}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    todo.status === "Done"
                      ? "bg-green-100 text-green-700 px-2 py-1 rounded-full"
                      : "bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  }
                >
                  {todo.status}
                </Badge>
              </TableCell>
              <TableCell className=" ">{todo.runTime}</TableCell>
              <TableCell>{todo.finishDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
