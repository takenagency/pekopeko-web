import Image from "next/image";

const links = [
  { label: "Menú", href: "#menu" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Delivery", href: "#delivery" },
  { label: "Instagram", href: "#instagram" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-peko-blue border-t border-white/10 py-14 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-start mb-12">
          {/* Logo + tagline */}
          <div>
            <div className="relative w-44 h-14 mb-4">
              <Image
                src="/LogoPekoPekoColor.svg"
                alt="Peko Peko"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Gastronomía japonesa al paso en el Barrio Chino de Buenos Aires.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white font-black text-xs tracking-[0.3em] uppercase mb-4">
              Secciones
            </h4>
            <ul className="space-y-2">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/50 text-sm hover:text-peko-cream transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-black text-xs tracking-[0.3em] uppercase mb-4">
              Redes
            </h4>
            <a
              href="https://www.instagram.com/pekopeko.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-peko-cream transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              @pekopeko.ar
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wide">
            © {new Date().getFullYear()} Peko Peko. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs tracking-wider" style={{ fontFamily: "var(--font-japanese), sans-serif" }}>
            ペコペコ · Barrio Chino · Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
}
