import { Shield, MapPin } from "lucide-react"
import { useReveal, useCountUp } from "../lib/hooks"

function Stat({ target, label }: { target: number; label: string }) {
  const { ref, value } = useCountUp(target)
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl font-bold text-brand-600">{value}+</div>
      <div className="text-[11px] uppercase tracking-wider text-slate-500 mt-1">{label}</div>
    </div>
  )
}

export default function About() {
  const ref = useReveal()

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal-el grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Photo */}
          <div className="relative max-w-md mx-auto lg:max-w-none">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img src="/jorge.png" alt="Jorge Pessoa e Costa" className="w-full h-full object-cover object-top" />
            </div>
            {/* Decorative accents */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-brand-600/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent-500/10 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full mb-5">
                Sobre Mim
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-5">Conheça o Jorge</h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-[15px]">
              Sou o Jorge Pessoa e Costa, consultor de viagens certificado em Cascais.
              Especializo-me em <strong className="text-slate-900">encontrar as melhores passagens aéreas</strong> para qualquer destino do mundo, com tarifas que não encontra nas plataformas online.
            </p>
            <p className="text-slate-600 leading-relaxed text-[15px]">
              Como fundador da <strong className="text-slate-900">JPC Travel</strong>, pela APM Viagens, tenho acesso direto a tarifas negociadas com as principais companhias aéreas. Isso significa preços mais baixos, melhores condições de cancelamento e apoio personalizado na emissão do seu bilhete.
            </p>
            <p className="text-slate-600 leading-relaxed text-[15px]">
              Seja um voo de ida e volta para férias, uma viagem de negócios ou uma escapadinha de última hora — eu encontro a melhor opção para si.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-slate-200">
              <Stat target={50} label="Destinos" />
              <Stat target={200} label="Voos Emitidos" />
              <Stat target={150} label="Clientes" />
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-600">
                <Shield className="w-4 h-4 text-amber-500" /> <strong>RNAVT 12286</strong>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-brand-500" /> Cascais, Portugal
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
