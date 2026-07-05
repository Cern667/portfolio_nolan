"use client";

import { useState } from "react";
import { Mail, ShieldAlert, Cpu, Chrome, Key, Play, RotateCcw, ArrowRight, Eye, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AttackStep {
  id: number;
  from: "attacker" | "victim_mail" | "clone_portal" | "log_server";
  to: "attacker" | "victim_mail" | "clone_portal" | "log_server";
  title: string;
  desc: string;
  technical: string;
  icon: string;
}

const steps: AttackStep[] = [
  {
    id: 1,
    from: "attacker",
    to: "victim_mail",
    title: "1. Envoi du courriel ciblé",
    desc: "L'attaquant envoie un e-mail de phishing ciblé (Spear Phishing) simulant une candidature spontanée avec un lien pour télécharger un CV.",
    technical: "SMTP Spoofing via Social-Engineer Toolkit (SET)",
    icon: "mail"
  },
  {
    id: 2,
    from: "victim_mail",
    to: "clone_portal",
    title: "2. Clic & Redirection HTTPS",
    desc: "La victime (RH) clique sur le lien pour accéder au CV. La requête transite de manière chiffrée via un tunnel d'exposition Ngrok.",
    technical: "GET https://cern-recrutement.ngrok-free.app ➔ Redirect 302",
    icon: "chrome"
  },
  {
    id: 3,
    from: "clone_portal",
    to: "victim_mail",
    title: "3. Rendu du clone d'authentification",
    desc: "Le navigateur affiche une copie conforme de la page de connexion Microsoft 365, clonée à l'aide de HTTrack.",
    technical: "HTML/CSS Cloned template served on port 443",
    icon: "eye"
  },
  {
    id: 4,
    from: "victim_mail",
    to: "log_server",
    title: "4. Saisie & Capture d'identifiants",
    desc: "La victime renseigne ses identifiants. Le script POST de la mire intercepte le mot de passe et l'envoie en clair dans la console de l'attaquant.",
    technical: "POST payload captured: { user: 'rh@company.com', pass: '********' }",
    icon: "key"
  },
  {
    id: 5,
    from: "log_server",
    to: "attacker",
    title: "5. Alerte & Parade Sélective",
    desc: "Déclenchement des contre-mesures : blocage de l'adresse IP d'exposition, signalement de l'URL Ngrok et activation forcée du MFA (Multi-Factor Authentication).",
    technical: "SecOps Mitigation: MFA required & Token revocation",
    icon: "shield"
  }
];

export default function PhishingFlowAnimation() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const actorCoords = {
    attacker: 0,
    victim_mail: 33,
    clone_portal: 66,
    log_server: 100
  };

  const getActorIcon = (actor: keyof typeof actorCoords) => {
    switch (actor) {
      case "attacker": return <Cpu className="w-8 h-8 text-primary-white" />;
      case "victim_mail": return <Mail className="w-8 h-8 text-[#00bcd4]" />;
      case "clone_portal": return <Chrome className="w-8 h-8 text-primary-orange" />;
      case "log_server": return <ShieldAlert className="w-8 h-8 text-primary-kaliRed" />;
    }
  };

  const getActorLabel = (actor: keyof typeof actorCoords) => {
    switch (actor) {
      case "attacker": return "Attaquant (SET)";
      case "victim_mail": return "Victime (Email)";
      case "clone_portal": return "Mire Microsoft365 (Ngrok)";
      case "log_server": return "Serveur de logs (Capture)";
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
            Simulateur d&apos;Attaque Phishing (Chaîne SET &amp; Ngrok)
          </h3>
          <p className="text-gray-400 text-sm">
            Analysez le trajet des requêtes et la cinématique d&apos;interception d&apos;identifiants de connexion.
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

      {/* Actors horizontal diagram */}
      <div className="bg-primary-black/60 rounded-xl p-8 border border-primary-grayBorder/50 relative overflow-hidden">
        {/* Line */}
        <div className="absolute top-[50%] left-[10%] right-[10%] h-[2px] bg-primary-grayBorder z-0" />

        <div className="grid grid-cols-4 relative z-10 text-center font-mono">
          {(["attacker", "victim_mail", "clone_portal", "log_server"] as const).map((actor) => (
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

        {/* Animated Payload Ball */}
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
            className={`absolute top-[43%] w-6 h-6 rounded-full border-2 border-primary-white z-20 flex items-center justify-center ${
              activeStep === 5 ? "bg-primary-green shadow-glow-green" : "bg-primary-kaliRed shadow-glow-red"
            }`}
          >
            {activeStep === 1 && <span className="text-[7px] text-white font-bold">MAIL</span>}
            {activeStep === 2 && <span className="text-[7px] text-white font-bold">LINK</span>}
            {activeStep === 3 && <span className="text-[7px] text-white font-bold">HTTP</span>}
            {activeStep === 4 && <span className="text-[7px] text-white font-bold">POST</span>}
            {activeStep === 5 && <span className="text-[7px] text-white font-bold">MFA</span>}
          </motion.div>
        )}
      </div>

      {/* Steps logs terminal */}
      <div className="min-h-[120px] bg-primary-darker rounded-xl p-5 border border-primary-grayBorder flex items-center justify-center font-mono">
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
                  <ShieldAlert className="w-4 h-4 text-primary-kaliRed" />
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
              <p className="text-gray-500 text-sm">Cliquez sur &quot;Lancer l&apos;animation&quot; pour observer la cinématique de capture d&apos;identifiants.</p>
              <button
                onClick={handleNext}
                className="text-xs text-primary-kaliRed font-bold hover:underline flex items-center gap-1 mx-auto"
              >
                Étape suivante <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
