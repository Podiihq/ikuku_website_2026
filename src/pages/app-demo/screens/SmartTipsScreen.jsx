import { PiArrowLeft } from 'react-icons/pi'

const resources = [
  {
    title: 'Housing and Biosecurity tips for Healthy Chicken',
    description:
      'Proper ventilation, space management and restricted access can protect your flock from diseases. Here is how to ...',
  },
  {
    title: 'How to be a Climate Smart Farmer',
    description:
      'Climate is changing as we live and the best way to be resilient is to adapt your farming practices to unpredictable weather...',
  },
  {
    title: 'Choosing the right chicken breed for your farm',
    description:
      'Different breeds suit different goals. Here is what you need to know before you choose your chicken ...',
  },
]

const SmartTipsScreen = ({ onBack, onReadMore }) => (
  <>
    <header className="relative flex h-[14cqw] shrink-0 items-center border-b border-[#f4f4f4] px-[2.2cqw]">
      <button
        aria-label="Back to dashboard"
        className="grid size-[10cqw] touch-manipulation place-items-center rounded-full text-[6.5cqw] transition active:scale-90 active:bg-[#eef3ec]"
        onClick={onBack}
        type="button"
      >
        <PiArrowLeft aria-hidden="true" />
      </button>
      <h1 className="absolute left-1/2 -translate-x-1/2 text-[4.2cqw] font-normal tracking-[-0.02em]">
        Smart Tips
      </h1>
    </header>

    <div className="min-h-0 flex-1 overflow-y-auto bg-[#fafafa] px-[4cqw] pb-[7cqw] pt-[7cqw] scrollbar-none [&::-webkit-scrollbar]:hidden">
      <section className="px-[1.4cqw]">
        <h2 className="text-[4.75cqw] font-medium tracking-[-0.02em] text-[#243b25]">
          Educational Resources
        </h2>
        <p className="mt-[2cqw] max-w-[79cqw] text-[3.65cqw] leading-[1.65] text-[#647066]">
          Learn from experts insights and the best practices for poultry farming
        </p>
      </section>

      <section aria-label="Educational resources" className="mt-[6.2cqw] space-y-[5cqw]">
        {resources.map((resource) => (
          <article
            className="rounded-[2.2cqw] bg-white px-[4.1cqw] pb-[3.4cqw] pt-[3.8cqw] shadow-[0_2.2cqw_6cqw_rgba(48,68,51,0.035)]"
            key={resource.title}
          >
            <h3 className="max-w-[79cqw] text-[4.55cqw] font-medium leading-[1.3] tracking-[-0.015em] text-[#243b25]">
              {resource.title}
            </h3>
            <p className="mt-[2.7cqw] text-[3.7cqw] leading-[1.52] text-[#647066]">
              {resource.description}
            </p>
            <div className="mt-[2.6cqw] flex justify-end">
              <button
                className="touch-manipulation rounded-[2cqw] px-[1.3cqw] py-[0.7cqw] text-[3.55cqw] font-medium text-[#007b2f] transition active:scale-95 active:bg-[#eef7ef]"
                onClick={() => onReadMore(resource.title)}
                type="button"
              >
                Read More
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  </>
)

export default SmartTipsScreen
