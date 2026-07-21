import { useEffect } from 'react'
import {
  FiArrowUpRight,
  FiBarChart2,
  FiLayers,
  FiTarget,
  FiUsers,
} from 'react-icons/fi'
import Button from '../components/Button'
import ProgressiveImage from '../components/ProgressiveImage'
import useSmoothScroll from '../hooks/useSmoothScroll'
import HeroImage from '../assets/images/photos/Image-7.png'
import Illustration1 from '../assets/images/illustrations/illustration-11.png'
import FarmImage from '../assets/images/photos/image6.png'
import WorkshopImage from '../assets/images/photos/image5.png'

const values = [
  {
    number: '01',
    title: 'Farmer-First',
    description:
      'Every decision is guided by farmer outcomes. Features, products, and services must deliver clear value to farmers and improve their day-to-day operations.',
    background: '#FFB51C',
  },
  {
    number: '02',
    title: 'Simplicity',
    description:
      'Complex agricultural challenges require simple, intuitive solutions. Every tool should be easy to understand, easy to use, and immediately useful without extensive training or documentation.',
    background: '#F8F0D8',
  },
  {
    number: '03',
    title: 'Practical Innovation',
    description:
      'Technology must perform reliably in real African farming conditions. Solutions are designed to work offline, use minimal resources, and remain dependable in environments with limited connectivity.',
    background: '#F8F0D8',
  },
  {
    number: '04',
    title: 'African-Built',
    description:
      'Products are designed from an African perspective, with local realities, challenges, and opportunities at the centre. Solutions are built specifically for African farmers rather than adapted from foreign markets.',
    background: '#697B3B',
    textColor: '#FEF8E2',
  },
]

const AboutPage = () => {
  useSmoothScroll()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main id="about" className="bg-[#F8F0D8] text-neutral-950">
      <section className="px-4 pb-16 pt-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid items-stretch gap-4 lg:grid-cols-12">
            <div className="flex min-h-136 flex-col justify-between rounded-xl border-2 border-black bg-[#697B3B] p-6 text-[#FEF8E2] sm:p-10 lg:col-span-7 lg:min-h-168 lg:p-12">
              <p className="text-xl font-bold uppercase">About i-kuku</p>
              <h1 className="creative-font max-w-4xl text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.82]">
                Built for real African conditions
              </h1>

              <div className="max-w-2xl pt-6">
                <p className="text-lg leading-relaxed sm:text-xl">
                  For growth-minded African poultry farmers who want to scale profitably,
                  i-kuku is a decision intelligence platform that guides farmers from gut
                  instinct to informed action.
                </p>
              </div>
            </div>

            <div className="relative min-h-120 overflow-hidden rounded-xl border-2 border-black lg:col-span-5">
              <ProgressiveImage
                src={HeroImage}
                alt="Two poultry farmers smiling together inside a chicken house"
                className="absolute inset-0 h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-12">
            <div className="rounded-xl border-2 border-black bg-[#FFB51C] lg:col-span-4 hidden lg:block">
              <ProgressiveImage src={Illustration1} alt="" className='w-full h-full' />
            </div>
            <div className="rounded-xl border-2 border-black bg-[#FEF8E2] p-6 lg:col-span-8 lg:p-8 space-y-2 flex flex-col">
              <p className="lg:text-xl font-bold uppercase text-[#697B3B]">Why we exist</p>
              <div className='flex-1' />
              <p className="creative-font text-[clamp(2.2rem,4.2vw,4.5rem)] uppercase leading-[0.95]">
                To make every <span className='creative-font text-[#697B3B]'> African poultry farmers profitable and resilient, </span> because
                food sustainability starts at the farm gate.
              </p>
            </div>
            <div className="rounded-xl border-2 border-black bg-[#FFB51C] lg:col-span-4 lg:hidden">
              <ProgressiveImage src={Illustration1} alt="" className='w-full h-full' />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-8 max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[#697B3B]">
              Direction &amp; purpose
            </p>
            <h2 className="creative-font text-[clamp(3.5rem,7vw,6.5rem)] uppercase leading-[0.88]">
              The future we are building
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <article className="flex min-h-120 flex-col rounded-xl border-2 border-black bg-[#FFB51C] p-6 text-[#000000] sm:p-10">
              <div className="flex items-center justify-between border-b border-black/40 pb-5">
                <p className="text-sm font-bold uppercase tracking-[0.14em]">Our Vision</p>
                <FiTarget className="text-3xl" aria-hidden="true" />
              </div>
              <div className="flex flex-1 items-end pt-14">
                <div>
                  <p className="mb-4 text-sm uppercase tracking-[0.12em]">
                    The future i-kuku is building
                  </p>
                  <h3 className="creative-font text-[clamp(2.8rem,5vw,5rem)] uppercase leading-[0.92]">
                    A future where every African poultry farm runs smarter, is data-driven,
                    and raises birds that thrive.
                  </h3>
                </div>
              </div>
            </article>

            <article className="flex min-h-120 flex-col rounded-xl border-2 border-black bg-[#FFB51C] p-6 sm:p-10">
              <div className="flex items-center justify-between border-b border-black/35 pb-5">
                <p className="text-sm font-bold uppercase tracking-[0.14em]">Our Mission</p>
                <FiBarChart2 className="text-3xl" aria-hidden="true" />
              </div>
              <div className="flex flex-1 items-end pt-14">
                <div>
                  <p className="mb-4 text-sm uppercase tracking-[0.12em]">
                    How i-kuku achieves the vision
                  </p>
                  <h3 className="creative-font text-[clamp(2.8rem,5vw,5rem)] uppercase leading-[0.92]">
                    We digitise the minds and processes of poultry farmers.
                  </h3>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed">
                    We put real-time data, AI-driven insight, and automation into the hands
                    of every farmer.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#697B3B] px-4 py-20 text-[#FEF8E2] lg:px-12 lg:py-28 border-y-2 border-black">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-[#FFCA55]">
                How we work
              </p>
              <h2 className="creative-font text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.86]">
                Partners open the door. Farmers drive the impact.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed lg:col-span-5 lg:pb-2">
              i-kuku is a B2B and B2B2C platform. Our partners are our entry point, while
              farmers remain the focus of every outcome we work toward.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            <div className="relative min-h-112 overflow-hidden rounded-xl border-2 border-black lg:col-span-7">
              <ProgressiveImage
                src={FarmImage}
                alt="Poultry professionals using mobile phones to review farm activity"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="grid gap-4 lg:col-span-5">
              <article className="rounded-xl border-2 border-black bg-[#F8F0D8] p-6 text-black sm:p-8">
                <div className="mb-10 flex items-start justify-between gap-4">
                  <span className="creative-font text-5xl">01</span>
                  <FiUsers className="text-3xl" aria-hidden="true" />
                </div>
                <h3 className="creative-font text-4xl uppercase leading-none">
                  NGOs &amp; development organisations
                </h3>
                <p className="mt-4 leading-relaxed">
                  Digital tools that extend your reach and give your programmes measurable
                  outcomes.
                </p>
              </article>

              <article className="rounded-xl border-2 border-black bg-[#F8F0D8] p-6 text-black sm:p-8">
                <div className="mb-10 flex items-start justify-between gap-4">
                  <span className="creative-font text-5xl">02</span>
                  <FiLayers className="text-3xl" aria-hidden="true" />
                </div>
                <h3 className="creative-font text-4xl uppercase leading-none">
                  Poultry agribusinesses
                </h3>
                <p className="mt-4 leading-relaxed">
                  Reliable, farm-level data that helps your teams make rational decisions.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-[#697B3B]">
                Our values
              </p>
              <h2 className="creative-font text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.86]">
                Four principles that guide everything we build.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed lg:col-span-4 lg:pb-2">
              These principles keep our products grounded, useful, and accountable to the
              people they are built for.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.number}
                className="flex min-h-100 flex-col rounded-xl border-2 border-black p-6 sm:p-8"
                style={{ backgroundColor: value.background, color: value.textColor }}
              >
                <div className="flex items-center justify-between border-b border-current/30 pb-5">
                  <span className="text-sm font-bold uppercase tracking-[0.14em]">
                    Principle
                  </span>
                  <span className="creative-font text-4xl">{value.number}</span>
                </div>
                <div className="flex flex-1 flex-col justify-end pt-16">
                  <h3 className="creative-font text-[clamp(2.8rem,5vw,5rem)] uppercase leading-none">
                    {value.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed">{value.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 lg:px-12 lg:pb-24">
        <div className="mx-auto grid max-w-screen-2xl overflow-hidden rounded-xl border-2 border-black bg-[#FEF8E2] lg:grid-cols-2">
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-[#697B3B]">
              Build impact with us
            </p>
            <h2 className="creative-font text-[clamp(3.2rem,6vw,6rem)] uppercase leading-[0.88]">
              Help African poultry farms run smarter.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              Partner with i-kuku to turn farm-level information into practical,
              measurable outcomes.
            </p>
            <Button
              bgColor="#FFB51C"
              className="mt-8"
              href="#/contact"
              icon={<FiArrowUpRight className="text-2xl" aria-hidden="true" />}
              iconPosition="right"
            >
              Partner with us
            </Button>
          </div>
          <ProgressiveImage
            src={WorkshopImage}
            alt="A poultry facilitator speaking with farmers during a group workshop"
            className="h-full min-h-112 w-full border-t-2 border-black object-cover lg:border-l-2 lg:border-t-0"
          />
        </div>
      </section>
    </main>
  )
}

export default AboutPage
