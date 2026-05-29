import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

export default function Delivery() {
  return (
    <section id="delivery" className="bg-peko-cream overflow-hidden relative">

      <div className="flex flex-col lg:flex-row min-h-[60vh]">

        {/* ── SignPekoPeko — imagen principal ─────── */}
        <AnimateIn direction="left" className="lg:w-[55%] flex-shrink-0">
          <Image
            src="/Nigiri1.png"
            alt="Peko Peko"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </AnimateIn>

        {/* ── Texto + CTA ─────────────────────────── */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-14 py-16 lg:py-0">

          <AnimateIn>
            <p className="text-peko-red font-bold text-3xl tracking-[0.5em] uppercase mb-4"
              style={{ fontFamily: "var(--font-japanese), sans-serif" }}>
              配達
            </p>
          </AnimateIn>

          <AnimateIn delay={100}>
            <h2 className="text-peko-blue font-black text-5xl sm:text-6xl uppercase tracking-tight leading-none mb-4">
              Pedí<br />desde Casa
            </h2>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-peko-red/40" />
              <div className="w-2 h-2 rounded-full bg-peko-red" />
              <div className="h-px w-10 bg-peko-red/40" />
            </div>
            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-sm">
              Ahora podes disfrutar de todo el sabor tradicional japonés de Peko Peko desde tu casa. ¡Pedí ahora!
            </p>
          </AnimateIn>

          <AnimateIn delay={300}>
            <a
              href="https://mpago.li/2vh5zTb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-peko-red text-white font-black text-sm tracking-[0.15em] uppercase px-12 py-5 rounded-lg hover:opacity-90 transition-opacity duration-200 self-start"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              Pedir por Mercado Libre
            </a>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
