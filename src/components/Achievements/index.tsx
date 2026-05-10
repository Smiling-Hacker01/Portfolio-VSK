import { memo } from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../utils/animations';
import { useCountUp } from '../../hooks/useCountUp';
import { FaTrophy, FaMedal, FaBolt, FaChartLine, FaTachometerAlt, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const iconMap: Record<string, React.ElementType> = {
  trophy: FaTrophy,
  medal: FaMedal,
  bolt: FaBolt,
  chart: FaChartLine,
  speed: FaTachometerAlt,
  shield: FaShieldAlt,
  check: FaCheckCircle
};

const StatItem = memo(({ end, suffix, label }: { end: number, suffix: string, label: string }) => {
  const { count, ref } = useCountUp(end, 2000);
  
  return (
    <div ref={ref as any} className="flex flex-col items-center justify-center p-6 bg-surface/50 rounded-2xl border border-border-glow">
      <div className="text-4xl md:text-5xl font-bold font-syne text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-jetbrains text-text-muted uppercase tracking-wider text-center">
        {label}
      </div>
    </div>
  );
});

const AchievementCard = memo(({ item, className }: { item: typeof achievements.achievementCards[0], className?: string }) => {
  const Icon = iconMap[item.icon] || FaTrophy;
  return (
    <motion.div
      variants={fadeUp}
      className={`p-6 bg-surface rounded-2xl border border-border-glow hover:border-warning/50 transition-colors group relative overflow-hidden h-full flex flex-col ${className || ''}`}
    >
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-warning/5 rounded-full blur-2xl group-hover:bg-warning/10 transition-colors"></div>
      
      <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center mb-6 shrink-0">
        <Icon className="text-2xl text-warning" />
      </div>
      
      <h3 className="text-xl font-bold font-syne text-text-primary mb-3">
        {item.title}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed flex-grow">
        {item.subtitle}
      </p>
    </motion.div>
  );
});

export default function Achievements() {
  return (
    <section className="py-24 relative" id="achievements">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="font-jetbrains text-sm text-secondary mb-3 uppercase tracking-wider">
            {achievements.subtitle}
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold font-syne text-text-primary">
            {achievements.title}
          </motion.h2>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-16"
        >
          <motion.div variants={fadeUp}><StatItem end={100} suffix="+" label="Enterprise Tenants" /></motion.div>
          <motion.div variants={fadeUp}><StatItem end={400} suffix="K+" label="Users Served" /></motion.div>
          <motion.div variants={fadeUp}><StatItem end={50} suffix="K+" label="Transactions / Month" /></motion.div>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.achievementCards.map((item, i) => {
            const total = achievements.achievementCards.length;
            const isOrphan = total % 3 === 1 && i === total - 1;
            return (
              <AchievementCard
                key={i}
                item={item}
                className={isOrphan ? 'lg:col-start-2' : ''}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
