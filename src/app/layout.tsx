import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@components/common/NavBar';
import { CSPostHogProvider } from '@lib/providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yohan Le Breton - Software Engineer',
  description:
    'Personal website of Yohan Le Breton. Software Engineer / Frontend developer / Creative Technologist',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <CSPostHogProvider>
        <body className={inter.className + ' mx-auto max-w-lg px-3 sm:px-0'}>
          <NavBar />
          {children}
        </body>
      </CSPostHogProvider>
    </html>
  );
}
