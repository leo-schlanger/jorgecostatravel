import { Star } from "lucide-react"
import { useReveal } from "../lib/hooks"

const testimonials = [
  {
    text: "Pedi cotação para 4 voos Lisboa-Maldivas e o Jorge encontrou uma tarifa 200€ mais barata por pessoa do que a melhor que eu tinha encontrado online. Recomendo a 100%!",
    name: "Maria & Tiago Silva", trip: "Lisboa → Maldivas", initials: "MS", color: "bg-teal-600",
  },
  {
    text: "Precisava de alterar o meu voo de última hora e o Jorge resolveu tudo em minutos. Se fosse pela companhia aérea, tinha perdido o bilhete. O apoio pessoal faz toda a diferença.",
    name: "Pedro Santos", trip: "Porto → São Paulo", initials: "PS", color: "bg-accent-500",
  },
  {
    text: "Compro sempre os meus voos de negócios com o Jorge. Emite rapidamente, os preços são competitivos e já não perco tempo a pesquisar. É como ter um assistente de viagens pessoal.",
    name: "Carlos Mendes", trip: "Viagens de Negócios", initials: "CM", color: "bg-emerald-500",
  },
]

export default function Testimonials() {
  const headerRef = useReveal()
  return (
    <section id="testemunhos" className="py-24 lg:py-32 bg-brand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal-el text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-brand-300 text-xs font-semibold rounded-full mb-4">Testemunhos</div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">O que dizem os nossos clientes</h2>
          <p className="text-slate-400 text-lg">A confiança dos clientes é a melhor garantia do nosso trabalho.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ text, name, trip, initials, color }: typeof testimonials[number]) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal-el bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.08] transition-colors">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
      </div>
      <p className="text-white/80 text-sm leading-relaxed mb-5 italic">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-xs font-bold text-white`}>{initials}</div>
        <div>
          <div className="text-sm font-semibold text-white">{name}</div>
          <div className="text-xs text-white/40">{trip}</div>
        </div>
      </div>
    </div>
  )
}
