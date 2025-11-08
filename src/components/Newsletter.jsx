import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur md:p-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-['Mona Sans',Inter,system-ui] text-2xl font-bold text-slate-900 md:text-3xl">Get fresh tales in your inbox</h3>
            <p className="mt-3 text-slate-600">Weekly picks, behind-the-scenes notes, and early access to new stories.</p>
          </div>
          {submitted ? (
            <div className="rounded-xl bg-green-50 p-4 text-green-700 ring-1 ring-green-200">
              Thanks! You\'re on the list. Keep an eye on your inbox.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex w-full flex-col gap-3 md:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
                aria-label="Email address"
                required
              />
              <button type="submit" className="rounded-xl bg-violet-600 px-5 py-3 font-medium text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-700">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
