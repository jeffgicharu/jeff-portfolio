"use client";

import { useEffect, useRef } from "react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* -------------------------------------------------------
     Dot-grid canvas that subtly responds to mouse movement
  ------------------------------------------------------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let mouse = { x: -1000, y: -1000 };
    let animId: number;
    const DOT_SPACING = 40;
    const DOT_RADIUS = 1;
    const INFLUENCE_RADIUS = 150;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");
      const baseColor = isDark ? "255,255,255" : "0,0,0";
      const accentColor = isDark ? "249,115,22" : "234,88,12";

      const cols = Math.ceil(window.innerWidth / DOT_SPACING) + 1;
      const rows = Math.ceil(window.innerHeight / DOT_SPACING) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * DOT_SPACING;
          const y = j * DOT_SPACING;
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let alpha = 0.08;
          let radius = DOT_RADIUS;
          let color = baseColor;

          if (dist < INFLUENCE_RADIUS && !prefersReduced) {
            const factor = 1 - dist / INFLUENCE_RADIUS;
            alpha = 0.08 + factor * 0.4;
            radius = DOT_RADIUS + factor * 2;
            color = accentColor;
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${alpha})`;
          ctx.fill();
        }
      }

      if (!prefersReduced) {
        animId = requestAnimationFrame(draw);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  /* -------------------------------------------------------
     GSAP animations for hero content
  ------------------------------------------------------- */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let gsapInstance: typeof import("gsap") | null = null;

    import("gsap").then((mod) => {
      gsapInstance = mod;
      const gsap = mod.gsap;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: 0.3 }
      )
        .fromTo(
          ".hero-name .char",
          { opacity: 0, y: 80, rotateX: -90 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.04 },
          "-=0.3"
        )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.2"
        )
        .fromTo(
          ".hero-scroll",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.1"
        );
    });

    return () => {
      // cleanup if needed
    };
  }, []);

  const nameChars = "JEFF GICHARU".split("");

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Dot grid canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />

      {/* Radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-radial from-accent/[0.03] via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="section-padding relative z-10 mx-auto max-w-[1440px] py-32 md:py-40">
        <div className="max-w-4xl">
          {/* Availability badge */}
          <div className="hero-badge mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          {/* Name — split into characters for animation */}
          <h1
            className="hero-name mb-4 font-display text-display-xl font-extrabold text-foreground"
            style={{ perspective: "1000px" }}
            aria-label="Jeff Gicharu"
          >
            {nameChars.map((char, i) => (
              <span
                key={i}
                className="char inline-block"
                style={{ transformOrigin: "bottom center" }}
                aria-hidden="true"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          {/* Role */}
          <p className="hero-title mb-6 font-display text-display-sm font-medium text-muted-foreground">
            Full-Stack Developer{" "}
            <span className="text-accent">&mdash;</span>{" "}
            <span className="text-foreground/60">Nairobi, Kenya</span>
          </p>

          {/* Description */}
          <p className="hero-desc mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I start with the problem, not the technology. Building software in
            whatever language the problem requires — from offline-first PWAs for
            field agents to production platforms serving hundreds of users.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <div className="hero-cta">
              <MagneticButton
                as="a"
                href="#projects"
                variant="primary"
              >
                View My Work
              </MagneticButton>
            </div>
            <div className="hero-cta">
              <MagneticButton
                as="a"
                href="#contact"
                variant="secondary"
              >
                Get In Touch
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-12">
          <div className="flex flex-col items-center gap-2">
            <span className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Scroll
            </span>
            <div className="h-10 w-[1px] overflow-hidden">
              <div className="h-full w-full animate-pulse bg-gradient-to-b from-accent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
