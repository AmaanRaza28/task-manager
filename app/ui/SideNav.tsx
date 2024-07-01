import { LogInIcon } from "./Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavLinks from "./NavLinks";

export default function SideNav() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-100 p-4 hidden md:w-64 md:block">
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-7 mt-5">
          <LogInIcon className="w-6 h-6 mr-2" />
          <span className="text-2xl font-bold">Todo.</span>
        </div>
        <hr />
        <NavLinks />
        {/* User Profile */}
        <div className="mt-auto py-2 flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>EM</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Amaan Raza</p>
            <p className="text-sm text-gray-500">amaan@gmail.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
