export interface ApprentissageCritique {
    code: string;
    level: "acquis" | "en cours";
    details: string;
    traces?: Trace[];
}

export interface CompetenceGroup {
    name: "Réaliser" | "Administrer" | "Collaborer";
    apprentissages: ApprentissageCritique[];
}

export interface Project {
    id: number;
    title: string;
    slug: string;
    category: "perso" | "iut";
    order?: number;
    dates: string;
    duration: string;
    team: string;
    description: string;
    image: string;
    images?: string[];
    technologies: string[];
    competencesNiveau2?: CompetenceGroup[];
    competencesNiveau3?: CompetenceGroup[];
    traces?: Trace[];
    sources?: { label: string; url: string }[];
}

export interface Trace {
    type: "image" | "link";
    text: string;
    url: string;
}

export const projects: Project[] = [
    // =====================================================================
    // 👤 PROJETS PERSONNELS
    // =====================================================================

    // ---------------------------------------------------------------------
    // 🖥️ 1. ACTIVE DIRECTORY POUR UNE ÉCOLE
    // ---------------------------------------------------------------------
    {
        id: 14,
        title: "Déploiement Active Directory & gestion automatisée de 15 postes",
        slug: "active-directory-ecole",
        category: "perso",
        dates: "2024 – 2025",
        duration: "En cours",
        team: "Solo",
        description: "Note de confidentialité : Certaines informations et captures d'écran spécifiques ne peuvent être divulguées.\n\nMise en place d'un Windows Server avec Active Directory pour gérer 15 postes d'une école. Avant intervention, les machines n'avaient aucune restriction ni gestion centralisée. Mise en place d'un domaine AD, rattachement progressif des postes, création de groupes, GPO de restrictions (web, logiciels, scripts), et déploiement d'applications automatisé. Pour les machines trop anciennes, installation de Linux Mint administré via outils d'automatisation (Ansible).",
        image: "https://images.unsplash.com/photo-1560732488-6b0df240254a?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1560732488-6b0df240254a?w=800&q=80",
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
        ],
        technologies: ["Windows Server", "Active Directory", "GPO", "WSUS", "Linux Mint", "Ansible", "Virtualisation", "PowerShell"],
        competencesNiveau2: [
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC23.03", level: "acquis", details: "Sécurisation des sessions utilisateurs et blocage des accès non autorisés via GPO." }
                ]
            }
        ],
        competencesNiveau3: [
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC33.04", level: "acquis", details: "Déploiement et maintenance complète du réseau de l'école (AD, gestion des postes)." },
                    { code: "AC33.01", level: "en cours", details: "Automatisation du parc avec des GPO et Ansible pour la partie Linux." }
                ]
            },
            {
                name: "Collaborer",
                apprentissages: [
                    { code: "AC36.03", level: "acquis", details: "Conduite du changement pour les utilisateurs (passage d'une gestion libre à un domaine contrôlé)." }
                ]
            }
        ],
        sources: [
            { label: "Projet Confidentiel (Pas de lien public)", url: "#" }
        ]
    },

    // ---------------------------------------------------------------------
    // 💾 2. SERVEUR ECOLE HAUTE DISPONIBILITÉ
    // ---------------------------------------------------------------------
    {
        id: 22,
        title: "Serveur de stockage résilient avec basculement automatique",
        slug: "ha-storage-server-tailscale",
        category: "perso",
        order: 2,
        dates: "2025",
        duration: "1 mois",
        team: "Solo",
        description: "Déploiement d'une infrastructure de stockage de fichiers à distance pour une école, axée sur la haute disponibilité.\n\nMise en place d'un réseau privé via Tailscale pour un accès distant sécurisé. Un serveur principal et un serveur relais (sous Ubuntu, avec plusieurs To de stockage) sont synchronisés en temps réel via Syncthing. Côté client, un script Batch (.bat) configuré au démarrage vérifie la disponibilité du serveur principal. Si celui-ci est inaccessible, le script monte dynamiquement le lecteur réseau (Z:) sur le serveur relais, offrant un basculement transparent pour les utilisateurs sans perte de données ni changement d'habitudes.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        images: [
            "/images/serverStockage/sync.png",
            "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80"
        ],
        technologies: ["Ubuntu Server", "Tailscale (VPN)", "Syncthing", "Batch Scripting (.bat)", "Réseau / Partage de fichiers"],
        competencesNiveau2: [
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC23.02", level: "acquis", details: "Utilisation de services réseaux virtualisés pour lier les serveurs distants." }
                ]
            }
        ],
        competencesNiveau3: [
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC33.04", level: "acquis", details: "Déploiement d'un réseau de stockage distant répondant aux besoins de l'organisation." },
                    { code: "AC33.02", level: "acquis", details: "Configuration réseau avancée (réseau maillé Tailscale, montage dynamique)." }
                ]
            },
            {
                name: "Réaliser",
                apprentissages: [
                    { code: "AC31.01", level: "acquis", details: "Conception d'une architecture résiliente (Haute Disponibilité) avec réplication et basculement." }
                ]
            }
        ],
        sources: [
            { label: "Infrastructure Confidentielle", url: "#" }
        ]
    },

    // ---------------------------------------------------------------------
    // 🎹 3. PROJET PIANOLAN (ASSISTANT LIVE)
    // ---------------------------------------------------------------------
    {
        id: 21,
        title: "Pianolan : Assistant Live & Gestionnaire de Partitions",
        slug: "pianolan-live-assistant",
        category: "perso",
        order: 3,
        dates: "Avril 2026 - En cours",
        duration: "En cours",
        team: "Solo",
        description: "Développement d'une PWA (Progressive Web App) 'offline-first' dédiée aux musiciens pour la scène.\n\nL'application permet de centraliser des setlists, de lire des partitions PDF (avec gestion intelligente des pages multiples) et de créer des grilles d'accords interactives dotées d'un visualiseur de piano.\n\nPour les répétitions, un système backend en Python (FastAPI + yt-dlp) permet de chercher une musique sur YouTube et d'importer directement l'audio dans l'application.\n\nTout est pensé pour le live : un mode 'Performance' verrouille l'écran, synchronise l'audio avec la partition, et permet de passer à la suite d'un simple glissement de doigt, le tout sans connexion internet grâce au stockage local (IndexedDB) couplé à une sauvegarde Cloud.",
        image: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=800&q=80",
        images: [
            "/images/pianolan/dash.png",
            "/images/pianolan/setlist.png"
        ],
        technologies: ["Vue.js 3", "Tailwind CSS", "Supabase (Auth/Cloud)", "Python (FastAPI)", "yt-dlp", "Tonal.js", "IndexedDB", "Capacitor (APK)"],
        competencesNiveau2: [
            {
                name: "Réaliser",
                apprentissages: [
                    { code: "AC21.02", level: "acquis", details: "Création d'une interface très ergonomique pensée pour l'urgence du direct (Live)." },
                    { code: "AC21.01", level: "acquis", details: "Transformation d'un besoin métier spécifique en application concrète." }
                ]
            }
        ],
        competencesNiveau3: [
            {
                name: "Réaliser",
                apprentissages: [
                    { code: "AC31.01", level: "acquis", details: "Architecture Offline-First et backend hybride Python/BaaS." },
                    { code: "AC31.03", level: "en cours", details: "Déploiement en format natif Android (.apk) via Capacitor." }
                ]
            },
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC33.01", level: "acquis", details: "Mise en place d'une API d'extraction audio automatisée." }
                ]
            }
        ],
        sources: [
            { label: "Code Source (GitHub)", url: "https://github.com/Cern667/pianolanApp" }
        ]
    },

    // ---------------------------------------------------------------------
    // 📡 4. PROJET CERNDROP (P2P & GEOLOC)
    // ---------------------------------------------------------------------
    {
        id: 19,
        title: "CernDrop : Partage de fichiers P2P Instantané",
        slug: "cerndrop-p2p-webrtc",
        category: "perso",
        order: 4,
        dates: "Janvier 2025 - En cours",
        duration: "En cours",
        team: "Solo",
        description: "Développement d'une solution universelle de transfert de fichiers instantané en Peer-to-Peer (P2P), conçue pour briser les barrières entre les écosystèmes.\n\nArchitecture Zero-Trust & Ephemeral : Zéro Stockage (transit WebRTC direct), Connectivité Hybride (LAN/WAN intelligent), et Auto-hébergement sécurisé via Cloudflare Tunnel.",
        image: "/images/cerndrop/cernDrop.png",
        images: [
            "/images/cerndrop/cernDrop.png",
            "/images/cerndrop/cern2.png",
            "https://images.unsplash.com/photo-1614064641938-3bcee529cf91?w=800&q=80"
        ],
        technologies: ["Node.js & Socket.io", "WebRTC", "Alpine.js", "Tailwind CSS", "Docker"],
        competencesNiveau2: [
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC23.01", level: "acquis", details: "Développement d'une application communiquant en temps réel sur le réseau." }
                ]
            }
        ],
        competencesNiveau3: [
            {
                name: "Réaliser",
                apprentissages: [
                    { code: "AC31.01", level: "acquis", details: "Choix de l'architecture Zero-Trust et P2P pour le transfert hybride." },
                    { code: "AC31.03", level: "en cours", details: "Intégration en production via Docker." }
                ]
            },
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC33.02", level: "acquis", details: "Configuration de Cloudflare Tunnels pour le transit sécurisé." }
                ]
            }
        ],
        sources: [
            { label: "Code Source", url: "https://github.com/Cern667/cernDrop" }
        ]
    },

    // ---------------------------------------------------------------------
    // 🛠️ 5. ANSIBLE & TERRAFORM
    // ---------------------------------------------------------------------
    {
        id: 20,
        title: "Automatisation d'Infrastructure & Cloud Hybride",
        slug: "ansible-terraform-deployment",
        category: "perso",
        dates: "2025",
        duration: "3 mois",
        team: "Solo (lié aux travaux IUT)",
        description: "Conception de pipelines de déploiement d'infrastructure as code (IaC) pour orchestrer le déploiement de l'architecture DevSecOps sur différents environnements (VirtualBox, Cloud).\n\n• Provisionning : Terraform pour les VMs et réseaux.\n• Configuration Management : Ansible pour configurer les serveurs (GitLab, Docker) et sécuriser les OS.",
        image: "/images/ansible/ansible.png",
        images: [
            "/images/ansible/ansible.png",
            "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80"
        ],
        technologies: ["Ansible", "Terraform", "VirtualBox", "Bash Scripts", "YAML", "Git"],
        competencesNiveau2: [
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC23.02", level: "acquis", details: "Mise en place et utilisation de serveurs virtualisés." }
                ]
            }
        ],
        competencesNiveau3: [
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC33.01", level: "acquis", details: "Création de processus automatisés via Ansible et Terraform." },
                    { code: "AC33.02", level: "acquis", details: "Configuration avancée de serveurs et d'hyperviseurs." }
                ]
            },
            {
                name: "Réaliser",
                apprentissages: [
                    { code: "AC31.03", level: "acquis", details: "Mise en place d'un environnement de production reproductible." }
                ]
            }
        ]
    },

    // ---------------------------------------------------------------------
    // 🎣 6. SIMULATION DE PHISHING
    // ---------------------------------------------------------------------
    {
        id: 17,
        title: "Analyse d'une chaîne d'attaque de phishing",
        slug: "phishing-attack-chain-analysis",
        category: "perso",
        dates: "Été 2025",
        duration: "1 semaine",
        team: "Solo",
        description: "Déconstruction et simulation d'une campagne de phishing avancée dans un environnement contrôlé. Le projet visait à analyser la chaîne d'outils moderne : clonage de sites web, déploiement de pages frauduleuses, et exposition via Ngrok.",
        image: "/images/phising/facading.png",
        images: [
            "/images/phising/facading.png",
            "/images/phising/paulva.png",
            "/images/phising/ngrok.png",
            "/images/phising/settool.png"
        ],
        technologies: ["Social-Engineer Toolkit (SET)", "Ngrok", "HTTrack", "Kali Linux"],
        competencesNiveau2: [
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC23.03", level: "acquis", details: "Étude des vulnérabilités humaines pour sécuriser l'accès aux données." }
                ]
            }
        ],
        competencesNiveau3: [
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC33.03", level: "acquis", details: "Compréhension des attaques pour appliquer de meilleures politiques de sécurité." }
                ]
            },
            {
                name: "Collaborer",
                apprentissages: [
                    { code: "AC36.01", level: "acquis", details: "Veille technologique sur les techniques d'attaques (Red Team)." }
                ]
            }
        ]
    },

    // ---------------------------------------------------------------------
    // 🎵 7. AUTRES PROJETS PERSO
    // ---------------------------------------------------------------------
    {
        id: 15,
        title: "Outil de transfert de playlists Deezer vers Spotify",
        slug: "deezer-spotify-transfer",
        category: "perso",
        dates: "Novembre 2025",
        duration: "2 jours",
        team: "Solo",
        description: "Script connectant les API de Deezer et Spotify pour transférer l'intégralité d'une bibliothèque musicale avec recherche intelligente de correspondances.",
        image: "/images/deezer/deezer.jpg",
        images: ["/images/deezer/deezer.jpg", "/images/deezer/spotify.jpg"],
        technologies: ["Python", "API REST", "Deezer API", "Spotify API"],
        competencesNiveau3: [
            {
                name: "Réaliser",
                apprentissages: [
                    { code: "AC31.01", level: "acquis", details: "Implémentation d'une architecture logicielle basée sur des API tierces." }
                ]
            }
        ]
    },
    {
        id: 16,
        title: "Keylogger / Analyseur de frappes X11",
        slug: "keylogger-c-x11-security",
        category: "perso",
        dates: "Octobre 2025",
        duration: "2 mois",
        team: "Solo",
        description: "PoC en C interagissant avec X11 pour capturer les événements clavier. Étude des vecteurs d'attaque sur Linux.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
        technologies: ["C", "X11 Lib", "Linux System Programming"],
        competencesNiveau3: [
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC33.03", level: "acquis", details: "Compréhension bas niveau des vulnérabilités systèmes." }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Bug Bounty HackerOne",
        slug: "bug-bounty-hackerone",
        category: "perso",
        dates: "Continu",
        duration: "Continu",
        team: "Solo",
        description: "Recherche de vulnérabilités sur programmes publics.",
        image: "/images/hackerone.png",
        technologies: ["Burp Suite", "Python", "OWASP"],
        competencesNiveau3: [
            {
                name: "Collaborer",
                apprentissages: [
                    { code: "AC36.01", level: "acquis", details: "Veille permanente sur les nouvelles failles de sécurité." }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Web Scraping Automation",
        slug: "web-scraping",
        category: "perso",
        dates: "Novembre 2025",
        duration: "3 semaines",
        team: "Équipe de 2",
        description: "Automatisation et scraping massif avec Playwright.",
        image: "/images/webS.png",
        technologies: ["Python", "Playwright", "Selenium"],
        competencesNiveau3: [
            {
                name: "Réaliser",
                apprentissages: [
                    { code: "AC31.01", level: "acquis", details: "Création d'un script d'automatisation sur le web." }
                ]
            }
        ]
    },

    // =====================================================================
    // 🎓 PROJETS IUT
    // =====================================================================

    // ---------------------------------------------------------------------
    // 🚀 1. PROJET DEVOPS (IUT)
    // ---------------------------------------------------------------------
    {
        id: 11,
        title: "Architecture DevSecOps & Self-Hosting",
        slug: "infra-auth-devops",
        category: "iut",
        order: 1,
        dates: "Septembre 2025 - Janvier 2026",
        duration: "3 mois",
        team: "Équipe de 3 personnes",
        description:
            `Conception, déploiement et maintien en condition opérationnelle d'une infrastructure cloud hautement disponible (HA). Le projet a évolué d'une architecture mono-serveur vers un cluster distribué tolérant aux pannes.
        
        L'infrastructure est divisée en deux environnements isolés (Stack Métier et Stack Observabilité) pour garantir la résilience de la supervision :
        • Orchestration & Stockage : Cluster Docker Swarm multi-nœuds avec réplication des services. Persistance des données assurée par un système de fichiers distribué GlusterFS.
        • Automatisation (IaC) : Provisioning des serveurs via Ansible et déploiement automatisé par scripts shell (Cernlabs pour la prod, PCA pour la supervision).
        • Réseau & Routage : Réseaux Overlay isolés, Reverse Proxy Traefik dynamique avec gestion avancée du trafic (Sticky Sessions pour le SSO Keycloak).
        • Observabilité & Alerting : Supervision avec Grafana, centralisation des logs via Loki/Promtail, et développement d'un service 'Watchdog' sur mesure pour tester la disponibilité HTTP réelle des services et déclencher des alertes.
        • Services Hébergés : Nextcloud (fichiers), SFTPGo (transferts), protégés par authentification centralisée OpenID Connect.`,
        image: "/images/devops/sae-portail.png",
        images: [
            "/images/devops/sae-portail.png",
            "/images/devops/traefik.png",
            "/images/devops/sftpgo.png",
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
        ],
        technologies: ["Docker Compose", "Cloudflare Tunnel", "Traefik", "Keycloak", "OpenLDAP", "GitLab"],
        competencesNiveau2: [
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC23.03", level: "acquis", details: "Protection des services en isolant le réseau local." }
                ]
            },
            {
                name: "Collaborer",
                apprentissages: [
                    { code: "AC26.03", level: "acquis", details: "Travail efficace au sein du groupe de projet IUT." }
                ]
            }
        ],
        competencesNiveau3: [
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC33.02", level: "acquis", details: "Configuration réseau avancée (Split DNS, Reverse Proxy)." },
                    { code: "AC33.03", level: "acquis", details: "Sécurisation poussée de l'infrastructure (Zero-Trust, SSO, TLS)." }
                ]
            },
            {
                name: "Réaliser",
                apprentissages: [
                    { code: "AC31.03", level: "acquis", details: "Mise en production d'une architecture complexe et résiliente." }
                ]
            },
            {
                name: "Collaborer",
                apprentissages: [
                    { code: "AC36.04", level: "acquis", details: "Gestion d'un projet technique lourd en équipe de 3." }
                ]
            }
        ],
        sources: [{ label: "Application hébergée", url: "https://sae-portail.cerncloud.cloud" }]
    },

    // ---------------------------------------------------------------------
    // 📁 2. PROJET NAS PYTHON (IUT)
    // ---------------------------------------------------------------------
    {
        id: 13,
        title: "NAS Python avec LDAP, chiffrement AES et versionning",
        slug: "nas-python-ldap",
        category: "iut",
        order: 5,
        dates: "Janvier 2025 – Mars 2025",
        duration: "2 mois",
        team: "Équipe de 3 personnes",
        description: "Développement d'un NAS en Python avec authentification LDAP, chiffrement AES, versionning automatique et interface web Flask.",
        image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80",
        images: [
            "/images/nas/home.png",
            "/images/nas/dashboard.png"
        ],
        technologies: ["Python", "Flask", "LDAP", "AES Encryption", "Sockets TCP"],
        competencesNiveau2: [
            {
                name: "Réaliser",
                apprentissages: [
                    { code: "AC21.03", level: "acquis", details: "Adoption de bonnes pratiques de conception et de programmation en Python." }
                ]
            }
        ],
        competencesNiveau3: [
            {
                name: "Réaliser",
                apprentissages: [
                    { code: "AC31.01", level: "acquis", details: "Choix de l'architecture pour gérer les fichiers et la communication client-serveur." }
                ]
            },
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC33.03", level: "acquis", details: "Intégration de la sécurité avec LDAP et le chiffrement AES." }
                ]
            },
            {
                name: "Collaborer",
                apprentissages: [
                    { code: "AC36.04", level: "acquis", details: "Répartition du code et gestion de projet à 3." }
                ]
            }
        ],
        sources: [{ label: "Code Source NAS", url: "https://github.com/Cern667/cernDriveSecure" }]
    },

    // ---------------------------------------------------------------------
    // 🧠 3. PROJET RAFT (IUT)
    // ---------------------------------------------------------------------
    {
        id: 18,
        title: "Système Distribué : Consensus Raft en C",
        slug: "raft-consensus-c",
        category: "iut",
        dates: "Janvier 2025 - Février 2025",
        duration: "2 mois",
        team: "Équipe de 2 personnes",
        description: "Développement bas-niveau d'un cluster de nœuds implémentant l'algorithme de consensus Raft (Réseau TCP, Élection de leader, Réplication).",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        technologies: ["C", "TCP Sockets", "Multi-threading", "Mutex"],
        competencesNiveau2: [
            {
                name: "Réaliser",
                apprentissages: [
                    { code: "AC21.03", level: "acquis", details: "Code structuré en C pour gérer le multi-threading." }
                ]
            }
        ],
        competencesNiveau3: [
            {
                name: "Réaliser",
                apprentissages: [
                    { code: "AC31.01", level: "acquis", details: "Conception d'une architecture distribuée complexe (Machine à états)." }
                ]
            },
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC33.02", level: "acquis", details: "Gestion fine des réseaux avec TCP Sockets." }
                ]
            }
        ],
        sources: [{ label: "Rapport de projet", url: "/documents/raft/Rapport_Projet_Raft.pdf" }]
    },

    // ---------------------------------------------------------------------
    // 4. AUTRES PROJETS IUT
    // ---------------------------------------------------------------------
    {
        id: 1,
        title: "Référendum Java Spring Boot",
        slug: "referendum-java-spring",
        category: "iut",
        dates: "Septembre 2025",
        duration: "5 mois",
        team: "Équipe de 5",
        description: "Plateforme de vote électronique sécurisée.",
        image: "/images/sae.png",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
        competencesNiveau3: [
            {
                name: "Réaliser",
                apprentissages: [
                    { code: "AC31.01", level: "acquis", details: "Création d'une application d'entreprise sous Spring Boot." }
                ]
            },
            {
                name: "Collaborer",
                apprentissages: [
                    { code: "AC36.04", level: "acquis", details: "Coordination d'une équipe de 5 personnes sur la durée." }
                ]
            }
        ],
        sources: [
            { label: "Dépôt GitLab", url: "https://gitlab.pikudev.cloud/sae-referundum/" }
        ]
    },
    {
        id: 10,
        title: "Automatisation Radio Aviva",
        slug: "radio-aviva",
        category: "iut",
        dates: "Septembre 2025",
        duration: "10 semaines",
        team: "Solo",
        description: "Automatisation Notion → Google Agenda.",
        image: "/images/notion.jpeg",
        technologies: ["Python", "Notion API", "Google Calendar"],
        competencesNiveau3: [
            {
                name: "Administrer",
                apprentissages: [
                    { code: "AC33.01", level: "acquis", details: "Mise en place d'un processus de traitement totalement automatisé." }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "E-commerce PHP",
        slug: "ecommerce-php",
        category: "iut",
        dates: "Octobre 2025",
        duration: "1 mois",
        team: "Équipe de 3",
        description: "Site e-commerce MVC.",
        image: "/images/sitePHP.png",
        technologies: ["PHP", "MySQL", "JavaScript"],
        competencesNiveau3: [
            {
                name: "Réaliser",
                apprentissages: [
                    { code: "AC31.01", level: "acquis", details: "Architecture MVC appliquée au web." }
                ]
            },
            {
                name: "Collaborer",
                apprentissages: [
                    { code: "AC36.04", level: "acquis", details: "Organisation du travail en équipe de 3." }
                ]
            }
        ]
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}
export function getProjectsByCategory(category: "perso" | "iut"): Project[] {
    return projects.filter((project) => project.category === category);
}
export function getAllProjects(): Project[] {
    return projects.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}