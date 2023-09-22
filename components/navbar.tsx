"use client";
import React, { useContext } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { SidebarContext } from "@/context/sidebar-context";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const { open, setOpen } = useContext(SidebarContext);
  return (
    <nav className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-300 w-full px-4 h-16 items-center justify-between">
      <div className="flex-grow">
        <ThemeToggle />
      </div>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
  );
}
