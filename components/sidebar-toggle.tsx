"use client";

import * as React from "react";
import { SidebarContext } from "@/context/sidebar-context";

import { Button } from "@/components/ui/button";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useContext } from "react";

export function SidebarToggle() {
  const { open, setOpen } = useContext(SidebarContext);

  return (
    <Button
      variant="outline"
      size="icon"
      className="md:hidden"
      onClick={() => setOpen(!open)}
    >
      <Bars3Icon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  );
}
