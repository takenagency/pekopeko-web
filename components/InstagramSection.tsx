import Image from "next/image";

const photos = [
  { src: "/1.-Onigiri-+-2-Yakitoris.png", alt: "Onigiri + Yakitoris" },
  { src: "/2.-Karaage-Japonés.png", alt: "Karaage Japonés" },
  { src: "/6.-Sushi-Tradicional-9-Piezas.png", alt: "Sushi Tradicional" },
  { src: "/4.-Gyoza-Japonés-X-7u.png", alt: "Gyozas" },
  { src: "/7.-Sushi-Hot-6-Piezas.png", alt: "Sushi Hot" },
  { src: "/12-Torishoga-(pollo-Al-Jengibre-Estilo-Japonés).png", alt: "Torishoga" },
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="bg-white py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-peko-red font-bold text-xs tracking-[0.5em] uppercase mb-3">
            Instagram
          </p>
          <h2 className="text-peko-blue font-black text-5xl sm:text-6xl uppercase tracking-tight">
            Seguinos
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4 mb-4">
            <div className="h-px w-12 bg-peko-red/40" />
            <div className="w-2 h-2 rounded-full bg-peko-red" />
            <div className="h-px w-12 bg-peko-red/40" />
          </div>
          <a
            href="https://www.instagram.com/pekopeko.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 font-medium text-sm hover:text-peko-red transition-colors"
          >
            @pekopeko.ar
          </a>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-10">
          {photos.map(({ src, alt }) => (
            <a
              key={src}
              href="https://www.instagram.com/pekopeko.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-peko-cream"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-peko-red/0 group-hover:bg-peko-red/60 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/pekopeko.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-peko-blue text-white font-black text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-peko-red transition-colors duration-300"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
            </svg>
            Ver Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
