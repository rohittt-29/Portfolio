import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Topbar from '@/components/Topbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rohit Mali — Full Stack Developer',
  description:
    'Rohit Mali is a full-stack developer who builds interactive, scalable web apps using React, Node.js, MongoDB, and more. Open to freelance, internships, and collaborations.',
  keywords: ['Rohit Mali', 'Full Stack Developer', 'React', 'Next.js', 'Portfolio', 'Web Developer India'],
  authors: [{ name: 'Rohit Mali' }],
  creator: 'Rohit Mali',
  openGraph: {
    title: 'Rohit Mali — Full Stack Developer',
    description: 'Portfolio of Rohit Mali, a full-stack web developer.',
    url: 'https://rohitmalii.vercel.app',
    siteName: 'Rohit Mali Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Mali — Full Stack Developer',
    description: 'Portfolio of Rohit Mali, a full-stack web developer.',
    creator: '@rohittt_mali',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <Topbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
