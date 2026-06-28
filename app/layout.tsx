import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import { Provider } from '@/components/provider';
import { withBasePath } from '@/lib/site';
import './global.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://idevice.wiki';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'idevice docs',
    template: '%s | idevice docs',
  },
  description: 'Documentation for the pure Rust library and CLI for interacting with iOS services.',
  icons: {
    icon: withBasePath('/idevice-icon.webp'),
    apple: withBasePath('/idevice-icon.webp'),
  },
  openGraph: {
    title: 'idevice docs',
    description: 'Documentation for the pure Rust library and CLI for interacting with iOS services.',
    images: [
      {
        url: withBasePath('/idevice-icon.webp'),
        width: 80,
        height: 80,
        alt: 'idevice',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'idevice docs',
    description: 'Documentation for the pure Rust library and CLI for interacting with iOS services.',
    images: [withBasePath('/idevice-icon.webp')],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
