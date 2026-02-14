---
name: Web Development Quality Standards
description: Guidelines and best practices for building high-quality Vite + React + TypeScript applications.
---

# Web Development Quality Standards

This skill defines the development standards for the **Jiffy** project — a developer cheatsheet & quick-reference app built with Vite, React 19, and TypeScript.

## 1. Project Structure
- **Components** (`/src/components`): Functional components using `React.FC<Props>` or plain function pattern. Keep components focused and small (Sidebar, MarkdownViewer, ThemeToggle).
- **Hooks** (`/src/hooks`): Custom hooks for cross-cutting concerns (`useCheatsheets`, `useTheme`). Isolate data-fetching, filtering, and side effects here.
- **Utils** (`/src/utils`): Pure utility functions (e.g., `cheatsheetLoader.ts`). Must be side-effect-free to stay testable.
- **Cheatsheets** (`/src/cheatsheets`): Markdown files with YAML frontmatter. Each file represents one cheatsheet topic (e.g., `docker.md`, `git.md`, `postgres.md`).
- **Styles** (`/src/styles`, `/src/index.css`): Global styles and CSS variable definitions. Component-level styles use dedicated `.css` files or scoped class names.
- **Assets** (`/src/assets`, `/public`): Static assets including icons, PWA manifest, and service worker config.

## 2. TypeScript Best Practices
- **Strict Mode**: `strict: true` in `tsconfig.json` is mandatory.
- **Interfaces vs Types**: Use `interface` for component props and public APIs. Use `type` for unions, aliases, and utility types.
- **No `any`**: Avoid `any` at all costs. Use `unknown`, generics, or explicit narrowing if the type is truly dynamic.
- **Explicit Return Types**: Prefer explicit return types on exported functions and hooks.

## 3. Content & Markdown
- **Frontmatter**: Every cheatsheet `.md` file must include YAML frontmatter with at least `title`, `icon`, and `category` fields.
- **Formatting**: Use GFM (GitHub Flavored Markdown) — tables, fenced code blocks with language tags, and task lists are encouraged.
- **Syntax Highlighting**: Code blocks are rendered with `react-syntax-highlighter`. Always specify the language for proper highlighting.
- **Search Friendliness**: Write concise, keyword-rich headings and descriptions so Fuse.js fuzzy search returns relevant results.

## 4. Component & UI Quality
- **Premium Aesthetics**: Follow modern design principles:
    - Custom fonts (Inter/Outfit via Google Fonts).
    - HSL-based color palettes with CSS custom properties.
    - Glassmorphism, subtle gradients, and smooth transitions.
    - Micro-animations for hover/focus feedback.
- **Theming**: Support light and dark modes via CSS variables toggled by `useTheme`. Never hard-code colors.
- **Responsive Design**: Desktop-first sidebar layout that collapses gracefully on smaller screens.
- **Vanilla CSS**: Use CSS Variables for theme consistency. Avoid inline styles and CSS-in-JS.

## 5. Performance
- **Memoization**: Use `useMemo` for derived data (filtered lists, selected items) and `useCallback` for stable handler references.
- **Lazy Loading**: Load cheatsheet content efficiently; consider code-splitting for large markdown renderers.
- **Bundle Size**: Be mindful of dependency weight. Prefer tree-shakeable imports (e.g., individual `lucide-react` icons).
- **PWA**: The app uses `vite-plugin-pwa`. Ensure the service worker is configured for offline-first caching of cheatsheet content.

## 6. Accessibility (A11y)
- **Contrast**: Maintain WCAG AA minimum contrast ratios in both light and dark themes.
- **ARIA**: Use proper `aria-label` and `role` attributes on interactive elements (sidebar items, search input, theme toggle).
- **Keyboard Navigation**: Ensure sidebar items and search are fully keyboard-navigable with visible focus states.
- **Semantic HTML**: Use `<nav>`, `<main>`, `<article>`, `<section>` appropriately.

## 7. Testing & Validation
- **Unit Tests**: Test utility functions (e.g., cheatsheet loading, frontmatter parsing) and custom hooks.
- **Linting**: Maintain consistent `eslint` configuration with `typescript-eslint` and `react-hooks` plugins.
- **Build Verification**: The project must pass `tsc -b && vite build` without errors before any merge.

## 8. Adding New Cheatsheets
1. Create a new `.md` file in `/src/cheatsheets/` with proper YAML frontmatter.
2. The cheatsheet loader auto-discovers files via glob import — no manual registration needed.
3. Use consistent heading hierarchy (`##` for sections, `###` for subsections).
4. Include practical, copy-paste-ready code snippets with language-tagged fenced blocks.
