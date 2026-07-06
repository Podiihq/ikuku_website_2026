import Button from './Button'
import GooglePlayMark from './GooglePlayMark'
import logo from '../assets/images/logo/i-kuku-logo.svg'

import Image1 from "../assets/images/illustrations/illustration-7.png"
import Image2 from "../assets/images/illustrations/illustration-8.png"

const websiteLinks = [
  { label: 'Home', href: '#/' },
  { label: 'About Us', href: '#/about' },
  { label: 'Case Studies', href: '#/?section=case-studies' },
  { label: 'I-kuku App', href: '#/app' },
  { label: 'Contact Us', href: '#/?section=contact' },
]

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Linkedin', href: '#' },
  { label: 'X(Twitter)', href: '#' },
]

const Footer = () => {
  return (
    <footer id="contact" className="lg:px-0 pb-0 pt-8 px-4 sm:pb-4 max-w-screen-2xl mx-auto overflow-hidden mb-4">
      <div className="rounded-t-2xl border-2 border-black text-black bg-[#FFB51C] px-5 py-12 text-center sm:rounded-2xl lg:py-16 relative">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div>
            <h2 className="font-bold uppercase creative-font text-3xl">Website Links</h2>
            <nav className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2" aria-label="Footer website links">
              {websiteLinks.map((link) => (
                <a
                  className="transition-colors duration-200 hover:text-[#007a35] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#007a35]"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8">
            <h2 className="font-bold uppercase creative-font text-3xl">Social Links</h2>
            <nav className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2" aria-label="Footer social links">
              {socialLinks.map((link) => (
                <a
                  className="transition-colors duration-200 hover:text-[#007a35] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#007a35]"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <a
            className="mt-8 inline-flex focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#007a35]"
            href="#/"
            aria-label="I-kuku home"
          >
            <img className="h-36 w-auto sm:h-40" src={logo} alt="I-kuku" />
          </a>

          <Button
            bgColor="#f8f0d8"
            className="mt-8"
            href="#/app"
            icon={<GooglePlayMark className="h-6 w-6" />}
            shadowColor="#000000"
            textColor="#000000"
          >
            Download App
          </Button>

          <p className="mt-10">©️Copyright i-kiku 2026 | All Rights Reserved</p>
        </div>
        <div className='hidden lg:block'>
          <img src={Image1} alt="" className='absolute w-160 -bottom-16.5 -left-4' />
          <img src={Image2} alt="" className='absolute w-160 -bottom-15 -right-4' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
