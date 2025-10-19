import { type ReactNode } from 'react'
import { TrendingUp } from 'lucide-react'

interface StatsCardProps {
  icon: ReactNode
  value: string
  label: string
  trend: string
}

export function StatsCard({ icon, value, label, trend }: StatsCardProps) {
  return (
    <div className="glass rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white">
          {icon}
        </div>
        <div className="flex items-center gap-1 text-green-400 text-sm font-semibold">
          <TrendingUp className="w-4 h-4" />
          {trend}
        </div>
      </div>
      <div className="text-3xl font-bold text-fg mb-1">{value}</div>
      <div className="text-sm text-fg/60">{label}</div>
    </div>
  )
}
