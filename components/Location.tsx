export default function Location() {
  const hours = [
    { day: "Lunes — Jueves", time: "12:00 – 22:00" },
    { day: "Viernes — Sábado", time: "12:00 – 23:00" },
    { day: "Domingo", time: "12:00 – 22:00" },
  ];

  return (
    <section id="ubicacion" className="bg-peko-blue py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-peko-cream/50 font-bold text-xs tracking-[0.5em] uppercase mb-3"
            style={{ fontFamily: "var(--font-japanese), sans-serif" }}
          >
            場所
          </p>
          <h2 className="text-white font-black text-5xl sm:text-6xl uppercase tracking-tight">
            Dónde Estamos
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-peko-red/60" />
            <div className="w-2 h-2 rounded-full bg-peko-red" />
            <div className="h-px w-12 bg-peko-red/60" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">
          {/* Google Maps embed */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-2xl min-h-80">
            <iframe
              title="Ubicación Peko Peko"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.837288900187!2d-58.4508075!3d-34.5576749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc956b5c8f4bb%3A0x1c6b2e5053b74e5e!2sPEKO%20PEKO!5e0!3m2!1ses!2sar!4v1779933659266!5m2!1ses!2sar"
              className="w-full h-full min-h-80"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col justify-center gap-8">
            {/* Address */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-peko-red flex items-center justify-center flex-shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="text-peko-cream font-black text-xs tracking-[0.25em] uppercase">
                  Dirección
                </h3>
              </div>
              <p className="text-white/80 text-base leading-relaxed pl-11">
                Barrio Chino
                <br />
                Belgrano, Buenos Aires
                <br />
                Argentina
              </p>
              <a
                href="https://maps.app.goo.gl/BAGyNWpQKD8ksgYL8"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 pl-11 inline-block text-peko-red text-sm font-bold hover:text-peko-cream transition-colors"
              >
                Ver en Google Maps →
              </a>
            </div>

            {/* Hours */}
            <div id="horarios">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-peko-red flex items-center justify-center flex-shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-peko-cream font-black text-xs tracking-[0.25em] uppercase">
                  Horarios
                </h3>
              </div>
              <div className="pl-11 space-y-2">
                {hours.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex justify-between items-baseline gap-4 text-sm border-b border-white/10 pb-2 last:border-0"
                  >
                    <span className="text-white/70">{day}</span>
                    <span className="text-white font-bold whitespace-nowrap">
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram */}
            <div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-peko-red flex items-center justify-center flex-shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
                  </svg>
                </div>
                <a
                  href="https://www.instagram.com/pekopeko.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-peko-cream font-black text-xs tracking-[0.25em] uppercase hover:text-white transition-colors"
                >
                  @pekopeko.ar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
