import TasksHeader from "@/app/ui/tasks/TasksHeader";
import TasksList from "@/app/ui/tasks/TasksList";
import TasksPerformance from "@/app/ui/tasks/TasksPerformance";
import TasksStatistics from "@/app/ui/tasks/TasksStatistics";
import { Task, columns } from "./columns";
import { DataTable } from "./data-table";

const tasks: Task[] = [
  {
    id: 1,
    title: "ClientOnboarding - Circle",
    status: "In progress",
    runtime: 6,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 2,
    title: "Client Drafting (2) with Lawrence",
    status: "On hold",
    runtime: 3,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 3,
    title: "ClientOnboarding - Circle",
    status: "In progress",
    runtime: 6,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 4,
    title: "Client Drafting (2) with Lawrence",
    status: "On hold",
    runtime: 3,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 1,
    title: "ClientOnboarding - Circle",
    status: "In progress",
    runtime: 6,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 2,
    title: "Client Drafting (2) with Lawrence",
    status: "On hold",
    runtime: 3,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 3,
    title: "ClientOnboarding - Circle",
    status: "In progress",
    runtime: 6,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 4,
    title: "Client Drafting (2) with Lawrence",
    status: "On hold",
    runtime: 3,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 1,
    title: "ClientOnboarding - Circle",
    status: "In progress",
    runtime: 6,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 2,
    title: "Client Drafting (2) with Lawrence",
    status: "On hold",
    runtime: 3,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 3,
    title: "ClientOnboarding - Circle",
    status: "In progress",
    runtime: 6,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 4,
    title: "Client Drafting (2) with Lawrence",
    status: "On hold",
    runtime: 3,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 1,
    title: "ClientOnboarding - Circle",
    status: "In progress",
    runtime: 6,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 2,
    title: "Client Drafting (2) with Lawrence",
    status: "On hold",
    runtime: 3,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 3,
    title: "ClientOnboarding - Circle",
    status: "In progress",
    runtime: 6,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 4,
    title: "Client Drafting (2) with Lawrence",
    status: "On hold",
    runtime: 3,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 1,
    title: "ClientOnboarding - Circle",
    status: "In progress",
    runtime: 6,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 2,
    title: "Client Drafting (2) with Lawrence",
    status: "On hold",
    runtime: 3,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 3,
    title: "ClientOnboarding - Circle",
    status: "In progress",
    runtime: 6,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
  {
    id: 4,
    title: "Client Drafting (2) with Lawrence",
    status: "On hold",
    runtime: 3,
    finishDate: "6 Mon",
    date: "6 Mon",
    admin: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
  },
];

async function getData(): Promise<Task[]> {
  return tasks;
}

export default async function Tasks() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10 mt-12">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
