import { FiArrowUpRight } from 'react-icons/fi'
import Button from './Button'

const CaseStudyCard = ({ title, description, caseImage, pageLink }) => {
  return (
    <article className="grid overflow-hidden rounded-xl border-2 border-black bg-[#FEF8E2] lg:grid-cols-2">
      <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-[#697B3B]">
          Case study
        </p>
        <h2 className="creative-font text-[clamp(3rem,5vw,5rem)] uppercase leading-[0.9]">
          {title}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">{description}</p>
        <div className="mt-8">
          <Button
            bgColor="#ffb51c"
            href={pageLink}
            icon={<FiArrowUpRight className="text-2xl" aria-hidden="true" />}
            iconPosition="right"
            textColor="#000000"
          >
            Read Case Study
          </Button>
        </div>
      </div>
      <img
        src={caseImage}
        alt={title}
        className="h-full min-h-80 w-full border-t-2 border-black object-cover object-top lg:min-h-112 lg:border-l-2 lg:border-t-0"
      />
    </article>
  )
}

export default CaseStudyCard
