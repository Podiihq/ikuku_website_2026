import { FiSmartphone, FiUsers } from 'react-icons/fi'
import Button from '../components/Button'
import CaseStudyCard from '../components/CaseStudyCard'
import GooglePlayMark from '../components/GooglePlayMark'
import ProgressiveImage from '../components/ProgressiveImage'
import { caseStudies } from '../data/caseStudies'
import HeroImage from "../assets/images/photos/Image-8.png"
import HeroIllustration from "../assets/images/illustrations/illustration-1.png"

import Screen1 from "../assets/images/screens/screen-1.png"
import Screen2 from "../assets/images/screens/screen-2.png"
import Screen3 from "../assets/images/screens/screen-3.png"
import Screen4 from "../assets/images/screens/screen-4.png"
import ScreenThumb from "../assets/images/screens/Screen-thumb-2.png"

import ProcessIllustration1 from "../assets/images/illustrations/illustration-2.png"
import ProcessIllustration2 from "../assets/images/illustrations/illustration-3.png"
import ProcessIllustration3 from "../assets/images/illustrations/illustration-4.png"

import Image1 from "../assets/images/photos/image-2.png"
import Image2 from "../assets/images/photos/image-3.png"
import illustration1 from "../assets/images/illustrations/illustration-5.png"
import illustration2 from "../assets/images/illustrations/illustration-6.png"
import UsaidLogo from "../assets/images/partners/USAID-LOGO.svg"
import E4ImpactLogo from "../assets/images/partners/E4IMPACT-LOGO.svg"
import KopiaLogo from "../assets/images/partners/KOPIA-LOGO.svg"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { playStoreLink } from '../data/appLinks'
import useSmoothScroll from '../hooks/useSmoothScroll'
import { getCriticalFontTasks, getHomeCriticalImageTasks } from '../utils/criticalAssets'

const HomePage = () => {
    useSmoothScroll()
    const { search } = useLocation()

    useEffect(() => {
        const sectionId = new URLSearchParams(search).get('section')

        if (!sectionId) {
            window.scrollTo(0, 0)
            return
        }

        let animationFrame
        let isCancelled = false

        Promise.allSettled([
            ...getHomeCriticalImageTasks(),
            ...getCriticalFontTasks(),
        ]).then(() => {
            if (isCancelled) return

            animationFrame = window.requestAnimationFrame(() => {
                document.getElementById(sectionId)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            })
        })

        return () => {
            isCancelled = true
            window.cancelAnimationFrame(animationFrame)
        }
    }, [search]);

    return (
        <main id="home" className="min-h-[160vh] bg-[#F8F0D8]">
            <section className="bg-[#f8f0d8] px-0 pb-14 lg:pb-5 pt-10 lg:px-12 lg:pt-20">
                <div className="mx-auto flex max-w-7xl flex-col items-center text-center px-4">
                    <h1 className="creative-font max-w-6xl lg:px-20 text-[clamp(3rem,6vw,6.75rem)] uppercase leading-[0.98]">
                        Poultry farmers make life-saving decisions every{' '}
                        <span className="relative inline-block">
                            <span className="line-through decoration-[0.08em] creative-font">day</span>
                        </span>{' '}
                        hour.
                    </h1>

                    <p className="mt-8 max-w-4xl text-balance">
                        I-kuku builds tools that turn poultry farm decisions into informed action so African
                        farmers can farm profitably and scale easily.
                    </p>

                    <div className="mt-8 flex w-full flex-col justify-center gap-4 items-center md:flex-row">
                        <Button
                            bgColor="#ffffff"
                            href={playStoreLink}
                            icon={<GooglePlayMark />}
                            rel="noreferrer"
                            target="_blank"
                            textColor="#000000"
                        >
                            Download App
                        </Button>
                        <Button
                            bgColor="#ffb51c"
                            href="#/contact"
                            icon={<FiUsers className="text-2xl" aria-hidden="true" />}
                            textColor="#000000"
                        >
                            Partner with us
                        </Button>
                    </div>

                    <div className="mt-12 w-full max-w-5xl">
                        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#697B3B]">
                            We've partnered with
                        </p>
                        <div className="mt-4 lg:mt-8 flex justify-center flex-wrap items-center gap-2">
                            {partners.map((partner) => (
                                <img
                                    key={partner.name}
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    className="w-40 md:w-50 object-contain bg-[#F8F0D8] border-2 rounded"
                                    data-home-critical
                                    decoding="async"
                                    loading="eager"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-7 pt-20 gap-4 max-w-screen-2xl mx-auto relative md:px-4 lg:px-0'>
                    <div className='md:col-span-4 hidden md:block'>
                        <img
                            src={HeroImage}
                            alt=""
                            className='border-2 rounded-xl'
                            data-home-critical
                            decoding="async"
                            fetchPriority="high"
                            loading="eager"
                        />
                    </div>
                    <div className='md:col-span-3 md:border-2 rounded-xl md:bg-[#F9B420] relative h-full'>
                        <img
                            src={HeroIllustration}
                            alt=""
                            className='md:absolute h-full w-full -top-10'
                            data-home-critical
                            decoding="async"
                            fetchPriority="high"
                            loading="eager"
                        />
                    </div>
                </div>
            </section>
            <section id="app" className='max-w-screen-2xl mx-auto px-4 lg:px-0 text-[#FEF8E2]'>
                <div className='border-2 border-black rounded-xl bg-[#697B3B]'>
                    <div className='px-4 pt-4 lg:px-10 lg:pt-10 space-y-3'>
                        <p className='uppercase'>Hard work isn't the problem!</p>
                        <h1 className="creative-font max-w-5xl text-[clamp(3rem,6vw,5.75rem)] uppercase leading-[0.98]">
                            We digitize how farmers think, unlocking the true value of their hard work.
                        </h1>
                        <p className='max-w-5xl'>Poultry farming takes an incredible amount of dedication. Yet, so many farmers find themselves fighting to keep their margins above water. The issue isn't a lack of hard work, it’s that they use methods simply weren't built to scale with a growing business.</p>
                        <Button
                            bgColor="#FEF8E2"
                            href={playStoreLink}
                            icon={<GooglePlayMark />}
                            rel="noreferrer"
                            shadowColor="#000000"
                            target="_blank"
                            textColor="#000000"
                        >
                            Download App
                        </Button>
                    </div>
                    <div className='lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 px-6 rounded-xl mt-10 hidden'>
                        <img src={Screen1} alt="" data-home-critical decoding="async" loading="eager" />
                        <img src={Screen2} alt="" className='hidden md:block' data-home-critical decoding="async" loading="eager" />
                        <img src={Screen3} alt="" className='hidden md:block' data-home-critical decoding="async" loading="eager" />
                        <img src={Screen4} alt="" className='hidden md:block' data-home-critical decoding="async" loading="eager" />
                    </div>
                    <div className='h-150 lg:hidden mt-6 '>
                        <img src={ScreenThumb} alt="" className='h-full w-full object-cover rounded-b-xl bg-[#FFB51C]' data-home-critical decoding="async" loading="eager" />
                    </div>

                </div>
            </section>
            <section className='max-w-screen-2xl mx-auto py-20 px-4 lg:px-0'>
                <h1 className="creative-font max-w-5xl text-center mx-auto text-[clamp(3rem,6vw,5.75rem)] uppercase leading-[0.98]">
                    From Records to real Understanding.
                </h1>
                <p className='text-center'>Most farm records tell you what happened, i-kuku shows you what to do.</p>
                <div className='py-5' />
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {processData.map((items, index) => (
                        <ProcessCardComponent
                            key={index}
                            title={items.title}
                            description={items.description}
                            illustration={items.illustration}
                        />
                    ))}
                </div>
            </section>
            <section className='max-w-screen-2xl mx-auto px-4 lg:px-0 pb-20'>
                <h1 className="creative-font max-w-5xl text-[clamp(3rem,6vw,5.75rem)] uppercase leading-[0.98]">
                    One Robust Platform. Two Ways to Impact.
                </h1>

                <div className='mt-4 space-y-4'>
                    <div className='grid lg:grid-cols-5 gap-3'>
                        <div className='lg:col-span-3 relative h-140 lg:h-auto'>
                            <ProgressiveImage src={Image1} alt="" className='w-full h-full object-cover border-2 rounded-xl' />
                            <div className='space-y-3 absolute bottom-10 lg:left-10 left-5 right-5 z-10 text-white'>
                                <p className='text-5xl creative-font font-bold'>For Farmers</p>
                                <p className='lg:w-2/3'>Step away from the paperwork. Get real-time, AI-backed guidance on flock health, feed optimization, and margins right in your pocket.</p>
                                <Button
                                    bgColor="#ffb51c"
                                    href="#/app"
                                    icon={<FiSmartphone className="text-2xl" aria-hidden="true" />}
                                    shadowColor="#F8F0D8"
                                    textColor="#000000"
                                >
                                    See how the app works
                                </Button>
                            </div>
                        </div>
                        <div className='lg:col-span-2 border-2 h-full rounded-xl bg-[#EA4335] hidden lg:block'>
                            <ProgressiveImage src={illustration1} alt="" className='w-full h-full' />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-5 gap-3'>
                        <div className='lg:col-span-2 border-2 h-full rounded-xl bg-[#FEC02E] hidden lg:block'>
                            <ProgressiveImage src={illustration2} alt="" className='w-full' />
                        </div>
                        <div className='lg:col-span-3 relative h-140 lg:h-auto'>
                            <ProgressiveImage src={Image2} alt="" className='w-full h-full object-cover border-2 rounded-xl' />
                            <div className='space-y-3 absolute bottom-10 lg:left-10 left-5 right-5 z-10 text-white'>
                                <p className='text-5xl creative-font font-bold'>For Organizations</p>
                                <p className='lg:w-2/3'>We collaborate with development partners and cooperatives to deploy scalable, data-driven agricultural training.</p>
                                <Button
                                    bgColor="#ffb51c"
                                    href="#/contact"
                                    icon={<FiUsers className="text-2xl" aria-hidden="true" />}
                                    shadowColor="#F8F0D8"
                                    textColor="#000000"
                                >
                                    Partner with Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="case-studies" className='max-w-screen-2xl mx-auto pb-10 px-4 lg:px-0'>
                <h1 className="creative-font max-w-5xl text-[clamp(3rem,6vw,5.75rem)] uppercase leading-[0.98]">
                    Case studies
                </h1>
                <div className='space-y-3 pt-6'>
                    {caseStudies.map((items) => (
                        <CaseStudyCard
                            key={items.slug}
                            title={items.cardTitle}
                            description={items.description}
                            caseImage={items.image}
                            pageLink={`#/case-studies/${items.slug}`}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default HomePage






const processData = [
    {
        title: "1. Record",
        description: "Farmers track their daily data in ikuku. This includes feeds, water, vaccine usage, items sold.",
        illustration: ProcessIllustration1
    },
    {
        title: "2. Understand",
        description: "I-kuku organizes farmer records and surfaces what is healthy, what has shifted and what needs your attention.",
        illustration: ProcessIllustration2
    },
    {
        title: "3. Decide",
        description: "With a clear picture of your farm, and AI insights every decision you make is informed from your own records.",
        illustration: ProcessIllustration3
    },
]

const partners = [
    {
        name: "KOPIA",
        logo: KopiaLogo,
    },
    {
        name: "E4Impact",
        logo: E4ImpactLogo,
    },
    {
        name: "USAID",
        logo: UsaidLogo,
    },

]


export const ProcessCardComponent = ({ title, description, illustration }) => {
    return (
        <div className='border-2 rounded-xl flex flex-col'>
            <div className='p-6 space-y-3'>
                <h1 className="creative-font text-[clamp(3rem,6vw,3rem)] uppercase leading-[0.98]">
                    {title}
                </h1>
                <p>{description}</p>
            </div>
            <div className='flex-1' />
            <div>
                <img
                    src={illustration}
                    alt=""
                    data-home-critical
                    decoding="async"
                    loading="eager"
                />
            </div>
        </div>
    )
}
