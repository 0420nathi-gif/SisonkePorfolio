import Callout from '../Callout';

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

export default AboutPage;
