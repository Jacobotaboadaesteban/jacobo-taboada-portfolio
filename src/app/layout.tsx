import type { Metadata, Viewport } from "next";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacobo Taboada Esteban — Datos, IA & Software",
  description: "Portfolio de Jacobo Taboada Esteban. Datos, inteligencia artificial y software con visión de negocio. Pasa al bar y descubre los proyectos.",
  applicationName: "Jacobo Taboada Esteban",
  authors: [{ name: "Jacobo Taboada Esteban" }],
  openGraph: {
    title: "Jacobo Taboada Esteban — Datos, IA & Software",
    description: "Buenas ideas. Buena compañía. Un portfolio de datos, IA y software.",
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_GB",
  },
  twitter: { card: "summary", title: "Jacobo Taboada Esteban — Portfolio" },
};

export const viewport: Viewport = { themeColor: "#102b24" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
