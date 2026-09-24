import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-void noise flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/porsche-hero.jpg"
          alt="Porsche 911"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/30 to-void" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 z-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase text-steel mb-6 font-body"
        >
          Porsche 911 — Next Generation
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.6 }}
          className="font-display text-6xl md:text-9xl lg:text-[12rem] font-black leading-[0.82] tracking-tighter text-gradient mb-6"
        >
          911
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.0 }}
        >
          <h2 className="font-editorial text-2xl md:text-5xl lg:text-6xl italic font-light text-ice mb-6">
            Beyond Driving
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-base md:text-xl text-steel max-w-xl mx-auto mb-10 font-light tracking-wide leading-relaxed"
        >
          Uma experiência criada para quem não aceita o comum.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#build" className="group relative px-8 py-4 bg-crimson text-white font-display text-xs tracking-[0.2em] uppercase overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(196,30,58,0.4)]">
            <span className="relative z-10">Explorar experiência</span>
          </a>
          <a href="#build" className="group px-8 py-4 border border-white/20 text-ice font-display text-xs tracking-[0.2em] uppercase hover:bg-white/5 transition-all hover:border-white/50">
            Criar meu 911
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#build"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-steel hover:text-ice transition-colors"
        aria-label="Scroll"
      >
        <ChevronDown size={28} strokeWidth={1} />
      </motion.a>
    </section>
  );
}
