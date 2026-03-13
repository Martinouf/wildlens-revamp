

## WildLens - Redesign Moderne

### Analyse du site actuel
- **Couleurs** : Fond vert menthe (~#A8D8C8), header vert foncé (#2D6A4F-ish), texte blanc sur header, liens bleus
- **Logo** : Patte d'animal + "WILDLENS" + "To know them is to love them"
- **Navigation** : Accueil, Espèces, Uploader une empreinte
- **4 pages** : Accueil, Liste des espèces, Upload d'empreinte, Détail espèce (nom latin, famille, habitat, fun fact)

### Plan d'implémentation

**1. Design system** - Palette vert nature modernisée avec CSS variables
- Fond principal : dégradé vert menthe subtil
- Header : vert forêt foncé avec glassmorphism
- Accents : vert émeraude pour les interactions
- Coins arrondis, ombres douces, transitions fluides

**2. Layout & Navigation** (`src/components/Navbar.tsx`)
- Navbar fixe avec effet blur/glassmorphism
- Logo SVG patte d'animal + typographie moderne
- Navigation avec indicateur actif animé
- Menu hamburger mobile

**3. Page Accueil** (`src/pages/Index.tsx`)
- Hero section avec illustration/icone nature, titre animé, tagline
- Section features avec 3 cartes (Explorer, Identifier, Découvrir)
- Call-to-action vers upload et espèces

**4. Page Espèces** (`src/pages/Species.tsx`)
- Grille de cartes avec icones animales
- Effet hover avec scale + ombre
- 13 espèces en données statiques (Castor, Chat, Chien, Coyote, Ecureuil, Lapin, Loup, Lynx, Ours, Puma, Rat, Raton Laveur, Renard)

**5. Page Détail Espèce** (`src/pages/SpeciesDetail.tsx`)
- Layout en carte avec sections : description, nom latin, famille, habitat, fun fact
- Badges/tags pour les infos
- Bouton retour

**6. Page Upload** (`src/pages/Upload.tsx`)
- Zone de drag & drop moderne avec icone
- Preview de l'image sélectionnée
- Bouton upload stylisé

**7. Routes** - Mise à jour de `App.tsx` avec `/`, `/species`, `/species/:id`, `/upload`

### Fichiers à créer/modifier
- `src/index.css` - Nouvelles CSS variables vertes
- `src/components/Navbar.tsx` - Navigation moderne
- `src/components/Footer.tsx` - Footer simple
- `src/components/Layout.tsx` - Layout wrapper
- `src/pages/Index.tsx` - Accueil redesigné
- `src/pages/Species.tsx` - Liste espèces en grille
- `src/pages/SpeciesDetail.tsx` - Détail espèce
- `src/pages/Upload.tsx` - Upload empreinte
- `src/data/species.ts` - Données statiques des espèces
- `src/App.tsx` - Routes

