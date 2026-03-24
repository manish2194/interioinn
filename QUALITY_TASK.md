Read CLAUDE.md. This is a complete quality overhaul of InterioInn. The site currently looks empty and unfinished. Fix all bugs and make it world-class.

## CRITICAL BUG FIXES FIRST

### BUG 1: Scroll to Top on Navigation (MOST IMPORTANT)
The #1 reported bug: switching service pages stays at scroll position.
Create src/app/components/ScrollToTop.tsx:
```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
```
Add <ScrollToTop /> inside App.tsx RouterProvider — wrap it in a layout component:
Create src/app/components/Layout.tsx:
```tsx
import { Outlet } from 'react-router';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
```
Update routes.ts to use Layout as parent route:
```tsx
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { path: '', Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'services/:serviceId', Component: ServicePage },
      { path: 'projects', Component: ProjectsPage },
      { path: 'projects/:projectId', Component: ProjectDetailPage },
      { path: 'hardware', Component: HardwarePage },
      { path: 'contact', Component: ContactPage },
      { path: 'get-quote', Component: GetQuotePage },
      { path: 'blog', Component: BlogPage },
      { path: 'blog/:postId', Component: BlogPostPage },
    ]
  }
]);
```

### BUG 2: Framer Motion whileInView not triggering on initial render
All sections use `whileInView` which only triggers when scrolling INTO view.
But the hero and above-fold content should NOT animate on scroll — it should animate on mount.
Fix the hero section animation in HomePage.tsx:
- Change hero from `whileInView` to `animate` (it's above the fold, no scroll needed)
- Keep `whileInView` for below-fold sections
- Add `viewport={{ once: true, margin: "-50px" }}` to all whileInView animations so they trigger slightly before entering view

### BUG 3: Empty-looking sections
The massive white spaces are sections that exist but are invisible because:
- Images may be slow loading (Unsplash URLs with no fallback placeholder)
- The fadeInUp animations haven't triggered yet
Fix: Add explicit min-height to sections that have content, so they don't collapse:
- Any section with a grid of cards: add `min-h-[200px]` to prevent collapse
- Add background colors to alternate sections to clearly delineate them

---

## DESIGN OVERHAUL

### TASK 1: Typography Upgrade (index.html + styles)
Replace current fonts with premium pairing in index.html:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
```
In src/styles/theme.css:
```css
:root {
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Jost', system-ui, sans-serif;
}
h1, h2, h3 { font-family: var(--font-display); letter-spacing: -0.01em; }
body, p, button, input, select, textarea { font-family: var(--font-body); }
```

### TASK 2: Color & Material Richness
Update theme.css CSS variables to a richer warm palette:
```css
:root {
  --background: #FAFAF7;
  --foreground: #1C1C1A;
  --card: #FFFFFF;
  --primary: #1C1C1A;
  --secondary: #7C5C3E; /* rich walnut brown */
  --accent: #C9B49A;   /* warm sand */
  --muted: #F0EBE3;    /* warm cream */
  --muted-foreground: #6B6258;
  --border: rgba(124, 92, 62, 0.12);
}
```

### TASK 3: Hero Section Redesign (HomePage.tsx)
Complete hero overhaul:
```tsx
<section className="relative h-screen min-h-[700px] flex items-end pb-20 overflow-hidden">
  {/* Full bleed background image */}
  <div className="absolute inset-0">
    <ImageWithFallback src="[luxury interior image]" className="w-full h-full object-cover" />
    {/* Dark gradient from bottom-left */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
  </div>
  
  {/* Content — left aligned, bottom of hero */}
  <div className="relative z-10 container mx-auto px-4 lg:px-8 w-full">
    <div className="max-w-2xl">
      {/* Eyebrow text */}
      <motion.p animate initial className="text-[#C9B49A] text-sm tracking-[0.25em] uppercase mb-4 font-body">
        Ranchi's Premier Interior Studio
      </motion.p>
      {/* Large editorial headline — Cormorant Garamond */}
      <motion.h1 animate initial className="text-white text-5xl lg:text-7xl leading-tight mb-6">
        Spaces That<br/><em>Tell Your Story</em>
      </motion.h1>
      <motion.p animate initial className="text-white/80 text-lg mb-8 max-w-lg leading-relaxed">
        Complete interior solutions — designed, crafted, and delivered across Jharkhand. 
        Visit our 15,000 sq. ft. showroom in Ranchi.
      </motion.p>
      {/* CTAs */}
      <motion.div animate initial className="flex flex-wrap gap-4">
        <Link to="/get-quote">
          <Button size="lg" className="bg-[#7C5C3E] hover:bg-[#6a4f35] text-white px-8 py-4 text-base rounded-none">
            Start Your Project
          </Button>
        </Link>
        <Link to="/projects">
          <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10 px-8 py-4 text-base rounded-none backdrop-blur-sm">
            View Our Work
          </Button>
        </Link>
      </motion.div>
    </div>
    
    {/* Stats — horizontal row at bottom right */}
    <div className="absolute bottom-0 right-8 hidden lg:flex gap-12 pb-20">
      {[['852+', 'Projects'], ['152k+', 'Clients'], ['15,000 sq ft', 'Showroom']].map(([num, label]) => (
        <div key={label} className="text-right">
          <div className="text-white text-3xl font-display font-light">{num}</div>
          <div className="text-white/60 text-xs tracking-widest uppercase">{label}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
    <span className="text-xs tracking-widest uppercase">Scroll</span>
    <div className="w-px h-12 bg-white/30 animate-pulse" />
  </div>
</section>
```

### TASK 4: "Why InterioInn" Section Redesign
Replace icon cards with a split editorial layout:
```
Left: Large image (craftsman/workshop shot)
Right: 
  - Eyebrow: "Why Choose Us"
  - Heading: "Craftsmanship at Its Core"
  - Body: 2-3 sentences about philosophy
  - 4 stats in 2x2 grid: 15+ Years | 852+ Projects | 152k Clients | 1 Year Warranty
  - CTA: "Our Story →"
Background: bg-[#F0EBE3] (warm cream)
```

### TASK 5: Services Section Redesign
Replace the grid cards with a large-image horizontal scroll or an editorial list:
```
Full-width section, dark background (#1C1C1A)
Title (white, large serif): "What We Create"

6 services in a 2-col layout:
Left col: large numbered list (01, 02, 03) with service names in large serif
Right col: corresponding full-height image that changes on hover/click

On mobile: stacked cards with image + title + description
```

### TASK 6: Portfolio Section Redesign
Make the portfolio the STAR of the page:
```
Full-width section
Title: "Our Portfolio"
Subtitle: "Transforming spaces across Jharkhand"

Large masonry grid — 4 columns on desktop, 2 on tablet, 1 on mobile:
- First card: full-width featured project (spans 2 cols), large
- Remaining: standard masonry cards
- Each card: image fills card, overlay appears on hover with project name + location
- View All button below
- Filter tabs above: All | Residential | Commercial | Kitchen | Office

Hover state: scale(1.02) + overlay with project details
```

### TASK 7: Process Section Redesign  
Replace numbered circles with an elegant horizontal timeline:
```
Background: #F0EBE3
Large serif heading: "How We Work"

5 steps in a horizontal timeline (desktop), vertical accordion (mobile):
Step 01 — Consultation | Step 02 — Design | Step 03 — Manufacturing | Step 04 — Installation | Step 05 — Handover

Each step:
- Large number (01) in very large, light-weight serif font (opacity: 0.2) as background
- Step title in medium serif
- Description text
- Timeline bar connecting steps (CSS border-top)

On mobile: collapsible/accordion style
```

### TASK 8: Testimonials Section Redesign
Full-width cinematic section with quote carousel:
```
Background: full-width interior image with dark overlay
Large quote marks (") in gold/accent color
Single testimonial centered, large italic serif font (Cormorant Garamond italic)
Client name + location below
Prev/Next arrows left and right
Auto-rotates every 5 seconds (pause on hover)
```

### TASK 9: Materials/Brands Section
New section — "Premium Brands We Work With":
```
Background: white
Title: "Trusted Brands"
Subtitle: "We stock and install only the finest"

Two rows:
Row 1: Brand name in elegant typography (not just pills):
HAFELE · HETTICH · EBCO · DORSET · ANCHOR

Row 2: ASIAN PAINTS · GREENPLY · MERINO · BAJAJ FINSERV

Style: large elegant text, serif font, muted color, hover darkens
Subtle divider lines between items on desktop
```

### TASK 10: CTA Section Redesign
Final CTA before footer:
```
Full-width, split background: left half dark (#1C1C1A), right half image of beautiful interior
Left side content:
  - Small eyebrow: "Ready to Begin?"  
  - Large serif: "Let's Create Something Beautiful"
  - Body text: "Visit our showroom or get a free quote online. Our designers are ready."
  - Two buttons: "Visit Showroom" + "Get Free Quote"
  - Address: Harmu Road, Ranchi
  - Phone: +91 92299 50050
```

### TASK 11: Footer Redesign
Premium dark footer:
```
Background: #1C1C1A
Top section: Large brand statement "Interio Inn" in large serif, full width
Divider line
4-column grid: About | Services | Connect | Newsletter
Bottom bar: © 2025 Interio Inn · Privacy Policy · Made in Ranchi
Social icons: clean, minimum 28px
```

---

## ALL OTHER PAGES

### TASK 12: ServicePage.tsx improvements
- Add breadcrumb: Home → Services → [Service Name]
- Hero: full-width service image with title overlay (not a banner header)
- After hero: brief intro + key features in an elegant 3-col icon grid
- Gallery: 3-image mosaic of completed projects for that service type
- Process: simplified 3-step for that specific service
- CTA at bottom: "Interested in [Service]? Get a Quote"
- Related services: "You might also like" grid of 2-3 other services

### TASK 13: Header improvements
- Add smooth dropdown animation for Services menu (currently instant show/hide)
- Active route indicator: the current page's nav item gets underline in secondary color
- On scroll: header should smoothly transition (already works, just verify it's smooth)
- Logo: make it slightly larger, maybe add a small icon mark before "Interio"

---

## FINAL CHECKS
1. npm run build — fix all TypeScript errors
2. Verify scroll-to-top works on all route changes
3. Verify hero animations play on load (not whileInView)
4. Verify all grid sections have content visible without scrolling trigger issues

When done: openclaw system event --text "Done: InterioInn quality overhaul complete" --mode now
