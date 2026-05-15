/**
 * App-wide static asset paths. All paths are under /public at build time.
 * as const makes the object readonly and literal types. Single source of truth for images.
 */
export const ASSETS = {
  logo: "/coffee_logo.png",
  heroImage: "/coffee2.png",
  bannerImage: "/coffee-white.png",
  bannerBg: "/coffee-texture.jpg",
  footerBg: "/coffee-footer.jpg",
} as const;
