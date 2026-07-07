import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { greeting } from '../../data/portfolio';
import { cn } from '../../utils/cn';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
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
        scrolled ? styles.glass : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-5">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3 text-text-primary" aria-label="Home">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-secondary/20 bg-secondary/10 text-sm font-bold font-jetbrains text-secondary shadow-[0_0_18px_rgba(0,212,170,0.12)] transition-all group-hover:border-secondary/50 group-hover:bg-secondary/15">
            VK
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="text-sm font-bold font-syne tracking-wide">Vishal</span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-text-muted font-jetbrains">Backend Systems</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4" aria-label="Main Navigation">
          <ul className="flex items-center gap-1.5 m-0 p-1 list-none rounded-full border border-border-glow bg-surface/45">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="inline-flex rounded-full px-3.5 py-2 text-xs font-bold text-text-muted transition-all hover:bg-secondary/10 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
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
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-bold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            aria-label="Download Resume"
          >
            <FiDownload />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-border-glow bg-surface/70 text-2xl text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
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
            className="lg:hidden bg-bg-main/95 border-b border-border-glow overflow-hidden backdrop-blur-xl"
          >
            <nav className="flex flex-col px-6 py-5 gap-4" aria-label="Mobile Navigation">
              <ul className="grid grid-cols-2 gap-2 m-0 p-0 list-none">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between rounded-xl border border-border-glow bg-surface/60 px-4 py-3 text-sm font-bold text-text-muted hover:border-secondary/40 hover:text-secondary transition-colors"
                    >
                      <span>{link.name}</span>
                      <FiArrowUpRight className="text-xs" />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-5 py-3 mt-2 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all"
              >
                <FiDownload />
                <span>Resume</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
