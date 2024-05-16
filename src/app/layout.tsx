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
        <body
          className={
            inter.className +
            ' w-[calc(100vw-20px)] overflow-x-hidden px-3 pb-8 antialiased sm:px-0'
          }
        >
          <div className='mx-auto max-w-lg'>
            <NavBar />
            {children}
          </div>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
