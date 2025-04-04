import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JAAR Design',
  description: 'Action Oriented, Adaptable Approaches',
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
