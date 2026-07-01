import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(204,26,26,0.25),_transparent_55%)] px-6 text-foreground">
      <div className="max-w-md rounded-2xl border border-border/70 bg-card/70 p-8 text-center shadow-2xl">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">404</p>
        <h1 className="mt-3 text-4xl font-semibold">You’ve drifted off-route.</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you’re looking for isn’t available here, but the rest of Verity is still waiting.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
          Return home
        </Link>
      </div>
    </main>
  );
}
