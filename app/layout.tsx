import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peko Peko | Autentica Comida Japonesa en Barrio Chino",
  description:
    "Tu parada obligada en el Barrio Chino. Encontranos en el Pasaje ViaViva con Onigiri, Sushi, Yakitori, Mochi y todo el sabor tradicional de Japón al paso. Abierto todos los dias. Mendoza 1730 (CABA)",
  icons: {
    icon: "/PekoPekoWebFavicon2.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        {children}
        {/* Adobe Fonts — kit includes ROCA and Takaku Shadow */}
        <Script
          id="typekit"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(d){var config={kitId:'lcx7gzy',scriptTimeout:3000,async:true},h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)})(document);`,
          }}
        />
      </body>
    </html>
  );
}
