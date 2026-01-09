# 📋 Instructions de mise en route

Bienvenue dans votre nouveau portfolio moderne ! Voici les étapes pour finaliser l'installation.

## 🖼️ 1. Copier vos images

Vos images doivent être copiées depuis votre ancien projet vers le nouveau.

### Option A : Copie automatique (recommandée)

Depuis le dossier racine de `portfolio_nolan`, exécutez :

```bash
# Créer les dossiers nécessaires
mkdir -p refonte-next/public/images
mkdir -p refonte-next/public/cv

# Copier toutes les images
cp ressources/img/*.png refonte-next/public/images/
cp ressources/img/*.jpg refonte-next/public/images/
cp ressources/img/*.jpeg refonte-next/public/images/

# Copier le CV
cp ressources/img/cv.pdf refonte-next/public/cv.pdf
```

### Option B : Copie manuelle

1. Allez dans `ressources/img/`
2. Copiez tous les fichiers images vers `refonte-next/public/images/`
3. Copiez `cv.pdf` vers `refonte-next/public/cv.pdf`

### Liste des images à copier :

- ✅ `hacker.jpg` - Photo de profil
- ✅ `sae.png` - Projet Référendum
- ✅ `sitePHP.png` - E-commerce PHP
- ✅ `hackerone.png` - Bug Bounty
- ✅ `webS.png` - Web Scraping
- ✅ `sete.png` - Jeu E3cete
- ✅ `notion.jpeg` - Radio Aviva
- ✅ `cv.pdf` - Votre CV

## 🎨 2. Personnaliser le contenu

### Mettre à jour les liens des réseaux sociaux

Ouvrez et modifiez ces fichiers :

**`app/page.tsx`** (Page d'accueil)
```typescript
// Ligne ~55-58
<SocialLink href="https://linkedin.com/in/VOTRE-PROFIL" icon={<Linkedin />} />
<SocialLink href="https://github.com/VOTRE-USERNAME" icon={<Github />} />
<SocialLink href="https://twitter.com/VOTRE-USERNAME" icon={<Twitter />} />
<SocialLink href="mailto:VOTRE-EMAIL@example.com" icon={<Mail />} />
```

**`components/Footer.tsx`**
```typescript
// Ligne ~8-11
const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/VOTRE-PROFIL" },
  { name: "GitHub", icon: Github, href: "https://github.com/VOTRE-USERNAME" },
  // ...
];
```

**`app/contact/page.tsx`**
```typescript
// Ligne ~159-166
<SocialButton
  icon={<Linkedin />}
  label="LinkedIn"
  href="https://linkedin.com/in/VOTRE-PROFIL"
  color="bg-[#0077b5]"
/>
// Répétez pour GitHub, Instagram, Email...
```

### Mettre à jour votre email

Remplacez `nolan@example.com` par votre véritable email dans :
- `app/page.tsx`
- `app/contact/page.tsx`
- `components/Footer.tsx`

## 📦 3. Ajouter/Modifier des projets

Éditez `data/projects.ts` pour ajouter ou modifier vos projets.

### Ajouter un nouveau projet :

```typescript
{
  id: 7,  // Incrémentez l'ID
  title: "Mon nouveau projet",
  slug: "mon-nouveau-projet",  // Sans espaces, en minuscules
  category: "perso",  // ou "iut"
  dates: "Janvier 2025 - Mars 2025",
  duration: "2 mois",
  team: "Solo",
  description: "Description complète de votre projet...",
  image: "/images/mon-projet.png",  // Ajoutez l'image dans public/images/
  technologies: ["React", "Node.js", "MongoDB"],
}
```

### Modifier un projet existant :

Trouvez le projet par son `id` et modifiez les champs souhaités.

## 🚀 4. Lancer le projet

```bash
# Installer les dépendances (si pas encore fait)
cd refonte-next
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎯 5. Tester toutes les pages

- ✅ [http://localhost:3000](http://localhost:3000) - Page d'accueil
- ✅ [http://localhost:3000/about](http://localhost:3000/about) - À propos
- ✅ [http://localhost:3000/projects](http://localhost:3000/projects) - Projets
- ✅ [http://localhost:3000/contact](http://localhost:3000/contact) - Contact
- ✅ Cliquez sur un projet pour voir la page détail

## ⚙️ 6. Personnalisation avancée

### Modifier les couleurs

Éditez `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    blue: "#VOTRE-COULEUR",
    // ...
  },
}
```

### Modifier les polices

Éditez `app/layout.tsx` :

```typescript
import { VotrePolice } from "next/font/google";

const votrePolice = VotrePolice({
  subsets: ["latin"],
  variable: "--font-votre-police"
});
```

### Modifier le contenu de la page À propos

Éditez `app/about/page.tsx` pour personnaliser votre biographie et vos compétences.

## 📱 7. Responsive

Le site est entièrement responsive ! Testez sur :
- 📱 Mobile (375px)
- 📱 Tablet (768px)
- 💻 Desktop (1280px+)

## 🐛 Résolution de problèmes

### Les images ne s'affichent pas
- Vérifiez que les images sont bien dans `public/images/`
- Vérifiez les chemins dans `data/projects.ts`
- Les chemins doivent commencer par `/images/` (avec le slash)

### Erreur au démarrage
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules
npm install
npm run dev
```

### Port 3000 déjà utilisé
```bash
# Utiliser un autre port
npm run dev -- -p 3001
```

## 📦 Déploiement

### Déployer sur Vercel (gratuit et recommandé)

1. Push votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Importez votre repository
4. Déployez ! ✨

### Build de production local

```bash
npm run build
npm run start
```

## ✨ Fonctionnalités principales

- ✅ Navigation fluide avec animations
- ✅ Menu mobile responsive
- ✅ Filtrage des projets (Perso/IUT)
- ✅ Pages dynamiques pour chaque projet
- ✅ Formulaire de contact
- ✅ Barres de compétences animées
- ✅ Design moderne et épuré
- ✅ Performance optimale (Next.js 14)
- ✅ SEO optimisé
- ✅ Images optimisées automatiquement

## 📚 Ressources utiles

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 🎉 C'est prêt !

Votre portfolio moderne est opérationnel ! N'hésitez pas à personnaliser davantage selon vos besoins.

**Bon développement ! 🚀**
