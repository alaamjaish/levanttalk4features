'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LevantTalk',
  description: 'Learn Levantine Arabic the fun way',
};

function RootLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { darkMode } = useTheme();

  return (
    <html lang="en" className={darkMode ? 'dark' : ''} suppressHydrationWarning>
      <body 
        className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <RootLayoutContent>
        {children}
      </RootLayoutContent>
    </ThemeProvider>
  );
}
