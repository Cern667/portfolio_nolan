"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, GraduationCap, ShieldCheck, Cpu, Code2, Trophy, Music, Send } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-primary-black text-primary-white selection:bg-primary-kaliRed/20 selection:text-primary-kaliRed pt-24">
      <main className="max-w-screen-2xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <header className="mb-32">
          <div className="max-w-3xl ml-0 md:ml-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[2px] bg-primary-kaliRed"></div>
              <span className="font-headline uppercase tracking-widest text-primary-kaliRed text-sm font-semibold">
                Profil Sécurisé
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-headline text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-primary-white"
            >
              À propos de moi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl italic"
            >
              Découvrez mon parcours et mes compétences à l&apos;intersection de la
              sécurité et des opérations.
            </motion.p>
          </div>
        </header>

        {/* Story Section: Mon Parcours (Bento Style) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 bg-primary-darker p-10 rounded-xl relative overflow-hidden border border-primary-grayBorder"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Shield className="w-48 h-48 text-primary-kaliRed" />
            </div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 font-headline">
              <GraduationCap className="text-primary-kaliRed w-8 h-8" />
              Mon Parcours
            </h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-light relative z-10">
              <p>
                Actuellement en <strong className="text-primary-kaliRed font-semibold">3ème année de BUT Informatique à l&apos;IUT de Montpellier-Sète</strong>, je me spécialise dans le développement d&apos;applications communicantes et sécurisées.
              </p>

              <div className="mt-6">
                <h3 className="text-primary-white font-bold text-xl mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary-kaliRed" />
                  Mon cap : La Cybersécurité & le DevOps
                </h3>
                <p>
                  Si mon objectif principal est de devenir <strong className="text-primary-white">Pentester</strong>, je suis convaincu que la sécurité moderne passe par la maîtrise de l&apos;infrastructure. C&apos;est pourquoi je m&apos;oriente vers un profil <strong className="text-primary-white">DevSecOps</strong> : depuis cette année, je me forme intensivement aux outils de déploiement comme Ansible et Terraform. J&apos;ai d&apos;ailleurs décroché mon stage de fin d&apos;études chez <strong className="text-primary-kaliRed">Engie</strong> (avril 2026), une opportunité en or pour mettre ces compétences à l&apos;épreuve du réel.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-primary-white font-bold text-xl mb-2 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-primary-kaliRed" />
                  Touche-à-tout et Proactif
                </h3>
                <p>
                  Avant de plonger dans le monde professionnel, ma philosophie est simple : explorer sans limite. Je réalise de nombreux projets d&apos;applications variés pour comprendre un maximum de technologies. Cette curiosité me permet d&apos;avoir une vision globale, indispensable pour identifier des vulnérabilités lors de mes sessions de <strong className="text-primary-white">Pentesting et de CTF.</strong>
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-primary-white font-bold text-xl mb-2 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-primary-kaliRed" />
                  Et demain ?
                </h3>
                <p>
                  Pour la rentrée prochaine, j&apos;aspire à intégrer le Master Cybersécurité du CNAM ou la filière DevOps de Polytech. Mon but idéal : poursuivre en alternance, possiblement au sein de ma structure d&apos;accueil actuelle si l&apos;expérience est concluante.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 space-y-6"
          >
            <div className="bg-primary-gray p-8 rounded-xl border-l-4 border-primary-kaliRed">
              <h3 className="text-primary-kaliRed font-headline uppercase text-xs tracking-widest mb-4">
                Statut Actuel
              </h3>
              <p className="text-xl font-bold mb-2 text-primary-white">Étudiant BUT 3</p>
              <p className="text-sm text-gray-400">Spécialisation Cybersécurité &amp; DevOps</p>
            </div>
            {/* AI Image removed as requested */}
            <div className="bg-primary-darker p-8 rounded-xl border border-primary-grayBorder flex flex-col justify-center items-center text-center">
              <Shield className="w-16 h-16 text-primary-kaliRed mb-4 opacity-50" />
              <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">
                Recherche active<br />Alternance 2026
              </p>
            </div>
          </motion.div>
        </section>

        {/* Skills Section: Compétences */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-headline text-4xl font-bold mb-4 text-primary-white">
                Compétences Techniques
              </h2>
              <p className="text-gray-400">
                Maîtrise des outils et langages de la stack moderne.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skill Group: Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary-dark p-8 rounded-xl hover:shadow-[0_0_20px_rgba(241,28,28,0.1)] transition-all border border-primary-grayBorder"
            >
              <div className="flex items-center justify-between mb-8">
                <ShieldCheck className="text-primary-kaliRed w-8 h-8" />
                <span className="text-sm font-bold font-headline border border-primary-grayBorder text-gray-400 px-3 py-1 rounded">
                  SEC_CORE
                </span>
              </div>
              <h3 className="text-xl font-bold mb-6 font-headline text-primary-white">Sécurité</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2 text-primary-white">
                    <span>Cybersécurité</span>
                    <span className="text-primary-kaliRed">85%</span>
                  </div>
                  <div className="h-1.5 bg-primary-grayMedium rounded-full overflow-hidden">
                    <div className="h-full bg-primary-kaliRed w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2 text-primary-white">
                    <span>Wireshark / BurpSuite</span>
                    <span className="text-primary-kaliRed">80%</span>
                  </div>
                  <div className="h-1.5 bg-primary-grayMedium rounded-full overflow-hidden">
                    <div className="h-full bg-primary-kaliRed w-[80%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2 text-primary-white">
                    <span>Nmap / ZAP</span>
                    <span className="text-primary-kaliRed">75%</span>
                  </div>
                  <div className="h-1.5 bg-primary-grayMedium rounded-full overflow-hidden">
                    <div className="h-full bg-primary-kaliRed w-[75%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2 text-primary-white">
                    <span>Nessus / Hashcat / Hydra</span>
                    <span className="text-primary-kaliRed">70%</span>
                  </div>
                  <div className="h-1.5 bg-primary-grayMedium rounded-full overflow-hidden">
                    <div className="h-full bg-primary-kaliRed w-[70%]"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skill Group: Automation/IaC */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary-dark p-8 rounded-xl hover:shadow-[0_0_20px_rgba(241,28,28,0.1)] transition-all border border-primary-grayBorder"
            >
              <div className="flex items-center justify-between mb-8">
                <Cpu className="text-primary-kaliRed w-8 h-8" />
                <span className="text-sm font-bold font-headline border border-primary-grayBorder text-gray-400 px-3 py-1 rounded">
                  INFRA_CODE
                </span>
              </div>
              <h3 className="text-xl font-bold mb-6 font-headline text-primary-white">
                Automation &amp; IaC
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2 text-primary-white">
                    <span>Ansible</span>
                    <span className="text-primary-kaliRed">80%</span>
                  </div>
                  <div className="h-1.5 bg-primary-grayMedium rounded-full overflow-hidden">
                    <div className="h-full bg-primary-kaliRed w-[80%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2 text-primary-white">
                    <span>Terraform</span>
                    <span className="text-primary-kaliRed">80%</span>
                  </div>
                  <div className="h-1.5 bg-primary-grayMedium rounded-full overflow-hidden">
                    <div className="h-full bg-primary-kaliRed w-[80%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2 text-primary-white">
                    <span>Git &amp; Versionning</span>
                    <span className="text-primary-kaliRed">85%</span>
                  </div>
                  <div className="h-1.5 bg-primary-grayMedium rounded-full overflow-hidden">
                    <div className="h-full bg-primary-kaliRed w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2 text-primary-white">
                    <span>Docker &amp; Swarm</span>
                    <span className="text-primary-kaliRed">85%</span>
                  </div>
                  <div className="h-1.5 bg-primary-grayMedium rounded-full overflow-hidden">
                    <div className="h-full bg-primary-kaliRed w-[85%]"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skill Group: Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-primary-dark p-8 rounded-xl hover:shadow-[0_0_20px_rgba(241,28,28,0.1)] transition-all border border-primary-grayBorder"
            >
              <div className="flex items-center justify-between mb-8">
                <Code2 className="text-primary-kaliRed w-8 h-8" />
                <span className="text-sm font-bold font-headline border border-primary-grayBorder text-gray-400 px-3 py-1 rounded">
                  DEV_APPS
                </span>
              </div>
              <h3 className="text-xl font-bold mb-6 font-headline text-primary-white">
                Développement
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2 text-primary-white">
                    <span>Python</span>
                    <span className="text-primary-kaliRed">65%</span>
                  </div>
                  <div className="h-1.5 bg-primary-grayMedium rounded-full overflow-hidden">
                    <div className="h-full bg-primary-kaliRed w-[65%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2 text-primary-white">
                    <span>Java 18-22</span>
                    <span className="text-primary-kaliRed">60%</span>
                  </div>
                  <div className="h-1.5 bg-primary-grayMedium rounded-full overflow-hidden">
                    <div className="h-full bg-primary-kaliRed w-[60%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2 text-primary-white">
                    <span>HTML 5 / CSS 3 / PHP / SQL</span>
                    <span className="text-primary-kaliRed">60%</span>
                  </div>
                  <div className="h-1.5 bg-primary-grayMedium rounded-full overflow-hidden">
                    <div className="h-full bg-primary-kaliRed w-[60%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2 text-primary-white">
                    <span>JavaScript / C / Bash</span>
                    <span className="text-primary-kaliRed">60%</span>
                  </div>
                  <div className="h-1.5 bg-primary-grayMedium rounded-full overflow-hidden">
                    <div className="h-full bg-primary-kaliRed w-[60%]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Balance & Engagement Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 grid grid-cols-2 gap-4"
          >
            <div className="bg-primary-darker p-1 rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1513028738826-f000cded30a4?q=80&w=800&auto=format&fit=crop"
                alt="Handball in action"
                className="rounded-lg w-full object-cover h-[250px] md:h-[400px] grayscale hover:grayscale-0 transition-all duration-700"
                width={400}
                height={600}
              />
            </div>
            <div className="bg-primary-darker p-1 rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1552422535-c45813c61732?w=800&q=80"
                alt="Playing piano"
                className="rounded-lg w-full object-cover h-[250px] md:h-[400px] grayscale hover:grayscale-0 transition-all duration-700"
                width={400}
                height={600}
              />
            </div>
          </motion.div>

          {/* Texts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 px-4 md:px-8"
          >
            <h2 className="font-headline text-4xl font-bold mb-8 text-primary-white">
              Équilibre &amp; Engagement
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 shrink-0 bg-primary-gray rounded-lg flex items-center justify-center text-primary-kaliRed border border-primary-grayBorder">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-2 text-primary-white">
                    Esprit d&apos;Équipe &amp; Challenge
                  </h4>
                  <p className="text-gray-400 font-light">
                    Le sport est mon exutoire. Pratiquant le <strong className="text-primary-white font-medium">handball</strong> et le <strong className="text-primary-white font-medium">padel</strong>, deux disciplines qui entretiennent mon goût du challenge et de l&apos;esprit d&apos;équipe.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 shrink-0 bg-primary-gray rounded-lg flex items-center justify-center text-primary-kaliRed border border-primary-grayBorder">
                  <Music className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-2 text-primary-white">
                    Harmonie &amp; Créativité
                  </h4>
                  <p className="text-gray-400 font-light">
                    Au-delà du code, je suis très investi dans la vie culturelle. Je suis membre du service culturel du <strong className="text-primary-white font-medium">CROUS</strong> (groupe musique) où je joue du piano. Je produis aussi de la musique sur <strong className="text-primary-white font-medium">FL Studio</strong> en dehors de ce groupe, stimulant ainsi ma créativité technique et artistique.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact direct button */}
        <div className="flex justify-center mt-12 mb-16">
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-primary-kaliRed text-white px-8 py-4 rounded-xl font-bold font-headline uppercase tracking-widest hover:bg-primary-red transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(241,28,28,0.2)]"
          >
            Me contacter
            <Send className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  );
}
