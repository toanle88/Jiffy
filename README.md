# ⚡ Jiffy Cheats

Your personal developer cheatsheet hub — a fast, offline-ready PWA for quick-reference guides on the tools you use every day.

## ✨ Features

- **📚 Markdown Cheatsheets** — Curated quick-reference guides for Docker, Git, PostgreSQL, SQL Server, Python, .NET, Azure, Terraform, and Linux.
- **🔍 Fuzzy Search** — Instantly find what you need with Fuse.js-powered search across all cheatsheets.
- **🎨 Syntax Highlighting** — Beautiful code blocks via `react-syntax-highlighter`.
- **🌗 Dark / Light Theme** — Toggle between themes with one click; your preference is persisted.
- **📱 PWA Support** — Install on any device and use offline with service-worker caching.
- **⚡ Lightning Fast** — Built with Vite for instant HMR in development and optimized production builds.

## 🛠️ Tech Stack

| Layer          | Technology                              |
| -------------- | --------------------------------------- |
| Framework      | React 19 + TypeScript                   |
| Build Tool     | Vite 7                                  |
| Markdown       | react-markdown + remark-gfm             |
| Search         | Fuse.js                                 |
| Icons          | Lucide React                            |
| PWA            | vite-plugin-pwa (Workbox)               |
| Infrastructure | Azure Static Web Apps (Terraform)       |
| CI/CD          | GitHub Actions                          |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

## 📁 Project Structure

```
src/
├── cheatsheets/        # Markdown files (auto-discovered)
│   ├── docker.md
│   ├── git.md
│   ├── postgres.md
│   └── ...
├── components/
│   ├── Sidebar.tsx     # Navigation + search
│   ├── MarkdownViewer.tsx
│   └── ThemeToggle.tsx
├── hooks/
│   ├── useCheatsheets.ts  # Loading, parsing, filtering
│   └── useTheme.ts        # Dark/light mode persistence
├── utils/
│   └── cheatsheetLoader.ts
├── index.css           # Global styles & CSS variables
├── App.tsx
└── main.tsx
infra/                  # Terraform (Azure Static Web Apps)
.github/workflows/      # CI/CD pipelines
```

## 📝 Adding a New Cheatsheet

1. Create a new `.md` file in `src/cheatsheets/` with YAML frontmatter:

   ```markdown
   ---
   title: My Tool
   icon: wrench
   category: DevOps
   ---

   # My Tool Cheatsheet

   ## Section
   ```bash
   my-command --flag
   ​```
   ```

2. That's it — the cheatsheet loader auto-discovers new files. No manual registration needed.

## 🏗️ Infrastructure

The app is deployed to **Azure Static Web Apps** using Terraform:

- `infra/main.tf` — Resource Group + Static Web App (Free tier)
- `infra/providers.tf` — Azure provider configuration
- `infra/variables.tf` — Configurable parameters

GitHub Actions workflows handle deployment (`deploy.yml`) and infrastructure provisioning (`infrastructure.yml`).

## 📜 License

This project is private.
