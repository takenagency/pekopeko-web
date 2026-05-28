"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Loader() {
  const [logoIn, setLogoIn]   = useState(false);
  const [logoOut, setLogoOut] = useState(false);
  const [sliding, setSliding] = useState(false);
  const [hidden, setHidden]   = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLogoIn(true),   80);
    const t2 = setTimeout(() => setLogoOut(true),  1500);
    const t3 = setTimeout(() => setSliding(true),  1850);
    const t4 = setTimeout(() => setHidden(true),   2600);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  if (hidden) return null;

  const logoClass =
    logoOut  ? "opacity-0 scale-110" :
    logoIn   ? "opacity-100 scale-100" :
               "opacity-0 scale-90";

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-peko-red flex items-center justify-center transition-transform duration-700 ease-in-out ${
        sliding ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Logo animates in then out */}
      <div className={`w-56 sm:w-80 transition-all duration-700 ease-out ${logoClass}`}>
        <Image
          src="/LogoPekoPekoBlanco.svg"
          alt="Peko Peko"
          width={500}
          height={145}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
