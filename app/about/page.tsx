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
                Récemment diplômé d&apos;un <strong className="text-primary-kaliRed font-semibold">BUT Informatique à l&apos;IUT de Montpellier-Sète</strong>, je poursuis mon cursus en école d&apos;ingénieurs au <strong className="text-primary-kaliRed font-semibold">CESI ou au CNAM</strong> dans la filière cybersécurité. Passionné par l&apos;automatisation et la sécurisation des systèmes, je développe un profil hybride à l&apos;intersection du DevOps, du DevSecOps et de la sécurité des réseaux.
              </p>

              <div className="mt-6 border-t border-primary-grayBorder/40 pt-6">
                <h3 className="text-white font-bold text-xl mb-3 flex items-center gap-2 drop-shadow-sm">
                  <Shield className="w-5 h-5 text-primary-kaliRed" />
                  Expérience Professionnelle – Engie Green (Stage)
                </h3>
                <p className="text-primary-kaliRed font-mono text-sm mb-2">
                  Chargé de missions Cybersécurité &amp; Infrastructure
                </p>
                <p className="text-gray-400 text-base leading-relaxed mb-3">
                  Au sein d&apos;Engie Green, j&apos;ai contribué à l&apos;évaluation et au renforcement de la sécurité des infrastructures industrielles de production d&apos;énergies renouvelables :
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-base text-gray-400 pl-2">
                  <li><strong>Audits de conformité :</strong> Analyse et contrôle technique des politiques de sécurité appliquées aux systèmes de supervision.</li>
                  <li><strong>Durcissement système (Hardening) :</strong> Configuration sécurisée et limitation de la surface d&apos;attaque des stations d&apos;administration.</li>
                  <li><strong>Gestion des vulnérabilités :</strong> Suivi des correctifs et évaluation des risques associés aux équipements réseau.</li>
                  <li><strong>Automatisation :</strong> Scripting de contrôles de sécurité récurrents pour assurer l&apos;intégrité opérationnelle.</li>
                </ul>
              </div>

              <div className="mt-6 border-t border-primary-grayBorder/40 pt-6">
                <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2 drop-shadow-sm">
                  <Cpu className="w-5 h-5 text-primary-kaliRed" />
                  Cybersécurité, DevOps &amp; Infrastructure
                </h3>
                <p>
                  Mon expertise technique s&apos;articule autour de plusieurs piliers d&apos;infrastructures modernes :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>l&apos;administration système avancée Linux et Windows Server / Active Directory (GPO de durcissement) ;</li>
                  <li>l&apos;orchestration conteneurisée (Docker, Docker Swarm, K3s) et la virtualisation ;</li>
                  <li>la conception de topologies réseau protégées (VLANs, VPN SSL/IPsec, pare-feux FortiGate, reverse-proxies Traefik) ;</li>
                  <li>l&apos;automatisation et l&apos;Infrastructure as Code (Ansible, Terraform, CI/CD).</li>
                </ul>
                <p className="mt-2">
                  Je me forme également de manière active aux usages de l&apos;intelligence artificielle (IA) appliqués à la détection de menaces, à l&apos;analyse de logs et à l&apos;automatisation des processus opérationnels.
                </p>
              </div>

              <div className="mt-6 border-t border-primary-grayBorder/40 pt-6">
                <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2 drop-shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-primary-kaliRed" />
                  Touche-à-tout et Proactif
                </h3>
                <p>
                  Ma philosophie d&apos;apprentissage repose sur la pratique et l&apos;expérimentation (PoC). En montant mon propre homelab et en réalisant des audits de sécurité de façon autonome, j&apos;acquiers une vision systémique des interactions entre développement logiciel, réseau et sécurité opérationnelle.
                </p>
              </div>

              <div className="mt-6 border-t border-primary-grayBorder/40 pt-6">
                <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2 drop-shadow-sm">
                  <Terminal className="w-5 h-5 text-primary-kaliRed" />
                  Recherche d&apos;Alternance
                </h3>
                <p>
                  Dès septembre 2026, dans le cadre de mon cycle d&apos;ingénieur CESI / CNAM, je recherche un contrat d&apos;alternance de <strong className="text-primary-kaliRed font-semibold">36 mois</strong> sur des fonctions de **DevOps / DevSecOps**, **Administrateur Réseaux &amp; Sécurité** ou **Analyste Cybersécurité**.
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
              <p className="text-xl font-bold mb-2 text-primary-white">Diplômé BUT Informatique</p>
              <p className="text-sm text-gray-400">Poursuite École d&apos;Ingénieurs (CESI / CNAM)</p>
              <p className="text-xs text-primary-kaliRed font-mono mt-1">Filière Cybersécurité</p>
            </div>
            {/* Active search card */}
            <div className="bg-primary-darker p-8 rounded-xl border border-primary-grayBorder flex flex-col justify-center items-center text-center">
              <Shield className="w-16 h-16 text-primary-kaliRed mb-4 opacity-50 shadow-glow-red" />
              <p className="font-mono text-sm text-primary-white font-bold uppercase tracking-widest mb-2">
                Recherche Alternance
              </p>
              <p className="text-xs text-gray-400">
                Contrat de 36 mois<br />dès Septembre 2026
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
