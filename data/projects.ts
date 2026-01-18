export interface Project {
    id: number;
    title: string;
    slug: string;
    category: "perso" | "iut";
    dates: string;
    duration: string;
    team: string;
    description: string;
    image: string;
    images?: string[];  // Multiple images for slider
    technologies: string[];
    competences?: Competence[];
    traces?: Trace[];
    sources?: { label: string; url: string }[];
}

export interface Competence {
    code: string;
    name: string;
    level: "acquis" | "en cours";
    details: string;
    traces?: Trace[];
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
    // 🖥️ 1. PROJET PERSONNEL : ACTIVE DIRECTORY POUR UNE ÉCOLE
    // ---------------------------------------------------------------------
    {
        id: 14,
        title: "Déploiement Active Directory & gestion automatisée de 15 postes pour une école",
        slug: "active-directory-ecole",
        category: "perso",
        dates: "2024 – 2025",
        duration: "En cours",
        team: "Solo",
        description:
            "Note de confidentialité : Certaines informations et captures d'écran spécifiques ne peuvent être divulguées.\n\n" +
            "Mise en place d'un Windows Server avec Active Directory pour gérer 15 postes d'une école. Avant intervention, les machines n'avaient aucune restriction ni gestion centralisée. Mise en place d'un domaine AD, rattachement progressif des postes, création de groupes, GPO de restrictions (web, logiciels, scripts), et déploiement d'applications automatisé. Pour les machines trop anciennes, installation de Linux Mint administré via outils d'automatisation (Ansible).",
        image: "https://images.unsplash.com/photo-1560732488-6b0df240254a?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1560732488-6b0df240254a?w=800&q=80", // Classroom computers
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", // Server infrastructure
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", // Tech workspace
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"  // Computer lab setup
        ],
        technologies: [
            "Windows Server",
            "Active Directory",
            "GPO",
            "WSUS",
            "Linux Mint",
            "Ansible",
            "Virtualisation",
            "PowerShell"
        ],
        competences: [
            {
                code: "R5.B.06",
                name: "Administration systèmes complexes",
                level: "acquis",
                details: "Gestion de domaine AD, groupes, politiques, droits, gestion multi-OS."
            },
            {
                code: "R5.B.05",
                name: "Automatisation",
                level: "en cours",
                details: "Déploiement automatisé de logiciels via GPO, scripts PowerShell, et préparation Ansible pour Linux."
            },
            {
                code: "R5.01",
                name: "Initiation au management",
                level: "en cours",
                details: "Gestion opérationnelle des besoins de l’établissement."
            }
        ]
    },

    // ---------------------------------------------------------------------
    // 🎣 2. PROJET DE SIMULATION DE PHISHING (RED TEAM)
    // ---------------------------------------------------------------------
    {
        id: 17,
        title: "Analyse d'une chaîne d'attaque de phishing (Credential Harvesting)",
        slug: "phishing-attack-chain-analysis",
        category: "perso",
        dates: "Été 2025",
        duration: "1 semaine",
        team: "Solo",
        description:
            "Déconstruction et simulation d'une campagne de phishing avancée dans un environnement de laboratoire contrôlé. Le projet visait à analyser la chaîne d'outils moderne utilisée par les attaquants : clonage de sites web (HTTrack), déploiement de pages frauduleuses (Social-Engineer Toolkit), exposition du serveur local sur internet (Ngrok) et masquage de l'URL avec un domaine d'apparence légitime.",
        image: "/images/phising/facading.png",
        images: [
            "/images/phising/facading.png", // Page clone
            "/images/phising/paulva.png",   // Nouvelle image ajoutée
            "/images/phising/ngrok.png",    // Tunneling
            "/images/phising/settool.png"   // Outil SET
        ],
        technologies: [
            "Social-Engineer Toolkit (SET)",
            "Ngrok",
            "HTTrack",
            "Kali Linux",
            "Ingénierie Sociale"
        ],
        competences: [
            {
                code: "R5.B.09",
                name: "Cybersécurité",
                level: "acquis",
                details: "Analyse et mise en pratique contrôlée de techniques d'ingénierie sociale."
            },
            {
                code: "R5.B.02",
                name: "Évaluation de la sécurité",
                level: "acquis",
                details: "Compréhension de la méthodologie d'un test d'intrusion."
            }
        ]
    },

    // ---------------------------------------------------------------------
    // 📡 3. PROJET CERNDROP (P2P & GEOLOC)
    // ---------------------------------------------------------------------
    {
        id: 19,
        title: "CernDrop : Partage de fichiers P2P Instantané & Éphémère",
        slug: "cerndrop-p2p-webrtc",
        category: "perso",
        dates: "Janvier 2025 - En cours",
        duration: "En cours",
        team: "Solo",
        description:
            "Développement d'une solution universelle de transfert de fichiers instantané en Peer-to-Peer (P2P), conçue pour briser les barrières entre les écosystèmes (PC, Android, iOS).\n\n" +
            "Architecture Zero-Trust & Ephemeral : Zéro Stockage (transit WebRTC direct), Connectivité Hybride (LAN/WAN intelligent), et Auto-hébergement sécurisé via Cloudflare Tunnel.",
        image: "/images/cerndrop/cernDrop.png",
        images: [
            "/images/cerndrop/cernDrop.png",
            "/images/cerndrop/cern2.png",
            "https://images.unsplash.com/photo-1614064641938-3bcee529cf91?w=800&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
        ],
        technologies: [
            "Node.js & Socket.io",
            "WebRTC",
            "Alpine.js",
            "Tailwind CSS",
            "Docker"
        ],
        competences: [
            {
                code: "R5.A.07",
                name: "Réseaux et protocoles",
                level: "en cours",
                details: "Implémentation WebRTC Data Channels."
            },
            {
                code: "R5.B.05",
                name: "Déploiement",
                level: "acquis",
                details: "Conteneurisation et Tunneling sécurisé."
            }
        ],
        sources: [
            { label: "Code Source", url: "https://github.com/Cern667/cernDrop" }
        ]
    },

    // ---------------------------------------------------------------------
    // 🛠️ 4. NOUVEAU PROJET : ANSIBLE & TERRAFORM
    // ---------------------------------------------------------------------
    {
        id: 20,
        title: "Automatisation d'Infrastructure & Cloud Hybride (Ansible & Terraform)",
        slug: "ansible-terraform-deployment",
        category: "perso",
        dates: "2025",
        duration: "3 mois",
        team: "Solo (lié aux travaux IUT)",
        description:
            "Conception de pipelines de déploiement d'infrastructure as code (IaC) pour orchestrer le déploiement de l'architecture DevSecOps sur différents environnements (VirtualBox, Cloud).\n\n" +
            "• Provisionning : Utilisation de Terraform pour instancier les machines virtuelles, gérer les réseaux et les ressources systèmes.\n" +
            "• Configuration Management : Playbooks Ansible pour configurer automatiquement les serveurs (GitLab, Docker, Monitoring), sécuriser les OS (hardenning) et déployer les applications conteneurisées.\n" +
            "Ce projet a permis de rendre l'architecture DevSecOps (projet IUT) entièrement reproductible et 'disposable'.",
        image: "/images/ansible/ansible.png",
        images: [
            "/images/ansible/ansible.png", // Server/Cloud
            "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80", // Automation
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"  // Data center
        ],
        technologies: [
            "Ansible",
            "Terraform",
            "VirtualBox",
            "Bash Scripts",
            "YAML",
            "Git"
        ],
        competences: [
            {
                code: "R5.B.05",
                name: "Automatisation",
                level: "acquis",
                details: "Création de chaînes de déploiement complètes (IaC)."
            },
            {
                code: "R5.B.07",
                name: "Virtualisation",
                level: "acquis",
                details: "Pilotage d'hyperviseurs via code (Vagrant/Terraform)."
            }
        ]
    },

    // ---------------------------------------------------------------------
    // 🎵 5. Autres Projets Perso...
    // ---------------------------------------------------------------------
    {
        id: 15,
        title: "Outil de transfert de playlists Deezer vers Spotify",
        slug: "deezer-spotify-transfer",
        category: "perso",
        dates: "Novembre 2025",
        duration: "2 jours",
        team: "Solo",
        description:
            "Suite à la résiliation de mon abonnement Deezer, et pour éviter de perdre mes playlists ou de payer des solutions tierces, j'ai développé ce script d'automatisation. Il connecte les API officielles de Deezer et Spotify pour transférer l'intégralité de la bibliothèque musicale. Le script récupère les métadonnées de chaque morceau sur Deezer, effectue une recherche intelligente sur Spotify pour trouver la meilleure correspondance, et l'ajoute à la playlist de destination.",
        image: "/images/deezer/deezer.jpg",
        images: [
            "/images/deezer/deezer.jpg",
            "/images/deezer/spotify.jpg"
        ],
        technologies: ["Python", "API REST", "Deezer API", "Spotify API"],
        competences: []
    },
    {
        id: 16,
        title: "Keylogger / Analyseur de frappes X11 (Securité)",
        slug: "keylogger-c-x11-security",
        category: "perso",
        dates: "Octobre 2025",
        duration: "2 mois",
        team: "Solo",
        description: "PoC en C interagissant avec X11 pour capturer les événements clavier. Étude des vecteurs d'attaque sur Linux.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
        technologies: ["C", "X11 Lib", "Linux System Programming"],
        competences: []
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
        technologies: ["Burp Suite", "Python", "OWASP"]
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
        technologies: ["Python", "Playwright", "Selenium"]
    },


    // =====================================================================
    // 🎓 PROJETS IUT
    // =====================================================================

    // ---------------------------------------------------------------------
    // 🚀 1. PROJET DEVOPS (IUT)
    // ---------------------------------------------------------------------
    {
        id: 11,
        title: "Architecture DevSecOps & Self-Hosting : Infrastructure Zero-Trust",
        slug: "infra-auth-devops",
        category: "iut",
        dates: "Septembre 2024 - Janvier 2025",
        duration: "3 mois",
        team: "Équipe de 3 personnes",
        description:
            `Conception et déploiement d'une infrastructure de services conteneurisée (Docker) simulant un environnement de production critique.
        
        L'objectif était de rendre accessibles des outils DevOps (GitLab, SFTPGo) de manière sécurisée sans exposer le réseau local (CGNAT) :
        • Architecture Réseau Hybride : Tunnel Cloudflare (Zero Trust) et Split DNS.
        • Orchestration & Routage : Traefik Reverse Proxy dynamique avec TLS Wildcard.
        • IAM : SSO centralisé via Keycloak et OpenLDAP.
        • Sécurité : Infrastructure "Code-First" (IaC) et isolation des flux.`,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
            "https://images.unsplash.com/photo-1667372393119-c85c020889f1?w=800&q=80",
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
            "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80"
        ],
        technologies: [
            "Docker Compose",
            "Cloudflare Tunnel",
            "Traefik",
            "Keycloak",
            "OpenLDAP",
            "GitLab",
            "CrowdSec"
        ],
        competences: [
            {
                code: "R5.B.05",
                name: "Automatisation",
                level: "acquis",
                details: "Automatisation du déploiement et des certificats TLS."
            },
            {
                code: "R5.B.07",
                name: "Virtualisation avancée",
                level: "acquis",
                details: "Réseaux Docker, volumes, multi-containers."
            },
            {
                code: "R5.B.08",
                name: "Continuité de service",
                level: "acquis",
                details: "Mécanismes de résilience."
            }
        ],
        sources: [
            { label: "Application hébergée", url: "https://sae-gitlab.cerncloud.cloud" }
        ],
    },

    // ---------------------------------------------------------------------
    // 📁 2. PROJET NAS PYTHON (IUT)
    // ---------------------------------------------------------------------
    {
        id: 13,
        title: "NAS Python avec LDAP, chiffrement AES et versionning",
        slug: "nas-python-ldap",
        category: "iut",
        dates: "Janvier 2025 – Mars 2025",
        duration: "2 mois",
        team: "Équipe de 3 personnes",
        description:
            "Développement d'un NAS en Python avec authentification LDAP, chiffrement AES, versionning automatique et interface web Flask.",
        image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80",
        images: [
            "/images/nas/home.png",
            "/images/nas/dashboard.png",
            "/images/nas/file.png",
            "/images/nas/log.png",
            "/images/nas/multi_devices.png"
        ],
        technologies: [
            "Python",
            "Flask",
            "LDAP",
            "AES Encryption",
            "Sockets TCP"
        ],
        competences: [
            {
                code: "R5.B.04",
                name: "Programmation système",
                level: "acquis",
                details: "Sockets TCP, manipulation système."
            },
            {
                code: "R5.B.09",
                name: "Cybersécurité",
                level: "acquis",
                details: "Chiffrement AES, authentification LDAP."
            }
        ],
        sources: [
            { label: "Code Source NAS", url: "https://github.com/Cern667/cernDriveSecure" }
        ]
    },

    // ---------------------------------------------------------------------
    // 🧠 3. PROJET RAFT (IUT)
    // ---------------------------------------------------------------------
    {
        id: 18,
        title: "Système Distribué : Implémentation du Consensus Raft en C",
        slug: "raft-consensus-c",
        category: "iut",
        dates: "Janvier 2025 - Février 2025",
        duration: "2 mois",
        team: "Équipe de 2 personnes",
        description:
            "Développement bas-niveau d'un cluster de nœuds implémentant l'algorithme de consensus Raft.\n\n" +
            "• Réseau : Communication TCP non-bloquante (Heartbeats).\n" +
            "• Élection : Machine à états Leader/Follower/Candidate.\n" +
            "• Réplication : Log Replication & Strong Consistency.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
            "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?w=800&q=80",
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80"
        ],
        technologies: [
            "C",
            "TCP Sockets",
            "Multi-threading",
            "Mutex",
            "Systèmes Distribués"
        ],
        competences: [
            {
                code: "R5.B.04",
                name: "Programmation système",
                level: "acquis",
                details: "Gestion mémoire, sockets, threads."
            },
            {
                code: "R5.A.01",
                name: "Algorithmique complexe",
                level: "acquis",
                details: "Machine à états distribuée."
            }
        ],
        sources: [
            { label: "Dépôt Git", url: "https://gitlabinfo.iutmontp.univ-montp2.fr/pujoln/cluster-de-noeuds-g3" },
            { label: "Rapport de projet", url: "/documents/raft/Rapport_Projet_Raft.pdf" }
        ]
    },

    // ---------------------------------------------------------------------
    // 4. Autres Projets IUT...
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
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"]
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
        technologies: ["Python", "Notion API", "Google Calendar"]
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
        technologies: ["PHP", "MySQL", "JavaScript"]
    },
];

// -----------------------------------------------------
export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: "perso" | "iut"): Project[] {
    return projects.filter((project) => project.category === category);
}

export function getAllProjects(): Project[] {
    return projects;
}
