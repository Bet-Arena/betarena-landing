# Repository Guidelines

## Project Structure & Module Organization
This repository is a Vite + React + TypeScript landing page. Application code lives in `src/`: top-level composition in `src/App.tsx`, layout blocks in `src/layouts/`, page sections in `src/sections/`, reusable UI in `src/components/ui/`, and scroll/observer logic in `src/hooks/`. Static assets that must be served as-is live in `public/` (images, fonts). Build output is generated into `dist/`; treat `dist/` and `node_modules/` as derived files and do not edit them manually.

## Build, Test, and Development Commands
Use `npm install` to install dependencies. Key scripts:

- `npm run dev` starts the local Vite dev server with HMR.
- `npm run build` runs `tsc -b` and produces a production bundle in `dist/`.
- `npm run lint` runs ESLint across the repo.
- `npm run preview` serves the production build locally for a final check.

For routine changes, run `npm run lint && npm run build` before opening a PR.

## Coding Style & Naming Conventions
Follow the existing TypeScript/React style: functional components, 2-space indentation, and semicolon-free files. Name React components and layout/section files in PascalCase (`Hero.tsx`, `StepOverlay.tsx`); name hooks with the `use` prefix (`useScrollToSection.ts`); keep matching component styles beside the component (`Hero.css`, `Header.css`). Prefer relative imports because no path alias is configured. ESLint is configured in `eslint.config.js`; there is no Prettier setup, so keep formatting consistent with surrounding files.

## Testing Guidelines
There is no automated test runner configured yet. Until one is added, every change should pass `npm run lint` and `npm run build`. For interactive or visual changes, verify the affected section in `npm run dev` and, for responsive work, check both desktop and mobile layouts. If you add tests, keep them close to the feature under `src/` and use `*.test.ts(x)` naming.

## Commit & Pull Request Guidelines
Recent history uses short, imperative commit subjects (`fix`, `dvh/dvw fix`). Keep that imperative style, but make subjects more specific, for example `fix hero CTA scroll target`. PRs should include a short description of the change, note any manual verification performed, and attach screenshots or screen recordings for UI updates. Link the related issue when one exists.

## Configuration Notes
Everything in `public/` is shipped to the browser, so never place secrets there. Keep large images optimized before committing to avoid bloating the landing page payload.
