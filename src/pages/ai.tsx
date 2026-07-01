import { useState } from 'react';
import { SendHorizonal, Sparkles } from 'lucide-react';

const suggestions = ['Recommend a soundtrack', 'Give me a game tip', 'Write a short poem', 'Explain Verity'];

export default function AiPage() {
  const [draft, setDraft] = useState('');
  const [reply, setReply] = useState('Verity AI is ready to help with recommendations, writing, and new ideas.');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!draft.trim()) return;
    setReply(`You asked: ${draft}. Verity AI will respond once the backend is connected.`);
    setDraft('');
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(255,184,0,0.16),_transparent_60%)] px-6 py-10 text-foreground">
      <div className="w-full max-w-4xl rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-primary/15 p-3 text-primary">
            <Sparkles size={20} />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-accent">AI</p>
            <h1 className="text-3xl font-semibold">Verity intelligence</h1>
          </div>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-border/70 bg-background/70 p-5">
          <p className="text-sm text-muted-foreground">Suggestion chips</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button key={suggestion} onClick={() => setDraft(suggestion)} className="rounded-full border border-border px-3 py-2 text-sm transition hover:border-primary hover:bg-primary/10">
                {suggestion}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-[1.25rem] border border-border/70 bg-card/70 p-4 text-sm leading-7 text-muted-foreground">
            {reply}
          </div>

          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input value={draft} onChange={(event) => setDraft(event.target.value)} className="flex-1 rounded-full border border-border bg-background/60 px-4 py-3 outline-none" placeholder="Ask Verity something" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-medium text-primary-foreground">
              <SendHorizonal size={16} /> Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
