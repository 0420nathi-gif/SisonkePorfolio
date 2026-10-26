import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage';
import ProjectDetailPage from './components/pages/ProjectDetailPage';
import WorkPage from './components/pages/WorkPage';
import { pages, type Page } from './components/pageConfig';
import TrailingCursor from './components/TrailingCursor';
import projects, { getProjectSlug } from './components/projects';
import './App.css';

type AppProps = {
  initialPath?: string;
};

function getLocation(pathname: string): { page: Page; projectSlug?: string } {
  const basePath = import.meta.env.BASE_URL;
  const routePath = basePath !== '/' && pathname.startsWith(basePath)
    ? `/${pathname.slice(basePath.length)}`
    : pathname;
  const [, section, projectSlug] = routePath.split('/');
  const page = pages.find((item) => item.id === section)?.id ?? 'home';
  return { page, projectSlug: page === 'work' ? projectSlug : undefined };
}

function App({ initialPath }: AppProps) {
  const startingLocation = getLocation(
    initialPath ?? (typeof window === 'undefined' ? '/' : window.location.pathname),
  );
  const [currentPage, setCurrentPage] = useState<Page>(startingLocation.page);
  const [projectSlug, setProjectSlug] = useState(startingLocation.projectSlug);
  const [darkMode, setDarkMode] = useState(false);
  const [themeReady, setThemeReady] = useState(false);
  const selectedProject = projects.find((project) => getProjectSlug(project) === projectSlug);

  useEffect(() => {
    const syncLocation = () => {
      const location = getLocation(window.location.pathname);
      setCurrentPage(location.page);
      setProjectSlug(location.projectSlug);
    };

    window.addEventListener('popstate', syncLocation);
    return () => window.removeEventListener('popstate', syncLocation);
  }, []);

  useEffect(() => {
    setDarkMode(window.localStorage.getItem('portfolio-theme') === 'dark');
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    window.localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }, [darkMode, themeReady]);

  return (
    <div className={darkMode ? 'site theme-dark' : 'site'}>
      <TrailingCursor />
      <Header
        currentPage={currentPage}
        pages={pages}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((isDarkMode) => !isDarkMode)}
      />
      <main key={currentPage}>
        {selectedProject ? (
          <ProjectDetailPage project={selectedProject} />
        ) : (
          <>
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'about' && <AboutPage />}
            {currentPage === 'work' && <WorkPage />}
            {currentPage === 'contact' && <ContactPage />}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
