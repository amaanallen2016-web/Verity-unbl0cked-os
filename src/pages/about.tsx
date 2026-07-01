import { ArrowRight, Sparkles, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = ['Immersive portal design', 'High-speed entertainment bundles', 'Community-first conversation', 'AI-powered discovery'];
const timeline = ['2025', '2026 Q1', '2026 Q2', 'Now'];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,184,0,0.14),_transparent_50%)] px-6 py-10 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-2xl backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-accent">About</p>
            <h1 className="mt-2 text-4xl font-semibold">The story behind Verity</h1>
          </div>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90">
            Back home <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-border/70 bg-background/70 p-6">
            <h2 className="text-2xl font-semibold">Built for curiosity</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Verity began as a bold idea: create a one-stop digital home that feels cinematic, fast, and alive. It brings together games, media, conversation, and AI in one visual language.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {features.map((feature) => (
                <div key={feature} className="rounded-full border border-border/70 bg-card/60 px-3 py-2 text-sm">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-border/70 bg-background/70 p-6">
            <div className="flex items-center gap-3 text-accent">
              <Clock3 size={18} />
              <span className="text-sm uppercase tracking-[0.25em]">Timeline</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {timeline.map((item) => (
                <div key={item} className="rounded-2xl border border-border/70 bg-card/60 px-4 py-3 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
