import { ArrowRight, Sparkles, Newspaper, MessageSquare, Gamepad2, Music4 } from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
  { title: 'Playful spaces', detail: 'Jump into curated games and instant media.', icon: Gamepad2 },
  { title: 'Live conversation', detail: 'Meet the community through chat and social.', icon: MessageSquare },
  { title: 'Audio & video', detail: 'Explore playlists, clips, and creators.', icon: Music4 },
  { title: 'Smart assistance', detail: 'Get recommendations and guidance from AI.', icon: Sparkles },
];

export default function OnboardingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(204,26,26,0.24),_transparent_60%)] px-6 py-10 text-foreground">
      <div className="w-full max-w-5xl rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-2xl backdrop-blur sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-accent">Welcome to Verity</p>
            <h1 className="mt-2 text-4xl font-semibold sm:text-5xl">Your portal to an unblocked universe.</h1>
          </div>
          <Link to="/" className="rounded-full border border-primary/40 px-4 py-2 text-sm transition hover:border-primary hover:bg-primary/10">
            Skip for now
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-border/70 bg-background/70 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-primary/15 p-2 text-primary">
                    <Icon size={18} />
                  </div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{item.detail}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90">
            Get started <ArrowRight size={16} />
          </Link>
          <Link to="/community" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 transition hover:border-primary hover:bg-primary/10">
            <Newspaper size={16} /> Community feed
          </Link>
        </div>
      </div>
    </main>
  );
}
