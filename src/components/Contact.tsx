import { Phone, Clock, ChevronRight, Send } from "lucide-react"
import { useReveal } from "../lib/hooks"
import { WHATSAPP_URL, INSTAGRAM_URL, PHONE, PHONE_DISPLAY } from "../lib/utils"

export default function Contact() {
  const infoRef = useReveal()
  const formRef = useReveal()

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div ref={infoRef} className="reveal-el space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full mb-4">Contacto</div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Vamos conversar</h2>
              <p className="text-slate-500 leading-relaxed">Tem um voo em mente? Quer comparar preços? Estou a uma mensagem de distância.</p>
            </div>

            <div className="space-y-4">
              <ContactLink href={WHATSAPP_URL} icon={<WhatsAppIcon />} iconBg="bg-green-50 group-hover:bg-green-100" title="WhatsApp" sub={PHONE_DISPLAY} borderHover="hover:border-green-200" />
              <ContactLink href={`tel:${PHONE}`} icon={<Phone className="w-5 h-5 text-brand-600" />} iconBg="bg-brand-50 group-hover:bg-brand-100" title="Telefone" sub={PHONE_DISPLAY} borderHover="hover:border-brand-200" />
              <ContactLink href={INSTAGRAM_URL} icon={<svg className="w-5 h-5 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>} iconBg="bg-pink-50 group-hover:bg-pink-100" title="Instagram" sub="@jorgepessoacostatravel" borderHover="hover:border-pink-200" />
            </div>

            <div className="flex items-center gap-3 p-4 bg-brand-50 rounded-xl">
              <Clock className="w-5 h-5 text-brand-600 flex-shrink-0" />
              <span className="text-sm text-brand-700">Respondo em menos de 24 horas — normalmente muito mais rápido!</span>
            </div>
          </div>

          <div ref={formRef} className="reveal-el">
            <div className="card p-6 lg:p-8">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-6">Pedir cotação de voo</h3>
              <form action="https://formsubmit.co/YOUR_EMAIL_HERE" method="POST" className="space-y-4">
                {/* SUBSTITUIR: Trocar YOUR_EMAIL_HERE pelo email real */}
                <input type="hidden" name="_subject" value="Nova cotação — Site Marca Férias" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                <Field label="Nome" id="name" type="text" placeholder="O seu nome" required />
                <Field label="Email" id="email" type="email" placeholder="o.seu@email.com" required />
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Origem" id="origin" type="text" placeholder="Ex: Lisboa" />
                  <Field label="Destino" id="destination" type="text" placeholder="Ex: Cancún" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Data ida" id="dateGo" type="date" />
                  <Field label="Data volta" id="dateBack" type="date" />
                </div>
                <div>
                  <label htmlFor="passengers" className="block text-sm font-medium text-slate-700 mb-1.5">Passageiros</label>
                  <select id="passengers" name="passageiros" defaultValue="2" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all">
                    {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n} passageiro{n > 1 ? "s" : ""}</option>)}
                    <option value="5+">5 ou mais</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1.5">Notas</label>
                  <textarea id="notes" name="notas" rows={3} placeholder="Preferência de horário, companhia aérea, classe..." className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none" />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-all shadow-sm hover:shadow-md">
                  <Send className="w-4 h-4" /> Pedir Cotação
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, id, type, placeholder, required }: { label: string; id: string; type: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      <input type={type} id={id} name={id} placeholder={placeholder} required={required} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" />
    </div>
  )
}

function ContactLink({ href, icon, iconBg, title, sub, borderHover }: { href: string; icon: React.ReactNode; iconBg: string; title: string; sub: string; borderHover: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-4 p-4 card ${borderHover} group`}>
      <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center transition-colors`}>{icon}</div>
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="text-sm text-slate-500">{sub}</div>
      </div>
      <ChevronRight className="w-4 h-4 text-slate-300 ml-auto" />
    </a>
  )
}

function WhatsAppIcon() {
  return <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
}
