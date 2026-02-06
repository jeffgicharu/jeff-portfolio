"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  splitBy?: "char" | "word";
  animation?: "fade-up" | "slide-up" | "scramble";
}

export default function TextReveal({
  children,
  className,
  as: Component = "span",
  delay = 0,
  splitBy = "char",
  animation = "fade-up",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      if (containerRef.current) {
        containerRef.current.querySelectorAll(".reveal-char").forEach((el) => {
          (el as HTMLElement).style.opacity = "1";
          (el as HTMLElement).style.transform = "none";
        });
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const chars = containerRef.current?.querySelectorAll(".reveal-char");
          chars?.forEach((char, i) => {
            const el = char as HTMLElement;
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0) rotate(0deg)";
            }, delay + i * (splitBy === "char" ? 30 : 80));
          });
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [delay, splitBy]);

  const units = splitBy === "char" ? children.split("") : children.split(" ");

  return (
    <Component ref={containerRef as any} className={cn("inline-block", className)} aria-label={children}>
      {units.map((unit, i) => (
        <span
          key={i}
          className="reveal-char inline-block"
          style={{
            opacity: 0,
            transform: animation === "slide-up" ? "translateY(110%)" : "translateY(20px) rotate(2deg)",
            transition: `opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1), transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)`,
            transitionDelay: `${delay + i * (splitBy === "char" ? 30 : 80)}ms`,
          }}
          aria-hidden="true"
        >
          {unit === " " ? "\u00A0" : unit}
          {splitBy === "word" && i < units.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Component>
  );
}
