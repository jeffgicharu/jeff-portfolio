"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/jeffgicharu", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/jeff-gicharu-0924a4217", icon: Linkedin },
  { label: "Email", href: "mailto:jkaharu2970@gmail.com", icon: Mail },
  { label: "Phone", href: "tel:+254714478086", icon: Phone },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="section-padding container-wide py-16 md:py-20">
        {/* Top area */}
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Link href="/" className="font-display text-3xl font-bold text-foreground">
              Jeff Gicharu<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 max-w-md text-muted-foreground">
              Full-Stack Developer based in Nairobi, Kenya. Building software that
              solves real problems with the best tools available.
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-accent hover:bg-accent/10 md:h-14 md:w-14"
            aria-label="Scroll to top"
          >
            <ArrowUpRight className="h-5 w-5 -rotate-45 text-muted-foreground transition-all duration-300 group-hover:rotate-0 group-hover:text-accent" />
          </button>
        </div>

        {/* Links grid */}
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Connect
            </h4>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-foreground/70 transition-colors hover:text-accent"
                  >
                    <link.icon className="h-3.5 w-3.5" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Availability
            </h4>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm text-foreground/70">
                Available for opportunities
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Based in Nairobi, Kenya (GMT+3)
            </p>
            <a
              href="mailto:jkaharu2970@gmail.com"
              className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-accent transition-opacity hover:opacity-80"
            >
              jkaharu2970@gmail.com
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Jeff Gicharu. Designed &amp; built from Nairobi.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
