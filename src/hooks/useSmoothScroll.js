import { useEffect } from 'react'
import Lenis from 'lenis'

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis()
    let animationFrame

    window.__ikukuLenis = lenis

    const raf = (time) => {
      lenis.raf(time)
      animationFrame = window.requestAnimationFrame(raf)
    }

    animationFrame = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      if (window.__ikukuLenis === lenis) {
        delete window.__ikukuLenis
      }
      lenis.destroy()
    }
  }, [])
}

export default useSmoothScroll
