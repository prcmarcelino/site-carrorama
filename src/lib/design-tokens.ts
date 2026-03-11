/**
 * Design tokens for Carrorama - single source of truth for colors, spacing, typography.
 * Use these in components when Tailwind utilities are not enough.
 */

export const colors = {
  primaryDark: "#14181e",
  primaryDarkAlt: "#1a202c",
  accent: "#ff9900",
  accentAlt: "#ff8c00",
  success: "#66bb56",
  error: "#dc2626",
  cream: "#faf5ed",
  gray: {
    50: "#f8f8f8",
    100: "#f2f2f2",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },
} as const;

export const spacing = {
  section: "5rem",
  sectionSm: "3rem",
  block: "2rem",
  element: "1rem",
} as const;

export const typography = {
  h1: "text-4xl md:text-5xl font-bold tracking-tight",
  h2: "text-3xl md:text-4xl font-bold tracking-tight",
  h3: "text-xl md:text-2xl font-bold",
  body: "text-base leading-relaxed",
  bodySm: "text-sm leading-relaxed",
  label: "text-sm font-medium uppercase tracking-wider",
} as const;
