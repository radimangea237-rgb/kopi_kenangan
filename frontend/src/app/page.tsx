"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { Banner } from "@/components/Banner/Banner";
import { AppStore } from "@/components/AppStore/AppStore";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Footer } from "@/components/Footer/Footer";

/**
 * Home page – the only route in this app (/).
 * Composes all sections in order: Navbar → Hero → Services → Banner → AppStore → Testimonials → Footer.
 * "use client" is required because we use useEffect and AOS (client-only).
 */
export default function HomePage() {
  // Run once on mount: initialise AOS for scroll animations site-wide. Empty deps [] = run once.
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer />
    </div>
  );
}
