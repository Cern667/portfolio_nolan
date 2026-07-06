"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects, type Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectTag = "all" | "cyber" | "réseau" | "devops" | "dev";

export default function Projects() {
  const [activeTag, setActiveTag] = useState<ProjectTag>("all");
  const allProjects = getAllProjects();

  // Filter projects by active tag
  const filteredProjects = allProjects.filter((p) => {
    if (activeTag === "all") return true;
    return p.tags?.includes(activeTag as any);
  });

  // Separate into Personal and School (IUT)
  const personalProjects = filteredProjects.filter((p) => p.category === "perso");
  const schoolProjects = filteredProjects.filter((p) => p.category === "iut");

  const filterOptions: { key: ProjectTag; label: string }[] = [
    { key: "all", label: "Tous les projets" },
    { key: "cyber", label: "Cybersécurité" },
    { key: "réseau", label: "Réseau" },
    { key: "devops", label: "DevOps" },
    { key: "dev", label: "Développement" },
  ];

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline text-primary-white">
            Mes Projets
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez mes réalisations classées par rubriques et filtrables par compétences techniques.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filterOptions.map((opt) => (
            <FilterButton
              key={opt.key}
              active={activeTag === opt.key}
              onClick={() => setActiveTag(opt.key)}
            >
              {opt.label}
            </FilterButton>
          ))}
        </motion.div>

        {/* Projects Sections */}
        <div className="space-y-20">
          {/* Section: Personal Projects */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b border-primary-grayBorder pb-4">
              <div className="w-3 h-3 bg-primary-kaliRed rounded-full shadow-glow-red" />
              <h2 className="text-3xl font-bold font-headline text-primary-white">
                Projets Personnels
              </h2>
              <span className="text-sm font-mono text-gray-500 bg-primary-gray px-2 py-0.5 rounded border border-primary-grayBorder">
                {personalProjects.length}
              </span>
            </div>

            {personalProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {personalProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProjectCard project={project} index={index} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <p className="text-gray-500 italic text-sm py-4">
                Aucun projet personnel ne correspond à ce filtre.
              </p>
            )}
          </div>

          {/* Section: School Projects */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b border-primary-grayBorder pb-4">
              <div className="w-3 h-3 bg-primary-burgundy rounded-full" />
              <h2 className="text-3xl font-bold font-headline text-primary-white">
                Projets École
              </h2>
              <span className="text-sm font-mono text-gray-500 bg-primary-gray px-2 py-0.5 rounded border border-primary-grayBorder">
                {schoolProjects.length}
              </span>
            </div>

            {schoolProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {schoolProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProjectCard project={project} index={index} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <p className="text-gray-500 italic text-sm py-4">
                Aucun projet académique ne correspond à ce filtre.
              </p>
            )}
          </div>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg font-light">
              Aucun projet trouvé sur l&apos;ensemble du portfolio pour ce filtre.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Button
      onClick={onClick}
      variant={active ? "default" : "outline"}
      size="lg"
      className={`relative transition-all duration-300 font-headline uppercase tracking-widest text-xs md:text-sm ${active
        ? "bg-primary-kaliRed hover:bg-primary-redDark text-white shadow-glow-red border border-primary-kaliRed"
        : "bg-primary-gray border border-primary-grayBorder text-gray-400 hover:border-primary-kaliRed hover:text-primary-white hover:bg-primary-kaliRed/10"
        }`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeFilter"
          className="absolute inset-0 bg-primary-kaliRed rounded-lg -z-10 shadow-glow-kali"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Button>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Translate project tag to readable label
  const getTagLabel = (tag: string) => {
    switch (tag) {
      case "cyber": return "Cybersécurité";
      case "réseau": return "Réseau";
      case "devops": return "DevOps";
      case "dev": return "Développement";
      default: return tag;
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full flex flex-col bg-primary-gray rounded-xl overflow-hidden border border-primary-grayBorder hover:border-primary-kaliRed transition-all duration-300 hover:shadow-glow-red"
    >
      <Link href={`/projects/${project.slug}`} className="flex flex-col h-full">
        {/* Subtle scan line effect on hover */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 2, ease: "linear" }}
          className="absolute inset-x-0 h-0.5 bg-gradient-to-b from-transparent via-primary-kaliRed/30 to-transparent z-10 pointer-events-none"
        />

        {/* Image */}
        <div className="relative h-56 overflow-hidden w-full">
          <div className="w-full h-full relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

          {/* Subtags Display */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5 z-10">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-primary-black/85 text-primary-kaliRed border border-primary-kaliRed/30 shadow-glow-red"
              >
                {getTagLabel(tag)}
              </span>
            ))}
          </div>

          {/* Terminal dots decoration */}
          <div className="absolute top-4 left-4 flex gap-1.5 opacity-40 group-hover:opacity-70 transition-opacity">
            <div className="w-2.5 h-2.5 rounded-full bg-primary-kaliRed" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary-orange" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary-green" />
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 flex flex-col flex-grow justify-between space-y-4">
          {/* Red line at top */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-kaliRed to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-primary-white group-hover:text-primary-kaliRed transition-colors duration-300 leading-snug">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Footer */}
          <div className="space-y-4 pt-4 border-t border-primary-grayBorder group-hover:border-primary-kaliRed/30 transition-colors">
            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-primary-black/40 text-gray-300 text-[10px] rounded border border-primary-grayBorder hover:border-primary-kaliRed/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-1.5 py-0.5 text-gray-500 text-[10px]">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500 font-mono">{project.duration}</span>
              <div className="flex items-center gap-1 text-primary-kaliRed font-mono font-bold group-hover:translate-x-1 transition-transform">
                Voir détails
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
