"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Calendar,
  User,
  Layers,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import { projects, type Project } from "@/data/projects";

export default function ProjectCaseStudy({ project }: { project: Project }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray<HTMLElement>(".case-reveal").forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: i * 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                once: true,
              },
            }
          );
        });
      });
    });
  }, [project]);

  // Get prev/next projects
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 md:pt-32">
          <div className="section-padding container-wide mx-auto">
            <Link
              href="/projects"
              className="group mb-8 inline-flex items-center gap-2 font-display text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All Projects
            </Link>
            <h1 className="font-display text-display-lg font-extrabold text-foreground">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
              {project.tagline}
            </p>

            {/* Meta row */}
            <div className="mt-8 flex flex-wrap gap-6 border-b border-border pb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-accent" />
                <span className="text-sm text-foreground">{project.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent" />
                <span className="text-sm text-foreground">{project.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-accent" />
                <span className="text-sm capitalize text-foreground">
                  {project.category}
                </span>
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-accent hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Site
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-accent hover:underline"
                >
                  <Github className="h-3.5 w-3.5" />
                  Source Code
                </a>
              )}
            </div>
          </div>

          {/* Hero image */}
          <div className="section-padding container-wide mx-auto mt-8">
            <div className="case-reveal overflow-hidden rounded-2xl border border-border">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </section>

        {/* Case Study Content */}
        <section className="section-padding container-wide mx-auto py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            {/* Tech Stack */}
            <div className="case-reveal mb-12">
              <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* The Challenge */}
            <div className="case-reveal mb-12">
              <h2 className="mb-4 font-display text-display-sm font-bold text-foreground">
                The Challenge
              </h2>
              <p className="text-lg leading-relaxed text-foreground/80">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="case-reveal mb-12">
              <h2 className="mb-4 font-display text-display-sm font-bold text-foreground">
                The Solution
              </h2>
              <p className="text-lg leading-relaxed text-foreground/80">
                {project.solution}
              </p>
            </div>

            {/* Key Features */}
            <div className="case-reveal mb-12">
              <h2 className="mb-6 font-display text-display-sm font-bold text-foreground">
                Key Features
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <h4 className="mb-2 font-display text-base font-bold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional images */}
            {project.images.length > 1 && (
              <div className="case-reveal mb-12 grid gap-4 sm:grid-cols-2">
                {project.images.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-border"
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${i + 2}`}
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Technical Highlights */}
            <div className="case-reveal mb-12">
              <h2 className="mb-4 font-display text-display-sm font-bold text-foreground">
                Technical Highlights
              </h2>
              <ul className="space-y-3">
                {project.technicalHighlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span className="text-base text-foreground/80">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results & Impact */}
            <div className="case-reveal mb-12">
              <h2 className="mb-6 font-display text-display-sm font-bold text-foreground">
                Results &amp; Impact
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {project.results.map((result) => (
                  <div
                    key={result.metric}
                    className="rounded-xl border border-border bg-card p-4 text-center"
                  >
                    <div className="font-display text-2xl font-extrabold text-accent">
                      {result.value}
                    </div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Prev / Next navigation */}
        <section className="border-t border-border">
          <div className="section-padding container-wide mx-auto grid grid-cols-2 gap-4 py-8">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 rounded-xl p-4 transition-colors hover:bg-card"
              >
                <ArrowLeft className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-x-1" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Previous
                  </p>
                  <p className="font-display text-sm font-bold text-foreground">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center justify-end gap-3 rounded-xl p-4 text-right transition-colors hover:bg-card"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Next
                  </p>
                  <p className="font-display text-sm font-bold text-foreground">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
