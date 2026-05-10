import { memo } from 'react';
import { motion } from 'framer-motion';
import { skillsSection, techStack } from '../../data/portfolio';
import { fadeUp, staggerContainer, slideInLeft } from '../../utils/animations';

import { FaNodeJs, FaDocker, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPostgresql, SiRedis, SiMongodb, SiMysql, SiExpress, SiPrisma } from 'react-icons/si';

const iconMap: Record<string, React.ElementType> = {
  FaNodeJs, SiTypescript, SiJavascript, SiPostgresql, SiRedis, SiMongodb, SiMysql, FaDocker, SiExpress, SiPrisma, FaJava, FaGitAlt
};

const SkillIcon = memo(({ skill }: { skill: typeof skillsSection.softwareSkills[0] }) => {
  const Icon = iconMap[skill.icon];
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col items-center justify-center p-4 bg-surface rounded-xl border border-border-glow hover:-translate-y-2 transition-transform duration-300 relative group cursor-pointer"
    >
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
        style={{ backgroundColor: skill.color }}
      ></div>
      {Icon && <Icon className="text-4xl mb-2 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_currentColor]" style={{ color: skill.color }} />}
      <span className="text-xs font-jetbrains text-text-muted group-hover:text-text-primary transition-colors text-center">{skill.name}</span>
    </motion.div>
  );
});

const ProgressBar = memo(({ item, index }: { item: typeof techStack.experience[0], index: number }) => {
  return (
    <motion.div variants={fadeUp} className="mb-6 w-full">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-bold font-syne text-text-primary">{item.Stack}</span>
        <span className="text-sm font-jetbrains text-secondary">{item.progressPercentage}%</span>
      </div>
      <div className="h-2 w-full bg-surface rounded-full overflow-hidden border border-border-glow">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${item.progressPercentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)' }}
        />
      </div>
    </motion.div>
  );
});

export default function Skills() {
  return (
    <section className="py-24 relative" id="skills">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="font-jetbrains text-sm text-secondary mb-3 uppercase tracking-wider">
            {skillsSection.subTitle}
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold font-syne text-text-primary">
            {skillsSection.title}
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Skills Bullets */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col justify-center"
          >
            <ul className="flex flex-col gap-4">
              {skillsSection.skills.map((skill, i) => (
                <motion.li 
                  key={i} 
                  variants={slideInLeft}
                  className="text-lg text-text-muted leading-relaxed flex items-start"
                >
                  <span className="mr-3 mt-1 text-primary">⚡</span>
                  <span>{skill.replace('⚡ ', '')}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Icon Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-3 sm:grid-cols-4 gap-4"
          >
            {skillsSection.softwareSkills.map((skill) => (
              <SkillIcon key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* Bottom: Progress Bars */}
        {techStack.viewSkillBars && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-20 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold font-syne text-center mb-10 text-text-primary">Proficiency Setup</h3>
            <div className="flex flex-col gap-2">
              {techStack.experience.map((item, i) => (
                <ProgressBar key={item.Stack} item={item} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
