import { useEffect, useState } from 'react'

const navLinks = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Achievements', 'Contact']

function Icon({ name, size = 20 }) {
  const solidIcon = name === 'github' || name === 'linkedin'
  const paths = {
    github: <path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.65-.21.65-.46v-1.67c-2.66.58-3.22-1.13-3.22-1.13-.43-1.1-1.06-1.39-1.06-1.39-.87-.59.07-.58.07-.58.96.07 1.47.99 1.47.99.86 1.46 2.25 1.04 2.8.8.09-.62.33-1.04.6-1.28-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.9.98-2.57-.1-.24-.42-1.21.09-2.53 0 0 .8-.26 2.62.98A9.1 9.1 0 0 1 12 6.67c.81 0 1.62.11 2.38.32 1.81-1.24 2.61-.98 2.61-.98.51 1.32.19 2.29.1 2.53.61.67.98 1.53.98 2.57 0 3.67-2.23 4.47-4.35 4.71.34.3.65.88.65 1.77v2.63c0 .25.17.55.65.46A9.5 9.5 0 0 0 12 2.5Z" />,
    linkedin: <path d="M19.33 3H4.67A1.67 1.67 0 0 0 3 4.67v14.66A1.67 1.67 0 0 0 4.67 21h14.66A1.67 1.67 0 0 0 21 19.33V4.67A1.67 1.67 0 0 0 19.33 3ZM8.44 17.67H6.13V10.2h2.31v7.47ZM7.29 9.18a1.34 1.34 0 1 1 0-2.68 1.34 1.34 0 0 1 0 2.68Zm10.38 8.49h-2.31v-3.63c0-.87-.02-1.98-1.21-1.98-1.21 0-1.39.94-1.39 1.91v3.7h-2.31V10.2h2.22v1.02h.03c.31-.59 1.06-1.21 2.18-1.21 2.33 0 2.76 1.53 2.76 3.52v4.14Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></>,
    arrow: <path d="M5 12h13M13 6l6 6-6 6" />,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    spreadsheet: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></>,
    presentation: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4M8 9h8M8 13h5" /></>,
    palette: <><path d="M12 3a9 9 0 1 0 0 18h1.1a1.9 1.9 0 0 0 1.2-3.37 1.18 1.18 0 0 1 .75-2.1H17A4 4 0 0 0 21 11.5C21 6.8 17 3 12 3Z" /><circle cx="7.5" cy="11" r=".8" fill="currentColor" stroke="none" /><circle cx="10" cy="7.5" r=".8" fill="currentColor" stroke="none" /><circle cx="14" cy="7.5" r=".8" fill="currentColor" stroke="none" /></>,
    website: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
    chatbot: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M8 5V3M16 5V3M8 12h.01M16 12h.01M9 16h6" /></>,
    trophy: <><path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" /><path d="M8 6H5v1a3 3 0 0 0 3 3M16 6h3v1a3 3 0 0 1-3 3M12 13v4M8 21h8M9 17h6" /></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={solidIcon ? 'currentColor' : 'none'} stroke={solidIcon ? 'none' : 'currentColor'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function SectionTitle({ eyebrow, title }) {
  return <div className="section-heading reveal"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
}

function App() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  const closeMenu = () => setOpen(false)

  return <>
    <header className="navbar">
      <a href="#home" className="brand" onClick={closeMenu}>SK<span>.</span></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><Icon name={open ? 'close' : 'menu'} size={24} /></button>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {navLinks.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}>{link}</a>)}
      </nav>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="blueprint" aria-hidden="true" />
        <div className="hero-copy reveal visible">
          <p className="eyebrow">Mechanical Engineering · JECRC University</p>
          <h1>Shayan <span>Khan</span></h1>
          <p className="hero-tagline">Aspiring Mechanical Engineer <i /> Passionate about Machines &amp; Aircraft</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">View Projects <Icon name="arrow" size={17} /></a><a className="button button-secondary" href="#contact">Contact Me</a></div>
          <div className="hero-socials"><a href="https://github.com/shayan26bmen0037-pixel" aria-label="GitHub"><Icon name="github" /></a><a href="https://www.linkedin.com/in/shayan-khan-b171a8434" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a></div>
        </div>
        <div className="hero-portrait reveal visible"><div className="portrait-frame"><img src="/shayan.jpg" alt="Shayan Khan" /></div><span className="portrait-label">01 / ENGINEER IN THE MAKING</span></div>
      </section>

      <section id="about" className="section about"><div className="content-wrap about-grid"><SectionTitle eyebrow="01 / About me" title="Built for focused, steady work." /><div className="about-copy reveal"><p>I’m Shayan Khan, a first-year B.Tech Mechanical Engineering student at JECRC University in Jaipur. I’m hard-working and persistent, and as an introvert, I prefer focused, steady work.</p><p>I’m fascinated by machines and aeroplanes, with a goal of becoming a skilled engineer. Outside academics, I play lawn tennis and table tennis at the district level.</p></div></div></section>

      <section id="education" className="section section-alt"><div className="content-wrap"><SectionTitle eyebrow="02 / Education" title="The learning journey." /><div className="timeline">
        <article className="timeline-item reveal"><span className="timeline-dot" /><div><p className="timeline-date">CURRENT</p><h3>B.Tech in Mechanical Engineering</h3><p>JECRC University, Jaipur</p><span>Semester 1 (Currently pursuing)</span></div></article>
        <article className="timeline-item reveal"><span className="timeline-dot" /><div><p className="timeline-date">2024–25</p><h3>Class 12 (CBSE)</h3><p>St. Paul School, Kota</p><span>62%</span></div></article>
        <article className="timeline-item reveal"><span className="timeline-dot" /><div><p className="timeline-date">2022–23</p><h3>Class 10 (CBSE)</h3><p>St. Paul School, Kota</p><span>81%</span></div></article>
      </div></div></section>

      <section id="skills" className="section"><div className="content-wrap"><SectionTitle eyebrow="03 / Skills" title="Tools and traits." /><div className="skills-layout"><div className="skill-cards">{[['spreadsheet','MS Excel'],['presentation','MS PowerPoint'],['palette','Canva']].map(([icon, title]) => <article className="skill-card reveal" key={title}><span><Icon name={icon} size={42} /></span><h3>{title}</h3></article>)}</div><div className="soft-skills reveal"><p className="label">SOFT SKILLS</p><div>{['Hard-working', 'Persistent', 'Focused'].map((skill) => <span className="chip" key={skill}>{skill}</span>)}</div></div></div></div></section>

      <section id="projects" className="section section-alt"><div className="content-wrap"><SectionTitle eyebrow="04 / Projects" title="Things I’m building." /><div className="projects-grid">
        <article className="project-card reveal"><div className="card-top"><div className="project-number">01</div><span className="card-icon"><Icon name="website" size={28} /></span></div><h3>Personal Portfolio Website</h3><p>A responsive personal portfolio built with AI-assisted development, version-controlled on GitHub and deployed live on Vercel.</p><span className="project-line" /></article>
        <article className="project-card reveal"><div className="card-top"><div className="project-number">02</div><span className="card-icon"><Icon name="chatbot" size={28} /></span></div><h3>Personal AI Chatbot</h3><p>An AI chatbot built on Botpress and trained on my personal profile. It answers questions about my education, skills, projects, achievements and goals, and is embedded in this website.</p><span className="project-line" /></article>
      </div></div></section>

      <section id="achievements" className="section"><div className="content-wrap"><SectionTitle eyebrow="05 / Achievements" title="Beyond the classroom." /><div className="achievement-grid"><article className="achievement-card reveal"><div className="card-top"><span>01</span><span className="card-icon"><Icon name="trophy" size={28} /></span></div><h3>District-level Lawn Tennis player</h3></article><article className="achievement-card reveal"><div className="card-top"><span>02</span><span className="card-icon"><Icon name="trophy" size={28} /></span></div><h3>District-level Table Tennis player</h3></article></div></div></section>

      <section id="contact" className="section contact"><div className="content-wrap contact-inner reveal"><p className="eyebrow">06 / Contact</p><h2>Let’s connect.</h2><p className="contact-intro">Feel free to reach out through any of these links.</p><div className="contact-links"><a href="mailto:shayan.26bmen0037@jecrcu.edu.in"><Icon name="mail" size={22} /><span><strong>Email</strong><small>shayan.26bmen0037@jecrcu.edu.in</small></span></a><a href="https://www.linkedin.com/in/shayan-khan-b171a8434" target="_blank" rel="noreferrer"><Icon name="linkedin" size={22} /><span><strong>LinkedIn</strong><small>linkedin.com/in/shayan-khan-b171a8434</small></span></a><a href="https://github.com/shayan26bmen0037-pixel"><Icon name="github" size={22} /><span><strong>GitHub</strong><small>github.com/shayan26bmen0037-pixel</small></span></a></div></div></section>
    </main>
    <footer><p>© 2026 Shayan Khan</p><div><a href="https://github.com/shayan26bmen0037-pixel" aria-label="GitHub"><Icon name="github" size={18} /></a><a href="https://www.linkedin.com/in/shayan-khan-b171a8434" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a></div></footer>
  </>
}

export default App
