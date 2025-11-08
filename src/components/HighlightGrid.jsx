import { Sparkles, BookOpen, Feather, Wand2 } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Curated Fairy Tales',
    desc: 'Handpicked classics and modern retellings to ignite imagination.'
  },
  {
    icon: BookOpen,
    title: 'Short Bites & Epics',
    desc: 'From 2-minute reads to immersive sagas—choose your adventure.'
  },
  {
    icon: Feather,
    title: 'Original Voices',
    desc: 'Fresh stories from emerging authors across the globe.'
  },
  {
    icon: Wand2,
    title: 'Interactive Magic',
    desc: 'Ambient soundscapes and visuals that bring each tale to life.'
  }
];

export default function HighlightGrid() {
  return (
    <section id="highlights" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="font-['Mona Sans',Inter,system-ui] text-3xl font-extrabold text-slate-900 md:text-4xl">Highlights</h2>
        <p className="mt-3 text-slate-600">A glimpse of what awaits beyond the first page.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-700 ring-1 ring-violet-200">
              <f.icon size={22} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
