import ArrowIcon from '../ArrowIcon';

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
          <h2>Select projects<br />for 2026</h2>
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

export default ContactPage;
