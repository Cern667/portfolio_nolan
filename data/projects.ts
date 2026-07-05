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
    traces?: Trace[];
    sources?: { label: string; url: string }[];
    tags?: ("réseau" | "cyber" | "devops" | "dev")[];
}

export interface Trace {
    type: "image" | "link";
    text: string;
    url: string;
}

export const projects: Project[] = [
    // =====================================================================
    // 🏠 1. HOMELAB SECURISE & CENTRALISÉ (Authentik SSO)
    // =====================================================================
    {
        id: 23,
        title: "Homelab Sécurisé : Suite de Services & SSO Authentik",
        slug: "homelab-sso-authentik",
        category: "perso",
        order: 1,
        dates: "2025 – 2026",
        duration: "3 mois",
        team: "Solo",
        description: "Conception, déploiement et sécurisation d'un serveur homelab complet auto-hébergé, hébergeant une suite d'applications de divertissement et de gestion documentaire (Jellyfin, Kavita, Librarr, Sonarr, Radarr, etc.). L'ensemble des services est unifié par le fournisseur d'identité Authentik, intégrant le SSO Google (OAuth2/OIDC) pour offrir une authentification unique, centralisée et robuste. L'isolation réseau est renforcée par l'utilisation de tunnels VPN maillés (Tailscale) pour l'accès administratif, et par l'intégration d'un conteneur dédié de redirection de trafic via ProtonVPN pour sécuriser, anonymiser et isoler les téléchargements de données du reste de l'infrastructure.",
        image: "/images/homelab/sso_dashboard.png",
        images: [
            "/images/homelab/sso_dashboard.png"
        ],
        technologies: ["Authentik", "Docker", "Docker Compose", "Google Cloud (SSO OAuth2)", "ProtonVPN (Container)", "Tailscale", "Reverse Proxy (Traefik)", "Jellyfin", "Kavita", "Librarr"],
        sources: [
            { label: "Projet Privé", url: "#" }
        ],
        tags: ["cyber", "devops"]
    },

    // ---------------------------------------------------------------------
    // 🛡️ 2. PARE-FEU FORTIGATE & SEGMENTATION RESEAU (FortiAP)
    // ---------------------------------------------------------------------
    {
        id: 24,
        title: "Sécurisation Réseau & Administration FortiGate 60D",
        slug: "fortigate-security-network",
        category: "perso",
        order: 2,
        dates: "2026",
        duration: "2 mois",
        team: "Solo",
        description: "Configuration avancée d'un pare-feu matériel FortiGate 60D et d'un point d'accès FortiAP pour déployer une maquette d'infrastructure réseau d'entreprise hautement sécurisée. Implémentation d'une segmentation Zero-Trust par VLANs (VLAN 10 Admin, VLAN 20 Users, VLAN 30 Servers, VLAN 40 Guest, VLAN 50 Management) avec trunking 802.1Q. Déploiement d'un portail captif d'authentification sur le FortiGate pour les visiteurs (GUEST-WIFI) et filtrage web/applicatif rigoureux. Accès d'administration externe protégé par des connexions VPN SSL avec authentification forte. Ce projet s'inscrit dans une démarche de montée en compétences en vue de la préparation de la certification CCNA.",
        image: "/images/fortiprojet/reseau_forti.png",
        images: [
            "/images/fortiprojet/reseau_forti.png",
            "/images/fortiprojet/address.png"
        ],
        technologies: ["FortiGate 60D", "FortiAP", "VLAN Trunking (802.1Q)", "SSL-VPN Tunneling", "Captive Portal", "Routage & Sécurité", "Politiques de Pare-feu"],
        sources: [
            { label: "Configuration Matérielle (Production)", url: "#" }
        ],
        tags: ["réseau", "cyber"]
    },

    // ---------------------------------------------------------------------
    // 🚀 3. PROJET DEVOPS
    // ---------------------------------------------------------------------
    {
        id: 11,
        title: "Architecture DevSecOps & Self-Hosting",
        slug: "infra-auth-devops",
        category: "perso",
        order: 3,
        dates: "Septembre 2025 - Janvier 2026",
        duration: "3 mois",
        team: "Équipe de 3 personnes",
        description:
            `Conception, déploiement et maintien en condition opérationnelle d'une infrastructure cloud d'entreprise hautement disponible (HA) et résiliente. 
        
        L'infrastructure est divisée en deux environnements logiquement et physiquement isolés (Stack Métier et Stack Observabilité) pour garantir la résilience de la supervision :
        • Orchestration & Stockage : Cluster Docker Swarm multi-nœuds avec réplication active des services. Persistance des données assurée en temps réel par un système de fichiers distribué GlusterFS.
        • Automatisation (IaC) : Provisioning complet des serveurs via Ansible et scripts de déploiement automatisé shell (développement d'un pipeline d'intégration continue).
        • Réseau & Routage : Réseaux Overlay isolés avec chiffrement IPSec natif, Reverse Proxy Traefik dynamique gérant la répartition de charge et les Sticky Sessions du portail Keycloak.
        • Observabilité & Alerting : Supervision applicative et système sous Grafana, centralisation des logs via Loki/Promtail, et développement d'un service "Watchdog" personnalisé en Python pour surveiller la disponibilité HTTP réelle des services et déclencher des alertes SecOps.
        • Services Hébergés : Nextcloud (gestion de fichiers), SFTPGo (transferts chiffrés), entièrement protégés derrière une passerelle SSO Keycloak supportant OIDC.`,
        image: "/images/devops/sae-portail.png",
        images: [
            "/images/devops/sae-portail.png",
            "/images/devops/traefik.png",
            "/images/devops/sftpgo.png",
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
        ],
        technologies: ["Docker Swarm", "GlusterFS", "Ansible", "Traefik", "Keycloak (SSO / OIDC)", "Loki / Promtail", "Grafana", "Python Watchdog"],
        sources: [{ label: "Portail Cloud", url: "https://portail.cerncloud.cloud" }] ,
        tags: ["devops", "cyber", "réseau"]
    },

    // ---------------------------------------------------------------------
    // 💾 4. SERVEUR ECOLE HAUTE DISPONIBILITÉ (Seul projet École de Nolan)
    // ---------------------------------------------------------------------
    {
        id: 22,
        title: "Serveur de stockage résilient avec basculement automatique",
        slug: "ha-storage-server-tailscale",
        category: "iut",
        order: 4,
        dates: "2025",
        duration: "1 mois",
        team: "Solo",
        description: "Déploiement d'un cluster de stockage distant à haute disponibilité (HA) et tolérant aux pannes pour une infrastructure d'établissement scolaire. Configuration d'interconnexions réseaux sécurisées par tunnel maillé VPN Tailscale. Synchronisation continue et bidirectionnelle des données par Syncthing entre un serveur principal et un serveur miroir/secondaire de secours. Développement d'un script de basculement dynamique (.bat) configuré au démarrage du client Windows : test de disponibilité ICMP/HTTP du serveur principal, et basculement automatique et transparent de la lettre de lecteur réseau (Z:) vers le serveur de secours en cas de rupture de lien, sans interruption pour l'utilisateur final.",
        image: "/images/serverStockage/sync.png",
        images: [
            "/images/serverStockage/sync.png",
            "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80"
        ],
        technologies: ["Ubuntu Server", "Tailscale (VPN)", "Syncthing", "Batch Scripting (.bat)", "Routage Réseau", "Partage de fichiers (SMB/NFS)"],
        sources: [
            { label: "Infrastructure Confidentielle", url: "#" }
        ],
        tags: ["réseau", "devops"]
    },

    // ---------------------------------------------------------------------
    // 🎹 5. PROJET PIANOLAN (ASSISTANT LIVE)
    // ---------------------------------------------------------------------
    {
        id: 21,
        title: "Pianolan : Assistant Live & Gestionnaire de Partitions",
        slug: "pianolan-live-assistant",
        category: "perso",
        order: 5,
        dates: "Avril 2026 - En cours",
        duration: "En cours",
        team: "Solo",
        description: "Développement complet d'une Progressive Web App (PWA) 'offline-first' conçue pour assister les musiciens en prestation live. L'application intègre un moteur de rendu de partitions PDF interactif, un gestionnaire de setlists et un outil d'apprentissage basé sur la bibliothèque Tonal.js pour la visualisation des accords au piano. Implémentation d'un backend léger en Python (FastAPI + yt-dlp) pour la recherche et l'extraction de pistes audio d'accompagnement. La PWA assure la persistance locale des données via IndexedDB (offline) synchronisée avec une base de données cloud Supabase lors du retour de connexion.",
        image: "/images/pianolan/dash.png",
        images: [
            "/images/pianolan/dash.png",
            "/images/pianolan/setlist.png",
            "/images/pianolan/piano.png"
        ],
        technologies: ["Vue.js 3", "Tailwind CSS", "Supabase (Auth/Cloud)", "Python (FastAPI)", "yt-dlp", "Tonal.js", "IndexedDB", "Capacitor (APK)"],
        sources: [
            { label: "Code Source (GitHub)", url: "https://github.com/Cern667/pianolanApp" }
        ],
        tags: ["dev"]
    },

    // ---------------------------------------------------------------------
    // 📡 6. PROJET CERNDROP (P2P & GEOLOC)
    // ---------------------------------------------------------------------
    {
        id: 19,
        title: "CernDrop : Partage de fichiers P2P Instantané",
        slug: "cerndrop-p2p-webrtc",
        category: "perso",
        order: 6,
        dates: "Janvier 2025 - En cours",
        duration: "En cours",
        team: "Solo",
        description: "Développement en Node.js d'une application web de partage de fichiers instantané en pair-à-pair (P2P), reposant sur le protocole WebRTC. L'application détecte automatiquement les utilisateurs présents sur le même réseau local via les APIs de géolocalisation ou de découverte réseau (Socket.io). Les transferts de fichiers s'effectuent directement de navigateur à navigateur sans stockage intermédiaire sur un serveur tiers, garantissant la confidentialité des données. L'accès externe est sécurisé via des tunnels Cloudflare pour protéger l'hôte de signalement.",
        image: "/images/cerndrop/cernDrop.png",
        images: [
            "/images/cerndrop/cernDrop.png",
            "/images/cerndrop/cern2.png",
            "https://images.unsplash.com/photo-1614064641938-3bcee529cf91?w=800&q=80"
        ],
        technologies: ["Node.js & Socket.io", "WebRTC (RTCDataChannel)", "Alpine.js", "Tailwind CSS", "Docker", "Tunnels Cloudflare"],
        sources: [
            { label: "Code Source", url: "https://github.com/Cern667/cernDrop" }
        ],
        tags: ["dev", "devops"]
    },

    // ---------------------------------------------------------------------
    // 📁 7. PROJET NAS PYTHON
    // ---------------------------------------------------------------------
    {
        id: 13,
        title: "NAS Python avec LDAP, chiffrement AES et versionning",
        slug: "nas-python-ldap",
        category: "perso",
        order: 7,
        dates: "Janvier 2025 – Mars 2025",
        duration: "2 mois",
        team: "Équipe de 3 personnes",
        description: "Développement d'un système de stockage réseau (NAS) sécurisé en Python. Le projet inclut un protocole de communication socket personnalisé, une authentification centralisée via un serveur d'annuaire OpenLDAP, le chiffrement de bout en bout des fichiers stockés à l'aide de l'algorithme symétrique AES-256, ainsi qu'une interface web d'administration développée avec Flask.",
        image: "/images/nas/home.png",
        images: [
            "/images/nas/home.png",
            "/images/nas/dashboard.png",
            "/images/nas/file.png",
            "/images/nas/log.png",
            "/images/nas/multi_devices.png"
        ],
        technologies: ["Python", "Flask", "OpenLDAP", "AES-256 Encryption", "Sockets TCP", "SQLite (logs)"],
        sources: [{ label: "Code Source NAS", url: "https://github.com/Cern667/cernDriveSecure" }],
        tags: ["dev", "cyber"]
    },

    // ---------------------------------------------------------------------
    // 🧠 8. PROJET RAFT
    // ---------------------------------------------------------------------
    {
        id: 18,
        title: "Système Distribué : Consensus Raft en C",
        slug: "raft-consensus-c",
        category: "perso",
        order: 8,
        dates: "Janvier 2025 - Février 2025",
        duration: "2 mois",
        team: "Équipe de 2 personnes",
        description: "Développement en C d'un système distribué tolérant aux pannes implémentant l'algorithme de consensus Raft. Gestion de la communication réseau bas-niveau via des sockets TCP non bloquantes, synchronisation des threads (Mutex et variables de condition), et implémentation des rôles du protocole (Leader, Follower, Candidate), des mécanismes d'élection par timeout aléatoire et de la réplication des logs d'état.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        technologies: ["C", "TCP Sockets (Non-blocking)", "POSIX Threads", "Mutex & Condition Variables", "Raft Protocol State Machine"],
        sources: [{ label: "Rapport de projet", url: "/documents/raft/Rapport_Projet_Raft.pdf" }],
        tags: ["dev", "réseau"]
    },

    // ---------------------------------------------------------------------
    // 🖥️ 9. ACTIVE DIRECTORY & INFRASTRUCTURE HYBRIDE
    // ---------------------------------------------------------------------
    {
        id: 14,
        title: "Déploiement Active Directory & gestion automatisée de 15 postes",
        slug: "active-directory-ecole",
        category: "perso",
        order: 9,
        dates: "2024 – 2025",
        duration: "En cours",
        team: "Solo (Projet d'étude)",
        description: "Conception, maquettage et déploiement complet d'une infrastructure Active Directory sous Windows Server pour la centralisation et la sécurisation de 15 postes clients d'une école. Configuration des rôles clés (AD DS, DNS, DHCP, WSUS), définition de stratégies de groupe (GPO) restrictives pour le durcissement du système (blocage de l'exécution de scripts non signés, restriction d'accès aux paramètres système, filtrage de ports). Pour les postes obsolètes incompatibles avec Windows Server, déploiement d'une flotte Linux Mint gérée et automatisée via des playbooks Ansible.",
        image: "https://images.unsplash.com/photo-1560732488-6b0df240254a?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1560732488-6b0df240254a?w=800&q=80",
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
        ],
        technologies: ["Windows Server", "Active Directory DS", "GPO Hardening", "WSUS Update Server", "Linux Mint", "Ansible Automation", "Hyper-V / Virtualisation", "PowerShell Scripting"],
        sources: [
            { label: "Projet Confidentiel (Pas de lien public)", url: "#" }
        ],
        tags: ["réseau", "cyber"]
    },

    // ---------------------------------------------------------------------
    // 🛠️ 10. ANSIBLE & TERRAFORM
    // ---------------------------------------------------------------------
    {
        id: 20,
        title: "Automatisation d'Infrastructure & Cloud Hybride",
        slug: "ansible-terraform-deployment",
        category: "perso",
        order: 10,
        dates: "2025",
        duration: "3 mois",
        team: "Solo (Projet d'étude)",
        description: "Automatisation complète du cycle de vie d'une infrastructure cloud hybride (IaC). Provisioning des ressources de virtualisation (machines virtuelles, réseaux isolés, disques) à l'aide de Terraform, puis déploiement et configuration des services applicatifs (Docker, reverse proxies, bases de données) via des playbooks Ansible. Cette approche permet de déployer un environnement DevSecOps complet de manière reproductible, portable et idempotente.",
        image: "/images/ansible/ansible.png",
        images: [
            "/images/ansible/ansible.png",
            "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80"
        ],
        technologies: ["Ansible", "Terraform", "VirtualBox API", "Bash Scripts", "YAML", "Git version control"],
        tags: ["devops"]
    },

    // ---------------------------------------------------------------------
    // 🎣 11. SIMULATION DE PHISHING
    // ---------------------------------------------------------------------
    {
        id: 17,
        title: "Analyse d'une chaîne d'attaque de phishing (Spear Phishing CV)",
        slug: "phishing-attack-chain-analysis",
        category: "perso",
        order: 11,
        dates: "Été 2025",
        duration: "1 semaine",
        team: "Solo",
        description: "Analyse détaillée des techniques de contournement et de la chaîne d'outils utilisée par les attaquants lors de campagnes de spear phishing. Réalisation d'une simulation contrôlée en laboratoire fermé à l'aide du Social-Engineer Toolkit (SET) et d'outils de clonage de portails d'authentification (HTTrack). Analyse de l'injection d'un CV PDF piégé redirigeant vers un point d'exposition masqué (tunnel Ngrok) pour récolter des identifiants (Credential Harvesting). Étude et mise en place des mécanismes de défense adéquats (authentification MFA forcée, analyse d'en-têtes de mails, détection de domaines typosquattés).",
        image: "/images/phising/facading.png",
        images: [
            "/images/phising/facading.png",
            "/images/phising/portal_clone_simulation.png",
            "/images/phising/ngrok.png",
            "/images/phising/settool.png"
        ],
        technologies: ["Social-Engineer Toolkit (SET)", "Ngrok (HTTPS tunnels)", "HTTrack Web Cloner", "Kali Linux", "Credential Harvesting", "SecOps mitigation"],
        tags: ["cyber"]
    },

    // ---------------------------------------------------------------------
    // 🗳️ 12. REFERENDUM Cryptographique
    // ---------------------------------------------------------------------
    {
        id: 1,
        title: "Référendum Java Spring Boot",
        slug: "referendum-java-spring",
        category: "perso",
        order: 12,
        dates: "Septembre 2025",
        duration: "5 mois",
        team: "Équipe de 5 personnes",
        description: "Conception et développement d'une plateforme de vote électronique hautement sécurisée et décentralisée, basée sur des principes de cryptographie avancés. L'application intègre trois interfaces indépendantes : un portail utilisateur permettant de soumettre anonymement son bulletin, une interface de scrutateur pour la surveillance en temps réel de l'intégrité du scrutin, et un tableau de bord administrateur pour configurer les votes. L'architecture est entièrement conteneurisée à l'aide de Docker, facilitant le déploiement du serveur Spring Boot et de la base de données relationnelle PostgreSQL.",
        image: "/images/referendum/sae.png",
        images: [
            "/images/referendum/sae.png",
            "/images/referendum/CGU.png",
            "/images/referendum/mdp.png",
            "/images/referendum/ndc.png",
            "/images/referendum/xss.png",
            "/images/referendum/issue.png",
            "/images/referendum/traceFigma.png"
        ],
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Docker Compose", "Cryptographie (Anonymat)", "Architecture Multi-tier", "Figma Mockups"],
        sources: [
            { label: "Dépôt GitLab", url: "https://gitlab.pikudev.cloud/sae-referundum/" }
        ],
        tags: ["dev", "cyber"]
    },

    // ---------------------------------------------------------------------
    // 📅 13. AUTOMATISATION NOTION / AGENDA
    // ---------------------------------------------------------------------
    {
        id: 10,
        title: "Automatisation Radio Aviva",
        slug: "radio-aviva",
        category: "perso",
        order: 13,
        dates: "Septembre 2025",
        duration: "10 semaines",
        team: "Solo",
        description: "Développement d'un outil d'automatisation en Python pour l'intégration des flux de travail de la Radio Aviva. Le programme utilise les APIs de Notion et Google Calendar pour synchroniser automatiquement le planning des émissions de radio, la gestion des invités et les créneaux de diffusion, éliminant ainsi les saisies manuelles et réduisant les risques d'erreurs d'agenda de 90%.",
        image: "/images/radioaviva/notion.jpeg",
        technologies: ["Python", "Notion API", "Google Calendar API", "JSON Data integration"],
        tags: ["dev"]
    },

    // ---------------------------------------------------------------------
    // 🎵 14. Outil de transfert de playlists Deezer vers Spotify
    // ---------------------------------------------------------------------
    {
        id: 15,
        title: "Outil de transfert de playlists Deezer vers Spotify",
        slug: "deezer-spotify-transfer",
        category: "perso",
        order: 14,
        dates: "Novembre 2025",
        duration: "2 jours",
        team: "Solo",
        description: "Développement d'un script d'automatisation en Python exploitant les APIs REST de Deezer et Spotify. Le script analyse les playlists de l'utilisateur sur Deezer, extrait les métadonnées des morceaux (titre, artiste, album) et utilise un algorithme de recherche floue (fuzzy matching) pour retrouver et recréer les playlists équivalentes sur Spotify via des requêtes d'écriture sécurisées OAuth2.",
        image: "/images/deezer/deezer.jpg",
        images: ["/images/deezer/deezer.jpg", "/images/deezer/spotify.jpg"],
        technologies: ["Python", "API REST", "Deezer API", "Spotify API", "OAuth2 authorization", "FuzzyWuzzy (string matching)"],
        tags: ["dev"]
    },

    // ---------------------------------------------------------------------
    // 🎹 15. Keylogger C X11 Security
    // ---------------------------------------------------------------------
    {
        id: 16,
        title: "Keylogger / Analyseur de frappes X11",
        slug: "keylogger-c-x11-security",
        category: "perso",
        order: 15,
        dates: "Octobre 2025",
        duration: "2 mois",
        team: "Solo",
        description: "Développement en C d'un outil de capture d'événements clavier (keylogger) ciblant le serveur d'affichage X11 sur Linux. Utilisation de la bibliothèque Xlib pour intercepter les signaux d'entrée clavier au niveau utilisateur. Ce projet à but éducatif a permis de mettre en évidence les faiblesses d'architecture de sécurité du protocole X11 face aux attaques par enregistrement de frappes et d'étudier les contre-mesures associées (migration Wayland, sandboxing de processus graphiques).",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
        technologies: ["C", "X11 (Xlib)", "Linux OS internals", "Keyboard Hooking", "Security analysis"],
        tags: ["cyber", "dev"]
    },

    // ---------------------------------------------------------------------
    // 🐛 16. Bug Bounty HackerOne
    // ---------------------------------------------------------------------
    {
        id: 3,
        title: "Bug Bounty HackerOne",
        slug: "bug-bounty-hackerone",
        category: "perso",
        order: 16,
        dates: "Continu",
        duration: "Continu",
        team: "Solo",
        description: "Recherche et analyse active de failles de sécurité applicatives sur les programmes de Bug Bounty de la plateforme HackerOne. Utilisation d'outils de test d'intrusion professionnels (Burp Suite, OWASP ZAP, Nmap, Subfinder) pour identifier des vulnérabilités web courantes (OWASP Top 10) telles que les injections SQL, XSS, CSRF, et contournements d'authentification. Rédaction de rapports de vulnérabilité conformes aux standards de divulgation responsable.",
        image: "/images/bugbounty/hackerone.png",
        images: [
            "/images/bugbounty/hackerone.png",
            "/images/bugbounty/subfinder.png"
        ],
        technologies: ["Burp Suite Pro", "Subfinder", "Wireshark", "Python", "OWASP Top 10", "Reconnaissance passive & active"],
        tags: ["cyber"]
    },

    // ---------------------------------------------------------------------
    // 🕸️ 17. Web Scraping Automation
    // ---------------------------------------------------------------------
    {
        id: 4,
        title: "Web Scraping Automation",
        slug: "web-scraping",
        category: "perso",
        order: 17,
        dates: "Novembre 2025",
        duration: "3 semaines",
        team: "Équipe de 2",
        description: "Conception et mise en production de scripts d'extraction de données web automatisés et résilients. Utilisation de Playwright et Selenium en Python pour le contournement des protections anti-bot (Cloudflare, CAPTCHAs, signatures TLS, empreintes de navigateur). Structuration des flux de données extraits sous forme d'APIs REST et de bases de données relationnelles PostgreSQL pour l'analyse décisionnelle.",
        image: "/images/webscraping/webS.png",
        technologies: ["Python", "Playwright", "Selenium", "BeautifulSoup", "Anti-scraping bypass", "PostgreSQL"],
        tags: ["dev"]
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