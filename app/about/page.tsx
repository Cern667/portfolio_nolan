"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Shield, Wifi, Database, Terminal, GitBranch, Cloud } from "lucide-react";

const skills = [
  { name: "Cybersécurité", level: 85, icon: Shield },
  { name: "Git & Versionning", level: 85, icon: GitBranch },
  { name: "Ansible", level: 80, icon: Terminal },
  { name: "Terraform", level: 80, icon: Cloud },
  { name: "Python", level: 65, icon: Code2 },
  { name: "Java 18-22", level: 60, icon: Code2 },
  { name: "HTML 5 / CSS 3", level: 60, icon: Code2 },
  { name: "PHP / SQL", level: 60, icon: Database },
  { name: "JavaScript", level: 60, icon: Code2 },
  { name: "Wireshark, BurpSuite", level: 80, icon: Shield },
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
            <h2 className="text-3xl font-bold text-primary-white mb-8">
              Mon Parcours
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Actuellement en <strong className="text-primary-kaliRed">3ème année de BUT Informatique</strong> à
                l&apos;IUT de Montpellier-Sète, je me spécialise dans le développement d&apos;applications communicantes et sécurisées.
              </p>

              <p>
                🎯 <strong className="text-primary-white">Mon cap : La Cybersécurité & le DevOps</strong><br />
                Si mon objectif principal est de devenir <strong className="text-primary-kaliRed">Pentester</strong>, je suis convaincu que la sécurité moderne passe par la maîtrise de l&apos;infrastructure. C&apos;est pourquoi je m&apos;oriente vers un profil <strong className="text-primary-kaliRed">DevSecOps</strong> : depuis cette année, je me forme intensivement aux outils de déploiement comme <strong>Ansible</strong> et <strong>Terraform</strong>. J&apos;ai d&apos;ailleurs décroché mon stage de fin d&apos;études chez <strong className="text-primary-kaliRed">Engie</strong> (avril 2026), une opportunité en or pour mettre ces compétences à l&apos;épreuve du réel.
              </p>

              <p>
                🛠️ <strong className="text-primary-white">Touche-à-tout et Proactif</strong><br />
                Avant de plonger dans le monde professionnel, ma philosophie est simple : explorer sans limite. Je réalise de nombreux projets d&apos;applications variés pour comprendre un maximum de technologies. Cette curiosité me permet d&apos;avoir une vision globale, indispensable pour identifier des vulnérabilités lors de mes sessions de Pentesting et de CTF.
              </p>

              <p>
                🎓 <strong className="text-primary-white">Et demain ?</strong><br />
                Pour la rentrée prochaine, j&apos;aspire à intégrer le <strong className="text-primary-kaliRed">Master Cybersécurité du CNAM</strong> ou la filière <strong className="text-primary-kaliRed">DevOps de Polytech</strong>. Mon but idéal : poursuivre en alternance, possiblement au sein de ma structure d&apos;accueil actuelle si l&apos;expérience est concluante.
              </p>

              <p>
                🎹 <strong className="text-primary-white">Équilibre & Engagement</strong><br />
                Au-delà du code, je suis très investi dans la vie culturelle. Je suis membre du service culturel du <strong className="text-primary-kaliRed">CROUS</strong> (groupe musique) où je joue du piano. Je participe régulièrement à des projets musicaux avec des amis, une passion qui stimule ma créativité et mon écoute. Côté sport, je pratique le <strong>handball</strong> et le <strong>padel</strong>, deux disciplines qui entretiennent mon goût du challenge et de l&apos;esprit d&apos;équipe.
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
