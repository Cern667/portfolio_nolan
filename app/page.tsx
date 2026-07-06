"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-transparent pt-32 pb-16 px-6 md:px-20 lg:px-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary-kaliRed/10 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-primary-burgundy/10 rounded-full blur-3xl" />
      </div>

      {/* Main Text Content (Centered vertically in the remaining space) */}
      <div className="flex-grow flex flex-col justify-center my-auto relative z-10">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl sm:text-8xl md:text-[8vw] font-extrabold text-primary-white tracking-tighter leading-[0.85] font-sans"
          >
            Nolan<br />Pujol
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-[3.5vw] font-bold text-gray-500 tracking-tight leading-[0.95] font-sans"
          >
            Cyber, Network<br />& DevOps Student
          </motion.h2>
        </div>
      </div>

      {/* Footer Area (Status + Actions on the left, Socials on the right) */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-10 border-t border-primary-grayBorder/30">
        {/* Left Side: Status Dot + Pill buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-5"
        >
          <div className="flex items-center gap-2.5 text-gray-400 font-mono text-xs md:text-sm">
            <span className="w-2 h-2 rounded-full bg-primary-kaliRed animate-pulse shadow-glow-red" />
            <span>Recherche alternance Cyber / Réseau / DevOps (36 mois)</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Button
              asChild
              size="lg"
              className="bg-primary-white hover:bg-gray-200 text-primary-black font-semibold rounded-full px-8 py-5 h-auto text-sm md:text-base transition-all duration-300 shadow-lg"
            >
              <Link href="/contact">Me contacter</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="link"
              className="text-primary-white hover:text-primary-kaliRed p-0 h-auto text-sm md:text-base font-semibold group"
            >
              <Link href="/cv/cv_nolan_pujol.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Voir mon CV
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Right Side: Social Media Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex items-center gap-4"
        >
          <SocialLink href="https://www.linkedin.com/in/nolan-pujol-a6ab502aa/" icon={<Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />} />
          <SocialLink href="https://github.com/Cern667" icon={<Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />} />
          <SocialLink href="https://tryhackme.com/p/cernpentesthelsing" icon={<Terminal className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />} />
          <SocialLink href="mailto:nolan.pujol@etu.umontpellier.fr" icon={<Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />} />
        </motion.div>
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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-black/30 hover:bg-primary-kaliRed border border-primary-grayBorder hover:border-primary-kaliRed hover:shadow-glow-red transition-all duration-300 group"
    >
      {icon}
    </motion.a>
  );
}
