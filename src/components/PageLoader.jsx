import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/images/logo/i-kuku-logo.svg'
import { getCriticalFontTasks, getHomeCriticalImageTasks } from '../utils/criticalAssets'

const PageLoader = () => {
  const isDemoRoute = window.location.hash.split('?')[0] === '#/demo'
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(() => !isDemoRoute)

  useEffect(() => {
    if (isDemoRoute) {
      const root = document.getElementById('root')
      const bootLoader = document.getElementById('boot-loader')
      if (root) root.style.visibility = 'visible'
      bootLoader?.remove()
      return undefined
    }

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

    const isHomeRoute = window.location.hash.split('?')[0] === '#/' || !window.location.hash
    const imageTasks = isHomeRoute ? getHomeCriticalImageTasks() : []
    const fontTasks = getCriticalFontTasks()
    const tasks = [...imageTasks, ...fontTasks]
    const totalTasks = Math.max(tasks.length, 1)
    let completedTasks = 0

    const markTaskComplete = () => {
      completedTasks += 1
      targetProgress = Math.round((completedTasks / totalTasks) * 100)
    }

    tasks.forEach((task) => {
      task.then(markTaskComplete, markTaskComplete)
    })

    Promise.allSettled(tasks.length > 0 ? tasks : [Promise.resolve()]).then(() => {
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
  }, [isDemoRoute])

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

            <div className="mt-8 w-full rounded-[1.75rem] border-2 border-neutral-950 bg-[#FFFDF5]/95 p-5 sm:p-7">
              <img
                className="h-32 w-auto sm:h-32 mx-auto"
                src={logo}
                alt="I-kuku"
              />
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
                className="mt-5 h-6 w-full overflow-hidden rounded-full border-2 border-neutral-950 bg-white"
              >
                <motion.div
                  animate={{ scaleX: progress / 100 }}
                  className="h-full origin-left bg-[repeating-linear-gradient(-45deg,#697B3B,#697B3B_10px,#819650_10px,#819650_20px)]"
                  initial={{ scaleX: 0 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
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
