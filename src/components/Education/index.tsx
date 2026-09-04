import { memo } from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../utils/animations';
import { FaGraduationCap } from 'react-icons/fa';

const SchoolCard = memo(({ school }: { school: typeof education.schools[0] }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="relative overflow-hidden rounded-2xl border border-border-glow bg-surface/80 p-5 sm:p-6 md:p-8 group"
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-warning via-secondary to-primary" />
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative z-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="rounded-xl border border-border-glow bg-bg-main/55 p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-warning/20 bg-warning/10">
              <FaGraduationCap className="text-2xl text-warning" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-warning font-jetbrains">Academic foundation</div>
              <div className="mt-1 text-sm text-text-muted">{school.subHeader}</div>
            </div>
          </div>

          <div className="inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1.5 text-xs sm:text-sm text-secondary font-jetbrains font-bold">
            {school.status}
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-syne text-text-primary mb-3 leading-tight">
            {school.schoolName}
          </h3>
          <div className="inline-flex rounded-full border border-border-glow bg-surface/70 px-3 py-1.5 text-xs sm:text-sm text-text-muted font-jetbrains font-bold">
            {school.subHeader}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default function Education() {
  return (
    <section className="py-24 relative overflow-hidden" id="education">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border-glow to-transparent" />
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-12 max-w-3xl"
        >
          <motion.div variants={fadeUp} className="font-jetbrains text-sm text-secondary mb-3 uppercase tracking-wider">
            Learning loop
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold font-syne text-text-primary mb-4">
            {education.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-muted text-base sm:text-lg leading-relaxed">
            I've completed my BCA and am continuing with an MCA at IGNOU, with a focus on backend systems and practical software engineering.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col gap-6"
        >
          {education.schools.map((school, i) => (
            <SchoolCard key={i} school={school} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
