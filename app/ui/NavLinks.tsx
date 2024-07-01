"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  LayoutDashboardIcon,
  ListTodoIcon,
  MailsIcon,
  ProjectorIcon,
} from "./Icons";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  {
    title: "Dashboard",
    icon: <LayoutDashboardIcon className="w-5 h-5" />,
    href: "/dashboard",
  },
  {
    title: "Projects",
    icon: <ProjectorIcon className="w-5 h-5" />,
    href: "/dashboard/projects",
  },
  {
    title: "Task list",
    icon: <ListTodoIcon className="w-5 h-5" />,
    href: "/dashboard/tasks",
  },
  {
    title: "Notifications",
    icon: <MailsIcon className="w-5 h-5" />,
    href: "/dashboard/notifications",
    notifications: 2,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col space-y-2 mt-5">
      {navLinks.map((link) => {
        if (link.notifications) {
          return (
            <Link
              key={link.title}
              href={link.href}
              className={clsx(
                "flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-gray-200",
                {
                  "bg-gray-300 text-black": pathname === link.href,
                }
              )}
            >
              {link.icon}
              <span>{link.title}</span>
              <Badge
                variant="destructive"
                className="ml-auto bg-emerald-300 hover:bg-emerald-200 text-black"
              >
                {link.notifications}
              </Badge>
            </Link>
          );
        }
        return (
          <Link
            key={link.title}
            href={link.href}
            className={clsx(
              "flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-gray-200",
              {
                "bg-gray-300 text-black": pathname === link.href,
              }
            )}
          >
            {link.icon}
            <span>{link.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
