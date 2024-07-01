import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import clsx from "clsx";
import { ClockIcon } from "lucide-react";
import { ReplyIcon } from "./Icons";
import { Button } from "@/components/ui/button";

export default function ProjectCard({
  project,
}: {
  project: {
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
}) {
  return (
    <Card className=" h-80 hover:bg-gray-50 flex flex-col justify-between">
      <div className="flex-grow">
        <CardHeader>
          <CardTitle className=" h-7 overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
            {project.title.length > 48
              ? `${project.title.slice(0, 48)}...`
              : project.title}
          </CardTitle>
          <CardDescription>
            <Badge
              variant="outline"
              className={clsx({
                "bg-green-100 text-green-700 px-2 py-1 rounded-full":
                  project.status === "Done",
                "bg-blue-100 text-blue-700 px-2 py-1 rounded-full":
                  project.status === "In progress",
                " bg-purple-100 text-purple-700 px-2 py-1 rounded-full":
                  project.status === "On hold",
              })}
            >
              {project.status}
            </Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className=" w-10 h-10">
                <AvatarImage src={project.createdBy?.avatar} />
                <AvatarFallback>{project.createdBy?.name[0]}</AvatarFallback>
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
              <Avatar className="w-10 h-10" key={index}>
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
            <span className="text-sm">{project.comments} comments</span>
          </div>
        </CardContent>
      </div>
      <CardFooter className="mt-auto">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{project.date}</span>
          <Button variant="secondary" size="sm" className="ml-5">
            View
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
