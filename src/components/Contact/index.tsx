import { memo } from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../utils/animations';
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactMethod = memo(({ icon: Icon, title, value, href }: any) => (
  <a 
    href={href}
    target={href.startsWith('http') ? '_blank' : '_self'}
    rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
    className="flex h-full w-full items-center gap-4 rounded-xl border border-border-glow bg-surface/80 px-4 py-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:bg-surface group"
  >
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-secondary/20 bg-secondary/10 transition-colors group-hover:bg-secondary/15">
      <Icon className="text-lg text-secondary" />
    </div>
    <div className="min-w-0">
      <h3 className="mb-1 text-sm font-bold font-syne text-text-primary">{title}</h3>
      <p className="w-full truncate text-[11px] sm:text-xs text-text-muted font-jetbrains tracking-tight">{value}</p>
    </div>
  </a>
));

export default function Contact() {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative overflow-hidden rounded-2xl border border-border-glow bg-surface/70 p-6 sm:p-8 md:p-10 shadow-[0_0_35px_rgba(108,99,255,0.08)]"
        >
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-warning" />

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(0,212,170,0.8)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary font-jetbrains">Available for serious builds</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="mb-5 max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold font-syne text-text-primary leading-tight">
                {contactInfo.title}
              </motion.h2>
              <motion.p variants={fadeUp} className="max-w-2xl text-base sm:text-lg text-text-muted leading-relaxed">
                {contactInfo.subtitle}
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:items-start lg:items-end">
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <FaEnvelope className="text-base" />
                <span>Start a Conversation</span>
                <FaArrowRight className="text-sm" />
              </a>
              <div className="flex items-center gap-2 text-xs text-text-muted font-jetbrains">
                <FaMapMarkerAlt className="text-secondary" />
                <span>{contactInfo.location}</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            <motion.div variants={fadeUp} className="h-full">
              <ContactMethod 
                icon={FaEnvelope} 
                title="Email" 
                value={contactInfo.email} 
                href={`mailto:${contactInfo.email}`} 
              />
            </motion.div>
            <motion.div variants={fadeUp} className="h-full">
              <ContactMethod 
                icon={FaPhoneAlt} 
                title="Phone" 
                value={contactInfo.phone} 
                href={`tel:${contactInfo.phone}`} 
              />
            </motion.div>
            <motion.div variants={fadeUp} className="h-full">
              <ContactMethod 
                icon={FaLinkedin} 
                title="LinkedIn" 
                value="sdevsk" 
                href={contactInfo.linkedin} 
              />
            </motion.div>
            <motion.div variants={fadeUp} className="h-full">
              <ContactMethod 
                icon={FaGithub} 
                title="GitHub" 
                value="Smiling-Hacker01" 
                href={contactInfo.github} 
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
