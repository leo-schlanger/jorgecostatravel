import { ArrowRight } from "lucide-react"
import { useReveal } from "../lib/hooks"
import { WHATSAPP_MSG } from "../lib/utils"

const destinations = [
  { name: "Maldivas", tag: "Voos desde €589", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80" },
  { name: "Cancún", tag: "Voos desde €489", img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?auto=format&fit=crop&w=600&q=80" },
  { name: "Dubai", tag: "Voos desde €349", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80" },
  { name: "Tailândia", tag: "Voos desde €449", img: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80" },
  { name: "Bali", tag: "Voos desde €529", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80" },
  { name: "Roma", tag: "Voos desde €79", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80" },
  { name: "Nova Iorque", tag: "Voos desde €329", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80" },
  { name: "Cabo Verde", tag: "Voos desde €199", img: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=600&q=80" },
]

export default function Destinations() {
  const ref = useReveal()
  return (
    <section id="destinos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal-el text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full mb-4">Destinos Populares</div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Para onde quer voar?</h2>
          <p className="text-slate-500 text-lg">Voos directos e com escala para os destinos mais procurados. Clique para pedir cotação.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {destinations.map((d) => (
            <DestCard key={d.name} {...d} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a href={WHATSAPP_MSG("Olá Jorge! Quero cotação de voo para um destino diferente.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors">
            Outro destino? Peça cotação <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function DestCard({ name, tag, img }: { name: string; tag: string; img: string }) {
  const ref = useReveal<HTMLAnchorElement>()
  return (
    <a ref={ref} href={WHATSAPP_MSG(`Olá Jorge! Quero cotação de voo para ${name}.`)} target="_blank" rel="noopener noreferrer" className="reveal-el dest-card group relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-200">
      <img src={img} alt={name} className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="font-display font-bold text-white text-lg">{name}</div>
        <div className="text-white/60 text-xs">{tag}</div>
        <div className="mt-2 flex items-center gap-1 text-xs font-medium text-brand-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Pedir cotação <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </a>
  )
}
