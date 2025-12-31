import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RWUA - Rural Upliftment Women Association",
  description: "Empowering rural women through education, skill development, and sustainable livelihood opportunities.",
  keywords: "rural development, women empowerment, education, skill development, NGO",
  authors: [{ name: "RWUA Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "RWUA - Rural Upliftment Women Association",
    description: "Empowering rural women through education, skill development, and sustainable livelihood opportunities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RWUA - Rural Upliftment Women Association",
    description: "Empowering rural women through education, skill development, and sustainable livelihood opportunities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} ${poppins.variable} ${lora.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-rwua-primary text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
