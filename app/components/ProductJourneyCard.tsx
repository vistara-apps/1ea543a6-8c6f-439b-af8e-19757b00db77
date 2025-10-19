import { Package, Clock, CheckCircle2 } from 'lucide-react'

interface ProductJourneyCardProps {
  productName: string
  productId: string
  status: 'Certified' | 'In Transit' | 'Delivered'
  events: number
  lastUpdate: string
  imageUrl: string
}

export function ProductJourneyCard({
  productName,
  productId,
  status,
  events,
  lastUpdate,
}: ProductJourneyCardProps) {
  const statusColors = {
    Certified: 'text-green-400 bg-green-400/10',
    'In Transit': 'text-yellow-400 bg-yellow-400/10',
    Delivered: 'text-blue-400 bg-blue-400/10',
  }

  return (
    <div className="glass rounded-xl overflow-hidden border border-white/10 card-hover">
      <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
        <Package className="w-16 h-16 text-primary/40" />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="text-lg font-bold text-fg mb-1">{productName}</h4>
            <p className="text-sm text-fg/60">{productId}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}>
            {status}
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-fg/70 mb-4">
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" />
            <span>{events} events</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{lastUpdate}</span>
          </div>
        </div>
        <button className="w-full px-4 py-3 rounded-lg glass border border-primary/30 text-fg font-semibold hover:border-primary/60 transition-colors">
          View Journey
        </button>
      </div>
    </div>
  )
}
