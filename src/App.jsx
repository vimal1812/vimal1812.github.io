import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      // Extract page from hash like "#/projects" -> "projects"
      const hash = window.location.hash;
      const page = hash.replace(/^#\/?/, '') || 'home';
      
      // Map valid pages, default to home
      const validPages = ['home', 'skills', 'experience', 'projects', 'contact'];
      if (validPages.includes(page)) {
        setActivePage(page);
      } else {
        setActivePage('home');
      }
      
      // Scroll to top on page change
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // handle initial load

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar activePage={activePage} />
      <main style={{
          minHeight: '100vh',
          background: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          transition: 'background-color 0.4s ease, color 0.4s ease'
      }}>
        <AnimatePresence mode="wait">
          {activePage === 'home' && <Hero key="home" />}
          {activePage === 'skills' && <Skills key="skills" />}
          {activePage === 'experience' && <Experience key="experience" />}
          {activePage === 'projects' && <Projects key="projects" />}
          {activePage === 'contact' && <Contact key="contact" />}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
