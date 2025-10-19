'use client'

import { Wallet } from 'lucide-react'

export function ConnectWallet() {
  return (
    <button className="px-6 py-3 rounded-lg gradient-primary text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
      <Wallet className="w-5 h-5" />
      Connect Wallet
    </button>
  )
}
