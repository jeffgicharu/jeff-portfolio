"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        {/* Large 404 */}
        <h1 className="font-display text-[8rem] font-extrabold leading-none text-foreground/5 sm:text-[12rem]">
          404
        </h1>

        {/* Message */}
        <div className="-mt-10 sm:-mt-16">
          <p className="font-display text-display-sm font-bold text-foreground">
            Page not found
          </p>
          <p className="mt-3 text-lg text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton as="a" href="/" variant="primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </MagneticButton>
          <MagneticButton as="a" href="/projects" variant="secondary">
            View Projects
          </MagneticButton>
        </div>
      </div>
    </main>
  );
}
