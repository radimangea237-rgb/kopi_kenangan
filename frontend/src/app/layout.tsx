import type { Metadata } from "next";
import "@/app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Preloader } from "@/components/Preloader/Preloader";

/**
 * Root layout – wraps every page in the app.
 * Server Component by default: no "use client". Metadata is exported for SEO.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://kopi-kenangan.vercel.app"),
  title: {
    default: "Kopi Kenangan – Nikmati Kopi Terbaik | Kedai Kopi Premium",
    template: "%s | Kopi Kenangan",
  },
  description:
    "Kopi Kenangan – Nikmati kenangan manis setiap tegukan dengan kopi berkualitas premium. Suasana hangat, biji kopi pilihan, dan layanan terbaik. Website modern responsif dibangun dengan Next.js, TypeScript, dan Tailwind CSS.",
  authors: [
    { name: "Arnob Mahmud", url: "https://www.arnobmahmud.com" },
    { name: "Arnob Mahmud", url: "mailto:contact@arnobmahmud.com" },
  ],
  creator: "Arnob Mahmud",
  publisher: "Arnob Mahmud",
  keywords: [
    "kopi",
    "kopi kenangan",
    "kedai kopi",
    "espresso",
    "americano",
    "cappuccino",
    "kopi terbaik",
    "kopi premium",
    "biji kopi",
    "kopi segar",
    "barista",
    "website kedai kopi",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "Kopi Kenangan – Nikmati Kopi Terbaik | Kedai Kopi Premium",
    description:
      "Nikmati kopi berkualitas premium dengan suasana hangat di Kopi Kenangan. Segar, nikmat, dan berkenang.",
    type: "website",
    images: [
      { url: "/coffee_logo.png", alt: "Kopi Kenangan logo" },
      { url: "/favicon.ico", alt: "Kopi Kenangan favicon" },
    ],
    url: "https://kopi-kenangan.vercel.app/",
    siteName: "Kopi Kenangan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kopi Kenangan – Nikmati Kopi Terbaik | Kedai Kopi Premium",
    description:
      "Nikmati kopi berkualitas premium dengan suasana hangat di Kopi Kenangan.",
    images: ["/coffee_logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kopi-kenangan.vercel.app/",
  },
};

/**
 * RootLayout – receives `children` (the page content). Renders <html> and <body>.
 * suppressHydrationWarning avoids console errors when browser extensions alter the DOM (e.g. add attributes).
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden antialiased"
        suppressHydrationWarning
      >
        <Preloader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
