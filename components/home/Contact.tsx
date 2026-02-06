"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  Send,
  Clock,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "jkaharu2970@gmail.com",
    href: "mailto:jkaharu2970@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+254 714 478 086",
    href: "https://wa.me/254714478086",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Jeff Gicharu",
    href: "https://linkedin.com/in/jeff-gicharu-0924a4217",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "jeffgicharu",
    href: "https://github.com/jeffgicharu",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ctx: any;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          gsap.utils.toArray<HTMLElement>(".contact-reveal").forEach((el, i) => {
            gsap.fromTo(
              el,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                delay: i * 0.1,
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
    });

    return () => { ctx?.revert(); };
  }, []);

  return (
    <section id="contact" className="section-padding py-24 md:py-32">
      <div className="container-wide mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's build something great"
          description="Have a project in mind or just want to say hello? I'd love to hear from you."
          align="center"
        />

        <div className="mx-auto mt-8 grid max-w-5xl gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="contact-reveal lg:col-span-2">
            <div className="space-y-6">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-accent/30"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <link.icon className="h-4 w-4 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="truncate text-sm font-medium text-foreground">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-accent" />
                </a>
              ))}

              {/* Location & timezone */}
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-sm text-foreground">Nairobi, Kenya</span>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <Clock className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">GMT+3 (East Africa Time)</span>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  Available for opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-reveal lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-accent focus:ring-1 focus:ring-accent/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-accent focus:ring-1 focus:ring-accent/20"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-accent focus:ring-1 focus:ring-accent/20"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-accent focus:ring-1 focus:ring-accent/20"
                  placeholder="Tell me about your project..."
                />
              </div>

              <MagneticButton type="submit" variant="primary" className="w-full sm:w-auto">
                {submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </MagneticButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
