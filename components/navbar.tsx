"use client"

import React, { useContext } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { SidebarContext } from "@/context/sidebar-context";

const Navbar = () => {
    const { open, setOpen } = useContext(SidebarContext)
    return (
        <nav
            className={cn({
                "bg-white text-zinc-500": true, // colors
                "flex items-center": true, // layout
                "w-full fixed z-10 px-4 shadow-sm h-16": true, //positioning & styling
            })}
        >
            <div className="flex-grow"></div>
            <button className="md:hidden" onClick={() => setOpen(!open)}>
                <Bars3Icon className="h-6 w-6" />
            </button>
        </nav>
    );
};

export default Navbar;
