import { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { greeting, socialLinks } from '../../data/portfolio';
import { useTypewriter } from '../../hooks/useTypewriter';
import { fadeUp, staggerContainer, fadeDown } from '../../utils/animations';
import styles from './Hero.module.css';

const LottieAnimation = memo(() => {
  const [animationData, setAnimationData] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLottie = async () => {
      try {
        const res = await fetch('https://assets5.lottiefiles.com/packages/lf20_fcfjwiyb.json');
        if (!res.ok) throw new Error('Primary Lottie failed');
        const data = await res.json();
        setAnimationData(data);
      } catch (err) {
        try {
          const resFallback = await fetch('https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json');
          const dataFallback = await resFallback.json();
          setAnimationData(dataFallback);
        } catch (fallbackErr) {
          console.error("Failed to load Lottie animations");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchLottie();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center text-primary font-jetbrains animate-pulse">
        Loading Assets...
      </div>
    );
  }
  
  if (!animationData) return null;

  // ESM interop fix for lottie-react
  const LottieComponent = (Lottie as any).default || Lottie;

  return <LottieComponent animationData={animationData} loop={true} className="w-full max-w-lg mx-auto" />;
});

export default function Hero() {
  const typedText = useTypewriter([
    "Backend Engineer",
    "SaaS Architect",
    "System Designer",
    "Open Source Builder"
  ]);

  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 pb-10 overflow-hidden" id="hero">
      <div className={styles.dotGrid} />
      <div className={styles.glow} />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left Column */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 sm:gap-6"
        >
          <motion.div variants={fadeDown}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              <span className={styles.badgeText}>Backend Engineer</span>
              <span className={styles.badgeCursor}>▋</span>
            </div>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-7xl font-bold font-syne text-text-primary leading-tight">
            {greeting.title}
          </motion.h1>

          <motion.div variants={fadeUp} className="text-xl sm:text-2xl md:text-3xl font-syne text-primary font-semibold h-auto sm:h-[40px]">
            <span className="text-secondary">&gt;</span> {typedText}<span className="animate-pulse">█</span>
          </motion.div>

          <motion.p variants={fadeUp} className={styles.subtitle}>
            {greeting.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center gap-5 mt-2">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-2xl text-text-muted hover:text-white transition-colors" aria-label="GitHub"><FaGithub /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl text-text-muted hover:text-[#0a66c2] transition-colors" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href={`mailto:${socialLinks.gmail}`} className="text-2xl text-text-muted hover:text-[#ea4335] transition-colors" aria-label="Email"><FaEnvelope /></a>
            <a href={`tel:${socialLinks.phone}`} className="text-2xl text-text-muted hover:text-secondary transition-colors" aria-label="Phone"><FaPhoneAlt /></a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
            <a href="#projects" className="text-center px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(108,99,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              See My Work
            </a>
            <a href={greeting.resumeLink} target="_blank" rel="noopener noreferrer" className="text-center px-8 py-3 border border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 hidden lg:block"
        >
          <LottieAnimation />
        </motion.div>
      </div>
    </section>
  );
}
