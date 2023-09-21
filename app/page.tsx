import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  return (
    /*<main className="flex min-h-screen h-full flex-col items-center justify-center p-24">
      <ThemeToggle />
    </main>*/
    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
      <div>
        <Navbar />
      </div>

      <div className="grid md:grid-cols-sidebar">
        <Sidebar />
        <div className="container">
          <div className="grid place-content-center min-h-screen">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-4xl my-8">Welcome to Talwind Sidebar Tutorial</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
