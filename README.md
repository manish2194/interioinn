# InterioInn — Interior Design & Furniture Website

A premium interior design and custom furniture company website. Built with React + Vite + TypeScript + shadcn/ui + Framer Motion + React Router + MUI.

## 🏠 About the Project

InterioInn is a B2C interior design services website showcasing modular kitchens, wardrobes, living room furniture, office interiors, hardware & fittings, and turnkey interior solutions. It has proper URL-based routing (unlike the legal projects).

---

## 🗂️ Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `HomePage` | Landing page — hero, services grid, why choose us, testimonials |
| `/about` | `AboutPage` | About the company |
| `/services/:serviceId` | `ServicePage` | Dynamic service detail page |
| `/projects` | `ProjectsPage` | Portfolio of completed projects |
| `/projects/:projectId` | `ProjectDetailPage` | Single project detail |
| `/hardware` | `HardwarePage` | Hardware & fittings page |
| `/contact` | `ContactPage` | Contact form + info |

**Service IDs:** `modular-kitchens` · `wardrobes` · `living-room` · `office-interiors` · `hardware-fittings` · `complete-interiors`

---

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **Routing:** React Router v7 (`createBrowserRouter`)
- **UI Components:** shadcn/ui (Radix UI)
- **Styling:** Tailwind CSS v4 + CSS custom properties (theme.css)
- **Animations:** Framer Motion (`motion/react`)
- **Icons:** Lucide React + MUI Icons
- **Additional UI:** MUI (Material UI) + Emotion
- **WhatsApp:** Built-in WhatsApp floating button component

---

## 🎨 Design System

Defined in `src/styles/theme.css`:
- **Background:** `#FAFAF8` (warm off-white)
- **Primary:** `#1A1A1A` (near-black)
- **Secondary:** `#8B7355` (warm brown/tan)
- **Accent:** `#D4C4B0` (warm beige)
- **Muted:** `#E8E4DF`

This is a **warm, premium aesthetic** — not the navy/blue of the legal projects. Keep the earthy tones.

---

## 📁 Project Structure

```
src/
├── main.tsx                        # Entry point
├── app/
│   ├── App.tsx                     # RouterProvider wrapper
│   ├── routes.ts                   # All React Router routes
│   ├── components/
│   │   ├── Header.tsx              # Sticky/transparent nav with submenu + scroll effect
│   │   ├── Footer.tsx              # Site footer
│   │   ├── WhatsAppButton.tsx      # Floating WhatsApp CTA (already exists!)
│   │   ├── figma/ImageWithFallback.tsx
│   │   └── ui/                     # shadcn/ui components
│   └── pages/
│       ├── HomePage.tsx
│       ├── AboutPage.tsx
│       ├── ServicePage.tsx         # Dynamic, uses :serviceId param
│       ├── ProjectsPage.tsx
│       ├── ProjectDetailPage.tsx
│       ├── HardwarePage.tsx
│       └── ContactPage.tsx
└── styles/
    ├── fonts.css
    ├── index.css
    ├── tailwind.css
    └── theme.css                   # CSS custom properties / design tokens
```

---

## 🚀 Running Locally

```bash
npm install
npm run dev     # localhost (default Vite port)
```

---

## Key Differences from Legal Projects

| Feature | InterioInn | NeetiPath / NyayHelp |
|---------|-----------|----------------------|
| Routing | React Router v7 (real URLs) | Custom prop/context navigation |
| Animations | Framer Motion throughout | None |
| Design | Warm earthy tones | Navy blue |
| Nav | Transparent → solid on scroll | Always solid |
| Sub-menus | Yes (Services dropdown) | No |
| WhatsApp | Already built (`WhatsAppButton.tsx`) | Added via tasks |
| MUI | Yes | No |

---

## ⚠️ Notes

- WhatsApp button already exists — don't duplicate it
- Header is transparent on top, becomes solid white with backdrop-blur on scroll
- Uses `motion/react` (Framer Motion) — import from `motion/react` not `framer-motion`
- MUI is available but shadcn/ui is preferred for consistency
- No backend/auth — purely frontend
