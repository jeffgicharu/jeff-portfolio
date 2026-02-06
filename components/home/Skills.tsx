"use client";

import { useEffect, useRef } from "react";
import {
  Code2,
  Server,
  Cloud,
  Blocks,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";

const categoryIcons: Record<string, typeof Code2> = {
  Frontend: Code2,
  Backend: Server,
  DevOps: Cloud,
  Architecture: Blocks,
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ctx: any;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          gsap.utils.toArray<HTMLElement>(".skill-card").forEach((el, i) => {
            gsap.fromTo(
              el,
              { opacity: 0, y: 40, scale: 0.97 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.7,
                delay: i * 0.1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 87%",
                  once: true,
                },
              }
            );
          });
        }, sectionRef);
      });
    });

    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-muted/30 py-24 md:py-32">
      <div className="container-wide mx-auto">
        <SectionHeading
          label="Skills"
          title="Tech stack & tools"
          description="The right tool for the right problem. Here's what I reach for most."
          align="center"
        />

        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Code2;
            return (
              <div
                key={category.title}
                className="skill-card rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-border-hover"
              >
                {/* Header */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-foreground/80 transition-colors duration-200 hover:border-accent/30 hover:text-accent"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Marquee of all skills */}
        <div className="mt-12 overflow-hidden">
          <div className="flex animate-marquee gap-8 whitespace-nowrap">
            {[...skillCategories.flatMap((c) => c.skills), ...skillCategories.flatMap((c) => c.skills)].map(
              (skill, i) => (
                <span
                  key={`${skill.name}-${i}`}
                  className="font-display text-sm font-medium uppercase tracking-wider text-muted-foreground/30"
                >
                  {skill.name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
