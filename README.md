# ProvenanceTrace - Base Mini App

Verify product authenticity & unroll its story on Base.

## Features

- **Product Journey NFT Minting**: Mint unique NFTs representing physical goods and their provenance
- **Supply Chain Data Recorder**: Immutably record supply chain events on Base
- **Consumer Verification Frames**: Scan QR codes to view product history in Farcaster Frames
- **Social Sharing**: Share product stories and certifications virally
- **Automated Compliance**: Smart contract-based compliance reporting

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- Farcaster MiniKit for social features
- Tailwind CSS with Coinbase theme
- TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Deployment

Deploy to Vercel or any Next.js-compatible hosting platform.

## License

MIT
