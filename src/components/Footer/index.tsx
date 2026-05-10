import { greeting } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border-glow bg-bg-main relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center gap-4">
        <div className="text-sm text-text-muted font-jetbrains tracking-wider">
          © {new Date().getFullYear()} <span className="text-text-primary font-bold">{greeting.name.toUpperCase()}</span>. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
