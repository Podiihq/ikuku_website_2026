import { useEffect } from 'react'
import CaseStudyCard from '../components/CaseStudyCard'
import useSmoothScroll from '../hooks/useSmoothScroll'
import { caseStudies } from '../data/caseStudies'

const CaseStudiesPage = () => {
  useSmoothScroll()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-[#F8F0D8] text-neutral-950">
      <section className="px-4 pb-20 lg:px-12 lg:pb-28 pt-10">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-[#697B3B]">
                Stories from the field
              </p>
              {/* <h2 className="creative-font max-w-5xl text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.86]">
                Select a case study.
              </h2> */}
            </div>
            {/* <Button
              bgColor="#FFB51C"
              href="#/contact"
              icon={<FiArrowUpRight className="text-2xl" aria-hidden="true" />}
              iconPosition="right"
            >
              Partner with us
            </Button> */}
          </div>

          <div className="space-y-3">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.slug}
                title={caseStudy.cardTitle}
                description={caseStudy.description}
                caseImage={caseStudy.image}
                pageLink={`#/case-studies/${caseStudy.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default CaseStudiesPage
