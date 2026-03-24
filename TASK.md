Read CLAUDE.md first. Then implement ALL improvements below on the InterioInn new codebase.

## BUSINESS FACTS (use these everywhere)
- Company: Interio Inn
- Location: Ranchi, Jharkhand, India
- Phone: +91 92299 50050
- Email: info@interioinn.com
- WhatsApp: +91 92299 50050
- Showroom: Ranchi's largest interior showroom — 15,000 sq ft
- Service area: Ranchi, Jamshedpur, Dhanbad, Bokaro (Jharkhand)
- Real stats from live site: 320+ Awards | 152k+ Happy Clients | 852+ Projects Completed
- Working hours: Mon–Sat 9AM–7PM, Sunday 10AM–5PM
- Partner brands: Hafele, Hettich, Ebco, Dorset, Anchor, Bajaj Finserv, Opus, Asian Paints, Greenply, Merino
- USP: India's first complete interior solution — design, manufacture, install under one roof

## ROUTING
Uses React Router v7. Import from 'react-router'. Use Link and useNavigate.
Animations: import { motion } from 'motion/react' — NOT framer-motion.
Use the existing fadeInUp pattern for all animated elements.
Do NOT modify src/app/components/ui/ files.

---

## TASK 1: FIX ALL PLACEHOLDER DATA

### WhatsAppButton.tsx
- Change wa.me number to: 919229950050
- Add pre-filled message: ?text=Hi, I'm interested in interior design services. I found InterioInn online.

### ContactPage.tsx
- Phone: +91 92299 50050
- Email: info@interioinn.com, sales@interioinn.com
- Address: Plot No. 47, Harmu Road, Near Harmu Housing Colony, Ranchi, Jharkhand - 834002
- Hours: Mon–Sat: 9:00 AM – 7:00 PM | Sunday: 10:00 AM – 5:00 PM
- Add Google Maps iframe embed for Ranchi (use approximate coords: lat 23.3441, lng 85.3096)
- Contact form on submit: redirect to WhatsApp with filled name + service type: https://wa.me/919229950050?text=Hi, my name is [name]. I'm interested in [service].

### AboutPage.tsx
- Stats: 852+ Projects | 15+ Years Experience | 152k+ Happy Clients | 98% Satisfaction
- Add company story mentioning Ranchi, Jharkhand, 15,000 sq ft showroom
- Heading: "Jharkhand's Premier Interior Design Studio"
- Add line: "Step into Ranchi's largest 15,000 sq. ft. interior showroom — explore hundreds of designs across kitchens, wardrobes, living rooms and more."

### ProjectsPage.tsx
- Update all project locations to Ranchi / Jamshedpur / Dhanbad / Bokaro
- Update project names to reflect local context: "Modern Villa, Ranchi", "Modular Kitchen, Jamshedpur", "Corporate Office, Ranchi" etc.
- Keep same images (they're fine, just update metadata)

### HomePage.tsx — Testimonials
- Update locations to: Ranchi, Jamshedpur, Dhanbad
- Use more Indian/Jharkhand context names
- Example: Rahul Agarwal, Ranchi | Sunita Devi, Jamshedpur | Prakash Sinha, Dhanbad

### Footer.tsx
- Phone: +91 92299 50050
- Address: Harmu Road, Ranchi, Jharkhand - 834002
- Email: info@interioinn.com
- Fix newsletter form: on submit show toast "Thank you! We'll be in touch soon." (mock is fine)

---

## TASK 2: HERO SECTION IMPROVEMENTS (HomePage.tsx)

Update hero content:
- Headline: "Complete Interior Solutions.<br/>Crafted in Ranchi. Delivered Across Jharkhand."
- Subtext: "From custom furniture manufacturing to complete interior design — visit Jharkhand's largest 15,000 sq. ft. interior showroom in Ranchi. Your dream space, brought to life."
- Keep existing 2 CTAs
- Add a 3rd CTA below: "📍 Visit Our Showroom in Ranchi" → links to /contact, styled as text link with underline
- Add a stats strip INSIDE the hero at the bottom (overlapping):
  bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 grid grid-cols-3 gap-8 text-white text-center
  - 852+ | Projects Done
  - 152k+ | Happy Clients  
  - 15,000 sq ft | Showroom

---

## TASK 3: BRAND LOGOS SECTION (HomePage.tsx)

Add AFTER "Why Choose InterioInn" section, BEFORE services:

```
Title: "Trusted Brands We Work With"
Subtitle: "We bring the best names in interior design to Ranchi"
Background: bg-white border-y border-border

Display brand name pills/logos in a horizontal scrolling row (auto-scroll on mobile):
Brands: Hafele | Hettich | Ebco | Dorset | Anchor | Bajaj Finserv | Opus | Asian Paints | Greenply | Merino

Style each as: rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground hover:border-secondary hover:text-secondary transition-colors

Use motion for fade-in. Add a subtle "infinite scroll" animation using CSS:
@keyframes scroll { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
Duplicate the brand list so it loops seamlessly.
```

---

## TASK 4: ROOM CATEGORY VISUAL TABS (HomePage.tsx)

Add AFTER services section, BEFORE featured projects:

```
Title: "Spaces We Transform"
Subtitle: "Explore our work across every room in your home"

Tabs (use shadcn Tabs component):
Living Room | Kitchen | Wardrobe | Bedroom | Dining Room | Office

Each tab shows a 3-column image grid with 3 images + a "View All Projects" link.
Use Unsplash images for each room type.

Tab content:
- Living Room: 3 luxury living room images
- Kitchen: 3 modular kitchen images  
- Wardrobe: 3 wardrobe/closet images
- Bedroom: 3 bedroom interior images
- Dining Room: 3 dining room images
- Office: 3 office interior images

Each image: rounded-xl overflow-hidden h-64 hover:scale-105 transition-transform cursor-pointer
```

---

## TASK 5: FREE QUOTE / ESTIMATION FORM PAGE

Create new page: src/app/pages/GetQuotePage.tsx
Add route: /get-quote in routes.ts
Add "Get Free Quote" as a prominent CTA button in Header.tsx (right side, brown/secondary color)

Form fields (multi-step, 3 steps):
Step 1: "What space do you want to design?"
  - Room type (select): Full Home | Modular Kitchen | Wardrobe | Living Room | Bedroom | Office | Other
  - Project type: New Home | Renovation | Commercial

Step 2: "Tell us about your space"
  - Approximate area (select): Under 500 sq ft | 500-1000 sq ft | 1000-2000 sq ft | 2000+ sq ft
  - Budget range: Under ₹2L | ₹2L–₹5L | ₹5L–₹10L | ₹10L–₹25L | ₹25L+
  - Timeline: ASAP | 1-3 months | 3-6 months | Flexible

Step 3: "How can we reach you?"
  - Full name, phone number (required), email, city
  - Checkbox: "I'd like to visit the showroom in Ranchi"

On submit: show success screen + WhatsApp redirect button:
"Your enquiry has been received! For faster assistance, connect on WhatsApp:"
Button: → https://wa.me/919229950050?text=Hi! I just submitted an enquiry on InterioInn for [roomType] in [city]. Budget: [budget].

Style: clean white card, progress indicator at top (Step 1/2/3), secondary (brown) for active/CTA buttons.

---

## TASK 6: BEFORE & AFTER GALLERY (new component)

Create: src/app/components/BeforeAfterGallery.tsx
Add to HomePage.tsx AFTER featured projects section.

Show 3 before/after pairs using a CSS clip/drag slider:
- Use a simple implementation: two images overlaid with a vertical divider that can be dragged
- Before image: use a plain room/empty space Unsplash photo
- After image: use a furnished/designed room Unsplash photo

If a proper slider is complex, use a simpler side-by-side card approach:
- Card with two halves: left = before (label "Before"), right = after (label "After")
- Images: h-64 object-cover
- 3 pairs: Kitchen transformation | Living Room transformation | Bedroom transformation

Title: "Transformations That Speak for Themselves"
Subtitle: "See how we turn ordinary spaces into extraordinary homes"

---

## TASK 7: EMI / FINANCING SECTION (HomePage.tsx)

Add AFTER before/after gallery, BEFORE testimonials:

```
Background: bg-gradient-to-r from-secondary/10 to-accent/20
Title: "Make Your Dream Home Affordable"
Subtitle: "Easy EMI options starting from ₹3,999/month"

3 columns:
1. Icon: CreditCard | "0% Interest EMI" | "Available on orders above ₹50,000 through Bajaj Finserv"
2. Icon: Calendar | "Flexible Tenure" | "Choose repayment from 6 to 24 months"
3. Icon: Shield | "Instant Approval" | "Quick approval process with minimal documentation"

CTA button: "Check EMI Options" → opens WhatsApp: https://wa.me/919229950050?text=Hi, I'd like to know more about EMI options for my interior project.

Add Bajaj Finserv as a highlighted brand badge: "In partnership with Bajaj Finserv"
```

---

## TASK 8: SHOWROOM VISIT CTA SECTION (HomePage.tsx)

Add right before the final CTA banner:

```
Full-width section, dark background bg-primary text-primary-foreground
Left side: 
  - "Visit Ranchi's Largest Interior Showroom"
  - "15,000 sq. ft. of inspiration — explore hundreds of kitchen, wardrobe, and furniture designs all under one roof."
  - Address: Harmu Road, Ranchi, Jharkhand
  - Hours: Mon–Sat 9AM–7PM | Sun 10AM–5PM
  - Two buttons: "Get Directions" (→ Google Maps link) + "Call Now" (tel: +91 92299 50050)
Right side:
  - Google Maps iframe embed (Ranchi, lat 23.3441, lng 85.3096, zoom 15)
  - rounded-xl overflow-hidden h-64
```

---

## TASK 9: LOCAL SEO META TAGS

Install react-helmet-async. Wrap App in HelmetProvider in App.tsx.

Add to each page:
- HomePage: title="Interio Inn | Best Interior Designer in Ranchi | 15,000 sq ft Showroom" description="Ranchi's premier interior design studio. Modular kitchens, wardrobes, complete home interiors. Visit our 15,000 sq ft showroom in Ranchi, Jharkhand."
- AboutPage: title="About Interio Inn | Interior Design Company in Ranchi, Jharkhand"
- ContactPage: title="Contact Interio Inn | Visit Our Showroom in Ranchi"
- ProjectsPage: title="Interior Design Projects in Ranchi | Interio Inn Portfolio"
- HardwarePage: title="Premium Hardware & Fittings in Ranchi | Hafele, Hettich, Ebco | Interio Inn"
- GetQuotePage: title="Get Free Interior Design Quote in Ranchi | Interio Inn"
- ServicePage: dynamic title based on serviceId

Also add schema markup (JSON-LD) in HomePage for LocalBusiness:
```json
{
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  "name": "Interio Inn",
  "telephone": "+91-92299-50050",
  "address": { "@type": "PostalAddress", "streetAddress": "Harmu Road", "addressLocality": "Ranchi", "addressRegion": "Jharkhand", "postalCode": "834002", "addressCountry": "IN" },
  "url": "https://interioinn.com",
  "openingHours": ["Mo-Sa 09:00-19:00", "Su 10:00-17:00"]
}
```

---

## TASK 10: BLOG PAGE

Create: src/app/pages/BlogPage.tsx
Add route: /blog in routes.ts
Add "Blog" to Footer quick links

5 blog posts with realistic content:
1. id: "modular-kitchen-ranchi", title: "How to Choose the Perfect Modular Kitchen for Your Ranchi Home", category: "Kitchens", date: "2025-01-15", readTime: "5 min", excerpt: "A complete guide to modular kitchen materials, layouts, and finishes best suited for homes in Ranchi's climate and lifestyle."
2. id: "wardrobe-design-2025", title: "Wardrobe Design Trends for 2025: What's Hot in Interior Design", category: "Wardrobes", date: "2025-02-10", readTime: "4 min", excerpt: "From sliding doors to walk-in closets — explore the wardrobe designs our Ranchi clients are loving in 2025."
3. id: "home-interior-budget", title: "Complete Home Interior in ₹5-10 Lakhs: Is It Possible in Jharkhand?", category: "Budget Guide", date: "2025-02-28", readTime: "7 min", excerpt: "Breaking down the real cost of a complete home interior in Ranchi and how to maximize value without compromising quality."
4. id: "hardware-matters", title: "Why Hardware is the Most Important Part of Your Modular Kitchen", category: "Hardware", date: "2025-03-05", readTime: "4 min", excerpt: "Hafele vs Hettich vs Ebco — understanding which hardware brand suits your kitchen and budget."
5. id: "office-interior-ranchi", title: "Modern Office Interiors in Ranchi: Trends for Jharkhand Businesses", category: "Commercial", date: "2025-03-15", readTime: "6 min", excerpt: "How Ranchi businesses are transforming their workspaces to boost productivity and impress clients."

Blog listing page: grid of cards with category badge, date, title, excerpt, read time, "Read More" link
Blog detail page (BlogPostPage.tsx if not existing, or create it): show full article content (write 300-400 words per article), related posts at bottom.
Add route /blog/:postId for detail page.

---

## TASK 11: PROCESS SECTION IMPROVEMENTS (HomePage.tsx)

Update existing process steps to include timeframes:
1. Consultation (Day 1) — "We understand your vision, space dimensions, and budget"
2. Design (Week 1–2) — "Our designers create detailed 3D layouts and mood boards"
3. Manufacturing (Week 3–6) — "Custom fabrication at our in-house Ranchi workshop"  
4. Installation (Week 7–8) — "Our expert team handles on-site setup and finishing"
5. Handover (Week 9) — "Final walk-through, touch-ups, and 1-year service warranty"

---

## TASK 12: HEADER GET QUOTE BUTTON

In Header.tsx:
- Add "Get Free Quote" button on the right side of desktop nav
- Style: bg-secondary text-white hover:bg-secondary/90 rounded-full px-5 py-2 text-sm
- On click: navigate to /get-quote
- On mobile: add as prominent button at bottom of mobile menu

---

After all tasks, run `npm install` for any new packages, then `npm run build` to verify no TypeScript/build errors.

When completely finished, run: openclaw system event --text "Done: InterioInn all improvements complete" --mode now
