import Image from "next/image";

const dishes = [
  { name: "Onigiri",  image: "/Promo-Onigiri-X-2u.png" },
  { name: "Yakitori", image: "/1.-Onigiri-+-2-Yakitoris.png" },
  { name: "Karaage",  image: "/2.-Karaage-Japonés.png" },
  { name: "Nikuman",  image: "/3.-Nikuman-X2.png" },
  { name: "Mochi",    image: "/13-IceCreamMochi.png" },
  { name: "Sushi",    image: "/6.-Sushi-Tradicional-9-Piezas.png" },
];

// Duplicate for seamless loop
const track = [...dishes, ...dishes];

export default function DishBar() {
  return (
    <div className="bg-peko-red overflow-hidden py-3">
      <div className="flex items-center animate-marquee" style={{ width: "max-content" }}>
        {track.map((dish, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            {/* Dish item */}
            <div className="flex items-center gap-3 px-8">
              <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/10">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-black text-xs tracking-[0.25em] uppercase whitespace-nowrap">
                {dish.name}
              </span>
            </div>
            {/* Dot separator */}
            <span className="text-white/20 text-xs flex-shrink-0">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
