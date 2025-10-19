import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'ProvenanceTrace - Verify Product Authenticity on Base',
  description: 'Transparent, verifiable product provenance for consumers and streamlined supply chain data integrity for businesses using Base and Farcaster.',
  openGraph: {
    title: 'ProvenanceTrace',
    description: 'Verify product authenticity & unroll its story on Base',
    images: ['/og-image.png'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${process.env.NEXT_PUBLIC_APP_URL}/splash.png`,
    'fc:frame:button:1': 'Verify Product Journey',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': process.env.NEXT_PUBLIC_APP_URL || '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
