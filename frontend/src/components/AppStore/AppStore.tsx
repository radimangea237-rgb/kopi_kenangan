"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/constants";
import { appStoreContent } from "@/data/content";

/* Background from constants; style object needed because URL comes from JS */
const backgroundStyle: React.CSSProperties = {
  backgroundImage: `url(${ASSETS.appStoreBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

/**
 * AppStore – promo strip: "Kopi Kenangan tersedia untuk Android dan iOS" + Play Store & App Store badge images.
 * Links (href="#") are placeholders; replace with real store URLs when deploying.
 */
export function AppStore() {
  return (
    <div className="py-14" style={backgroundStyle}>
      <div className="container">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="space-y-6 max-w-xl mx-auto"
          >
            <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">
              {appStoreContent.title}
            </h1>
            <div className="flex flex-wrap justify-center sm:justify-start items-center">
              <a href="#">
                <Image
                  src={ASSETS.playStoreImg}
                  alt={appStoreContent.playStoreAlt}
                  width={200}
                  height={80}
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <Image
                  src={ASSETS.appStoreImg}
                  alt={appStoreContent.appStoreAlt}
                  width={200}
                  height={80}
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}
