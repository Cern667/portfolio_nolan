"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Projets", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-primary-black/95 backdrop-blur-md border-b border-primary-grayBorder shadow-lg"
        : "bg-primary-black bg-gradient-to-b from-primary-darker to-transparent border-b border-primary-grayBorder/20"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold text-primary-white group">
            <motion.span
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-primary-kaliRed via-primary-red to-primary-burgundy bg-clip-text text-transparent font-mono relative tracking-tighter"
            >
              <span className="relative">
                DevSecOps Terminal
                <span className="absolute -right-1.5 top-0 w-1.5 h-full bg-primary-kaliRed animate-terminal-blink" />
              </span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-primary-white hover:text-primary-kaliRed transition-colors relative group font-medium tracking-wider text-sm uppercase"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-kaliRed transition-all group-hover:w-full shadow-glow-red" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Actions (Terminal & Mobile Menu) */}
          <div className="flex items-center gap-2 md:gap-4 md:border-l md:border-primary-grayBorder md:pl-6">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-kaliRed hover:bg-primary-gray/50 rounded-md transition-all active:scale-95 duration-100 hidden md:flex"
            >
              <Terminal className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary-white hover:text-primary-kaliRed"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-black/95 backdrop-blur-lg"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4 border-t border-primary-kaliRed/30">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-primary-white hover:text-primary-kaliRed transition-colors py-2 text-lg font-medium flex items-center gap-2 group"
                  >
                    <span className="text-primary-kaliRed opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
