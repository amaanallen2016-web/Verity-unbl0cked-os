import { ArrowRight, Users, Sparkles, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const platforms = ['Discord', 'YouTube', 'GitHub', 'X', 'Reddit', 'TikTok'];
const partners = ['CrazyGames', 'Spotify', 'OpenAI', 'YouTube'];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(204,26,26,0.2),_transparent_45%)] px-6 py-10 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-2xl backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-accent">Community</p>
            <h1 className="mt-2 text-4xl font-semibold">Join the Verity collective</h1>
          </div>
          <Link to="/chat" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90">
            Open chat <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-border/70 bg-background/70 p-5">
            <div className="flex items-center gap-3 text-accent">
              <Users size={18} />
              <span className="text-sm uppercase tracking-[0.25em]">Members</span>
            </div>
            <p className="mt-3 text-3xl font-semibold">49K+</p>
          </div>
          <div className="rounded-[1.5rem] border border-border/70 bg-background/70 p-5">
            <div className="flex items-center gap-3 text-accent">
              <Sparkles size={18} />
              <span className="text-sm uppercase tracking-[0.25em]">Games</span>
            </div>
            <p className="mt-3 text-3xl font-semibold">100+</p>
          </div>
          <div className="rounded-[1.5rem] border border-border/70 bg-background/70 p-5">
            <div className="flex items-center gap-3 text-accent">
              <Globe2 size={18} />
              <span className="text-sm uppercase tracking-[0.25em]">Partners</span>
            </div>
            <p className="mt-3 text-3xl font-semibold">4</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-border/70 bg-background/70 p-5">
            <h2 className="text-xl font-semibold">Social spots</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {platforms.map((platform) => (
                <div key={platform} className="rounded-2xl border border-border/70 bg-card/60 px-4 py-3 text-sm">
                  {platform}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-border/70 bg-background/70 p-5">
            <h2 className="text-xl font-semibold">Partners</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {partners.map((partner) => (
                <div key={partner} className="rounded-2xl border border-border/70 bg-card/60 px-4 py-3 text-sm">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
