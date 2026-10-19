import Callout from '../Callout';

function AboutPage() {
  return (
    <section className="inner-page page-shell about-page">
      <p className="eyebrow"><span className="eyebrow-line" /> A bit about me</p>
      <div className="about-layout">
        <div>
          <h1 className="page-title">Curious by nature.<br /><span className="serif-word">Creative</span> by design.</h1>
          <p className="large-copy">
            I’m Sisonke Miya, a graphic designer and developer who connects
            visual storytelling with thoughtful technology. I shape ideas into
            distinctive identities and bring them to life as polished,
            accessible digital experiences.
          </p>
        </div>
        <div className="about-card">
          <div className="about-art"><span>MAKE<br />IT<br /><em>MEAN</em><br />SOMETHING.</span><i>✳</i></div>
          <p>Curiosity is part of the process.<br /><span>Johannesburg,GP· Everywhere, really</span></p>
        </div>
      </div>
      <div className="about-details">
        <div>
          <h2>My approach</h2>
          <p>I partner with people and teams to understand what they need to say, who they need to reach, and what success looks like. Then I move from research and early concepts to considered visuals and carefully built experiences—keeping clarity, accessibility, and craft in focus at every step.</p>
        </div>
        <div>
          <h2>Core capabilities</h2>
          <ul className="skill-list">
            <li>Brand and visual identity <span>01</span></li>
            <li>Typography and layout <span>02</span></li>
            <li>Responsive interface design <span>03</span></li>
            <li>Front-end development <span>04</span></li>
          </ul>
        </div>
      </div>
      <section className="about-disciplines" aria-labelledby="disciplines-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> How I bring ideas to life</p>
        <h2 id="disciplines-heading">Design with intention.<br /><span className="serif-word">Build with care.</span></h2>
        <div className="discipline-grid">
          <article className="discipline-card">
            <p className="discipline-number">01 / GRAPHIC DESIGN</p>
            <h3>Make the message memorable.</h3>
            <p>I create distinctive visual languages that help brands communicate with clarity and consistency, from the first impression to the smallest detail.</p>
            <ul>
              <li>Brand identity and logo systems</li>
              <li>Typography, color, and layout</li>
              <li>Art direction and campaign visuals</li>
              <li>Print and digital design assets</li>
            </ul>
          </article>
          <article className="discipline-card">
            <p className="discipline-number">02 / DEVELOPMENT</p>
            <h3>Turn thoughtful design into usable experiences.</h3>
            <p>I build responsive, accessible interfaces that work across screen sizes and feel as considered in use as they do in a design file.</p>
            <ul>
              <li>Front-end development with HTML, CSS, and JavaScript</li>
              <li>Interactive interfaces with React and TypeScript</li>
              <li>Responsive layouts and reusable components</li>
              <li>Accessibility, performance, and browser testing</li>
            </ul>
          </article>
        </div>
      </section>
      <Callout />
    </section>
  );
}

export default AboutPage;
