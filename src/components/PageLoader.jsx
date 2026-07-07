import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/images/logo/i-kuku-logo.svg'

const waitForImage = (image) => {
  if (image.complete) {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    image.addEventListener('load', resolve, { once: true })
    image.addEventListener('error', resolve, { once: true })
  })
}

const PageLoader = () => {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let animationFrame
    let bootLoaderFrame
    let handoffFrame
    let isCancelled = false
    let stylesAreReady = false
    let targetProgress = 0
    let displayedProgress = 0

    const revealStyledApp = () => {
      if (isCancelled) return

      stylesAreReady =
        getComputedStyle(document.documentElement)
          .getPropertyValue('--app-styles-ready')
          .trim() === '1'

      if (!stylesAreReady) {
        bootLoaderFrame = window.requestAnimationFrame(revealStyledApp)
        return
      }

      const root = document.getElementById('root')
      const bootLoader = document.getElementById('boot-loader')

      if (root) {
        root.style.visibility = 'visible'
      }

      handoffFrame = window.requestAnimationFrame(() => {
        bootLoader?.remove()
      })
    }

    const updateDisplayedProgress = () => {
      if (isCancelled) return

      if (displayedProgress < targetProgress) {
        displayedProgress = Math.min(displayedProgress + 1, targetProgress)
        setProgress(displayedProgress)
      }

      if (displayedProgress === 100 && stylesAreReady) {
        setIsVisible(false)
        return
      }

      animationFrame = window.requestAnimationFrame(updateDisplayedProgress)
    }

    const images = Array.from(document.images)
    const totalTasks = images.length + 2
    let completedTasks = 0

    const markTaskComplete = () => {
      completedTasks += 1
      targetProgress = Math.round((completedTasks / totalTasks) * 100)
    }

    const windowLoaded = new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve()
        return
      }

      window.addEventListener('load', resolve, { once: true })
    })

    const fontsLoaded = document.fonts?.ready ?? Promise.resolve()
    const tasks = [
      ...images.map((image) => waitForImage(image)),
      windowLoaded,
      fontsLoaded,
    ]

    tasks.forEach((task) => {
      task.finally(markTaskComplete)
    })

    Promise.allSettled(tasks).then(() => {
      targetProgress = 100
    })

    document.body.style.overflow = 'hidden'
    bootLoaderFrame = window.requestAnimationFrame(revealStyledApp)
    animationFrame = window.requestAnimationFrame(updateDisplayedProgress)

    return () => {
      isCancelled = true
      window.cancelAnimationFrame(animationFrame)
      window.cancelAnimationFrame(bootLoaderFrame)
      window.cancelAnimationFrame(handoffFrame)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = ''
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          animate={{ opacity: 1 }}
          aria-label={`Loading website: ${progress}%`}
          className="fixed inset-0 z-9999 flex min-h-dvh items-center justify-center overflow-hidden bg-[#F8F0D8] px-6"
          exit={{
            opacity: 0,
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          initial={{ opacity: 1 }}
          role="status"
        >
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative z-10 flex w-full max-w-xl flex-col items-center"
            initial={{ opacity: 0, scale: 0.9, y: 18 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.img
              className="h-32 w-auto sm:h-40"
              src={logo}
              alt="I-kuku"
              transition={{ duration: 2.5, ease: 'easeInOut', repeat: Infinity }}
            />

            <div className="mt-8 w-full rounded-[1.75rem] border-2 border-neutral-950 bg-[#FFFDF5]/95 p-5 shadow-[10px_10px_0_#0a0a0a] sm:p-7">
              <div className="flex items-end justify-between gap-4">
                <p className="creative-font text-2xl leading-none sm:text-3xl">
                  Loading website
                </p>
                <p className="creative-font text-5xl leading-none tabular-nums text-neutral-950 sm:text-6xl">
                  {progress}
                  <span className="ml-1 text-2xl">%</span>
                </p>
              </div>

              <div
                aria-hidden="true"
                className="mt-5 h-4.5 w-full overflow-hidden rounded-full border-2 border-neutral-950 bg-white"
              >
                <motion.div
                  animate={{ scaleX: progress / 100 }}
                  className="h-full origin-left bg-[repeating-linear-gradient(-45deg,#697B3B,#697B3B_10px,#819650_10px,#819650_20px)]"
                  initial={{ scaleX: 0 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#697B3B] sm:text-xs">
                  Preparing your experience
                </p>
                <motion.span
                  animate={{ scale: [1, 1.35, 1] }}
                  aria-hidden="true"
                  className="size-3 shrink-0 rounded-full bg-[#EA4335]"
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader
