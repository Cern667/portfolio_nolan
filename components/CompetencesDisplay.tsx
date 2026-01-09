"use client";

import { motion } from "framer-motion";
import { type Competence } from "@/data/projects";
import { CheckCircle2, Clock, ExternalLink } from "lucide-react";

interface CompetencesDisplayProps {
  competences: Competence[];
}

export default function CompetencesDisplay({ competences }: CompetencesDisplayProps) {
  if (!competences || competences.length === 0) return null;

  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-primary-white flex items-center gap-3"
      >
        <span className="text-primary-kaliRed">&gt;_</span>
        Compétences développées
      </motion.h2>

      <div className="grid gap-4">
        {competences.map((competence, index) => (
          <CompetenceCard key={competence.code} competence={competence} index={index} />
        ))}
      </div>
    </div>
  );
}

function CompetenceCard({ competence, index }: { competence: Competence; index: number }) {
  const isAcquis = competence.level === "acquis";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, x: 5 }}
      className="group relative bg-primary-gray rounded-lg border border-primary-grayBorder overflow-hidden hover:border-primary-kaliRed transition-all duration-300"
    >
      {/* Glowing effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-kaliRed/0 via-primary-kaliRed/5 to-primary-kaliRed/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Scan line effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-kaliRed/10 to-transparent opacity-0 group-hover:opacity-100 animate-scan-line pointer-events-none" />

      <div className="relative p-5 space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-sm font-bold text-primary-kaliRed bg-primary-kaliRed/10 px-3 py-1 rounded border border-primary-kaliRed/30">
                {competence.code}
              </span>
              <LevelBadge level={competence.level} />
            </div>

            <h3 className="text-xl font-bold text-primary-white group-hover:text-primary-kaliRed transition-colors duration-300">
              {competence.name}
            </h3>
          </div>

          {isAcquis ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
            >
              <CheckCircle2 className="w-6 h-6 text-primary-green" />
            </motion.div>
          ) : (
            <Clock className="w-6 h-6 text-primary-orange" />
          )}
        </div>

        {/* Details */}
        <p className="text-primary-textGray leading-relaxed">
          {competence.details}
        </p>

        {/* Traces */}
        {competence.traces && competence.traces.length > 0 && (
          <div className="pt-3 border-t border-primary-grayBorder">
            <p className="text-sm text-primary-textDark font-semibold mb-2">Traces :</p>
            <div className="space-y-2">
              {competence.traces.map((trace, traceIndex) => (
                <TraceItem key={traceIndex} trace={trace} />
              ))}
            </div>
          </div>
        )}

        {/* Terminal-style decoration */}
        <div className="absolute top-2 right-2 flex gap-1 opacity-30 group-hover:opacity-60 transition-opacity">
          <div className="w-2 h-2 rounded-full bg-primary-kaliRed" />
          <div className="w-2 h-2 rounded-full bg-primary-orange" />
          <div className="w-2 h-2 rounded-full bg-primary-green" />
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-kaliRed to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

function LevelBadge({ level }: { level: "acquis" | "en cours" }) {
  const isAcquis = level === "acquis";

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`text-xs font-semibold px-3 py-1 rounded-full border ${
        isAcquis
          ? "bg-primary-green/10 text-primary-green border-primary-green/30"
          : "bg-primary-orange/10 text-primary-orange border-primary-orange/30"
      }`}
    >
      {isAcquis ? "✓ Acquis" : "⟳ En cours"}
    </motion.span>
  );
}

function TraceItem({ trace }: { trace: { type: "image" | "link"; text: string; url: string } }) {
  if (trace.type === "link") {
    return (
      <a
        href={trace.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-primary-cyan hover:text-primary-cyanDark transition-colors group/trace"
      >
        <ExternalLink className="w-4 h-4 group-hover/trace:translate-x-0.5 group-hover/trace:-translate-y-0.5 transition-transform" />
        <span className="underline decoration-dotted">{trace.text}</span>
      </a>
    );
  }

  return (
    <div className="flex items-center gap-2 text-sm text-primary-textGray">
      <span className="text-primary-kaliRed">📷</span>
      <span>{trace.text}</span>
    </div>
  );
}
