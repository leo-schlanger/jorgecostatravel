import { User, Shield, MapPin } from "lucide-react"
import { useReveal, useCountUp } from "../lib/hooks"

function Stat({ target, label }: { target: number; label: string }) {
  const { ref, value } = useCountUp(target)
  return (
    <div ref={ref}>
      <div className="text-xl font-bold text-brand-600">{value}+</div>
      <div className="text-[10px] uppercase tracking-wider text-slate-500">{label}</div>
    </div>
  )
}

export default function About() {
  const ref = useReveal()

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal-el grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-100 to-brand-200 border border-slate-200">
              {/* SUBSTITUIR: Colocar foto real do Jorge aqui
                  <img src="/jorge.jpg" alt="Jorge Pessoa e Costa" className="w-full h-full object-cover" /> */}
              <div className="w-full h-full flex flex-col items-center justify-center text-brand-400 gap-3">
                <User className="w-16 h-16 opacity-40" />
                <span className="text-sm text-brand-400/60">Foto do Jorge</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-600/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-500/10 rounded-xl -z-10" />

            <div className="absolute -right-6 bottom-8 card p-4 shadow-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <Stat target={50} label="Destinos" />
                <Stat target={200} label="Voos" />
                <Stat target={150} label="Clientes" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full mb-4">
                <User className="w-3.5 h-3.5" /> Sobre Mim
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Conheça o Jorge</h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Sou o Jorge Pessoa e Costa, consultor de viagens certificado em Cascais.
              Especializo-me em <strong className="text-slate-900">encontrar as melhores passagens aéreas</strong> para qualquer destino do mundo, com tarifas que não encontra nas plataformas online.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Como CEO da <strong className="text-slate-900">Marca Férias</strong>, pela APM Viagens, tenho acesso direto a tarifas negociadas com as principais companhias aéreas. Isso significa preços mais baixos, melhores condições de cancelamento e apoio personalizado na emissão do seu bilhete.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Seja um voo de ida e volta para férias, uma viagem de negócios ou uma escapadinha de última hora — eu encontro a melhor opção para si.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-sm text-slate-600">
                <Shield className="w-4 h-4 text-amber-500" /> <strong>RNAVT 12286</strong>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-brand-500" /> Cascais, Portugal
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
