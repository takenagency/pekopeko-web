import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <Image
        src="/BannerPekoPekoMP.png"
        alt="Peko Peko"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center py-32">

        {/* Logo — main visual */}
        <div className="w-[72vw] sm:w-[58vw] lg:w-[52vw] max-w-2xl mb-8">
          <Image
            src="/LogoPekoPekoBlanco.svg"
            alt="Peko Peko"
            width={600}
            height={174}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Subtitle */}
        <p
          className="text-white/80 text-sm sm:text-lg lg:text-xl tracking-[0.35em] uppercase mb-10"
          style={{ fontStyle: "italic" }}
        >
          Sabores Japoneses Auténticos
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-peko-red text-white font-black text-xs tracking-[0.3em] uppercase px-10 py-4 hover:opacity-90 transition-opacity duration-200"
          >
            Ver Menú
          </a>
          <a
            href="#ubicacion"
            className="border-2 border-white/60 text-white font-bold text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-200"
          >
            Cómo Llegar
          </a>
        </div>
      </div>
    </section>
  );
}
