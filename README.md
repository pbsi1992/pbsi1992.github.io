# PBSI Digital Portal

**Live Site:** [https://pbsi1992.github.io](https://pbsi1992.github.io)

A **state-of-the-art, high-performance academic web platform** built for PBSI.

This project delivers a modern digital experience through a **Bento Grid interface**, smooth **glassmorphism UI**, responsive animations, and a polished academic design system.

Built for speed, scalability, and maintainability.

---

## Overview

The PBSI Digital Portal modernizes how students, faculty, and visitors interact with PBSI’s digital services.

### Key Goals
- Fast loading performance
- Clean academic branding
- Responsive layouts
- Modular architecture
- Easy content management
- Professional user experience

The platform follows a **Zero-Footprint Personalization Strategy**, providing a clean user experience without unnecessary tracking systems.

---

## Tech Stack

| Technology | Purpose |
|------------|----------|
| Astro 4.x | Static Site Generation for maximum speed |
| Tailwind CSS | Utility-first styling |
| Lucide React | Modern icon library |
| CSS Transitions | Smooth UI interactions |
| View Transitions API | Seamless page transitions |
| Astro Content Collections | JSON content management |
| TypeScript | Static data management |

---

## Design Philosophy

### Bento Grid Layout
The website uses a modular Bento Grid system for:

- Better readability
- Faster scanning
- Improved visual hierarchy
- Responsive scaling

---

### Glassmorphism UI
Modern styling includes:

- `backdrop-blur-xl`
- `bg-site-card/40`
- Custom shadow glows
- Transparent layered containers

This creates a premium academic aesthetic.

---

### Performance First
The architecture minimizes:

- Content shifting
- Layout instability
- Pillar collapse
- Slow page loads

Static generation ensures faster delivery and lower hosting costs.

---

### Theme Intelligence
- Default light mode for accessibility
- Theme persistence for returning users

---

## Project Structure

```plaintext
src/
├── components/       # Reusable UI components
├── content/programs/ # JSON academic program data
├── data/             # Static TypeScript datasets
├── layouts/          # Shared layouts
├── pages/            # File-based routing
└── styles/           # Global CSS + Tailwind layers
```

---

## Core Features

### 1. Dynamic Admissions System

The admissions portal is directly linked to the `content/programs` collection.

#### Benefits
- Automatically updates program dropdowns
- Eliminates manual updates
- Easily scalable for future programs

#### Current Programs
- MA in Pastoral Studies
- Bachelor of Theology
- Bachelor of Church Ministry
- Diploma in Theological Studies
- Lay Leadership Studies

---

### 2. High-Efficiency Contact Portal

Built using responsive flex logic:

- `shrink-0`
- `flex-1`

This prevents:

- Overlapping sections
- Crushed layouts
- Poor mobile responsiveness

---

### 3. Integrated Program Directory

A centralized academic hub featuring:

- Program descriptions
- Academic pathways
- Organized course information
- Easy JSON maintenance

---

## Installation

Install dependencies:

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

---

## Production Build

```bash
npm run build
```

---

## Deployment

Compatible with:

- GitHub Pages
- Netlify
- Vercel
- Other static hosting providers

---

## Performance Goals

This project prioritizes:

- Speed
- SEO
- Scalability
- Maintainability
- Modern UI standards
- Low hosting costs

---

## Future Improvements

Potential upgrades:

- CMS dashboard integration
- Student authentication portal
- Online payments
- Faculty management system
- Event dashboard
- AI-powered inquiry automation

---

## Developer

**Jero Halili**  
Computer Scientist | Full-Stack Developer | AI Engineer  

Built with ⚡ for PBSI Digital Transformation (2026–2027)
