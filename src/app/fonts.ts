import localFont from "next/font/local";

export const fontPrincipal = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNeueLTStd-Roman.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-principal",
  display: "swap",
});

export const fontSecundaria = localFont({
  src: [
    {
      path: "../../public/fonts/JetBrainsMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-secundaria",
  display: "swap",
});
