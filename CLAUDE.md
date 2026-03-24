# CLAUDE.md — Claude Context for InterioInn

## Project Overview

InterioInn is a **premium interior design & furniture company website**. B2C, no auth, no backend. Purely frontend.

---

## Routing

This project uses **React Router v7** (`createBrowserRouter`) — unlike NeetiPath/NyayHelp which use custom navigation.

```tsx
// Navigation
import { Link, useNavigate, useParams } from 'react-router';

// In components
<Link to="/projects">Projects</Link>
const navigate = useNavigate();
navigate('/contact');

// Dynamic routes
const { serviceId } = useParams(); // for /services/:serviceId
const { projectId } = useParams(); // for /projects/:projectId
```

To add a new page:
1. Create `src/app/pages/NewPage.tsx`
2. Import + add route in `src/app/routes.ts`
3. Add nav link in `Header.tsx` if needed

---

## Animations

Uses **Framer Motion** — import from `motion/react` (NOT `framer-motion`):

```tsx
import { motion } from 'motion/react';

// Standard fade-in pattern used across the site:
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

<motion.div {...fadeInUp}>...</motion.div>
```

Use animations on section reveals, card hovers. Keep subtle — this is a premium brand.

---

## Design System

Defined in `src/styles/theme.css` as CSS custom properties.

**Color palette — WARM EARTHY TONES:**
- Background: `#FAFAF8` (warm off-white)
- Primary: `#1A1A1A` (near-black)
- Secondary: `#8B7355` (warm brown/tan) — main brand accent
- Accent: `#D4C4B0` (warm beige)
- Muted bg: `#E8E4DF`

**Use CSS vars in Tailwind:** `bg-[var(--background)]`, `text-[var(--secondary)]` etc.
Or use direct hex: `#8B7355`, `#D4C4B0`, `#1A1A1A`

**DO NOT** use navy blue or gold from the legal projects. This is a completely different brand.

---

## Header Behavior

The header is **transparent on top** and transitions to `bg-white/95 backdrop-blur-md` on scroll.
- Uses `useEffect` + scroll listener + `isScrolled` state
- Has a **Services submenu** dropdown
- Closes mobile menu on route change via `useLocation()` effect

---

## WhatsApp Button

**Already built** — `src/app/components/WhatsAppButton.tsx`. Do NOT add another one. Just import and use if needed.

---

## Component Conventions

- Pages: `src/app/pages/`
- Shared components: `src/app/components/`
- UI primitives: `src/app/components/ui/` — **do not modify** (shadcn/ui)
- Animations: use `motion/react`, follow `fadeInUp` pattern
- Icons: prefer Lucide React; MUI Icons available but avoid mixing
- Styling: Tailwind classes + CSS vars from theme.css

---

## Service IDs (for dynamic routing)

Valid `:serviceId` values:
- `modular-kitchens`
- `wardrobes`
- `living-room`
- `office-interiors`
- `hardware-fittings`
- `complete-interiors`

---

## Do Not Touch

- `src/app/components/ui/` — shadcn/ui components
- `src/styles/theme.css` — design tokens (only add, don't remove)
- `WhatsAppButton.tsx` — already exists, don't duplicate
