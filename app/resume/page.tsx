"use client";

import { useEffect } from "react";
import {
  Download,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Code2,
  Server,
  Cloud,
  Blocks,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import MagneticButton from "@/components/ui/MagneticButton";
import { experiences, education } from "@/data/experience";
import { skillCategories } from "@/data/skills";

const categoryIcons: Record<string, typeof Code2> = {
  Frontend: Code2,
  Backend: Server,
  DevOps: Cloud,
  Architecture: Blocks,
};

export default function ResumePage() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray<HTMLElement>(".resume-reveal").forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: i * 0.06,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                once: true,
              },
            }
          );
        });
      });
    });
  }, []);

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen pt-24 md:pt-32">
        <div className="section-padding container-wide mx-auto pb-16">
          {/* Header */}
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div>
              <span className="mb-3 inline-block font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Resume
              </span>
              <h1 className="font-display text-display-lg font-extrabold text-foreground">
                Jeff Gicharu
              </h1>
              <p className="mt-2 font-display text-xl text-muted-foreground">
                Full-Stack Developer
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  Nairobi, Kenya
                </span>
                <a
                  href="mailto:jkaharu2970@gmail.com"
                  className="flex items-center gap-1.5 transition-colors hover:text-accent"
                >
                  <Mail className="h-3.5 w-3.5 text-accent" />
                  jkaharu2970@gmail.com
                </a>
                <a
                  href="tel:+254714478086"
                  className="flex items-center gap-1.5 transition-colors hover:text-accent"
                >
                  <Phone className="h-3.5 w-3.5 text-accent" />
                  +254 714 478 086
                </a>
                <a
                  href="https://github.com/jeffgicharu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-accent"
                >
                  <Github className="h-3.5 w-3.5 text-accent" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/jeff-gicharu-0924a4217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-accent"
                >
                  <Linkedin className="h-3.5 w-3.5 text-accent" />
                  LinkedIn
                </a>
              </div>
            </div>
            <MagneticButton variant="primary" className="no-print flex-shrink-0">
              <Download className="h-4 w-4" />
              Download PDF
            </MagneticButton>
          </div>

          {/* Summary */}
          <section className="resume-reveal mb-12 rounded-xl border border-border bg-card p-6">
            <p className="text-base leading-relaxed text-foreground/80">
              Full-Stack Developer with production experience building web
              applications serving hundreds of users across Kenya. Specialized in
              React/TypeScript frontends, Django backends, and Linux
              infrastructure. Built and deployed 10+ production applications,
              managed VPS hosting 11 sites, and architected offline-first PWAs for
              field agents. Graduate of JKUAT with Second Class Honors, Upper
              Division in Computer Technology.
            </p>
          </section>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main column */}
            <div className="lg:col-span-2">
              {/* Experience */}
              <section className="resume-reveal mb-12">
                <div className="mb-6 flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-accent" />
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Professional Experience
                  </h2>
                </div>
                <div className="space-y-8">
                  {experiences.map((exp) => (
                    <div
                      key={exp.company}
                      className="resume-reveal border-l-2 border-accent/30 pl-5"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <span className="font-display text-xs font-bold uppercase tracking-widest text-accent">
                          {exp.period}
                        </span>
                      </div>
                      <p className="mb-3 font-display text-sm font-medium text-muted-foreground">
                        {exp.company} &middot; {exp.location}
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((a, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-foreground/80"
                          >
                            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                            {a}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="resume-reveal mb-12">
                <div className="mb-6 flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Education
                  </h2>
                </div>
                <div className="border-l-2 border-accent/30 pl-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {education.degree}
                    </h3>
                    <span className="font-display text-xs font-bold uppercase tracking-widest text-accent">
                      {education.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {education.university}
                  </p>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {education.honors}
                  </p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div>
              {/* Skills */}
              <section className="resume-reveal">
                <h2 className="mb-6 font-display text-xl font-bold text-foreground">
                  Technical Skills
                </h2>
                <div className="space-y-6">
                  {skillCategories.map((category) => {
                    const Icon = categoryIcons[category.title] || Code2;
                    return (
                      <div key={category.title} className="resume-reveal">
                        <div className="mb-2 flex items-center gap-2">
                          <Icon className="h-4 w-4 text-accent" />
                          <h3 className="font-display text-sm font-bold text-foreground">
                            {category.title}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {category.skills.map((skill) => (
                            <span
                              key={skill.name}
                              className="rounded-md border border-border bg-card px-2 py-1 text-xs text-foreground/80"
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Interests / Philosophy */}
              <section className="resume-reveal mt-8 rounded-xl border border-accent/20 bg-accent/5 p-5">
                <h3 className="mb-2 font-display text-sm font-bold text-accent">
                  Development Philosophy
                </h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  I start with the problem, not the technology. Modern software
                  engineering is about understanding systems and using the best
                  tools available — including AI-augmented development — to build
                  better software faster.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
