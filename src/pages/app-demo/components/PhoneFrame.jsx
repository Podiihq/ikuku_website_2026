import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  PiAlarmFill,
  PiArrowLeft,
  PiBatteryFullFill,
  PiBluetoothFill,
  PiCellSignalFullFill,
  PiWifiHighFill,
} from 'react-icons/pi'

import splashScreenLogo from '../../../assets/images/mobile-demo-assets/others/splash_screen_logo.svg'

const screenVariants = {
  enter: (direction) => ({
    opacity: direction > 0 ? 1 : 0.85,
    x: direction > 0 ? '100%' : '-28%',
  }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({
    opacity: direction > 0 ? 0.85 : 1,
    x: direction > 0 ? '-28%' : '100%',
  }),
}

const PhoneFrame = ({ children, direction, notice, screen }) => {
  const shouldReduceMotion = useReducedMotion()
  const [isSplashVisible, setIsSplashVisible] = useState(true)

  useEffect(() => {
    const splashTimer = window.setTimeout(() => setIsSplashVisible(false), 2200)
    return () => window.clearTimeout(splashTimer)
  }, [])

  return (
    <main className="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#fffdf3_0%,#f8f0d8_48%,#e8dcc1_100%)] p-3 text-[#243b25]">
      <a
        aria-label="Go back to the i-Kuku homepage"
        className="absolute left-4 top-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-[#ffb51c] font-bold uppercase leading-none text-black shadow-[6px_6px_0_#0a0a0a] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#0a0a0a] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#007a35] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#0a0a0a] sm:h-14 sm:w-auto sm:gap-3 sm:px-6"
        href="#/"
      >
        <PiArrowLeft aria-hidden="true" className="shrink-0 text-xl" />
        <span className="hidden sm:inline">Back to homepage</span>
      </a>

      <motion.section
        animate={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
        aria-label="Interactive i-Kuku mobile application demo"
        className="relative h-[min(844px,calc(100dvh-24px),calc((100vw-24px)*844/390))] aspect-390/844 @container"
        initial={
          shouldReduceMotion
            ? { opacity: 0 }
            : { opacity: 0, rotateX: 7, scale: 0.88, y: 72 }
        }
        style={{ transformOrigin: '50% 70%', transformPerspective: 1200 }}
        transition={
          shouldReduceMotion
            ? { duration: 0.18, ease: 'easeOut' }
            : { type: 'spring', stiffness: 135, damping: 18, mass: 0.9 }
        }
      >
        <span className="absolute left-[-1.15cqw] top-[18cqw] h-[7.5cqw] w-[1.4cqw] rounded-l-[1cqw] bg-[#222] shadow-[inset_1px_0_1px_#555]" />
        <span className="absolute left-[-1.15cqw] top-[29cqw] h-[12.5cqw] w-[1.4cqw] rounded-l-[1cqw] bg-[#222] shadow-[inset_1px_0_1px_#555]" />
        <span className="absolute left-[-1.15cqw] top-[43cqw] h-[12.5cqw] w-[1.4cqw] rounded-l-[1cqw] bg-[#222] shadow-[inset_1px_0_1px_#555]" />
        <span className="absolute right-[-1.15cqw] top-[31cqw] h-[20cqw] w-[1.4cqw] rounded-r-[1cqw] bg-[#222] shadow-[inset_-1px_0_1px_#555]" />

        <div className="relative h-full w-full rounded-[13cqw] bg-[linear-gradient(145deg,#404040_0%,#090909_18%,#000_72%,#333_100%)] p-[2.05cqw] shadow-[0_3.5cqw_9cqw_rgba(31,39,24,0.34),inset_0_0_0_0.35cqw_#5b5b5b]">
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[10.95cqw] bg-white">
            <div className="pointer-events-none absolute left-1/2 top-[2.1cqw] z-30 h-[7.2cqw] w-[25.6cqw] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_-0.3cqw_0.5cqw_#272727]">
              <span className="absolute right-[2.1cqw] top-1/2 size-[1.7cqw] -translate-y-1/2 rounded-full bg-[#101922] shadow-[inset_0_0_0_0.35cqw_#162b43]" />
            </div>

            <AnimatePresence>
              {isSplashVisible && (
                <motion.div
                  animate={{ opacity: 1 }}
                  aria-label="Opening i-Kuku"
                  className="absolute inset-0 z-25 flex items-center justify-center bg-white"
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 1 }}
                  role="status"
                  transition={{ duration: shouldReduceMotion ? 0.15 : 0.38, ease: 'easeOut' }}
                >
                  <motion.img
                    alt="i-Kuku"
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="h-auto w-[24cqw] select-none"
                    draggable="false"
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, scale: 0.86, y: '2cqw' }
                    }
                    src={splashScreenLogo}
                    transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, ease: 'easeOut' }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative z-20 flex h-[12cqw] shrink-0 items-center justify-between px-[4.3cqw] pt-[1cqw] text-[3.1cqw] font-bold">
              <time dateTime="17:13">5:13 PM</time>
              <div aria-label="Phone status" className="flex items-center gap-[1.3cqw] text-[3.55cqw]">
                <PiAlarmFill aria-hidden="true" />
                <PiBluetoothFill aria-hidden="true" />
                <PiWifiHighFill aria-hidden="true" />
                <PiCellSignalFullFill aria-hidden="true" />
                <PiBatteryFullFill aria-hidden="true" className="text-[4.1cqw]" />
              </div>
            </div>

            <div className="relative min-h-0 flex-1 overflow-hidden bg-white">
              <AnimatePresence custom={direction} initial={false} mode="sync">
                <motion.div
                  animate="center"
                  className="absolute inset-0 flex flex-col bg-white"
                  custom={direction}
                  exit="exit"
                  initial="enter"
                  key={screen}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  variants={screenVariants}
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex h-[5.2cqw] shrink-0 items-start justify-center bg-white pt-[1.2cqw]">
              <span className="h-[1.25cqw] w-[34cqw] rounded-full bg-black" />
            </div>

            <div
              aria-live="polite"
              className={`pointer-events-none absolute bottom-[21cqw] left-1/2 z-40 max-w-[80cqw] -translate-x-1/2 rounded-full bg-[#243b25] px-[4cqw] py-[2.2cqw] text-center text-[3.1cqw] font-medium text-white shadow-lg transition-all duration-200 ${
                notice ? 'translate-y-0 opacity-100' : 'translate-y-[2cqw] opacity-0'
              }`}
              role="status"
            >
              {notice}
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}

export default PhoneFrame
