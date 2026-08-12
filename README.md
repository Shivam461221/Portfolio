# Shivam Lowanshi — Portfolio

A dark, futuristic personal portfolio built with React, Vite, Tailwind CSS,
and Framer Motion. Original design inspired by (not copied from) techver.se.

## Design direction

- **Palette:** near-black navy base (`#080B14`) with cyan (`#00E5C7`) and
  violet (`#7C6FFF`) signal accents.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels/tags).
- **Signature idea:** the whole site borrows the vocabulary of a code editor —
  nav items are styled like file paths (`~/about`, `~/skills`), section
  eyebrows read like breadcrumbs, and the hero features an original animated
  "tech constellation" — an interconnected node graph of your stack that
  reacts to mouse movement. This replaces generic particle/gradient hero
  backgrounds with something that's actually about the subject (a developer's
  toolchain).

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Editing your content

Everything personal lives in `src/data/` — you should rarely need to touch
component code to update content:

| File | Controls |
|---|---|
| `personal.js` | Name, roles, bio copy, contact info, social links, resume URL, stats |
| `nav.js` | Navbar links |
| `skills.js` | Skill groups + hero constellation node labels |
| `services.js` | "How I Can Help" cards |
| `projects.js` | Project cards — name, description, tech, features, links |
| `courses.js` | Training/course cards |
| `experience.js` | Work experience timeline (**placeholders — fill in real dates/duties**) |
| `education.js` | Education timeline |
| `misc.js` | "Why work with me" points, testimonial placeholders, contact form options |

### Resume

Drop your resume PDF at `public/resume.pdf` — the Download Resume buttons
already point to `/resume.pdf`.

### Contact form

The form currently opens the visitor's email client via a `mailto:` link
(no backend required). To wire it to a real backend or service (e.g.
Formspree, a serverless function, EmailJS), swap the `handleSubmit` logic in
`src/components/sections/Contact.jsx`.

### Testimonials

`src/components/sections/Testimonials.jsx` reads from
`testimonialsPlaceholder` in `src/data/misc.js`. Replace those placeholder
quotes with real testimonials once you have them.

## Structure

```
src/
  data/            content config (edit here first)
  components/
    ui/            Button, Card, Tag, Section — reusable primitives
    layout/         Navbar, Footer
    sections/       Hero, About, Skills, Services, Projects, Training,
                    Experience, WhyMe, Testimonials, Contact
    TechConstellation.jsx   hero visualization
  App.jsx
  index.css
```

## Notes

- Respects `prefers-reduced-motion`.
- Fully responsive (mobile nav, stacked grids, fluid type).
- Basic SEO: meta description, Open Graph tags, `robots.txt`, `sitemap.xml`
  (update the domain in `sitemap.xml` once deployed).
- No TypeScript, per the brief — plain JS + JSX throughout.
