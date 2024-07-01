import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FilesIcon, ReplyIcon } from "./Icons";

export default function ProjectsInProgressCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects in progress:</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64">
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded">
              <Badge variant="secondary">Feedback</Badge>
              <Badge variant="secondary">Bug</Badge>
              <Badge variant="secondary">Design System</Badge>
              <p className="mt-2">Improve cards readability</p>
              <p className="text-sm text-muted-foreground">21.03.22</p>
              <div className="flex items-center space-x-2 mt-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>U4</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">+8</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <ReplyIcon className="w-4 h-4" />
                <span className="text-sm">12 comments</span>
                <FilesIcon className="w-4 h-4" />
                <span className="text-sm">0 files</span>
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
