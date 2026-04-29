# PBSI: Presbyterian Bible Seminary Inc.

**Live Site:** [https://pbsi1992.github.io](https://pbsi1992.github.io)

The official high-performance platform for the **Philippine Baptist Seminary and Institute**. This project represents a complete architectural overhaul, transitioning manual legacy systems into a streamlined, automated digital ecosystem.

## Engineering Objective

To replace fragmented manual record-keeping with a unified, scalable enrollment and management infrastructure. This system is engineered for maximum reliability, speed, and real-world impact.

* **Automated Admissions:** A custom-built registration engine that handles student data entry and requirement submission.
* **Dynamic Program Architecture:** A JSON-driven content management system (CMS) that keeps the 5 core academic tracks synchronized across the entire platform.
* **Digital Transformation:** Engineered to serve as the single source of truth for institutional outreach and student inquiries.

## Tech Stack & Architecture

* **Core Engine:** Astro 4.x (Static Site Generation for sub-second load times)
* **Interface:** Tailwind CSS (Modern, high-fidelity UI/UX)
* **Logic:** React-based components for complex form handling and dynamic states
* **Data Layer:** Astro Content Collections (Managing JSON academic databases)

## System Modules

| Module | Functionality |
| :--- | :--- |
| **Admissions Engine** | Handles student registration, program selection, and document uploads. |
| **Academic Hub** | Dynamic directory for MA, Bachelor, and Diploma programs. |
| **Inquiry Hub** | A specialized communication module for registrar-to-student routing. |
| **Theme Engine** | Persists user-selected preferences (Light/Dark) via local storage. |

## Deployment

Designed for the **is-a.dev** infrastructure and maintained via GitHub Actions.

```bash
# Initialize Environment
npm install

# Local Dev Mode
npm run dev

# Production Build
npm run build
```

**Jero Halili**  
Computer Scientist | Full-Stack Developer | AI Engineer  

Built with ⚡ for PBSI Digital Transformation (2026–2027)
