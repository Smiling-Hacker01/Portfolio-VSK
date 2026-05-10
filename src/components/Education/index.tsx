import { memo } from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data/portfolio';
import { fadeUp, staggerContainer, slideInLeft } from '../../utils/animations';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';

const SchoolCard = memo(({ school }: { school: typeof education.schools[0] }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="max-w-3xl mx-auto bg-surface rounded-2xl p-6 md:p-10 border border-border-glow relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8 relative z-10">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
            <FaGraduationCap className="text-xl sm:text-2xl text-primary" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-syne text-text-primary mb-2 leading-tight">{school.schoolName}</h3>
            <div className="text-base sm:text-lg text-secondary font-medium font-jetbrains mb-3">{school.subHeader}</div>
            <div className="flex items-center gap-2 text-text-muted text-sm font-medium">
              <FaMapMarkerAlt />
              <span>{school.location}</span>
            </div>
          </div>
        </div>
        <div className="sm:text-right shrink-0">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-jetbrains font-bold">
            {school.duration}
          </span>
        </div>
      </div>
      
      <div className="relative z-10">
        <p className="text-text-muted leading-relaxed mb-6 text-base">
          {school.desc}
        </p>
        
        <motion.ul 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          {school.descBullets.map((bullet, i) => (
            <motion.li 
              key={i} 
              variants={slideInLeft}
              className="text-text-muted text-sm md:text-base flex items-start min-w-0"
            >
              <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-primary"></span>
              <span className="break-words min-w-0">{bullet}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
});

export default function Education() {
  return (
    <section className="py-24" id="education">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold font-syne text-text-primary">
            {education.title}
          </motion.h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {education.schools.map((school, i) => (
            <SchoolCard key={i} school={school} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
