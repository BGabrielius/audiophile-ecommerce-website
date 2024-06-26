import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StyledComponentsRegistry from '@/lib/registry';
import { ReduxProvider } from '@/providers/ReduxProvider';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Audiophile Ecommerce',
  description:
    'Audiophile - the best place to buy your portable audio equipment.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <StyledComponentsRegistry>
        <ReduxProvider>
          <body className={`${manrope.className}`}>
            <Header />
            {children}
            <Footer />
          </body>
        </ReduxProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
