"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 10, suffix: "+", label: "Production Apps" },
  { value: 100, suffix: "+", label: "Users Served" },
  { value: 3, suffix: "+", label: "Years Building" },
  { value: 11, suffix: "", label: "Sites Managed" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ctx: any;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          gsap.utils.toArray<HTMLElement>(".about-reveal").forEach((el, i) => {
            gsap.fromTo(
              el,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: i * 0.1,
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
    <section
      ref={sectionRef}
      id="about"
      className="section-padding relative overflow-hidden py-24 md:py-32"
    >
      <div className="container-wide mx-auto">
        <SectionHeading
          label="About"
          title="The developer behind the code"
        />

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Photo area */}
          <div className="about-reveal lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted">
              <img
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&q=80"
                alt="Jeff Gicharu — Full-Stack Developer"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-border/50 bg-card/80 p-4 backdrop-blur-md">
                <p className="font-display text-sm font-bold text-foreground">
                  BSc. Computer Technology
                </p>
                <p className="text-xs text-muted-foreground">
                  JKUAT — Second Class Honors, Upper Division
                </p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="lg:col-span-7">
            <div className="about-reveal">
              <p className="text-lg leading-relaxed text-foreground/80">
                Most engineers specialize in one stack. I believe modern software
                engineering isn&apos;t about memorizing syntax — it&apos;s about{" "}
                <span className="font-semibold text-foreground">
                  understanding systems, making smart decisions, and using the
                  best tools available
                </span>{" "}
                to build better software faster.
              </p>
            </div>

            <div className="about-reveal mt-6">
              <p className="text-lg leading-relaxed text-foreground/80">
                From building the operations platform at{" "}
                <span className="font-semibold text-accent">Safaricom</span> —
                Kenya&apos;s largest telecom — to architecting offline-first PWAs for
                field agents at{" "}
                <span className="font-semibold text-accent">M-taka</span>, I
                tackle problems across the full stack. React frontends, Django
                APIs, Nginx infrastructure, M-Pesa integrations — whatever the
                problem demands.
              </p>
            </div>

            <div className="about-reveal mt-6">
              <p className="text-lg leading-relaxed text-foreground/80">
                I use AI-augmented development. AI handles syntax and boilerplate
                while I focus on what matters:{" "}
                <span className="font-semibold text-foreground">
                  system design, architecture, and trade-offs.
                </span>
              </p>
            </div>

            {/* Stats grid */}
            <div className="about-reveal mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="font-display text-3xl font-extrabold text-foreground md:text-4xl">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="about-reveal mt-10">
              <a
                href="/resume"
                className="group inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-accent transition-opacity hover:opacity-80"
              >
                View Full Resume
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
