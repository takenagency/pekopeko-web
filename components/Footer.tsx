import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-peko-blue py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">

        {/* Logo */}
        <div className="relative w-44 h-14">
          <Image
            src="/LogoPekoPekoColor.svg"
            alt="Peko Peko"
            fill
            className="object-contain"
          />
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          <a
            href="https://www.instagram.com/pekopeko.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
            @pekopeko.ar
          </a>

          <div className="w-px h-4 bg-white/20" />

          <a
            href="mailto:contacto@pekopeko.ar"
            className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            contacto@pekopeko.ar
          </a>
        </div>

        {/* Copyright */}
        <p className="text-white/30 text-xs tracking-wide">
          © {new Date().getFullYear()} Peko Peko. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}
