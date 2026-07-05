"use client";

import { useState } from "react";
import { Shield, Layers, HardDrive, Eye, AlertTriangle, Key, Terminal, ArrowRight, Play, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DevSecOpsNode {
  id: string;
  name: string;
  type: "proxy" | "orchestrator" | "worker" | "storage" | "auth" | "monitor" | "watchdog";
  details: string;
  techInfo: string;
  status: "Active" | "Standby" | "Monitoring";
  features?: string[];
}

const infraNodes: DevSecOpsNode[] = [
  {
    id: "traefik",
    name: "Reverse Proxy (Traefik)",
    type: "proxy",
    techInfo: "Port 80/443, SSL termination (Let's Encrypt)",
    status: "Active",
    details: "Point d'entrée de l'infrastructure. Gère le routage dynamique vers les services Swarm en utilisant des labels de configuration, assure l'inspection SSL et distribue les requêtes avec des 'Sticky Sessions' pour maintenir la cohérence d'authentification Keycloak.",
    features: ["Routage dynamique", "Sticky Sessions", "HTTPS forcé (TLS 1.3)"]
  },
  {
    id: "swarm_manager",
    name: "Docker Swarm (Manager)",
    type: "orchestrator",
    techInfo: "Raft consensus, Orchestrator cluster",
    status: "Active",
    details: "Nœud maître du cluster Docker Swarm. Gère l'état global de l'infrastructure, ordonnance le déploiement des stacks applicatives, surveille la santé des conteneurs et ajuste dynamiquement le nombre de réplicas en cas de panne.",
    features: ["Orchestration multinœuds", "Réseaux Overlay chiffrés IPSec", "Auto-healing des services"]
  },
  {
    id: "swarm_workers",
    name: "Docker Swarm (Workers)",
    type: "worker",
    techInfo: "Docker Engine Daemon, Replicated containers",
    status: "Active",
    details: "Nœuds d'exécution hébergeant les conteneurs des applications métiers (Nextcloud pour les fichiers, SFTPGo pour les transferts sécurisés). Ces conteneurs sont configurés en mode répliqué pour assurer la haute disponibilité.",
    features: ["Conteneurs isolés", "Réseaux internes privés", "Scaling horizontal automatique"]
  },
  {
    id: "glusterfs",
    name: "Stockage Distribué (GlusterFS)",
    type: "storage",
    techInfo: "Gluster Daemon, Peer-to-peer sync",
    status: "Active",
    details: "Système de fichiers distribué assurant la réplication temps réel des volumes Docker persistants entre tous les nœuds physiques. Si un nœud tombe, les données restent accessibles sur un autre nœud instantanément.",
    features: ["Volumes répliqués", "PRA immédiat", "Pas de Single Point of Failure"]
  },
  {
    id: "keycloak",
    name: "Identity Provider (Keycloak)",
    type: "auth",
    techInfo: "OAuth2 / OIDC Portal",
    status: "Active",
    details: "Serveur d'authentification unique (SSO) protégeant les applications. Toutes les connexions passent par Keycloak via le protocole OpenID Connect, permettant de centraliser les comptes et de forcer des règles de complexité.",
    features: ["Single Sign-On (SSO)", "Jetons JWT sécurisés", "Fédération de comptes"]
  },
  {
    id: "observability",
    name: "Supervision (Grafana / Loki / Promtail)",
    type: "monitor",
    techInfo: "Loki (Logs) + Promtail daemon",
    status: "Monitoring",
    details: "Pile d'observabilité centralisée et isolée. Promtail collecte les logs des conteneurs Docker en continu, les transmet à Loki pour indexation, et Grafana affiche des tableaux de bord interactifs d'analyse de performance et d'alerting.",
    features: ["Centralisation des logs", "Tableaux de bord d'activité", "Alertes de performance"]
  },
  {
    id: "watchdog",
    name: "Watchdog HTTP (Service d'Alerting)",
    type: "watchdog",
    techInfo: "Custom Python script checker",
    status: "Monitoring",
    details: "Script personnalisé développé sur mesure qui interroge régulièrement le point de terminaison HTTP de chaque service de production. En cas d'erreur ou d'absence de réponse, il loggue l'incident et déclenche une alerte de remédiation.",
    features: ["Healthcheck HTTP continu", "Alerting réactif", "Détection hors-bande"]
  }
];

export default function DevSecOpsTopology() {
  const [selectedNode, setSelectedNode] = useState<DevSecOpsNode>(infraNodes[0]);

  const getNodeIcon = (type: DevSecOpsNode["type"]) => {
    switch (type) {
      case "proxy": return <Shield className="w-6 h-6 text-primary-kaliRed animate-pulse" />;
      case "orchestrator": return <Layers className="w-6 h-6 text-[#00bcd4]" />;
      case "storage": return <HardDrive className="w-6 h-6 text-primary-orange" />;
      case "auth": return <Key className="w-6 h-6 text-primary-white" />;
      case "monitor": return <Eye className="w-6 h-6 text-[#47cf73]" />;
      default: return <Terminal className="w-6 h-6 text-gray-300" />;
    }
  };

  return (
    <div className="bg-primary-gray border border-primary-grayBorder rounded-xl p-6 space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-primary-white mb-2 flex items-center gap-3">
          <span className="text-primary-kaliRed">&gt;_</span>
          Topologie Cluster DevSecOps &amp; Haute Disponibilité
        </h3>
        <p className="text-gray-400 text-sm">
          Cliquez sur les différents modules de l&apos;architecture pour comprendre le routage, la redondance et la supervision.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Topology Diagram (Left 7/12) */}
        <div className="md:col-span-7 bg-primary-black/60 rounded-xl p-6 border border-primary-grayBorder/50 min-h-[350px] flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Top row: Client Browser & Traefik */}
            <div className="flex flex-col items-center gap-4 w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedNode(infraNodes.find(n => n.id === "traefik")!)}
                className={`p-3.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all w-48 ${
                  selectedNode.id === "traefik" ? "border-primary-kaliRed bg-primary-kaliRed/10 shadow-glow-red" : "border-primary-grayBorder bg-primary-dark/80"
                }`}
              >
                <Shield className="w-6 h-6 text-primary-kaliRed" />
                <span className="text-xs font-bold text-primary-white font-mono">Traefik Proxy</span>
              </motion.button>
            </div>

            {/* Connecting lines proxy to cluster */}
            <div className="w-full flex justify-center h-6 relative">
              <svg className="w-full max-w-sm h-full absolute inset-0 text-primary-grayBorder" fill="none" viewBox="0 0 200 20">
                <path d="M100,0 L50,20 M100,0 L100,20 M100,0 L150,20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
              </svg>
            </div>

            {/* Middle Row: Auth | Swarm Master | Observability */}
            <div className="flex justify-around w-full items-center">
              {/* Keycloak */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedNode(infraNodes.find(n => n.id === "keycloak")!)}
                className={`p-3 rounded-lg border flex flex-col items-center gap-1 transition-all min-w-[90px] ${
                  selectedNode.id === "keycloak" ? "border-primary-white bg-primary-white/10 shadow-glow-white" : "border-primary-grayBorder bg-primary-dark/80"
                }`}
              >
                <Key className="w-5 h-5 text-primary-white" />
                <span className="text-[10px] font-bold text-primary-white">Keycloak SSO</span>
              </motion.button>

              {/* Swarm Manager */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedNode(infraNodes.find(n => n.id === "swarm_manager")!)}
                className={`p-4 rounded-xl border flex flex-col items-center gap-1.5 transition-all min-w-[120px] ${
                  selectedNode.id === "swarm_manager" ? "border-[#00bcd4] bg-[#00bcd4]/10 shadow-glow-cyan" : "border-primary-grayBorder bg-primary-dark/80"
                }`}
              >
                <Layers className="w-6 h-6 text-[#00bcd4]" />
                <span className="text-xs font-bold text-primary-white">Swarm Manager</span>
              </motion.button>

              {/* Observability */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedNode(infraNodes.find(n => n.id === "observability")!)}
                className={`p-3 rounded-lg border flex flex-col items-center gap-1 transition-all min-w-[90px] ${
                  selectedNode.id === "observability" ? "border-[#47cf73] bg-[#47cf73]/10 shadow-glow-green" : "border-primary-grayBorder bg-primary-dark/80"
                }`}
              >
                <Eye className="w-5 h-5 text-[#47cf73]" />
                <span className="text-[10px] font-bold text-primary-white">Grafana/Loki</span>
              </motion.button>
            </div>

            {/* Connecting lines cluster to nodes */}
            <div className="w-full flex justify-center h-6 relative">
              <svg className="w-full max-w-sm h-full absolute inset-0 text-primary-grayBorder" fill="none" viewBox="0 0 200 20">
                <path d="M100,0 L50,20 M100,0 L150,20 M150,0 L150,20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
              </svg>
            </div>

            {/* Bottom Row: Workers & Storage & Watchdog */}
            <div className="flex justify-around w-full items-center">
              {/* Watchdog */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedNode(infraNodes.find(n => n.id === "watchdog")!)}
                className={`p-3 rounded-lg border flex flex-col items-center gap-1 transition-all min-w-[90px] ${
                  selectedNode.id === "watchdog" ? "border-primary-orange bg-primary-orange/10 shadow-glow-orange" : "border-primary-grayBorder bg-primary-dark/80"
                }`}
              >
                <AlertTriangle className="w-5 h-5 text-primary-orange" />
                <span className="text-[10px] font-bold text-primary-white">Watchdog</span>
              </motion.button>

              {/* Swarm Workers */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedNode(infraNodes.find(n => n.id === "swarm_workers")!)}
                className={`p-3.5 rounded-lg border flex flex-col items-center gap-1 transition-all min-w-[110px] ${
                  selectedNode.id === "swarm_workers" ? "border-[#00bcd4] bg-[#00bcd4]/10 shadow-glow-cyan" : "border-primary-grayBorder bg-primary-dark/80"
                }`}
              >
                <Terminal className="w-5 h-5 text-gray-300" />
                <span className="text-[10px] font-bold text-primary-white">Swarm Workers</span>
              </motion.button>

              {/* GlusterFS */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedNode(infraNodes.find(n => n.id === "glusterfs")!)}
                className={`p-3.5 rounded-lg border flex flex-col items-center gap-1 transition-all min-w-[110px] ${
                  selectedNode.id === "glusterfs" ? "border-primary-orange bg-primary-orange/10 shadow-glow-orange" : "border-primary-grayBorder bg-primary-dark/80"
                }`}
              >
                <HardDrive className="w-5 h-5 text-primary-orange" />
                <span className="text-[10px] font-bold text-primary-white">GlusterFS</span>
              </motion.button>
            </div>

          </div>
        </div>

        {/* Selected Node Details Card (Right 5/12) */}
        <div className="md:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-primary-darker rounded-xl p-5 border border-primary-grayBorder space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-primary-grayBorder/50 pb-3">
                {getNodeIcon(selectedNode.type)}
                <div>
                  <h4 className="font-bold text-primary-white">{selectedNode.name}</h4>
                  <span className="text-[10px] font-mono bg-primary-kaliRed/10 text-primary-kaliRed px-2 py-0.5 rounded border border-primary-kaliRed/20">
                    {selectedNode.techInfo}
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">Description</span>
                  <p className="text-gray-300 leading-relaxed font-light">{selectedNode.details}</p>
                </div>

                {selectedNode.features && selectedNode.features.length > 0 && (
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">Propriétés clés</span>
                    <div className="space-y-1 mt-1.5">
                      {selectedNode.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-kaliRed" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center pt-2 border-t border-primary-grayBorder/50">
                  <span className="text-xs text-gray-500">Statut Opérationnel :</span>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded ${
                    selectedNode.status === "Active" 
                      ? "bg-primary-green/10 text-primary-green" 
                      : selectedNode.status === "Monitoring"
                      ? "bg-primary-orange/10 text-primary-orange"
                      : "bg-gray-500/10 text-gray-400"
                  }`}>
                    {selectedNode.status}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
