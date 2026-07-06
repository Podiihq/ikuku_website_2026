import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/images/logo/logo-no-words.svg'

const navItems = [
  { label: 'Home', href: '#/' },
  { label: 'About Us', href: '#/about' },
  { label: 'I-kuku App', href: '#/app' },
  { label: 'Case Studies', href: '#/case-studies' },
  { label: 'Contact Us', href: '#/?section=contact' },
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

  return (
    <header className="sticky top-3 z-50 px-3 py-1 sm:px-4 lg:px-8">
      <nav className="mx-auto flex w-full max-w-7xl gap-1">
        <a
          className="flex h-16 w-20 shrink-0 items-center justify-center rounded border-2 border-black bg-[#FFFDF5] px-3 focus-visible:outline focus-visible:-outline-offset-4 focus-visible:outline-[#007a35]"
          href="#/"
          aria-label="I-kuku home"
        >
          <img className="h-14 w-auto" src={logo} alt="I-kuku" />
        </a>

        <div className="hidden h-16 flex-1 items-center justify-end rounded border-2 border-black bg-[#FFFDF5] text-[16px] text-neutral-950 lg:flex">
          {navItems.slice(0, 3).map((item) => (
            <a
              className="flex h-full uppercase border-x-2 border-white hover:border-black items-center px-6 transition-colors duration-200 hover:bg-[#F8F0D8] hover:text-[#007a35] focus-visible:outline focus-visible:-outline-offset-4 focus-visible:outline-[#007a35] xl:px-8"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="inline-flex h-16 flex-1 items-center justify-end rounded border-2 border-black bg-[#FFFDF5] px-5 text-3xl text-neutral-950 transition-colors duration-200 hover:text-[#007a35] focus-visible:outline focus-visible:-outline-offset-4 focus-visible:outline-[#007a35] lg:hidden"
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <a
          className="hidden h-16 items-center rounded border-2 uppercase border-black bg-[#FFFDF5] px-7 transition-colors duration-200 hover:bg-[#F8F0D8] hover:text-[#007a35] focus-visible:outline focus-visible:-outline-offset-4 focus-visible:outline-[#007a35] lg:flex xl:px-10"
          href="#/case-studies"
        >
          Case Studies
        </a>

        <a
          className="hidden h-16 items-center rounded border-2 uppercase border-black bg-[#FFB51C] px-7 font-bold transition-colors duration-200 hover:bg-[#FEF8E2] hover:text-[#007a35] focus-visible:outline focus-visible:-outline-offset-4 focus-visible:outline-[#007a35] lg:flex xl:px-10"
          href="#/?section=contact"
        >
          Contact Us
        </a>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            animate="open"
            className="mx-auto mt-1 max-w-screen-2xl overflow-hidden bg-[#F8F0D8] lg:hidden"
            exit="closed"
            id="mobile-navigation"
            initial="closed"
            variants={menuVariants}
          >
            <div className="flex w-full flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  className="border-2 border-black bg-[#FFFDF5] px-5 py-4 text-lg font-semibold text-neutral-950 transition-colors duration-200 last:bg-[#FFB51C] hover:bg-[#F8F0D8] hover:text-[#007a35] focus-visible:outline focus-visible:-outline-offset-4 focus-visible:outline-[#007a35]"
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
