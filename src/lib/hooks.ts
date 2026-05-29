import { useEffect, useRef, useState } from "react"

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible")
          obs.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const ran = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !ran.current) {
          ran.current = true
          let start: number | null = null
          const step = (ts: number) => {
            if (!start) start = ts
            const p = Math.min((ts - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(Math.floor(eased * target))
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return { ref, value }
}

export function useScrollNav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    handler()
    return () => window.removeEventListener("scroll", handler)
  }, [])
  return scrolled
}
