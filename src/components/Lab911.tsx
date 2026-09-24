import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Cpu, Wind, Cog, Sparkles, Gauge } from 'lucide-react';

const features = [
  {
    id: 'performance',
    title: 'Performance',
    icon: Zap,
    image: '/images/porsche-track.jpg',
    description: 'Aceleração brutal e resposta instantânea. Cada curva é uma declaração.',
    stats: { power: '385 CV', accel: '3.5s', top: '308 km/h' },
  },
  {
    id: 'technology',
    title: 'Tecnologia',
    icon: Cpu,
    image: '/images/porsche-interior.jpg',
    description: 'Inteligência artificial embarcada, conectividade total e comandos de voz naturais.',
    stats: { connectivity: '5G', ai: 'Neural', display: '12.3"' },
  },
  {
    id: 'aerodynamics',
    title: 'Aerodinâmica',
    icon: Wind,
    image: '/images/porsche-side.jpg',
    description: 'Cada superfície projetada para criar aderência. O ar é o seu aliado.',
    stats: { drag: '0.29 Cd', lift: '150 kg', downforce: 'Ativo' },
  },
  {
    id: 'engine',
    title: 'Motor',
    icon: Cog,
    image: '/images/porsche-engine.jpg',
    description: 'Flat-six biturbo com resposta linear e som que corta o ar como uma lâmina.',
    stats: { displacement: '3.0L', cylinders: 'Flat-6', turbo: 'Duplo' },
  },
  {
    id: 'interior',
    title: 'Interior',
    icon: Sparkles,
    image: '/images/porsche-interior.jpg',
    description: 'Couro reciclado, alumínio escovado e uma cabine feita para o piloto.',
    stats: { seats: 'Sport+', material: 'Carbon', sound: 'Burmeister' },
  },
  {
    id: 'experience',
    title: 'Experiência de Condução',
    icon: Gauge,
    image: '/images/porsche-city.jpg',
    description: 'A conexão pura entre homem e máquina. Sem filtros. Apenas verdade.',
    stats: { steering: 'Elétrico', weight: '1.520 kg', balance: '50/50' },
  },
];

export default function Lab911() {
  const [active, setActive] = useState(features[0]);

  return (
    <section id="lab" className="relative min-h-screen bg-void noise pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-gradient mb-3">911 Lab</h2>
          <p className="text-steel max-w-lg">Cada componente é uma obra de engenharia. Descubra o que torna o 911 uma lenda viva.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.button
                  key={f.id}
                  onClick={() => setActive(f)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative group rounded-3xl overflow-hidden border transition-all duration-500 text-left ${active.id === f.id ? 'border-crimson/50 bg-gradient-to-br from-carbon to-ink scale-[1.01]' : 'border-white/8 bg-carbon/40 hover:border-white/20 hover:-translate-y-1'}`}
                >
                  <img src={f.image} alt={f.title} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
                  <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors ${active.id === f.id ? 'bg-crimson/20 text-crimson' : 'bg-white/5 text-steel group-hover:text-ice'}`}>
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-ice mb-2">{f.title}</h3>
                    <p className="text-xs text-steel leading-relaxed mb-4">{f.description}</p>
                    <div className="flex gap-4 mt-auto">
                      {Object.values(f.stats).map((stat, idx) => (
                        <span key={idx} className="text-[10px] tracking-[0.15em] uppercase text-steel/60 font-display">{stat}</span>
                      ))}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Active feature detail */}
          <motion.div layout className="relative rounded-3xl overflow-hidden border border-white/8 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative h-full min-h-[400px] lg:min-h-[600px]"
              >
                <img src={active.image} alt={active.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-ice mb-3">{active.title}</h3>
                  <p className="text-steel text-sm leading-relaxed mb-6">{active.description}</p>
                  <div className="flex gap-6">
                    {Object.entries(active.stats).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-steel/60">{key}</p>
                        <p className="font-display text-xl text-ice">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
