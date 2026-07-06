import { FiArrowUpRight, FiBriefcase, FiSmartphone, FiUsers } from 'react-icons/fi'
import Button from '../components/Button'
import GooglePlayMark from '../components/GooglePlayMark'
import HeroImage from "../assets/images/photos/Image-1.png"
import HeroIllustration from "../assets/images/illustrations/illustration-1.png"

import Screen1 from "../assets/images/screens/screen-1.png"
import Screen2 from "../assets/images/screens/screen-2.png"
import Screen3 from "../assets/images/screens/screen-3.png"

import ProcessIllustration1 from "../assets/images/illustrations/illustration-2.png"
import ProcessIllustration2 from "../assets/images/illustrations/illustration-3.png"
import ProcessIllustration3 from "../assets/images/illustrations/illustration-4.png"

import Image1 from "../assets/images/photos/image-2.png"
import Image2 from "../assets/images/photos/image-3.png"
import Image4 from "../assets/images/photos/image5.png"
import Image5 from "../assets/images/photos/image6.png"
import illustration1 from "../assets/images/illustrations/illustration-5.png"
import illustration2 from "../assets/images/illustrations/illustration-6.png"
import Lenis from 'lenis'
import { useEffect } from 'react'

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => {
            lenis.destroy();
        };
    }, []);
    return (
        <main id="home" className="min-h-[160vh] bg-[#F8F0D8]">
            <section className="bg-[#f8f0d8] px-0 pb-14 lg:pb-5 pt-10 lg:px-12 lg:pt-12">
                <div className="mx-auto flex max-w-7xl flex-col items-center text-center px-4">
                    <h1 className="creative-font max-w-7xl text-[clamp(3rem,6vw,5.75rem)] uppercase leading-[0.98]">
                        Poultry farmers make lifesaving decisions every{' '}
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
                            href="#app"
                            icon={<GooglePlayMark />}
                            textColor="#000000"
                        >
                            Download App
                        </Button>
                        <Button
                            bgColor="#ffb51c"
                            href="#contact"
                            icon={<FiUsers className="text-2xl" aria-hidden="true" />}
                            textColor="#000000"
                        >
                            Partner with us
                        </Button>
                    </div>
                </div>
                <div className='grid md:grid-cols-7 pt-20 gap-4 max-w-screen-2xl mx-auto relative'>
                    <div className='md:col-span-4 hidden md:block'>
                        <img src={HeroImage} alt="" className='border-2 rounded-xl' />
                    </div>
                    <div className='md:col-span-3 lg:border-2 rounded-xl lg:bg-[#F9B420] relative h-full'>
                        <img src={HeroIllustration} alt="" className='md:absolute h-full w-full -top-10' />
                    </div>
                </div>
            </section>
            <section className='max-w-screen-2xl mx-auto px-4 lg:px-0 text-[#FEF8E2]'>
                <div className='border-2 border-black rounded-xl bg-[#697B3B]'>
                    <div className='px-4 pt-4 lg:px-10 lg:pt-10 space-y-3'>
                        <p className='uppercase'>Hard work isn't the problem!</p>
                        <h1 className="creative-font max-w-5xl text-[clamp(3rem,6vw,5.75rem)] uppercase leading-[0.98]">
                            We digitize how farmers think, unlocking the true value of their hard work.
                        </h1>
                        <p className='max-w-5xl'>Poultry farming takes an incredible amount of dedication. Yet, so many farmers find themselves fighting to keep their margins above water. The issue isn't a lack of hard work, it’s that they use methods simply weren't built to scale with a growing business.</p>
                        <Button
                            bgColor="#FEF8E2"
                            href="#app"
                            icon={<GooglePlayMark />}
                            shadowColor="#000000"
                            textColor="#000000"
                        >
                            Download App
                        </Button>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 px-6 rounded-xl mt-10'>
                        <img src={Screen1} alt="" />
                        <img src={Screen2} alt="" className='hidden md:block' />
                        <img src={Screen3} alt="" className='hidden md:block' />
                    </div>
                </div>
            </section>
            <section className='max-w-screen-2xl mx-auto py-20 px-4 lg:px-0'>
                <h1 className="creative-font max-w-5xl text-center mx-auto text-[clamp(3rem,6vw,5.75rem)] uppercase leading-[0.98]">
                    From Records to real Understanding.
                </h1>
                <p className='text-center'>Most farm records tell you what happened, i-kuku shows you what to do.</p>
                <div className='py-5' />
                <div className='grid lg:grid-cols-3 gap-4'>
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
                            <img src={Image1} alt="" className='w-full h-full object-cover border-2 rounded-xl' />
                            <div className='space-y-3 absolute bottom-10 lg:left-10 left-5 right-5 z-10 text-white'>
                                <p className='text-5xl creative-font font-bold'>For Farmers</p>
                                <p className='lg:w-2/3'>Step away from the paperwork. Get real-time, AI-backed guidance on flock health, feed optimization, and margins right in your pocket.</p>
                                <Button
                                    bgColor="#ffb51c"
                                    href="#contact"
                                    icon={<FiSmartphone className="text-2xl" aria-hidden="true" />}
                                    shadowColor="#F8F0D8"
                                    textColor="#000000"
                                >
                                    See how the app works
                                </Button>
                            </div>
                        </div>
                        <div className='lg:col-span-2 border-2 h-full rounded-xl bg-[#EA4335] hidden lg:block'>
                            <img src={illustration1} alt="" className='w-full h-full' />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-5 gap-3'>
                        <div className='lg:col-span-2 border-2 h-full rounded-xl bg-[#FEC02E] hidden lg:block'>
                            <img src={illustration2} alt="" className='w-full' />
                        </div>
                        <div className='lg:col-span-3 relative h-140 lg:h-auto'>
                            <img src={Image2} alt="" className='w-full h-full object-cover border-2 rounded-xl' />
                            <div className='space-y-3 absolute bottom-10 lg:left-10 left-5 right-5 z-10 text-white'>
                                <p className='text-5xl creative-font font-bold'>For Organizations</p>
                                <p className='lg:w-2/3'>We collaborate with development partners and cooperatives to deploy scalable, data-driven agricultural training that sticks.</p>
                                <Button
                                    bgColor="#ffb51c"
                                    href="#contact"
                                    icon={<FiUsers className="text-2xl" aria-hidden="true" />}
                                    shadowColor="#F8F0D8"
                                    textColor="#000000"
                                >
                                    Explore partnership opportunities
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='max-w-screen-2xl mx-auto pb-10 px-4 lg:px-0'>
                <h1 className="creative-font max-w-5xl text-[clamp(3rem,6vw,5.75rem)] uppercase leading-[0.98]">
                    Case studies
                </h1>
                <div className='space-y-3 pt-6'>
                    {caseData.map((items, index) => (
                        <CaseStudyComponent
                            key={index}
                            title={items.title}
                            description={items.description}
                            caseImage={items.caseImage}
                            pageLink={items.pageLink}
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
                <img src={illustration} alt="" />
            </div>
        </div>
    )
}


const caseData = [
    {
        title: "Record keeping training at USAID",
        description: "See how we educated the farmers on the importance of record keeping on their farms.",
        pageLink: "#",
        caseImage: Image4
    },
    {
        title: "Record keeping training at Kikuyu",
        description: "See how we moved Kikuyu farmers from guesswork to accurate record keeping.",
        pageLink: "",
        caseImage: Image5
    },
]


export const CaseStudyComponent = ({ title, description, caseImage, pageLink }) => {
    return (
        <div className='grid lg:grid-cols-5 gap-3'>
            <div className='border-2 rounded-xl lg:col-span-3 p-6 flex items-end'>
                <div className='space-y-4'>
                    <p className='creative-font text-4xl'>{title}</p>
                    <p className='lg:w-2/3'>{description}</p>
                    <Button
                        bgColor="#ffb51c"
                        href={pageLink}
                        icon={<FiArrowUpRight className="text-2xl" aria-hidden="true" />}
                        iconPosition="right"
                        textColor="#000000">
                        Read Case Study
                    </Button>
                </div>
            </div>
            <div className='lg:col-span-2'>
                <img src={caseImage} alt="" className='border-2 rounded-xl w-full object-cover h-80 object-top' />
            </div>
        </div>
    )
}
