"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Menú", href: "#menu" },
  { label: "Horarios", href: "#horarios" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-peko-red shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-14 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center flex-shrink-0">
          <Image
            src="/LogoPekoPekoBlanco.svg"
            alt="Peko Peko"
            width={130}
            height={38}
            className="object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-white text-xs font-black tracking-[0.2em] uppercase hover:text-peko-cream transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-peko-red border-t border-white/10 px-6 pb-4">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-3 text-white text-sm font-black tracking-[0.2em] uppercase hover:text-peko-cream border-b border-white/10 last:border-0"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
