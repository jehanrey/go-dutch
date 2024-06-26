import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/app/_components/header'
import { cn } from '@/lib/utils'

import Navbar from './_components/nav-bar'
import ThemeProvider from './_components/theme/provider'
import './globals.css'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Go Dutch',
  // description: "Generated by create next app",
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn('flex h-full min-h-screen flex-col', fontSans.className)}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <div className="flex w-full flex-1 flex-grow flex-col md:flex-row">
            <Navbar />
            <main className="flex flex-grow flex-col items-center justify-between *:w-full dark:bg-black dark:text-white">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
