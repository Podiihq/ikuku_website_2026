import './App.css'
import { useEffect, useLayoutEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PageLoader from './components/PageLoader'
import AboutPage from './pages/AboutPage'
import AppPage from './pages/AppPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import CaseStudyDetailPage from './pages/CaseStudyDetailPage'
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

const AppLayout = () => {
  return (
    <>
      <PageLoader />
      <div className='bg-[#F8F0D8]'>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
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
