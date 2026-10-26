import ArrowIcon from './ArrowIcon';
import { getRouteHref } from './pageConfig';

function Callout() {
  return (
    <aside className="callout">
      <div>
        <p className="eyebrow">Have a good one in mind?</p>
        <h2>Let’s make it <span className="serif-word">real.</span></h2>
      </div>
      <a className="round-link round-link-light" href={getRouteHref('/contact/')} aria-label="Get in touch">
        <ArrowIcon diagonal />
      </a>
    </aside>
  );
}

export default Callout;
