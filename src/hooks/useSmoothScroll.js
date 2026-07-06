import { useEffect } from 'react'
import Lenis from 'lenis'

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis()
    let animationFrame

    const raf = (time) => {
      lenis.raf(time)
      animationFrame = window.requestAnimationFrame(raf)
    }

    animationFrame = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      lenis.destroy()
    }
  }, [])
}

export default useSmoothScroll
