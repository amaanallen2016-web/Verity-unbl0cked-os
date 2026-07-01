import { Search } from 'lucide-react';

const playlists = [
  'Today\'s Top Hits',
  'RapCaviar',
  'Rock Classics',
  'Chill Hits',
  'Lo-Fi Beats',
  'Indie Mix',
];

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,184,0,0.14),_transparent_50%)] px-6 py-10 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-2xl backdrop-blur">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-accent">Music</p>
            <h1 className="mt-2 text-4xl font-semibold">Spotify-ready playlists and discovery</h1>
          </div>
          <label className="flex min-w-[280px] items-center gap-3 rounded-full border border-border bg-background/60 px-4 py-3">
            <Search size={18} className="text-muted-foreground" />
            <input className="w-full bg-transparent outline-none" placeholder="Paste a Spotify link" />
          </label>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.5rem] border border-border/70 bg-background/70 p-5">
            <h2 className="text-xl font-semibold">Featured playlists</h2>
            <div className="mt-4 grid gap-3">
              {playlists.map((playlist) => (
                <div key={playlist} className="rounded-2xl border border-border/70 bg-card/60 px-4 py-3 text-sm">
                  {playlist}
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-border/70 bg-background/80">
            <iframe className="h-full w-full" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator" title="Featured playlist" allow="encrypted-media" />
          </div>
        </div>
      </div>
    </main>
  );
}
