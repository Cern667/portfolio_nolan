"use client";

import { motion } from "framer-motion";
import { Mail, Link as LinkIcon, Terminal, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-primary-black text-primary-white flex flex-col pt-24">
      <main className="flex-grow max-w-screen-2xl mx-auto px-8 py-16 w-full">
        {/* Hero Section / Editorial Header */}
        <section className="mb-20 ml-0 md:ml-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-primary-kaliRed"></div>
            <span className="font-headline uppercase tracking-widest text-primary-kaliRed text-sm font-semibold">
              Profil
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            Allier déploiement et <span className="text-primary-kaliRed">cybersécurité.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed"
          >
            Diplômé d&apos;un BUT Informatique et poursuivant en école d&apos;ingénieurs en cybersécurité (CESI / CNAM), je recherche une alternance de <strong className="text-primary-kaliRed font-semibold">36 mois</strong> à partir de septembre 2026 dans les domaines du DevOps, du DevSecOps, de l&apos;administration système et de la sécurité réseau. N&apos;hésitez pas à me contacter pour échanger sur nos opportunités de collaboration.
          </motion.p>
        </section>

        {/* Main Content: Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Contact Form Section (Left 7/12) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-primary-gray p-8 md:p-12 rounded-lg border border-primary-grayBorder group relative focus-within:border-primary-kaliRed/50 transition-colors duration-500"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-kaliRed/20 to-transparent group-focus-within:via-primary-kaliRed/50 transition-all duration-500" />
            <form className="space-y-8" action="https://formspree.io/f/mqakeowb" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest text-gray-400 ml-1 font-headline">Prénom</label>
                  <input
                    name="firstname"
                    className="w-full bg-primary-black/50 border-none border-b border-primary-grayBorder/50 text-primary-white placeholder:text-gray-600 px-4 py-4 rounded-lg focus:ring-0 focus:border-primary-kaliRed transition-all"
                    placeholder="John"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest text-gray-400 ml-1 font-headline">Nom</label>
                  <input
                    name="lastname"
                    className="w-full bg-primary-black/50 border-none border-b border-primary-grayBorder/50 text-primary-white placeholder:text-gray-600 px-4 py-4 rounded-lg focus:ring-0 focus:border-primary-kaliRed transition-all"
                    placeholder="Doe"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-gray-400 ml-1">Email</label>
                <input
                  name="email"
                  className="w-full bg-primary-black/50 border-none border-b border-primary-grayBorder/50 text-primary-white placeholder:text-gray-600 px-4 py-4 rounded-lg focus:ring-0 focus:border-primary-kaliRed transition-all"
                  placeholder="john.doe@secure-cloud.com"
                  type="email"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea
                  name="message"
                  className="w-full bg-primary-black/50 border-none border-b border-primary-grayBorder/50 text-primary-white placeholder:text-gray-600 px-4 py-4 rounded-lg focus:ring-0 focus:border-primary-kaliRed transition-all resize-none"
                  placeholder="Décrivez votre besoin technique ou votre projet..."
                  rows={5}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-primary-kaliRed text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-primary-red transition-all active:scale-95 shadow-glow-kali border border-primary-kaliRed font-headline"
              >
                Envoyer votre message
              </button>
            </form>
          </motion.div>

          {/* Side Cards Section (Right 5/12) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-primary-gray p-8 rounded-lg border border-primary-grayBorder group hover:bg-primary-gray/80 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-primary-kaliRed opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-kaliRed/10 rounded-lg text-primary-kaliRed">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 text-primary-white">Email Direct</h3>
                  <p className="text-gray-400 text-sm mb-4">Temps de réponse moyen : &lt; 24h</p>
                  <a
                    className="text-primary-kaliRed font-mono text-lg hover:underline decoration-primary-kaliRed/30 underline-offset-4"
                    href="mailto:nolanpujol.pro34@gmail.com"
                  >
                    nolanpujol.pro34@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* LinkedIn Card */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                href="https://www.linkedin.com/in/nolan-pujol-a6ab502aa"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary-gray p-6 rounded-lg border border-primary-grayBorder hover:scale-[1.02] hover:border-primary-kaliRed/50 transition-all group"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <LinkIcon className="w-5 h-5 text-primary-kaliRed" />
                    <span className="font-medium text-primary-white">LinkedIn</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-primary-kaliRed group-hover:translate-x-1 transition-all" />
                </div>
              </motion.a>

              {/* GitHub Card */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                href="https://github.com/Cern667"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary-gray p-6 rounded-lg border border-primary-grayBorder hover:scale-[1.02] hover:border-primary-kaliRed/50 transition-all group"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Terminal className="w-5 h-5 text-primary-kaliRed" />
                    <span className="font-medium text-primary-white">GitHub</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-primary-kaliRed group-hover:translate-x-1 transition-all" />
                </div>
              </motion.a>

              {/* TryHackMe Card */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                href="https://tryhackme.com/p/cernpentesthelsing"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary-gray p-6 rounded-lg border border-primary-grayBorder hover:scale-[1.02] hover:border-primary-kaliRed/50 transition-all group"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Terminal className="w-5 h-5 text-primary-kaliRed" />
                    <span className="font-medium text-primary-white">TryHackMe</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-primary-kaliRed group-hover:translate-x-1 transition-all" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
