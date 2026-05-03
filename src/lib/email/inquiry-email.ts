/** Escape text for safe inclusion in HTML email bodies. */
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export interface InquiryRequestFormData {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly eventType: string;
  readonly eventDate?: string;
  readonly guestCount?: string;
  readonly budget?: string;
  readonly specialRequests?: string;
  readonly howDidYouHear?: string;
  readonly services: readonly string[];
}

const eventTypeMap: Record<string, string> = {
  wedding: "Γάμος",
  christening: "Βάπτιση",
  party: "Πάρτι",
  corporate: "Εταιρική εκδήλωση",
  other: "Άλλο",
};

export function buildOwnerInquiryEmailHtml(data: InquiryRequestFormData): string {
  const servicesBlock =
    data.services.length > 0
      ? `
          <div class="section">
            <div class="label">Υπηρεσίες ενδιαφέροντος:</div>
            <div class="value">
              ${data.services.map((s) => `• ${escapeHtml(s)}`).join("<br>")}
            </div>
          </div>
          `
      : "";
  const special = data.specialRequests
    ? `
          <div class="highlight">
            <div class="label">Ειδικές απαιτήσεις:</div>
            <div class="value">${escapeHtml(data.specialRequests)}</div>
          </div>
          `
    : "";
  const hear = data.howDidYouHear
    ? `
          <div class="section">
            <div class="label">Πώς μας βρήκατε:</div>
            <div class="value">${escapeHtml(data.howDidYouHear)}</div>
          </div>
          `
    : "";
  const eventLabel = escapeHtml(eventTypeMap[data.eventType] || data.eventType);
  return `
    <!DOCTYPE html>
    <html><head><meta charset="utf-8"></head><body style="font-family:system-ui,sans-serif;line-height:1.6;color:#333">
      <div style="max-width:600px;margin:0 auto;padding:20px">
        <h1 style="color:#8B7355">Νέο αίτημα πληροφοριών</h1>
        <p><strong>Όνομα:</strong> ${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}<br>
        <strong>Email:</strong> ${escapeHtml(data.email)}<br>
        <strong>Τηλέφωνο:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>Τύπος:</strong> ${eventLabel}</p>
        ${data.eventDate ? `<p><strong>Ημερομηνία:</strong> ${escapeHtml(data.eventDate)}</p>` : ""}
        ${data.guestCount ? `<p><strong>Καλεσμένοι:</strong> ${escapeHtml(data.guestCount)}</p>` : ""}
        ${data.budget ? `<p><strong>Budget:</strong> ${escapeHtml(data.budget)}</p>` : ""}
        ${servicesBlock}
        ${special}
        ${hear}
      </div>
    </body></html>
  `;
}

export function buildCustomerInquiryEmailHtml(data: InquiryRequestFormData): string {
  const eventLabel = escapeHtml(eventTypeMap[data.eventType] || data.eventType);
  return `
    <!DOCTYPE html>
    <html><head><meta charset="utf-8"></head><body style="font-family:system-ui,sans-serif;line-height:1.7;color:#333">
      <div style="max-width:600px;margin:0 auto;padding:24px">
        <h1 style="color:#8B7355">Λάβαμε το αίτημά σας</h1>
        <p>Γεια σας ${escapeHtml(data.firstName)},</p>
        <p>Σας ευχαριστούμε για το ενδιαφέρον σας για <strong>${eventLabel}</strong>.</p>
        <p>Η ομάδα μας θα επικοινωνήσει μαζί σας εντός 24 ωρών.</p>
        <p>Κτήμα Ωρίων — Κερατέα<br>Tηλ. 2299 068812 · info@ktimaorion.gr</p>
      </div>
    </body></html>
  `;
}

export interface ContactFormPayload {
  readonly name: string;
  readonly email: string;
  readonly phone?: string;
  readonly subject: string;
  readonly message: string;
}

export function buildContactOwnerEmailHtml(data: ContactFormPayload): string {
  const fullName = escapeHtml(data.name);
  return `
    <!DOCTYPE html>
    <html><head><meta charset="utf-8"></head><body style="font-family:system-ui,sans-serif">
      <h2>Νέο μήνυμα επικοινωνίας</h2>
      <p><strong>Όνομα:</strong> ${fullName}<br>
      <strong>Email:</strong> ${escapeHtml(data.email)}<br>
      ${data.phone ? `<strong>Τηλ.:</strong> ${escapeHtml(data.phone)}<br>` : ""}
      <strong>Θέμα:</strong> ${escapeHtml(data.subject)}</p>
      <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(data.message)}</pre>
    </body></html>
  `;
}
