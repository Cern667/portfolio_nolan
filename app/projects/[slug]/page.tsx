import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/data/projects";
import { ArrowLeft, Calendar, Clock, Users, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageSlider from "@/components/ImageSlider";
import NetworkTopology from "@/components/NetworkTopology";
import SsoFlowAnimation from "@/components/SsoFlowAnimation";
import PhishingFlowAnimation from "@/components/PhishingFlowAnimation";
import AdInfrastructure from "@/components/AdInfrastructure";
import DevSecOpsTopology from "@/components/DevSecOpsTopology";
import P2pWebRtcFlow from "@/components/P2pWebRtcFlow";

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
  const allProjs = getAllProjects();
  const currentIndex = allProjs.findIndex((p) => p.slug === params.slug);
  const nextProject =
    currentIndex !== -1 ? allProjs[(currentIndex + 1) % allProjs.length] : null;

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-16">
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
              {project.category === "perso" ? "Projet Personnel" : "Projet École"}
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
              <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-wrap">
                {project.description}
              </p>
            </div>

            {/* Custom Interactive Elements for homelab & fortigate */}
            {project.slug === "homelab-sso-authentik" && (
              <div className="mt-8">
                <SsoFlowAnimation />
              </div>
            )}
            
            {project.slug === "fortigate-security-network" && (
              <div className="mt-8">
                <NetworkTopology />
              </div>
            )}

            {project.slug === "phishing-attack-chain-analysis" && (
              <div className="mt-8">
                <PhishingFlowAnimation />
              </div>
            )}

            {project.slug === "active-directory-ecole" && (
              <div className="mt-8">
                <AdInfrastructure />
              </div>
            )}

            {project.slug === "infra-auth-devops" && (
              <div className="mt-8">
                <DevSecOpsTopology />
              </div>
            )}

            {project.slug === "cerndrop-p2p-webrtc" && (
              <div className="mt-8">
                <P2pWebRtcFlow />
              </div>
            )}

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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Next Project Card */}
            {nextProject && (
              <div className="bg-primary-gray rounded-xl p-6 border border-primary-grayBorder hover:border-primary-kaliRed/50 transition-colors group relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-kaliRed/30 to-transparent group-hover:via-primary-kaliRed/80 transition-all duration-500" />
                <h3 className="text-sm font-headline tracking-widest uppercase text-gray-500 mb-4 flex items-center justify-between">
                  Projet Suivant
                  <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 group-hover:text-primary-kaliRed transition-all" />
                </h3>
                <Link href={`/projects/${nextProject.slug}`} className="block">
                  <div className="relative h-24 mb-3 rounded-lg overflow-hidden border border-gray-800">
                    <Image
                      src={nextProject.image}
                      alt={nextProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary-black/40 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                  <h4 className="font-bold text-primary-white group-hover:text-primary-kaliRed transition-colors">
                    {nextProject.title}
                  </h4>
                </Link>
              </div>
            )}

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
