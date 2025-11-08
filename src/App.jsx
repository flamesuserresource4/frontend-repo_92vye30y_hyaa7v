import Hero from './components/Hero';
import HighlightGrid from './components/HighlightGrid';
import StoryShowcase from './components/StoryShowcase';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <header className="fixed inset-x-0 top-0 z-20 border-b border-white/30 bg-white/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-violet-600 text-white">✦</span>
            StoryRealm
          </a>
          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            <a href="#highlights" className="hover:text-slate-900">Highlights</a>
            <a href="#stories" className="hover:text-slate-900">Stories</a>
            <a href="#newsletter" className="hover:text-slate-900">Newsletter</a>
          </nav>
          <a href="#newsletter" className="hidden rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white md:inline-block">Get updates</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <section id="stories">
          <HighlightGrid />
          <StoryShowcase />
        </section>
        <Newsletter />
      </main>

      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} StoryRealm — Crafted for dreamers.
      </footer>
    </div>
  );
}

export default App;
