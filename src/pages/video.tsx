import { Search } from 'lucide-react';

const videos = [
  { title: 'Neon city walkthrough', channel: 'Verity Studio', views: '12K views' },
  { title: 'Quickfire game review', channel: 'Arcade Collective', views: '8.2K views' },
  { title: 'Ambient loops for late nights', channel: 'Signal House', views: '4.4K views' },
];

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(204,26,26,0.16),_transparent_48%)] px-6 py-10 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-2xl backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-accent">Video</p>
              <h1 className="mt-2 text-4xl font-semibold">Discover creators and stories</h1>
            </div>
            <label className="flex min-w-[280px] items-center gap-3 rounded-full border border-border bg-background/60 px-4 py-3">
              <Search size={18} className="text-muted-foreground" />
              <input className="w-full bg-transparent outline-none" placeholder="Search videos" />
            </label>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="aspect-video overflow-hidden rounded-[1.5rem] border border-border/70 bg-background/80">
              <iframe className="h-full w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" title="Featured video" allowFullScreen />
            </div>
            <div className="space-y-3">
              {videos.map((video) => (
                <div key={video.title} className="rounded-2xl border border-border/70 bg-background/70 p-4">
                  <h2 className="font-semibold">{video.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{video.channel}</p>
                  <p className="mt-2 text-sm text-accent">{video.views}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
