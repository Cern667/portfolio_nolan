# 🚀 Guide de démarrage rapide

## ⚡ Démarrage en 3 étapes

### 1️⃣ Installation (première fois uniquement)
```bash
cd refonte-next
npm install
```

### 2️⃣ Lancer le projet
```bash
npm run dev
```

### 3️⃣ Ouvrir dans le navigateur
```
http://localhost:3000
```

## ✅ Les images sont déjà copiées !

Toutes vos images ont été automatiquement copiées depuis `ressources/img/` :
- ✅ 18 images dans `public/images/`
- ✅ CV dans `public/cv.pdf`

## 📝 Prochaines étapes

### 🔗 Mettre à jour vos liens sociaux

Dans ces fichiers, remplacez les liens par les vôtres :
- `app/page.tsx` (page d'accueil)
- `app/contact/page.tsx` (page contact)
- `components/Footer.tsx` (pied de page)

Cherchez et remplacez :
- `https://linkedin.com` → Votre LinkedIn
- `https://github.com` → Votre GitHub
- `https://twitter.com` → Votre Twitter
- `nolan@example.com` → Votre email

### ➕ Ajouter des projets

Éditez `data/projects.ts` et ajoutez vos nouveaux projets :

```typescript
{
  id: 7,
  title: "Mon nouveau projet",
  slug: "mon-nouveau-projet",
  category: "perso",
  dates: "Mois 2025",
  duration: "X mois",
  team: "Solo",
  description: "Description...",
  image: "/images/mon-image.png",
  technologies: ["Tech1", "Tech2"],
}
```

## 🎨 Personnaliser les couleurs

Dans `tailwind.config.ts`, modifiez les couleurs :

```typescript
colors: {
  primary: {
    blue: "#1E90FF",  // Votre couleur primaire
    // ...
  },
}
```

## 📱 Pages disponibles

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/` | Présentation + photo + CTA |
| À propos | `/about` | Biographie + compétences |
| Projets | `/projects` | Galerie avec filtres |
| Détail projet | `/projects/[slug]` | Page détaillée d'un projet |
| Contact | `/contact` | Formulaire + réseaux sociaux |

## 🛠️ Commandes utiles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm run start

# Vérifier le code
npm run lint
```

## 🌐 Déployer sur Vercel

1. Push sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Importez votre repo
4. Déployez !

## 📚 Documentation complète

Pour plus de détails, consultez :
- `README.md` - Documentation complète
- `INSTRUCTIONS.md` - Guide détaillé de mise en route

## 💡 Astuces

### Ajouter une nouvelle page

1. Créez `app/ma-page/page.tsx`
2. Ajoutez le lien dans `components/Header.tsx`

### Modifier le contenu

- **Page d'accueil** : `app/page.tsx`
- **À propos** : `app/about/page.tsx`
- **Projets** : `data/projects.ts`
- **Contact** : `app/contact/page.tsx`

### Changer les icônes

Utilisez [Lucide Icons](https://lucide.dev/) :
```typescript
import { MonIcone } from "lucide-react";
<MonIcone className="w-5 h-5" />
```

## 🎯 Checklist de mise en route

- [ ] `npm install` effectué
- [ ] `npm run dev` lancé
- [ ] Site accessible sur localhost:3000
- [ ] Toutes les images s'affichent
- [ ] Liens sociaux mis à jour
- [ ] Email personnel ajouté
- [ ] Projets personnalisés
- [ ] Couleurs ajustées (optionnel)
- [ ] Contenu de la page À propos personnalisé

## ❓ Besoin d'aide ?

Consultez la documentation :
- [Next.js](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

**Prêt à briller ! ✨**
