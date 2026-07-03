import { useEffect, useMemo, useState } from 'react';
import { SendHorizonal } from 'lucide-react';

interface Message {
  id: number;
  author: string;
  text: string;
  me: boolean;
}

const starterMessages: Message[] = [
  { id: 1, author: 'Verity', text: 'Welcome to the live room. Share a thought or ask for a recommendation.', me: false },
  { id: 2, author: 'You', text: 'I’m ready to explore.', me: true },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(starterMessages);
  const [draft, setDraft] = useState('');
  const [name, setName] = useState('You');

  useEffect(() => {
    const storedName = window.localStorage.getItem('verity-name');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!draft.trim()) return;
    const trimmed = draft.trim();
    window.localStorage.setItem('verity-name', name);
    setMessages((prev) => [...prev, { id: Date.now(), author: name || 'You', text: trimmed, me: true }]);
    setDraft('');
  };

  const bubbleClassName = useMemo(() => 'max-w-[80%] rounded-2xl px-4 py-3 text-sm', []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(204,26,26,0.16),_transparent_55%)] px-6 py-10 text-foreground">
      <div className="w-full max-w-4xl rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-2xl backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-accent">Live chat</p>
            <h1 className="mt-2 text-3xl font-semibold">Community conversation in real time</h1>
          </div>
          <div className="rounded-full border border-border bg-background/60 px-3 py-2 text-sm">
            <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-accent" />
            Online now
          </div>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-border/70 bg-background/70 p-4">
          <div className="flex h-[420px] flex-col gap-3 overflow-y-auto pr-2">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.me ? 'justify-end' : 'justify-start'}`}>
                <div className={`${bubbleClassName} ${message.me ? 'bg-primary text-primary-foreground' : 'bg-card/90 text-foreground'}`}>
                  <div className="mb-1 text-[11px] uppercase tracking-[0.25em] opacity-70">{message.author}</div>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 rounded-[1.25rem] border border-border/70 bg-card/60 p-3 sm:flex-row">
            <input value={name} onChange={(event) => setName(event.target.value)} className="rounded-full border border-border bg-background/60 px-3 py-2 outline-none" placeholder="Your name" />
            <input value={draft} onChange={(event) => setDraft(event.target.value)} className="flex-1 rounded-full border border-border bg-background/60 px-3 py-2 outline-none" placeholder="Say hello to the room" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground">
              <SendHorizonal size={16} /> Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
