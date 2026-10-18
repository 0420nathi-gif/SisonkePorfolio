import type { Page } from './pageConfig';

type HeaderProps = {
  currentPage: Page;
  pages: { id: Page; label: string }[];
  darkMode: boolean;
  onToggleTheme: () => void;
};

function Header({ currentPage, pages, darkMode, onToggleTheme }: HeaderProps) {
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
      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span aria-hidden="true">{darkMode ? '☀' : '☾'}</span>
        <span className="theme-toggle-label">{darkMode ? 'Light' : 'Dark'}</span>
      </button>
    </header>
  );
}

export default Header;
