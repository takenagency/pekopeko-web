"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  id: number;
  name: string;
  description: string;
  image: string;
  accent: string;
}

export default function MenuCard({ id, name, description, image, accent }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg sm:cursor-default cursor-pointer"
      onClick={() => setOpen((o) => !o)}
    >
      {/* Full-bleed photo */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      {/* Promo badge */}
      <div
        className="absolute top-3 left-3 text-white text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 rounded-md z-10"
        style={{ backgroundColor: accent }}
      >
        Promo {id}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      {/* Text — mobile: toggle on click | desktop: hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="font-black text-white text-base sm:text-lg leading-tight">
          {name}
        </h3>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out sm:!max-h-0 sm:group-hover:!max-h-32 ${
            open ? "max-h-32" : "max-h-0"
          }`}
        >
          <p className="text-white/80 text-sm leading-relaxed mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
