"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const categories = [
  { value: "all", label: "All Projects" },
  { value: "full-stack", label: "Full-Stack" },
  { value: "frontend", label: "Frontend" },
  { value: "devops", label: "DevOps" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [filtered, setFiltered] = useState(projects);

  useEffect(() => {
    setFiltered(
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter)
    );
  }, [filter]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray<HTMLElement>(".project-grid-item").forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: i * 0.1,
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
  }, [filtered]);

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen pt-24 md:pt-32">
        <div className="section-padding container-wide mx-auto">
          <SectionHeading
            label="Projects"
            title="Work that ships"
            description="Production software built for real users. Every project starts with a problem worth solving."
          />

          {/* Filter tabs */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={cn(
                  "rounded-full px-5 py-2.5 font-display text-xs font-bold uppercase tracking-widest transition-all duration-300",
                  filter === cat.value
                    ? "bg-accent text-accent-foreground"
                    : "border border-border bg-card text-muted-foreground hover:border-accent/30 hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <div key={project.slug} className="project-grid-item">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
