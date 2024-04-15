"use client"
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-8">
      <div className="mx-10 sm:mx-auto max-w-6xl px-4 flex items-center justify-between border border-zinc-600 p-3 rounded-full">
        <div>
          <span className="text-xl text-white cursor-pointer font-bold ml-2">
            Pedro <span className="text-slate-500 font-bold">Loureiro</span>
          </span>
        </div>
        <div className="hidden sm:flex flex-row space-x-4">
          <p className="text-white cursor-pointer font-bold">Sobre</p>
          <p className="text-white cursor-pointer font-bold">Habilidades</p>
          <p className="text-white cursor-pointer font-bold">Contatos</p>
          <Link href="/projetos">
            <p className="text-white cursor-pointer font-bold">Projetos</p>
          </Link>
        </div>
        <div className="flex space-x-3 items-center">
          <button
            className="hidden font-bold md:inline-block text-white bg-blue-400 px-4 rounded-full py-2 hover:bg-blue-700"
            onClick={() => window.open("https://www.linkedin.com/in/pedro-galv%C3%A3o-95a12b239/", "_blank")}
          >
            Linkedin
          </button>
          <button
            className="cursor-pointer font-bold border border-gray-500 px-4 py-2 text-white hover:bg-gray-800 rounded-full"
            onClick={() => window.open("https://github.com/GaussKd0", "_blank")}
          >
            Github
          </button>
        </div>
      </div>
    </header>
  );
}
