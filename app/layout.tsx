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
const socialImage = new URL('idevice-social.png', `${siteUrl}/`).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'idevice',
    template: '%s | idevice',
  },
  description: 'A pure Rust library for interacting with services exposed by iOS.',
  icons: {
    icon: withBasePath('/idevice-icon.webp'),
    apple: withBasePath('/idevice-icon.webp'),
  },
  openGraph: {
    title: 'idevice',
    description: 'A pure Rust library for interacting with services exposed by iOS.',
    images: [
      {
        url: socialImage,
        width: 180,
        height: 180,
        alt: 'idevice',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'idevice',
    description: 'A pure Rust library for interacting with services exposed by iOS.',
    images: [
      {
        url: socialImage,
        alt: 'idevice',
      },
    ],
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
