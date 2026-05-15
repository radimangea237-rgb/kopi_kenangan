/**
 * Type declaration for the 'aos' package (no @types/aos). Tells TypeScript how AOS is used in page.tsx.
 */
declare module "aos" {
  interface AOSOptions {
    offset?: number;
    duration?: number;
    easing?: string;
    delay?: number;
  }
  function init(options?: AOSOptions): void;
  function refresh(): void;
}
