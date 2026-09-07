// Central content file — edit this to update site copy without touching components.

export const profile = {
  name: "Vishwanath Rajasekaran",
  title: "Automation Engineer — evolving toward SDET",
  location: "Coimbatore, Tamil Nadu, India",
  github: "https://github.com/vishwanathrajasekaran",
  githubHandle: "vishwanathrajasekaran",
  linkedin: "https://www.linkedin.com/in/vishwanathrajasekaran/",
  tagline: "Build. Automate. Break. Learn. Improve.",
};

export const about = {
  paragraphs: [
    "I design, develop, and execute UI test automation solutions as a Senior Associate at Cognizant, leading a team of automation engineers. My day-to-day stack is C#, Selenium WebDriver, NUnit, and hybrid data-driven frameworks — I've scripted and executed 600+ test cases and built CI/CD pipelines that run 1,000+ tests in parallel using YAML matrix strategies, along with tooling that consolidates batch-wise Extent Reports into a single, shareable HTML report.",
    "I'm currently pursuing SDET as the next step — pushing beyond test execution into framework design, test architecture, CI/CD, and quality engineering as a discipline.",
    "Before automation, I spent 10+ years in delivery management, operations, stakeholder management, business development, and team leadership across the Entertainment and Edu-Tech sectors. That background is why I care about not just whether a test passes, but why the thing being tested matters to the business.",
    "On weekends, GitHub is my playground. I build personal projects to learn by shipping — end to end, using AI-assisted workflows to move from idea to a live, working system.",
  ],
};

export const skillGroups = [
  {
    category: "Automation stack",
    tags: ["C#", "Selenium WebDriver", "NUnit", "Hybrid data-driven frameworks"],
  },
  {
    category: "CI/CD & execution",
    tags: ["YAML pipelines", "Matrix parallel execution (1,000+ tests)", "GitHub Actions"],
  },
  {
    category: "Reporting",
    tags: ["Extent Reports", "Batch-wise report consolidation"],
  },
  {
    category: "AI-assisted engineering",
    tags: ["Claude-assisted app builds", "AI-assisted scripting & debugging", "Prompt-driven scaffolding"],
  },
  {
    category: "Exploring next",
    tags: ["Playwright", "Test architecture", "Quality engineering", "SDET practices"],
  },
];

export const projects = [
  {
    name: "VR MovieDB",
    status: "live",
    statusLabel: "Live",
    description:
      "A personal movie database and rating ledger, backed by Google Sheets, with a nightly GitHub Actions pipeline that scrapes IMDb for new data.",
    stack: ["JavaScript", "Vercel", "Google Sheets", "GitHub Actions", "Selenium"],
    url: "https://movies.vishwanathrajasekaran.in",
    repo: "https://github.com/vishwanathrajasekaran/VR_MovieDB",
    caseStudy: {
      problem:
        "I wanted one place to log every movie I'd watched and rate it, instead of scattered notes — and I didn't want to hand-type details like cast, genre, or poster art for every entry.",
      approach:
        "A static frontend on Vercel reads from a Google Sheet acting as the database. A nightly GitHub Actions job runs a Python scraper (requests/BeautifulSoup plus headless Selenium) against IMDb and writes the enriched fields back via gspread — so adding a movie is reduced to three fields: IMDb ID, my rating, and the date watched. Everything else fills in overnight.",
      challenges: [
        "The Google Sheets API key was hitting a 403 from a referrer restriction when called directly from the browser — fixed by routing reads through a Vercel serverless function so the key never reaches client-side code.",
        "The service worker was serving stale /api/ responses after data updates — fixed the caching logic and bumped the cache version to force a clean refetch.",
        "Cut the manual \"Add Title\" flow down to just three required fields, letting the nightly scraper backfill the rest instead of me typing it all in up front.",
      ],
      outcome:
        "A single automated ledger — I add a title in seconds on my phone, and the pipeline fills in the details by morning. It's also a working example of a serverless-proxy + scheduled-scraper pattern I've reused since.",
    },
  },
  {
    name: "VR Books Dashboard",
    status: "live",
    statusLabel: "Live",
    description:
      "A reading tracker with genre/format/language breakdowns, streak tracking, and a Google Apps Script-backed log for daily entries.",
    stack: ["React", "Vite", "Google Apps Script", "Google Sheets"],
    url: "https://reading.vishwanathrajasekaran.in",
    repo: "https://github.com/vishwanathrajasekaran/VR_Books_Dashboard",
  },
  {
    name: "Home Console",
    status: "live",
    statusLabel: "Live",
    description:
      "A household task and notification tracker built for the family — PIN-based logins for each member, and push notifications run off a GitHub Actions cron.",
    stack: ["React", "Vite", "Google Apps Script", "Web Push", "PWA"],
    url: "https://home.vishwanathrajasekaran.in",
    repo: null,
  },
  {
    name: "UI Automation Playground",
    status: "building",
    statusLabel: "In progress",
    description:
      "A growing catalog of UI elements and real-world scenarios — forms, tables, popups, dynamic and unstable elements — built as a practice ground for Selenium, Playwright, and Cypress automation.",
    stack: ["React", "Vite", "React Router"],
    url: "https://ui-playground.vishwanathrajasekaran.in",
    repo: null,
  },
];

// LinkedIn recommendations. Add entries as { quote, name, role } — leave
// empty and the section stays hidden. `role` is how they knew you /
// their title, exactly as shown under their name on LinkedIn.
export const recommendations = [
  {
    quote:
      "Vishwa is an enthusiastic person to work with. He had traveled with me during tough days while he had been one person stretching hands to support me always at work. Officially, a dependable resource with ownership. Always willing to come front in taking responsibilities and ensuring to close them end to end. Very good in supporting the team in their needs. Personally, a charming person to hang around with.",
    name: "Parthiban Govindarajan",
    role: "Regional Lead - District. · Managed Vishwa directly",
  },
  {
    quote:
      "Vishwanath has been one of the most valuable additions to the TN team, joining at a critical time when customer demand surged as schools reopened after the long COVID-induced closure. He played a pivotal role in managing customer relationships effectively, ensuring timely and complete resolutions to their issues. With a positive mindset and a proactive approach, Vishwanath not only excels in his own responsibilities but also supports his team members in achieving their goals.He is highly data-driven, consistently analyzing and utilizing data to make informed decisions. His dedication and ability to work independently, without managerial oversight, make him an exceptional asset to the team. Wishing Vishwa continued success in all his future endeavors!",
    name: "Karthik Ponnusamy",
    role: "AgeTech | Enabling Financial Independence For Senior Citizens | FinTech. · Managed Vishwa directly",
  },
  {
    quote:
      "Vishwanath is a great pal & a fantastic person to work with, I know him since I started working in BookMyShow. He has shown a phenomenal growth as a professional and further more as a fabulous person. I have always been impressed by his dedication and efficiency towards the work. Vishwanath would be a true asset to any organization and comes with my highest recommendation.",
    name: "Shyed Baba Shaik",
    role: "DGM - Business Development at BigTree Entertainment Pvt Limited. · worked together on the same team",
  },
  
  {
    quote:
      "Vishwanath is a Productive Worker and Maintain good relationships with the Clients and very good Team player..",
    name: "Arvind Kumar Kannan",
    role: "Assistant Manager at BigTree Entertainment Pvt Limited. · worked together on the same team",
  },
  {
    quote:
      "Vishwa is the best resource a team can have, his commitment to work is of the next level. His in-depth knowledge of the industry is terrific. He is a kind of person who teaches you and at the same time learns from you.",
    name: "Swamy V Manickavel",
    role: "Marketing Professional, Retail & E-commerce · worked together on the same team",
  },
  {
    quote:
      "Vishwanath is one of the most passionate quick learners I have seen. Logical skills seem to be amazing and proven worth. Hard worker, learner. All the very best, Vishwanath.",
    name: "Priyanka Ganesan",
    role: "Scrum Master | Project Manager, PSM I · studied together",
  },
];

export const experience = [
  {
    period: "Current",
    role: "Senior Associate — Project (Automation Test Lead)",
    org: "Cognizant",
    description:
      "Design, develop, and execute UI test automation solutions; lead a team of automation engineers. Own the CI/CD pipeline strategy for parallel test execution and consolidated reporting.",
  },
  {
    period: "10+ years prior",
    role: "Delivery Management, Operations & Team Leadership",
    org: "Entertainment & Edu-Tech sectors",
    description:
      "Delivery management, operations, stakeholder management, and business development — the foundation for understanding why a solution matters to the business, not just how to build or test it.",
  },
];
