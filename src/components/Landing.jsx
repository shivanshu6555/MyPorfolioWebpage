export default function Landing() {

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muskan-bhargava-853a881ab/', icon: <LinkedInIcon /> },
    { label: 'Email', href: 'mailto:muskanbhargava43@gmail.com', icon: <EmailIcon /> },
  ]

  const stats = [
    { value: '4.5+', label: 'Years Experience' },
    { value: '2', label: 'Companies' },
    { value: 'Multiple', label: 'MES Projects' },
  ]

  const aboutCards = [
    {
      emoji: '🏭',
      title: 'MES Implementation',
      desc: 'Experienced in implementing Siemens OpCenter Execution Pharma MES solutions for pharmaceutical manufacturing processes.',
    },
    {
      emoji: '⚙️',
      title: 'Manufacturing Workflows',
      desc: 'Designing process blocks, master batch records, and manufacturing workflows across multiple MES projects.',
    },
    {
      emoji: '📋',
      title: 'Compliance & Validation',
      desc: 'Ensuring compliance with industry standards including ISA-95, CFR Part 11, and GxP regulations.',
    },
  ]

  const skills = {
    technical: [
      'Siemens OpCenter Execution Pharma',
      'Tulip',
      'SQL',
      'Recipe Authoring',
      'Master Batch Records (MBR)',
      'Manufacturing Execution Systems',
      'Equipment Integration',
      'OPC Kepware',
      'Material Flow Management',
      'Weigh & Dispense Module'
    ],
    tools: [
      'MES Configuration',
      'Recipe Design',
      'Block Design',
      'Testing & Qualification',
      'GMP Documentation'
    ],
    others: [
      'Requirements Gathering',
      'Stakeholder Communication',
      'Client Demos',
      'Troubleshooting MES Operations'
    ],
  }

  const experiences = [
    {
      company: 'NNIT — Singapore (Client: Sanofi)',
      role: 'Associate Engineer II / MES Block Designer',
      period: 'Nov 2023 — Present',
      points: [
        'Working on Sanofi MARS project delivering MES solutions using Siemens OpCenter Execution Pharma.',
        'Designing and configuring manufacturing blocks and workflows for pharmaceutical production processes.',
        'Collaborating with stakeholders for requirements gathering, clarification, and demo sessions.',
        'Supporting MES operations and troubleshooting issues on the manufacturing shop floor.'
      ],
      tags: ['MES', 'OpCenter Pharma', 'Sanofi'],
    },
    {
      company: 'Capgemini — Mumbai',
      role: 'MES Engineer',
      period: 'Jul 2021 — Nov 2023',
      points: [
        'Designed and delivered process blocks for manufacturing workflows using OpCenter Execution Pharma.',
        'Developed equipment-connected blocks using OPC Kepware and created assemblies for multiple sites.',
        'Created and modified Master Batch Records (MBRs) within the MES system.',
        'Prepared validation scripts and UAT documentation ensuring compliance and successful project delivery.'
      ],
      tags: ['Siemens OpCenter', 'OPC Kepware', 'Pharma Manufacturing'],
    },
  ]

  const projects = [
    {
      title: 'Pharmaceutical MES Implementation',
      desc: 'Configured Siemens OpCenter Execution Pharma for manufacturing operations including equipment integration, material flow management, and batch record management.',
      tech: ['OpCenter Execution Pharma', 'SQL', 'OPC Kepware']
    },
    {
      title: 'Recipe Authoring & Batch Management',
      desc: 'Designed and authored recipes for PI Management and configured equipment modules including Weigh & Dispense and Material Flow Management.',
      tech: ['MES', 'Recipe Authoring', 'Manufacturing Workflows']
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Technology — Information Technology',
      institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal',
      period: 'Jul 2017 — Aug 2021',
      details: null
    },
    {
      degree: 'Science and Mathematics — XII',
      institution: 'K.B.M. Higher Secondary School, Pipariya',
      period: 'Apr 2016 — Jul 2017',
      details: null
    }
  ]

  return (
    <main className="landing">
      <section className="landing__hero section">
        <p className="landing__name-line">Muskan Bhargava</p>
        <p className="landing__tagline">
        Results-driven MES Engineer with 4.5+ years of experience implementing Siemens OpCenter Execution Pharma solutions in the pharmaceutical industry, specializing in manufacturing workflows, block design, and compliance-driven system configuration.
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
        <p className="about__text">
I'm Muskan Bhargava, an MES Engineer with over 4.5 years of experience working on Siemens OpCenter Execution Pharma solutions in the pharmaceutical industry. I specialize in designing manufacturing workflows, configuring MES systems, and ensuring compliance with industry standards like ISA-95, CFR Part 11, and GxP.
</p>
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
        <a href="mailto:muskanbhargava43@gmail.com" className="contact__email">muskanbhargava43@gmail.com</a>
        <a href="tel:+919111508587" className="contact__phone">+91-9111508587</a>
        <a href="tel:+6584376671" className="contact__phone">+65-84376671</a>
        <p className="contact__location">Singapore</p>
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
