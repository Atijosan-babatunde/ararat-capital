# Ararat Capital Holdings — Website (Next.js)

A one-page site for Ararat Capital Holdings — same style/structure of page as a typical
search-fund / acquisition-holdings site, built as a **standard Next.js 14 (App Router)** project.

The color palette (`#1c2c3d` navy, `#dec083` gold) was sampled directly from your logo, so it's
an exact match — not a guess.

## What's placeholder right now

Real client copy is now in place across the whole site. What's still a placeholder:

| Item | Where | What to do |
|---|---|---|
| Founder name & bio | `components/WhoWeAre.jsx`, `components/Founder.jsx` | Find/replace `[FOUNDER NAME]`, `[industry]`, `[He/She/They]` |
| Founder photo | `public/images/founder.jpg` | Replace with a real photo (same filename) |
| Team/office photo | `public/images/who-we-are.jpg` | Replace with a real photo |
| Hero background photo | `public/images/hero-bg.jpg` | Replace with a real photo (navy tint is applied automatically via CSS, see `.hero` in `globals.css`) |
| Advisors (3x) | `components/Advisors.jsx` | Edit the `ADVISORS` array — no real advisor bios were provided yet |
| Phone / email / location | `components/Contact.jsx` | Replace `[XXX] XXX-XXXX` and `[City, State]` |
| Contact form submission | `components/Contact.jsx` | Currently simulates success on submit — see "Wiring up the contact form" below |

## Content structure

The client's written content covered far more ground than a typical single-section-per-topic
page can hold cleanly, so closely related topics were grouped into one section rather than
creating 16+ separate blocks. Here's what maps to where:

| Client content | Component |
|---|---|
| Who We Are | `WhoWeAre.jsx` |
| What We Do | `WhatWeDo.jsx` |
| Our Approach (6 principles) | `Approach.jsx` |
| What Makes Us Different | `Different.jsx` |
| What We Look For + Sectors of Interest + Our Acquisition Criteria | `Criteria.jsx` (grouped — all three are "what we look for" in different forms) |
| How We Create Value | `ValueCreation.jsx` |
| Our Process (7 steps) | `Process.jsx` |
| Our Philosophy (5 principles) | `Philosophy.jsx` |
| Why Ararat Capital Holdings | `WhyUs.jsx` |
| For Business Owners + Closing Statement | `ForOwners.jsx` (paired — both are direct-address closing content, styled as a banner right before Contact) |

## Icons

All icons are from [lucide-react](https://lucide.dev) (already installed). To change any icon,
open the relevant component, swap the import at the top and the JSX tag — e.g. in
`Approach.jsx`:
```jsx
import { Search, ShieldCheck, ... } from "lucide-react";
// ...
{ icon: Search, title: "Understand before changing", ... }
```
Browse the full icon set at lucide.dev to find alternatives.

## Setup

```bash
npm install
npm run dev
```
Open http://localhost:3000

## Wiring up the contact form

Right now the form validates properly (required fields, email format) and shows a success
message, but doesn't actually send an email anywhere — there's no backend wired up yet. Easiest
options, roughly in order of effort:

1. **Formspree** (~5 minutes, no code) — create a free form at [formspree.io](https://formspree.io),
   then in `components/Contact.jsx` change the form to `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
   and remove the `onSubmit` handler (or keep both — Formspree works fine with a plain HTML form
   post).
2. **Next.js API route** — create `app/api/contact/route.js` that sends the email via a service
   like Resend or SendGrid, and call it from the existing `handleSubmit` function (there's a
   `TODO` comment marking exactly where).

## Project structure

```
app/
  layout.js       → fonts (Playfair Display + Inter), metadata
  globals.css      → navy/gold theme, all section styling
  page.js          → assembles all sections
components/
  Navbar.jsx        → sticky nav + mobile menu
  Hero.jsx
  WhoWeAre.jsx
  WhatWeDo.jsx       → improvement-area tag grid
  Approach.jsx       → 6-principle "how we operate" grid
  Different.jsx      → "what makes us different" question list
  Criteria.jsx       → what we look for + sectors of interest + acquisition criteria
  ValueCreation.jsx  → "how we create value" 7-area grid
  Process.jsx        → 7-step acquisition timeline
  Philosophy.jsx      → 5-principle grid
  Founder.jsx
  Advisors.jsx        → 3-person advisor/investor grid
  WhyUs.jsx           → "why Ararat Capital Holdings" reasons list
  ForOwners.jsx        → "for business owners" + closing statement banner
  Contact.jsx          → info + validated form
  Footer.jsx
  Reveal.jsx           → scroll-fade-in wrapper (zero dependencies, no AOS needed)
public/
  images/            → logo.png (your real logo), hero-bg.jpg + placeholder photos
```

## Deploying

Standard Next.js app — deploys as-is to Vercel, Netlify, or any Node host.
# ararat-capital
