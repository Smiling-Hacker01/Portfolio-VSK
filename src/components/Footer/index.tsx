import { greeting } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border-glow bg-bg-main relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <div className="text-xl font-bold font-syne text-text-primary mb-1">{greeting.name}</div>
          <div className="text-sm font-jetbrains text-secondary">Backend Engineer</div>
        </div>
        
        <div className="text-sm text-text-muted">
          Built with <span className="text-[#e25555]">❤️</span> in React — {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
