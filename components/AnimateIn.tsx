"use client";

import { useEffect, useRef, ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

const initialTransform: Record<Direction, string> = {
  up:    "translateY(32px)",
  down:  "translateY(-32px)",
  left:  "translateX(-32px)",
  right: "translateX(32px)",
  fade:  "none",
};

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = initialTransform[direction];
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
