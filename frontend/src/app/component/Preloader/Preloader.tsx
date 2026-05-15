"use client";

import { useEffect, useState } from "react";
import { IoMdCafe } from "react-icons/io";

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShow(false), 1000);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/90 text-white">
      <div className="flex flex-col items-center gap-5 p-6">
        <div className="animate-spin rounded-full border-8 border-white/20 border-t-white w-24 h-24" />
        <div className="flex flex-col items-center gap-2 text-center">
          <IoMdCafe className="text-5xl text-primary" />
          <p className="text-xl font-semibold">Memuat Kopi Kenangan...</p>
          <span className="text-sm text-gray-300">Tunggu sebentar, halaman segera tampil.</span>
        </div>
      </div>
    </div>
  );
}
