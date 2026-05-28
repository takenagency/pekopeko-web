import Image from "next/image";

const clasicos = [
  {
    id: 1,
    name: "Onigiri + 2 Yakitoris",
    description:
      "Tradicional triángulo de arroz con relleno a elección, acompañado de dos brochetas de pollo grilladas y glaseadas con salsa teriyaki.",
    image: "/1.-Onigiri-+-2-Yakitoris.png",
  },
  {
    id: 2,
    name: "Karaage Japonés",
    description:
      "Tiernos bocados de pollo marinados en salsa de soja, ajo y jengibre, rebozados y fritos hasta lograr una textura dorada y crujiente por fuera, manteniendo su jugosidad por dentro.",
    image: "/2.-Karaage-Japonés.png",
  },
  {
    id: 3,
    name: "Nikuman x 2 unidades",
    description:
      "Pan japonés relleno de carne de cerdo desmechada, con una textura esponjosa cocido al vapor.",
    image: "/3.-Nikuman-X2.png",
  },
  {
    id: 4,
    name: "Gyozas x 7 unidades",
    description:
      "Empanaditas japonesas rellenas de carne de cerdo, doradas hasta alcanzar una textura crocante por fuera y jugosa por dentro. Servidas con salsa especial.",
    image: "/4.-Gyoza-Japonés-X-7u.png",
  },
  {
    id: 5,
    name: "Yakisoba",
    description:
      "Fideos salteados al wok con vegetales frescos (cebolla, morrones, repollo, zanahoria) preparados con salsa especial de sabor intenso y equilibrado.",
    image: "/5.-Yakisoba.png",
  },
  {
    id: 12,
    name: "Torishoga",
    description:
      "Tiernos trozos de pollo cocidos en salsa de soja, jengibre fresco y un toque dulce, al estilo casero japonés, acompañado con arroz blanco.",
    image: "/12-Torishoga-(pollo-Al-Jengibre-Estilo-Japonés).png",
  },
];

const sushi = [
  {
    id: 6,
    name: "Sushi Tradicional x 9 piezas",
    description:
      "Todo salmón rosado. 3 piezas de Salmón Rosado Cocido, 2 piezas de Philadelphia Roll, 2 piezas de Nama Sake (Maki de salmón), 2 piezas de Nigiri.",
    image: "/6.-Sushi-Tradicional-9-Piezas.png",
  },
  {
    id: 7,
    name: "Sushi Hot x 6 piezas",
    description:
      "Rolls rebozados y fritos, con exterior crocante e interior suave, rellenos de arroz, salmón rosado y queso. Una versión cálida y sabrosa del sushi tradicional.",
    image: "/7.-Sushi-Hot-6-Piezas.png",
  },
  {
    id: 9,
    name: "Sushi Surtido x 9 piezas",
    description:
      "3 piezas de Atún Cocido y Queso, 2 piezas de Salmón Rosado y Queso, 2 piezas de Kanikama y Queso, 2 piezas de Philadelphia Roll.",
    image: "/Sushi-Surtido-9-Piezas..png",
  },
];

function MenuCard({
  id,
  name,
  description,
  image,
  accent,
}: {
  id: number;
  name: string;
  description: string;
  image: string;
  accent: string;
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-peko-cream">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className="absolute top-3 left-3 text-white text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1"
          style={{ backgroundColor: accent }}
        >
          Promo {id}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-black text-lg text-peko-blue leading-tight mb-2">
          {name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">
          {description}
        </p>
      </div>
    </div>
  );
}

function CategoryHeader({
  title,
  kanji,
}: {
  title: string;
  kanji: string;
}) {
  return (
    <div className="relative text-center mb-10">
      <span
        className="absolute inset-0 flex items-center justify-center text-peko-blue/5 font-black pointer-events-none select-none leading-none"
        style={{ fontSize: "11rem", fontFamily: "var(--font-japanese), sans-serif" }}
      >
        {kanji}
      </span>
      <div className="relative flex items-center gap-4 justify-center">
        <div className="h-px flex-1 max-w-24 bg-peko-red/30" />
        <h3 className="text-peko-red font-black text-sm tracking-[0.4em] uppercase">
          {title}
        </h3>
        <div className="h-px flex-1 max-w-24 bg-peko-red/30" />
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="bg-peko-cream py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-peko-red font-bold text-lg tracking-[0.5em] uppercase mb-3"
            style={{ fontFamily: "var(--font-japanese), sans-serif" }}
          >
            ペコペコ
          </p>
          <h2 className="text-peko-blue font-black text-5xl sm:text-6xl uppercase tracking-tight">
            Nuestro Menú
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-peko-red/40" />
            <div className="w-2 h-2 rounded-full bg-peko-red" />
            <div className="h-px w-12 bg-peko-red/40" />
          </div>
          <p className="text-gray-500 text-lg mt-4 max-w-lg mx-auto leading-relaxed">
            Ingredientes frescos, técnicas tradicionales y el auténtico sabor japonés en cada bocado.
          </p>
        </div>

        {/* Clásicos */}
        <div className="mb-16">
          <CategoryHeader title="Platos Clásicos" kanji="食" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clasicos.map((item) => (
              <MenuCard key={item.id} {...item} accent="#b80026" />
            ))}
          </div>
        </div>

        {/* Sushi */}
        <div>
          <CategoryHeader title="Sushi Japonés" kanji="鮨" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sushi.map((item) => (
              <MenuCard key={item.id} {...item} accent="#02001c" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
