import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peko Peko | Gastronomía Japonesa — Barrio Chino, Buenos Aires",
  description:
    "El mejor local de comida japonesa al paso en el Barrio Chino de Buenos Aires. Sushi, Gyozas, Karaage, Yakisoba y mucho más.",
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
