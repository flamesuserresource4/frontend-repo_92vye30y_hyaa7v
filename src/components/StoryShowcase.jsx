import { MotionConfig, motion } from 'framer-motion';

const stories = [
  {
    title: 'The Clockmaker of Lumen Street',
    tag: 'Urban Fable',
    excerpt: 'When time began to hiccup, the city turned to a quiet artisan with a pocketful of constellations.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'Glass Forest Waltz',
    tag: 'Fairy Tale',
    excerpt: 'A dancer follows a trail of singing fireflies to a clearing where the trees remember every step.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'The Archivist of Dreams',
    tag: 'Mythic',
    excerpt: 'Each night, a librarian bottles forgotten wishes—until one escapes and finds its owner.',
    image: 'https://images.unsplash.com/photo-1610238115968-e6307c7de076?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGUlMjBBcmNoaXZpc3QlMjBvZiUyMERyZWFtc3xlbnwwfDB8fHwxNzYyNjAzNjY2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
];

export default function StoryShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="font-['Mona Sans',Inter,system-ui] text-3xl font-extrabold text-slate-900 md:text-4xl">Featured Stories</h2>
        <p className="mt-3 text-slate-600">Dip into a few favorites—each an open door to somewhere luminous.</p>
      </div>
      <MotionConfig reducedMotion="user">
        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <motion.article
              key={s.title}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 ring-1 ring-violet-200">{s.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.excerpt}</p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-violet-700 hover:text-violet-800">
                  Read story →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </MotionConfig>
    </section>
  );
}
