import { type ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color: 'primary' | 'accent'
}

export function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  const colorClasses = {
    primary: 'text-primary border-primary/30',
    accent: 'text-accent border-accent/30',
  }

  return (
    <div className="glass rounded-xl p-6 border border-white/10 card-hover">
      <div className={`w-14 h-14 rounded-lg glass border ${colorClasses[color]} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h4 className="text-xl font-bold text-fg mb-3">{title}</h4>
      <p className="text-fg/70 leading-relaxed">{description}</p>
    </div>
  )
}
