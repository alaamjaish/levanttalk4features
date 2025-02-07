'use client';

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface Fonts {
  variable: string;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <LayoutContent fonts={{ geistSans, geistMono }}>{children}</LayoutContent>
    </ThemeProvider>
  );
}

const LayoutContent = ({ 
  children, 
  fonts: { geistSans, geistMono } 
}: { 
  children: React.ReactNode;
  fonts: { geistSans: Fonts; geistMono: Fonts };
}) => {
  const { darkMode } = useTheme();

  return (
    <html lang="en" className={darkMode ? 'dark' : ''} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors
          dark:bg-gray-900 dark:text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
};
