export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: "full-stack" | "frontend" | "devops";
  featured: boolean;
  year: string;
  role: string;
  timeline: string;
  stack: string[];
  thumbnail: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenge: string;
  solution: string;
  features: { title: string; description: string }[];
  technicalHighlights: string[];
  results: { metric: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "mtaka-platform",
    title: "M-taka Platform",
    tagline: "Full-stack production platform powering 100+ field agents across Kenya",
    description:
      "A comprehensive business management platform with 10+ interconnected applications including CRM, inventory management, financial reporting, and an offline-first PWA for field agents operating in areas with limited connectivity.",
    category: "full-stack",
    featured: true,
    year: "2025",
    role: "Full-Stack Developer",
    timeline: "July 2025 – Present",
    stack: ["React", "TypeScript", "Django", "PostgreSQL", "Nginx", "Redux Toolkit", "TanStack Query", "IndexedDB"],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
    ],
    challenge:
      "M-taka needed a unified platform to manage operations across multiple business units. Field agents in rural Kenya required offline access to critical data, and the system needed to handle M-Pesa payment integration, dual-ledger inventory, and real-time reporting for management.",
    solution:
      "Built a modular platform architecture with 10+ specialized applications sharing a common authentication and data layer. Engineered an offline-first PWA using IndexedDB with write-ahead queues that sync automatically when connectivity returns. Integrated M-Pesa APIs for seamless mobile money transactions.",
    features: [
      { title: "Offline-First PWA", description: "IndexedDB with write-ahead queues enabling field agents to work without internet, with automatic sync when connectivity returns." },
      { title: "M-Pesa Integration", description: "Seamless mobile money payment processing integrated directly into the workflow for instant transactions." },
      { title: "CRM with Kanban", description: "Visual pipeline management with drag-and-drop Kanban boards for tracking leads and customer relationships." },
      { title: "Dual-Ledger Inventory", description: "Sophisticated inventory tracking with dual-ledger system for accurate stock management across locations." },
      { title: "Server Monitoring", description: "Custom-built monitoring dashboard tracking uptime, resource usage, and alerts for 11 production sites." },
      { title: "Financial Reporting", description: "Real-time financial dashboards with automated report generation for management decision-making." },
    ],
    technicalHighlights: [
      "Architected offline-first data layer with IndexedDB and write-ahead queue pattern",
      "Provisioned and managed VPS hosting 11 Nginx sites across 10+ subdomains",
      "Implemented role-based access control with multi-tenant scoping",
      "Built custom server monitoring system with FastAPI + React",
      "Hardened infrastructure with Fail2Ban, UFW, security headers, automated patching",
    ],
    results: [
      { metric: "Applications Built", value: "10+" },
      { metric: "Field Agents Served", value: "100+" },
      { metric: "Subdomains Managed", value: "10+" },
      { metric: "Uptime Achieved", value: "99.9%" },
    ],
  },
  {
    slug: "cellbase-safaricom",
    title: "Cellbase",
    tagline: "Operations platform for Kenya's largest telecommunications company",
    description:
      "A comprehensive operations support system built for Safaricom PLC, enabling network departments and field engineers to manage critical telecom infrastructure data efficiently.",
    category: "frontend",
    featured: true,
    year: "2024",
    role: "Frontend Developer",
    timeline: "June 2024 – November 2024",
    stack: ["React", "TypeScript", "Material-UI", "REST APIs"],
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80",
    ],
    challenge:
      "Safaricom's network teams relied on fragmented tools and manual processes to manage telecom infrastructure data. Field engineers needed mobile access to critical site information, and data input across departments was slow and error-prone.",
    solution:
      "Developed the React frontend for Cellbase, a unified operations platform that streamlined data management for 5+ network departments. Built 10+ features that significantly reduced data input time and enabled mobile-first access for field engineers.",
    features: [
      { title: "Multi-Department Dashboard", description: "Unified interface serving 5+ network departments with role-specific views and workflows." },
      { title: "Mobile-Responsive Design", description: "Enabled 50+ field engineers to access critical site data directly from mobile devices in the field." },
      { title: "Streamlined Data Input", description: "10+ features designed to reduce data input time, replacing manual processes with intelligent forms." },
      { title: "Real-Time Data Sync", description: "Live data updates ensuring all departments work with current information." },
    ],
    technicalHighlights: [
      "Built responsive React frontend serving 5+ departments and 50+ field engineers",
      "Implemented Material-UI component library with custom theme for brand consistency",
      "Designed mobile-first interface for field engineer use cases",
      "Optimized forms and data input flows reducing processing time significantly",
    ],
    results: [
      { metric: "Departments Served", value: "5+" },
      { metric: "Field Engineers", value: "50+" },
      { metric: "Features Built", value: "10+" },
      { metric: "Mobile Accessible", value: "Yes" },
    ],
  },
  {
    slug: "ember-and-grain",
    title: "Ember & Grain",
    tagline: "Artisan coffee e-commerce with cinematic animations",
    description:
      "A premium e-commerce experience for an artisan coffee brand, featuring GSAP-driven animations, Lenis smooth scrolling, and a fully functional cart system with a design that evokes the warmth of a coffee shop.",
    category: "frontend",
    featured: true,
    year: "2025",
    role: "Frontend Developer",
    timeline: "2025",
    stack: ["React", "TypeScript", "GSAP", "Lenis", "Tailwind CSS"],
    thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80",
    ],
    challenge:
      "Create an e-commerce frontend that feels as premium and artisanal as the coffee it sells. The site needed to stand apart from generic Shopify themes while maintaining excellent performance and a seamless shopping experience.",
    solution:
      "Designed and built a cinematic e-commerce experience using GSAP for scroll-triggered animations and page transitions, Lenis for buttery smooth scrolling, and a custom cart system. Every interaction was crafted to feel intentional and premium.",
    features: [
      { title: "Cinematic Scroll Animations", description: "GSAP ScrollTrigger-driven parallax, reveals, and transitions that create a storytelling experience." },
      { title: "Smooth Scrolling", description: "Lenis-powered buttery smooth scroll that elevates the browsing feel." },
      { title: "Cart System", description: "Fully functional shopping cart with add/remove, quantity management, and checkout flow." },
      { title: "Product Showcases", description: "Rich product pages with image galleries, origin stories, and tasting notes." },
    ],
    technicalHighlights: [
      "Implemented complex GSAP ScrollTrigger animations with timeline orchestration",
      "Integrated Lenis smooth scrolling with GSAP for seamless scroll-driven effects",
      "Built performant cart state management with React context",
      "Achieved 60fps animations on mobile through careful optimization",
    ],
    results: [
      { metric: "Animation FPS", value: "60" },
      { metric: "Lighthouse Score", value: "95+" },
      { metric: "Load Time", value: "<2s" },
      { metric: "Mobile Optimized", value: "Yes" },
    ],
  },
  {
    slug: "phiabo",
    title: "Phiabo",
    tagline: "SaaS platform with auth, dashboards, and team management",
    description:
      "A comprehensive SaaS platform featuring authentication flows, interactive dashboards, skill-based search, and team directory functionality with polished Framer Motion animations.",
    category: "full-stack",
    featured: false,
    year: "2025",
    role: "Frontend Developer",
    timeline: "2025",
    stack: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80",
    ],
    challenge:
      "Build a SaaS platform that handles complex user flows—authentication, onboarding, dashboard analytics, and team management—while maintaining a clean, intuitive interface.",
    solution:
      "Developed a modular React application with Framer Motion animations throughout. Implemented auth flows with form validation, interactive data dashboards, a skill-based search system, and a comprehensive team directory.",
    features: [
      { title: "Authentication Flow", description: "Complete sign-up, login, and onboarding experience with smooth transitions." },
      { title: "Interactive Dashboard", description: "Data visualization dashboard with charts, metrics, and filtering capabilities." },
      { title: "Skill Search", description: "Searchable directory with skill-based filtering and matching algorithms." },
      { title: "Team Directory", description: "Comprehensive team management with profiles, roles, and organizational views." },
    ],
    technicalHighlights: [
      "Implemented complex multi-step auth flows with form state management",
      "Built reusable dashboard components with dynamic data binding",
      "Created skill-matching search algorithm with debounced filtering",
    ],
    results: [
      { metric: "User Flows", value: "4+" },
      { metric: "Components Built", value: "30+" },
      { metric: "Animations", value: "20+" },
      { metric: "Responsive", value: "Yes" },
    ],
  },
  {
    slug: "proseify",
    title: "Proseify",
    tagline: "AI writing tool with interactive demo and premium landing page",
    description:
      "A polished landing page for an AI-powered writing assistant, featuring an interactive product demo, tiered pricing, testimonials, and conversion-optimized design with Motion animations.",
    category: "frontend",
    featured: false,
    year: "2025",
    role: "Frontend Developer",
    timeline: "2025",
    stack: ["React", "TypeScript", "Motion", "Tailwind CSS"],
    thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80",
    ],
    challenge:
      "Create a landing page that effectively communicates the value of an AI writing tool while demonstrating the product's capabilities through an interactive demo section.",
    solution:
      "Built a conversion-optimized landing page with an interactive writing demo that lets visitors experience the product before signing up. Included tiered pricing, social proof through testimonials, and smooth scroll-based animations.",
    features: [
      { title: "Interactive Demo", description: "Live product demonstration allowing visitors to experience AI writing assistance firsthand." },
      { title: "Tiered Pricing", description: "Clear pricing comparison with feature breakdowns and highlighted recommended plan." },
      { title: "Social Proof", description: "Testimonial section with rotating reviews and company logos." },
      { title: "CTA Optimization", description: "Strategically placed conversion points with compelling copy and animations." },
    ],
    technicalHighlights: [
      "Built interactive product demo simulating AI writing in real-time",
      "Implemented scroll-driven animations with Motion library",
      "Optimized for conversion with strategic CTA placement and A/B-ready structure",
    ],
    results: [
      { metric: "Sections", value: "7" },
      { metric: "Interactive Demo", value: "Yes" },
      { metric: "Performance", value: "98" },
      { metric: "Mobile First", value: "Yes" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}
