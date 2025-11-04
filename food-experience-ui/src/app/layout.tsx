import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Plateful — Modern Food Discovery',
  description:
    'Discover nearby dining, book tables, and track your culinary adventures with Plateful.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-neutral">{children}</body>
    </html>
  )
}
