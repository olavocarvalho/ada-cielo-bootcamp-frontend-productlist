import React from 'react'
import Link from 'next/link'
import logoCielo from '@/assets/img/logoCielo.svg'
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className=" bg-blue-50 p-3 flex flex-col md:flex-row top-0 drop-shadow-xl">
      <div className="flex justify-between flex-col md:flex-row items-center p-2">
         <Image
          src={logoCielo}
          width={100}
          height={50}
          alt="Picture of the author"
        />
        <div className="flex ml-4 justify-between flex-col md:flex-row">
        <h1 className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-800">
          <Link href="/">Dashboard</Link>
        </h1>
        <h1 className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
          <Link href="/report">Relatorio</Link>
        </h1>
        </div>
      </div>
    </nav>
  )
}
