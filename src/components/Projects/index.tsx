import { memo } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../utils/animations';
import { FaGithub, FaExternalLinkAlt, FaLock, FaBuilding, FaCodeBranch } from 'react-icons/fa';
import { useCountUp } from '../../hooks/useCountUp';

const StatChip = ({ stat }: { stat: { label: string; value: string } }) => {
  const numericMatch = stat.value.match(/^([<]?)(\d+)/);
  const prefix = numericMatch ? numericMatch[1] : '';
  const numericPart = numericMatch ? parseInt(numericMatch[2], 10) : null;
  const suffix = numericMatch ? stat.value.slice(numericMatch[0].length) : null;

  const { count, ref } = useCountUp(numericPart ?? 0, 2000, numericPart !== null);

  return (
    <div ref={ref as any} className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface/50 border border-border-glow min-w-0 overflow-hidden">
      <div className="text-sm sm:text-lg font-bold font-syne text-secondary mb-1 leading-tight text-center break-all">
        {numericPart !== null ? `${prefix}${count}${suffix}` : stat.value}
      </div>
      <div className="text-[8px] sm:text-[10px] text-text-muted uppercase tracking-wide font-jetbrains text-center leading-tight break-words w-full">
        {stat.label}
      </div>
    </div>
  );
};

const ProfessionalCard = memo(({ project }: { project: typeof projects.professionalProjects[0] }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-surface rounded-2xl overflow-hidden border border-border-glow hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full relative"
      style={{ '--hover-glow': project.color } as React.CSSProperties}
    >
      <style>{`
        .group:hover {
          box-shadow: 0 0 15px var(--hover-glow);
          border-color: var(--hover-glow);
        }
      `}</style>
      
      <div className="h-[3px] w-full" style={{ backgroundColor: project.color }}></div>
      
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow relative z-10">
        <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-syne leading-tight" style={{ color: project.color }}>
            {project.name}
          </h3>
          <div className="flex items-center gap-1 bg-bg-main/50 px-2 py-1 rounded border border-border-glow shrink-0">
            <FaBuilding className="text-text-muted text-[9px]" />
            <span className="text-[9px] sm:text-[10px] text-text-muted uppercase tracking-wider font-jetbrains">{projects.professionalBadge}</span>
          </div>
        </div>
        
        <p className="text-text-muted text-sm leading-relaxed mb-5 flex-grow">
          {project.desc}
        </p>

        {project.stats && (
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-5">
            {project.stats.map((stat, i) => (
              <StatChip key={i} stat={stat} />
            ))}
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2.5 py-1 text-xs font-jetbrains bg-secondary/10 text-secondary border border-secondary/20 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-end mt-auto pt-4 border-t border-border-glow group/lock">
          <div className="relative flex items-center justify-center">
            <FaLock className="text-text-muted text-lg hover:text-white transition-colors cursor-help" />
            <div className="absolute bottom-full right-0 mb-2 w-max px-2 py-1 bg-surface border border-border-glow text-xs text-white rounded opacity-0 group-hover/lock:opacity-100 transition-opacity pointer-events-none">
              Private / Proprietary
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const PersonalCard = memo(({ project }: { project: typeof projects.personalProjects[0] }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-surface rounded-2xl overflow-hidden border border-border-glow hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full relative"
      style={{ '--hover-glow': project.color } as React.CSSProperties}
    >
      <style>{`
        .group:hover {
          box-shadow: 0 0 15px var(--hover-glow);
          border-color: var(--hover-glow);
        }
      `}</style>

      <div className="h-[3px] w-full" style={{ backgroundColor: project.color }}></div>
      
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow relative z-10">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-syne mb-3 leading-tight" style={{ color: project.color }}>
          {project.name}
        </h3>
        
        <p className="text-text-muted text-sm leading-relaxed mb-5 flex-grow">
          {project.desc}
        </p>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 sm:px-2.5 py-1 text-xs font-jetbrains bg-secondary/10 text-secondary border border-secondary/20 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border-glow">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors" aria-label="GitHub Repository">
              <FaGithub className="text-xl" />
            </a>
          )}
          {project.link && (
            <a href={project.link.startsWith('http') ? project.link : `https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-secondary transition-colors" aria-label="Live Demo">
              <FaExternalLinkAlt className="text-lg" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

export default function Projects() {
  return (
    <section className="py-24" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 text-center flex flex-col items-center"
        >
          {projects.subtitle && (
            <motion.div variants={fadeUp} className="font-jetbrains text-sm text-secondary mb-3 uppercase tracking-wider">
              {projects.subtitle}
            </motion.div>
          )}
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-5xl font-bold font-syne text-text-primary uppercase tracking-wide max-w-4xl leading-tight">
            {projects.title}
          </motion.h2>
        </motion.div>

        {/* PROFESSIONAL WORK */}
        <div className="mb-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <h3 className="text-xl sm:text-2xl font-syne font-bold text-text-primary uppercase tracking-wide">{projects.professionalTitle}</h3>
            <div className="flex items-center gap-2 bg-[#f5c842]/10 border border-[#f5c842]/20 px-3 py-1 rounded-full">
              <FaBuilding className="text-[#f5c842] text-sm" />
              <span className="text-[#f5c842] text-xs font-bold font-jetbrains tracking-wider">{projects.professionalBadge}</span>
            </div>
            <div className="hidden sm:block flex-grow h-px bg-border-glow"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.professionalProjects.map((project, i) => (
              <ProfessionalCard key={i} project={project} />
            ))}
          </motion.div>
        </div>

        {/* PERSONAL PROJECTS */}
        <div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <h3 className="text-xl sm:text-2xl font-syne font-bold text-text-primary uppercase tracking-wide">{projects.personalTitle}</h3>
            <div className="flex items-center gap-2 bg-[#00d4aa]/10 border border-[#00d4aa]/20 px-3 py-1 rounded-full">
              <FaCodeBranch className="text-[#00d4aa] text-sm" />
              <span className="text-[#00d4aa] text-xs font-bold font-jetbrains tracking-wider">{projects.personalBadge}</span>
            </div>
            <div className="hidden sm:block flex-grow h-px bg-border-glow"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.personalProjects.map((project, i) => (
              <PersonalCard key={i} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
