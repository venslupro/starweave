# StarWeave 星织 — 太空计算

Bilingual (中文 / English) landing page for StarWeave's orbital compute platform, built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 — `src/proxy.ts` redirects to `/zh` or `/en` based on the `NEXT_LOCALE` cookie or the browser's `Accept-Language`.

## Structure

- `src/i18n/dictionaries.ts` — all page copy in both languages (`en` is typed against `zh`)
- `src/app/[lang]/` — root layout and the landing page, statically generated for each locale
- `src/components/` — nav with language switch, hero orbit illustration, scroll reveal, copy-email button

## Deploy

```bash
vercel --prod
```
