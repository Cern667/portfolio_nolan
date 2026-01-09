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
    // ---------------------------------------------------------------------
    // 🚀 PROJET DEVOPS
    // ---------------------------------------------------------------------
    {
        id: 11,
        title: "Infrastructure d'authentification centralisée (LDAP, Keycloak, SFTPGo, GitLab)",
        slug: "infra-auth-devops",
        category: "iut",
        dates: "Septembre 2024 - Janvier 2025",
        duration: "3 mois",
        team: "Équipe de 3 personnes",
        description:
            "Infrastructure complète d'authentification centralisée (OpenLDAP, Keycloak, Traefik, SFTPGo, GitLab). Déploiement via Docker Compose, sécurisation TLS, mise en place du SSO, et automatisation du déploiement.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", // Server racks - infrastructure
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80", // Data center dark
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80", // Network connections
            "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80"  // Docker containers concept
        ],
        technologies: [
            "Docker",
            "OpenLDAP",
            "Keycloak",
            "Traefik",
            "SFTPGo",
            "GitLab",
            "TLS",
            "Bash"
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
                details: "Mécanismes de résilience et redémarrage automatique."
            },
            {
                code: "R5.03",
                name: "Communication",
                level: "acquis",
                details: "Documentation technique et présentation du projet."
            }
        ]
    },


    // ---------------------------------------------------------------------
    // 🎵 PROJET DE TRANSFERT DEEZER -> SPOTIFY
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
            "Développement d'un script Python pour automatiser le transfert de playlists et de titres favoris depuis Deezer vers un compte Spotify. L'outil utilise les API officielles des deux services pour récupérer les informations des morceaux (titre, artiste, ISRC), rechercher les correspondances sur Spotify et les ajouter à une nouvelle playlist, en gérant les doublons et les morceaux non trouvés.",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80", // Musique / Concert
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80", // Code sur un écran
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80", // Intégration API (concept)
            "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80"  // Logos des services de streaming
        ],
        technologies: [
            "Python",
            "Deezer API",
            "Spotify API",
            "Requests",
            "REST APIs"
        ],
        competences: [
            {
                code: "R5.B.05",
                name: "Automatisation",
                level: "acquis",
                details: "Automatisation de la migration de données musicales entre deux plateformes via leurs API REST."
            },
            {
                code: "R5.A.04",
                name: "Exploitation de données",
                level: "acquis",
                details: "Collecte, traitement et synchronisation de données structurées pour assurer la correspondance des morceaux."
            },
            {
                code: "R5.A.01",
                name: "Conception d'algorithmes",
                level: "acquis",
                details: "Mise en place d'une logique de recherche et de correspondance pour identifier les titres sur Spotify."
            }
        ]
    },

    // ---------------------------------------------------------------------
    // 📁 PROJET NAS PYTHON – LDAP • AES • VERSIONNING
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
            "Développement d'un NAS en Python avec authentification LDAP, chiffrement AES, versionning automatique, restauration, suppression admin, et interface web Flask reliée à un serveur de stockage TCP.",
        image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80", // Hard drives storage
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80", // Server room dark
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80", // Python code
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"  // Encryption/security
        ],
        technologies: [
            "Python",
            "Flask",
            "LDAP",
            "AES Encryption",
            "Sockets TCP",
            "Versionning"
        ],
        competences: [
            {
                code: "R5.B.04",
                name: "Programmation système",
                level: "acquis",
                details: "Sockets TCP, manipulation système, structure serveur."
            },
            {
                code: "R5.B.05",
                name: "Automatisation",
                level: "acquis",
                details: "Automatisation des échanges, versionning, restauration."
            },
            {
                code: "R5.B.08",
                name: "Continuité de service",
                level: "acquis",
                details: "Protection des données via versionning et restauration."
            },
            {
                code: "R5.B.09",
                name: "Cybersécurité",
                level: "acquis",
                details: "Chiffrement AES, authentification LDAP, isolation utilisateur."
            }
        ]
    },

    // ---------------------------------------------------------------------
    // 🖥️ PROJET PERSONNEL : ACTIVE DIRECTORY POUR UNE ÉCOLE
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
            "WSUS / déploiement auto",
            "Linux Mint",
            "Automatisation Ansible",
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
                code: "R5.B.07",
                name: "Virtualisation avancée",
                level: "acquis",
                details: "Déploiement du contrôleur de domaine dans une VM, configuration réseau et snapshots."
            },
            {
                code: "R5.B.09",
                name: "Cybersécurité",
                level: "acquis",
                details: "Mise en place de GPO de restrictions, filtrage, gestion des droits utilisateurs."
            },
            {
                code: "R5.01",
                name: "Initiation au management",
                level: "en cours",
                details: "Gestion opérationnelle des besoins de l’établissement, planification du déploiement."
            }
        ]
    },

    // ---------------------------------------------------------------------
    // 🔑 PROJET KEYLOGGER C / X11
    // ---------------------------------------------------------------------
    {
        id: 16,
        title: "Keylogger ou Analyseur de frappes clavier en C via X11",
        slug: "keylogger-c-x11-security",
        category: "perso",
        dates: "Octobre - Novembre 2025",
        duration: "2 mois",
        team: "Solo",
        description:
            "Développement d'un proof-of-concept (PoC) en C interagissant directement avec le serveur graphique X11 de Linux pour capturer les événements clavier au niveau du système. L'objectif était purement éducatif : comprendre les hooks bas-niveau utilisés par les systèmes d'exploitation pour la gestion des entrées, et analyser comment des logiciels malveillants pourraient abuser de ces mécanismes pour intercepter des données sensibles. Le projet a permis d'explorer les fondations de la sécurité des environnements graphiques et de réfléchir aux contre-mesures.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80", // Code C sur un terminal
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", // Thème cybersécurité / hacking éthique
            "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=800&q=80", // Clavier et code en arrière-plan
            "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80"  // Environnement de développement complexe
        ],
        technologies: [
            "C",
            "X11 (Xlib)",
            "Linux",
            "Makefile / GCC",
            "Programmation système"
        ],
        competences: [
            {
                code: "R5.B.09",
                name: "Cybersécurité",
                level: "acquis",
                details: "Analyse d'un vecteur d'attaque (keylogging) et compréhension des mécanismes de capture d'input pour mieux s'en défendre."
            },
            {
                code: "R5.B.04",
                name: "Programmation système",
                level: "acquis",
                details: "Interaction directe avec l'API du serveur graphique X11 pour l'interception d'événements système bas-niveau."
            },
            {
                code: "R5.A.01",
                name: "Conception d'algorithmes",
                level: "en cours",
                details: "Algorithme de capture et de traitement en temps réel des codes de touche (keycodes) et de leur conversion en caractères lisibles."
            }
        ]
    },



    // ---------------------------------------------------------------------
    // 🎣 PROJET DE SIMULATION DE PHISHING (RED TEAM)
    // ---------------------------------------------------------------------
    {
        id: 17,
        title: "Analyse d'une chaîne d'attaque de phishing (Credential Harvesting)",
        slug: "phishing-attack-chain-analysis",
        category: "perso",
        dates: "Été 2024",
        duration: "1 semaine",
        team: "Solo",
        description:
            "Déconstruction et simulation d'une campagne de phishing avancée dans un environnement de laboratoire contrôlé. Le projet visait à analyser la chaîne d'outils moderne utilisée par les attaquants : clonage de sites web (HTTrack), déploiement de pages frauduleuses (Social-Engineer Toolkit), exposition du serveur local sur internet (Ngrok) et masquage de l'URL avec un domaine d'apparence légitime. L'objectif était purement éducatif : comprendre les vecteurs d'attaque pour renforcer les mesures de détection (analyse d'URL, formation des utilisateurs) et les stratégies de défense.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80", // Personne travaillant sur un ordinateur (ingénierie sociale)
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80", // Concept de réseau et de connexion
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80", // Thème de la sécurité et du cadenas
            "https://images.unsplash.com/photo-1599658880122-6b9a8fb61e6b?w=800&q=80"  // Écran avec des lignes de code et des graphiques
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
                details: "Analyse et mise en pratique contrôlée de techniques d'ingénierie sociale et de credential harvesting."
            },
            {
                code: "R5.B.02",
                name: "Évaluation de la sécurité",
                level: "acquis",
                details: "Compréhension de la méthodologie d'un test d'intrusion (phase de reconnaissance et d'exploitation)."
            },
            {
                code: "R5.A.07",
                name: "Réseaux et protocoles",
                level: "en cours",
                details: "Utilisation de tunnels (Ngrok) pour exposer des services locaux et manipulation de requêtes HTTP."
            }
        ]
    },



    // -----------------------------------------------------
    // TES PROJETS DÉJÀ EXISTANTS
    // -----------------------------------------------------
    {
        id: 1,
        title: "Référendum Java Spring Boot",
        slug: "referendum-java-spring",
        category: "iut",
        dates: "Septembre 2024 - Janvier 2025",
        duration: "5 mois",
        team: "Équipe de 5 personnes",
        description:
            "Développement d'une plateforme de vote électronique sécurisée en Spring Boot.",
        image: "/images/sae.png",
        images: [
            "/img/vote.png",
            "/img/vote2.png",
            "/img/vote3.png",
        ],
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "GitLab CI/CD"]
    },
    {
        id: 2,
        title: "E-commerce PHP",
        slug: "ecommerce-php",
        category: "iut",
        dates: "Octobre 2024",
        duration: "1 mois",
        team: "Équipe de 3 personnes",
        description:
            "Site e-commerce avec panier, gestion des commandes et espace admin.",
        image: "/images/sitePHP.png",
        technologies: ["PHP", "MySQL", "JavaScript", "CSS", "MVC"]
    },
    {
        id: 3,
        title: "Bug Bounty HackerOne",
        slug: "bug-bounty-hackerone",
        category: "perso",
        dates: "En cours",
        duration: "Continu",
        team: "Solo",
        description:
            "Pentest et recherche de vulnérabilités sur programmes publics HackerOne.",
        image: "/images/hackerone.png",
        technologies: ["Burp Suite", "Subfinder", "Wireshark", "Python"]
    },
    {
        id: 4,
        title: "Web Scraping Automation",
        slug: "web-scraping",
        category: "perso",
        dates: "Novembre 2024",
        duration: "3 semaines",
        team: "Équipe de 2 personnes",
        description:
            "Automatisation de création de comptes et scraping massif Playwright.",
        image: "/images/webS.png",
        technologies: ["Python", "Selenium", "Playwright", "BeautifulSoup"]
    },

    {
        id: 10,
        title: "Automatisation Radio Aviva",
        slug: "radio-aviva",
        category: "iut",
        dates: "Septembre - Novembre 2024",
        duration: "10 semaines",
        team: "Solo + collaborateurs",
        description:
            "Automatisation Notion → Google Agenda pour une radio associative.",
        image: "/images/notion.jpeg",
        technologies: ["Python", "Notion API", "Google Calendar API"]
    }
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
