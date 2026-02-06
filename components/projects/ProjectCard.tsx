"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card-hover group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
        {/* Category + Year badges */}
        <div className="absolute right-4 top-4 flex gap-2">
          <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
            {project.category}
          </span>
          <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-display text-xl font-bold text-foreground">
            {project.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>
        <p className="mb-4 text-xs text-muted-foreground">
          {project.role} &middot; {project.timeline}
        </p>
        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 6 && (
            <span className="rounded-full border border-border bg-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              +{project.stack.length - 6}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
