# Jeff Gicharu — Portfolio

Personal portfolio website for Jeff Gicharu, a Full-Stack Developer based in Nairobi, Kenya.

**Live:** [jeffgicharu.com](https://jeffgicharu.com)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5.8 |
| UI | React 19 |
| Styling | Tailwind CSS 4 (CSS-based config) |
| Animation | GSAP 3.14 + ScrollTrigger |
| Scroll | Lenis 1.3 (smooth scrolling) |
| Motion | Framer Motion 12 |
| Icons | Lucide React |
| Export | Static HTML (Nginx-ready) |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero with interactive dot-grid canvas, about section with animated counters, featured projects, categorized skills with marquee, experience timeline with scroll-driven line fill, testimonial carousel, contact form |
| `/projects` | Filterable project grid (All / Full-Stack / Frontend / DevOps) |
| `/projects/[slug]` | Case study template — challenge, solution, features, technical highlights, results, prev/next navigation |
| `/blog` | Blog listing with article cards |
| `/resume` | Interactive resume with print-friendly styles |
| `/not-found` | Custom 404 page |

## Design — "Midnight Forge"

Dark-first theme with warm orange accents inspired by the Kenyan tech scene.

- **Palette:** Near-black `#050505` background, orange `#f97316` accent, warm white `#fafaf9` text
- **Typography:** [Syne](https://fonts.google.com/specimen/Syne) (display) + [Outfit](https://fonts.google.com/specimen/Outfit) (body)
- **Dark/Light mode** with FOUC prevention via inline head script
- **Custom cursor** on desktop (grows on interactive elements, mix-blend-mode)
- **Magnetic buttons** that follow cursor on hover
- **Noise/grain overlay** for texture
- **Scroll-triggered animations** on every section (GSAP ScrollTrigger with proper React cleanup)
- **`prefers-reduced-motion`** fully respected

## Project Structure

```
jeff-portfolio/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata, JSON-LD
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Tailwind v4 config, theme tokens, custom styles
│   ├── projects/
│   │   ├── page.tsx            # Filterable project grid
│   │   └── [slug]/page.tsx     # Case study (server component + generateStaticParams)
│   ├── blog/page.tsx
│   ├── resume/page.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── home/                   # Hero, About, FeaturedProjects, Skills,
│   │                           # Experience, Testimonials, Contact
│   ├── layout/                 # Navbar, Footer, SmoothScroll
│   ├── projects/               # ProjectCard, ProjectCaseStudy
│   └── ui/                     # CustomCursor, MagneticButton, TextReveal,
│                               # AnimatedCounter, ThemeToggle, SectionHeading
├── data/
│   ├── projects.ts             # All project data (add new projects here)
│   ├── skills.ts
│   ├── experience.ts
│   └── testimonials.ts
├── lib/utils.ts                # cn() utility (clsx + tailwind-merge)
├── next.config.mjs
├── postcss.config.mjs
└── tsconfig.json
```

## Adding a New Project

Edit `data/projects.ts` and add an entry to the `projects` array. No component changes needed — the project grid, case study page, and sitemap update automatically.

```ts
{
  slug: "my-new-project",
  title: "My New Project",
  tagline: "One-liner description",
  category: "full-stack",    // "full-stack" | "frontend" | "devops"
  featured: true,            // show on homepage
  // ... see existing entries for the full shape
}
```

## Getting Started

```bash
# Install dependencies
npm install

# Development server (Turbopack)
npm run dev

# Production build (static export to /out)
npm run build
```

## Deployment

The site exports to static HTML in the `/out` directory, ready to serve from any static host or Nginx.

```bash
npm run build

# Copy output to server
scp -r out/* deploy@your-server:/var/www/jeffgicharu.com/html/
```

Nginx config expects files at `/var/www/jeffgicharu.com/html/` with `try_files $uri $uri/ =404`.

## SEO

- Open Graph + Twitter Card meta tags on all pages
- JSON-LD structured data (`Person` schema) in root layout
- Dynamic metadata via `generateMetadata` on project case studies
- `robots.txt` and `sitemap.xml` generated at build time
- Semantic HTML throughout

## License

MIT
