"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, Clock, ExternalLink, Image as ImageIcon } from "lucide-react";
import type { Competence } from "@/data/projects";

interface CompetenceAccordionProps {
  competences: Competence[];
}

export default function CompetenceAccordion({ competences }: CompetenceAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCompetence = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-gradient-to-b from-primary-red to-primary-redDark rounded-full" />
        <h2 className="text-2xl font-bold text-primary-white">
          Compétences développées
        </h2>
      </div>

      <div className="space-y-3">
        {competences.map((competence, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-primary-gray rounded-lg overflow-hidden bg-primary-dark hover:border-primary-red transition-colors"
          >
            {/* Header - Toujours visible */}
            <button
              onClick={() => toggleCompetence(index)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary-gray/30 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1">
                {/* Badge niveau */}
                <div
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                    competence.level === "acquis"
                      ? "bg-primary-green/10 text-primary-green border border-primary-green/30"
                      : "bg-primary-orange/10 text-primary-orange border border-primary-orange/30"
                  }`}
                >
                  {competence.level === "acquis" ? (
                    <CheckCircle2 className="w-3 h-3" />
                  ) : (
                    <Clock className="w-3 h-3" />
                  )}
                  {competence.level}
                </div>

                {/* Code + Nom */}
                <div className="text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-primary-red font-mono text-sm font-semibold">
                      {competence.code}
                    </span>
                    <span className="text-primary-white font-medium">
                      {competence.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Chevron */}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-primary-red" />
              </motion.div>
            </button>

            {/* Content - Expandable */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 space-y-4 border-t border-primary-gray/50">
                    {/* Détails */}
                    <div className="pt-4">
                      <p className="text-primary-whiteMuted leading-relaxed">
                        {competence.details}
                      </p>
                    </div>

                    {/* Traces */}
                    {competence.traces && competence.traces.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-primary-red flex items-center gap-2">
                          <span className="w-1 h-4 bg-primary-red rounded-full" />
                          Traces et preuves
                        </h4>
                        <div className="grid gap-2">
                          {competence.traces.map((trace, traceIndex) => (
                            <a
                              key={traceIndex}
                              href={trace.url}
                              target={trace.type === "link" ? "_blank" : undefined}
                              rel={trace.type === "link" ? "noopener noreferrer" : undefined}
                              className="flex items-center gap-3 px-4 py-3 bg-primary-gray/50 rounded-lg hover:bg-primary-grayLight border border-primary-gray hover:border-primary-red/50 transition-all group"
                            >
                              <div
                                className={`w-8 h-8 flex items-center justify-center rounded-lg ${
                                  trace.type === "image"
                                    ? "bg-primary-cyan/10 text-primary-cyan"
                                    : "bg-primary-green/10 text-primary-green"
                                }`}
                              >
                                {trace.type === "image" ? (
                                  <ImageIcon className="w-4 h-4" />
                                ) : (
                                  <ExternalLink className="w-4 h-4" />
                                )}
                              </div>
                              <span className="text-sm text-primary-whiteMuted group-hover:text-primary-white transition-colors flex-1">
                                {trace.text}
                              </span>
                              <ChevronDown className="w-4 h-4 text-primary-red rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
