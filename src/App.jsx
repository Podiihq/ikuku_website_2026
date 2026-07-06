import './App.css'
import { useEffect, useLayoutEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PageLoader from './components/PageLoader'
import AboutPage from './pages/AboutPage'
import AppPage from './pages/AppPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import CaseStudyDetailPage from './pages/CaseStudyDetailPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

const scrollToPageTop = () => {
  window.__ikukuLenis?.scrollTo?.(0, { immediate: true, force: true })
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

const ScrollToTop = () => {
  const { pathname, search } = useLocation()

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return undefined

    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useLayoutEffect(() => {
    const sectionId = pathname === '/' ? new URLSearchParams(search).get('section') : null

    if (sectionId) return undefined

    scrollToPageTop()
    const animationFrame = window.requestAnimationFrame(scrollToPageTop)
    const timeout = window.setTimeout(scrollToPageTop, 0)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.clearTimeout(timeout)
    }
  }, [pathname, search])

  return null
}

const pageTransition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1],
}

const PageTransitionRoutes = () => {
  const location = useLocation()
  const shouldReduceMotion = useReducedMotion()
  const routeKey = location.pathname

  const initialState = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 18 }

  const animateState = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0 }

  const exitState = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: -12 }

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        animate={animateState}
        className="relative"
        data-page-transition=""
        exit={exitState}
        initial={initialState}
        key={routeKey}
        style={{ willChange: 'opacity, transform' }}
        transition={shouldReduceMotion ? { duration: 0.18 } : pageTransition}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

const AppLayout = () => {
  return (
    <>
      <PageLoader />
      <div className='bg-[#F8F0D8]'>
        <ScrollToTop />
        <Navbar />
        <PageTransitionRoutes />
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <HashRouter>
      <AppLayout />
    </HashRouter>
  )
}

export default App
