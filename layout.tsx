import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crypto Regret Engine | Calculate Your Pain',
  description: 'Find out how much that coffee, phone, or latte would be worth if you bought crypto instead. Prepare for savage regret.',
  keywords: ['crypto', 'regret', 'calculator', 'bitcoin', 'ethereum', 'opportunity cost'],
  openGraph: {
    title: 'Crypto Regret Engine',
    description: 'Calculate your crypto opportunity cost. Warning: results may cause emotional damage.',
    type: 'website',
    siteName: 'Crypto Regret Engine',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Regret Engine',
    description: 'Calculate your crypto opportunity cost. Warning: results may cause emotional damage.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
