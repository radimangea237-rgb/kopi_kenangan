"use client";

import Image from "next/image";
import { GiCoffeeBeans } from "react-icons/gi";
import { FaMugHot } from "react-icons/fa";
import { IoSnow } from "react-icons/io5";
import { ASSETS } from "@/lib/constants";
import { bannerContent } from "@/data/content";

/* Inline style object for dynamic bg image (Tailwind can't use ASSETS in class names). Typed as CSSProperties for TS */
const bgImageStyle: React.CSSProperties = {
  backgroundImage: `url(${ASSETS.bannerBg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

/**
 * Banner – "Premium Blend Coffee" section: image, copy, feature icons (GiCoffeeBeans, FaMugHot, IoSnow), Tea Lover sidebar.
 * id="about" is the target for Navbar /#about link.
 */
export function Banner() {
  return (
    <>
      <span id="about" />
      <div style={bgImageStyle}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div data-aos="zoom-in">
                <Image
                  src={ASSETS.bannerImage}
                  alt="Premium blend coffee"
                  width={430}
                  height={430}
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
              </div>
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive"
                >
                  {bannerContent.headline}
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-5"
                >
                  {bannerContent.description}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <GiCoffeeBeans className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-amber-100 text-amber-800" />
                      <span>{bannerContent.features[0]}</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <FaMugHot className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200 text-orange-800" />
                      <span>{bannerContent.features[1]}</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <IoSnow className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-sky-100 text-sky-700" />
                      <span>{bannerContent.features[2]}</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h2 className="text-2xl font-semibold font-cursive">
                      {bannerContent.teaLoverTitle}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {bannerContent.teaLoverDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
