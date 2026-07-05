"use client";

import { useState } from "react";
import { Server, Settings, Monitor, HardDrive, ShieldCheck, Cpu, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AdNode {
  id: string;
  name: string;
  type: "dc" | "dhcp" | "ansible" | "client_win" | "client_lnx";
  ip?: string;
  details: string;
  gpo_ansible?: string[];
  os: string;
}

const adData: AdNode[] = [
  {
    id: "dc",
    name: "Contrôleur de Domaine (AD DS / DNS)",
    type: "dc",
    ip: "192.168.10.10/24",
    os: "Windows Server 2022",
    details: "Serveur central d'annuaire et d'authentification. Gère la base de données Active Directory, le catalogue global et la résolution de noms DNS locale pour le domaine ecole.local.",
    gpo_ansible: [
      "Base de données NTDS chiffrée",
      "Authentification Kerberos v5 forcée",
      "DNS local sécurisé avec redirecteurs externes"
    ]
  },
  {
    id: "dhcp",
    name: "Serveur DHCP Réseau",
    type: "dhcp",
    ip: "192.168.10.254/24",
    os: "Windows Server (Rôle DHCP)",
    details: "Distribue les configurations IP de manière dynamique aux postes de l'école. Configuré avec des baux de 8 heures et des réservations d'IP pour les serveurs et commutateurs physiques.",
    gpo_ansible: [
      "Baux réseau configurés (Scope: 192.168.10.50-192.168.10.200)",
      "DNS option 006 pointé vers le DC",
      "Passerelle option 003 pointée vers le routeur"
    ]
  },
  {
    id: "ansible",
    name: "Nœud de Contrôle Ansible",
    type: "ansible",
    ip: "192.168.10.15/24",
    os: "Ubuntu Server LTS",
    details: "Poste d'administration centralisant le déploiement et la configuration de la flotte de postes Linux Mint du parc via des playbooks idempotents SSH.",
    gpo_ansible: [
      "Playbook d'initialisation (users, repos, SSH keys)",
      "Mises à jour système automatisées via APT cron",
      "Durcissement SSH (Disable root login, Key auth only)"
    ]
  },
  {
    id: "win_clients",
    name: "Clients Windows (15 Postes)",
    type: "client_win",
    ip: "DHCP Dynamic IP",
    os: "Windows 10 / 11 Pro",
    details: "Ordinateurs de l'école intégrés au domaine Windows Server. L'accès des utilisateurs est entièrement bridé par GPO pour assurer le durcissement du système.",
    gpo_ansible: [
      "GPO : Blocage de l'exécution de scripts PowerShell non signés",
      "GPO : Désactivation de l'accès USB externe (USB Storage Block)",
      "GPO : Restriction de l'accès au Panneau de Configuration et Regedit",
      "GPO : Déploiement automatique du fond d'écran et proxy académique"
    ]
  },
  {
    id: "lnx_clients",
    name: "Clients Linux Mint (5 Postes)",
    type: "client_lnx",
    ip: "DHCP Dynamic IP",
    os: "Linux Mint (XFCE)",
    details: "Machines déployées pour remplacer les postes obsolètes incompatibles avec Windows. Entièrement gérées par Ansible sans interaction manuelle requise.",
    gpo_ansible: [
      "SSH configuré pour l'administration Ansible",
      "Restriction sudo aux administrateurs réseau",
      "Pare-feu UFW activé (ports fermés sauf SSH d'administration)"
    ]
  }
];

export default function AdInfrastructure() {
  const [selectedNode, setSelectedNode] = useState<AdNode>(adData[0]);

  const getNodeIcon = (type: AdNode["type"]) => {
    switch (type) {
      case "dc": return <Server className="w-6 h-6 text-primary-kaliRed animate-pulse" />;
      case "dhcp": return <Settings className="w-6 h-6 text-primary-orange" />;
      case "ansible": return <Terminal className="w-6 h-6 text-[#47cf73]" />;
      default: return <Monitor className="w-6 h-6 text-primary-white" />;
    }
  };

  return (
    <div className="bg-primary-gray border border-primary-grayBorder rounded-xl p-6 space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-primary-white mb-2 flex items-center gap-3">
          <span className="text-primary-kaliRed">&gt;_</span>
          Infrastructure Active Directory &amp; Ansible
        </h3>
        <p className="text-gray-400 text-sm">
          Découvrez comment sont administrés les postes d&apos;administration de l&apos;école via les rôles AD et les playbooks d&apos;automatisation.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Topology Diagram (Left 7/12) */}
        <div className="md:col-span-7 bg-primary-black/60 rounded-xl p-4 border border-primary-grayBorder/50 min-h-[320px] flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Servers row */}
            <div className="flex justify-around w-full max-w-lg items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedNode(adData.find(n => n.id === "dhcp")!)}
                className={`p-3 rounded-lg border flex flex-col items-center gap-1 transition-all ${
                  selectedNode.id === "dhcp" ? "border-primary-orange bg-primary-orange/10 shadow-glow-orange" : "border-primary-grayBorder bg-primary-dark/80"
                }`}
              >
                <Settings className="w-5 h-5 text-primary-orange" />
                <span className="text-[10px] font-bold text-primary-white">Rôle DHCP</span>
              </motion.button>

              <div className="w-10 h-px border-t border-dashed border-gray-600" />

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedNode(adData.find(n => n.id === "dc")!)}
                className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                  selectedNode.id === "dc" ? "border-primary-kaliRed bg-primary-kaliRed/10 scale-105 shadow-glow-red" : "border-primary-grayBorder bg-primary-dark/80"
                }`}
              >
                <Server className="w-7 h-7 text-primary-kaliRed" />
                <span className="text-xs font-bold text-primary-white">AD DC &amp; DNS</span>
              </motion.button>

              <div className="w-10 h-px border-t border-dashed border-gray-600" />

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedNode(adData.find(n => n.id === "ansible")!)}
                className={`p-3 rounded-lg border flex flex-col items-center gap-1 transition-all ${
                  selectedNode.id === "ansible" ? "border-[#47cf73] bg-[#47cf73]/10 shadow-glow-green" : "border-primary-grayBorder bg-primary-dark/80"
                }`}
              >
                <Terminal className="w-5 h-5 text-[#47cf73]" />
                <span className="text-[10px] font-bold text-primary-white">Ansible Master</span>
              </motion.button>
            </div>

            {/* Connecting lines */}
            <div className="w-full flex justify-center h-8 relative">
              <svg className="w-full max-w-md h-full absolute inset-0 text-primary-grayBorder" fill="none" viewBox="0 0 300 30">
                <path d="M150,0 L75,30 M150,0 L225,30 M75,0 L75,30 M225,0 L225,30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
              </svg>
            </div>

            {/* Clients row */}
            <div className="flex justify-around w-full max-w-md">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedNode(adData.find(n => n.id === "win_clients")!)}
                className={`p-3 rounded-lg border flex flex-col items-center gap-1.5 transition-all text-center ${
                  selectedNode.id === "win_clients" ? "border-primary-kaliRed bg-primary-kaliRed/10 shadow-glow-red" : "border-primary-grayBorder bg-primary-dark/80"
                }`}
              >
                <Monitor className="w-6 h-6 text-primary-white" />
                <span className="text-[11px] font-bold text-primary-white">Clients Windows</span>
                <span className="text-[9px] text-gray-500 font-mono">15 Machines</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedNode(adData.find(n => n.id === "lnx_clients")!)}
                className={`p-3 rounded-lg border flex flex-col items-center gap-1.5 transition-all text-center ${
                  selectedNode.id === "lnx_clients" ? "border-[#47cf73] bg-[#47cf73]/10 shadow-glow-green" : "border-primary-grayBorder bg-primary-dark/80"
                }`}
              >
                <Monitor className="w-6 h-6 text-primary-white" />
                <span className="text-[11px] font-bold text-primary-white">Clients Linux Mint</span>
                <span className="text-[9px] text-gray-500 font-mono">5 Machines (Ansible)</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Info panel (Right 5/12) */}
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
                    OS: {selectedNode.os}
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">IP Adresse</span>
                  <p className="text-gray-300 font-mono">{selectedNode.ip}</p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">Rôle et Fonction</span>
                  <p className="text-gray-300 leading-relaxed font-light">{selectedNode.details}</p>
                </div>

                {selectedNode.gpo_ansible && selectedNode.gpo_ansible.length > 0 && (
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">
                      {selectedNode.type.includes("client") || selectedNode.type === "dc" ? "Directives GPO / Paramètres" : "Configurations clés"}
                    </span>
                    <div className="space-y-1.5 mt-1.5">
                      {selectedNode.gpo_ansible.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
                          <ShieldCheck className="w-4 h-4 text-primary-kaliRed flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
