import Link from 'next/link';
import Image from 'next/image';

const links = [
  { id: 'placeholder-1', title: 'Placeholder', href: '/docs' },
  { id: 'placeholder-2', title: 'Placeholder', href: '/docs' },
  { id: 'placeholder-3', title: 'Placeholder', href: '/docs' },
  { id: 'placeholder-4', title: 'Placeholder', href: '/docs' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-fd-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 py-16">
        <div className="flex items-center gap-3">
          <Image
            src="/idevice-icon.webp"
            alt=""
            width={44}
            height={44}
            priority
            className="size-11 rounded-lg"
          />
          <h1 className="text-4xl font-semibold tracking-normal md:text-5xl">idevice</h1>
        </div>
        <p className="mt-5 max-w-2xl text-base leading-7 text-fd-muted-foreground">
          A pure Rust library and CLI for interacting with iOS services.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/docs"
            className="inline-flex h-10 items-center rounded-md bg-fd-primary px-4 text-sm font-medium text-fd-primary-foreground shadow-sm transition hover:opacity-90"
          >
            Read the docs
          </Link>
          <a
            href="https://github.com/jkcoxson/idevice"
            className="inline-flex h-10 items-center rounded-md border bg-fd-secondary px-4 text-sm font-medium text-fd-secondary-foreground transition hover:bg-fd-accent"
          >
            GitHub
          </a>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="rounded-md border bg-fd-card px-4 py-3 text-sm font-medium text-fd-card-foreground transition hover:bg-fd-accent"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
