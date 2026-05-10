import { memo } from 'react';
import { motion } from 'framer-motion';
import { workExperience } from '../../data/portfolio';
import { fadeUp, staggerContainer, slideInLeft } from '../../utils/animations';
import styles from './Experience.module.css';
import { FaBriefcase } from 'react-icons/fa';

const ProjectSubCard = memo(({ project, color }: { project: typeof workExperience.experiences[0]['projects'][0], color: string }) => {
  return (
    <motion.div 
      variants={fadeUp}
      className="mt-6 p-5 md:p-6 rounded-xl bg-bg-main/50 border border-border-glow hover:border-opacity-100 transition-colors duration-300"
      style={{ borderColor: `color-mix(in srgb, ${color} 30%, transparent)` }}
    >
      <h4 className="text-lg font-jetbrains font-bold mb-4" style={{ color }}>{project.name}</h4>
      <motion.ul 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-3"
      >
        {project.bullets.map((bullet, i) => (
          <motion.li 
            key={i} 
            variants={slideInLeft}
            className="text-text-muted text-sm md:text-base flex items-start leading-relaxed"
          >
            <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }}></span>
            <span>{bullet}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
});

const CompanyNode = memo(({ exp }: { exp: typeof workExperience.experiences[0] }) => {
  return (
    <div className={styles.companyCard}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="relative"
      >
        <motion.div 
          variants={fadeUp}
          className={styles.timelineNode} 
          style={{ borderColor: exp.color, top: '32px' }} 
        />
        
        <div className="bg-surface rounded-2xl p-6 md:p-8 border border-border-glow relative z-10 overflow-hidden group hover:border-primary/40 transition-colors duration-300">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: exp.color }}></div>
          
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h3 className="text-2xl font-bold font-syne text-text-primary">{exp.role}</h3>
            <span className="text-sm font-jetbrains text-secondary mt-2 md:mt-0 px-4 py-1.5 bg-secondary/10 rounded-full border border-secondary/20 w-fit">
              {exp.date}
            </span>
          </motion.div>
          
          <motion.div variants={fadeUp} className="text-lg font-medium text-text-muted mb-6 flex items-center gap-2">
            <FaBriefcase style={{ color: exp.color }} />
            <span style={{ color: exp.color }}>{exp.company}</span>
          </motion.div>

          <div className="flex flex-col gap-2">
            {exp.projects.map((project, i) => (
              <ProjectSubCard key={i} project={project} color={exp.color} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
});

export default function Experience() {
  return (
    <section className="py-24 relative" id="experience">
      {/* Subtle github contribution graph style dots */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-[-1]" style={{
        backgroundImage: `radial-gradient(#39d353 1px, transparent 1px)`,
        backgroundSize: `20px 20px`
      }} />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="font-jetbrains text-sm text-secondary mb-3 uppercase tracking-wider">
            {workExperience.subtitle}
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold font-syne text-text-primary">
            {workExperience.title}
          </motion.h2>
        </motion.div>

        <div className={styles.timeline}>
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={styles.timelineLine} 
          />
          
          {workExperience.experiences.map((exp, i) => (
            <CompanyNode key={i} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
