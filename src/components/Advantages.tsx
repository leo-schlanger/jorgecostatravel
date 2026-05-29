import { DollarSign, Phone, Shield, Globe, Clock, TrendingUp, CheckCircle } from "lucide-react"
import { useReveal } from "../lib/hooks"

export default function Advantages() {
  const ref = useReveal()
  return (
    <section id="vantagens" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal-el text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full mb-4">Porquê Escolher-me</div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Vantagens de comprar comigo</h2>
          <p className="text-slate-500 text-lg">Muito mais do que um motor de busca. Um consultor real, focado em si.</p>
        </div>

        <div className="bento-grid">
          <Card className="bento-wide" icon={DollarSign} iconBg="bg-brand-50" iconColor="text-brand-600" title="Tarifas Exclusivas & Negociadas" desc="Acesso a preços especiais através da rede APM Viagens que não estão disponíveis ao público geral.">
            <div className="mt-auto flex items-center gap-4 pt-4 border-t border-slate-100">
              <span className="flex items-center gap-2 text-sm text-emerald-600 font-medium"><TrendingUp className="w-4 h-4" /> Até 23% mais barato</span>
              <span className="flex items-center gap-2 text-sm text-slate-400"><CheckCircle className="w-4 h-4" /> Sem taxas escondidas</span>
            </div>
          </Card>
          <Card icon={Phone} iconBg="bg-accent-500/10" iconColor="text-accent-500" title="Apoio Personalizado" desc="Uma pessoa real ao seu lado. Antes, durante e depois da viagem. Disponível via WhatsApp sempre que precisar." />
          <Card icon={Shield} iconBg="bg-emerald-50" iconColor="text-emerald-600" title="Cancelamento Flexível" desc="Condições de alteração e cancelamento mais flexíveis do que comprar diretamente na companhia aérea." />
          <Card icon={Globe} iconBg="bg-violet-50" iconColor="text-violet-600" title="Todas as Companhias" desc="TAP, Ryanair, easyJet, Emirates, Turkish Airlines e muito mais. Comparo tudo para encontrar o melhor para si." />
          <Card className="bento-wide" icon={Clock} iconBg="bg-sky-50" iconColor="text-sky-600" title="Cotação em 24 Horas" desc="Envie-me o destino, datas e número de passageiros. Em menos de 24 horas recebe a melhor cotação com todas as opções — sem compromisso." horizontal />
        </div>
      </div>
    </section>
  )
}

function Card({ icon: Icon, iconBg, iconColor, title, desc, children, className = "", horizontal = false }: {
  icon: React.ElementType; iconBg: string; iconColor: string; title: string; desc: string; children?: React.ReactNode; className?: string; horizontal?: boolean
}) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal-el card p-6 lg:p-8 hover:border-brand-200 ${className}`}>
      <div className={horizontal ? "flex flex-col sm:flex-row gap-5" : "flex flex-col h-full"}>
        <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center ${horizontal ? "flex-shrink-0" : "mb-5"}`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div>
          <h3 className={`font-bold text-slate-900 ${horizontal ? "text-lg" : "text-lg"} mb-2`}>{title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
