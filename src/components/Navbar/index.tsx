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
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = `#${section}`;
            break;
          }
        }
      }
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'absolute top-6 left-1/2 -translate-x-1/2 z-50 transition-all w-full max-w-6xl px-6',
      )}
    >
      <div className={cn(
        "flex items-center justify-between gap-5 rounded-3xl border transition-all duration-500",
        scrolled ? "bg-bg-main/60 backdrop-blur-xl border-border-glow/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)] px-5 py-3" : "bg-transparent border-transparent px-2 py-2"
      )}>
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
          <ul className="relative flex items-center gap-1.5 m-0 p-1.5 list-none rounded-full border border-border-glow bg-surface/45">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.name} className="relative">
                  <a
                    href={link.href}
                    onClick={() => setActiveSection(link.href)}
                    className={cn(
                      "relative z-10 inline-flex rounded-full px-4 py-2.5 text-[13px] font-bold transition-all duration-300 focus-visible:outline-none",
                      isActive 
                        ? "text-secondary" 
                        : "text-text-muted hover:text-secondary hover:bg-secondary/20"
                    )}
                  >
                    {link.name}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="navActiveIndicator"
                      className="absolute inset-0 z-0 rounded-full bg-secondary/15 border border-secondary/30"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
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
