const growthPilot = {
  hero: {
    title: "GrowthPilot",
    label: "Flagship Case Study",
    subtitle:
      "A business decision-support platform for pricing, profitability, analytics, and AI-assisted decision workflows.",
    primaryAction: "View GitHub",
    secondaryAction: "Back Home",
  },

  problem: {
    eyebrow: "The Problem",
    title: "Business owners need clearer ways to reason through decisions.",
    body:
      "GrowthPilot was inspired by the challenge of helping entrepreneurs evaluate pricing, profitability, and growth decisions with more structure. Instead of relying only on intuition or disconnected spreadsheets, the goal is to create a workspace that helps users understand the business tradeoffs behind their decisions.",
  },

  solution: {
    eyebrow: "The Solution",
    title: "Analytics first. AI second. Trust always.",
    body:
      "GrowthPilot combines business analytics, structured workflows, and evolving AI capabilities. The project prioritizes reliable calculations and clear recommendations before adding more advanced automation.",
    pillars: [
      {
        title: "Business Analytics",
        text: "Pricing reports, profitability forecasts, break-even analysis, portfolio summaries, and margin sensitivity tools.",
      },
      {
        title: "AI-Assisted Reasoning",
        text: "Structured responses that help users interpret business questions and move toward clearer decisions.",
      },
      {
        title: "Decision Support",
        text: "A guided workspace that connects business context, recommendations, and next-step reasoning.",
      },
    ],
  },

  architecture: {
    eyebrow: "System Architecture",
    title: "Designed as a layered full-stack system.",
    body:
      "GrowthPilot separates the user interface, API layer, business logic, data persistence, and AI reasoning so the platform can evolve without becoming tightly coupled.",
    layers: [
      { name: "React Frontend", detail: "Workspace UI and product experience" },
      { name: "FastAPI Backend", detail: "API routes and application logic" },
      { name: "Business Engine", detail: "Pricing, profitability, and analytics" },
      { name: "AI Layer", detail: "Structured reasoning and recommendations" },
      { name: "SQLite Database", detail: "Persistent product and business data" },
    ],
  },

  evolution: [
    {
      id: 1,
      title: "Python Pricing Engine",
      image: "/images/growthpilot/cli-pricing.png",
      description:
        "Built a command-line application capable of pricing analysis, break-even calculations, forecasting, and profitability reporting.",
      lesson:
        "Strong business logic should exist before building a polished interface.",
    },
    {
      id: 2,
      title: "Business Analytics",
      image: "/images/growthpilot/dashboard.png",
      description:
        "Expanded the platform with portfolio analytics, dashboards, and richer reporting capabilities.",
      lesson:
        "Useful insights create more value than simply displaying raw data.",
    },
    {
      id: 3,
      title: "Web Application",
      image: "/images/growthpilot/landing-page.png",
      description:
        "Rebuilt the experience as a React application to improve usability and support future AI capabilities.",
      lesson:
        "Product architecture should evolve alongside the product itself.",
    },
    {
      id: 4,
      title: "AI Workspace",
      image: "/images/growthpilot/workspace-hero.png",
      description:
        "Designed an AI-assisted workspace where users can ask business questions and receive structured recommendations.",
      lesson:
        "AI should guide decision making, not replace it.",
    },
  ],

  engineeringDecisions: [
    {
      title: "React",
      why: "GrowthPilot needed a modular interface that could evolve as the workspace became more complex.",
      tradeoff: "More setup and structure than a simple static interface.",
      outcome:
        "The frontend now supports reusable workspace, chat, drawer, and panel components.",
    },
    {
      title: "FastAPI",
      why: "The project needed a clean backend layer that could expose business logic and support future AI workflows.",
      tradeoff: "Required separating frontend and backend responsibilities earlier.",
      outcome:
        "GrowthPilot became easier to extend because API logic is separate from the user interface.",
    },
    {
      title: "SQLite",
      why: "Early versions needed reliable persistence without the overhead of a larger database system.",
      tradeoff: "Less scalable than production database systems.",
      outcome:
        "The project gained structured product and cost storage while staying lightweight during rapid iteration.",
    },
    {
      title: "Delayed Live Market Research",
      why: "Competitor price scraping sounded valuable, but it introduced reliability and accuracy risks too early.",
      tradeoff: "The platform temporarily has less automation.",
      outcome:
        "The core analytics engine remains more trustworthy, maintainable, and easier to validate.",
    },
  ],

  journal: [
    {
      number: "01",
      title: "Not every AI feature should be built immediately.",
      text:
        "I considered adding live competitor pricing research, but decided against it because scraped data could be unreliable, difficult to validate, and expensive to maintain. This taught me that strong AI systems are defined by trustworthy recommendations, not by the number of automated features.",
    },
    {
      number: "02",
      title: "Architecture should evolve with the product.",
      text:
        "GrowthPilot started as a command-line pricing tool, but the product direction changed as the problem became clearer. Each architectural change reflected a better understanding of what the user experience needed to become.",
    },
    {
      number: "03",
      title: "Decision support is different from automation.",
      text:
        "The goal is not to replace the business owner’s judgment. The goal is to organize analysis, context, and recommendations so users can make stronger decisions.",
    },
  ],

  capabilities: [
    "Pricing analysis",
    "Profitability forecasting",
    "Break-even calculations",
    "Portfolio analytics",
    "Margin sensitivity analysis",
    "Structured AI responses",
    "Business decision workspace",
    "Persistent data management",
  ],

  futureVision: [
    {
      title: "Persistent Business Memory",
      text: "Allow GrowthPilot to remember business context across sessions.",
    },
    {
      title: "Stronger Reasoning Workflows",
      text: "Improve how recommendations are structured, explained, and supported.",
    },
    {
      title: "Deeper Decision Intelligence",
      text: "Expand analytics into richer business strategy and risk evaluation.",
    },
  ],
};

export default growthPilot;
