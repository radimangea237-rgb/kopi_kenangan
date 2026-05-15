"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/constants";
import { heroContent } from "@/data/content";

/**
 * Hero – main above-the-fold section: headline, CTA button, hero image with decorative badges.
 * Grid: 1 col on mobile, 2 on sm+; order-2/order-1 swaps text and image on mobile for better UX.
 */
export function Hero() {
  const titleParts = heroContent.title.split(heroContent.highlight);

  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Left: headline + CTA. order-2 on mobile so image appears first */}
          <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              {titleParts[0]}
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive"
              >
                {heroContent.highlight}
              </span>
              {titleParts[1]}
            </h1>
            <div data-aos="fade-up" data-aos-delay="400">
              <button
                type="button"
                className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
              >
                {heroContent.buttonText}
              </button>
            </div>
          </div>
          {/* Right: hero image (spin = CSS rotation) + overlay badges. position relative for absolute children */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
          >
            <Image
              data-aos-once="true"
              src={ASSETS.heroImage}
              alt="Coffee"
              width={450}
              height={450}
              className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin"
            />
            <div
              data-aos="fade-left"
              className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10"
            >
              <h2 className="text-white">Segar Nikmat</h2>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="0"
              className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10"
            >
              <h2 className="text-white">Kopi Premium</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
