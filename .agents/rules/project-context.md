# Project Context & Memory

> **Authoritative Context Document** for `hadidwirsty-hero`.  
> Automatically generated via `/scaffold-onboard`. All agents and contributors MUST adhere to the standards, architecture, and dev workflows documented here.

---

## 1. Project Overview & Identity

- **Project Name:** `hadidwirsty-hero`
- **Version:** `0.0.1` (Private)
- **Description:** Modern Next.js web application built with React 19, Tailwind CSS v4, Base UI primitives (`@base-ui/react`), and shadcn/ui components (`base-luma` style).
- **Primary Purpose:** Frontend application / portfolio / personal hero application for Muhammad Hadid Wiransetyo.

---

## 2. Tech Stack & Toolchain Matrix

| Category | Technology / Library | Version / Details |
| :--- | :--- | :--- |
| **Runtime & Framework** | [Next.js](https://nextjs.org/) | `16.4.4` (App Router) |
| **Core UI Library** | [React](https://react.dev/) / React DOM | `19.3.1` (React 19 Canary / Stable support) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `^5` (Strict mode, ES2017 target, bundler resolution) |
| **Package Manager** | [pnpm](https://pnpm.io/) | `pnpm-lock.yaml`, workspace configured |
| **Styling Engine** | [Tailwind CSS](https://tailwindcss.com/) | `v4` (`@tailwindcss/postcss`, OKLCH CSS variables) |
| **Animation (Framer)** | [`motion`](https://motion.dev/) (Framer Motion) | `^14.11.1` (Official Framer React 19 animation engine) |
| **CSS Animation** | `tw-animate-css` | `^1.4.0` |
| **Component Primitives** | `@base-ui/react` | `^1.9.0` (Headless unstyled accessible primitives) |
| **Component System** | [shadcn/ui](https://ui.shadcn.com/) | `^4.23.0` (Style: `base-luma`, variant `neutral`) |
| **Variant Management** | `class-variance-authority` (CVA) | `^0.7.1` |
| **Class Merging** | `cn` (re-exported in `@/lib/utils`) | `^0.5.2` |
| **Icons** | `lucide-react` | `^1.71.0` |
| **Theme / Dark Mode** | `next-themes` | `^0.4.6` (Class-based, hotkey `'d'` enabled) |
| **Linting** | [ESLint](https://eslint.org/) | `^9` (Flat config `eslint.config.mjs`, `eslint-config-next`) |
| **Formatting** | [Prettier](https://prettier.io/) | `^3.9.10` with `prettier-plugin-tailwindcss` |

> [!IMPORTANT]
> **Next.js 16 Notice:** This project uses Next.js 16.4.4. Breaking changes, new conventions, and deprecations may exist. Refer directly to the bundled local documentation at `node_modules/next/dist/docs/` before implementing complex server/routing logic.

---

## 3. Directory Layout & Architecture

```text
hadidwirsty-hero/
├── app/                        # Next.js App Router
│   ├── favicon.ico             # App icon
│   ├── globals.css             # Tailwind v4 import, @theme inline, OKLCH root/dark colors
│   ├── layout.tsx              # Root HTML layout (Inter + Geist_Mono, ThemeProvider)
│   └── page.tsx                # Main entry / landing page
├── components/                 # React UI components
│   ├── theme-provider.tsx      # Dark mode provider with 'd' hotkey listener
│   ├── ui/                     # Reusable primitive UI components (shadcn / Base UI)
│   │   └── button.tsx          # Button component (CVA + @base-ui/react/button)
│   └── .gitkeep
├── hooks/                      # Custom React hooks
│   └── .gitkeep
├── lib/                        # Shared utility functions and contracts
│   ├── utils.ts                # cn utility re-export
│   └── .gitkeep
├── public/                     # Static public assets
│   └── .gitkeep
├── .agents/                    # Agent rules, context memory, and skills
│   └── rules/
│       └── project-context.md  # THIS FILE: authoritative context memory
├── components.json             # shadcn/ui configuration (base-luma style)
├── eslint.config.mjs           # ESLint 9 Flat Config
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and npm scripts
├── pnpm-lock.yaml              # Lockfile
├── pnpm-workspace.yaml         # Workspace configuration
├── postcss.config.mjs          # PostCSS configuration (@tailwindcss/postcss)
├── tsconfig.json               # TypeScript compiler configuration (aliases: @/* -> ./*)
└── AGENTS.md                   # Agent guidelines and Next.js version notice
```

### Architectural Patterns

1. **App Router Structure:**
   - Pure React Server Components (RSC) by default.
   - Interactive components (e.g., `theme-provider.tsx`) must declare `"use client"` at the top.
2. **Headless Primitive Pattern (`@base-ui/react`):**
   - Note that UI components under `components/ui/` use `@base-ui/react` rather than Radix UI primitives.
   - Component variants are styled with `class-variance-authority` (CVA) and composed with `cn()`.
3. **Theming via CSS OKLCH Variables:**
   - Color variables are defined using `oklch(...)` color spaces in `app/globals.css`.
   - Dark theme activated via `.dark` class managed by `next-themes`.
4. **Path Aliasing:**
   - `@/*` resolves to root `./*`.
   - Pre-configured aliases: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`, `@/lib/utils`.

---

## 4. Developer Workflows & Commands

All commands must be executed using `pnpm`:

| Action | Command | Purpose / Notes |
| :--- | :--- | :--- |
| **Start Development** | `pnpm dev` | Starts Next.js development server at `http://localhost:3000` |
| **Build for Production** | `pnpm build` | Compiles application and optimizes production assets |
| **Start Production Server** | `pnpm start` | Runs the production-built application |
| **Typecheck** | `pnpm typecheck` | Runs `tsc --noEmit` to verify type safety |
| **Lint** | `pnpm lint` | Runs `eslint` across the codebase |
| **Format Code** | `pnpm format` | Runs `prettier --write "**/*.{ts,tsx}"` |
| **Add shadcn Component** | `npx shadcn@latest add <name>` | Adds a new UI component configured for `base-luma` |

---

## 5. Configuration & Environment Variables

- **Environment Files:** Ignored by `.gitignore` (`.env*`).
- **Secrets Management:** NEVER hardcode secrets or commit `.env` files with sensitive tokens.
- **Current Required Variables:** None currently required for local bootstrap. Future environment configurations should provide `.env.example` with sanitized placeholder keys.

---

## 6. Code Quality & Standards Alignment

In accordance with `.agents/skills/clean-code-standards/SKILL.md` and `.agents/skills/technical-constitution/SKILL.md`:

1. **TypeScript Strictness:**
   - No `any` types. Provide explicit interfaces or inferred types.
   - Separate types from values (`import type { ... }`).
2. **Component Conventions:**
   - Functional components only.
   - Props typed with interface or type aliases.
   - Keep components focused and cohesive (Single Responsibility Principle).
3. **Language & UI Copywriting Rule:**
   - **User Interface (UI):** ALL user-facing text (buttons, labels, headings, error messages, modals) **WAJIB menggunakan Bahasa Indonesia** murni yang baku dan konsisten.
   - **Code & Technical Names:** Code, variables, functions, CSS classes, file paths, and git commits remain strictly in **English**.
   - **Agent Conversation:** Chat output to user **WAJIB Bahasa Indonesia**.
4. **Error Handling:**
   - No silent failures or empty `catch` blocks.
   - Validation at boundaries using schemas (Zod).
5. **Testing Strategy (Target Baseline):**
   - Future unit tests: Vitest + `@testing-library/react`.
   - Isolate side effects from UI rendering; mock external network and I/O.

---

## 7. Next Steps & Recommended Improvements

- [x] Clean up unused import `Geist` in `app/layout.tsx` (Completed).
- [ ] Add unit testing setup (Vitest, React Testing Library, jsdom).
- [ ] Define feature folders (e.g., `features/`) as application complexity grows.

