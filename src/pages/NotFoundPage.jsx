import { useEffect } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../components/Button'

const NotFoundPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-[#F8F0D8] px-4 pb-16 pt-8 text-neutral-950 lg:px-12 lg:pb-24">
      <section className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-screen-2xl overflow-hidden rounded-xl border-2 border-black bg-[#697B3B] text-[#FEF8E2] lg:grid-cols-12">
        <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-8 lg:p-14">
          <div className="flex items-center gap-3">
            <span className="size-3 rounded-full bg-[#FFB51C]" aria-hidden="true" />
            <p className="text-sm font-bold uppercase tracking-[0.14em]">Page not found</p>
          </div>

          <div className="py-16">
            <h1 className="creative-font text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.82]">
              Looks like this page flew the coop.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl">
              The page you are looking for does not exist or may have moved. Return home
              to keep exploring i-kuku.
            </p>
            <Button
              bgColor="#FFB51C"
              className="mt-8"
              href="#/"
              icon={<FiArrowUpRight className="text-2xl" aria-hidden="true" />}
              iconPosition="right"
              textColor="#000000"
            >
              Back to home
            </Button>
          </div>
        </div>

        <div className="flex min-h-72 items-center justify-center border-t-2 border-black bg-[#FFB51C] p-8 text-black lg:col-span-4 lg:border-l-2 lg:border-t-0">
          <p
            aria-label="Error 404"
            className="creative-font text-[clamp(8rem,18vw,17rem)] leading-none"
          >
            404
          </p>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage
