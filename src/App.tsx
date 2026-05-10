import { Suspense, lazy, useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useCursorGlow } from './hooks/useCursorGlow';
import { greeting } from './data/portfolio';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load below-the-fold components
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

// Fallback for Suspense
const SectionLoader = () => (
  <div className="w-full min-h-[40vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Scroll to Top FAB
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-primary text-white shadow-[0_0_15px_rgba(108,99,255,0.4)] hover:bg-opacity-90 hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-main focus-visible:ring-primary"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

function App() {
  const cursorPosition = useCursorGlow();

  return (
    <HelmetProvider>
      <Helmet>
        <title>{greeting.name} | Backend Engineer</title>
        <meta name="description" content={greeting.subtitle} />
      </Helmet>

      {/* Cursor Follower Glow */}
      <div 
        className="fixed top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full pointer-events-none z-[-1] blur-[100px] transition-transform duration-75 hidden lg:block"
        style={{
          transform: `translate(${cursorPosition.x - 300}px, ${cursorPosition.y - 300}px)`
        }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <Suspense fallback={<SectionLoader />}>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border-glow to-transparent" />
          <Skills />
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border-glow to-transparent" />
          <Experience />
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border-glow to-transparent" />
          <Projects />
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border-glow to-transparent" />
          <Achievements />
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border-glow to-transparent" />
          <Education />
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border-glow to-transparent" />
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <ScrollToTop />
    </HelmetProvider>
  );
}

export default App;
