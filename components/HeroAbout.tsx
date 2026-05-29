import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

export default function HeroAbout() {
  return (
    <section id="nosotros" className="bg-peko-cream">
      <div className="flex flex-col lg:flex-row">

        {/* ── About text ────────────────────────────────────── */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-14 xl:px-18 py-14 lg:py-0">

          <AnimateIn delay={0}>
            <p
              className="text-peko-red text-xs tracking-[0.5em] uppercase mb-5"
              style={{ fontStyle: "italic" }}
            >
              Quiénes somos
            </p>
          </AnimateIn>

          <AnimateIn delay={100}>
            <h2
              className="font-black uppercase text-peko-blue leading-[0.9] tracking-tighter mb-6"
              style={{ fontSize: "clamp(2.2rem, 3.8vw, 4.2rem)" }}
            >
              Auténtico
              <br />
              <span className="text-peko-red">Desde el</span>
              <br />
              Primer Bocado
            </h2>
          </AnimateIn>

          <AnimateIn delay={200}>
            <p className="text-peko-blue/60 text-sm leading-relaxed max-w-sm mb-0">
              En el corazón del Barrio Chino de Buenos Aires, Peko Peko es
              gastronomía japonesa al paso con identidad propia. Cada plato —desde
              el onigiri clásico hasta el sushi más creativo— es preparado con
              ingredientes frescos y técnicas auténticas.
            </p>
          </AnimateIn>

        </div>

        {/* ── Image ────────────────────────────────────────── */}
        <AnimateIn direction="right" className="lg:w-[55%] flex-shrink-0">
          <Image
            src="/BannerPekoPekoMP2.png"
            alt="Peko Peko"
            width={1200}
            height={628}
            className="w-full h-auto block"
          />
        </AnimateIn>

      </div>
    </section>
  );
}
