# Resend email setup (Vercel)

Transactional email is sent from the **Next.js Route Handler** [`src/app/api/send-email/route.ts`](src/app/api/send-email/route.ts).

## Payloads

### 1. Contact / inquiry (Epikoinonia, Contact component)

`POST /api/send-email` with JSON:

```json
{
  "type": "contact",
  "name": "Full Name",
  "email": "user@example.com",
  "phone": "+30...",
  "subject": "Subject line",
  "message": "Message body"
}
```

### 2. Detailed request (Request page)

```json
{
  "type": "request",
  "firstName": "...",
  "lastName": "...",
  "email": "...",
  "phone": "...",
  "eventType": "wedding",
  "eventDate": "2026-06-01",
  "guestCount": "120",
  "budget": "",
  "specialRequests": "",
  "howDidYouHear": "",
  "services": []
}
```

## Vercel configuration

1. Create a [Resend](https://resend.com) API key.
2. In the Vercel project: **Settings → Environment Variables** add:
   - `RESEND_API_KEY` — production (and preview if needed).
   - Optional: `RESEND_FROM` — must use a domain you have verified in Resend (e.g. `Κτήμα Ωρίων <info@ktimaorion.gr>`). If omitted, the handler falls back to Resend’s onboarding sender (suitable for tests only).

3. Redeploy after changing variables.

## Local testing

Add the same variables to `.env.local`:

```bash
RESEND_API_KEY=re_...
# RESEND_FROM="Κτήμα Ωρίων <info@ktimaorion.gr>"
```

Run `npm run dev` and submit the contact or request form.

## Troubleshooting

- **401 / invalid key:** Check `RESEND_API_KEY` in Vercel matches the Resend dashboard.
- **Domain not verified:** Use `onboarding@resend.dev` until your domain is verified, or set `RESEND_FROM` to a verified domain address.
- **Logs:** Vercel → Project → Logs → filter by `/api/send-email`.
