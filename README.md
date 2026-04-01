# WildLens

Application web de découverte et d'identification d'espèces sauvages à partir d'empreintes animales.

## Fonctionnalités

- **Explorer** — Parcourir un catalogue d'espèces sauvages avec leurs informations (nom latin, famille, habitat, anecdotes)
- **Identifier** — Uploader une photo d'empreinte animale pour l'identifier (drag & drop ou sélection de fichier)
- **Découvrir** — Consulter la fiche détaillée de chaque espèce

## Stack technique

| Outil | Rôle |
|---|---|
| [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) | Framework front-end |
| [TypeScript](https://www.typescriptlang.org/) | Typage statique |
| [Tailwind CSS](https://tailwindcss.com/) | Styles utilitaires |
| [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) | Composants UI accessibles |
| [React Router v6](https://reactrouter.com/) | Routing côté client |
| [TanStack Query](https://tanstack.com/query) | Gestion des données asynchrones |
| [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) | Formulaires et validation |
| [Vitest](https://vitest.dev/) | Tests unitaires |
| [Playwright](https://playwright.dev/) | Tests end-to-end |

## Structure du projet

```
src/
├── components/       # Composants réutilisables (Layout, Navbar, Footer...)
│   └── ui/           # Composants shadcn/ui
├── data/             # Données statiques (catalogue d'espèces)
├── hooks/            # Hooks React personnalisés
├── lib/              # Utilitaires (cn, etc.)
├── pages/            # Pages de l'application
│   ├── Index.tsx         # Page d'accueil
│   ├── Species.tsx       # Liste des espèces
│   ├── SpeciesDetail.tsx # Fiche détaillée d'une espèce
│   ├── Upload.tsx        # Upload et identification d'empreinte
│   └── NotFound.tsx      # Page 404
└── main.tsx          # Point d'entrée
```

## Routes

| Route | Description |
|---|---|
| `/` | Page d'accueil |
| `/species` | Catalogue des espèces |
| `/species/:id` | Fiche détaillée d'une espèce |
| `/upload` | Identifier une empreinte |

## Prérequis

- [Node.js](https://nodejs.org/) >= 18
- npm >= 9 (ou bun)

## Installation et démarrage

```sh
# Cloner le dépôt
git clone <YOUR_GIT_URL>
cd wildlens-revamp

# Installer les dépendances
npm install

# Lancer le serveur de développement (http://localhost:8080)
npm run dev
```

## Scripts disponibles

```sh
npm run dev          # Serveur de développement avec HMR (port 8080)
npm run build        # Build de production dans /dist
npm run build:dev    # Build en mode développement
npm run preview      # Prévisualiser le build de production localement
npm run lint         # Linter ESLint
npm run test         # Tests unitaires (Vitest, mode run)
npm run test:watch   # Tests unitaires en mode watch
```

## Tests

Les tests unitaires utilisent **Vitest** et **Testing Library** :

```sh
npm run test
```

Les tests end-to-end utilisent **Playwright** :

```sh
npx playwright test
```

## Build et déploiement

```sh
npm run build
```

Le dossier `dist/` généré est un site statique déployable sur n'importe quel hébergeur (Vercel, Netlify, GitHub Pages, etc.).

Exemple avec Vercel CLI :

```sh
npx vercel --prod
```

## Alias de chemin

L'alias `@` pointe vers `src/` :

```ts
import Layout from "@/components/Layout";
import { speciesData } from "@/data/species";
```

## Contribution

1. Créer une branche à partir de `main` : `git checkout -b feat/ma-fonctionnalite`
2. Committer les changements : `git commit -m "feat: description"`
3. Ouvrir une Pull Request vers `main`
