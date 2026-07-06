import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cyber3DBackground from "@/components/Cyber3DBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Nolan Pujol | Portfolio",
  description:
    "Étudiant en informatique, spécialité développement d'applications communicantes et sécurisées",
  keywords: [
    "Nolan Pujol",
    "Portfolio",
    "Développeur",
    "Cybersécurité",
    "Pentester",
    "BUT Informatique",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased relative min-h-screen bg-primary-black text-primary-white">
        <Cyber3DBackground />
        <Header />
        <main className="min-h-screen relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
