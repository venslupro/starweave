# StarWeave

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Deployed on Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000?logo=vercel)](https://starweave-livid.vercel.app)

> Bilingual (Chinese / English) website for StarWeave — orbital cloud compute that sends the data center into space.

StarWeave builds data centers in orbit: satellite constellations carry radiation-hardened AI chips, run on solar power, radiate heat into deep space and link up over inter-satellite lasers into a single compute network. Like the cloud, that capacity is delivered on demand — users submit jobs from the ground, and the orbital cluster runs them and returns the results. This repository contains the public, investor-facing website that presents the vision, architecture, use cases and partnership opportunities.

Live site: **https://starweave-livid.vercel.app**

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Background

Ground-based AI compute is increasingly limited by grid capacity, cooling water and land permits. StarWeave's thesis is that orbit removes those constraints:

- **Always-on solar power** — dawn-dusk orbits receive near-continuous sunlight.
- **Natural deep-space cooling** — heat is radiated away with zero water use and no land footprint.
- **Compute at capture** — data generated in orbit is processed in place, returning only results.
- **Inter-satellite laser mesh** — compute nodes join on demand and scale elastically, like the cloud.

The website communicates this to a global audience of investors and industry partners. It is built with:

- [Next.js 16](https://nextjs.org) (App Router) and [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- Locale routing via a Next.js [Proxy](https://nextjs.org/docs/app/api-reference/file-conventions/proxy) (`/zh`, `/en`)
- Photos served from the [Unsplash](https://unsplash.com) CDN through a custom `next/image` loader

## Install

Requires [Node.js](https://nodejs.org) 20.9 or later and npm.

```bash
git clone git@github.com:venslupro/starweave.git
cd starweave
npm install
```

## Usage

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000. The root path redirects to `/zh` or `/en`, based on the `NEXT_LOCALE` cookie (set by the language switch) or the browser's `Accept-Language` header.

Other scripts:

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

### Editing content

All page copy lives in [`src/i18n/dictionaries.ts`](src/i18n/dictionaries.ts). The English dictionary is typed against the Chinese one, so a missing or misnamed key fails the TypeScript build.

To change a photo, replace its Unsplash photo ID in [`src/lib/photos.ts`](src/lib/photos.ts).

## Project Structure

```text
src/
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx      # Root layout, fonts and per-locale metadata
│   │   └── page.tsx        # Landing page sections
│   ├── globals.css         # Theme tokens, animations, shared styles
│   └── icon.svg            # Favicon
├── components/             # Nav, hero illustration, scroll reveal, copy-email button
├── i18n/
│   ├── config.ts           # Supported locales and contact email
│   └── dictionaries.ts     # zh / en copy
├── lib/
│   ├── photos.ts           # Unsplash photo IDs per section
│   └── unsplash-loader.ts  # next/image loader for the Unsplash CDN
└── proxy.ts                # Redirects to the preferred locale
```

## Deployment

The site is deployed on [Vercel](https://vercel.com). With the [Vercel CLI](https://vercel.com/docs/cli) installed and the project linked:

```bash
vercel --prod
```

Both locale pages are statically generated at build time.

## Maintainers

[@venslupro](https://github.com/venslupro)

## Contributing

Questions, partnership and investment inquiries: [venslu.pro@gmail.com](mailto:venslu.pro@gmail.com).

Issues and pull requests are welcome. Before opening a pull request, make sure `npm run lint` and `npm run build` pass.

## License

© 2026 StarWeave. All rights reserved.

This repository is not released under an open-source license. Photos are used under the [Unsplash License](https://unsplash.com/license).
