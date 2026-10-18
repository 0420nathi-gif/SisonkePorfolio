import type { Page } from './pageConfig';

type HeaderProps = {
  currentPage: Page;
  pages: { id: Page; label: string }[];
};

function Header({ currentPage, pages }: HeaderProps) {
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

export default Header;
