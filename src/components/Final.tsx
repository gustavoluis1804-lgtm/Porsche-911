import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Final() {
  return (
    <section id="final" className="relative h-screen w-full overflow-hidden bg-void flex items-center justify-center">
      <div className="absolute inset-0">
        <img src="/images/porsche-final.jpg" alt="Porsche 911 Icon" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-steel mb-8"
        >
          Porsche 911 — Reimagined
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-gradient leading-[0.85] mb-10"
        >
          THE ICON.<br />REIMAGINED.
        </motion.h2>
        <motion.a
          href="#hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="inline-flex items-center gap-3 px-10 py-5 border border-white/20 text-ice font-display text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-void hover:border-white transition-all duration-500 group"
        >
          Start Again
          <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
        </motion.a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <p className="text-[9px] tracking-[0.3em] uppercase text-steel/20">Porsche 911 — Beyond Driving</p>
      </div>
    </section>
  );
}
