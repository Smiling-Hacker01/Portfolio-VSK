import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { greeting } from '../../data/portfolio';
import { cn } from '../../utils/cn';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? styles.glass : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold font-syne text-text-primary hover:text-primary transition-colors" aria-label="Home">
          &lt;/&gt;
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          <ul className="flex items-center gap-8 m-0 p-0 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-text-muted hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <a
            href={greeting.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-bold text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            aria-label="Download Resume"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-text-primary focus-visible:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border-glow overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4" aria-label="Mobile Navigation">
              <ul className="flex flex-col gap-4 m-0 p-0 list-none">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-base font-medium text-text-muted hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-5 py-3 mt-2 text-sm font-bold text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-all"
              >
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
