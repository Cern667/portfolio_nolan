"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects, type Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "perso" | "iut">("all");
  const allProjects = getAllProjects();

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-primary-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-kaliRed via-primary-red to-primary-burgundy bg-clip-text text-transparent">
            Mes Projets
          </h1>
          <p className="text-xl text-gray-400">
            Découvrez mes réalisations personnelles et académiques
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <FilterButton
            active={filter === "all"}
            onClick={() => setFilter("all")}
          >
            Tous les projets
          </FilterButton>
          <FilterButton
            active={filter === "perso"}
            onClick={() => setFilter("perso")}
          >
            Projets Personnels
          </FilterButton>
          <FilterButton
            active={filter === "iut"}
            onClick={() => setFilter("iut")}
          >
            Projets IUT
          </FilterButton>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">
              Aucun projet trouvé dans cette catégorie.
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
      className={`relative transition-all duration-300 ${
        active
          ? "bg-primary-kaliRed hover:bg-primary-redDark text-white shadow-glow-red border-primary-kaliRed"
          : "border-primary-grayBorder hover:border-primary-kaliRed hover:text-primary-kaliRed"
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

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-primary-gray rounded-xl overflow-hidden border border-primary-grayBorder hover:border-primary-kaliRed transition-all duration-300 hover:shadow-glow-red"
    >
      <Link href={`/projects/${project.slug}`}>
        {/* Subtle scan line effect on hover */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 2, ease: "linear" }}
          className="absolute inset-x-0 h-0.5 bg-gradient-to-b from-transparent via-primary-kaliRed/30 to-transparent z-10 pointer-events-none"
        />

        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <div className="w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                project.category === "perso"
                  ? "bg-primary-kaliRed/80 text-white border border-primary-kaliRed shadow-glow-red"
                  : "bg-primary-burgundy/80 text-white border border-primary-burgundy"
              }`}
            >
              {project.category === "perso" ? "Personnel" : "IUT"}
            </span>
          </div>

          {/* Terminal dots decoration */}
          <div className="absolute top-4 left-4 flex gap-1.5 opacity-40 group-hover:opacity-70 transition-opacity">
            <div className="w-2.5 h-2.5 rounded-full bg-primary-kaliRed" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary-orange" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary-green" />
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 space-y-3">
          {/* Red line at top */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-kaliRed to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <h3 className="text-xl font-bold text-primary-white group-hover:text-primary-kaliRed transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary-black/50 text-primary-kaliRed text-xs rounded border border-primary-kaliRed/30 hover:bg-primary-kaliRed/10 hover:border-primary-kaliRed transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-gray-500 text-xs">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-primary-grayBorder group-hover:border-primary-kaliRed/30 transition-colors">
            <span className="text-sm text-gray-500 font-mono">{project.duration}</span>
            <ExternalLink className="w-5 h-5 text-primary-kaliRed group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </Link>
    </div>
  );
}
