import { RootProvider } from 'fumadocs-ui/provider/next';
import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import './global.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'idevice docs',
    template: '%s | idevice docs',
  },
  description: 'Documentation for the pure Rust library and CLI for interacting with iOS services.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
