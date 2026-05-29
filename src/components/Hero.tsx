import { ArrowRight, Star, ArrowUpRight, CheckCircle, Shield, TrendingUp, Plane } from "lucide-react"
import { WHATSAPP_MSG } from "../lib/utils"

export default function Hero() {
  return (
    <section className="hero-mesh min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/8 rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass badge-shimmer">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-white/80">Parceiro Oficial APM Viagens — RNAVT 12286</span>
            </div>

            <div className="space-y-5">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] tracking-tight">
                Passagens aéreas com
                <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent"> tarifas exclusivas</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
                Voos nacionais e internacionais ao melhor preço. Eu encontro, comparo e emito o seu bilhete — com apoio do início ao fim.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={WHATSAPP_MSG("Olá Jorge! Gostaria de uma cotação de voo.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-teal-600/25 hover:shadow-teal-600/40 hover:-translate-y-0.5">
                <WhatsAppIcon />
                Pedir Cotação Grátis
              </a>
              <a href="#destinos" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white/90 font-semibold rounded-xl border border-white/20 hover:bg-white/10 transition-all">
                Ver Destinos <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["JS", "AM", "TC"].map((i, idx) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-brand-950 flex items-center justify-center text-[10px] font-bold text-white ${idx === 0 ? "bg-brand-500" : idx === 1 ? "bg-accent-500" : "bg-emerald-500"}`}>{i}</div>
                  ))}
                </div>
                <span className="text-sm text-slate-400"><strong className="text-white">150+</strong> clientes satisfeitos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <span className="text-sm text-slate-400">5.0</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Flight Card + Trust Pills */}
          <div className="hidden lg:flex flex-col gap-5">
            {/* Flight search card */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white/90">Pesquisa Rápida de Voos</span>
                <Plane className="w-5 h-5 text-teal-400" />
              </div>

              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-[10px] uppercase tracking-wider text-white/50 mb-1">Origem</div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Lisboa (LIS)</span>
                    <span className="text-white/40 text-xs">Portugal</span>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-[10px] uppercase tracking-wider text-white/50 mb-1">Destino</div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Cancún (CUN)</span>
                    <span className="text-white/40 text-xs">México</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-[10px] uppercase tracking-wider text-white/50 mb-1">Ida</div>
                  <span className="text-sm text-white font-medium">15 Jul 2025</span>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-[10px] uppercase tracking-wider text-white/50 mb-1">Volta</div>
                  <span className="text-sm text-white font-medium">29 Jul 2025</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50">A partir de</div>
                  <div className="text-2xl font-bold text-white">€489<span className="text-sm font-normal text-white/50">/pessoa</span></div>
                </div>
                <a href={WHATSAPP_MSG("Olá Jorge! Vi o voo Lisboa-Cancún e gostaria de mais informações.")} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-lg transition-colors">
                  Reservar
                </a>
              </div>
            </div>

            {/* Trust pills below card — clean, no overlaps */}
            <div className="grid grid-cols-3 gap-3">
              <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <div className="text-[11px] text-white/50">Poupança</div>
                  <div className="text-sm font-bold text-emerald-400">-23%</div>
                </div>
              </div>
              <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                <Shield className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div>
                  <div className="text-[11px] text-white/50">Certificado</div>
                  <div className="text-sm font-bold text-white/90">RNAVT</div>
                </div>
              </div>
              <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <div>
                  <div className="text-[11px] text-white/50">Emitidos</div>
                  <div className="text-sm font-bold text-white/90">200+</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
}
