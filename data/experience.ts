export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  stack: string[];
}

export const experiences: Experience[] = [
  {
    company: "M-taka",
    role: "Full-Stack Developer",
    period: "July 2025 – Present",
    location: "Nairobi, Kenya",
    description:
      "Building and maintaining a comprehensive business management platform with 10+ production web applications serving field agents across Kenya.",
    achievements: [
      "Developed and deployed 10+ production web applications serving 100+ field agents",
      "Built React/TypeScript frontends with Redux Toolkit, TanStack Query, Recharts",
      "Django REST APIs with JWT auth, role-based access, multi-tenant scoping",
      "Architected offline-first PWA using IndexedDB with write-ahead queues",
      "Provisioned and managed VPS hosting 11 Nginx sites across 10+ subdomains",
      "Built custom server monitoring system (FastAPI + React)",
      "Hardened infrastructure: Fail2Ban, UFW, security headers, automated patching",
      "Implemented M-Pesa integration, CRM with Kanban, dual-ledger inventory, financial reporting",
    ],
    stack: ["React", "TypeScript", "Django", "PostgreSQL", "Nginx", "FastAPI", "Redux Toolkit"],
  },
  {
    company: "Safaricom PLC",
    role: "Operations Support System Engineer",
    period: "June 2024 – November 2024",
    location: "Nairobi, Kenya",
    description:
      "Built the frontend for Cellbase, an operations platform used by Kenya's largest telecommunications company to manage network infrastructure.",
    achievements: [
      "Built the React frontend of Cellbase, used by 5+ network departments and 50+ field engineers",
      "Built 10+ features reducing data input time across multiple departments",
      "Enabled field engineers to access critical site data on mobile devices",
    ],
    stack: ["React", "TypeScript", "Material-UI", "REST APIs"],
  },
];

export const education = {
  degree: "BSc. Computer Technology",
  university: "JKUAT (Jomo Kenyatta University of Agriculture and Technology)",
  honors: "Second Class Honors, Upper Division",
  period: "Sept 2021 – Dec 2025",
};
