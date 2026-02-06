"use client";

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Skills from "@/components/home/Skills";
import Experience from "@/components/home/Experience";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  // Configure ScrollTrigger: ignore mobile address bar resize to prevent jank
  useEffect(() => {
    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      ScrollTrigger.config({
        ignoreMobileResize: true,
      });
    });
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
