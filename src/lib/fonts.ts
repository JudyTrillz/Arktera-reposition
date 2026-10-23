import { Bebas_Neue, Inter } from "next/font/google";

// Bebas Neue: tall, condensed display face for headlines — bold editorial
// presence at large sizes. Single-weight by design (400 only).
export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
