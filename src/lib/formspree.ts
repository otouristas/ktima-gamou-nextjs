/**
 * Global Formspree endpoint for site forms (contact, request, etc.).
 * @see https://formspree.io/
 */
export const FORMSPREE_FORM_ACTION = "https://formspree.io/f/xlgzgyno" as const;

/**
 * Submits form fields to Formspree via POST with JSON (SPA-friendly).
 */
export async function submitToFormspree(
  fields: Record<string, string | undefined>
): Promise<Response> {
  const body: Record<string, string> = {};
  for (const [key, value] of Object.entries(fields)) {
    if (value !== undefined && value !== "") {
      body[key] = value;
    }
  }
  return fetch(FORMSPREE_FORM_ACTION, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}
