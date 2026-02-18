# ShardMC - Minecraft Network Website

## Overview

ShardMC is a premium Minecraft Lifesteal network website built as a full-stack TypeScript application. It features a dark-themed, fire/ember aesthetic with orange-red gradients, glassmorphism effects, and particle animations. The site serves as the public-facing portal for the ShardMC Minecraft server (`play.shardmc.fun`), providing a homepage with server stats, a news/updates section, a server store for ranks/items, and links to Discord and voting.

The project follows a monorepo structure with a React frontend (Vite), an Express backend, a shared schema/routes layer, and a PostgreSQL database managed through Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Directory Structure

- `client/` — React frontend (Vite-powered SPA)
- `server/` — Express backend API server
- `shared/` — Shared TypeScript types, database schema, and API route definitions
- `migrations/` — Drizzle database migration files
- `script/` — Build scripts (esbuild + Vite)
- `attached_assets/` — Design reference documents

### Frontend Architecture

- **Framework**: React 18 with TypeScript
- **Bundler**: Vite with HMR support (dev mode proxies through Express)
- **Routing**: Wouter (lightweight client-side router) — pages: Home, Store, News, 404
- **State/Data Fetching**: TanStack React Query for server state management
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives
- **Styling**: TailwindCSS with CSS variables for theming, dark mode by default
- **Animations**: Framer Motion for page transitions, scroll reveals, and particle effects
- **Fonts**: Space Grotesk (display/headings) and Inter (body text)
- **Design Theme**: Dark black base with orange/red fire gradient accents, glassmorphism, particle backgrounds

Path aliases:
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

### Backend Architecture

- **Framework**: Express 5 running on Node.js with TypeScript (via tsx)
- **API Pattern**: RESTful JSON API under `/api/*` prefix
- **Route Definitions**: Centralized in `shared/routes.ts` with Zod schemas for request/response validation
- **Storage Layer**: Abstract `IStorage` interface with `DrizzleStorage` implementation backed by PostgreSQL
- **Dev Server**: Vite middleware is integrated into Express during development; in production, static files are served from `dist/public`
- **Build**: Custom build script using esbuild for server bundle and Vite for client bundle; outputs to `dist/`

### API Endpoints

- `GET /api/news` — List all news articles
- `GET /api/news/:id` — Get a single news article
- `GET /api/products` — List all store products
- `GET /api/stats` — Get server statistics (currently mocked)

### Database Schema

Uses Drizzle ORM with PostgreSQL:

**`news` table:**
- `id` (serial, PK)
- `title` (text)
- `content` (text)
- `imageUrl` (text)
- `date` (timestamp, defaults to now)
- `author` (text)

**`products` table:**
- `id` (serial, PK)
- `name` (text)
- `price` (text)
- `image` (text)
- `category` (text — e.g., "VIP", "MVP", "LEGEND")
- `features` (text array)

Schema push command: `npm run db:push` (uses drizzle-kit push)

### Known Issues in Codebase

- `server/storage.ts` has a broken `DatabaseStorage.getNewsItem` method — the `where({ id })` syntax is incorrect for Drizzle. The `DrizzleStorage` class below it has the correct implementation using `eq()`. The exported `storage` instance should use `DrizzleStorage`.
- The server seeds mock data on startup if the news table is empty.
- Stats endpoint returns hardcoded mock data (not connected to actual Minecraft server queries yet).

## External Dependencies

### Database
- **PostgreSQL** — Primary database, connected via `DATABASE_URL` environment variable
- **Drizzle ORM** — TypeScript ORM for schema definition and queries
- **drizzle-kit** — Schema migration/push tooling
- **connect-pg-simple** — PostgreSQL session store (available but not yet configured for sessions)

### Key NPM Packages
- **express** (v5) — HTTP server
- **vite** — Frontend dev server and bundler
- **@tanstack/react-query** — Server state management
- **framer-motion** — Animations
- **wouter** — Client-side routing
- **zod** — Runtime schema validation (shared between client and server)
- **drizzle-zod** — Generate Zod schemas from Drizzle table definitions
- **shadcn/ui** — Pre-built accessible UI components (Radix UI + Tailwind)
- **lucide-react** — Icon library

### External Services
- **Discord** — Community link (`https://discord.gg/ShardMC`)
- **Unsplash** — Stock images used for news articles and hero backgrounds (external URLs)

### Environment Variables Required
- `DATABASE_URL` — PostgreSQL connection string (required, app will crash without it)