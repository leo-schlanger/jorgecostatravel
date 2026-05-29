import { Shield, Plane, Globe, Clock, CheckCircle2 } from "lucide-react"

const items = [
  { icon: Shield, label: "RNAVT 12286" },
  { icon: Plane, label: "APM Viagens" },
  { icon: Globe, label: "50+ Destinos" },
  { icon: Clock, label: "Resposta em 24h" },
  { icon: CheckCircle2, label: "200+ Voos Emitidos" },
]

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-slate-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-slate-400">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
