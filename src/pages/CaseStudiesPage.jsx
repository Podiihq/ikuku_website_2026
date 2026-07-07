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
            </div>
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
