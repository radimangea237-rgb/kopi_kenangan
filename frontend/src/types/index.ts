/**
 * Shared TypeScript interfaces for the Kopi Kenangan app.
 * Used by src/data/* and components so props and data are type-safe (no 'any').
 */

/** One item in the top nav: id for React key, name for label, link for href (e.g. /#services) */
export interface NavMenuItem {
  id: number;
  name: string;
  link: string;
}

/** One coffee card in Services: img path, name, description, aosDelay for staggered AOS animation */
export interface ServiceItem {
  id: number;
  img: string;
  name: string;
  description: string;
  aosDelay: string;
}

/** One testimonial: name, quote text, img URL (can be external e.g. picsum.photos) */
export interface TestimonialItem {
  id: number;
  name: string;
  text: string;
  img: string;
}

/** One footer link: title and href. Reused for "Important Links" and "Quick Links" columns */
export interface FooterLinkItem {
  title: string;
  link: string;
}

/** One coffee menu item for the Menu page */
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  img: string;
}
