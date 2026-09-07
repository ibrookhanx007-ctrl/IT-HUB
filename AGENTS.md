<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# IT HUB Corporation — Engineering Rules

Read this file before writing any code in this project. It is the
permanent instruction set for any AI agent or developer working here.

## Project

IT HUB Corporation — corporate services website. This is a
marketing/lead-generation site: no user accounts, no database.

## Stack

- Next.js 16.3.4 (App Router)
- React 19.2.8 / React DOM 19.2.8
- TypeScript 5.9.3 (`strict: true`)
- Tailwind CSS 4.3.3 (`@tailwindcss/postcss` 4.3.3)
- ESLint 9.39.5 (`eslint-config-next` 16.3.4) + Prettier 3.9.6
  (`eslint-config-prettier` 10.1.8)
- npm (package manager)
- Node.js 22.x
- shadcn/ui (CLI-managed, components copied into `src/components/ui/`,
  configured via `components.json`), on `radix-ui` primitives +
  `class-variance-authority` for variants + `cn` (clsx/tailwind-merge
  replacement, official shadcn package) for class merging
- `lucide-react` — icon set used by shadcn/ui components and service
  icons in `src/content/`
- `sonner` — toast notifications (the shadcn/ui "sonner" component)
- `tw-animate-css` — animation utilities shadcn/ui's Sheet/Accordion
  transitions depend on
- `zod` — schema validation for all external input (rule 5); the
  contact form and API route share one schema
- `react-hook-form` + `@hookform/resolvers` — form state and the Zod
  resolver for the contact form (`components/ui/select` etc. aren't
  native inputs, so they need `Controller`, which react-hook-form
  provides)
- `resend` + `@react-email/components` — sends the contact form
  notification email (`src/lib/email.ts`) using a React Email template
  (`src/emails/`)

No new major dependency (a new package, or a major version bump of an
existing one) may be added without first being justified in this file:
add a line under this section naming the package and why an existing
tool in the stack cannot do the job.

## Folder structure

```
src/
  app/                    # routes only — thin page files, no business logic
    (marketing)/          # route group for public pages
    api/                  # route handlers
    layout.tsx
    globals.css
  components/
    ui/                   # generic reusable primitives (Button, Card, Input)
    layout/               # Header, Footer, MobileNav
    sections/             # page sections (Hero, ServicesGrid, ContactForm)
  content/                # all site copy and data as typed TS files
  emails/                 # React Email templates sent via src/lib/email.ts
  lib/                    # helpers, validation schemas, utilities
  types/                  # shared TypeScript types
public/                   # images, favicon, static files
```

- `app/`: routing and composition only. A page file imports section
  components and content; it does not contain markup logic, copy, or
  business logic itself.
- `components/ui/`: presentation-only primitives with no knowledge of
  page content or business logic.
- `components/layout/`: structural chrome shared across pages.
- `components/sections/`: page-specific composed sections built from
  `ui/` primitives and `content/` data.
- `content/`: the single source of truth for site copy and structured
  data (services, pricing, team, etc.), as typed TS files.
- `emails/`: React Email components rendered server-side by
  `src/lib/email.ts` and sent via Resend — not part of the rendered
  site, so kept separate from `components/`.
- `lib/`: framework-agnostic helpers, Zod schemas, and utilities. No
  React components (email templates are the one exception, and they
  live in `emails/`, not here).
- `types/`: shared TypeScript types used across more than one folder.
- `public/`: static assets only — no code.

## Rules

1. No hardcoded text in components. All copy lives in `src/content/`
   and is imported.
2. No hardcoded colors, fonts, or spacing values. Use design tokens
   only (Tailwind theme values / CSS variables in `globals.css`).
3. Every component is a Server Component by default. Add
   `"use client"` only when the component needs state, effects, or
   browser events — and add a one-line comment saying why.
4. Every component file exports one component. Name the file the
   same as the component.
5. All external input (forms, URL params) must be validated with Zod
   before use.
6. No secrets in client code. Secrets live in `.env.local` and are
   read only in server code.
7. Files stay under 200 lines. Split into smaller components instead
   of growing one.
8. Do not add a dependency that duplicates something already
   installed.

## Definition of done

Before you say a task is complete:

- `npm run lint` passes
- `npm run build` passes
- The change was manually described to the user in plain language
