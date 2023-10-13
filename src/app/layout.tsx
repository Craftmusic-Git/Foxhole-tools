import './globals.css'
import type { Metadata } from 'next'
import { Alata } from 'next/font/google'

const inter = Alata({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Foxhole KABOUM',
  description: 'Created by [11eRC] Craftmusic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
