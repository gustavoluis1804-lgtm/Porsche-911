import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Gauge, Timer, Zap, Weight, ArrowUp } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';

const metrics = [
  { label: 'Potência', value: 385, unit: 'CV', icon: Zap, suffix: '' },
  { label: 'Aceleração 0-100', value: 3.5, unit: 's', icon: Timer, suffix: '', isFloat: true },
  { label: 'Velocidade Máxima', value: 308, unit: 'km/h', icon: ArrowUp, suffix: '' },
  { label: 'Torque', value: 450, unit: 'Nm', icon: Gauge, suffix: '' },
  { label: 'Peso', value: 1520, unit: 'kg', icon: Weight, suffix: '' },
];

export default function Performance() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="performance" ref={ref} className="relative min-h-[80vh] bg-ink noise pt-32 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-gradient mb-3">Performance</h2>
          <p className="text-steel max-w-lg">Números que não mentem. A verdade está na estrada.</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-3xl p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-crimson/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl" />
                <Icon size={22} strokeWidth={1} className="text-crimson mb-6" />
                <p className="text-[10px] tracking-[0.2em] uppercase text-steel mb-4">{m.label}</p>
                <div className="font-display text-4xl md:text-5xl font-bold text-ice">
                  <AnimatedNumber value={m.value} inView={inView} duration={1.2} delay={0.3 + i * 0.1} isFloat={m.isFloat} />
                  <span className="text-xl md:text-2xl text-steel/40 ml-1">{m.unit}</span>
                </div>
                <div className="mt-6 h-px bg-gradient-to-r from-white/10 to-transparent" />
                <div className="mt-4 flex items-end gap-2">
                  <div className="h-1 w-8 bg-crimson/50 rounded-full" />
                  <span className="text-[9px] tracking-[0.15em] uppercase text-steel/40">{m.suffix || 'Live Data'}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="font-editorial text-3xl md:text-5xl italic text-ice/80 mb-2">"Cada número, uma promessa."</h3>
          <p className="text-steel/50 text-sm tracking-widest">Porsche 911 — 385 CV · 3.5s · 308 km/h</p>
        </motion.div>
      </div>
    </section>
  );
}
