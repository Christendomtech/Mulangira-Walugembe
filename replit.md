# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Artifacts

- **portfolio** (`artifacts/portfolio`) — React + Vite portfolio landing page for HRH Prince Edward Fredrick Walugembe. Single-page app with sections: Hero, Statement, Pillars, Ventures, Books, Contact, Footer. Themed with Buganda Kingdom royal colors (Deep Crimson #7C1C32, Dark Maroon #4D0F1E, Ceremonial Gold #C9973A). Fonts: Cormorant Garamond (display) + Inter (body). Served at `/`.
- **api-server** (`artifacts/api-server`) — Express 5 backend, currently only serves `/api/healthz`.

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
