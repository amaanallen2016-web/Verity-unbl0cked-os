import { motion } from 'framer-motion';
import { ArrowRight, Compass, Gamepad2, MessageCircle, Music4, Search, Video, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiles = [
  { to: '/games', title: 'Games', icon: Gamepad2, blurb: 'Curated worlds and instant play.' },
  { to: '/browser', title: 'Browser', icon: Compass, blurb: 'Fast, private browsing on demand.' },
  { to: '/video', title: 'Video', icon: Video, blurb: 'Explore creators and search videos.' },
  { to: '/music', title: 'Music', icon: Music4, blurb: 'Playlists and sonic discovery.' },
  { to: '/ai', title: 'AI', icon: Wand2, blurb: 'Quick guidance and creative help.' },
  { to: '/chat', title: 'Chat', icon: MessageCircle, blurb: 'Real-time community conversation.' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(204,26,26,0.3),_transparent_50%)] px-6 py-10 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-accent">Verity</p>
            <h1 className="text-3xl font-semibold sm:text-4xl">something worth believing in</h1>
          </div>
          <Link to="/onboarding" className="rounded-full border border-primary/40 px-4 py-2 text-sm transition hover:border-primary hover:bg-primary/10">
            Start here
          </Link>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] border border-white/10 bg-card/80 p-8 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
              immersive portal
            </div>
            <div className="mt-6 space-y-4">
              <h2 className="text-5xl font-semibold leading-none sm:text-7xl">
                <span className="block text-white">Verity</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">unlocked</span>
              </h2>
              <p className="max-w-xl text-lg text-muted-foreground">
                A playful, high-contrast digital home for games, media, community, and AI-driven discovery.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label className="flex flex-1 items-center gap-3 rounded-full border border-border bg-background/60 px-4 py-3">
                <Search size={18} className="text-muted-foreground" />
                <input className="w-full bg-transparent outline-none" placeholder="Search games, videos, music..." />
              </label>
              <Link to="/games" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90">
                Explore <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="rounded-[2rem] border border-white/10 bg-background/80 p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Quick access</h3>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-sm text-accent">Live</span>
            </div>
            <div className="mt-6 grid gap-3">
              {tiles.map((tile) => {
                const Icon = tile.icon;
                return (
                  <Link key={tile.to} to={tile.to} className="flex items-center justify-between rounded-2xl border border-border/70 bg-card/60 px-4 py-3 transition hover:border-primary/50 hover:bg-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-primary/15 p-2 text-primary">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-medium">{tile.title}</p>
                        <p className="text-sm text-muted-foreground">{tile.blurb}</p>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-muted-foreground" />
                  </Link>
                );
              })}
            </div>
          </motion.aside>
        </section>
      </div>
    </main>
  );
}
