import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-4 py-1 text-sm text-slate-700 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-violet-500" />
          A world of tales, myths, and magic
        </span>

        <h1 className="mt-6 font-['Mona Sans',Inter,system-ui] text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
          Where Stories Come Alive
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-700 md:text-xl">
          Discover modern fairy tales, timeless legends, and original narratives—crafted for dreamers of every age.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#highlights" className="rounded-xl bg-violet-600 px-6 py-3 text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-700">
            Explore Highlights
          </a>
          <a href="#newsletter" className="rounded-xl border border-slate-300/70 bg-white/70 px-6 py-3 text-slate-800 backdrop-blur transition hover:border-slate-400">
            Get Updates
          </a>
        </div>
      </div>
    </section>
  );
}
