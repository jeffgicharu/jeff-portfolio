"use client";

import { useEffect, useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences, education } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ctx: any;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          // Animate the timeline line
          gsap.fromTo(
            ".timeline-line-fill",
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".timeline-container",
                start: "top 70%",
                end: "bottom 50%",
                scrub: 1,
              },
            }
          );

          // Animate each item
          gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((el, i) => {
            gsap.fromTo(
              el,
              { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
              {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
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
    <section ref={sectionRef} className="section-padding py-24 md:py-32">
      <div className="container-wide mx-auto">
        <SectionHeading
          label="Experience"
          title="Where I've built"
          description="From Kenya's largest telecom to building production platforms."
          align="center"
        />

        <div className="timeline-container relative mx-auto mt-8 max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-border md:left-1/2 md:-translate-x-1/2">
            <div
              className="timeline-line-fill absolute left-0 top-0 h-full w-full origin-top bg-accent"
            />
          </div>

          {/* Experience items */}
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`timeline-item relative mb-12 pl-12 md:w-1/2 md:pl-0 ${
                i % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute left-[11px] top-1 z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-accent bg-background md:left-auto ${
                  i % 2 === 0
                    ? "md:right-[-9px]"
                    : "md:left-[-9px]"
                }`}
              >
                <div className="h-2 w-2 rounded-full bg-accent" />
              </div>

              {/* Card */}
              <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-border-hover">
                <div className={`mb-3 flex items-center gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  <Briefcase className="h-4 w-4 text-accent" />
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-accent">
                    {exp.period}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {exp.role}
                </h3>
                <p className="mb-3 font-display text-sm font-medium text-muted-foreground">
                  {exp.company} — {exp.location}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                {/* Key achievements */}
                <ul className={`space-y-1.5 ${i % 2 === 0 ? "md:text-left" : ""}`}>
                  {exp.achievements.slice(0, 4).map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-foreground/70">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      {a}
                    </li>
                  ))}
                </ul>
                {/* Tech stack */}
                <div className={`mt-4 flex flex-wrap gap-1 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
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
            </div>
          ))}

          {/* Education */}
          <div className="timeline-item relative pl-12 md:w-1/2 md:pr-12 md:pl-0 md:text-right">
            <div className="absolute left-[11px] top-1 z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-accent bg-background md:left-auto md:right-[-9px]">
              <div className="h-2 w-2 rounded-full bg-accent" />
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="mb-3 flex items-center gap-2 md:justify-end">
                <GraduationCap className="h-4 w-4 text-accent" />
                <span className="font-display text-xs font-bold uppercase tracking-widest text-accent">
                  {education.period}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                {education.degree}
              </h3>
              <p className="text-sm text-muted-foreground">
                {education.university}
              </p>
              <p className="mt-1 text-xs font-medium text-accent">
                {education.honors}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
