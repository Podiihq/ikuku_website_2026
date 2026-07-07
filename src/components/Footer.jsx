import { FiArrowUpRight, FiBookOpen, FiSmartphone, FiUsers } from 'react-icons/fi'
import Button from './Button'
import GooglePlayMark from './GooglePlayMark'
import logo from '../assets/images/logo/i-kuku-logo.svg'

const websiteLinks = [
  { label: 'Home', href: '#/' },
  { label: 'About Us', href: '#/about' },
  { label: 'Case Studies', href: '#/case-studies' },
  { label: 'I-kuku App', href: '#/app' },
  { label: 'Contact Us', href: '#/contact' },
]

const footerHighlights = [
  {
    label: 'Digital records',
    icon: FiBookOpen,
  },
  {
    label: 'Farmer training',
    icon: FiUsers,
  },
  {
    label: 'Mobile-first tools',
    icon: FiSmartphone,
  },
]

const Footer = () => {
  return (
    <footer
      id="contact"
      className="mx-auto mb-4 max-w-screen-2xl overflow-hidden px-4 pb-0 pt-8 lg:px-0"
    >
      <div className="overflow-hidden rounded-t-2xl border-2 border-black bg-[#697B3B] text-[#FEF8E2] sm:rounded-2xl">
        <div className="grid gap-0 border-b-2 border-black lg:grid-cols-12">
          <div className="p-6 sm:p-10 lg:col-span-7 lg:p-12">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-[#FFCA55]">
              Work with i-kuku
            </p>
            <h2 className="creative-font max-w-4xl text-[clamp(3.4rem,7vw,7rem)] uppercase leading-[0.84]">
              Make poultry programs easier to measure.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed">
              i-kuku helps farmers and partner organizations move from scattered notebooks
              to farm-level records, practical training, and clearer production decisions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                bgColor="#FFB51C"
                href="#/contact"
                icon={<FiArrowUpRight className="text-2xl" aria-hidden="true" />}
                iconPosition="right"
                shadowColor="#000000"
                textColor="#000000"
              >
                Partner with us
              </Button>
              <Button
                bgColor="#FEF8E2"
                href="#/app"
                icon={<GooglePlayMark className="h-6 w-6" />}
                shadowColor="#000000"
                textColor="#000000"
              >
                Download app
              </Button>
            </div>
          </div>

          <div className="border-t-2 border-black bg-[#FFB51C] p-6 text-black sm:p-10 lg:col-span-5 lg:border-l-2 lg:border-t-0 lg:p-12">
            <div className='flex justify-center items-center'>
              <a
                className="w-fit rounded-xl border-2 border-black bg-[#FEF8E2] p-4 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#007a35]"
                href="#/"
                aria-label="I-kuku home"
              >
                <img className="h-28 w-auto sm:h-32" src={logo} alt="I-kuku" />
              </a>
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.14em]">
              Built for
            </p>
            <div className="mt-4 grid gap-3">
              {footerHighlights.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    className="flex items-center gap-3 rounded-lg border-2 border-black bg-[#FEF8E2] px-4 py-3 font-bold"
                    key={item.label}
                  >
                    <Icon className="text-2xl" aria-hidden="true" />
                    <span>{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:items-start lg:p-12">
          <div className="lg:col-span-6">
            <h3 className="creative-font text-4xl uppercase leading-none">
              Poultry decisions, backed by records.
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-[#FEF8E2]/85">
              For African poultry farmers and the teams supporting them.
            </p>
          </div>

          <nav className="lg:col-span-6" aria-label="Footer website links">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#FFCA55]">
              Explore
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {websiteLinks.map((link) => (
                <a
                  className="group inline-flex w-fit items-center gap-2 font-bold uppercase transition-colors duration-200 hover:text-[#FFCA55] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#FFCA55]"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                  <FiArrowUpRight
                    className="text-lg transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t-2 border-black px-6 py-5 text-sm uppercase tracking-[0.08em] text-[#FEF8E2]/80 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <p>© Copyright i-kuku 2026. All rights reserved.</p>
          <p>Built for African poultry farms.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
