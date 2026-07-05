"use client";

import { useState } from "react";
import { User, Server, Key, Chrome, ShieldCheck, ArrowRight, Play, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FlowStep {
  id: number;
  from: "browser" | "jellyfin" | "authentik" | "google";
  to: "browser" | "jellyfin" | "authentik" | "google";
  title: string;
  desc: string;
  technical: string;
}

const steps: FlowStep[] = [
  {
    id: 1,
    from: "browser",
    to: "jellyfin",
    title: "1. Accès au service client",
    desc: "L'utilisateur tente d'accéder au serveur Jellyfin local via son navigateur.",
    technical: "GET https://jellyfin.local"
  },
  {
    id: 2,
    from: "jellyfin",
    to: "authentik",
    title: "2. Redirection OIDC / OAuth2",
    desc: "N'étant pas authentifié, Jellyfin redirige la session utilisateur vers le portail central d'Authentik.",
    technical: "302 REDIRECT https://authentik.local/oauth2/authorize?client_id=jellyfin..."
  },
  {
    id: 3,
    from: "authentik",
    to: "google",
    title: "3. Fédération Google SSO",
    desc: "Authentik délègue l'authentification à Google Identity Provider. Le navigateur affiche la mire de connexion Google.",
    technical: "GET https://accounts.google.com/o/oauth2/auth..."
  },
  {
    id: 4,
    from: "google",
    to: "authentik",
    title: "4. Token de validation Google",
    desc: "Google valide l'identité, authentifie le compte de Nolan et renvoie un jeton JWT d'autorisation à Authentik.",
    technical: "HTTP POST Callback client_secret validation & return id_token"
  },
  {
    id: 5,
    from: "authentik",
    to: "jellyfin",
    title: "5. Connexion Jellyfin établie",
    desc: "Authentik vérifie l'autorisation, crée la session locale Jellyfin et connecte l'utilisateur.",
    technical: "Authentication header cookie set & session tokens generated"
  }
];

export default function SsoFlowAnimation() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const actorCoords = {
    browser: 0,
    jellyfin: 33,
    authentik: 66,
    google: 100
  };

  const getActorIcon = (actor: keyof typeof actorCoords) => {
    switch (actor) {
      case "browser": return <Chrome className="w-8 h-8 text-[#00bcd4]" />;
      case "jellyfin": return <Server className="w-8 h-8 text-primary-white" />;
      case "authentik": return <Key className="w-8 h-8 text-primary-kaliRed" />;
      case "google": return <ShieldCheck className="w-8 h-8 text-primary-green" />;
    }
  };

  const getActorLabel = (actor: keyof typeof actorCoords) => {
    switch (actor) {
      case "browser": return "Navigateur Client";
      case "jellyfin": return "Jellyfin Client";
      case "authentik": return "Authentik IDP";
      case "google": return "Google SSO";
    }
  };

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsAnimating(false);
  };

  const runFullFlow = () => {
    setIsAnimating(true);
    let step = 0;
    const interval = setInterval(() => {
      if (step < steps.length) {
        step++;
        setActiveStep(step);
      } else {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 2500);
  };

  const currentStepInfo = activeStep > 0 ? steps[activeStep - 1] : null;

  return (
    <div className="bg-primary-gray border border-primary-grayBorder rounded-xl p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold text-primary-white mb-2 flex items-center gap-3">
            <span className="text-primary-kaliRed">&gt;_</span>
            Simulateur de flux SSO Authentik
          </h3>
          <p className="text-gray-400 text-sm">
            Visualisez le cheminement des jetons de sécurité et des redirections inter-serveurs.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={runFullFlow}
            disabled={isAnimating}
            className="flex items-center gap-2 bg-primary-kaliRed hover:bg-primary-redDark text-white px-4 py-2 rounded-lg text-sm font-bold transition-all disabled:opacity-50"
          >
            <Play className="w-4 h-4" />
            Lancer l&apos;animation
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 bg-primary-dark hover:bg-primary-grayBorder text-gray-300 px-4 py-2 rounded-lg text-sm border border-primary-grayBorder transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>
      </div>

      {/* Actors Display (Horizontal Row) */}
      <div className="bg-primary-black/60 rounded-xl p-8 border border-primary-grayBorder/50 relative overflow-hidden">
        {/* Connection Line */}
        <div className="absolute top-[50%] left-[10%] right-[10%] h-[2px] bg-primary-grayBorder z-0" />

        <div className="grid grid-cols-4 relative z-10 text-center">
          {(["browser", "jellyfin", "authentik", "google"] as const).map((actor) => (
            <div key={actor} className="flex flex-col items-center gap-3">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all ${
                currentStepInfo && (currentStepInfo.from === actor || currentStepInfo.to === actor)
                  ? "border-primary-kaliRed bg-primary-kaliRed/10 scale-110 shadow-glow-red"
                  : "border-primary-grayBorder bg-primary-dark"
              }`}>
                {getActorIcon(actor)}
              </div>
              <span className="text-xs font-bold text-primary-white">{getActorLabel(actor)}</span>
            </div>
          ))}
        </div>

        {/* Animated Flying Token Ball */}
        {currentStepInfo && (
          <motion.div
            key={activeStep}
            initial={{ 
              x: `${actorCoords[currentStepInfo.from] * 4.5}%`,
              left: "10%",
              opacity: 0,
              scale: 0.5
            }}
            animate={{ 
              x: `${actorCoords[currentStepInfo.to] * 4.5}%`,
              left: "10%",
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1.2, 1.2, 0.5]
            }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute top-[43%] w-6 h-6 bg-primary-kaliRed rounded-full shadow-glow-red border-2 border-primary-white z-20 flex items-center justify-center"
          >
            <span className="text-[9px] text-white font-bold font-mono">JWT</span>
          </motion.div>
        )}
      </div>

      {/* Step Info Display */}
      <div className="min-h-[120px] bg-primary-darker rounded-xl p-5 border border-primary-grayBorder flex items-center justify-center">
        <AnimatePresence mode="wait">
          {currentStepInfo ? (
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full space-y-3"
            >
              <div className="flex justify-between items-center border-b border-primary-grayBorder/50 pb-2">
                <h4 className="font-bold text-primary-white flex items-center gap-2">
                  {currentStepInfo.title}
                </h4>
                <span className="text-[10px] font-mono bg-primary-kaliRed/10 text-primary-kaliRed px-2 py-0.5 rounded border border-primary-kaliRed/20">
                  {currentStepInfo.technical}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed font-light">{currentStepInfo.desc}</p>
            </motion.div>
          ) : (
            <div className="text-center space-y-2">
              <p className="text-gray-500 text-sm">Cliquez sur &quot;Lancer l&apos;animation&quot; pour démarrer la simulation.</p>
              <button
                onClick={handleNext}
                className="text-xs text-primary-kaliRed font-bold hover:underline flex items-center gap-1 mx-auto"
              >
                Passer étape par étape <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
