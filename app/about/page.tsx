"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Shield, Wifi, Database, Terminal, GitBranch } from "lucide-react";

const skills = [
  { name: "HTML 5 / CSS 3", level: 90, icon: Code2 },
  { name: "Java 18-22", level: 80, icon: Code2 },
  { name: "PHP / SQL", level: 80, icon: Database },
  { name: "Python", level: 65, icon: Code2 },
  { name: "GNS3", level: 70, icon: Wifi },
  { name: "JavaScript", level: 70, icon: Code2 },
  { name: "Git & Versionning", level: 85, icon: GitBranch },
  { name: "Wireshark, BurpSuite", level: 80, icon: Shield },
  { name: "Cybersécurité", level: 75, icon: Terminal },
];

export default function About() {
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
            À propos de moi
          </h1>
          <p className="text-xl text-gray-400">
            Découvrez mon parcours et mes compétences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-8">
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

            <h2 className="text-3xl font-bold text-primary-white">
              Bienvenue sur mon portfolio !
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Je suis actuellement en <strong className="text-primary-kaliRed">2ème année de BUT Informatique</strong> à
                l&apos;IUT de Montpellier-Sète, spécialisé en{" "}
                <strong className="text-primary-kaliRed">
                  développement d&apos;applications communicantes et sécurisées
                </strong>
                .
              </p>

              <p>
                Passionné par la{" "}
                <strong className="text-primary-kaliRed">programmation</strong>, je
                maîtrise plusieurs langages comme{" "}
                <strong>Java, Python, PHP et SQL</strong>. Mon véritable intérêt
                réside dans la{" "}
                <strong className="text-primary-kaliRed">cybersécurité</strong>.
              </p>

              <p>
                J&apos;adore participer à des{" "}
                <strong className="text-primary-kaliRed">CTF</strong> sur des plateformes
                comme <strong>TryHackMe</strong>, où j&apos;ai développé des
                compétences en{" "}
                <strong className="text-primary-kaliRed">pentesting</strong> et en
                analyse de vulnérabilités.
              </p>

              <p>
                En dehors de l&apos;informatique, je pratique le{" "}
                <strong>handball et le padel</strong>, et je suis passionné de{" "}
                <strong>musique</strong>. Je joue du piano depuis plusieurs années
                et j&apos;ai récemment commencé la{" "}
                <strong>production musicale</strong>.
              </p>

              <p className="text-primary-kaliRed font-semibold text-lg">
                Mon objectif : devenir pentester professionnel.
              </p>

              <p className="bg-primary-kaliRed/10 border border-primary-kaliRed rounded-lg p-4 shadow-glow-red">
                🔍 Actuellement à la recherche d&apos;une{" "}
                <strong className="text-primary-kaliRed">alternance</strong> à partir
                de <strong>septembre 2025</strong> en cybersécurité ou
                développement sécurisé.
              </p>
            </div>
          </motion.div>

          {/* Right side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-primary-white mb-8">
              Compétences
            </h2>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-primary-kaliRed" />
                      <span className="text-primary-white font-medium">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-primary-kaliRed font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-primary-gray rounded-full overflow-hidden border border-primary-grayBorder">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-primary-kaliRed to-primary-burgundy rounded-full shadow-glow-red"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
