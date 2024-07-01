"use client";
import Link from "next/link";
import {
  LayoutDashboardIcon,
  ListTodoIcon,
  LogInIcon,
  MailsIcon,
  MenuIcon,
  ProjectorIcon,
  ServerIcon,
  WebcamIcon,
} from "./Icons";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-gray-100 px-4 py-2 md:hidden">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <LogInIcon className="w-6 h-6 mr-2" />
          <span className="text-xl font-bold">Todo.</span>
        </div>
        <button
          className="p-2 focus:outline-none"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <MenuIcon className="w-5 h-5" />
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>
      {isNavOpen && (
        <div className="py-4">
          <NavLinks />
        </div>
      )}
    </header>
  );
}
