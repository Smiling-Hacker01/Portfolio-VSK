import { memo } from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../utils/animations';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactMethod = memo(({ icon: Icon, title, value, href }: any) => (
  <a 
    href={href}
    target={href.startsWith('http') ? '_blank' : '_self'}
    rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
    className="flex flex-col items-center justify-center h-full w-full px-4 py-8 bg-surface rounded-2xl border border-border-glow hover:-translate-y-2 hover:border-primary/50 transition-all duration-300 group"
  >
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors shrink-0">
      <Icon className="text-xl sm:text-2xl text-primary" />
    </div>
    <h3 className="text-base sm:text-lg font-bold font-syne text-text-primary mb-2">{title}</h3>
    <p className="text-[11px] sm:text-[13px] text-text-muted font-jetbrains text-center w-full whitespace-nowrap overflow-hidden text-ellipsis tracking-tight px-1">{value}</p>
  </a>
));

export default function Contact() {
  return (
    <section className="py-24 relative" id="contact">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold font-syne text-text-primary mb-6">
            {contactInfo.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            {contactInfo.subtitle}
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12"
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
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-surface border border-border-glow rounded-full text-text-primary font-bold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(108,99,255,0.1)] hover:shadow-[0_0_25px_rgba(108,99,255,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <FaGithub className="text-xl" />
            <span>Check out my GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
