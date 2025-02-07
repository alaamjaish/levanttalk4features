'use client';

import { Inter } from 'next/font/google';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

interface Fonts {
  className: string;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <LayoutContent fonts={{ inter }}>{children}</LayoutContent>
    </ThemeProvider>
  );
}

const LayoutContent = ({ 
  children, 
  fonts: { inter } 
}: { 
  children: React.ReactNode;
  fonts: { inter: Fonts };
}) => {
  const { darkMode } = useTheme();

  return (
    <html lang="en" className={darkMode ? 'dark' : ''} suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased transition-colors
          dark:bg-gray-900 dark:text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
};
