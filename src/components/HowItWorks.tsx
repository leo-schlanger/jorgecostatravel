import { useReveal } from "../lib/hooks"

const steps = [
  { n: "1", title: "Diga-me para onde", desc: "Envie-me via WhatsApp o destino, datas desejadas e número de passageiros. Sem compromisso." },
  { n: "2", title: "Receba a melhor cotação", desc: "Em 24h comparo todas as opções e envio-lhe a melhor proposta com voos, horários e preços detalhados." },
  { n: "3", title: "Confirme e voe", desc: "Aprove a proposta, eu emito o bilhete e recebe tudo no email. Suporte durante toda a viagem." },
]

export default function HowItWorks() {
  const headerRef = useReveal()
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal-el text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full mb-4">3 Passos Simples</div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Como funciona</h2>
          <p className="text-slate-500 text-lg">Do pedido ao embarque, tudo tratado por si.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-[28px] left-[20%] right-[20%] h-[2px] bg-slate-200" />
          {steps.map((s) => (
            <Step key={s.n} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal-el text-center">
      <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-brand-600 text-white flex items-center justify-center font-display font-bold text-xl relative z-10 shadow-lg shadow-brand-600/20">{n}</div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
    </div>
  )
}
