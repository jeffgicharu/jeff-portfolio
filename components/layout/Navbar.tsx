"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-[100] transition-all duration-500 ease-out-expo",
          isScrolled
            ? "border-b border-border/50 bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav className="section-padding mx-auto flex h-16 max-w-[1440px] items-center justify-between md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 font-display text-xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
          >
            JG<span className="text-accent">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 font-display text-sm font-medium tracking-wide transition-colors duration-300",
                    isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}
            <div className="ml-3 flex items-center gap-2">
              <ThemeToggle />
              <a
                href="mailto:jkaharu2970@gmail.com"
                className="ml-2 rounded-full bg-accent px-5 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="relative z-50 flex h-10 w-10 items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative h-4 w-5">
                <span
                  className={cn(
                    "absolute left-0 h-[1.5px] w-full bg-foreground transition-all duration-300",
                    isMobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-foreground transition-all duration-300",
                    isMobileOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-[1.5px] w-full bg-foreground transition-all duration-300",
                    isMobileOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[90] bg-background transition-all duration-500 ease-out-expo md:hidden",
          isMobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-display text-4xl font-bold transition-all duration-500",
                  isActive ? "text-accent" : "text-foreground",
                  isMobileOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: isMobileOpen ? `${150 + i * 75}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="mailto:jkaharu2970@gmail.com"
            className={cn(
              "mt-4 rounded-full bg-accent px-8 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-accent-foreground transition-all duration-500",
              isMobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
            style={{ transitionDelay: isMobileOpen ? "450ms" : "0ms" }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}
