import ProjectCard from "@/app/ui/ProjectCard";
import Link from "next/link";

export type Project = {
  id: number;
  title: string;
  status: string;
  time: number;
  date: string;
  comments: number;
  createdBy: {
    name: string;
    avatar: string;
  };
  team: {
    name: string;
    avatar: string;
  }[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "ClientOnboarding - Circle",
    status: "In progress",
    time: 6,
    date: "6 Mon",
    comments: 12,
    createdBy: {
      name: "Samantha J.",
      avatar: "/placeholder-user.jpg",
    },
    team: [
      {
        name: "Samantha J.",
        avatar: "/placeholder-user.jpg",
      },
      {
        name: "U1",
        avatar: "/placeholder-user.jpg",
      },
      {
        name: "U2",
        avatar: "/placeholder-user.jpg",
      },
      {
        name: "U3",
        avatar: "/placeholder-user.jpg",
      },
      {
        name: "U4",
        avatar: "/placeholder-user.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Client Drafting (2) with Lawrence",
    status: "On hold",
    time: 3,
    date: "6 Mon",
    comments: 12,
    createdBy: {
      name: "Kate L.",
      avatar: "/placeholder-user.jpg",
    },
    team: [
      {
        name: "Samantha J.",
        avatar: "/placeholder-user.jpg",
      },
      {
        name: "U1",
        avatar: "/placeholder-user.jpg",
      },
      {
        name: "U2",
        avatar: "/placeholder-user.jpg",
      },
      {
        name: "U3",
        avatar: "/placeholder-user.jpg",
      },
    ],
  },
];

export default function Projects() {
  return (
    <main className="mt-20 flex-1 p-4 space-y-8 overflow-auto md:p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <Link href={`/dashboard/projects/${project.id}`} key={project.id}>
              <ProjectCard project={project} />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
