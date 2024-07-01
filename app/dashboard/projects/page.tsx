import { FilesIcon, ReplyIcon } from "@/app/ui/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClockIcon } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
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
      status: "In progress",
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

  return (
    <main className="mt-20 flex-1 p-4 space-y-8 overflow-auto md:p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <Link href={`/dashboard/projects/${project.id}`} key={project.id}>
              <Card className=" h-80 hover:bg-gray-50 flex flex-col justify-between">
                <div className="flex-grow">
                  <CardHeader>
                    <CardTitle className=" h-7 overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                      {project.title.length > 48
                        ? `${project.title.slice(0, 48)}...`
                        : project.title}
                    </CardTitle>
                    <CardDescription>
                      <Badge className="mt-2">{project.status}</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src={project.createdBy?.avatar} />
                          <AvatarFallback>
                            {project.createdBy?.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <span>{project.createdBy?.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="w-4 h-4" />
                        <span>{project.time} hours</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      {project.team.slice(0, 3).map((member, index) => (
                        <Avatar key={index}>
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>{member.name[0]}</AvatarFallback>
                        </Avatar>
                      ))}
                      {project.team.length > 3 && (
                        <span className="text-sm text-muted-foreground">
                          +{project.team.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mt-4">
                      <ReplyIcon className="w-4 h-4" />
                      <span className="text-sm">
                        {project.comments} comments
                      </span>
                    </div>
                  </CardContent>
                </div>
                <CardFooter className="mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {project.date}
                    </span>
                    <Button variant="secondary" size="sm" className="ml-5">
                      View
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
