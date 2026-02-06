"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a";
  href?: string;
  target?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
}

export default function MagneticButton({
  children,
  className,
  strength = 0.3,
  as = "button",
  href,
  target,
  onClick,
  type = "button",
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = cn(
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-display text-sm font-semibold tracking-wide uppercase transition-all duration-500 ease-out-expo",
    variant === "primary" &&
      "bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/20",
    variant === "secondary" &&
      "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
    variant === "ghost" &&
      "text-foreground hover:text-accent",
    className
  );

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: position.x === 0 ? "transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)" : "none",
  };

  const Component = as as any;

  return (
    <Component
      ref={ref}
      className={baseStyles}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      href={href}
      target={target}
      type={as === "button" ? type : undefined}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {/* Hover fill effect for primary */}
      {variant === "primary" && (
        <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      )}
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
