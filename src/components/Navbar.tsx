import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Experiência', href: '#hero' },
  { label: 'Construir', href: '#build' },
  { label: 'Lab', href: '#lab' },
  { label: 'Ambiente', href: '#experience' },
  { label: 'Performance', href: '#performance' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'glass-dark py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="font-display text-xl tracking-[0.2em] font-bold text-ice hover:text-crimson transition-colors">
          911
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] tracking-[0.15em] uppercase text-steel hover:text-ice transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-crimson group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ice hover:text-crimson transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-[300px]' : 'max-h-0'}`}>
        <div className="glass-dark mx-6 mt-3 rounded-2xl px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm tracking-[0.1em] uppercase text-steel hover:text-ice transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
