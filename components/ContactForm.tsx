"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, null);

  return (
    <section id="contacto" className="bg-peko-red py-24 px-4 sm:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-5">
        <span className="font-black text-white leading-none" style={{ fontSize: "clamp(150px, 30vw, 400px)", fontFamily: "var(--font-japanese), sans-serif" }}>
          連絡
        </span>
      </div>

      {/* Concentric circles */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 pointer-events-none">
        {[400, 300, 200].map((size) => (
          <div
            key={size}
            className="absolute rounded-full border border-white/10 -translate-x-1/2 -translate-y-1/2"
            style={{ width: size, height: size, top: 0, left: 0 }}
          />
        ))}
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-white/50 font-bold text-lg tracking-[0.5em] uppercase mb-3" style={{ fontFamily: "var(--font-japanese), sans-serif" }}>
            連絡
          </p>
          <h2 className="text-white font-black text-5xl sm:text-6xl uppercase tracking-tight">
            Contacto
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/60" />
            <div className="h-px w-12 bg-white/30" />
          </div>
          <p className="text-white/70 text-sm mt-4 leading-relaxed">
            ¿Tenés alguna consulta? Escribinos y te respondemos a la brevedad.
          </p>
        </div>

        {state?.success ? (
          <div className="bg-white/10 backdrop-blur-sm text-white text-center p-10 rounded-2xl">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-black text-2xl mb-2">¡Mensaje enviado!</h3>
            <p className="text-white/70 text-sm">Te contactaremos a la brevedad.</p>
          </div>
        ) : (
          <form action={formAction} className="space-y-5">
            {state?.error && (
              <p className="text-white/90 bg-white/10 text-sm px-4 py-3 rounded-lg text-center">
                {state.error}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-white/80 text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Tu nombre"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/80 text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 text-xs font-bold tracking-[0.2em] uppercase mb-2">
                Mensaje
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tu mensaje..."
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-white text-peko-red font-black text-xs tracking-[0.3em] uppercase py-4 hover:bg-peko-cream transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isPending ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
