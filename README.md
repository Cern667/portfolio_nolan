# Portfolio Nolan Pujol - Refonte Moderne

Refonte moderne du portfolio de Nolan Pujol avec Next.js 14, TypeScript, TailwindCSS et Framer Motion.

## Technologies utilisées

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **TailwindCSS** pour le styling
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes
- **ShadCN UI** pour les composants (système de design)

## Structure du projet

```
refonte-next/
├── app/                      # Pages Next.js (App Router)
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Page d'accueil
│   ├── about/               # Page À propos
│   ├── projects/            # Pages des projets
│   │   ├── page.tsx         # Liste des projets
│   │   └── [slug]/          # Détail d'un projet (route dynamique)
│   ├── contact/             # Page de contact
│   └── globals.css          # Styles globaux
├── components/              # Composants réutilisables
│   ├── Header.tsx           # Navigation principale
│   ├── Footer.tsx           # Pied de page
│   └── ui/                  # Composants UI (ShadCN)
│       └── button.tsx       # Composant bouton
├── data/                    # Données du site
│   └── projects.ts          # Données des projets
├── lib/                     # Utilitaires
│   └── utils.ts             # Fonctions utilitaires
├── public/                  # Assets statiques
│   ├── images/              # Images du portfolio
│   └── cv/                  # CV PDF
└── package.json
```

## Installation

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Copier vos images** :
   - Copiez toutes vos images depuis `ressources/img/` vers `public/images/`
   - Copiez votre CV depuis `ressources/img/cv.pdf` vers `public/cv.pdf`

3. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur** :
   - Allez sur [http://localhost:3000](http://localhost:3000)

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## Personnalisation

### Ajouter un nouveau projet

Éditez le fichier `data/projects.ts` et ajoutez un nouvel objet dans le tableau `projects` :

```typescript
{
  id: 7,  // ID unique
  title: "Nom du projet",
  slug: "nom-du-projet",  // URL slug (sans espaces)
  category: "perso",  // ou "iut"
  dates: "Mois Année - Mois Année",
  duration: "X mois",
  team: "Équipe de X personnes",
  description: "Description complète du projet...",
  image: "/images/nom-image.png",  // Chemin de l'image
  technologies: ["Tech1", "Tech2", "Tech3"],  // Liste des technologies
}
```

### Modifier les couleurs

Les couleurs sont définies dans `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    black: "#000000",
    white: "#ffffff",
    blue: "#1E90FF",
    blueRoyal: "#4169E1",
    burgundy: "#4e1116",
    green: "#47cf73",
    // ...
  },
}
```

### Ajouter une nouvelle page

1. Créez un nouveau dossier dans `app/`
2. Ajoutez un fichier `page.tsx` dans ce dossier
3. Ajoutez le lien dans `components/Header.tsx`

Exemple :
```
app/
└── blog/
    └── page.tsx
```

## Déploiement

### Vercel (recommandé)

1. Push votre code sur GitHub
2. Connectez votre repo sur [vercel.com](https://vercel.com)
3. Déployez automatiquement

### Build manuel

```bash
npm run build
npm run start
```

## Palette de couleurs

- **Noir** : `#000000` - Fond principal
- **Blanc** : `#ffffff` - Texte principal
- **Bleu** : `#1E90FF` - Couleur primaire
- **Bleu Royal** : `#4169E1` - Hover états
- **Bordeaux** : `#4e1116` - Accents
- **Vert** : `#47cf73` - Succès/Validation
- **Gris** : `#333333` - Éléments secondaires

## Fonctionnalités

### Pages
✅ Page d'accueil avec présentation
✅ Page À propos avec compétences animées
✅ Page Projets avec filtres (Perso/IUT/Tous)
✅ Page détail de projet (route dynamique)
✅ Page Contact avec formulaire

### Animations
✅ Animations d'entrée Framer Motion
✅ Hover effects sur les cartes
✅ Transitions fluides entre pages
✅ Barres de progression animées
✅ Menu mobile avec animation

### Responsive
✅ Design adaptatif mobile/tablet/desktop
✅ Navigation mobile avec menu hamburger
✅ Grilles responsives
✅ Images optimisées Next.js

## Support

Pour toute question ou problème, n'hésitez pas à consulter :
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation TailwindCSS](https://tailwindcss.com/docs)
- [Documentation Framer Motion](https://www.framer.com/motion/)

## Licence

Projet personnel - Tous droits réservés © 2024 Nolan Pujol
