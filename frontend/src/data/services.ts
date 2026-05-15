import type { ServiceItem } from "@/types";

/**
 * Coffee types for the Services grid. aosDelay (ms string) controls staggered AOS fade-up per card.
 */
export const servicesData: ServiceItem[] = [
  {
    id: 1,
    img: "/coffee2.png",
    name: "Espresso",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "/coffee2.png",
    name: "Americano",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: "/coffee2.png",
    name: "Cappuccino",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
];
