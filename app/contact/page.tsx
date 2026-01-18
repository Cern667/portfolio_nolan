"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-primary-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-kaliRed to-primary-burgundy bg-clip-text text-transparent">
            Contactez-moi
          </h1>
          <p className="text-xl text-gray-400">
            Une question ? Un projet ? N&apos;hésitez pas à me contacter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Profile & Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="bg-primary-gray rounded-2xl p-8 border border-primary-grayBorder hover:border-primary-kaliRed transition-colors duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-kaliRed to-primary-burgundy rounded-full blur-xl opacity-30" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-kaliRed shadow-glow-red">
                    <Image
                      src="/images/hacker.jpg"
                      alt="Nolan Pujol"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-white">
                    Nolan Pujol
                  </h2>
                  <p className="text-gray-400 mt-2">
                    Étudiant en informatique
                  </p>
                </div>

                <p className="text-gray-300">
                  Bonjour, merci de visiter mon site. N&apos;hésitez pas à me
                  contacter pour discuter de cybersécurité, développement ou
                  opportunités professionnelles !
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-primary-gray rounded-2xl p-8 border border-primary-grayBorder hover:border-primary-kaliRed transition-colors duration-300">
              <h3 className="text-xl font-bold text-primary-white mb-6">
                Réseaux sociaux
              </h3>
              <div className="space-y-4">
                <SocialButton
                  icon={<Linkedin />}
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/nolan-pujol-a6ab502aa/"
                  color="bg-primary-kaliRed"
                />
                <SocialButton
                  icon={<Github />}
                  label="GitHub"
                  href="https://github.com/Cern667"
                  color="bg-primary-gray"
                />
                <SocialButton
                  icon={<Mail />}
                  label="nolan.pujol@etu.umontpellier.fr"
                  href="mailto:nolan.pujol@etu.umontpellier.fr"
                  color="bg-primary-redDark"
                />
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-primary-gray rounded-2xl p-8 border border-primary-grayBorder hover:border-primary-kaliRed transition-colors duration-300">
              <h3 className="text-2xl font-bold text-primary-white mb-6">
                Envoyez-moi un message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 space-y-4"
                >
                  <CheckCircle className="w-16 h-16 text-primary-green" />
                  <h4 className="text-xl font-semibold text-primary-white">
                    Message envoyé !
                  </h4>
                  <p className="text-gray-400 text-center">
                    Merci pour votre message. Je vous répondrai dans les plus
                    brefs délais.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Prénom
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-primary-black border border-primary-grayBorder rounded-lg text-white focus:border-primary-kaliRed focus:ring-2 focus:ring-primary-kaliRed/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-primary-black border border-primary-grayBorder rounded-lg text-white focus:border-primary-kaliRed focus:ring-2 focus:ring-primary-kaliRed/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary-black border border-gray-700 rounded-lg text-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-primary-black border border-primary-grayBorder rounded-lg text-white focus:border-primary-kaliRed focus:ring-2 focus:ring-primary-kaliRed/20 outline-none transition-all resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary-kaliRed hover:bg-primary-redDark shadow-glow-red">
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer le message
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SocialButton({
  icon,
  label,
  href,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-4 px-6 py-4 ${color} rounded-xl text-white font-medium hover:shadow-glow-red transition-all border border-primary-grayBorder hover:border-primary-kaliRed`}
    >
      <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg">
        {icon}
      </div>
      <span>{label}</span>
    </motion.a>
  );
}
