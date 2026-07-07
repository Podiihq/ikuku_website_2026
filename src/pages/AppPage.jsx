import { useEffect } from 'react'
import {
  FiActivity,
  FiBell,
  FiBookOpen,
  FiDollarSign,
  FiGlobe,
  FiHeart,
  FiPieChart,
  FiWifiOff,
} from 'react-icons/fi'
import Button from '../components/Button'
import GooglePlayMark from '../components/GooglePlayMark'
import useSmoothScroll from '../hooks/useSmoothScroll'
import Illustration1 from '../assets/images/illustrations/illustration-1.png'
import ScreenThumb from '../assets/images/screens/Screen-thumb-2.png'
import ScreenThumb2 from '../assets/images/screens/Screen-thumb-1.png'
import Screen1 from '../assets/images/screens/screen-1.png'
import Screen2 from '../assets/images/screens/screen-7.png'
import Screen3 from '../assets/images/screens/screen-4.png'
import Screen4 from '../assets/images/screens/screen-6.png'

const features = [
  {
    number: '01',
    title: 'Digital Record Keeping',
    description:
      'Keeps all your farm records organized, accessible, and secure across every production cycle.',
    icon: FiBookOpen,
    background: '#F8F0D8',
  },
  {
    number: '02',
    title: 'Feed Management',
    description:
      'Helps you track feed usage, reduce waste, and identify changes before they affect flock performance.',
    icon: FiPieChart,
    background: '#F8F0D8',
  },
  {
    number: '03',
    title: 'Mortality & Health Logging',
    description:
      'Creates a complete health history for every batch, helping you detect trends and improve flock health over time.',
    icon: FiHeart,
    background: '#F8F0D8',
  },
  {
    number: '04',
    title: 'Cost & Revenue Tracking',
    description:
      'Shows you exactly where your money goes and how much each batch earns, making profitability easier to measure.',
    icon: FiDollarSign,
    background: '#F8F0D8',
    color: '#000000',
  },
  {
    number: '05',
    title: 'Automated Reminders',
    description:
      'Ensures important tasks such as feeding, vaccinations, and treatments are completed on time.',
    icon: FiBell,
    background: '#F8F0D8',
  },
  {
    number: '06',
    title: 'AI-Powered Farm Insights',
    description:
      'Turns your farm records into practical recommendations, helping you make better decisions with confidence.',
    icon: FiActivity,
    background: '#F8F0D8',
    color: '#000000',
  },
]

// Replace this with the Google Play listing URL when it is available.
const androidDownloadLink = '#/app'

const AppPage = () => {
  useSmoothScroll()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main id="app-page" className="bg-[#F8F0D8] text-neutral-950">
      <section className="px-4 pb-16 pt-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid overflow-hidden rounded-xl border-2 border-black bg-[#697B3B] text-[#FEF8E2] lg:grid-cols-12">
            <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-7 lg:min-h-168 lg:p-12">
              <div>
                <p className="text-xl mb-4 font-bold">i-KUKU Mobile App</p>
                <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-[#FFCA55]">
                  Your farm. In your pocket.
                </p>
                <h1 className="creative-font max-w-4xl text-[clamp(4rem,8vw,7rem)] uppercase leading-[0.82]">
                  Turn your poultry farm into a profitable business.
                </h1>
              </div>

              <div className="mt-12 max-w-2xl pt-6">
                <p className="text-lg leading-relaxed sm:text-xl">
                  i-kuku brings every part of your poultry operation into one simple
                  platform; tracking your birds, resources, and daily activity, then turning
                  those records into clear guidance that helps you grow healthier birds and
                  farm more profitably.
                </p>
                <Button
                  bgColor="#FFB51C"
                  className="mt-8"
                  href={androidDownloadLink}
                  icon={<GooglePlayMark />}
                  shadowColor="#111111"
                  textColor="#000000"
                >
                  Download for Android
                </Button>
              </div>
            </div>

            <div className="relative min-h-120 overflow-hidden border-t-2 border-black bg-[#FFB51C] lg:col-span-5 lg:border-l-2 lg:border-t-0">
              <div className="h-full">
                <img
                  src={Illustration1}
                  alt="I-kuku mobile app dashboard showing birds, feed, eggs and farm actions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-screen-2xl rounded-xl border-2 border-black">
          <div className='h-150 md:hidden'>
            <img src={ScreenThumb2} alt="" className='h-full w-full object-cover rounded-xl' />
          </div>

          <div className="mt-10 md:grid grid-cols-1 gap-4 rounded-xl px-6 pt-6 md:grid-cols-2 lg:grid-cols-4 hidden">
            <img
              src={Screen1}
              alt="I-kuku mobile app dashboard showing birds, feed, eggs and farm actions"
              className="hidden w-full md:block"
            />
            <img
              src={Screen2}
              alt="I-kuku mobile app poultry batch screen"
              className="w-full"
            />
            <img
              src={Screen4}
              alt="I-kuku mobile app farm records screen"
              className="hidden w-full md:block"
            />
            <img
              src={Screen3}
              alt="I-kuku mobile app farm records screen"
              className="hidden w-full md:block"
            />
          </div>
        </div>
      </section>


      <section className="px-4 pb-20 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-[#697B3B]">
                One platform. Every day.
              </p>
              <h2 className="creative-font text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.86]">
                What i-kuku does for your farm.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed lg:col-span-4 lg:pb-2">
              Simple tools that replace scattered notebooks with a clear view of your farm,
              your flock, and your money.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <article
                  className="flex min-h-96 flex-col rounded-xl border-2 border-black p-6 sm:p-8"
                  key={feature.number}
                  style={{ backgroundColor: feature.background, color: feature.color }}
                >
                  <div className="flex items-center justify-between pb-5">
                    <span className="creative-font text-4xl">{feature.number}</span>
                    <Icon className="text-3xl" aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col justify-end pt-14">
                    <h3 className="creative-font text-[clamp(2.5rem,4vw,4rem)] uppercase leading-[0.92]">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#FFB51C] px-4 py-20 lg:px-12 lg:py-28 border-y-2">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em]">
                Reliable by design
              </p>
              <h2 className="creative-font text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.86]">
                Built for African conditions.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed lg:col-span-4 lg:pb-2">
              Built around how farmers actually work — wherever the farm is and whatever the
              network looks like.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            <div className="grid gap-4 lg:col-span-5">
              <article className="rounded-xl border-2 border-black bg-[#F8F0D8] p-6 text-black sm:p-8">
                <FiWifiOff className="mb-14 text-4xl" aria-hidden="true" />
                <h3 className="creative-font text-5xl uppercase leading-none">
                  Offline-first
                </h3>
                <p className="mt-5 text-lg leading-relaxed">
                  i-kuku works fully without internet. Your records are saved locally and
                  sync automatically when you reconnect.
                </p>
              </article>

              <article className="rounded-xl border-2 border-black bg-[#F8F0D8] p-6 text-black sm:p-8">
                <FiGlobe className="mb-14 text-4xl" aria-hidden="true" />
                <h3 className="creative-font text-5xl uppercase leading-none">Multilingual</h3>
                <p className="mt-5 text-lg leading-relaxed">
                  Available in English and Swahili, with more languages on the way.
                </p>
              </article>
            </div>

            <div className="relative min-h-120 overflow-hidden rounded-xl border-2 border-black bg-[#697B3B] sm:min-h-136 lg:col-span-7 lg:min-h-160">
              <img
                src={Screen2}
                alt="I-kuku app poultry batch screen"
                className="absolute left-1/2 w-[88%] -translate-x-1/2 drop-shadow-[0_24px_20px_rgba(0,0,0,0.3)] sm:w-[72%] bottom-0 lg:-bottom-24 lg:left-[6%] lg:top-auto lg:w-[46%] lg:translate-x-0 lg:-rotate-6"
              />
              <img
                src={Screen3}
                alt="I-kuku app farm records screen"
                className="absolute hidden drop-shadow-[0_24px_20px_rgba(0,0,0,0.3)] lg:-bottom-24 lg:right-[6%] lg:block lg:w-[46%] lg:rotate-6"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center rounded-xl border-2 border-black px-6 py-16 text-center sm:px-10 lg:py-24">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em]">
            Better records. Better decisions.
          </p>
          <h2 className="creative-font max-w-5xl text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.86]">
            Start managing your farm smarter.
          </h2>
          <Button
            bgColor="#F8F0D8"
            className="mt-9"
            href={androidDownloadLink}
            icon={<GooglePlayMark />}
            shadowColor="#000000"
            textColor="#000000"
          >
            Download i-kuku
          </Button>
        </div>
      </section>
    </main>
  )
}

export default AppPage
