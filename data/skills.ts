export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building interfaces that users love",
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Redux Toolkit" },
      { name: "Tailwind CSS" },
      { name: "Material-UI" },
      { name: "TanStack Table" },
      { name: "TanStack Query" },
      { name: "Recharts" },
      { name: "GSAP" },
      { name: "Framer Motion" },
      { name: "Vite" },
    ],
  },
  {
    title: "Backend",
    description: "Architecting reliable systems",
    skills: [
      { name: "Django" },
      { name: "Django REST Framework" },
      { name: "FastAPI" },
      { name: "Python" },
      { name: "PostgreSQL" },
      { name: "JWT Auth" },
      { name: "REST API Design" },
    ],
  },
  {
    title: "DevOps",
    description: "Shipping and scaling with confidence",
    skills: [
      { name: "Linux (Ubuntu)" },
      { name: "Nginx" },
      { name: "GitHub Actions" },
      { name: "SSL/TLS" },
      { name: "systemd" },
      { name: "Fail2Ban" },
      { name: "UFW" },
      { name: "Docker" },
      { name: "Vercel" },
    ],
  },
  {
    title: "Architecture",
    description: "Designing systems that last",
    skills: [
      { name: "PWA" },
      { name: "Offline-First" },
      { name: "IndexedDB/Dexie" },
      { name: "Responsive Design" },
      { name: "Multi-Tenant Systems" },
      { name: "M-Pesa Integration" },
    ],
  },
];
