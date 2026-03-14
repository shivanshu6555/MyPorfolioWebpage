export default function Landing() {
  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/shivanshu-bhargava-0b7856185', icon: <LinkedInIcon /> },
    { label: 'GitHub', href: 'https://github.com/shivanshu6555', icon: <GitHubIcon /> },
    { label: 'Email', href: 'mailto:shivanshubhargava63@gmail.com', icon: <EmailIcon /> },
  ]

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '3', label: 'Companies' },
    { value: '2', label: 'Projects' },
  ]

  const aboutCards = [
    { emoji: '⚡', title: 'Full-Stack Focus', desc: 'Building REST APIs and scalable frontends with .NET and React.' },
    { emoji: '🏦', title: 'Financial Tech', desc: "Contributing to Bank of America's wealth management platform (Merrill)." },
    { emoji: '🔧', title: 'Ship & Improve', desc: 'From migration and automation to resolving production issues ahead of deadlines.' },
  ]

  const skills = {
    technical: ['ASP.NET Core', 'Entity Framework', 'C#', 'MVC', 'REST API', 'React', 'Angular', 'Socket.io', 'Realm', 'Material UI', 'Bootstrap', 'Tailwind CSS', 'HTML5/CSS3', 'SQL Server', 'Docker', 'Kubernetes', 'JSON'],
    tools: ['GIT', 'Jira', 'Azure (CI/CD)', 'ReSharper', 'SonarQube'],
    others: ['UI/UX design', 'Wireframing', 'Debugging'],
  }

  const experiences = [
    {
      company: 'Infosys — Bank of America',
      role: 'Senior Associate Consultant',
      period: 'Aug 2024 — Present',
      points: [
        "Contributing to Bank of America's wealth management platform (Merrill), built on .NET and Angular.",
        'Implementing feature updates, redesigning reports, and customizing components per client requirements.',
        'Delivering optimized UX and insightful wealth reports; resolving production issues ahead of deadlines.',
        'Automating routine bug-tracking tasks to improve team efficiency.',
      ],
      tags: ['.NET', 'Angular', 'Wealth Management'],
    },
    {
      company: "Capgemini — McDonald's",
      role: 'Associate Consultant',
      period: 'Sep 2022 — Aug 2024',
      points: [
        "Migrated McDonald's POS application from C++ to C# and JavaScript for standardization and scalability.",
        'Developed Kiosk applications using React.js and .NET microservices for cross-platform integration.',
        'Optimized legacy code with ReSharper and SonarQube; resolved 25+ critical production defects on time.',
      ],
      tags: ['C#', 'React', '.NET', 'Microservices'],
    },
    {
      company: 'Capgemini — Meijer',
      role: 'Associate Consultant',
      period: 'Nov 2021 — Aug 2022',
      points: [
        'Hosted 15+ .NET applications from Meijer servers to Azure Cloud using Azure features.',
        'Implemented client-requested features and integrated Key Vault, App Insights, and Active Directory.',
        'Gained hands-on experience with Azure blob storage and CI/CD.',
      ],
      tags: ['Azure', '.NET', 'CI/CD'],
    },
  ]

  const projects = [
    {
      title: 'Real Time Health Tracking Dashboard',
      desc: 'Led development of a dynamic health-tracking dashboard for smart shirts, integrating real-time body metrics with interactive graphs, charts, and tables. Implemented secure user management (phone/email verification, role-based auth, Firebase), Node.js/Express backend, MongoDB, RESTful APIs, real-time communication, and file handling with GridFS and Multer.',
      tech: ['React', 'Redux', 'Socket.io', 'Realm', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    },
    {
      title: 'BeSocial',
      desc: 'Social media application for organizations with photo sharing, status updates, friend connections, and group chats.',
      tech: ['React', 'Redux', 'Material UI', 'Express', 'MongoDB', 'JWT', 'Multer'],
    },
  ]

  const education = [
    { degree: 'Bachelor of Technology', institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal', period: 'Jul 2017 — Aug 2021', details: 'Operating Systems, Data Structures & Algorithms, OOP, Discrete Mathematics' },
    { degree: 'Science and Mathematics — XII', institution: 'Christ Senior Secondary School, Guna', period: 'Apr 2016 — Jul 2017', details: null },
  ]

  return (
    <main className="landing">
      <section className="landing__hero section">
        <p className="landing__name-line">Shivanshu Bhargava</p>
        <p className="landing__tagline">
        Results-oriented Full-Stack Developer with 5 years of experience specializing in .NET (C#) and React.js. I bridge the gap between robust REST APIs and scalable frontend components to deliver high-performance digital solutions.
        </p>
        <a href="#contact" className="landing__cta">Get in Touch →</a>
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

      <section id="about" className="section about">
        <h2 className="section__title">About Me</h2>
        <p className="about__text">
          I'm Shivanshu Bhargava, a Software Engineer passionate about building scalable APIs and intuitive frontends. I focus on delivering quality in production and continuously improving processes through automation and clean code.
        </p>
        <div className="about__cards">
          {aboutCards.map(({ emoji, title, desc }) => (
            <div key={title} className="about-card">
              <span className="about-card__emoji" aria-hidden>{emoji}</span>
              <h3 className="about-card__title">{title}</h3>
              <p className="about-card__desc">{desc}</p>
            </div>
          ))}
        </div>
        <div className="social">
          {socialLinks.map(({ label, href, icon }) => (
            <a key={label} href={href} className="social__link" target={href.startsWith('mailto') ? undefined : '_blank'} rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'} aria-label={label}>{icon}</a>
          ))}
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <h2 className="section__title">Skills</h2>
        <div className="skills">
          <div className="skills__group">
            <h3 className="skills__group-title">Technical</h3>
            <div className="tag-list">
              {skills.technical.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
          <div className="skills__group">
            <h3 className="skills__group-title">Tools</h3>
            <div className="tag-list">
              {skills.tools.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
          <div className="skills__group">
            <h3 className="skills__group-title">Others</h3>
            <div className="tag-list">
              {skills.others.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="work-experience" className="section experience-section">
        <h2 className="section__title">Where I've Worked</h2>
        <div className="experience-list">
          {experiences.map((exp) => (
            <article key={exp.company} className="exp-card">
              <div className="exp-card__header">
                <h3 className="exp-card__company">{exp.company}</h3>
                <span className="exp-card__period">{exp.period}</span>
              </div>
              <p className="exp-card__role">{exp.role}</p>
              <ul className="exp-card__points">
                {exp.points.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
              <div className="tag-list">
                {exp.tags.map((t) => <span key={t} className="tag tag--small">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <h2 className="section__title">Projects</h2>
        <div className="project-list">
          {projects.map((proj) => (
            <article key={proj.title} className="project-card">
              <h3 className="project-card__title">{proj.title}</h3>
              <p className="project-card__desc">{proj.desc}</p>
              <div className="tag-list">
                {proj.tech.map((t) => <span key={t} className="tag tag--small">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section education-section">
        <h2 className="section__title">Education</h2>
        <div className="education-list">
          {education.map((edu) => (
            <article key={edu.degree} className="edu-card">
              <h3 className="edu-card__degree">{edu.degree}</h3>
              <p className="edu-card__institution">{edu.institution}</p>
              <span className="edu-card__period">{edu.period}</span>
              {edu.details && <p className="edu-card__details">{edu.details}</p>}
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2 className="section__title">Let's build something great together</h2>
        <p className="contact__blurb">
          Have a role or project in mind? I'd love to hear from you. Reach out via email or connect on LinkedIn.
        </p>
        <a href="mailto:shivanshubhargava63@gmail.com" className="contact__email">shivanshubhargava63@gmail.com</a>
        <a href="tel:+918889595057" className="contact__phone">+91-8889595057</a>
        <p className="contact__location">Pune, Maharashtra</p>
        <div className="social">
          {socialLinks.map(({ label, href, icon }) => (
            <a key={label} href={href} className="social__link" target={href.startsWith('mailto') ? undefined : '_blank'} rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'} aria-label={label}>{icon}</a>
          ))}
        </div>
      </section>
    </main>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}
