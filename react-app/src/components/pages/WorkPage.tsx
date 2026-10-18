import Callout from '../Callout';
import ProjectGrid from '../ProjectGrid';

function WorkPage() {
  return (
    <section className="inner-page page-shell work-page">
      <p className="eyebrow"><span className="eyebrow-line" /> Selected work · 2022—2026</p>
      <div className="work-heading">
        <h1 className="page-title">Work that makes<br />you <span className="serif-word">look twice.</span></h1>
        <p>A collection of collaborations, big ideas, and details that made it all click.</p>
      </div>
      <ProjectGrid />
      <Callout />
    </section>
  );
}

export default WorkPage;
