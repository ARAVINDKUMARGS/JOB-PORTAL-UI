/**
 * ==============================================================================
 * SpireJobs - Modern Job Portal Platform
 * SpireX Foundation Internship – Task 15: Job Portal UI
 * Author: Antigravity AI Assistant
 * Description: Fully featured, responsive Job Portal with search, multi-filter,
 *              local storage bookmarking, dynamic modal views, and application workflow.
 * ==============================================================================
 */

// ==========================================
// 1. REALISTIC SAMPLE JOB POSTINGS DATASET
// ==========================================
const JOBS_DATA = [
  {
    id: "job-1",
    title: "Senior Frontend Engineer",
    company: "Vercel",
    logoText: "▲",
    logoBg: "linear-gradient(135deg, #000000, #333333)",
    location: "Remote",
    isRemote: true,
    category: "Engineering",
    jobType: "Full-time",
    experienceLevel: "Senior Level",
    salaryMin: 140,
    salaryMax: 180,
    salary: "$140k - $180k / yr",
    postedDate: "1 day ago",
    daysAgo: 1,
    featured: true,
    description: "Vercel is looking for a Senior Frontend Engineer to build high-performance, accessible, and delightful web interfaces that power the Next.js ecosystem and millions of global developers.",
    responsibilities: [
      "Architect and implement modern, responsive user interfaces using Next.js, React, and TypeScript.",
      "Collaborate closely with design systems, product, and platform engineering teams.",
      "Optimize web performance, Core Web Vitals, and client-side rendering pipelines.",
      "Mentor junior and mid-level developers through code reviews and technical guidance."
    ],
    requirements: [
      "5+ years of production experience in modern frontend web development.",
      "Deep expertise in modern JavaScript (ES6+), TypeScript, React, and Next.js.",
      "Strong understanding of CSS architecture, responsive design, and web accessibility (WCAG).",
      "Experience with state management, automated testing (Jest, Playwright), and CI/CD pipelines."
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Web Performance"],
    benefits: ["100% Remote flexibility", "Unlimited PTO", "Home office stipend", "Comprehensive health coverage"]
  },
  {
    id: "job-2",
    title: "Lead UI/UX Product Designer",
    company: "Figma",
    logoText: "Fg",
    logoBg: "linear-gradient(135deg, #a259ff, #f24e1e)",
    location: "San Francisco, CA",
    isRemote: false,
    category: "Design",
    jobType: "Full-time",
    experienceLevel: "Lead / Executive",
    salaryMin: 165,
    salaryMax: 210,
    salary: "$165k - $210k / yr",
    postedDate: "2 days ago",
    daysAgo: 2,
    featured: true,
    description: "Join Figma to lead design initiatives for collaboration workflows. You will craft intuitive, scalable interaction patterns that empower creators and development teams across the globe.",
    responsibilities: [
      "Drive end-to-end design from research and wireframing to high-fidelity interactive prototypes.",
      "Define visual foundations and elevate our design systems and component libraries.",
      "Conduct user interviews, usability tests, and synthesize qualitative and quantitative insights.",
      "Partner with engineering and executive leadership to shape product roadmap."
    ],
    requirements: [
      "7+ years designing world-class SaaS, developer tools, or collaborative software.",
      "Exceptional portfolio highlighting complex workflow problem-solving and visual polish.",
      "Expert knowledge of Figma, design systems, interactive prototyping, and design tokens.",
      "Proven track record of mentoring designers and leading cross-functional design sprints."
    ],
    skills: ["Figma", "Design Systems", "User Research", "Prototyping", "Information Architecture"],
    benefits: ["Competitive equity package", "401(k) matching", "Wellness allowance", "Annual learning grant"]
  },
  {
    id: "job-3",
    title: "Software Engineering Intern (Summer 2027)",
    company: "SpireX Labs",
    logoText: "SX",
    logoBg: "linear-gradient(135deg, #7c3aed, #4f46e5)",
    location: "Bangalore, India",
    isRemote: false,
    category: "Engineering",
    jobType: "Internship",
    experienceLevel: "Entry Level",
    salaryMin: 40,
    salaryMax: 60,
    salary: "$40k - $60k / yr (Pro-rated)",
    postedDate: "Just now",
    daysAgo: 0,
    featured: true,
    description: "SpireX Labs is seeking driven and passionate software engineering interns to work alongside senior mentors building next-generation web applications, APIs, and cloud services.",
    responsibilities: [
      "Assist in writing modular, tested code for web applications and backend APIs.",
      "Participate in daily standups, code reviews, and sprint planning sessions.",
      "Debug technical issues and improve developer tooling documentation.",
      "Deliver a capstone internship project presented to engineering leadership."
    ],
    requirements: [
      "Pursuing a Degree in Computer Science, Software Engineering, or related technical field.",
      "Proficiency in at least one modern language: JavaScript/TypeScript, Python, or Java.",
      "Familiarity with Git version control, HTML/CSS, and RESTful APIs.",
      "Enthusiasm for learning modern frameworks, cloud architecture, and collaborative teamwork."
    ],
    skills: ["JavaScript", "HTML5/CSS3", "Python", "Git", "REST APIs"],
    benefits: ["One-on-one senior mentorship", "Flexible working hours", "Pre-placement offer opportunity", "Free lunches & snacks"]
  },
  {
    id: "job-4",
    title: "Machine Learning Engineer (Generative AI)",
    company: "Anthropic",
    logoText: "An",
    logoBg: "linear-gradient(135deg, #d97706, #b45309)",
    location: "San Francisco, CA",
    isRemote: true,
    category: "Data & AI",
    jobType: "Full-time",
    experienceLevel: "Senior Level",
    salaryMin: 180,
    salaryMax: 240,
    salary: "$180k - $240k / yr",
    postedDate: "3 days ago",
    daysAgo: 3,
    featured: true,
    description: "Work on cutting-edge frontier AI models and safe alignment systems. You will optimize training clusters, fine-tune LLMs, and scale inference serving infrastructure to millions of users.",
    responsibilities: [
      "Build and optimize distributed training and evaluation pipelines for large foundation models.",
      "Implement RLHF (Reinforcement Learning from Human Feedback) and constitutional AI algorithms.",
      "Profile and optimize memory consumption and latency across GPU/TPU clusters.",
      "Collaborate with safety researchers to rigorously evaluate model behavior and robustness."
    ],
    requirements: [
      "MS or PhD in Computer Science, Machine Learning, or equivalent practical experience.",
      "Strong background in PyTorch, CUDA, distributed training frameworks (DeepSpeed, Megatron).",
      "Demonstrated experience fine-tuning and evaluating Transformer architectures.",
      "Solid systems programming and Python expertise."
    ],
    skills: ["PyTorch", "LLMs", "Python", "CUDA", "Distributed Systems", "MLOps"],
    benefits: ["Industry-leading equity", "Full healthcare & dental", "Relocation assistance", "Generous hardware stipend"]
  },
  {
    id: "job-5",
    title: "Senior Product Manager",
    company: "Stripe",
    logoText: "St",
    logoBg: "linear-gradient(135deg, #635bff, #0a2540)",
    location: "Seattle, WA",
    isRemote: false,
    category: "Product",
    jobType: "Full-time",
    experienceLevel: "Senior Level",
    salaryMin: 155,
    salaryMax: 200,
    salary: "$155k - $200k / yr",
    postedDate: "2 days ago",
    daysAgo: 2,
    featured: false,
    description: "Lead Stripe's global payments orchestration and developer checkout experience. You will collaborate with engineering, risk, and sales to launch products millions of businesses depend on.",
    responsibilities: [
      "Define and drive product strategy, roadmaps, and PRDs for developer payment integrations.",
      "Identify customer pain points through analytics, user research, and executive feedback.",
      "Partner with engineering teams to navigate technical trade-offs and deliver on schedule.",
      "Establish KPIs and measure post-launch performance and merchant satisfaction."
    ],
    requirements: [
      "5+ years of product management experience within B2B SaaS, FinTech, or developer platforms.",
      "Proven analytical ability to break down complex architectural systems into actionable steps.",
      "Excellent written communication skills; experience authoring detailed specifications.",
      "Strong technical intuition and comfort discussing APIs and database models."
    ],
    skills: ["Product Strategy", "FinTech", "API Design", "Agile", "User Analytics", "Roadmapping"],
    benefits: ["Hybrid work flexibility", "401(k) retirement plan", "Paid parental leave", "Mental health support"]
  },
  {
    id: "job-6",
    title: "Backend Engineer (Go & Distributed Systems)",
    company: "Cloudflare",
    logoText: "CF",
    logoBg: "linear-gradient(135deg, #f38020, #faad3f)",
    location: "Austin, TX",
    isRemote: true,
    category: "Engineering",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salaryMin: 125,
    salaryMax: 160,
    salary: "$125k - $160k / yr",
    postedDate: "4 days ago",
    daysAgo: 4,
    featured: false,
    description: "Help build the backbone of the internet. You will develop low-latency edge services, DNS caching layers, and high-throughput microservices using Go and Rust.",
    responsibilities: [
      "Design and maintain scalable Go microservices running across global data centers.",
      "Improve system resilience, monitoring, and automated failover mechanics.",
      "Work with protocols like HTTP/3, QUIC, TCP/IP, and gRPC.",
      "Participate in on-call rotations to ensure 99.999% uptime for global traffic."
    ],
    requirements: [
      "3+ years building high-concurrency backend services in Go, Rust, or C++.",
      "Solid knowledge of networking concepts (DNS, TLS, HTTP, TCP/IP, CDN caching).",
      "Experience with distributed key-value stores, Kafka, and Kubernetes.",
      "Strong debugging and profiling skills under high-throughput conditions."
    ],
    skills: ["Go (Golang)", "Distributed Systems", "Kubernetes", "gRPC", "Docker", "Linux"],
    benefits: ["Remote work stipend", "Comprehensive medical & vision", "Generous stock purchase plan", "Gym membership subsidy"]
  },
  {
    id: "job-7",
    title: "Growth Marketing Manager",
    company: "Notion",
    logoText: "N",
    logoBg: "linear-gradient(135deg, #191919, #404040)",
    location: "New York, NY",
    isRemote: false,
    category: "Marketing",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salaryMin: 110,
    salaryMax: 145,
    salary: "$110k - $145k / yr",
    postedDate: "3 days ago",
    daysAgo: 3,
    featured: false,
    description: "Notion is looking for a data-driven Growth Marketer to lead paid acquisition, conversion rate optimization, and multi-channel customer lifecycle experiments.",
    responsibilities: [
      "Manage performance marketing channels across search, social, display, and affiliate.",
      "Run rapid A/B testing on landing pages, sign-up funnels, and activation email drip campaigns.",
      "Analyze full-funnel metrics and collaborate with BI analysts to optimize CAC and LTV.",
      "Produce compelling creative briefs and copy in collaboration with design teams."
    ],
    requirements: [
      "3-5 years managing performance marketing and growth budgets for high-growth tech companies.",
      "Deep expertise with Google Ads, Meta Ads, LinkedIn Ads, and Amplitude / Google Analytics 4.",
      "Strong quantitative and experimentation foundation (A/B testing, hypothesis formulation).",
      "Outstanding copy writing and visual judgment."
    ],
    skills: ["Growth Marketing", "Paid Acquisition", "A/B Testing", "Google Analytics", "CRO", "SEO"],
    benefits: ["Catered lunches", "Annual conference budget", "Generous PTO", "Parental leave"]
  },
  {
    id: "job-8",
    title: "Junior Data Analyst",
    company: "Spotify",
    logoText: "Sp",
    logoBg: "linear-gradient(135deg, #1db954, #1aa34a)",
    location: "London, UK",
    isRemote: true,
    category: "Data & AI",
    jobType: "Full-time",
    experienceLevel: "Entry Level",
    salaryMin: 65,
    salaryMax: 85,
    salary: "£55k - £70k ($65k - $85k)",
    postedDate: "5 days ago",
    daysAgo: 5,
    featured: false,
    description: "Join the Spotify Data team to analyze user engagement, playlist curation patterns, and streaming trends that help millions of creators connect with listeners.",
    responsibilities: [
      "Query large datasets using SQL and BigQuery to extract meaningful product insights.",
      "Build and automate interactive dashboards using Tableau and Looker.",
      "Partner with product managers to evaluate feature rollouts and feature adoption.",
      "Present quantitative findings to product and marketing stakeholders."
    ],
    requirements: [
      "1-2 years of analytical experience (internships count) with strong SQL skills.",
      "Proficiency in data visualization tools (Tableau, Looker, or Power BI).",
      "Familiarity with Python (Pandas, NumPy) or R for exploratory data analysis.",
      "Curious mindset and strong communication skills to explain numbers to non-technical teams."
    ],
    skills: ["SQL", "BigQuery", "Tableau", "Python", "Data Visualization", "Statistics"],
    benefits: ["Spotify Premium for family", "Work from anywhere program", "Wellness allowance", "Pension matching"]
  },
  {
    id: "job-9",
    title: "Part-time UI/UX Consultant",
    company: "Canva",
    logoText: "Ca",
    logoBg: "linear-gradient(135deg, #00c4cc, #7d2ae8)",
    location: "Remote",
    isRemote: true,
    category: "Design",
    jobType: "Part-time",
    experienceLevel: "Mid Level",
    salaryMin: 50,
    salaryMax: 75,
    salary: "$50 - $75 / hour ($50k - $75k est.)",
    postedDate: "1 day ago",
    daysAgo: 1,
    featured: false,
    description: "We are seeking a talented freelance or part-time UI/UX consultant (20 hours/week) to review template designs, optimize onboarding micro-interactions, and conduct visual QA.",
    responsibilities: [
      "Audit and refine design templates for accessibility, readability, and modern aesthetics.",
      "Create lightweight Figma wireframes and rapid interactive prototypes.",
      "Provide constructive critique to our community template contributors.",
      "Attend weekly virtual synchronization meetings with product design leads."
    ],
    requirements: [
      "3+ years of professional digital UI/UX design experience.",
      "Strong portfolio showcasing web UI, typography hierarchy, and color theory.",
      "Expert skills in Figma, Auto Layout, and component variants.",
      "Ability to commit 15-20 flexible hours per week."
    ],
    skills: ["Figma", "UI Design", "Visual Design", "Accessibility", "Design Critique"],
    benefits: ["Completely flexible schedule", "Canva Pro lifetime account", "Competitive hourly rate", "Contract extension possibility"]
  },
  {
    id: "job-10",
    title: "Senior DevOps & Cloud Architect",
    company: "Datadog",
    logoText: "DD",
    logoBg: "linear-gradient(135deg, #632ca6, #8736a5)",
    location: "Berlin, Germany",
    isRemote: false,
    category: "Engineering",
    jobType: "Full-time",
    experienceLevel: "Senior Level",
    salaryMin: 135,
    salaryMax: 175,
    salary: "€120k - €155k ($135k - $175k)",
    postedDate: "2 days ago",
    daysAgo: 2,
    featured: true,
    description: "Design, secure, and scale multi-region AWS and GCP cloud infrastructure serving petabytes of real-time telemetry, logs, and APM traces every single minute.",
    responsibilities: [
      "Manage Infrastructure as Code (IaC) using Terraform, Terragrunt, and Helm.",
      "Architect resilient multi-cluster Kubernetes deployments across European regions.",
      "Implement zero-trust security postures, automated vulnerability scans, and secret managers.",
      "Lead incident triage response and root-cause post-mortem analyses."
    ],
    requirements: [
      "5+ years in DevOps, SRE, or Cloud Infrastructure roles.",
      "In-depth mastery of Kubernetes, Docker, Linux internals, and Terraform.",
      "Hands-on expertise with AWS/GCP cloud platforms and networking (VPC, BGP, peering).",
      "Proficiency in scripting with Bash, Python, or Go."
    ],
    skills: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Linux", "Prometheus"],
    benefits: ["Public transport ticket pass", "Subsidized gym and sports", "German language classes", "Relocation support"]
  },
  {
    id: "job-11",
    title: "Financial Analyst & Strategy Associate",
    company: "Brex",
    logoText: "Bx",
    logoBg: "linear-gradient(135deg, #f25c05, #e04403)",
    location: "New York, NY",
    isRemote: false,
    category: "Finance",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salaryMin: 115,
    salaryMax: 145,
    salary: "$115k - $145k / yr",
    postedDate: "6 days ago",
    daysAgo: 6,
    featured: false,
    description: "Join Brex's Strategic Finance organization to build financial forecast models, evaluate corporate card credit risk parameters, and support executive budgeting decisions.",
    responsibilities: [
      "Construct detailed three-statement financial models, unit economics, and cohort analyses.",
      "Collaborate with product and operations teams to model new credit product lines.",
      "Prepare monthly board packages and investor relations presentations.",
      "Monitor cash burn, capital efficiency, and SaaS enterprise metrics."
    ],
    requirements: [
      "2-4 years of experience in investment banking, management consulting, or corporate FP&A.",
      "Mastery of Excel financial modeling and PowerPoint executive storytelling.",
      "Strong understanding of SaaS revenue recognition, working capital, and FinTech mechanics.",
      "Experience with SQL and financial planning software (Anaplan, NetSuite) is a plus."
    ],
    skills: ["Financial Modeling", "Corporate Finance", "Excel / Sheets", "SaaS Metrics", "SQL"],
    benefits: ["Brex credit card perks", "Annual wellness stipend", "401k match", "Comprehensive health coverage"]
  },
  {
    id: "job-12",
    title: "Mobile App Developer (React Native / iOS)",
    company: "Airbnb",
    logoText: "Ab",
    logoBg: "linear-gradient(135deg, #ff5a5f, #d93b48)",
    location: "Remote",
    isRemote: true,
    category: "Engineering",
    jobType: "Full-time",
    experienceLevel: "Senior Level",
    salaryMin: 150,
    salaryMax: 195,
    salary: "$150k - $195k / yr",
    postedDate: "3 days ago",
    daysAgo: 3,
    featured: true,
    description: "Craft seamless, delightful mobile booking and host management experiences on iOS and Android for millions of travelers worldwide using modern mobile architecture.",
    responsibilities: [
      "Develop fluid, touch-optimized mobile features using React Native and native Swift/Kotlin modules.",
      "Collaborate with design and product teams to implement pixel-perfect micro-animations.",
      "Optimize app startup performance, memory footprints, and offline caching.",
      "Contribute to internal mobile build tooling and automated end-to-end testing."
    ],
    requirements: [
      "4+ years of mobile application development experience on iOS or Android.",
      "Deep expertise in React Native, TypeScript, Redux/Zustand, and native bridges.",
      "Strong eye for visual animation details, transitions, and gesture handling.",
      "Experience releasing and maintaining apps on Apple App Store & Google Play."
    ],
    skills: ["React Native", "iOS / Swift", "TypeScript", "Mobile UI", "GraphQL"],
    benefits: ["Annual Airbnb travel credit ($2,000+)", "Remote work flexibility", "Top-tier health benefits", "Stock grant"]
  },
  {
    id: "job-13",
    title: "Design Systems & Frontend Intern",
    company: "Linear",
    logoText: "Ln",
    logoBg: "linear-gradient(135deg, #5e6ad2, #4752c4)",
    location: "Remote",
    isRemote: true,
    category: "Engineering",
    jobType: "Internship",
    experienceLevel: "Entry Level",
    salaryMin: 45,
    salaryMax: 65,
    salary: "$45k - $65k / yr (Pro-rated)",
    postedDate: "Just now",
    daysAgo: 0,
    featured: true,
    description: "Help build the most polished developer tools in the world. As an intern, you will work on our open design system components, keyboard shortcuts engine, and dark mode tokens.",
    responsibilities: [
      "Implement accessible, reusable UI components in React and TypeScript.",
      "Document component specs, interactive states, and storybook entries.",
      "Fix visual bugs and refine keyboard shortcut interactions.",
      "Collaborate directly with founders and core product engineers."
    ],
    requirements: [
      "Student or recent graduate in Computer Science, HCI, or self-taught web developer with a portfolio.",
      "Proficiency in modern HTML, CSS, JavaScript, and React.",
      "Strong aesthetic sensibility and attention to typography, margins, and animation timings.",
      "Comfortable with Git and working in asynchronous remote environments."
    ],
    skills: ["React", "CSS3", "Design Systems", "TypeScript", "Storybook", "Accessibility"],
    benefits: ["Direct founder mentorship", "High-spec MacBook Pro provided", "Flexible hours", "Full-time conversion potential"]
  },
  {
    id: "job-14",
    title: "Technical Content & SEO Specialist",
    company: "Shopify",
    logoText: "Sh",
    logoBg: "linear-gradient(135deg, #96bf48, #7ab55c)",
    location: "Toronto, ON (Remote)",
    isRemote: true,
    category: "Marketing",
    jobType: "Contract",
    experienceLevel: "Mid Level",
    salaryMin: 70,
    salaryMax: 95,
    salary: "$70k - $95k / yr (Contract)",
    postedDate: "4 days ago",
    daysAgo: 4,
    featured: false,
    description: "Create in-depth technical tutorials, ecommerce documentation, and SEO-optimized guidebooks that help independent entrepreneurs launch successful global online stores.",
    responsibilities: [
      "Research, outline, and write long-form technical guides for developer and merchant audiences.",
      "Conduct keyword research, competitive SERP analysis, and on-page SEO optimization.",
      "Collaborate with developers to create code snippets and tutorial repositories.",
      "Track content performance, organic ranking growth, and conversion funnels."
    ],
    requirements: [
      "3+ years creating high-ranking technical or developer marketing content.",
      "Working knowledge of HTML, CSS, web development concepts, and ecommerce platforms.",
      "Proficiency with SEO tools (Ahrefs, Semrush, Google Search Console).",
      "Native or bilingual English writing proficiency with clear, engaging technical voice."
    ],
    skills: ["Technical Writing", "SEO", "Content Marketing", "Ahrefs", "Google Analytics"],
    benefits: ["6-month renewable contract", "Flexible async working schedule", "Free Shopify store perks", "Competitive rate"]
  },
  {
    id: "job-15",
    title: "Lead Cybersecurity & Compliance Architect",
    company: "Atlassian",
    logoText: "At",
    logoBg: "linear-gradient(135deg, #0052cc, #2684ff)",
    location: "San Francisco, CA",
    isRemote: true,
    category: "Engineering",
    jobType: "Full-time",
    experienceLevel: "Lead / Executive",
    salaryMin: 175,
    salaryMax: 225,
    salary: "$175k - $225k / yr",
    postedDate: "5 days ago",
    daysAgo: 5,
    featured: false,
    description: "Protect critical enterprise data for Jira, Confluence, and Bitbucket. Lead threat modeling, SOC 2 compliance, penetration testing, and zero-trust cloud security architecture.",
    responsibilities: [
      "Lead enterprise cloud security architecture reviews and automated vulnerability remediation.",
      "Drive compliance frameworks including SOC 2 Type II, ISO 27001, and GDPR certifications.",
      "Coordinate red team exercises and manage external bug bounty vulnerability disclosures.",
      "Train engineering teams on secure coding principles and OWASP Top 10 mitigations."
    ],
    requirements: [
      "8+ years in information security, cloud architecture, and security compliance.",
      "Recognized certifications such as CISSP, CISM, or AWS Certified Security Specialty.",
      "Deep understanding of cloud infrastructure (AWS/GCP), IAM, SSO, and encryption protocols.",
      "Exceptional leadership and cross-functional communication abilities."
    ],
    skills: ["Cloud Security", "SOC 2", "OWASP", "Penetration Testing", "Threat Modeling", "IAM"],
    benefits: ["Remote-first flexibility", "Comprehensive wellness program", "Generous equity & bonus", "Family care support"]
  },
  {
    id: "job-16",
    title: "Junior QA Automation Engineer",
    company: "SpireX Labs",
    logoText: "SX",
    logoBg: "linear-gradient(135deg, #10b981, #059669)",
    location: "Bangalore, India",
    isRemote: false,
    category: "Engineering",
    jobType: "Full-time",
    experienceLevel: "Entry Level",
    salaryMin: 50,
    salaryMax: 70,
    salary: "$50k - $70k / yr",
    postedDate: "1 day ago",
    daysAgo: 1,
    featured: false,
    description: "Ensure flawless user experiences across SpireJobs and partner portals. You will design automated regression test suites, run performance benchmarks, and catch bugs before release.",
    responsibilities: [
      "Write automated end-to-end and integration tests using Playwright and Cypress.",
      "Collaborate with developers to create test plans for new feature specifications.",
      "Integrate automated test runs into GitHub Actions CI/CD workflows.",
      "Document clear bug reports with reproducible steps and browser logs."
    ],
    requirements: [
      "1-2 years of software testing experience (or rigorous internship/project experience).",
      "Hands-on scripting ability in JavaScript, TypeScript, or Python.",
      "Familiarity with Playwright, Cypress, Selenium, or Postman for API testing.",
      "Sharp attention to detail and a passion for software quality and stability."
    ],
    skills: ["Playwright", "Cypress", "JavaScript", "Postman", "CI/CD", "Test Automation"],
    benefits: ["Mentorship by QA architects", "Health and medical insurance", "Hybrid work flexibility", "Certification reimbursements"]
  }
];

// ==========================================
// 2. LOCAL STORAGE KEYS & APPLICATION STATE
// ==========================================
const STORAGE_KEYS = {
  SAVED_JOBS: "spirejobs_saved_ids",
  APPLIED_JOBS: "spirejobs_applied_ids"
};

// Application State Object
const AppState = {
  // Current filters
  filters: {
    keyword: "",
    location: "All",
    category: "All",
    jobTypes: [],       // Array of strings (Full-time, Part-time, Internship, Remote, Contract)
    expLevels: [],      // Array of strings (Entry Level, Mid Level, Senior Level, Lead / Executive)
    minSalary: 0,       // Number in thousands
    sortBy: "newest",   // newest | salaryHigh | salaryLow | alphabetical
    viewMode: "all"     // all | saved
  },

  // Persisted ID Sets
  savedJobIds: new Set(),
  appliedJobIds: new Set(),

  // Active Job for Modals
  currentSelectedJobId: null
};

// ==========================================
// 3. INITIALIZATION & STORAGE LOAD
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initStorage();
  initDomElements();
  bindEventListeners();
  renderJobCards();
  updateSavedBadges();
});

/**
 * Load saved bookmarks and applied jobs from browser localStorage
 */
function initStorage() {
  try {
    const rawSaved = localStorage.getItem(STORAGE_KEYS.SAVED_JOBS);
    if (rawSaved) {
      const parsed = JSON.parse(rawSaved);
      if (Array.isArray(parsed)) {
        AppState.savedJobIds = new Set(parsed);
      }
    }

    const rawApplied = localStorage.getItem(STORAGE_KEYS.APPLIED_JOBS);
    if (rawApplied) {
      const parsed = JSON.parse(rawApplied);
      if (Array.isArray(parsed)) {
        AppState.appliedJobIds = new Set(parsed);
      }
    }
  } catch (err) {
    console.warn("Storage access failed or is disabled:", err);
  }
}

/**
 * Persist current state to localStorage
 */
function persistStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.SAVED_JOBS, JSON.stringify(Array.from(AppState.savedJobIds)));
    localStorage.setItem(STORAGE_KEYS.APPLIED_JOBS, JSON.stringify(Array.from(AppState.appliedJobIds)));
  } catch (err) {
    console.warn("Could not save to localStorage:", err);
  }
}

// ==========================================
// 4. DOM REFERENCES CACHE
// ==========================================
let DOM = {};

function initDomElements() {
  DOM = {
    // Header & Mobile Nav
    mobileMenuBtn: document.getElementById("mobileMenuBtn"),
    navLinks: document.getElementById("navLinks"),
    navSavedJobsBtn: document.getElementById("navSavedJobsBtn"),
    savedCountBadge: document.getElementById("savedCountBadge"),
    postJobBtn: document.getElementById("postJobBtn"),

    // Hero Search
    heroSearchForm: document.getElementById("heroSearchForm"),
    heroTitleInput: document.getElementById("heroTitleInput"),
    heroLocationSelect: document.getElementById("heroLocationSelect"),
    heroCategorySelect: document.getElementById("heroCategorySelect"),
    heroSearchBtn: document.getElementById("heroSearchBtn"),
    popularTagsContainer: document.getElementById("popularTagsContainer"),
    categoriesGrid: document.getElementById("categoriesGrid"),

    // Sidebar Filters
    filtersSidebar: document.getElementById("filtersSidebar"),
    sidebarKeywordInput: document.getElementById("sidebarKeywordInput"),
    sidebarCategorySelect: document.getElementById("sidebarCategorySelect"),
    sidebarLocationSelect: document.getElementById("sidebarLocationSelect"),
    salaryRangeInput: document.getElementById("salaryRangeInput"),
    salaryDisplay: document.getElementById("salaryDisplay"),
    clearFiltersBtn: document.getElementById("clearFiltersBtn"),
    mobileFilterToggleBtn: document.getElementById("mobileFilterToggleBtn"),
    applyMobileFiltersBtn: document.getElementById("applyMobileFiltersBtn"),
    activeFilterBadge: document.getElementById("activeFilterBadge"),

    // Listings Controls & Containers
    resultsCountText: document.getElementById("resultsCountText"),
    viewAllJobsBtn: document.getElementById("viewAllJobsBtn"),
    viewSavedJobsBtn: document.getElementById("viewSavedJobsBtn"),
    savedTabCount: document.getElementById("savedTabCount"),
    sortBySelect: document.getElementById("sortBySelect"),
    activeFiltersBar: document.getElementById("activeFiltersBar"),
    activeChipsWrap: document.getElementById("activeChipsWrap"),
    clearChipsBtn: document.getElementById("clearChipsBtn"),
    jobCardsContainer: document.getElementById("jobCardsContainer"),
    emptyStateContainer: document.getElementById("emptyStateContainer"),
    emptyResetBtn: document.getElementById("emptyResetBtn"),

    // View Details Modal
    detailsModalOverlay: document.getElementById("detailsModalOverlay"),
    closeDetailsModalBtn: document.getElementById("closeDetailsModalBtn"),
    detailsModalHeader: document.getElementById("detailsModalHeader"),
    detailsModalBody: document.getElementById("detailsModalBody"),
    detailsModalFooter: document.getElementById("detailsModalFooter"),

    // Apply Now Modal
    applyModalOverlay: document.getElementById("applyModalOverlay"),
    closeApplyModalBtn: document.getElementById("closeApplyModalBtn"),
    applyFormContent: document.getElementById("applyFormContent"),
    applySuccessView: document.getElementById("applySuccessView"),
    jobApplicationForm: document.getElementById("jobApplicationForm"),
    applyJobId: document.getElementById("applyJobId"),
    applyModalTitle: document.getElementById("applyModalTitle"),
    applyModalSubtitle: document.getElementById("applyModalSubtitle"),
    applicantName: document.getElementById("applicantName"),
    applicantEmail: document.getElementById("applicantEmail"),
    applicantPhone: document.getElementById("applicantPhone"),
    applicantExp: document.getElementById("applicantExp"),
    applicantPortfolio: document.getElementById("applicantPortfolio"),
    applicantResume: document.getElementById("applicantResume"),
    applicantNote: document.getElementById("applicantNote"),
    fileDropZone: document.getElementById("fileDropZone"),
    fileDropText: document.getElementById("fileDropText"),
    cancelApplyBtn: document.getElementById("cancelApplyBtn"),
    submitApplicationBtn: document.getElementById("submitApplicationBtn"),
    successDoneBtn: document.getElementById("successDoneBtn"),
    successJobRole: document.getElementById("successJobRole"),
    successCompany: document.getElementById("successCompany"),

    // Employer Modal
    postJobModalOverlay: document.getElementById("postJobModalOverlay"),
    closePostJobModalBtn: document.getElementById("closePostJobModalBtn"),
    postJobOkBtn: document.getElementById("postJobOkBtn"),

    // Toast Container
    toastContainer: document.getElementById("toastContainer"),

    // Footer Links
    footerSavedLink: document.getElementById("footerSavedLink"),
    newsletterForm: document.getElementById("newsletterForm"),
    newsletterEmail: document.getElementById("newsletterEmail")
  };
}

// ==========================================
// 5. EVENT LISTENERS SETUP
// ==========================================
function bindEventListeners() {
  // --- Mobile Menu Toggle ---
  DOM.mobileMenuBtn.addEventListener("click", () => {
    const isOpen = DOM.navLinks.classList.toggle("mobile-open");
    DOM.mobileMenuBtn.setAttribute("aria-expanded", isOpen);
    DOM.mobileMenuBtn.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  // Close mobile nav when clicking a nav link
  DOM.navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      DOM.navLinks.classList.remove("mobile-open");
      DOM.mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

  // --- Mobile Filter Drawer Toggle ---
  DOM.mobileFilterToggleBtn.addEventListener("click", () => {
    DOM.filtersSidebar.classList.add("mobile-open");
  });

  DOM.applyMobileFiltersBtn.addEventListener("click", () => {
    DOM.filtersSidebar.classList.remove("mobile-open");
  });

  // --- Hero Search Form Submission ---
  DOM.heroSearchBtn.addEventListener("click", handleHeroSearch);
  DOM.heroSearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleHeroSearch();
  });

  // --- Hero Popular Chips Click ---
  DOM.popularTagsContainer.addEventListener("click", (e) => {
    const chip = e.target.closest(".tag-chip");
    if (!chip) return;
    const query = chip.getAttribute("data-query");
    if (!query) return;

    // Check if query is category, type, or general keyword
    if (query === "Remote") {
      const typeCb = document.getElementById("typeRemote");
      if (typeCb) typeCb.checked = true;
      syncJobTypesFilter();
    } else if (query === "Internship") {
      const typeCb = document.getElementById("typeInternship");
      if (typeCb) typeCb.checked = true;
      syncJobTypesFilter();
    } else {
      AppState.filters.keyword = query;
      DOM.heroTitleInput.value = query;
      DOM.sidebarKeywordInput.value = query;
    }

    scrollToJobSection();
    renderJobCards();
    showToast(`Filtering for "${query}"`, "info");
  });

  // --- Categories Section Card Click ---
  DOM.categoriesGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".category-card");
    if (!card) return;
    const category = card.getAttribute("data-category");
    if (!category) return;

    AppState.filters.category = category;
    DOM.sidebarCategorySelect.value = category;
    DOM.heroCategorySelect.value = category;

    scrollToJobSection();
    renderJobCards();
    showToast(`Showing ${category} jobs`, "info");
  });

  // --- Sidebar Live Search Input ---
  DOM.sidebarKeywordInput.addEventListener("input", (e) => {
    AppState.filters.keyword = e.target.value.trim();
    DOM.heroTitleInput.value = AppState.filters.keyword;
    renderJobCards();
  });

  // --- Sidebar Category Select ---
  DOM.sidebarCategorySelect.addEventListener("change", (e) => {
    AppState.filters.category = e.target.value;
    DOM.heroCategorySelect.value = e.target.value === "All" ? "" : e.target.value;
    renderJobCards();
  });

  // --- Sidebar Location Select ---
  DOM.sidebarLocationSelect.addEventListener("change", (e) => {
    AppState.filters.location = e.target.value;
    DOM.heroLocationSelect.value = e.target.value === "All" ? "" : e.target.value;
    renderJobCards();
  });

  // --- Job Type Checkboxes ---
  document.querySelectorAll('input[name="jobType"]').forEach(cb => {
    cb.addEventListener("change", () => {
      syncJobTypesFilter();
      renderJobCards();
    });
  });

  // --- Experience Level Checkboxes ---
  document.querySelectorAll('input[name="expLevel"]').forEach(cb => {
    cb.addEventListener("change", () => {
      syncExpLevelsFilter();
      renderJobCards();
    });
  });

  // --- Salary Range Slider ---
  DOM.salaryRangeInput.addEventListener("input", (e) => {
    const val = parseInt(e.target.value, 10);
    AppState.filters.minSalary = val;
    DOM.salaryDisplay.textContent = val === 0 ? "$0k+" : `$${val}k+`;
    renderJobCards();
  });

  // --- Clear / Reset Filters ---
  DOM.clearFiltersBtn.addEventListener("click", resetAllFilters);
  DOM.emptyResetBtn.addEventListener("click", resetAllFilters);
  DOM.clearChipsBtn.addEventListener("click", resetAllFilters);

  // --- View Mode Tabs (All Jobs vs Saved Jobs) ---
  DOM.viewAllJobsBtn.addEventListener("click", () => switchViewMode("all"));
  DOM.viewSavedJobsBtn.addEventListener("click", () => switchViewMode("saved"));
  DOM.navSavedJobsBtn.addEventListener("click", () => {
    switchViewMode("saved");
    scrollToJobSection();
  });
  DOM.footerSavedLink.addEventListener("click", (e) => {
    e.preventDefault();
    switchViewMode("saved");
    scrollToJobSection();
  });

  // --- Footer Category Links ---
  document.querySelectorAll(".footer-cat-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = link.getAttribute("data-cat");
      if (cat) {
        AppState.filters.category = cat;
        DOM.sidebarCategorySelect.value = cat;
        DOM.heroCategorySelect.value = cat;
        scrollToJobSection();
        renderJobCards();
      }
    });
  });

  // --- Sort By Select ---
  DOM.sortBySelect.addEventListener("change", (e) => {
    AppState.filters.sortBy = e.target.value;
    renderJobCards();
  });

  // --- Details Modal Controls ---
  DOM.closeDetailsModalBtn.addEventListener("click", closeDetailsModal);
  DOM.detailsModalOverlay.addEventListener("click", (e) => {
    if (e.target === DOM.detailsModalOverlay) closeDetailsModal();
  });

  // --- Apply Modal Controls ---
  DOM.closeApplyModalBtn.addEventListener("click", closeApplyModal);
  DOM.cancelApplyBtn.addEventListener("click", closeApplyModal);
  DOM.successDoneBtn.addEventListener("click", closeApplyModal);
  DOM.applyModalOverlay.addEventListener("click", (e) => {
    if (e.target === DOM.applyModalOverlay) closeApplyModal();
  });

  // --- File Upload / Drag and Drop for Resume ---
  DOM.applicantResume.addEventListener("change", handleResumeFileSelect);

  DOM.fileDropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    DOM.fileDropZone.classList.add("dragover");
  });

  DOM.fileDropZone.addEventListener("dragleave", () => {
    DOM.fileDropZone.classList.remove("dragover");
  });

  DOM.fileDropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    DOM.fileDropZone.classList.remove("dragover");
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      DOM.applicantResume.files = e.dataTransfer.files;
      handleResumeFileSelect();
    }
  });

  // --- Application Form Submission ---
  DOM.jobApplicationForm.addEventListener("submit", handleApplyFormSubmit);

  // --- Employer Post Job Modal ---
  DOM.postJobBtn.addEventListener("click", () => {
    DOM.postJobModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  DOM.closePostJobModalBtn.addEventListener("click", () => {
    DOM.postJobModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  DOM.postJobOkBtn.addEventListener("click", () => {
    DOM.postJobModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
    scrollToJobSection();
  });

  DOM.postJobModalOverlay.addEventListener("click", (e) => {
    if (e.target === DOM.postJobModalOverlay) {
      DOM.postJobModalOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // --- Newsletter Mock ---
  DOM.newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = DOM.newsletterEmail.value.trim();
    if (email) {
      showToast(`Subscribed ${email} to weekly job alerts!`, "success");
      DOM.newsletterEmail.value = "";
    }
  });

  // --- Global Keyboard Accessibility (Escape key closes modals) ---
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDetailsModal();
      closeApplyModal();
      DOM.postJobModalOverlay.classList.remove("active");
      DOM.filtersSidebar.classList.remove("mobile-open");
      DOM.navLinks.classList.remove("mobile-open");
      document.body.style.overflow = "";
    }
  });
}

// ==========================================
// 6. FILTERING, SEARCHING & SORTING LOGIC
// ==========================================

function handleHeroSearch() {
  const kw = DOM.heroTitleInput.value.trim();
  const loc = DOM.heroLocationSelect.value;
  const cat = DOM.heroCategorySelect.value;

  AppState.filters.keyword = kw;
  DOM.sidebarKeywordInput.value = kw;

  AppState.filters.location = loc || "All";
  DOM.sidebarLocationSelect.value = loc || "All";

  AppState.filters.category = cat || "All";
  DOM.sidebarCategorySelect.value = cat || "All";

  scrollToJobSection();
  renderJobCards();
  showToast("Search filters applied", "info");
}

function syncJobTypesFilter() {
  const checked = [];
  document.querySelectorAll('input[name="jobType"]:checked').forEach(cb => {
    checked.push(cb.value);
  });
  AppState.filters.jobTypes = checked;
}

function syncExpLevelsFilter() {
  const checked = [];
  document.querySelectorAll('input[name="expLevel"]:checked').forEach(cb => {
    checked.push(cb.value);
  });
  AppState.filters.expLevels = checked;
}

/**
 * Filter the full dataset according to active AppState filters
 */
function getFilteredJobs() {
  let list = JOBS_DATA.slice();

  // View Mode: 'saved' filter
  if (AppState.filters.viewMode === "saved") {
    list = list.filter(job => AppState.savedJobIds.has(job.id));
  }

  // Keyword Search: match title, company, description, or skills
  if (AppState.filters.keyword) {
    const term = AppState.filters.keyword.toLowerCase();
    list = list.filter(job => {
      return (
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.description.toLowerCase().includes(term) ||
        job.skills.some(skill => skill.toLowerCase().includes(term))
      );
    });
  }

  // Category Filter
  if (AppState.filters.category && AppState.filters.category !== "All") {
    list = list.filter(job => job.category === AppState.filters.category);
  }

  // Location Filter
  if (AppState.filters.location && AppState.filters.location !== "All") {
    if (AppState.filters.location === "Remote") {
      list = list.filter(job => job.isRemote);
    } else {
      list = list.filter(job => job.location.includes(AppState.filters.location));
    }
  }

  // Job Type Checkboxes
  if (AppState.filters.jobTypes.length > 0) {
    list = list.filter(job => {
      return AppState.filters.jobTypes.some(type => {
        if (type === "Remote") return job.isRemote;
        return job.jobType.toLowerCase() === type.toLowerCase();
      });
    });
  }

  // Experience Level Checkboxes
  if (AppState.filters.expLevels.length > 0) {
    list = list.filter(job => {
      return AppState.filters.expLevels.includes(job.experienceLevel);
    });
  }

  // Minimum Salary Slider
  if (AppState.filters.minSalary > 0) {
    list = list.filter(job => job.salaryMax >= AppState.filters.minSalary);
  }

  // Sorting
  switch (AppState.filters.sortBy) {
    case "salaryHigh":
      list.sort((a, b) => b.salaryMax - a.salaryMax);
      break;
    case "salaryLow":
      list.sort((a, b) => a.salaryMin - b.salaryMin);
      break;
    case "alphabetical":
      list.sort((a, b) => a.company.localeCompare(b.company));
      break;
    case "newest":
    default:
      list.sort((a, b) => a.daysAgo - b.daysAgo);
      break;
  }

  return list;
}

/**
 * Resets all user filters to default states
 */
function resetAllFilters() {
  AppState.filters.keyword = "";
  AppState.filters.location = "All";
  AppState.filters.category = "All";
  AppState.filters.jobTypes = [];
  AppState.filters.expLevels = [];
  AppState.filters.minSalary = 0;
  AppState.filters.sortBy = "newest";

  // Reset inputs
  DOM.heroTitleInput.value = "";
  DOM.heroLocationSelect.value = "";
  DOM.heroCategorySelect.value = "";
  DOM.sidebarKeywordInput.value = "";
  DOM.sidebarCategorySelect.value = "All";
  DOM.sidebarLocationSelect.value = "All";
  DOM.salaryRangeInput.value = 0;
  DOM.salaryDisplay.textContent = "$0k+";
  DOM.sortBySelect.value = "newest";

  document.querySelectorAll('input[name="jobType"]').forEach(cb => (cb.checked = false));
  document.querySelectorAll('input[name="expLevel"]').forEach(cb => (cb.checked = false));

  renderJobCards();
  showToast("All filters have been reset", "info");
}

/**
 * Switch between "All Jobs" view and "Saved Jobs" view
 */
function switchViewMode(mode) {
  AppState.filters.viewMode = mode;

  if (mode === "all") {
    DOM.viewAllJobsBtn.classList.add("active");
    DOM.viewAllJobsBtn.setAttribute("aria-selected", "true");
    DOM.viewSavedJobsBtn.classList.remove("active");
    DOM.viewSavedJobsBtn.setAttribute("aria-selected", "false");
  } else {
    DOM.viewSavedJobsBtn.classList.add("active");
    DOM.viewSavedJobsBtn.setAttribute("aria-selected", "true");
    DOM.viewAllJobsBtn.classList.remove("active");
    DOM.viewAllJobsBtn.setAttribute("aria-selected", "false");
  }

  renderJobCards();
}

/**
 * Update active filter chip pills UI
 */
function updateActiveFilterChips() {
  const chips = [];

  if (AppState.filters.keyword) {
    chips.push({
      label: `Keyword: "${AppState.filters.keyword}"`,
      remove: () => {
        AppState.filters.keyword = "";
        DOM.heroTitleInput.value = "";
        DOM.sidebarKeywordInput.value = "";
        renderJobCards();
      }
    });
  }

  if (AppState.filters.category !== "All") {
    chips.push({
      label: `Category: ${AppState.filters.category}`,
      remove: () => {
        AppState.filters.category = "All";
        DOM.sidebarCategorySelect.value = "All";
        DOM.heroCategorySelect.value = "";
        renderJobCards();
      }
    });
  }

  if (AppState.filters.location !== "All") {
    chips.push({
      label: `Location: ${AppState.filters.location}`,
      remove: () => {
        AppState.filters.location = "All";
        DOM.sidebarLocationSelect.value = "All";
        DOM.heroLocationSelect.value = "";
        renderJobCards();
      }
    });
  }

  AppState.filters.jobTypes.forEach(type => {
    chips.push({
      label: `Type: ${type}`,
      remove: () => {
        const cb = document.querySelector(`input[name="jobType"][value="${type}"]`);
        if (cb) cb.checked = false;
        syncJobTypesFilter();
        renderJobCards();
      }
    });
  });

  AppState.filters.expLevels.forEach(exp => {
    chips.push({
      label: `Exp: ${exp}`,
      remove: () => {
        const cb = document.querySelector(`input[name="expLevel"][value="${exp}"]`);
        if (cb) cb.checked = false;
        syncExpLevelsFilter();
        renderJobCards();
      }
    });
  });

  if (AppState.filters.minSalary > 0) {
    chips.push({
      label: `Min: $${AppState.filters.minSalary}k+`,
      remove: () => {
        AppState.filters.minSalary = 0;
        DOM.salaryRangeInput.value = 0;
        DOM.salaryDisplay.textContent = "$0k+";
        renderJobCards();
      }
    });
  }

  // Active filter badge count for mobile
  DOM.activeFilterBadge.textContent = chips.length;

  if (chips.length > 0) {
    DOM.activeFiltersBar.style.display = "flex";
    DOM.activeChipsWrap.innerHTML = "";

    chips.forEach(chip => {
      const chipEl = document.createElement("span");
      chipEl.className = "active-chip";
      chipEl.innerHTML = `
        ${escapeHtml(chip.label)}
        <button type="button" aria-label="Remove filter"><i class="fa-solid fa-xmark"></i></button>
      `;
      chipEl.querySelector("button").addEventListener("click", chip.remove);
      DOM.activeChipsWrap.appendChild(chipEl);
    });
  } else {
    DOM.activeFiltersBar.style.display = "none";
    DOM.activeChipsWrap.innerHTML = "";
  }
}

// ==========================================
// 7. RENDERING DYNAMIC JOB CARDS
// ==========================================
function renderJobCards() {
  const filteredJobs = getFilteredJobs();

  // Update Meta Header
  const count = filteredJobs.length;
  if (AppState.filters.viewMode === "saved") {
    DOM.resultsCountText.textContent = `Saved Jobs (${count})`;
  } else {
    DOM.resultsCountText.textContent = `Showing ${count} Job${count === 1 ? "" : "s"}`;
  }

  // Update Chips
  updateActiveFilterChips();

  // If no jobs match, display Empty State
  if (count === 0) {
    DOM.jobCardsContainer.innerHTML = "";
    DOM.emptyStateContainer.style.display = "block";
    return;
  }

  DOM.emptyStateContainer.style.display = "none";
  DOM.jobCardsContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();

  filteredJobs.forEach(job => {
    const isSaved = AppState.savedJobIds.has(job.id);
    const isApplied = AppState.appliedJobIds.has(job.id);

    const card = document.createElement("article");
    card.className = `job-card ${job.featured ? "featured" : ""}`;
    card.setAttribute("data-id", job.id);

    // Job Type Class for color badge
    const typeClass = getBadgeTypeClass(job.jobType);

    card.innerHTML = `
      <!-- Header Row -->
      <div class="card-header-row">
        <div class="card-company-group">
          <div class="company-logo-avatar" style="background: ${job.logoBg};">
            ${escapeHtml(job.logoText)}
          </div>
          <div class="company-meta">
            <h3 class="job-title-link" role="button" tabindex="0" title="Click to view details">
              ${escapeHtml(job.title)}
            </h3>
            <div class="company-sub-row">
              <span class="company-name">${escapeHtml(job.company)}</span>
              <span class="verified-badge" title="Verified employer">
                <i class="fa-solid fa-circle-check"></i> Verified
              </span>
            </div>
          </div>
        </div>

        <div class="card-top-actions">
          <button 
            type="button" 
            class="bookmark-btn ${isSaved ? "saved" : ""}" 
            data-action="bookmark"
            title="${isSaved ? "Remove from saved" : "Bookmark this job"}"
            aria-label="${isSaved ? "Remove from saved" : "Bookmark this job"}"
          >
            <i class="${isSaved ? "fa-solid" : "fa-regular"} fa-bookmark"></i>
          </button>
        </div>
      </div>

      <!-- Badges Row -->
      <div class="card-badges-row">
        <span class="badge badge-location">
          <i class="fa-solid fa-location-dot"></i> ${escapeHtml(job.location)}
        </span>
        <span class="badge ${typeClass}">
          <i class="fa-solid fa-briefcase"></i> ${escapeHtml(job.jobType)}
        </span>
        <span class="badge badge-salary">
          <i class="fa-solid fa-money-bill-wave"></i> ${escapeHtml(job.salary)}
        </span>
        <span class="badge badge-exp">
          <i class="fa-solid fa-user-tie"></i> ${escapeHtml(job.experienceLevel)}
        </span>
        ${job.isRemote ? '<span class="badge badge-type-remote"><i class="fa-solid fa-house-laptop"></i> Remote Option</span>' : ""}
      </div>

      <!-- Short Snippet -->
      <p class="card-description">${escapeHtml(job.description)}</p>

      <!-- Skills Row -->
      <div class="card-skills-row">
        ${job.skills.slice(0, 5).map(skill => `<span class="skill-tag">${escapeHtml(skill)}</span>`).join("")}
        ${job.skills.length > 5 ? `<span class="skill-tag">+${job.skills.length - 5}</span>` : ""}
      </div>

      <!-- Footer Row -->
      <div class="card-footer-row">
        <span class="card-posted-date">
          <i class="fa-regular fa-clock"></i> Posted ${escapeHtml(job.postedDate)}
        </span>

        <div class="card-actions-group">
          <button type="button" class="btn btn-secondary btn-details" data-action="details">
            <i class="fa-solid fa-circle-info"></i> View Details
          </button>
          ${isApplied 
            ? `<button type="button" class="btn btn-applied" disabled>
                 <i class="fa-solid fa-check"></i> Applied
               </button>`
            : `<button type="button" class="btn btn-primary btn-apply" data-action="apply">
                 <i class="fa-solid fa-paper-plane"></i> Apply Now
               </button>`
          }
        </div>
      </div>
    `;

    // Event delegation on card
    card.addEventListener("click", (e) => {
      const target = e.target;
      const bookmarkBtn = target.closest('[data-action="bookmark"]');
      const detailsBtn = target.closest('[data-action="details"]');
      const applyBtn = target.closest('[data-action="apply"]');
      const titleLink = target.closest(".job-title-link");

      if (bookmarkBtn) {
        e.stopPropagation();
        toggleBookmarkJob(job.id);
        return;
      }

      if (applyBtn) {
        e.stopPropagation();
        openApplyModal(job.id);
        return;
      }

      if (detailsBtn || titleLink) {
        e.stopPropagation();
        openDetailsModal(job.id);
        return;
      }
    });

    fragment.appendChild(card);
  });

  DOM.jobCardsContainer.appendChild(fragment);
}

/**
 * Return CSS badge class matching job type
 */
function getBadgeTypeClass(type) {
  switch (type.toLowerCase()) {
    case "full-time":
      return "badge-type-fulltime";
    case "part-time":
      return "badge-type-parttime";
    case "internship":
      return "badge-type-internship";
    case "remote":
      return "badge-type-remote";
    case "contract":
      return "badge-type-contract";
    default:
      return "badge-type-fulltime";
  }
}

// ==========================================
// 8. BOOKMARK & SAVE LOGIC (LOCALSTORAGE)
// ==========================================
function toggleBookmarkJob(jobId) {
  const job = JOBS_DATA.find(j => j.id === jobId);
  if (!job) return;

  if (AppState.savedJobIds.has(jobId)) {
    AppState.savedJobIds.delete(jobId);
    showToast(`Removed "${job.title}" from saved jobs`, "info");
  } else {
    AppState.savedJobIds.add(jobId);
    showToast(`Saved "${job.title}" to bookmarks!`, "success");
  }

  persistStorage();
  updateSavedBadges();
  renderJobCards();

  // If details modal is currently open with this job, update its footer button
  if (AppState.currentSelectedJobId === jobId) {
    updateDetailsModalFooter(job);
  }
}

function updateSavedBadges() {
  const totalSaved = AppState.savedJobIds.size;
  DOM.savedCountBadge.textContent = totalSaved;
  DOM.savedTabCount.textContent = totalSaved;
}

// ==========================================
// 9. VIEW DETAILS MODAL LOGIC
// ==========================================
function openDetailsModal(jobId) {
  const job = JOBS_DATA.find(j => j.id === jobId);
  if (!job) return;

  AppState.currentSelectedJobId = jobId;
  const isSaved = AppState.savedJobIds.has(job.id);
  const isApplied = AppState.appliedJobIds.has(job.id);

  // Render Header
  DOM.detailsModalHeader.innerHTML = `
    <div class="modal-header-content">
      <div class="modal-logo" style="background: ${job.logoBg};">
        ${escapeHtml(job.logoText)}
      </div>
      <div class="modal-title-wrap">
        <h2 class="modal-job-title" id="modalJobTitle">${escapeHtml(job.title)}</h2>
        <div class="modal-company-sub">
          <span>${escapeHtml(job.company)}</span>
          &bull;
          <span><i class="fa-solid fa-location-dot"></i> ${escapeHtml(job.location)}</span>
          &bull;
          <span><i class="fa-regular fa-clock"></i> Posted ${escapeHtml(job.postedDate)}</span>
        </div>
        <div class="modal-badges">
          <span class="badge ${getBadgeTypeClass(job.jobType)}">${escapeHtml(job.jobType)}</span>
          <span class="badge badge-salary">${escapeHtml(job.salary)}</span>
          <span class="badge badge-exp">${escapeHtml(job.experienceLevel)}</span>
          <span class="badge badge-location">${escapeHtml(job.category)}</span>
        </div>
      </div>
    </div>
  `;

  // Render Body
  DOM.detailsModalBody.innerHTML = `
    <!-- About The Role -->
    <div class="detail-section">
      <h3 class="detail-section-title"><i class="fa-solid fa-align-left"></i> About the Role</h3>
      <p class="detail-text">${escapeHtml(job.description)}</p>
    </div>

    <!-- Key Responsibilities -->
    <div class="detail-section">
      <h3 class="detail-section-title"><i class="fa-solid fa-list-check"></i> Key Responsibilities</h3>
      <div class="detail-bullet-list">
        ${job.responsibilities.map(resp => `
          <div class="detail-bullet-item">
            <i class="fa-solid fa-circle-check"></i>
            <span>${escapeHtml(resp)}</span>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Requirements & Qualifications -->
    <div class="detail-section">
      <h3 class="detail-section-title"><i class="fa-solid fa-graduation-cap"></i> Qualifications &amp; Requirements</h3>
      <div class="detail-bullet-list">
        ${job.requirements.map(req => `
          <div class="detail-bullet-item">
            <i class="fa-solid fa-circle-check"></i>
            <span>${escapeHtml(req)}</span>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Required Skills -->
    <div class="detail-section">
      <h3 class="detail-section-title"><i class="fa-solid fa-tags"></i> Core Skills &amp; Technologies</h3>
      <div class="detail-skills-wrap">
        ${job.skills.map(s => `<span class="detail-skill-chip">${escapeHtml(s)}</span>`).join("")}
      </div>
    </div>

    <!-- Benefits -->
    <div class="detail-section">
      <h3 class="detail-section-title"><i class="fa-solid fa-gift"></i> Compensation, Perks &amp; Benefits</h3>
      <div class="detail-bullet-list">
        ${job.benefits.map(b => `
          <div class="detail-bullet-item">
            <i class="fa-solid fa-check"></i>
            <span>${escapeHtml(b)}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  // Render Footer
  updateDetailsModalFooter(job);

  // Display Modal
  DOM.detailsModalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function updateDetailsModalFooter(job) {
  const isSaved = AppState.savedJobIds.has(job.id);
  const isApplied = AppState.appliedJobIds.has(job.id);

  DOM.detailsModalFooter.innerHTML = `
    <div class="modal-footer-salary">
      <span class="salary-label">Estimated Compensation</span>
      <span class="salary-amount">${escapeHtml(job.salary)}</span>
    </div>
    <div class="modal-footer-actions">
      <button type="button" class="btn btn-secondary" id="modalBookmarkBtn">
        <i class="${isSaved ? "fa-solid" : "fa-regular"} fa-bookmark"></i>
        <span>${isSaved ? "Saved" : "Save Job"}</span>
      </button>

      ${isApplied
        ? `<button type="button" class="btn btn-applied" disabled>
             <i class="fa-solid fa-check"></i> Already Applied
           </button>`
        : `<button type="button" class="btn btn-primary" id="modalApplyBtn">
             <i class="fa-solid fa-paper-plane"></i> Apply For This Job
           </button>`
      }
    </div>
  `;

  // Bind footer events
  const modalBookmarkBtn = document.getElementById("modalBookmarkBtn");
  if (modalBookmarkBtn) {
    modalBookmarkBtn.addEventListener("click", () => toggleBookmarkJob(job.id));
  }

  const modalApplyBtn = document.getElementById("modalApplyBtn");
  if (modalApplyBtn) {
    modalApplyBtn.addEventListener("click", () => {
      closeDetailsModal();
      openApplyModal(job.id);
    });
  }
}

function closeDetailsModal() {
  DOM.detailsModalOverlay.classList.remove("active");
  AppState.currentSelectedJobId = null;
  document.body.style.overflow = "";
}

// ==========================================
// 10. APPLY NOW MODAL & FORM WORKFLOW
// ==========================================
function openApplyModal(jobId) {
  const job = JOBS_DATA.find(j => j.id === jobId);
  if (!job) return;

  AppState.currentSelectedJobId = jobId;
  DOM.applyJobId.value = jobId;
  DOM.applyModalTitle.textContent = `Apply to ${job.company}`;
  DOM.applyModalSubtitle.textContent = `Position: ${job.title} &bull; ${job.location}`;

  // Reset Form State
  DOM.jobApplicationForm.reset();
  clearFormValidationErrors();
  DOM.fileDropText.textContent = "Click to select or drag and drop your resume";

  // Ensure Form View is visible and Success View is hidden
  DOM.applyFormContent.style.display = "block";
  DOM.applySuccessView.style.display = "none";

  DOM.applyModalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeApplyModal() {
  DOM.applyModalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

function handleResumeFileSelect() {
  const file = DOM.applicantResume.files[0];
  if (file) {
    DOM.fileDropText.innerHTML = `<strong>Selected:</strong> ${escapeHtml(file.name)} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
    document.getElementById("resumeError").classList.remove("visible");
  }
}

function handleApplyFormSubmit(e) {
  e.preventDefault();

  const nameVal = DOM.applicantName.value.trim();
  const emailVal = DOM.applicantEmail.value.trim();
  const phoneVal = DOM.applicantPhone.value.trim();
  const expVal = DOM.applicantExp.value;
  const resumeFile = DOM.applicantResume.files[0];
  const jobId = DOM.applyJobId.value;

  let isValid = true;
  clearFormValidationErrors();

  // Validate Name
  if (!nameVal) {
    showFieldError("applicantName", "nameError");
    isValid = false;
  }

  // Validate Email
  if (!emailVal || !validateEmail(emailVal)) {
    showFieldError("applicantEmail", "emailError");
    isValid = false;
  }

  // Validate Phone
  if (!phoneVal) {
    showFieldError("applicantPhone", "phoneError");
    isValid = false;
  }

  // Validate Experience
  if (!expVal) {
    showFieldError("applicantExp", "expError");
    isValid = false;
  }

  // Validate Resume
  if (!resumeFile) {
    document.getElementById("resumeError").classList.add("visible");
    isValid = false;
  }

  if (!isValid) return;

  // Simulate Submission
  const submitBtn = DOM.submitApplicationBtn;
  const btnText = submitBtn.querySelector(".btn-text");
  const btnSpinner = submitBtn.querySelector(".btn-spinner");

  btnText.style.display = "none";
  btnSpinner.style.display = "inline-block";
  submitBtn.disabled = true;

  setTimeout(() => {
    // Record application in persistent state
    AppState.appliedJobIds.add(jobId);
    persistStorage();

    // Reset button
    btnText.style.display = "inline-block";
    btnSpinner.style.display = "none";
    submitBtn.disabled = false;

    // Switch to success view
    const job = JOBS_DATA.find(j => j.id === jobId);
    if (job) {
      DOM.successJobRole.textContent = job.title;
      DOM.successCompany.textContent = job.company;
    }

    DOM.applyFormContent.style.display = "none";
    DOM.applySuccessView.style.display = "block";

    renderJobCards();
    showToast("Application submitted successfully!", "success");
  }, 1000);
}

function clearFormValidationErrors() {
  document.querySelectorAll(".form-input").forEach(input => input.classList.remove("has-error"));
  document.querySelectorAll(".field-error").forEach(err => err.classList.remove("visible"));
}

function showFieldError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input) input.classList.add("has-error");
  if (error) error.classList.add("visible");
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ==========================================
// 11. TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let icon = "fa-solid fa-circle-info";
  if (type === "success") icon = "fa-solid fa-circle-check";
  if (type === "warning") icon = "fa-solid fa-triangle-exclamation";

  toast.innerHTML = `
    <i class="${icon}"></i>
    <span>${escapeHtml(message)}</span>
  `;

  DOM.toastContainer.appendChild(toast);

  // Auto dismiss after 3.2 seconds
  setTimeout(() => {
    toast.classList.add("toast-hiding");
    setTimeout(() => {
      toast.remove();
    }, 250);
  }, 3200);
}

// ==========================================
// 12. UTILITY HELPERS
// ==========================================
function scrollToJobSection() {
  const target = document.getElementById("jobsingsSection");
  if (target) {
    const yOffset = -80;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
