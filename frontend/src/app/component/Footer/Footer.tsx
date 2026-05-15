"use client";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { footerLinks } from "@/data/footer";
import { ASSETS } from "@/lib/constants";

const bgImageStyle: React.CSSProperties = {
  backgroundImage: `url(${ASSETS.footerBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

/**
 * Footer – brand, tagline, YouTube link, two link columns (same footerLinks), address, social icons.
 * aria-label on icon links improves accessibility; target="_blank" + rel="noreferrer" for external links.
 */
export function Footer() {
  return (
    <div style={bgImageStyle} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* Company block: name, tagline, YouTube CTA */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Kopi Kenangan
            </a>
            <p className="pt-4">
              Nikmati Kenangan Manis Setiap Tegukan – Kopi Berkualitas dengan Suasana Hangat
            </p>
            <a
              href="https://www.youtube.com/@arnobcorleone8570"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full"
            >
              Visit our YouTube Channel
            </a>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* Same footerLinks used twice with different key prefixes to avoid React key collision */}
            <div className="py-8 px-4">
              <h2 className="text-xl font-semibold sm:text-left mb-3">
                Important Links
              </h2>
              <ul className="space-y-3">
                {footerLinks.map((item, index) => (
                  <li key={`important-${index}`}>
                    <a
                      href={item.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h2 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h2>
              <ul className="space-y-3">
                {footerLinks.map((item, index) => (
                  <li key={`quick-${index}`}>
                    <a
                      href={item.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Address + social icons. aria-label for screen readers on icon-only links */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h2 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h2>
              <div>
                <p className="mb-3">email@example.com</p>
                <p>+49 123456789</p>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#" aria-label="Instagram">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#" aria-label="Facebook">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
