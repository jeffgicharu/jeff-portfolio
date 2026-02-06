"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-up mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <span className="mb-3 inline-block font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
        {label}
      </span>
      <h2 className="font-display text-display-md font-bold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
