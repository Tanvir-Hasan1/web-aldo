import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "RistoAI - Smart AI Assistant for Restaurants",
  description: "Elevate your restaurant operations with AI menu suggestions, sales analytics, multi-lingual client support, and seamless order management.",
  keywords: ["restaurant AI", "menu suggestions", "sales analytics", "smart restaurant", "restaurant assistant", "RistoAI", "Aldo"],
  authors: [{ name: "RistoAI Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} data-scroll-behavior="smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
