import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage';
import WorkPage from './components/pages/WorkPage';
import { pages, type Page } from './components/pageConfig';
import './App.css';

function getPageFromHash(): Page {
  const page = window.location.hash.slice(1);
  return pages.some((item) => item.id === page) ? (page as Page) : 'home';
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash);

  useEffect(() => {
    const syncPage = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', syncPage);
    return () => window.removeEventListener('hashchange', syncPage);
  }, []);

  return (
    <div className="site">
      <Header currentPage={currentPage} pages={pages} />
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
