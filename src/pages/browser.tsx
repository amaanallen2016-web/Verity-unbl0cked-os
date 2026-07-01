import { useState } from 'react';
import { Compass, Search } from 'lucide-react';

const quickLinks = ['Google', 'YouTube', 'Reddit', 'Wikipedia', 'GitHub', 'Discord'];

export default function BrowserPage() {
  const [query, setQuery] = useState('');

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(204,26,26,0.16),_transparent_60%)] px-6 py-10 text-foreground">
      <div className="w-full max-w-5xl rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-primary/15 p-3 text-primary">
            <Compass size={20} />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-accent">Browser</p>
            <h1 className="text-3xl font-semibold">Proxy-ready browsing with quick access</h1>
          </div>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-border/70 bg-background/70 p-4">
          <label className="flex items-center gap-3 rounded-full border border-border bg-card/60 px-4 py-3">
            <Search size={18} className="text-muted-foreground" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent outline-none" placeholder="Search the web" />
          </label>
          <div className="mt-4 flex flex-wrap gap-2">
            {quickLinks.map((link) => (
              <a key={link} href={`https://www.${link.toLowerCase()}.com`} target="_blank" rel="noreferrer" className="rounded-full border border-border px-3 py-2 text-sm transition hover:border-primary hover:bg-primary/10">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
