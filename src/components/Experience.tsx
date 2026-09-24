import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mountain, Building2, Waves } from 'lucide-react';

const scenes = [
  {
    id: 'estrada',
    title: 'Estrada',
    subtitle: 'Asfalto livre e céu aberto',
    image: '/images/porsche-hero.jpg',
    icon: Waves,
    stats: { speed: '260 km/h', traction: 'Alta', temp: '18°C' },
  },
  {
    id: 'cidade',
    title: 'Cidade',
    subtitle: 'Neon e reflexos de vidro',
    image: '/images/porsche-city.jpg',
    icon: Building2,
    stats: { speed: '90 km/h', traction: 'Média', temp: '22°C' },
  },
  {
    id: 'circuito',
    title: 'Circuito',
    subtitle: 'Limite é uma palavra nova',
    image: '/images/porsche-track.jpg',
    icon: MapPin,
    stats: { speed: '308 km/h', traction: 'Máxima', temp: '28°C' },
  },
  {
    id: 'montanha',
    title: 'Montanha',
    subtitle: 'Curvas que desafiam a física',
    image: '/images/porsche-mountain.jpg',
    icon: Mountain,
    stats: { speed: '120 km/h', traction: 'Alta', temp: '12°C' },
  },
];

export default function Experience() {
  const [scene, setScene] = useState(scenes[0]);

  return (
    <section id="experience" className="relative min-h-screen bg-ink noise pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-14">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-gradient mb-3">Experience</h2>
          <p className="text-steel max-w-lg">Escolha o ambiente e sinta como o 911 se transforma em cada cenário.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Scene preview */}
          <div className="lg:w-2/3 relative rounded-3xl overflow-hidden shadow-2xl border border-white/8 h-[500px] lg:h-[620px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={scene.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <img src={scene.image} alt={scene.title} className="w-full h-full object-cover" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={scene.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-ice mb-2">{scene.title}</h3>
                  <p className="text-steel text-base mb-6">{scene.subtitle}</p>
                  <div className="flex gap-8">
                    {Object.entries(scene.stats).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-steel/50">{key}</p>
                        <p className="font-display text-xl text-ice">{value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Scene selectors */}
          <div className="lg:w-1/3 flex lg:flex-col gap-3">
            {scenes.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  data-hover
                  onClick={() => setScene(s)}
                  className={`relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 text-left group ${scene.id === s.id ? 'border-crimson bg-gradient-to-r from-carbon to-ink' : 'border-white/8 bg-carbon/30 hover:border-white/20 hover:bg-carbon/60'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${scene.id === s.id ? 'bg-crimson text-white' : 'bg-white/5 text-steel group-hover:text-ice'}`}>
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-ice">{s.title}</h4>
                      <p className="text-[11px] text-steel">{s.subtitle}</p>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-crimson transition-all duration-300 ${scene.id === s.id ? 'w-full' : 'w-0 group-hover:w-1/4'}`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
