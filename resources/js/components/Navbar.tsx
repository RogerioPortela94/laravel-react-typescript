import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 bg-white">
      <div className="relative max-w-7xl mx-auto px-6 py-3 flex items-center justify-between border-b">

        <Link href="/" className="text-lg font-semibold">
          Logo
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/sobre" className="hover:underline">Sobre</Link>
          <Link href="/contato" className="hover:underline">Contato</Link>
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden relative w-6 h-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span
            className={`absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out
            ${isOpen ? "rotate-45 top-1/2" : "top-1"}`}
          ></span>
          <span
            className={`absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-0" : "top-1/2"}`}
          ></span>
          <span
            className={`absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out
            ${isOpen ? "-rotate-45 top-1/2" : "top-[1.25rem]"}`}
          ></span>
        </button>

        {/* MENU MOBILE SOBREPOSTO (NÃO EMPURRA O MAIN) */}
        <div
          className={`
            md:hidden absolute left-0 right-0 top-full z-40 bg-white shadow-lg border-b
            overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3 text-sm">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:underline">Home</Link>
            <Link href="/sobre" onClick={() => setIsOpen(false)} className="hover:underline">Sobre</Link>
            <Link href="/contato" onClick={() => setIsOpen(false)} className="hover:underline">Contato</Link>
          </div>
        </div>

      </div>
    </nav>
  );
}
