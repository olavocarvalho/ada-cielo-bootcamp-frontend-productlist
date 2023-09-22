"use client"

import React, { useContext, useRef } from "react";
import Link from "next/link";
import { useOnClickOutside } from "usehooks-ts";
import { HomeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarContext } from "@/context/sidebar-context";

export type NavItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
};

const defaultNavItems: NavItem[] = [
    {
        label: "Produtos",
        href: "/",
        icon: <HomeIcon className="w-6 h-6" />,
    },
    {
        label: "Avaliação",
        href: "/",
        icon: <HomeIcon className="w-6 h-6" />,
    },
    {
        label: "Preço",
        href: "/",
        icon: <HomeIcon className="w-6 h-6" />,
    },
];

const Sidebar = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { open, setOpen } = useContext(SidebarContext)

    useOnClickOutside(ref, (e) => {
        setOpen(false);
    });

    return (
        <div
            className={cn({
                "flex flex-col justify-between": true, // layout
                "bg-indigo-700 text-zinc-50": true, // colors
                "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true, // positioning
                "md:h-[calc(100vh_-_64px)] h-full w-[300px]": true, // for height and width
                "transition-transform .3s ease-in-out md:-translate-x-0": true, //animations
                "-translate-x-full ": !open, //hide sidebar to the left when closed
            })}
            ref={ref}
        >
            <nav className="md:sticky top-0 md:top-16">
                {/* nav items */}
                <ul className="py-2 flex flex-col gap-2">
                    {defaultNavItems.map((item, index) => {
                        return (
                            <Link key={index} href={item.href}>
                                <li
                                    className={cn({
                                        "text-indigo-100 hover:bg-indigo-900": true, //colors
                                        "flex gap-4 items-center ": true, //layout
                                        "transition-colors duration-300": true, //animation
                                        "rounded-md p-2 mx-2": true, //self style
                                    })}
                                >
                                    {item.icon} {item.label}
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};
export default Sidebar;
