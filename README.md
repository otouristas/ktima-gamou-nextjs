# Ktima Orion — orion-elegance-events

Marketing site for **Κτήμα Ωρίων** (Ktima Orion), an event venue in Keratea, Attica (weddings, baptisms, corporate events).

- **Production:** [https://ktimaorion.gr](https://ktimaorion.gr)
- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, Resend (email).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Environment variables (Vercel)

| Variable        | Description                                      |
|----------------|--------------------------------------------------|
| `RESEND_API_KEY` | Resend API key for `/api/send-email`          |
| `RESEND_FROM`    | Optional. Verified sender, e.g. `Κτήμα Ωρίων <info@ktimaorion.gr>` |

## Image optimisation (optional)

```bash
npm run images:optimize
```

Processes raster files under `public/images` and `public/final-photos` (AVIF/WebP derivatives + `public/images/manifest.json`).

## Email

See [RESEND_SETUP.md](./RESEND_SETUP.md).
