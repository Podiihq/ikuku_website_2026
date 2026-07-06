import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/images/logo/i-kuku-logo.svg'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'I-kuku App', href: '/#app' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'Contact Us', href: '/#contact' },
]

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.22,
      ease: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.28,
      ease: 'easeOut',
    },
  },
}

const itemVariants = {
  closed: { opacity: 0, y: -8 },
  open: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.04,
      duration: 0.2,
      ease: 'easeOut',
    },
  }),
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const firstGroup = navItems.slice(0, 2)
  const secondGroup = navItems.slice(2)

  return (
    <header className="sticky top-0 z-50 bg-[#F8F0D8] lg:bg-transparent">
      <div className='absolute w-full h-30 lg:h-40 bg-linear-to-b via-[#F8F0D8]/90 from-[#F8F0D8] to-transparent top-0 -z-10 hidden md:block' />
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:grid lg:h-32 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
        <div className="hidden items-center justify-end gap-12 text-[16px] text-neutral-950 lg:flex">
          {firstGroup.map((item) => (
            <a
              className="transition-colors duration-200 hover:text-[#007a35] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#007a35]"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          className="flex shrink-0 items-center focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#007a35]"
          href="/"
          aria-label="I-kuku home"
        >
          <img
            className="h-16 w-auto lg:h-20"
            src={logo}
            alt="I-kuku"
          />
        </a>

        <div className="hidden items-center justify-start gap-12 text-[16px] text-neutral-950 lg:flex">
          {secondGroup.map((item) => (
            <a
              className="transition-colors duration-200 hover:text-[#007a35] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#007a35]"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="inline-flex size-11 items-center justify-center rounded-md text-3xl text-neutral-950 transition-colors duration-200 hover:text-[#007a35] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#007a35] lg:hidden"
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            animate="open"
            className="overflow-hidden border-t border-black/5 bg-[#f8f0d8] lg:hidden"
            exit="closed"
            id="mobile-navigation"
            initial="closed"
            variants={menuVariants}
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-4 sm:px-8">
              {navItems.map((item, index) => (
                <motion.a
                  className="border-b border-black/5 py-4 text-lg font-semibold text-neutral-950 transition-colors duration-200 last:border-b-0 hover:text-[#007a35] focus-visible:outline focus-visible:-outline-offset-2 focus-visible:outline-[#007a35]"
                  custom={index}
                  href={item.href}
                  key={item.label}
                  onClick={() => setIsOpen(false)}
                  variants={itemVariants}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
