import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage';
import WorkPage from './components/pages/WorkPage';
import TrailingCursor from './components/TrailingCursor';
import { pages, type Page } from './components/pageConfig';
import './App.css';

function getPageFromHash(): Page {
  const page = window.location.hash.slice(1);
  return pages.some((item) => item.id === page) ? (page as Page) : 'home';
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash);
  const [darkMode, setDarkMode] = useState(
    () => window.localStorage.getItem('portfolio-theme') === 'dark',
  );

  useEffect(() => {
    const syncPage = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', syncPage);
    return () => window.removeEventListener('hashchange', syncPage);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

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
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'work' && <WorkPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
