import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { FiArrowLeft, FiArrowUpRight, FiMapPin, FiUsers } from 'react-icons/fi'
import Button from '../components/Button'
import useSmoothScroll from '../hooks/useSmoothScroll'
import { caseStudies, getCaseStudyBySlug } from '../data/caseStudies'

const CaseStudyDetailPage = () => {
  const { slug } = useParams()
  const caseStudy = getCaseStudyBySlug(slug)

  useSmoothScroll()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />
  }

  const relatedCaseStudies = caseStudies.filter((item) => item.slug !== caseStudy.slug)

  return (
    <main className="bg-[#F8F0D8] text-neutral-950">
      <section className="px-4 pb-16 pt-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-screen-2xl">
          <a
            className="mb-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] transition-colors duration-200 hover:text-[#007a35] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#007a35]"
            href="#/case-studies"
          >
            <FiArrowLeft aria-hidden="true" />
            Case studies
          </a>

          <div className="grid overflow-hidden rounded-xl border-2 border-black bg-[#FEF8E2] lg:grid-cols-12">
            <div className="flex min-h-136 flex-col justify-between p-6 sm:p-10 lg:col-span-7 lg:min-h-168 lg:p-12">
              <div>
                <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-[#697B3B]">
                  Case study
                </p>
                <h1 className="creative-font max-w-5xl text-[clamp(3.6rem,7vw,7rem)] uppercase leading-[0.84]">
                  {caseStudy.title}
                </h1>
              </div>

              <div className="mt-12 grid gap-3 border-t border-black/30 pt-6 sm:grid-cols-2">
                <div className="rounded-lg border-2 border-black bg-[#F8F0D8] p-5">
                  <FiUsers className="mb-6 text-3xl" aria-hidden="true" />
                  <p className="text-xs font-bold uppercase tracking-[0.14em]">Partner</p>
                  <p className="mt-2 text-lg font-bold">{caseStudy.partner}</p>
                </div>
                <div className="rounded-lg border-2 border-black bg-[#FFB51C] p-5">
                  <FiMapPin className="mb-6 text-3xl" aria-hidden="true" />
                  <p className="text-xs font-bold uppercase tracking-[0.14em]">Focus</p>
                  <p className="mt-2 text-lg font-bold">{caseStudy.location}</p>
                </div>
              </div>
            </div>

            <div className="relative min-h-112 overflow-hidden border-t-2 border-black lg:col-span-5 lg:min-h-168 lg:border-l-2 lg:border-t-0">
              <img
                src={caseStudy.image}
                alt={caseStudy.imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-screen-2xl gap-4 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="sticky top-28 rounded-xl border-2 border-black bg-[#697B3B] p-6 text-[#FEF8E2] sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#FFCA55]">
                Overview
              </p>
              <h2 className="creative-font mt-5 text-[clamp(3rem,5vw,5rem)] uppercase leading-[0.9]">
                What happened.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed">
                {caseStudy.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-4 lg:col-span-8">
            {caseStudy.sections.map((section, index) => (
              <article
                className="rounded-xl border-2 border-black bg-[#FEF8E2] p-6 sm:p-8 lg:p-10"
                key={section.eyebrow}
              >
                <div className="mb-12 flex items-start justify-between gap-4 border-b border-black/30 pb-5">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#697B3B]">
                      {section.eyebrow}
                    </p>
                    <h2 className="creative-font mt-4 text-[clamp(2.8rem,5vw,5rem)] uppercase leading-[0.9]">
                      {section.title}
                    </h2>
                  </div>
                  <span className="creative-font shrink-0 text-5xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="space-y-5 text-lg leading-relaxed">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}

            <article className="rounded-xl border-2 border-black bg-[#FFB51C] p-6 sm:p-8 lg:p-10">
              <p className="creative-font max-w-4xl text-[clamp(3rem,6vw,6rem)] uppercase leading-[0.88]">
                {caseStudy.cta}
              </p>
              <Button
                bgColor="#F8F0D8"
                className="mt-8"
                href="#/?section=contact"
                icon={<FiArrowUpRight className="text-2xl" aria-hidden="true" />}
                iconPosition="right"
                shadowColor="#000000"
              >
                Partner with us
              </Button>
            </article>
          </div>
        </div>
      </section>

      {relatedCaseStudies.length > 0 && (
        <section className="px-4 pb-16 lg:px-12 lg:pb-24">
          <div className="mx-auto max-w-screen-2xl rounded-xl border-2 border-black bg-[#FEF8E2] p-6 sm:p-8 lg:p-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-[#697B3B]">
              More case studies
            </p>
            <div className="grid gap-4 lg:grid-cols-2">
              {relatedCaseStudies.map((related) => (
                <a
                  className="group rounded-xl border-2 border-black bg-[#F8F0D8] p-5 transition-colors duration-200 hover:bg-[#FFB51C] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#007a35]"
                  href={`#/case-studies/${related.slug}`}
                  key={related.slug}
                >
                  <p className="creative-font text-4xl uppercase leading-none">
                    {related.cardTitle}
                  </p>
                  <p className="mt-4 max-w-xl leading-relaxed">{related.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-bold uppercase">
                    Read case study
                    <FiArrowUpRight
                      className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default CaseStudyDetailPage
