"use client";

import { useState } from "react";
import { Chrome, Server, ArrowRight, Play, RotateCcw, ShieldCheck, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SignalingStep {
  id: number;
  from: "peerA" | "signaling" | "peerB";
  to: "peerA" | "signaling" | "peerB";
  title: string;
  desc: string;
  technical: string;
}

const signalingSteps: SignalingStep[] = [
  {
    id: 1,
    from: "peerA",
    to: "signaling",
    title: "1. Connexion au serveur de signalement",
    desc: "Les deux navigateurs se connectent au serveur Node.js via Socket.io pour pouvoir s'échanger leurs métadonnées de connexion.",
    technical: "ws://signal-server:3000/socket.io (Connection Established)"
  },
  {
    id: 2,
    from: "peerA",
    to: "signaling",
    title: "2. Création et envoi de l'offre SDP",
    desc: "L'émetteur (Peer A) crée une offre de session SDP (Session Description Protocol) listant ses capacités multimédias et réseaux.",
    technical: "socket.emit('signal', { type: 'offer', sdp: '...' })"
  },
  {
    id: 3,
    from: "signaling",
    to: "peerB",
    title: "3. Relais de l'offre et réponse SDP",
    desc: "Le serveur retransmet l'offre à Peer B. Celui-ci l'accepte et renvoie sa propre réponse SDP via le serveur.",
    technical: "socket.emit('signal', { type: 'answer', sdp: '...' })"
  },
  {
    id: 4,
    from: "peerB",
    to: "peerA",
    title: "4. Échange de candidats ICE (NAT Traversal)",
    desc: "Les pairs s'échangent leurs candidats ICE (adresses IP et ports détectés par le protocole STUN) pour trouver le meilleur chemin de connexion direct à travers les pare-feu.",
    technical: "peerConnection.addIceCandidate(candidate)"
  },
  {
    id: 5,
    from: "peerA",
    to: "peerB",
    title: "5. Canal P2P direct et transfert",
    desc: "La connexion WebRTC DataChannel est établie en direct. Le serveur de signalement s'efface de la boucle. Les fichiers transitent chiffrés de navigateur à navigateur.",
    technical: "RTCDataChannel (State: open, Cipher: DTLS-SRTP)"
  }
];

export default function P2pWebRtcFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const actorCoords = {
    peerA: 0,
    signaling: 50,
    peerB: 100
  };

  const getActorIcon = (actor: keyof typeof actorCoords) => {
    switch (actor) {
      case "peerA": return <Chrome className="w-8 h-8 text-[#00bcd4]" />;
      case "signaling": return <Server className="w-8 h-8 text-primary-white" />;
      case "peerB": return <Chrome className="w-8 h-8 text-primary-green" />;
    }
  };

  const getActorLabel = (actor: keyof typeof actorCoords) => {
    switch (actor) {
      case "peerA": return "Émetteur (Peer A)";
      case "signaling": return "Serveur Signalement";
      case "peerB": return "Récepteur (Peer B)";
    }
  };

  const handleNext = () => {
    if (activeStep < signalingSteps.length) {
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
      if (step < signalingSteps.length) {
        step++;
        setActiveStep(step);
      } else {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 2500);
  };

  const currentStepInfo = activeStep > 0 ? signalingSteps[activeStep - 1] : null;

  return (
    <div className="bg-primary-gray border border-primary-grayBorder rounded-xl p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold text-primary-white mb-2 flex items-center gap-3">
            <span className="text-primary-kaliRed">&gt;_</span>
            Simulateur de Liaison WebRTC P2P
          </h3>
          <p className="text-gray-400 text-sm">
            Découvrez la cinématique de signalement, le passage de NAT et la bascule en connexion peer-to-peer directe.
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

      {/* Actors Diagram Canvas */}
      <div className="bg-primary-black/60 rounded-xl p-8 border border-primary-grayBorder/50 relative overflow-hidden">
        {/* Signaling Lines */}
        <div className="absolute top-[50%] left-[15%] right-[15%] h-[2px] bg-primary-grayBorder z-0" />
        
        {/* Direct P2P Channel (Only visible/active on step 4 and 5) */}
        {activeStep >= 4 && (
          <motion.div
            initial={{ opacity: 0, height: 2 }}
            animate={{ opacity: 1, height: 4 }}
            className="absolute top-[50%] left-[15%] right-[15%] bg-primary-green shadow-glow-green z-0"
          />
        )}

        <div className="grid grid-cols-3 relative z-10 text-center font-mono">
          {(["peerA", "signaling", "peerB"] as const).map((actor) => (
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
              x: `${actorCoords[currentStepInfo.from] * 4.6}%`,
              left: "15%",
              opacity: 0,
              scale: 0.5
            }}
            animate={{ 
              x: `${actorCoords[currentStepInfo.to] * 4.6}%`,
              left: "15%",
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1.2, 1.2, 0.5]
            }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className={`absolute top-[43%] w-6 h-6 rounded-full border-2 border-primary-white z-20 flex items-center justify-center ${
              activeStep === 5 ? "bg-primary-green shadow-glow-green animate-pulse" : "bg-primary-kaliRed shadow-glow-red"
            }`}
          >
            {activeStep === 1 && <span className="text-[7px] text-white font-bold">CONN</span>}
            {activeStep === 2 && <span className="text-[7px] text-white font-bold">OFFER</span>}
            {activeStep === 3 && <span className="text-[7px] text-white font-bold">ANSWER</span>}
            {activeStep === 4 && <span className="text-[7px] text-white font-bold">ICE</span>}
            {activeStep === 5 && <span className="text-[7px] text-white font-bold">P2P</span>}
          </motion.div>
        )}
      </div>

      {/* Step Info Display */}
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
                  <ShieldCheck className="w-4 h-4 text-primary-green" />
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
              <p className="text-gray-500 text-sm">Cliquez sur &quot;Lancer l&apos;animation&quot; pour démarrer l&apos;échange de signalement WebRTC.</p>
              <button
                onClick={handleNext}
                className="text-xs text-primary-kaliRed font-bold hover:underline flex items-center gap-1 mx-auto"
              >
                Étape par étape <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
