'use client'

import { useEffect, useState } from 'react'
import { Package, Shield, Share2, FileCheck, Scan, TrendingUp } from 'lucide-react'
import { ConnectWallet } from './components/ConnectWallet'
import { ProductJourneyCard } from './components/ProductJourneyCard'
import { FeatureCard } from './components/FeatureCard'
import { StatsCard } from './components/StatsCard'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="animate-pulse-slow">
          <Package className="w-12 h-12 text-primary" />
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-white/10 glass sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-fg">ProvenanceTrace</h1>
                <p className="text-xs text-fg/60">Powered by Base</p>
              </div>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 py-16 relative">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-fg/80">Blockchain-Verified Authenticity</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg mb-6 leading-tight">
              Verify Product Authenticity & Unroll Its Story on Base
            </h2>
            <p className="text-lg text-fg/70 mb-8 leading-relaxed">
              Transparent, verifiable product provenance for consumers and streamlined supply chain data integrity for businesses using Base and Farcaster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-lg gradient-primary text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Scan className="w-5 h-5" />
                Scan Product
              </button>
              <button className="px-8 py-4 rounded-lg glass border border-primary/30 text-fg font-semibold hover:border-primary/60 transition-colors flex items-center justify-center gap-2">
                <Package className="w-5 h-5" />
                Register Product
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            icon={<Package className="w-6 h-6" />}
            value="12,847"
            label="Products Verified"
            trend="+23%"
          />
          <StatsCard
            icon={<Shield className="w-6 h-6" />}
            value="8,392"
            label="Certifications Issued"
            trend="+18%"
          />
          <StatsCard
            icon={<TrendingUp className="w-6 h-6" />}
            value="45,231"
            label="Supply Chain Events"
            trend="+31%"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-fg mb-4">Core Features</h3>
          <p className="text-fg/70 max-w-2xl mx-auto">
            Comprehensive tools for brands, suppliers, and consumers to ensure product authenticity and transparency
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Package className="w-8 h-8" />}
            title="Product Journey NFT Minting"
            description="Mint unique 'Product Journey' NFTs on Base, representing physical goods and their provenance data."
            color="primary"
          />
          <FeatureCard
            icon={<FileCheck className="w-8 h-8" />}
            title="Supply Chain Data Recorder"
            description="Immutably record each handoff, certification, and quality check on Base for complete transparency."
            color="accent"
          />
          <FeatureCard
            icon={<Scan className="w-8 h-8" />}
            title="Consumer Verification Frames"
            description="Scan QR codes to launch Farcaster Frames displaying full product history and certifications."
            color="primary"
          />
          <FeatureCard
            icon={<Share2 className="w-8 h-8" />}
            title="Social Sharing & Storytelling"
            description="Share product milestones and certifications as Frames or casts, amplifying brand stories virally."
            color="accent"
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Automated Compliance Reporting"
            description="Smart contracts trigger automated checks and generate verifiable compliance reports."
            color="primary"
          />
          <FeatureCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="Real-Time Analytics"
            description="Track product journeys, consumer engagement, and supply chain metrics in real-time."
            color="accent"
          />
        </div>
      </section>

      {/* Recent Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-3xl font-bold text-fg mb-2">Recent Product Journeys</h3>
            <p className="text-fg/70">Explore recently verified products and their stories</p>
          </div>
          <button className="px-6 py-3 rounded-lg glass border border-primary/30 text-fg font-semibold hover:border-primary/60 transition-colors">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductJourneyCard
            productName="Organic Coffee Beans"
            productId="PT-2024-001"
            status="Certified"
            events={8}
            lastUpdate="2 hours ago"
            imageUrl="/placeholder-coffee.jpg"
          />
          <ProductJourneyCard
            productName="Sustainable Cotton T-Shirt"
            productId="PT-2024-002"
            status="In Transit"
            events={5}
            lastUpdate="5 hours ago"
            imageUrl="/placeholder-tshirt.jpg"
          />
          <ProductJourneyCard
            productName="Fair Trade Chocolate"
            productId="PT-2024-003"
            status="Delivered"
            events={12}
            lastUpdate="1 day ago"
            imageUrl="/placeholder-chocolate.jpg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="glass rounded-2xl p-12 text-center border border-primary/20">
          <h3 className="text-3xl font-bold text-fg mb-4">
            Ready to Transform Your Supply Chain?
          </h3>
          <p className="text-fg/70 mb-8 max-w-2xl mx-auto">
            Join leading brands using ProvenanceTrace to build trust, ensure compliance, and tell compelling product stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg gradient-primary text-white font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-lg glass border border-primary/30 text-fg font-semibold hover:border-primary/60 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-fg font-semibold">ProvenanceTrace</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-fg/60">
              <a href="#" className="hover:text-primary transition-colors">Documentation</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
            </div>
            <div className="text-sm text-fg/60">
              Built on Base • Powered by Farcaster
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
