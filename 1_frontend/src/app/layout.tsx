import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StyledComponentsRegistry from '@/lib/registry';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Audiophile Ecommerce',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <StyledComponentsRegistry>
        <body className={`${manrope.className}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
