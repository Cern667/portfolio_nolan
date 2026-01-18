import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/data/projects";
import { ArrowLeft, Calendar, Clock, Users, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import CompetencesDisplay from "@/components/CompetencesDisplay";
import ImageSlider from "@/components/ImageSlider";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-primary-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Retour aux projets
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold ${project.category === "perso"
                ? "bg-primary-kaliRed/20 text-primary-kaliRed border border-primary-kaliRed shadow-glow-red"
                : "bg-primary-burgundy/20 text-primary-burgundy border border-primary-burgundy"
                }`}
            >
              {project.category === "perso" ? "Projet Personnel" : "Projet IUT"}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-white">
            {project.title}
          </h1>

          {/* Project Info */}
          <div className="flex flex-wrap gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary-kaliRed" />
              <span>{project.dates}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary-kaliRed" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary-kaliRed" />
              <span>{project.team}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Images */}
            {project.images && project.images.length > 0 ? (
              <ImageSlider images={project.images} alt={project.title} />
            ) : (
              <div className="relative h-96 rounded-xl overflow-hidden border border-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary-white">
                Description du projet
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary-white">
                Technologies utilisées
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary-gray text-primary-kaliRed border border-primary-kaliRed/30 rounded-lg font-medium hover:bg-primary-kaliRed/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Competences */}
            {project.competences && project.competences.length > 0 && (
              <CompetencesDisplay competences={project.competences} />
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Details Card */}
            <div className="bg-primary-gray rounded-xl p-6 border border-gray-800 space-y-4">
              <h3 className="text-xl font-bold text-primary-white mb-4">
                Détails du projet
              </h3>

              <div className="space-y-3">
                <DetailRow label="Catégorie" value={project.category === "perso" ? "Personnel" : "IUT"} />
                <DetailRow label="Durée" value={project.duration} />
                <DetailRow label="Équipe" value={project.team} />
                <DetailRow label="Période" value={project.dates} />
              </div>
            </div>

            {/* Source Code Buttons */}
            {project.sources && project.sources.map((source, index) => (
              <Button
                key={index}
                asChild
                variant="outline"
                className="w-full border-gray-700 hover:bg-gray-800 text-primary-white gap-2"
              >
                <Link href={source.url} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  {source.label}
                </Link>
              </Button>
            ))}

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary-kaliRed/20 to-primary-burgundy/20 rounded-xl p-6 border border-primary-kaliRed/30 hover:shadow-glow-red transition-shadow duration-300">
              <h3 className="text-xl font-bold text-primary-white mb-2">
                Intéressé par ce projet ?
              </h3>
              <p className="text-gray-300 mb-4">
                Contactez-moi pour en savoir plus ou discuter d&apos;une
                collaboration.
              </p>
              <Button asChild className="w-full bg-primary-kaliRed hover:bg-primary-redDark">
                <Link href="/contact">Me contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-700 last:border-0">
      <span className="text-gray-400">{label}</span>
      <span className="text-primary-white font-medium">{value}</span>
    </div>
  );
}
