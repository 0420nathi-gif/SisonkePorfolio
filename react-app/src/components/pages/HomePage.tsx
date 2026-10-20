import ArrowIcon from '../ArrowIcon';
import ProjectCarousel from '../ProjectCarousel';
import portraitImage from '../../assets/Images/99efc472-09d3-4a03-acbb-d9f7c7615ab7.webp';

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
          <p className="eyebrow"><span className="eyebrow-line" /> Graphic designer &amp; developer</p>
          <h1>
            Thoughtful<br />
            design for a<br />
            <span className="accent-word">changing</span> world<span className="accent-period">.</span>
          </h1>
          <p className="hero-description">
            I’m Sisonke, a graphic designer and developer bringing ideas to life
            through thoughtful visual identities, clear design systems, and
            responsive digital experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <ArrowIcon />
            </a>
            <a className="text-link" href="#about">A little about me</a>
          </div>
          <div className="hero-note">
            <span className="note-spark">✳</span>
            <span>Based in Johannesburg, GP<br />Working everywhere</span>
          </div>
        </div>
        <div className="hero-visual">
          <img className="hero-portrait-image" src={portraitImage} alt="Dutch Design Awards poster displayed on a building" />
          <span className="hero-portrait-caption">
            <span className="availability-dot" />
            Graphic design · Development
          </span>
        </div>
        <div className="hero-index"><span>01</span><span className="index-rule" /><span>04</span></div>
      </section>

      <section className="intro-strip">
        <div className="page-shell intro-inner">
          <p>Good work starts with <em>good questions.</em></p>
          <a href="#about" className="round-link" aria-label="Learn about Sisonke Miya">
            <ArrowIcon diagonal />
          </a>
        </div>
      </section>
      <FeaturedWork />
    </>
  );
}

export default HomePage;
