import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';
import StructuredData from '@/components/seo/structured-data';

export const metadata: Metadata = {
  title: {
    default: 'Caffeine Coders Hub - AI-Powered Web & Data Science Solutions',
    template: '%s | Caffeine Coders Hub',
  },
  description: 'AI-Powered Web & Data Science Solutions',
  keywords: ['web development', 'AI solutions', 'data science', 'software engineering'],
  authors: [{ name: 'Caffeine Coders' }],
  creator: 'Caffeine Coders',
  publisher: 'Caffeine Coders',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'Caffeine Coders Hub - AI-Powered Web & Data Science Solutions',
    description: 'AI-Powered Web & Data Science Solutions',
    siteName: 'Caffeine Coders Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caffeine Coders Hub - AI-Powered Web & Data Science Solutions',
    description: 'AI-Powered Web & Data Science Solutions',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTopButton />
        <Toaster />
      </body>
    </html>
  );
}
