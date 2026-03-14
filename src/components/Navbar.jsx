import { useState, useEffect } from 'react'

const THEME_KEY = 'portfolio-theme'

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_KEY) || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#work-experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="navbar">
      <a href="#" className="navbar__brand">
        Shivanshu Bhargava
      </a>
      <div className="navbar__right">
        <nav className="navbar__nav">
          {links.map(({ label, href }) => (
            <a key={href} href={href} className="navbar__link">
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="navbar__theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          {theme === 'dark' ? (
            <svg className="navbar__theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          ) : (
            <svg className="navbar__theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
        <button type="button" className="navbar__toggle" aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
