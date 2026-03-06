import Link from "next/link";
import { Button } from "../ui/button";
import { ActiveLink } from "../active-link";
import { Logo } from "../logo";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[var(--gray-500)] backdrop-blur supports-[backdrop-fillters]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-6 text-[var(--gray-100)]">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant="secondary" size="sm" radius="pill" asChild>
              <Link href="/start">Start</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
