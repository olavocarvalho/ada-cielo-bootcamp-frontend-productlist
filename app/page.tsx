import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center justify-center p-24">
      <ThemeToggle />
    </main>
  );
}
