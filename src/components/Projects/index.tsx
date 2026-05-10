import { memo } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../utils/animations';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const ProjectCard = memo(({ project }: { project: typeof projects.projects[0] }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-surface rounded-2xl overflow-hidden border border-border-glow hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full relative"
    >
      {/* Top Accent Bar */}
      <div className="h-2 w-full" style={{ backgroundColor: project.color }}></div>
      
      {/* Glow on Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none" 
        style={{ backgroundColor: project.color }}
      ></div>

      <div className="p-6 flex flex-col flex-grow relative z-10">
        {project.isProfessional && (
          <div className="flex items-center gap-2 mb-4 text-warning bg-warning/10 px-3 py-1.5 rounded-full w-fit border border-warning/20">
            <FaStar className="text-xs" />
            <span className="text-xs font-bold uppercase tracking-wider">Professional Project</span>
          </div>
        )}

        <h3 className="text-2xl font-bold font-syne mb-3 group-hover:text-white transition-colors" style={{ color: project.color }}>
          {project.name}
        </h3>
        
        <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
          {project.desc}
        </p>
        
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
        
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border-glow">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors" aria-label="GitHub Repository">
              <FaGithub className="text-xl" />
            </a>
          )}
          {project.link && (
            <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-secondary transition-colors" aria-label="Live Demo">
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
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="font-jetbrains text-sm text-secondary mb-3 uppercase tracking-wider">
            {projects.subtitle}
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold font-syne text-text-primary">
            {projects.title}
          </motion.h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
