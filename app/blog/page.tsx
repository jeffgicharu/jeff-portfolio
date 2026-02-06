"use client";

import Link from "next/link";
import { ArrowUpRight, Rss } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import SectionHeading from "@/components/ui/SectionHeading";

// Blog posts data — add new posts here
const blogPosts: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}[] = [
  {
    slug: "building-offline-first-pwa",
    title: "Building an Offline-First PWA for Field Agents in Kenya",
    excerpt:
      "How I designed an IndexedDB-based offline data layer with write-ahead queues for field agents working in areas with no internet connectivity.",
    date: "2026-01-15",
    readTime: "8 min read",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    slug: "ai-augmented-development",
    title: "AI-Augmented Development: How I Ship 10x Faster",
    excerpt:
      "My approach to using AI as a development multiplier — letting it handle syntax while I focus on system design and architecture decisions.",
    date: "2025-12-20",
    readTime: "6 min read",
    category: "Workflow",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
  },
  {
    slug: "vps-hardening-guide",
    title: "Hardening a Production VPS: A Practical Guide",
    excerpt:
      "Everything I learned setting up and securing a production VPS — from Fail2Ban to Nginx configs, SSL certificates, and automated patching.",
    date: "2025-11-10",
    readTime: "10 min read",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
  },
];

export default function BlogPage() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen pt-24 md:pt-32">
        <div className="section-padding container-wide mx-auto">
          <div className="flex items-end justify-between">
            <SectionHeading
              label="Blog"
              title="Thoughts & learnings"
              description="Writing about architecture decisions, development workflows, and lessons from shipping production software."
            />
          </div>

          {blogPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      <span>&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="mb-3 font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1 font-display text-sm font-semibold text-accent">
                      Read More
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <Rss className="mx-auto mb-4 h-12 w-12 text-muted-foreground/30" />
              <h3 className="font-display text-xl font-bold text-foreground">
                Coming soon
              </h3>
              <p className="mt-2 text-muted-foreground">
                I&apos;m working on some posts. Check back soon!
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
