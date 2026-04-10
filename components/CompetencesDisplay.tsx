"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type CompetenceGroup, type ApprentissageCritique } from "@/data/projects";
import { CheckCircle2, Clock, ExternalLink, ShieldCheck, Wrench, Users } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface CompetencesDisplayProps {
  competencesNiveau2?: CompetenceGroup[];
  competencesNiveau3?: CompetenceGroup[];
}

export default function CompetencesDisplay({ competencesNiveau2, competencesNiveau3 }: CompetencesDisplayProps) {
  const [showLevel2, setShowLevel2] = useState(false);

  const hasLevel2 = competencesNiveau2 && competencesNiveau2.length > 0;
  const hasLevel3 = competencesNiveau3 && competencesNiveau3.length > 0;

  // Si on n'a que le niveau 2, on l'affiche par défaut
  let currentSelection;
  if (!hasLevel3 && hasLevel2) {
    currentSelection = competencesNiveau2;
  } else if (!hasLevel2 && hasLevel3) {
    currentSelection = competencesNiveau3;
  } else {
    currentSelection = showLevel2 ? competencesNiveau2 : competencesNiveau3;
  }

  if (!currentSelection || currentSelection.length === 0) return null;

  // Fusionner les groupes portant le même nom
  const mergedGroups = currentSelection.reduce((acc, group) => {
    const existingGroup = acc.find(g => g.name === group.name);
    if (existingGroup) {
      existingGroup.apprentissages = [...existingGroup.apprentissages, ...group.apprentissages];
    } else {
      acc.push({ ...group, apprentissages: [...group.apprentissages] });
    }
    return acc;
  }, [] as CompetenceGroup[]);

  const getGroupIcon = (name: string) => {
    switch (name) {
      case "Réaliser": return <Wrench className="w-6 h-6 text-primary-kaliRed" />;
      case "Administrer": return <ShieldCheck className="w-6 h-6 text-primary-kaliRed" />;
      case "Collaborer": return <Users className="w-6 h-6 text-primary-kaliRed" />;
      default: return <CheckCircle2 className="w-6 h-6 text-primary-kaliRed" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-primary-white flex items-center gap-3"
        >
          <span className="text-primary-kaliRed">&gt;_</span>
          Compétences développées
        </motion.h2>

        {hasLevel2 && hasLevel3 && (
          <div className="flex items-center gap-3 bg-primary-gray/50 px-4 py-2 rounded-lg border border-primary-grayBorder">
            <Label htmlFor="level-toggle" className={`text-sm font-semibold cursor-pointer ${showLevel2 ? "text-primary-kaliRed" : "text-gray-400"}`}>Niveau 2</Label>
            <Switch
              id="level-toggle"
              checked={!showLevel2}
              onCheckedChange={(checked: boolean) => setShowLevel2(!checked)}
              className="data-[state=checked]:bg-primary-kaliRed"
            />
            <Label htmlFor="level-toggle" className={`text-sm font-semibold cursor-pointer ${!showLevel2 ? "text-primary-kaliRed" : "text-gray-400"}`}>Niveau 3</Label>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={showLevel2 ? "level2" : "level3"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {mergedGroups.map((group, index) => (
            <div key={group.name} className="space-y-4">
              <div className="flex items-center gap-3 border-b border-primary-grayBorder pb-2">
                {getGroupIcon(group.name)}
                <h3 className="text-2xl font-bold text-primary-white">{group.name}</h3>
              </div>
              <div className="grid gap-4">
                {group.apprentissages.map((ac, acIndex) => (
                  <ACCard key={acIndex} ac={ac} index={acIndex} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ACCard({ ac, index }: { ac: ApprentissageCritique; index: number }) {
  const isAcquis = ac.level === "acquis";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.01, x: 5 }}
      className="group relative bg-primary-gray rounded-lg border border-primary-grayBorder overflow-hidden hover:border-primary-kaliRed transition-all duration-300 ml-4 lg:ml-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-kaliRed/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-kaliRed to-primary-burgundy opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative p-5 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-sm font-bold text-primary-kaliRed bg-primary-kaliRed/10 px-3 py-1 rounded border border-primary-kaliRed/30">
                {ac.code}
              </span>
              <LevelBadge level={ac.level} />
            </div>
            <p className="text-primary-textGray leading-relaxed font-medium">
              {ac.details}
            </p>
          </div>

          {isAcquis ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
              className="flex-shrink-0"
            >
              <CheckCircle2 className="w-6 h-6 text-primary-green" />
            </motion.div>
          ) : (
            <Clock className="w-6 h-6 text-primary-orange flex-shrink-0" />
          )}
        </div>

        {ac.traces && ac.traces.length > 0 && (
          <div className="pt-3 border-t border-primary-grayBorder">
            <p className="text-sm text-primary-textDark font-semibold mb-2">Traces :</p>
            <div className="space-y-2">
              {ac.traces.map((trace, traceIndex) => (
                <TraceItem key={traceIndex} trace={trace} />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function LevelBadge({ level }: { level: "acquis" | "en cours" }) {
  const isAcquis = level === "acquis";
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`text-xs font-semibold px-3 py-1 rounded-full border ${isAcquis
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
