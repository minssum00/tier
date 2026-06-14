# Potenlab Design System

An IT agency and product studio brand — **Potenlab (potenlab.dev)** — that builds MVPs, AI products, and internal tools for Korean startups and SMBs. This design system captures the visual language, brand tone, and UI vocabulary of the Potenlab ecosystem.

## Product ecosystem

| Product | Domain | Role |
|---|---|---|
| **Potenlab** | potenlab.dev | Agency brand site — services, portfolio, consulting |
| **PlanningBox** | planning-box.potenlab.dev | IT spec all-in-one: landing, PRD, idea structuring, estimator chat |
| **PotenPaper** | paper.potenlab.dev | Biz all-in-one: business plan builder, validator, idea check |
| The Potential | thepotential.kr | Independent community brand |
| Poten School | potenschool.kr | Independent academy brand |

The umbrella rule: **products under the Potenlab umbrella live on subdomains; standalone sub-brands get their own domains.**

Primary focus of this design system: **Potenlab (light blue / Pretendard)** and **PlanningBox (dark violet / Clash Display)**, which together cover the two visual modes the brand operates in.

## Sources

All reference material pulled from:

- **Main repo:** `github.com/potenlab/potenlab` (branch `main`) — React + Vite + TypeScript + Tailwind v4
  - `src/styles/globals.css` — token source of truth
  - `potenlab_DesignSystem.md` — written style guide ("Toss-style clean + trustworthy")
  - `src/components/ui/*` — shadcn-based primitives
  - `src/components/{Header,Footer,Services,Portfolio,...}.tsx` — product surfaces
  - `public/images/**` — logos, hero art, portfolio thumbs
- **Related repos (not imported):** `potenlab/planning-box`, `potenlab/poten-paper`

## Index

```
README.md                        ← you are here
SKILL.md                         ← SKILL manifest (Claude Skill-compatible)
colors_and_type.css              ← Typography only (fonts, scale, semantic text styles)
colors.css                       ← Color tokens (Potenlab blue, PlanningBox violet, text ladder)
tokens.css                       ← Spacing, radius, shadow, motion
fonts/                           ← (using CDN Pretendard + Google Fonts; no local .ttf)
assets/
  logos/                         ← Potenlab + PlanningBox logos, favicons
  backgrounds/                   ← hero rocket + gradient ellipse
  portfolio/                     ← shipped project thumbnails
preview/                         ← Design System tab cards
ui_kits/
  potenlab/                      ← agency site kit (light, blue, Pretendard)
    index.html
    Header.jsx
    Hero.jsx
    ServiceCard.jsx
    PortfolioGrid.jsx
    Footer.jsx
  planningbox/                   ← product kit (dark, violet, Clash Display)
    index.html
    Header.jsx
    Hero.jsx
    ToolCard.jsx
    IdeaComposer.jsx
```

## Brand in one line

> **"MVP부터 AI까지, 비즈니스 성장 파트너"** — *From MVP to AI, your business growth partner.*

The Potenlab brand voice: trustworthy, sober, pragmatic — "Toss-style clean and trustworthy" is the explicit reference in the internal style guide. The PlanningBox sub-product voice is more playful, futurist, and AI-forward.

---

## Content fundamentals

**Language.** Korean-first (한국어). Copy is short, direct, benefit-led; English is used for product names, nav labels, and occasional tagline polish (e.g. "AI 기획", "MVP Development"). Never translate brand names (Potenlab, PlanningBox, PotenPaper stay Latin).

**Voice + tone.**
- **Partner, not vendor.** Copy frames Potenlab as a partner who "understands business language" (`비즈니스 언어를 이해하는 기술 파트너`) — not a dev shop.
- **Confident + concrete.** Sentences assert capability rather than hedge: "MVP부터 AI까지" ("From MVP to AI"), "혼자서도 AI로 IT 서비스 기획" ("Plan IT services alone with AI").
- **Short, benefit-first.** Headlines rarely exceed 20 Korean chars; feature blurbs ~1 sentence.
- **Second-person, warm-polite.** `-요/-세요` endings on CTAs ("시작하세요", "문의하기"). No formal `-습니다` walls.

**Casing.**
- **Korean body** — written naturally, no special casing.
- **English nav + section eyebrows** — sentence case for long labels ("Core Services"), UPPERCASE wide-tracked for small eyebrow labels ("TOOLS", "ABOUT") — uses `Clash Display Variable` or `Plus Jakarta Sans` with `font-weight: 700` and `letter-spacing: wider`.
- **Product names** — always exact: `Potenlab`, `PlanningBox`, `PotenPaper` (no spaces, PascalCase for products).

**Emoji + special chars.**
- Emoji **not used in product UI**. The only recurring glyph is the **four-pointed sparkle `✦`** on AI CTAs (e.g. "✦ AI 기획") — it's the brand's "AI" signal.
- External-link affordance is an arrow `↗` (trailing, 10–12px, 40–60% opacity), not the lucide `ExternalLink` icon.
- Separators: `|` in inline metadata, `·` in English sublines.
- Copyright line reads `© {year} Potenlab. All rights reserved.`

**Specific examples pulled from production copy.**
- Hero: `포텐랩은 MVP 개발부터 AI 고도화까지, 비즈니스 언어를 이해하는 기술 파트너입니다.`
- PlanningBox tagline: `IT 서비스 기획의 모든 것. 아이디어부터 화면설계까지 한 박스로.`
- CTA cluster: `AI 기획 ↗` (outline) + `문의하기` (filled blue).
- Footer signature: `Made with Claude & Gemini` (playful, only on PlanningBox footer).

**Avoid.** Emoji cards. Marketing jargon ("leverage", "synergy"). Exclamation points beyond one per page. Sentence-ending emoji. Hype adjectives ("amazing", "revolutionary", "최고의") — the brand talks plainly about what it does.

---

## Visual foundations

### Two modes, one system

Potenlab operates in two distinct visual keys — both share the 8px spacing base, 12px radius default, and Pretendard body — but diverge sharply on color, display font, and mood:

| | Potenlab (light) | PlanningBox (dark) |
|---|---|---|
| Surface | `#FFFFFF` | `#06060C` |
| Ink | `#0A0A0A` on white | `#FFFFFF` at 60–90% opacity |
| Primary | `#0079FF` (trust-blue) | Gradient `#8B5CF6 → #7C3AED` (violet) |
| Display font | Plus Jakarta Sans | Clash Display Variable |
| Accent glyph | `✦` in Potenlab blue | `✦` in violet-lavender `#C4B5FD` |
| CTA shape | `border-radius: 24px` pill (nav), `12px` on forms | Full `rounded-full` pill with violet glow |
| Shadow mood | `rgb(0 121 255 / 0.04)` tinted-blue, very subtle | `rgb(139 92 246 / 0.35)` violet glow on CTAs |

Both modes are first-class; never mix them on a single surface. Marketing and agency → Potenlab-light. Product/tool UI for PlanningBox → dark.

### Color

- **Primary (Potenlab):** `#0079FF` — single CTA color. 1–2 primary buttons per screen max (stated rule in `potenlab_DesignSystem.md`).
- **Primary hover:** `#0066DD` (darker, not lighter).
- **Secondary/soft surface:** `#E6F3FF` (pale blue), used for tinted backgrounds and secondary button fill.
- **Green track:** `#14A697` (deep) / `#E7F6F5` (pale) for a secondary service category; rarely used on the homepage.
- **Neon accent `#00FF99`** — reserved for highlight chips only, never body.
- **Text ladder:** `#0A0A0A → #0F172A → #1E293B → #334155 → #475569 → #64748B`. Six rungs, low-contrast is avoided.
- **Border:** `#E2E8F0` (ui components) or `#E7E7E7` (DS spec) — always neutral gray, never tinted.
- **Dark-mode footer:** `#1A1A1A` with `#999999` body and `#666666` micro-copy.

### Type

- **Pretendard** for all Korean + English body text. Loaded from `cdn.jsdelivr.net/gh/orioncactus/pretendard`.
- **Plus Jakarta Sans** (500/600/700/800) for Potenlab display headings — an English-first display pairing chosen for its geometric, modern feel.
- **Clash Display Variable** for PlanningBox product chrome (logo wordmark, eyebrow labels). `@font-face` ships in that repo; here we substitute **Plus Jakarta Sans 800** as the closest geometric match — *flag this if pixel-perfect PB kit is needed*.
- **Noto Sans KR** is the explicit Korean fallback.
- Headings use **responsive clamp** (`clamp(32px, 5vw, 56px)` on h1) — never hard fix display sizes.
- Letter-spacing is tightened on headings (`-0.02em` h1, `-0.01em` h2/h3), opened on uppercase eyebrows (`tracking-wider`).

### Spacing

- **8px base.** All `padding / margin / gap / height` values are multiples of 8.
- Grid: 12-col, 78px col × 20px gutter, **1156px max container** (web marketing).
- Admin dashboards use a **fluid 12-col grid** inside a 32px-padded content area next to a **fixed 300px dark sidebar**.

### Backgrounds

- **Default is clean white.** Potenlab does NOT use gradient washes as page backgrounds.
- **Two hero treatments** appear:
  1. Clean white with a single hero illustration (rocket `.webp`) floating right.
  2. Dark-navy hero (`#0E1116`-ish) with a violet/blue radial ellipse (`Ellipse 12.webp`) behind the headline — specifically for dark-variant pages and PlanningBox.
- No full-bleed photography. No hand-drawn illustrations. No repeating patterns or textures. No grain.
- The **"background+border" PNG** on the homepage is a subtle dotted grid on a light gray card — the only decorative texture in the system, used once.

### Animation

- `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)` globally — one easing curve for all transitions.
- `transition-all duration-200` on hover targets (buttons, links); `duration-300` on the header bg/text color swap when scrolling past hero.
- `motion/react` (Framer Motion) used for mobile-menu fade + dropdown `AnimatePresence`.
- No bounce, no spring overshoot, no elastic curves. No scroll-triggered parallax. No looping decorative motion. The only looping motion is the rocket `.mp4` in the hero.
- `scroll-behavior: smooth` globally.

### Hover + press states

- **Primary button hover:** background swaps `#0079FF → #0066DD` (darker), shadow lifts from `shadow-cta` to `shadow-cta-hover`. No scale, no translate.
- **Outline button hover:** fills with primary color (`hover:bg-[#0079FF] hover:text-white`). High-commitment fill-swap, not a subtle tint.
- **Nav link hover:** pill bg tints to `#F8FAFC` (light) or `white/10` (dark variant). Text color deepens.
- **Card hover:** shadow lifts from `shadow-card` to `shadow-card-hover` (both blue-tinted); no scale, no border change.
- **Logo hover:** `opacity 100 → 80`.
- **Press state:** no explicit shrink/scale — the button just darkens one step and keeps the pressed shadow.

### Borders + shadows

- Border default: **1px solid `#E2E8F0`**. Never dashed.
- Radius default: **12px** for everything (cards, buttons, inputs, badges) — "rounded-12" is a stated DS rule. Pill nav uses `24px`. Small chips `8px`.
- Shadow system is **blue-tinted, not neutral black** on the light theme: `rgb(0 121 255 / 0.04)` card, `rgb(0 121 255 / 0.12)` card-hover, `rgb(0 121 255 / 0.20)` CTA. This gives surfaces a cool, technical feel.
- No inner shadows. No layered/stacked shadows beyond the two-stop CTA shadow.

### Transparency + blur

- **Sticky header:** `bg-white/90 backdrop-blur-xl` when scrolled past hero; `bg-transparent` over hero.
- **Dark header (PlanningBox):** `bg-[#06060C]/90 backdrop-blur-xl`.
- **Modal overlay:** `bg-black/70 backdrop-blur-sm`.
- Blur is used **only** for chrome on top of content, never for decorative glass-panels inside content.

### Cards

- **Potenlab card:** white surface, `border: 1px solid #E2E8F0`, `border-radius: 12px`, `shadow-card` by default. Hover lifts shadow and nothing else.
- **PlanningBox card:** `bg-[#0F0F1A]`, `border: 1px solid rgba(255,255,255,0.1)`, `border-radius: 16–24px`, the violet gradient used only for accent glyphs inside.
- Cards do NOT use colored left-border accents. They do NOT use top-ribbon colors. They are pure surface + 1px border + optional shadow.

### Imagery mood

- Hero illustrations trend **cool** (blue/white rocket on light, violet-blue radial on dark). No warm tones. No b&w. No grain or noise. No drop shadows on images.
- Portfolio thumbnails are **flat UI screenshots** cropped to 16:9 and rounded 12px.

---

## Iconography

**Library.** `lucide-react@0.487.0` — used throughout the codebase. Default stroke `1.5–2px`, sized `w-3 h-3` (12px) up to `w-6 h-6` (24px). Common icons: `Menu`, `X`, `ChevronDown`, `Sparkles`, `LogOut`, `Lock`, `Globe`, `ArrowRight`, `ExternalLink` (rare — arrow char `↗` is preferred).

For this design system, link Lucide from CDN:
```html
<script type="module" src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
```
…or inline SVGs from `lucide.dev`.

**Brand glyphs used in copy.**
- `✦` — four-pointed sparkle, "AI" signal. Color matches the mode (`#0079FF` on light, `#C4B5FD` on dark).
- `↗` — external link trailing marker.

**Logos + brand imagery in `assets/logos/`:**
- `potenlab_logo_blue.png` — wordmark in `#0079FF`, for white surfaces.
- `potenlab_logo_white.png` — wordmark white, for dark hero.
- `logo_svg.svg` — vector logo.
- `potenlab_favicon.png`, `favicon.png`, `favicon_512.png` — favicons.
- `planningbox_logo.png` — PlanningBox wordmark (dark surface).

**Emoji usage.** None in product UI. Never use emoji as icons, bullets, or chips. The exception is platform-native OS emoji the user types themselves (e.g. in chat messages inside PlanningBox).

**Do NOT draw custom SVG icons.** The brand uses Lucide end-to-end; any new icon need should pull from Lucide and match its stroke style.

---

## Caveats / font substitutions

- **Clash Display Variable** (used in PlanningBox logo and uppercase eyebrow labels) is not available as a free CDN font — substituted here with **Plus Jakarta Sans 800**. Shapes are close but not identical; flag if pixel-perfect PlanningBox kit is needed.
- **Neon green `#00FF99`** is mentioned in the DS spec but I did not find it in actual production code — treat it as an unused/future accent.
- Admin dashboard UI (dark sidebar, KPI tiles) is documented here conceptually but not built as a UI kit since it's internal and out of scope for public brand artifacts.

See **SKILL.md** for usage in downstream design work.
