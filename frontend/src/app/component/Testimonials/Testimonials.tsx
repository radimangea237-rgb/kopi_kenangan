"use client";

import Image from "next/image";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import { testimonialData } from "@/data/testimonials";

/**
 * Testimonials – carousel of customer review cards (avatar, quote, name) via react-slick.
 * settings typed as Settings from react-slick; responsive breakpoints control slidesToShow (3 → 2 → 1).
 */
export function Testimonials() {
  const settings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Testimonials
          </h1>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {/* Each slide is a card; data.img can be external (picsum.photos) – allowed in next.config images.remotePatterns */}
            {testimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                  <div className="mb-4">
                    <Image
                      src={data.img}
                      alt={data.name}
                      width={80}
                      height={80}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h2 className="text-xl font-bold text-black/80 font-cursive2">
                        {data.name}
                      </h2>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
