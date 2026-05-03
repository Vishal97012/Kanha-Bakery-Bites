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

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

---

## Kanha Home Bakery (`artifacts/kanha-bakery`)

Mobile-first ecommerce-style React+Vite website for a home bakery in Arrah, Bihar.

### Theme
- Primary: `#5a2e1f` (maroon/brown)
- Gold/price: `#b8893a`
- Background: `#fdf8f3` (cream)
- Border: `#e8dccc`
- WhatsApp green: `#25D366`

### Pages
- `/` — Home: location strip, promo banner, category chips, 2-col cake grid, trust badges, SEO footer, floating WhatsApp button
- `/menu` — Menu: same layout as home, maroon banner, 2-col cake grid, floating WhatsApp button
- `/cake/:slug` — CakeDetail: full hero image, description, highlights, quality badges, related cakes, sticky WhatsApp CTA
- `/custom-cake` — Custom Cake order form with WhatsApp submission
- `/contact` — Contact info, working hours, delivery areas, social links
- `/cart` — Cart with quantity controls and WhatsApp order button

### Key Files
- `src/lib/products.ts` — Single source of truth for all 33 cakes (slug, name, min price, image, category, badge, desc, fullDesc, highlights)
- `src/lib/cart.ts` — Cart utilities, `WHATSAPP_NUMBER = "917050256262"`
- `src/lib/data.ts` — FLAVORS list for Custom Cake
- `src/components/Navbar.tsx` — Sticky navbar, maroon active state, cart badge
- `src/components/Footer.tsx` — Dark maroon footer with social links

### Routing
Uses `wouter`. Routes defined in `src/App.tsx`.

### WhatsApp Number
`917050256262` (India +91 70502 56262)
