"use client";

import { useState } from "react";
import { Shield, Wifi, HardDrive, ShieldAlert, CheckCircle, ChevronRight, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NetworkNode {
  id: string;
  name: string;
  type: "firewall" | "wifi" | "vlan" | "vpn";
  subnet?: string;
  details: string;
  ports?: string;
  access?: string[];
  ssid?: string;
  visibility: "Visible" | "Hidden";
}

const networkData: NetworkNode[] = [
  {
    id: "fortigate",
    name: "FortiGate 60D (Core)",
    type: "firewall",
    details: "Pare-feu principal d'administration réseau. Gère le routage inter-VLAN et les règles de sécurité.",
    ports: "Hardware Switch (1-7), DMZ, WAN1, WAN2",
    access: ["PING", "HTTPS", "SSH", "HTTP", "CAPWAP"],
    visibility: "Visible"
  },
  {
    id: "fortiap",
    name: "FortiAP 221E",
    type: "wifi",
    details: "Point d'accès sans fil connecté sur le commutateur matériel. Diffuse deux SSIDs séparés pour isoler les flux.",
    ssid: "CORP-WIFI / GUEST-WIFI",
    ports: "CAPWAP Tunnel over LAN",
    visibility: "Visible"
  },
  {
    id: "vlan10",
    name: "VLAN 10 - Admin",
    type: "vlan",
    subnet: "10.0.10.0/27",
    details: "Réseau privé d'administration. Réservé aux administrateurs système et réseau.",
    access: ["PING", "HTTPS", "SSH"],
    visibility: "Visible"
  },
  {
    id: "vlan20",
    name: "VLAN 20 - Users",
    type: "vlan",
    subnet: "10.0.20.0/24",
    details: "Réseau des collaborateurs internes. Mappe sur le SSID CORP-WIFI avec chiffrement WPA3-Enterprise.",
    access: ["PING", "HTTP", "HTTPS"],
    visibility: "Visible"
  },
  {
    id: "vlan30",
    name: "VLAN 30 - Servers",
    type: "vlan",
    subnet: "10.0.30.0/28",
    details: "Réseau DMZ interne pour héberger les serveurs locaux d'applications.",
    access: ["PING", "HTTP", "HTTPS"],
    visibility: "Visible"
  },
  {
    id: "vlan40",
    name: "VLAN 40 - Guest",
    type: "vlan",
    subnet: "10.0.40.0/24",
    details: "Réseau invités. Accès internet direct uniquement. Mappe sur GUEST-WIFI avec portail captif d'authentification.",
    access: ["HTTP", "HTTPS (Portail)"],
    visibility: "Hidden"
  },
  {
    id: "vlan50",
    name: "VLAN 50 - Management",
    type: "vlan",
    subnet: "10.0.50.0/28",
    details: "Réseau d'administration des équipements physiques (switches, AP, hyperviseurs).",
    access: ["PING", "SSH"],
    visibility: "Hidden"
  },
  {
    id: "vpnssl",
    name: "SSL-VPN (ssl.root)",
    type: "vpn",
    subnet: "10.212.134.200 - 250",
    details: "Accès nomade sécurisé par tunnel SSL. Permet de se connecter à distance au réseau d'administration.",
    access: ["Encryption AES-256", "Vérification forte"],
    visibility: "Visible"
  }
];

export default function NetworkTopology() {
  const [selectedNode, setSelectedNode] = useState<NetworkNode>(networkData[0]);

  const getNodeIcon = (type: NetworkNode["type"]) => {
    switch (type) {
      case "firewall": return <Shield className="w-6 h-6 text-primary-kaliRed animate-pulse" />;
      case "wifi": return <Wifi className="w-6 h-6 text-[#00bcd4]" />;
      case "vpn": return <ShieldAlert className="w-6 h-6 text-primary-orange" />;
      default: return <HardDrive className="w-6 h-6 text-primary-white" />;
    }
  };

  return (
    <div className="bg-primary-gray border border-primary-grayBorder rounded-xl p-6 space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-primary-white mb-2 flex items-center gap-3">
          <span className="text-primary-kaliRed">&gt;_</span>
          Topologie Réseau Interactive
        </h3>
        <p className="text-gray-400 text-sm">
          Cliquez sur les différents nœuds pour examiner la configuration des sous-réseaux et les règles du FortiGate.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Interactive Diagram Canvas (Left 7/12) */}
        <div className="md:col-span-7 bg-primary-black/60 rounded-xl p-4 border border-primary-grayBorder/50 min-h-[300px] flex flex-col justify-center relative overflow-hidden">
          
          {/* Grid background effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Top row: SSL-VPN & FortiGate */}
            <div className="flex justify-around w-full max-w-md items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedNode(networkData.find(n => n.id === "vpnssl")!)}
                className={`p-3 rounded-lg border flex flex-col items-center gap-1 transition-all ${
                  selectedNode.id === "vpnssl" ? "border-primary-orange bg-primary-orange/10 shadow-glow-orange" : "border-primary-grayBorder bg-primary-dark/80"
                }`}
              >
                <ShieldAlert className="w-6 h-6 text-primary-orange" />
                <span className="text-xs font-bold text-primary-white">SSL-VPN</span>
              </motion.button>

              <div className="w-16 h-px border-t border-dashed border-gray-600" />

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedNode(networkData.find(n => n.id === "fortigate")!)}
                className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                  selectedNode.id === "fortigate" ? "border-primary-kaliRed bg-primary-kaliRed/10 shadow-glow-red" : "border-primary-grayBorder bg-primary-dark/80"
                }`}
              >
                <Shield className="w-8 h-8 text-primary-kaliRed" />
                <span className="text-xs font-bold text-primary-white">FortiGate 60D</span>
              </motion.button>

              <div className="w-16 h-px border-t border-dashed border-gray-600" />

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedNode(networkData.find(n => n.id === "fortiap")!)}
                className={`p-3 rounded-lg border flex flex-col items-center gap-1 transition-all ${
                  selectedNode.id === "fortiap" ? "border-[#00bcd4] bg-[#00bcd4]/10 shadow-glow-cyan" : "border-primary-grayBorder bg-primary-dark/80"
                }`}
              >
                <Wifi className="w-6 h-6 text-[#00bcd4]" />
                <span className="text-xs font-bold text-primary-white">FortiAP 221E</span>
              </motion.button>
            </div>

            {/* Connecting lines illustration */}
            <div className="w-full flex justify-center h-8 relative">
              <svg className="w-full max-w-md h-full absolute inset-0 text-primary-grayBorder" fill="none" viewBox="0 0 300 30">
                <path d="M150,0 L50,30 M150,0 L100,30 M150,0 L150,30 M150,0 L200,30 M150,0 L250,30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
              </svg>
            </div>

            {/* VLAN Subnets Row */}
            <div className="flex flex-wrap justify-center gap-3 w-full px-2">
              {networkData.filter(n => n.type === "vlan").map((vlan) => (
                <motion.button
                  key={vlan.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedNode(vlan)}
                  className={`p-3 rounded-lg border flex flex-col items-center gap-1 transition-all text-center min-w-[90px] ${
                    selectedNode.id === vlan.id
                      ? "border-primary-kaliRed bg-primary-kaliRed/10 shadow-glow-red"
                      : "border-primary-grayBorder bg-primary-dark/80"
                  }`}
                >
                  <HardDrive className="w-5 h-5 text-gray-400" />
                  <span className="text-[10px] font-bold text-primary-white font-mono">{vlan.name.split(" - ")[1]}</span>
                  <span className="text-[9px] text-gray-500 font-mono">{vlan.subnet?.split("/")[0]}</span>
                </motion.button>
              ))}
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
                  {selectedNode.subnet && (
                    <span className="text-xs font-mono text-primary-kaliRed bg-primary-kaliRed/10 px-2 py-0.5 rounded border border-primary-kaliRed/20">
                      {selectedNode.subnet}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">Description</span>
                  <p className="text-gray-300 leading-relaxed font-light">{selectedNode.details}</p>
                </div>

                {selectedNode.ports && (
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">Interfaces / Ports</span>
                    <p className="text-gray-300 font-mono">{selectedNode.ports}</p>
                  </div>
                )}

                {selectedNode.ssid && (
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">SSIDs</span>
                    <p className="text-primary-cyan font-mono">{selectedNode.ssid}</p>
                  </div>
                )}

                {selectedNode.access && selectedNode.access.length > 0 && (
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">Protocoles Autorisés</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {selectedNode.access.map((acc, i) => (
                        <span key={i} className="text-[11px] font-mono bg-primary-gray border border-primary-grayBorder text-primary-green px-2 py-0.5 rounded">
                          {acc}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center pt-2 border-t border-primary-grayBorder/50">
                  <span className="text-xs text-gray-500">Statut Visibilité :</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    selectedNode.visibility === "Visible" ? "bg-primary-green/10 text-primary-green" : "bg-primary-orange/10 text-primary-orange"
                  }`}>
                    {selectedNode.visibility}
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
