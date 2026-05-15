"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCoffee } from "react-icons/fa";
import { navMenuItems } from "@/data/menu";
import { ASSETS } from "@/lib/constants";

/**
 * Navbar – top bar with logo, nav links, and Order button.
 * Uses Next.js Image for optimized logo; data from @/data/menu; AOS for fade-down on scroll.
 */
export function Navbar() {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center">
          {/* Logo + brand name. data-aos-once="true" = animate only once when in view */}
          <div data-aos="fade-down" data-aos-once="true">
            <Link
              href="/"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <Image
                src={ASSETS.logo}
                alt="Kopi Kenangan logo"
                width={56}
                height={56}
                className="w-14"
              />
              Kopi Kenangan
            </Link>
          </div>
          {/* Nav links (hidden on small screens) + Order CTA. key={menu.id} required when mapping */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex justify-between items-center gap-4"
          >
            <ul className="hidden sm:flex items-center gap-4">
              {navMenuItems.map((menu) => (
                <li key={menu.id}>
                  <Link
                    href={menu.link}
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/login"
                className="inline-block text-white/70 hover:text-white px-4 py-2 rounded-full transition duration-200"
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="inline-block bg-white text-secondary px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-200"
              >
                Daftar
              </Link>
            </div>
            <Link
              href="/order"
              className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3"
            >
              Pesan
              <FaCoffee className="text-xl text-white drop-shadow-sm" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
