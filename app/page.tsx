"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Download, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary-kaliRed/10 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-primary-burgundy/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary-kaliRed text-lg font-poppins"
            >
              Hello, Je suis
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-primary-white"
            >
              Nolan Pujol
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 font-poppins"
            >
              Étudiant en 3ème année de BUT Informatique, spécialité développement
              d&apos;applications communicantes et sécurisées
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary-kaliRed hover:bg-primary-redDark text-white shadow-glow-red"
              >
                <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Voir mon CV
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-kaliRed text-primary-kaliRed hover:bg-primary-kaliRed/10"
              >
                <Link href="/contact">Me contacter</Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4 pt-8"
            >
              <SocialLink href="https://www.linkedin.com/in/nolan-pujol-a6ab502aa/" icon={<Linkedin />} />
              <SocialLink href="https://github.com/Cern667" icon={<Github />} />
              <SocialLink href="https://tryhackme.com/p/cernpentesthelsing" icon={<Terminal />} />
              <SocialLink href="mailto:nolan.pujol@etu.umontpellier.fr" icon={<Mail />} />
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-kaliRed to-primary-burgundy rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-kaliRed shadow-glow-kali">
                <Image
                  src="/images/hacker.jpg"
                  alt="Nolan Pujol"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-gray hover:bg-primary-kaliRed transition-colors border border-primary-grayBorder hover:border-primary-kaliRed hover:shadow-glow-red"
    >
      {icon}
    </motion.a>
  );
}
