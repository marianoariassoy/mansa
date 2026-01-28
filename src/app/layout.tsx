import type { Metadata } from "next";
import { fontSecundaria, fontPrincipal } from "./fonts";
import "./globals.css";
import "./home.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "Mansa",
    template: "%s - Mansa",
  },
  description:
    "Mansa es un taller de diseño y fabricación que trabaja en la intersección entre idea, técnica y materia. Su práctica se estructura en tres líneas principales.",
  icons: {
    icon: "#",
  },
  generator: "marianoarias.soy",
  openGraph: {
    type: "website",
    locale: "es_AR",
    title: "Mansa",
    description:
      "Mansa es un taller de diseño y fabricación que trabaja en la intersección entre idea, técnica y materia. Su práctica se estructura en tres líneas principales.",
    images: [
      {
        url: "/images/info.jpg",
        width: 800,
        height: 800,
        alt: "Mansa",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fontPrincipal.variable} ${fontSecundaria.variable}`}>
        <Header />

        {children}
      </body>
    </html>
  );
}
