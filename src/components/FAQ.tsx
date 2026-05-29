import { ChevronDown } from "lucide-react"
import { useReveal } from "../lib/hooks"

const faqs = [
  { q: "Porquê comprar passagens aéreas através de um consultor?", a: "Tenho acesso a tarifas negociadas que não estão disponíveis nos motores de busca. Além do preço, ofereço apoio personalizado na escolha do voo, condições de cancelamento mais flexíveis e assistência caso surja qualquer problema. O serviço de pesquisa e cotação é gratuito — só paga o bilhete." },
  { q: "Os preços são mesmo mais baratos do que online?", a: "Sim, na grande maioria dos casos. Trabalho com tarifas consolidadas e negociadas através da rede APM Viagens. Em média, os nossos clientes poupam até 23% no valor total da passagem. Caso não consiga oferecer um preço melhor, digo-lhe com transparência." },
  { q: "Quanto tempo demora a receber a cotação?", a: "No máximo 24 horas. Na maioria dos casos, respondo no mesmo dia. Basta enviar-me o destino, datas e número de passageiros via WhatsApp." },
  { q: "E se precisar de alterar ou cancelar o voo?", a: "Trato de tudo por si. Ao comprar comigo, as condições de alteração e cancelamento são frequentemente mais flexíveis. Em caso de imprevisto, contacte-me por WhatsApp e resolvo o mais rápido possível." },
  { q: "Quais são as formas de pagamento?", a: "Aceito transferência bancária, MB Way e cartão de crédito. Em alguns casos, é possível pagar em prestações. Fale comigo para saber as opções disponíveis." },
]

export default function FAQ() {
  const headerRef = useReveal()
  const listRef = useReveal()

  function toggle(e: React.MouseEvent<HTMLButtonElement>) {
    const item = e.currentTarget.parentElement!
    const wasOpen = item.classList.contains("open")
    document.querySelectorAll(".faq-item.open").forEach((el) => el.classList.remove("open"))
    if (!wasOpen) item.classList.add("open")
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal-el text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full mb-4">FAQ</div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Perguntas frequentes</h2>
        </div>

        <div ref={listRef} className="reveal-el space-y-0 divide-y divide-slate-200">
          {faqs.map((f) => (
            <div key={f.q} className="faq-item">
              <button onClick={toggle} className="w-full flex items-center justify-between gap-4 py-5 text-left">
                <span className="text-[15px] font-semibold text-slate-900">{f.q}</span>
                <ChevronDown className="faq-chevron w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300" />
              </button>
              <div className="faq-answer">
                <p className="pb-5 text-sm text-slate-500 leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
