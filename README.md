# Dumpling Social

The Dumpling Social website, rebuilt as a Next.js application at the repository
root. The previous static WordPress export is preserved in `wordpress-export/`
for reference and rollback history.

The public site is a single full-viewport page: a hero with the brand lockup,
three calls to action, a Google review link, a reviews carousel and the trading
hours and contact details, plus two modal dialogues ("book a table" and
"giftcard").

## Stack

- Next.js 16 (App Router) with React 19
- TypeScript in strict mode
- Tailwind CSS v4, with design tokens declared in `app/globals.css`
- Static export deployed on GitHub Pages

## Local development

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

| Script                 | Purpose                           |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Development server                |
| `npm run build`        | Static production build to `out/` |
| `npm start`            | Build and serve `out/` locally    |
| `npm run lint`         | ESLint                            |
| `npm run typecheck`    | TypeScript, no emit               |
| `npm run format`       | Prettier, write                   |
| `npm run format:check` | Prettier, check only              |

## Project layout

```
app/
  layout.tsx        Metadata, fonts, JSON-LD
  page.tsx          Composes the hero
  globals.css       Design tokens and carousel styles
  fonts.ts          town 50 (local) and Roboto Slab (Google)
  fonts/            town 50 webfont files
components/         One component per section of the page
lib/
  site.ts           Contact details and external URLs
  reviews.ts        Frozen Google reviews (see below)
  structured-data.ts Schema.org graph
public/
  wp-content/       Imagery, kept at its original paths
  reviews/          Reviewer avatars, star and Google icons
wordpress-export/   Previous WordPress static export
```

## Design tokens

The brand palette, typography and breakpoints were ported from the WordPress
build and are declared once in the `@theme` block of `app/globals.css`:

| Token                | Value       | Used for                       |
| -------------------- | ----------- | ------------------------------ |
| `--color-brand`      | `#DE1B3A`   | Brand red                      |
| `--color-brand-veil` | `#DE1B3A85` | Button fill                    |
| `--color-ink`        | `#0F0F0F`   | Modal body background          |
| `--color-ink-veil`   | `#0F0F0FBD` | Button fill on hover           |
| `--color-light`      | `#F0F0F0`   | Body and heading text          |
| `--color-card`       | `#222222`   | Review card background         |
| `--font-display`     | town 50     | Logo lockup, buttons, headings |
| `--font-body`        | Roboto Slab | Body copy                      |

Breakpoints follow the original: `md` (768px) is the mobile/desktop boundary,
because Elementor authored its mobile rules as `max-width: 767px`. A custom
`xs` breakpoint at 480px matches the only breakpoint the reviews widget used.

## Refreshing the Google reviews

The original site embedded a third-party Trustindex widget. Its reviews were
frozen at February 2022 in the exported HTML, so they are now committed as
local data in `lib/reviews.ts` and rendered by `components/ReviewsCarousel.tsx`.
No third-party script is loaded.

To refresh them, edit `lib/reviews.ts`: update the `REVIEWS` array and the
`RATING_SUMMARY` totals, and drop any new avatar images into `public/reviews/`.
The `Review` type enforces the shape.

If the reviews should instead stay current automatically, the site would need a
separate scheduled update job or a server-capable host. GitHub Pages only serves
static files, so the browser cannot safely call Google APIs with private keys.

## Deploying to GitHub Pages

The repository root is the Next.js project, but GitHub Pages only serves static
files. `next.config.ts` therefore uses `output: "export"` and `images:
{ unoptimized: true }`, so `npm run build` writes the deployable site to `out/`.

Deployment is handled by `.github/workflows/deploy.yml`:

1. Push to `master`, or run the workflow manually from GitHub Actions.
2. The workflow runs `npm ci` and `npm run build`.
3. It writes `out/.nojekyll`, uploads `out/`, and publishes it with GitHub
   Pages Actions.

The custom domain is preserved by `public/CNAME`, which is copied to
`out/CNAME` during the static export. In the repository settings, set GitHub
Pages to deploy from **GitHub Actions**, not from the branch root.

### Hosting limitations

GitHub Pages cannot run a Next.js server, so `next start`, server route
handlers, ISR, runtime headers, and the Next.js image optimisation endpoint are
not available in production. Security headers also need to be configured at DNS
or CDN level if they are required.

## Notes on fidelity

The layout was verified against the live site by measuring the bounding box of
every major element at 1440px, 1024px, 768px and 390px. All of them match to
0.0px. A pixel diff of full-page screenshots at those widths leaves 26, 127 and
109 differing pixels respectively, out of more than a million each; what remains
is text antialiasing, the CSS-drawn carousel chevrons, and the deliberate
difference described below.

The rebuild reproduces the previous layout rather than redesigning it. Three
details are worth knowing:

- **The desktop hero is not `cover`.** The original set
  `background-size: cover; background-position: center center` for mobile only
  and left desktop at the CSS defaults, so the photograph renders at its
  natural 2560x1707 size anchored to the top-left corner. That behaviour is
  reproduced deliberately in `components/Hero.tsx`. Switching desktop to cover
  is a one-line change if it was never intended.
- **The mobile reviews carousel was broken and is not reproduced as-is.** On the
  live site below 768px the Trustindex pager renders a single inert dot and
  never scrolls, so only the first of the six reviews can ever be read. The
  rebuild shows one dot per review and pages through all six. This is the only
  intentional visual difference, and it is confined to a 20px-tall strip of
  pagination dots.
- **`town 50`** is a licensed Jason Vandenberg typeface. It was already
  self-hosted on the previous site, so the licensing position is unchanged, but
  it is worth confirming the licence covers web embedding.

Behaviour that was improved without changing the layout: the modals now have
proper dialogue semantics, focus trapping, Escape-to-close and focus
restoration; the logo has alt text; and the carousel has accessible controls
and pauses its autoplay when `prefers-reduced-motion` is set.
