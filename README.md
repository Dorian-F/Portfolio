# 🚀 Portfolio - Dorian François

Portfolio professionnel moderne construit avec **React + Vite**, mettant en valeur mes compétences en tant que **Data Project Manager**.

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0.0-FF0055?logo=framer)

## ✨ Fonctionnalités

- **Design Premium** : Esthétique glassmorphisme avec fond dégradé dynamique
- **Animations Fluides** : Framer Motion pour des transitions élégantes
- **Effet Typewriter** : Animation de frappe sur le titre principal
- **Icônes Flottantes** : Micro-animations sur les cartes de compétences
- **Radar de Compétences** : Visualisation Chart.js des domaines d'expertise
- **Timeline Animée** : Parcours professionnel avec points lumineux pulsants
- **100% Responsive** : Mobile-first design avec breakpoints à 1024px, 768px, 480px
- **Menu Mobile** : Navigation hamburger fonctionnelle

## 🛠️ Technologies

| Catégorie | Technologies |
|-----------|--------------|
| **Framework** | React 19, Vite 7 |
| **Animations** | Framer Motion |
| **Graphiques** | Chart.js, react-chartjs-2 |
| **Icônes** | Lucide React |
| **Styles** | CSS pur (variables CSS, Flexbox, Grid) |
| **Fonts** | Google Fonts (Inter, Outfit) |

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/portfolio.git

# Accéder au dossier
cd portfolio

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build de production
npm run build
```

## 📁 Structure du Projet

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── ProjectCard.jsx      # Carte de projet réutilisable
│   │   ├── TypeWriter.jsx       # Animation de frappe
│   │   └── FloatingIcon.jsx     # Animation icône flottante
│   ├── features/
│   │   ├── SkillsRadar.jsx      # Graphique radar Chart.js
│   │   ├── SkillLevel.jsx       # Barre de progression animée
│   │   └── Languages.jsx        # Langues avec étoiles + soft skills
│   ├── App.jsx                  # Composant principal
│   ├── main.jsx                 # Point d'entrée React
│   └── index.css                # Styles globaux + responsive
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Personnalisation

### Couleurs (variables CSS)

```css
:root {
    --bg-dark: #0a0f1d;        /* Fond principal */
    --primary: #38bdf8;         /* Cyan accent */
    --accent: #818cf8;          /* Violet secondaire */
    --text-main: #f1f5f9;       /* Texte principal */
    --text-muted: #94a3b8;      /* Texte désaturé */
}
```

### Sections Disponibles

1. **Hero** : Titre avec effet typewriter
2. **Compétences** : Radar + barres de progression
3. **Projets** : Cartes avec tags et icônes
4. **Expérience** : Timeline verticale animée
5. **Langues & Soft Skills** : Étoiles + barres
6. **Au-delà de la Data** : Passions personnelles
7. **Contact** : Footer avec liens sociaux

## 📱 Breakpoints Responsive

| Breakpoint | Comportement |
|------------|--------------|
| > 1024px | Layout complet, grilles multi-colonnes |
| 768px - 1024px | Grilles 2 colonnes, skills empilés |
| < 768px | Mobile : 1 colonne, menu hamburger |
| < 480px | Compact : typographie réduite |

## 🚀 Déploiement

### Vercel (recommandé)

```bash
npm run build
# Puis connecter le repo GitHub à Vercel
```

### Netlify

```bash
npm run build
# Glisser-déposer le dossier /dist sur Netlify
```

## 📄 Licence

Ce projet est sous licence MIT. Libre à vous de l'utiliser comme base pour votre propre portfolio !

---

**Développé avec ❤️ par Dorian François**  
*Data Project Manager @ Hutchinson*
