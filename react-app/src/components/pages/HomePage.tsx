import ArrowIcon from '../ArrowIcon';
import ProjectCarousel from '../ProjectCarousel';

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
      <ProjectCarousel />
    </section>
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
          <a href="#about" className="round-link" aria-label="Learn about Alex">
            <ArrowIcon diagonal />
          </a>
        </div>
      </section>
      <FeaturedWork />
    </>
  );
}

export default HomePage;
