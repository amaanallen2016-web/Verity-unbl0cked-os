import { useMemo, useState } from 'react';
import { Search, Sparkles } from 'lucide-react';

const games = [
  { title: 'Neon Drift', genre: 'Racing', description: 'Speed through glowing circuits.', accent: 'from-primary to-accent' },
  { title: 'Cipher Vault', genre: 'Puzzle', description: 'Break codes and unlock secrets.', accent: 'from-secondary to-accent' },
  { title: 'Skyline Forge', genre: 'Strategy', description: 'Design your city in the clouds.', accent: 'from-primary to-secondary' },
  { title: 'Moon Sprint', genre: 'Arcade', description: 'A fast-paced challenge with a twist.', accent: 'from-accent to-primary' },
];

export default function GamesPage() {
  const [query, setQuery] = useState('');

  const filteredGames = useMemo(() => {
    const term = query.toLowerCase();
    return games.filter((game) => [game.title, game.genre, game.description].join(' ').toLowerCase().includes(term));
  }, [query]);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,184,0,0.16),_transparent_45%)] px-6 py-10 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-2xl backdrop-blur sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-accent">Games</p>
            <h1 className="mt-2 text-4xl font-semibold">Curated worlds and instant play</h1>
          </div>
          <label className="flex min-w-[280px] items-center gap-3 rounded-full border border-border bg-background/60 px-4 py-3">
            <Search size={18} className="text-muted-foreground" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent outline-none" placeholder="Search games" />
          </label>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {filteredGames.map((game) => (
            <article key={game.title} className="overflow-hidden rounded-[1.5rem] border border-border/70 bg-background/70 shadow-lg">
              <div className={`h-28 bg-gradient-to-br ${game.accent}`} />
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-accent">
                  <Sparkles size={14} />
                  {game.genre}
                </div>
                <h2 className="mt-2 text-xl font-semibold">{game.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{game.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
