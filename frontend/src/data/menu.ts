import type { NavMenuItem } from "@/types";

/**
 * Navigation menu items consumed by Navbar. Links use hash fragments (#services, #about) for in-page scroll.
 */
export const navMenuItems: NavMenuItem[] = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Menu", link: "/menu" },
  { id: 3, name: "About", link: "/about" },
];
