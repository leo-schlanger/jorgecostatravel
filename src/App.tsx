import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TrustBar from "./components/TrustBar"
import About from "./components/About"
import Advantages from "./components/Advantages"
import Destinations from "./components/Destinations"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import CTASection from "./components/CTASection"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsAppFloat from "./components/WhatsAppFloat"

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-900 antialiased">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Advantages />
      <Destinations />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
