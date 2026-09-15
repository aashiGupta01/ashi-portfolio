export type SkillGroup = {
  label: string;
  items: string[];
};

export type Experience = {
  role: string;
  employer: string;
  dates: string;
  context?: string;
  deliverables: {
    title: string;
    summary: string;
    highlights: string[];
  }[];
};

export type Education = {
  degree: string;
  school: string;
  dates: string;
};

export const site = {
  name: "Ashi Gupta",
  title: "Specialist Software Engineer",
  location: "Bengaluru, India",
  email: "ashi.gupta1@outlook.com",
  linkedin: "https://www.linkedin.com/in/ashi-gupta-se",
  github: "",
  resumeFile: "AshiGupta_Resume.pdf",
  metaTitle: "Ashi Gupta | Specialist Software Engineer",
  metaDescription:
    "Specialist software engineer with 8+ years building enterprise-scale distributed systems on Azure and AWS. Microservices, event-driven architecture, and AI-powered platforms.",
  siteUrl: "https://ashigupta.github.io",
} as const;

export const about =
  "Specialist Software Engineer with 8+ years building enterprise-scale distributed systems on Azure and AWS, focused on full-stack engineering, event-driven architecture, and AI-powered product platforms.";

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["C#", "SQL", "T-SQL", "Python", "TypeScript", "JavaScript"],
  },
  {
    label: "Full-Stack & Frameworks",
    items: [
      ".NET 8 / .NET Core",
      "ASP.NET Core",
      "ASP.NET Web API",
      "Entity Framework Core",
      "LINQ",
      "MediatR",
      "Polly",
      "Serilog",
    ],
  },
  {
    label: "Architecture",
    items: [
      "Microservices",
      "Clean Architecture",
      "CQRS",
      "Outbox Pattern",
      "Saga Pattern",
      "Event-Driven",
      "Circuit Breaker",
      "DDD",
    ],
  },
  {
    label: "Cloud",
    items: [
      "AWS (S3, SQS, Lambda, EKS, RDS, EC2, Secrets Manager)",
      "Azure (App Services, Functions, Service Bus, Blob Storage, Application Insights, DevOps)",
    ],
  },
  {
    label: "Data",
    items: ["SQL Server", "Azure SQL Database", "Redis", "OpenSearch", "SOLR"],
  },
  {
    label: "Tooling & Testing",
    items: [
      "Docker",
      "Kubernetes",
      "GitHub Copilot",
      "CI/CD",
      "Azure Pipelines",
      "NUnit",
      "xUnit",
      "SonarQube",
      "Datadog",
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "Specialist Software Engineer",
    employer: "Notified",
    dates: "Dec 2022 - July 2026",
    context: "Press Release Management & Distribution Platform",
    deliverables: [
      {
        title: "Resilient microservices platform",
        summary: "Built .NET 8 services on EKS with health probes, CQRS, and reliable event delivery.",
        highlights: [
          "Introduced the EF Core Outbox Pattern with AWS SQS for eventual consistency and zero message loss.",
          "Applied Polly retry and circuit-breaker policies to reduce P1 incidents by 15%.",
        ],
      },
      {
        title: "Market expansion and intelligent products",
        summary: "Delivered market-specific workflows and customer-facing AI capabilities for the PR distribution platform.",
        highlights: [
          "Engineered the AWS Lambda ERS workflow for German market compliance, increasing feature revenue by 70%.",
          "Developed the AI-powered PR Optimizer and Personalized Pitch features with ASP.NET Core, MediatR, and Redis.",
        ],
      },
      {
        title: "Quality and engineering enablement",
        summary: "Improved delivery confidence through shared standards, integration work, and release-quality tooling.",
        highlights: [
          "Set organization-wide GitHub Copilot context-engineering standards, reducing development cycle time by 40%.",
          "Built the production GO/NO-GO test dashboard and streamlined secure SFTP/FTP feeds into Amazon S3.",
        ],
      },
    ],
  },
  {
    role: "Software Developer",
    employer: "Societe Generale",
    dates: "Dec 2020 - Sept 2022",
    context: "Risk Management Platform",
    deliverables: [
      {
        title: "Risk calculation modernization",
        summary: "Refactored critical C# and .NET Core modules to make risk calculations faster and easier to evolve.",
        highlights: [
          "Improved computational performance and code reusability by 35%.",
          "Established NUnit-led TDD with 90%+ unit coverage across critical modules.",
        ],
      },
      {
        title: "Azure reporting and release operations",
        summary: "Operated distributed reporting services and deployment workflows for a risk management platform.",
        highlights: [
          "Deployed Azure App Service reporting with Service Bus event processing and Application Insights tracing.",
          "Automated batch processing in Python, cutting infrastructure costs by 15%, and led defect-free releases.",
        ],
      },
    ],
  },
  {
    role: "Full Stack Developer",
    employer: "Mindtree",
    dates: "Jun 2018 - Nov 2020",
    context: "Banking, Financial Services & Insurance (BFSI)",
    deliverables: [
      {
        title: "High-performance financial services APIs",
        summary: "Built ASP.NET Core services and Azure data integrations for banking and insurance workloads.",
        highlights: [
          "Reduced average API response time by 40% through EF Core query optimization and server-side caching.",
          "Implemented OWASP-aligned JWT, HSTS, and X-Frame-Options safeguards, improving application security by 50%.",
        ],
      },
      {
        title: "Delivery automation and team enablement",
        summary: "Strengthened engineering feedback loops and mentored an automation-focused Python squad.",
        highlights: [
          "Integrated SonarQube, NLog, and Azure Blob Storage into CI/CD, reducing production defects by 25%.",
          "Built reusable internal automation tools that reduced manual effort by 30%.",
        ],
      },
    ],
  },
];

export const education: Education[] = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    school: "G. L. Bajaj Institute of Technology & Management",
    dates: "2014 - 2018",
  },
];

export const certifications: string[] = [
  "Microsoft Certified: Azure AI Fundamentals (AI-900)",
  "Career Essentials in Generative AI - Microsoft & LinkedIn",
  "HackerRank - Problem Solving (Intermediate)",
];
