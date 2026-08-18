# Engineering Portfolio

### Enoch Appiah-Kubi — Technology, AI & Cybersecurity

This repository contains the source code for my engineering portfolio, built to document the projects, technical decisions, and engineering thinking behind my work.

The portfolio is designed to show more than finished interfaces. It focuses on **how systems are conceived, built, evaluated, and evolved**.

**Live Portfolio:** [enochappiahkubi.com](https://enochappiahkubi.com)

---

## About the Portfolio

This portfolio showcases projects across software development, artificial intelligence, data-driven systems, and cybersecurity.

Rather than presenting projects as isolated applications, the portfolio uses case-study pages to explain:

* The problem being addressed
* The proposed solution
* System architecture
* Engineering decisions
* Project evolution
* Current capabilities
* Lessons learned
* Future development

The goal is to demonstrate both **technical implementation** and the reasoning behind engineering decisions.

---

# Featured Project: GrowthPilot

## AI-Powered Business Decision Support

GrowthPilot is an AI-powered business decision-support platform designed to help small-business owners make better decisions around **pricing, profitability, and strategy**.

The project explores how AI and data-driven systems can move beyond simply displaying information and instead help users reason through business decisions.

> **GrowthPilot:** An AI-powered business decision support platform for pricing, profitability, and strategic decision making.

The central problem is straightforward: small-business owners make important pricing and profitability decisions every day without always having access to structured analytical tools. GrowthPilot explores how AI-assisted reasoning and business analytics could make that decision-making process more accessible.

---

## GrowthPilot's Evolution

GrowthPilot has evolved through several stages rather than being designed as a finished product from the beginning.

### 1. Python Pricing Engine

The project began as a command-line application focused on business logic.

The initial system supported:

* Pricing analysis
* Break-even calculations
* Forecasting
* Profitability reporting

**Engineering lesson:** Strong business logic should exist before building a polished interface.

### 2. Business Analytics

The project expanded beyond individual calculations into broader business analytics, dashboards, and reporting.

**Engineering lesson:** Useful insights create more value than simply displaying raw data.

### 3. Web Application

GrowthPilot was then rebuilt as a web application using React, creating a more accessible interface and establishing a foundation for future AI capabilities.

**Engineering lesson:** Product architecture should evolve alongside the product itself.

### 4. AI Workspace

The current direction explores an AI-assisted workspace where users can ask business questions and receive structured recommendations.

**Engineering lesson:** AI should guide decision making, not replace it.

---

## GrowthPilot Architecture

The portfolio presents GrowthPilot as a layered system rather than a single feature.

The architecture section is implemented as a sequence of system layers, allowing the case study to communicate how the different parts of the proposed platform relate to one another.

The broader concept connects:

```text
Business Data
      ↓
Business Analytics
      ↓
Predictive / AI Reasoning
      ↓
Structured Insights
      ↓
Decision Support
      ↓
Business Action
```

The emphasis is on turning information into decisions rather than treating AI as an isolated feature.

---

## Platform Capabilities

GrowthPilot is designed around the combination of:

* Business analytics
* AI-assisted reasoning
* Structured workflows
* Pricing analysis
* Profitability analysis
* Strategic decision support
* Conversational interaction
* Future scenario analysis

The portfolio's capabilities section describes the platform as combining business analytics, AI-assisted reasoning, and structured workflows to help entrepreneurs make better decisions.

---

# Engineering Approach

One of the main purposes of this portfolio is to document **engineering judgment**, not just implementation.

For GrowthPilot, that includes questions such as:

* What problem should the system actually solve?
* Which functionality belongs in the core business logic?
* When should a command-line system become a web application?
* Where can AI provide meaningful value?
* How should AI interact with existing business logic?
* How should recommendations be presented to users?
* Which capabilities belong in the prototype versus a future production system?

The project documentation therefore treats architecture and product decisions as part of the engineering work.

---

# Lessons From GrowthPilot

GrowthPilot's case study documents several principles that have shaped the project:

### Build the logic before the interface

A polished interface cannot compensate for weak underlying business logic.

### Insights matter more than raw data

Displaying information is not the same as helping someone understand it.

### Architecture should evolve

As the problem definition changes, the architecture should change with it.

### AI should assist judgment

The purpose of AI is to help users reason through decisions, not remove the user's responsibility for those decisions.

These lessons are documented directly within the project's engineering journal and evolution sections.

---

# Technology Stack

The portfolio itself is built with:

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

These dependencies and development scripts are defined in the repository's `package.json`.

---

# Repository Structure

The project follows a component-based React structure.

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

The `src` directory is organized into assets, reusable components, data, pages, and styling.

GrowthPilot's case study is assembled from dedicated sections including:

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

The page composes these sections around the GrowthPilot project data.

---

# Development

## Prerequisites

* Node.js
* npm
* Git

## Clone the Repository

```bash
git clone https://github.com/enoch-appiah-kubi-greenwood/engineering-portfolio.git
cd engineering-portfolio
```

## Install Dependencies

```bash
npm install
```

## Start the Development Server

```bash
npm run dev
```

Vite will start the local development server.

## Build for Production

```bash
npm run build
```

## Preview the Production Build

```bash
npm run preview
```

## Run Linting

```bash
npm run lint
```

These commands correspond to the scripts currently defined in `package.json`.

---

# Deployment

The portfolio is configured for deployment through Vercel.

The repository includes a `vercel.json` configuration that rewrites incoming routes to `index.html`, allowing the client-side React application to handle navigation correctly.

**Live site:** [enochappiahkubi.com](https://enochappiahkubi.com)

---

# Project Philosophy

This portfolio is built around a simple idea:

> **Good engineering is not only about what you build. It is about understanding why you built it that way.**

For that reason, projects are documented through their:

**Problem → Solution → Architecture → Decisions → Evolution → Lessons → Future**

This approach is especially important for GrowthPilot, where the project is still evolving from an early pricing tool into a broader AI-assisted decision-support concept.

---

# Current Status

This repository is an **active engineering portfolio** and is continuously evolving.

GrowthPilot is currently presented as a **prototype and product-development case study**. The portfolio documents the system's direction, architecture, capabilities, and evolution while the underlying concept continues to develop.

The portfolio should therefore not be interpreted as claiming that every future GrowthPilot capability is currently implemented in production.

---

# Future Direction

Future GrowthPilot development may explore:

* More advanced predictive analytics
* AI-assisted business analysis
* Scenario and "what-if" modeling
* Automated business insights
* Richer financial analysis
* More sophisticated conversational workflows
* Real-world business data integration
* Production-grade backend infrastructure
* Authentication and user management
* Scalable data storage
* Model evaluation and monitoring

The purpose of the current prototype is to establish the product direction and engineering foundation before expanding into those areas.

---

# Why GrowthPilot Matters

GrowthPilot represents the type of engineering work I am interested in pursuing: projects where **software, AI, data, and business problems intersect**.

The project has allowed me to work through more than implementation alone. It has required thinking about:

* Product design
* System architecture
* Business logic
* AI integration
* User experience
* Technical tradeoffs
* Iterative development
* Communicating engineering decisions

That makes GrowthPilot one of the central projects in this portfolio.

---

# Author

**Enoch Appiah-Kubi**

Computer Information Technology
Cybersecurity Focus

Interested in the intersection of:

* Artificial Intelligence
* Software Engineering
* Cybersecurity
* Data
* Financial Technology

**Portfolio:** [enochappiahkubi.com](https://enochappiahkubi.com)

**GitHub:** [github.com/enoch-appiah-kubi-greenwood](https://github.com/enoch-appiah-kubi-greenwood)

---

## License

This repository is a personal engineering portfolio. Project code and content are maintained for portfolio, educational, and demonstration purposes.
