import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mafleurr | Luxurious Bespoke Flowers",
  description:
    "Mafleurr is a bespoke luxury florist based in Bolton, Greater Manchester, crafting one-of-a-kind fresh, dried and fruit-preserved floral arrangements. Concept pitch site.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${lora.variable}`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-body antialiased">
        {children}
      </body>
    </html>
  );
}
