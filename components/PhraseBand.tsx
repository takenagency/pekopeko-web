export default function PhraseBand() {
  return (
    <div
      className="py-10 sm:py-14 flex items-center justify-center overflow-hidden relative"
      style={{
        backgroundImage: "url('/Pattern.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <span
        className="text-white text-center leading-none select-none"
        style={{
          fontFamily: "var(--font-japanese), sans-serif",
          fontSize: "clamp(3rem, 10vw, 9rem)",
          letterSpacing: "0.15em",
        }}
      >
        ペコペコ
      </span>
    </div>
  );
}
