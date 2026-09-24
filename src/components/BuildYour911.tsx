import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Eye, Layers } from 'lucide-react';

const colors = [
  { name: 'Midnight Black', value: '#0a0a0e', label: 'Preto' },
  { name: 'Arctic Silver', value: '#cfcfd6', label: 'Prata' },
  { name: 'Crimson Red', value: '#c41e3a', label: 'Vermelho' },
  { name: 'Racing Yellow', value: '#e6b800', label: 'Amarelo' },
  { name: 'Deep Carbon', value: '#1a1a24', label: 'Carbono' },
];

const rims = [
  { name: 'Sport Classic', style: 'ring-2 ring-white/30' },
  { name: 'Carbon Aero', style: 'ring-2 ring-crimson/60' },
  { name: 'Track Black', style: 'ring-2 ring-black' },
];

const details = [
  { name: 'Standard', style: 'bg-steel/40' },
  { name: 'Carbon Fiber', style: 'bg-gradient-to-br from-steel/60 to-crimson/40' },
  { name: 'Titanium', style: 'bg-gradient-to-br from-white/20 to-steel/20' },
];

const environments = [
  { name: 'Estúdio', image: '/images/porsche-hero.jpg', label: 'Estúdio' },
  { name: 'Noite', image: '/images/porsche-city.jpg', label: 'Cidade' },
  { name: 'Montanha', image: '/images/porsche-mountain.jpg', label: 'Montanha' },
  { name: 'Circuito', image: '/images/porsche-track.jpg', label: 'Circuito' },
];

const angles = [
  { name: 'Frontal', image: '/images/porsche-front.jpg' },
  { name: 'Lateral', image: '/images/porsche-side.jpg' },
  { name: 'Estúdio', image: '/images/porsche-hero.jpg' },
];

export default function BuildYour911() {
  const [color, setColor] = useState(colors[0]);
  const [rim, setRim] = useState(rims[0]);
  const [detail, setDetail] = useState(details[1]);
  const [env, setEnv] = useState(environments[0]);
  const [angle, setAngle] = useState(angles[0]);
  const [show3D, setShow3D] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <section id="build" className="relative min-h-screen bg-ink noise pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
          {/* Left: Configurator */}
          <div className="lg:w-1/3 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ice mb-2">Build Your 911</h2>
              <p className="text-steel text-sm tracking-wide">Personalize cada detalhe da sua experiência.</p>
            </motion.div>

            {/* Color */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="glass rounded-3xl p-6">
              <h3 className="font-display text-xs tracking-[0.2em] uppercase text-steel mb-5">Cor</h3>
              <div className="flex gap-3 flex-wrap">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    data-hover
                    onClick={() => setColor(c)}
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-300 hover:scale-110 ${color.name === c.name ? 'border-crimson scale-110' : 'border-white/10'}`}
                    style={{ backgroundColor: c.value }}
                    aria-label={c.name}
                    title={c.name}
                  />
                ))}
              </div>
              <p className="mt-3 text-xs text-steel tracking-wide">{color.name}</p>
            </motion.div>

            {/* Rims */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="glass rounded-3xl p-6">
              <h3 className="font-display text-xs tracking-[0.2em] uppercase text-steel mb-5">Rodas</h3>
              <div className="flex gap-3">
                {rims.map((r) => (
                  <button
                    key={r.name}
                    data-hover
                    onClick={() => setRim(r)}
                    className={`flex-1 h-12 rounded-xl border transition-all duration-300 flex items-center justify-center gap-2 ${rim.name === r.name ? 'border-crimson bg-white/5' : 'border-white/10 hover:bg-white/5'}`}
                  >
                    <span className={`w-3 h-3 rounded-full ${rim.name === r.name ? 'bg-crimson' : 'bg-steel/40'}`} />
                    <span className="text-[10px] tracking-wider">{r.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="glass rounded-3xl p-6">
              <h3 className="font-display text-xs tracking-[0.2em] uppercase text-steel mb-5">Detalhes Externos</h3>
              <div className="flex gap-3">
                {details.map((d) => (
                  <button
                    key={d.name}
                    data-hover
                    onClick={() => setDetail(d)}
                    className={`flex-1 h-14 rounded-xl border transition-all duration-300 ${d.style} ${detail.name === d.name ? 'border-crimson' : 'border-white/10'}`}
                    aria-label={d.name}
                  >
                    <span className="block text-[10px] tracking-wider text-ice/70">{d.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                data-hover
                onClick={() => { setShow3D(!show3D); }}
                className={`flex-1 py-4 rounded-xl border text-xs tracking-[0.2em] uppercase font-display transition-all hover:border-crimson hover:shadow-[0_0_20px_rgba(196,30,58,0.15)] ${show3D ? 'border-crimson bg-crimson/10 text-crimson' : 'border-white/10 text-steel hover:text-ice'}`}
              >
                <Eye size={16} className="inline-block mr-2 -mt-0.5" />
                Visual 3D
              </button>
              <button
                data-hover
                onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
                className={`flex-1 py-4 rounded-xl text-xs tracking-[0.2em] uppercase font-display transition-all border ${saved ? 'border-emerald-400 bg-emerald-400/10 text-emerald-400' : 'border-white/10 text-steel hover:text-ice hover:border-white/30'}`}
              >
                {saved ? <Check size={16} className="inline-block mr-2 -mt-0.5" /> : <Layers size={16} className="inline-block mr-2 -mt-0.5" />}
                {saved ? 'Salvo' : 'Salvar Config'}
              </button>
            </div>
          </div>

          {/* Right: Preview */}
          <div className="lg:w-2/3 relative">
            <motion.div
              layout
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5"
            >
              <img
                src={show3D ? '/images/porsche-side.jpg' : env.image}
                alt="911 Preview"
                className="w-full h-[500px] md:h-[650px] lg:h-[720px] object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/30" />
              {/* Config overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-dark rounded-2xl p-5 flex flex-wrap items-end gap-8">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-steel mb-1">Cor</p>
                    <p className="font-display text-sm text-ice">{color.name}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-steel mb-1">Rodas</p>
                    <p className="font-display text-sm text-ice">{rim.name}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-steel mb-1">Ambiente</p>
                    <p className="font-display text-sm text-ice">{env.label}</p>
                  </div>
                  <div className="ml-auto hidden md:block">
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color.value }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Angle selector */}
            <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
              {angles.map((a) => (
                <button
                  key={a.name}
                  data-hover
                  onClick={() => setAngle(a)}
                  className={`flex-shrink-0 w-28 h-20 rounded-xl overflow-hidden border transition-all duration-300 ${angle.name === a.name ? 'border-crimson ring-1 ring-crimson/40' : 'border-white/10 opacity-60 hover:opacity-100'}`}
                >
                  <img src={a.image} alt={a.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Environment selector */}
            <div className="mt-6">
              <h4 className="font-display text-xs tracking-[0.2em] uppercase text-steel mb-4">Ambiente</h4>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {environments.map((e) => (
                  <button
                    key={e.name}
                    data-hover
                    onClick={() => { setEnv(e); setAngle({ ...angle, image: e.image }); }}
                    className={`flex-shrink-0 px-5 py-3 rounded-xl border transition-all duration-300 font-display text-xs tracking-[0.1em] uppercase ${env.name === e.name ? 'border-crimson bg-crimson/10 text-crimson' : 'border-white/10 text-steel hover:text-ice hover:bg-white/5'}`}
                  >
                    {e.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
