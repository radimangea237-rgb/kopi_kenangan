"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { servicesData } from "@/data/services";

/**
 * Services – grid of coffee cards (Espresso, Americano, Cappuccino).
 * id="services" is the target for Navbar link /#services. Staggered AOS delay per card from data.
 */
export function Services() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Anchor for in-page link from Navbar (e.g. /#services) */}
      <span id="services" />
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Pilihan Kopi Terbaik Kami
            </h1>
          </div>
          {/* Preloader skeleton cards */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
              {[...Array(3)].map((_, index) => (
                <div
                  key={`skeleton-${index}`}
                  className="rounded-2xl bg-white shadow-xl max-w-[300px] w-full overflow-hidden"
                >
                  <div className="h-[122px] bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />
                  <div className="p-4 text-center space-y-3">
                    <div className="h-6 bg-gray-200 animate-pulse rounded" />
                    <div className="h-4 bg-gray-200 animate-pulse rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Actual content with fade-in animation */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center animate-fadeIn">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  data-aos="fade-up"
                  data-aos-delay={service.aosDelay}
                  className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                >
                  <div className="h-[122px]">
                    <Image
                      src={service.img}
                      alt={service.name}
                      width={200}
                      height={122}
                      className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h2 className="text-xl font-bold">{service.name}</h2>
                    <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
