# Ketian Tools Site

Marketing/landing site for **Ketian Tools**, built with Astro and React. It includes Spanish/English i18n routing and UI built on top of Tailwind CSS and shadcn-style components.

## 🧱 Stack

- [Astro](https://astro.build) — static site framework and routing
- [React](https://react.dev) — for interactive/framework components
- [Tailwind CSS](https://tailwindcss.com) v4 — styling
- [shadcn](https://ui.shadcn.com) + [Base UI](https://base-ui.com) — UI primitives (e.g. `Button`, `Card`)
- [lucide-react](https://lucide.dev) — icons
- TypeScript

## 🚀 Project Structure

```text
/
├── public/
├── src/
│   ├── assets/            # images, svgs, logos
│   ├── components/
│   │   └── ui/             # shadcn-style UI components (button, card, ...)
│   ├── i18n/               # translations and i18n utilities
│   ├── layouts/            # shared Astro layouts
│   ├── pages/
│   │   ├── index.astro     # Spanish (default) home page
│   │   └── en/index.astro  # English home page
│   └── styles/              # global styles
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🔗 Ketian Tools Repository

Want to check out the Ketian Tools project itself? Find it here:

[github.com/enriquecr01/ketian-tools](https://github.com/enriquecr01/ketian-tools)

## 👀 Want to learn more?

Feel free to check [Astro's documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).
