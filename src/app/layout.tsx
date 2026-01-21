import type { Metadata } from "next";
import { fontSecundaria, fontPrincipal } from "./fonts";
import "./globals.css";
import "./home.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "",
  description: "",
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
