import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center">
      <div className="text-6xl mb-4">🎂</div>
      <h1 className="text-2xl font-bold text-foreground mb-2">Page Not Found</h1>
      <p className="text-muted-foreground mb-6">Oops! This page doesn't exist.</p>
      <Link href="/">
        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-lg">
          Go Home
        </button>
      </Link>
    </div>
  );
}
