import { useState } from "react"
import { Plane, Menu, X } from "lucide-react"
import { useScrollNav } from "../lib/hooks"

export default function Navbar() {
  const scrolled = useScrollNav()
  const [open, setOpen] = useState(false)

  const linkClass = scrolled || open ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
  const brandClass = scrolled || open ? "text-brand-950" : "text-white"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || open ? "nav-glass" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
              <Plane className="w-4 h-4 text-white" />
            </div>
            <span className={`font-display font-bold text-lg transition-colors ${brandClass}`}>
              Marca <span className="text-brand-600">Férias</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {[
              ["#sobre", "Sobre"],
              ["#vantagens", "Vantagens"],
              ["#destinos", "Destinos"],
              ["#testemunhos", "Testemunhos"],
            ].map(([href, label]) => (
              <a key={href} href={href} className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${linkClass}`}>
                {label}
              </a>
            ))}
            <a href="#contacto" className="ml-2 inline-flex items-center gap-2 px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-sm">
              Pedir Cotação
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-slate-100/50 transition-colors" aria-label="Menu">
            {open ? <X className={`w-5 h-5 ${scrolled || open ? "text-slate-600" : "text-white"}`} /> : <Menu className={`w-5 h-5 ${scrolled ? "text-slate-600" : "text-white"}`} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {["Sobre", "Vantagens", "Destinos", "Testemunhos"].map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)} className="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-slate-50">
                {label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="block mt-2 text-center px-4 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-lg">
              Pedir Cotação
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
