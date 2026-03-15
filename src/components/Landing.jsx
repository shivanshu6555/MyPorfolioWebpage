export default function Landing() {
  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/shivanshu-bhargava-0b7856185",
      icon: <LinkedInIcon />,
    },
    {
      label: "GitHub",
      href: "https://github.com/shivanshu6555",
      icon: <GitHubIcon />,
    },
    {
      label: "Email",
      href: "mailto:shivanshubhargava63@gmail.com",
      icon: <EmailIcon />,
    },
  ];

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "3", label: "Companies" },
    { value: "2", label: "Projects" },
  ];

  const aboutCards = [
    {
      emoji: "⚡",
      title: "Full-Stack Focus",
      desc: "Building REST APIs and scalable frontends with .NET and React.",
    },
    {
      emoji: "🏦",
      title: "Financial Tech",
      desc: "Contributing to Bank of America's wealth management platform (Merrill).",
    },
    {
      emoji: "🔧",
      title: "Ship & Improve",
      desc: "From migration and automation to resolving production issues ahead of deadlines.",
    },
  ];

  const skills = {
    technical: [
      "ASP.NET Core",
      "Entity Framework",
      "C#",
      "MVC",
      "REST API",
      "React",
      "Angular",
      "Socket.io",
      "Realm",
      "Material UI",
      "Bootstrap",
      "Tailwind CSS",
      "HTML5/CSS3",
      "SQL Server",
      "Docker",
      "Kubernetes",
      "JSON",
    ],
    tools: ["GIT", "Jira", "Azure (CI/CD)", "ReSharper", "SonarQube"],
    others: ["UI/UX design", "Wireframing", "Debugging"],
  };

  const experiences = [
    {
      company: "Infosys — Bank of America",
      role: "Senior Associate Consultant",
      period: "Aug 2024 — Present",
      points: [
        "Contributing to Bank of America's wealth management platform (Merrill), built on .NET and Angular.",
        "Implementing feature updates, redesigning reports, and customizing components per client requirements.",
        "Delivering optimized UX and insightful wealth reports; resolving production issues ahead of deadlines.",
        "Automating routine bug-tracking tasks to improve team efficiency.",
      ],
      tags: [".NET", "Angular", "Wealth Management"],
    },
    {
      company: "Capgemini — McDonald's",
      role: "Associate Consultant",
      period: "Sep 2022 — Aug 2024",
      points: [
        "Migrated McDonald's POS application from C++ to C# and JavaScript for standardization and scalability.",
        "Developed Kiosk applications using React.js and .NET microservices for cross-platform integration.",
        "Optimized legacy code with ReSharper and SonarQube; resolved 25+ critical production defects on time.",
      ],
      tags: ["C#", "React", ".NET", "Microservices"],
    },
    {
      company: "Capgemini — Meijer",
      role: "Associate Consultant",
      period: "Nov 2021 — Aug 2022",
      points: [
        "Hosted 15+ .NET applications from Meijer servers to Azure Cloud using Azure features.",
        "Implemented client-requested features and integrated Key Vault, App Insights, and Active Directory.",
        "Gained hands-on experience with Azure blob storage and CI/CD.",
      ],
      tags: ["Azure", ".NET", "CI/CD"],
    },
  ];

  const projects = [
    {
      title: "Real Time Health Tracking Dashboard",
      desc: "Led development of a dynamic health-tracking dashboard for smart shirts, integrating real-time body metrics with interactive graphs, charts, and tables.",
      tech: [
        "React",
        "Redux",
        "Socket.io",
        "Realm",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
      ],
    },
    {
      title: "BeSocial",
      desc: "Social media application for organizations with photo sharing, status updates, friend connections, and group chats.",
      tech: [
        "React",
        "Redux",
        "Material UI",
        "Express",
        "MongoDB",
        "JWT",
        "Multer",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
      period: "Jul 2017 — Aug 2021",
      details:
        "Operating Systems, Data Structures & Algorithms, OOP, Discrete Mathematics",
    },
    {
      degree: "Science and Mathematics — XII",
      institution: "Christ Senior Secondary School, Guna",
      period: "Apr 2016 — Jul 2017",
      details: null,
    },
  ];

  return (
    <main className="landing">
      <section className="landing__hero section">
        <p className="landing__name-line">Shivanshu Bhargava</p>

        <p className="landing__tagline">
          Results-oriented Full-Stack Developer with 5 years of experience
          specializing in .NET (C#) and React.js. I bridge the gap between
          robust REST APIs and scalable frontend components to deliver
          high-performance digital solutions.
        </p>

        <a href="#contact" className="landing__cta">
          Get in Touch →
        </a>

        <div className="landing__accent" aria-hidden />

        <div className="stats">
          {stats.map(({ value, label }) => (
            <div key={label} className="stats__item">
              <span className="stats__value">{value}</span>
              <span className="stats__label">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12..." />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2..." />
    </svg>
  );
}