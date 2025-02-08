'use client';

import { Inter } from 'next/font/google';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

function RootLayoutContent({
  children
}: {
  children: React.ReactNode;
}) {
  const { darkMode } = useTheme();

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
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
      <RootLayoutContent>{children}</RootLayoutContent>
    </ThemeProvider>
  );
}
