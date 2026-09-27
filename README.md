# Engineering Portfolio

### Enoch Appiah-Kubi — Information Technology, AI & Cybersecurity

Source code for my engineering portfolio. It documents the projects I build and
the reasoning behind them, through case studies that walk from problem to
solution to architecture to the decisions I made and what I learned.

> **Good engineering is not only about what you build. It is about understanding
> why you built it that way.**

**Live site:** [enochappiahkubi.com](https://enochappiahkubi.com)

---

# Featured Project: GrowthPilot

**An AI-powered business decision support platform for pricing, profitability,
and strategic decision making.**

## Why I built it

The idea came from a conversation with my uncle, an accountant, on the drive
home from my outdoor conference championship meet. He was talking through app
ideas he had been sitting on. I had already planned to build an AI project that
summer, so I started asking myself whether I could use my tech skills to bring
one of his ideas to life.

His idea was a tool small-business owners could use to track profit and run the
kind of analysis a hired accountant runs, at a price they could actually afford.

It came from home. Our roots are in Ghana, where resale is a huge part of how
people earn. Pricing is largely unregulated, and the same good can sell at
drastically different prices inside the same market. Someone who sources jewelry
from China to resell in Ghana without understanding the math underneath it can
lose money on their own pricing and never know why.

That is the problem GrowthPilot is aimed at: small-business owners make pricing
and profitability decisions every day without structured analytical tools, and
the people it costs the most are the ones who can least afford an accountant.

## How it was built

I started deliberately basic, with no AI in it at all. I wanted the business
logic proven before an AI component went anywhere near it.

1. **Python pricing engine.** A command-line tool covering pricing analysis,
   break-even calculations, forecasting, and profitability reporting.
2. **Business analytics.** Dashboards and reporting layered on top of the
   individual calculations.
3. **Web application.** Rebuilt in React for a usable interface and a foundation
   for what came next.
4. **AI workspace.** The current direction: ask a business question, get a
   structured recommendation back.

The full case study, including the system architecture, the engineering
decisions, the engineering journal, and the future vision, is on the
[live site](https://enochappiahkubi.com).

## Stack

Python and FastAPI on the backend, React on the frontend, SQLite for storage,
Random Forest models for demand forecasting, and a conversational engine
connected to OpenAI.

## Current status

GrowthPilot is a prototype, and there is a specific reason it has not moved past
that.

The AI chatbox reaches OpenAI through the backend, and the architecture does not
yet route efficiently enough. It spends tokens on basic questions and decisions
that the deterministic engine from the earlier stages already answers. At any
real usage, that is money leaking. Fixing that routing is the work standing
between this prototype and something I would put in front of actual business
owners.

## Why it matters to me

GrowthPilot is the kind of work I want to do: software, AI, data, and a real
business problem in the same project. Building it has meant working through
product design, system architecture, business logic, AI integration, technical
tradeoffs, and how to explain an engineering decision to someone who was not in
the room for it.

---

# How the case studies are structured

Every project on the site is documented along the same spine:

**Problem → Solution → Architecture → Decisions → Evolution → Lessons → Future**

The goal is to show the judgment behind a project alongside the implementation.
For GrowthPilot especially, where the work is still moving from an early pricing
tool toward a broader AI-assisted decision-support system, the reasoning is the
more useful half.

---

# Technology Stack

This portfolio site is built with:

| Technology                  | Purpose                        |
| --------------------------- | ------------------------------ |
| React                       | Frontend application           |
| Vite                        | Development and build tooling  |
| JavaScript                  | Application logic              |
| React Router                | Client-side routing            |
| Framer Motion               | UI animation                   |
| Lucide React                | Icons                          |
| React Intersection Observer | Scroll/visibility interactions |
| React Type Animation        | Animated text                  |
| ESLint                      | Code quality and linting       |
| Prettier                    | Formatting                     |
| Vercel                      | Deployment                     |

---

# Repository Structure

```text
engineering-portfolio/
│
├── public/
│   └── images/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
└── vite.config.js
```

GrowthPilot's case study page is composed from dedicated sections:

```text
GrowthPilotPage
├── Hero
├── Problem
├── Solution
├── Architecture
├── Evolution
├── Engineering Decisions
├── Engineering Journal
├── Capabilities
└── Future Vision
```

---

# Running it locally

Requires Node.js, npm, and Git.

```bash
git clone https://github.com/enoch-appiah-kubi-greenwood/engineering-portfolio.git
cd engineering-portfolio
npm install
npm run dev
```

Other scripts defined in `package.json`:

```bash
npm run build      # production build
npm run preview    # preview the production build
npm run lint       # run ESLint
```

## Deployment

Deployed through Vercel. The repository's `vercel.json` rewrites incoming routes
to `index.html` so the client-side React router handles navigation.

---

# Author

**Enoch Appiah-Kubi**

Information Technology major, cybersecurity minor. Interested in the
intersection of artificial intelligence, software engineering, cybersecurity,
data, and financial technology.

**GitHub:** [github.com/enoch-appiah-kubi-greenwood](https://github.com/enoch-appiah-kubi-greenwood)

---

## License

This repository is a personal engineering portfolio. Project code and content
are maintained for portfolio, educational, and demonstration purposes.
