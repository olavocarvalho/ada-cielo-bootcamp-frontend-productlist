"use client";

import React, { useContext } from "react";
import { ThemeToggle } from "./theme-toggle";
import { SidebarToggle } from "./sidebar-toggle";
import Cart from "./cart";

export function Navbar() {
  return (
    <nav className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-300 px-4 h-16 items-center flex w-full justify-between fixed z-10">
      <div className="flex-grow">
        <h1 className="text-xl">ADA & Cielo Bootcamp</h1>
      </div>
      <div className="flex flex-row gap-2">
        <Cart quantity={0} />
        <ThemeToggle />
        <SidebarToggle />
      </div>
    </nav>
  );
}
