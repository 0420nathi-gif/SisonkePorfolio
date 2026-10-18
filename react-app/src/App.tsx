import { useEffect, useState } from 'react';
import './App.css';

type Page = 'home' | 'about' | 'work' | 'contact';

const pages: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

const projects = [
  {
    number: '01',
    title: 'Sunday Supply',
    category: 'Brand identity · E-commerce',
    className: 'project-art-sunday',
    mark: 'SUNDAY',
    description: 'A brighter kind of everyday.',
  },
  {
    number: '02',
    title: 'Forma Studio',
    category: 'Digital design · Development',
    className: 'project-art-forma',
    mark: 'forma',
    description: 'Space to think differently.',
  },
  {
    number: '03',
    title: 'Offscript',
    category: 'Art direction · Campaign',
    className: 'project-art-offscript',
    mark: 'OFF<br />SCRIPT',
    description: 'Make room for the unexpected.',
  },
];

function getPageFromHash(): Page {
  const page = window.location.hash.slice(1);
  return pages.some((item) => item.id === page) ? (page as Page) : 'home';
}

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? 'arrow-icon arrow-icon-diagonal' : 'arrow-icon'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12M10 4.5l5.5 5.5-5.5 5.5" />
    </svg>
  );
}

function Header({ currentPage }: { currentPage: Page }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Alex Morgan home">
        am<span className="wordmark-dot">.</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        {pages.map((page) => (
          <a
            key={page.id}
            href={`#${page.id}`}
            className={currentPage === page.id ? 'nav-link active' : 'nav-link'}
            aria-current={currentPage === page.id ? 'page' : undefined}
          >
            {page.label}
          </a>
        ))}
      </nav>
      <a className="header-availability" href="#contact">
        <span className="availability-dot" />
        Available for select projects
      </a>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Independent designer &amp; developer</p>
          <h1>
            Thoughtful<br />
            design for a<br />
            <span className="accent-word">changing</span> world<span className="accent-period">.</span>
          </h1>
          <p className="hero-description">
            I’m Alex, a multidisciplinary creative building memorable brands
            and digital experiences with a little more feeling.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <ArrowIcon />
            </a>
            <a className="text-link" href="#about">A little about me</a>
          </div>
          <div className="hero-note">
            <span className="note-spark">✳</span>
            <span>Based in Brooklyn, NY<br />Working everywhere</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract portrait illustration">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-sun" />
          <div className="portrait-shape">
            <div className="portrait-hair" />
            <div className="portrait-face">
              <span className="portrait-eye eye-left" />
              <span className="portrait-eye eye-right" />
              <span className="portrait-nose" />
              <span className="portrait-smile" />
            </div>
            <div className="portrait-neck" />
            <div className="portrait-shirt" />
          </div>
          <span className="visual-label label-top">DESIGN WITH INTENTION</span>
          <span className="visual-label label-bottom">EST. 2018 — NYC</span>
          <span className="visual-star star-one">✳</span>
          <span className="visual-star star-two">✳</span>
        </div>
        <div className="hero-index"><span>01</span><span className="index-rule" /><span>04</span></div>
      </section>

      <section className="intro-strip">
        <div className="page-shell intro-inner">
          <p>Good work starts with <em>good questions.</em></p>
          <a href="#about" className="round-link" aria-label="Learn about Alex"><ArrowIcon diagonal /></a>
        </div>
      </section>
      <FeaturedWork />
    </>
  );
}

function FeaturedWork() {
  return (
    <section className="featured-section page-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> Selected projects</p>
          <h2>A few things<br />I’ve put into <span className="serif-word">the world.</span></h2>
        </div>
        <a className="text-link" href="#work">See all projects <ArrowIcon /></a>
      </div>
      <ProjectGrid limit={2} />
    </section>
  );
}

function AboutPage() {
  return (
    <section className="inner-page page-shell about-page">
      <p className="eyebrow"><span className="eyebrow-line" /> A bit about me</p>
      <div className="about-layout">
        <div>
          <h1 className="page-title">Curious by nature.<br /><span className="serif-word">Creative</span> by design.</h1>
          <p className="large-copy">
            I’m Alex Morgan—a designer, maker, and friendly over-thinker who
            believes the best work happens when strategy and imagination meet.
          </p>
        </div>
        <div className="about-card">
          <div className="about-art"><span>MAKE<br />IT<br /><em>MEAN</em><br />SOMETHING.</span><i>✳</i></div>
          <p>Curiosity is part of the process.<br /><span>Brooklyn, NY · Everywhere, really</span></p>
        </div>
      </div>
      <div className="about-details">
        <div>
          <h2>My approach</h2>
          <p>I partner with ambitious people to turn complex ideas into clear, distinctive experiences. From the first sketch to the final interaction, I care about making every detail feel considered—and human.</p>
        </div>
        <div>
          <h2>Things I do</h2>
          <ul className="skill-list">
            <li>Visual identity <span>01</span></li>
            <li>Digital experiences <span>02</span></li>
            <li>Art direction <span>03</span></li>
            <li>Creative development <span>04</span></li>
          </ul>
        </div>
      </div>
      <Callout />
    </section>
  );
}

function ProjectGrid({ limit }: { limit?: number }) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="project-grid">
      {visibleProjects.map((project) => (
        <article className="project-card" key={project.number}>
          <div className={`project-art ${project.className}`}>
            <span className="project-art-mark" dangerouslySetInnerHTML={{ __html: project.mark }} />
            <span className="project-art-description">{project.description}</span>
            <span className="project-art-number">{project.number}</span>
          </div>
          <div className="project-meta">
            <div><h3>{project.title}</h3><p>{project.category}</p></div>
            <span className="project-arrow"><ArrowIcon diagonal /></span>
          </div>
        </article>
      ))}
    </div>
  );
}

function WorkPage() {
  return (
    <section className="inner-page page-shell work-page">
      <p className="eyebrow"><span className="eyebrow-line" /> Selected work · 2021—2025</p>
      <div className="work-heading">
        <h1 className="page-title">Work that makes<br />you <span className="serif-word">look twice.</span></h1>
        <p>A collection of collaborations, big ideas, and details that made it all click.</p>
      </div>
      <ProjectGrid />
      <Callout />
    </section>
  );
}

function ContactPage() {
  return (
    <section className="inner-page page-shell contact-page">
      <p className="eyebrow"><span className="eyebrow-line" /> Your turn</p>
      <div className="contact-content">
        <div>
          <h1 className="page-title">Have a good<br />one in <span className="serif-word">mind?</span></h1>
          <p className="large-copy">Tell me what you’re dreaming up. I’d love to hear about it.</p>
          <a className="contact-email" href="mailto:hello@alexmorgan.design">
            hello@alexmorgan.design <ArrowIcon diagonal />
          </a>
        </div>
        <div className="contact-card">
          <span className="contact-symbol">✳</span>
          <p className="eyebrow">Currently booking</p>
          <h2>Projects for<br />summer 2025</h2>
          <p>For collaborations, kind words, or a really good book recommendation.</p>
          <a href="mailto:hello@alexmorgan.design" className="button button-light">Say hello <ArrowIcon /></a>
        </div>
      </div>
      <div className="contact-footer">
        <span>Brooklyn, New York · EST</span>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon diagonal /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <ArrowIcon diagonal /></a>
      </div>
    </section>
  );
}

function Callout() {
  return (
    <aside className="callout">
      <div><p className="eyebrow">Have a good one in mind?</p><h2>Let’s make it <span className="serif-word">real.</span></h2></div>
      <a className="round-link round-link-light" href="#contact" aria-label="Get in touch"><ArrowIcon diagonal /></a>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="site-footer page-shell">
      <a className="wordmark" href="#home">am<span className="wordmark-dot">.</span></a>
      <p>Made with care, and a little bit of coffee.</p>
      <span>© 2025 Alex Morgan</span>
    </footer>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash);

  useEffect(() => {
    const syncPage = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', syncPage);
    return () => window.removeEventListener('hashchange', syncPage);
  }, []);

  return (
    <div className="site">
      <Header currentPage={currentPage} />
      <main key={currentPage}>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'work' && <WorkPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
