import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const inter = Inter({
   subsets: ['latin'],
   weight:["400"],
});

export const metadata: Metadata = {
  title: 'Armaggedon V3',
  description: 'Онлайн-сервис по мониторингу и уничтожению опасных астероидов на основе данных API NASA',
  keywords: [
    'уничтожению опасных астероидов',
    'мониторинг',
    `Онлайн-сервис`,
  ],
  applicationName: `Armaggedon V3`,
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
