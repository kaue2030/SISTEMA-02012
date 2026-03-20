import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles
import { Footer } from '@/components/ui/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'KAIA - Taller de Estampado',
  description: 'Transformamos ideas en productos con propósito.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Footer />
      </body>
    </html>
  );
}
