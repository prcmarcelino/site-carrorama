/**
 * Merge class names for Tailwind. Minimal deps - no clsx.
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

/** Sanitize string for display - escape HTML to prevent XSS */
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (c) => map[c] ?? c);
}

/** Trim and limit length for form inputs */
export function sanitizeInput(value: string, maxLength: number): string {
  return value.trim().slice(0, maxLength);
}
