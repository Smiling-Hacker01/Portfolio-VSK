import { memo } from 'react';
import { motion } from 'framer-motion';
import { workExperience } from '../../data/portfolio';
import { fadeUp, staggerContainer, slideInLeft } from '../../utils/animations';
import styles from './Experience.module.css';
import { FaBriefcase, FaCalendarAlt, FaCodeBranch, FaLayerGroup } from 'react-icons/fa';

const ProjectSubCard = memo(({ project, color }: { project: typeof workExperience.experiences[0]['projects'][0], color: string }) => {
  return (
    <motion.div 
      variants={fadeUp}
      className="relative overflow-hidden rounded-xl border border-border-glow bg-bg-main/55 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-bg-main/75"
      style={{ borderColor: `color-mix(in srgb, ${color} 30%, transparent)` }}
    >
      <div className="absolute left-0 top-0 h-full w-[3px]" style={{ backgroundColor: color }} />
      <div className="mb-4 flex items-center gap-3">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface border border-border-glow">
          <FaCodeBranch className="text-sm" style={{ color }} />
        </div>
        <h4 className="text-base sm:text-lg font-syne font-bold text-text-primary leading-tight">{project.name}</h4>
      </div>
      <motion.ul 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-3 min-w-0 w-full"
      >
        {project.bullets.map((bullet, i) => (
          <motion.li 
            key={i} 
            variants={slideInLeft}
            className="text-text-muted text-sm md:text-[15px] flex items-start leading-relaxed min-w-0"
          >
            <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }}></span>
            <span className="break-words min-w-0 overflow-hidden">{bullet}</span>
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
          style={{ borderColor: exp.color, top: '28px' }} 
        />
        
        <div className="bg-surface/80 rounded-2xl p-5 sm:p-6 md:p-8 border border-border-glow relative z-10 overflow-hidden group hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_35px_rgba(108,99,255,0.12)]">
          <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${exp.color}, rgba(0,212,170,0.75), transparent)` }} />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: exp.color }}></div>
          
          <motion.div variants={fadeUp} className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border-glow bg-bg-main/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-text-muted font-jetbrains">
                <FaBriefcase style={{ color: exp.color }} />
                <span>{exp.company}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-syne text-text-primary leading-tight">{exp.role}</h3>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-jetbrains text-secondary shrink-0">
              <FaCalendarAlt className="text-xs" />
              {exp.date}
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-text-muted font-jetbrains">
            <FaLayerGroup style={{ color: exp.color }} />
            <span>Selected ownership areas</span>
          </motion.div>

          <div className="flex flex-col gap-4">
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
    <section className="py-24 relative overflow-hidden" id="experience">
      {/* Subtle github contribution graph style dots */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-[-1]" style={{
        backgroundImage: `radial-gradient(#39d353 1px, transparent 1px)`,
        backgroundSize: `20px 20px`
      }} />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 max-w-3xl"
        >
          <motion.div variants={fadeUp} className="font-jetbrains text-sm text-secondary mb-3 uppercase tracking-wider">
            {workExperience.subtitle}
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold font-syne text-text-primary mb-4">
            {workExperience.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-muted text-base sm:text-lg leading-relaxed">
            Backend ownership across billing, payments, event processing, content safety, and high-traffic data paths.
          </motion.p>
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
