"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Email", icon: Mail, href: "mailto:nolan@example.com" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-black border-t border-primary-kaliRed/20 relative overflow-hidden">
      {/* Subtle red glow at top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-kaliRed to-transparent" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-kaliRed to-primary-burgundy bg-clip-text text-transparent font-mono">
              &gt;_ Nolan Pujol
            </h3>
            <p className="text-gray-400">
              Étudiant en informatique passionné par la cybersécurité et le
              développement d&apos;applications sécurisées.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-primary-kaliRed transition-colors group flex items-center gap-2"
                >
                  <span className="text-primary-kaliRed opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary-kaliRed transition-colors group flex items-center gap-2"
                >
                  <span className="text-primary-kaliRed opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-primary-kaliRed transition-colors group flex items-center gap-2"
                >
                  <span className="text-primary-kaliRed opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary-kaliRed transition-colors group flex items-center gap-2"
                >
                  <span className="text-primary-kaliRed opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-white">
              Réseaux sociaux
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-gray hover:bg-primary-kaliRed transition-all duration-300 border border-primary-grayBorder hover:border-primary-kaliRed hover:shadow-glow-red"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Nolan Pujol. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
