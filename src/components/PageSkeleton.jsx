const PageSkeleton = () => (
  <main
    aria-busy="true"
    aria-label="Loading page"
    className="min-h-[75vh] bg-[#F8F0D8] px-4 pb-20 pt-8 lg:px-12"
    role="status"
  >
    <div className="mx-auto grid max-w-screen-2xl overflow-hidden rounded-xl border-2 border-black lg:grid-cols-12">
      <div className="space-y-6 bg-[#697B3B] p-6 sm:p-10 lg:col-span-7 lg:min-h-152 lg:p-12">
        <div className="h-5 w-36 animate-pulse rounded-full bg-[#FEF8E2]/45" />
        <div className="space-y-4 pt-12">
          <div className="h-14 w-full animate-pulse rounded-lg bg-[#FEF8E2]/35" />
          <div className="h-14 w-5/6 animate-pulse rounded-lg bg-[#FEF8E2]/35" />
          <div className="h-14 w-2/3 animate-pulse rounded-lg bg-[#FEF8E2]/35" />
        </div>
        <div className="space-y-3 pt-12">
          <div className="h-4 w-full animate-pulse rounded-full bg-[#FEF8E2]/25" />
          <div className="h-4 w-4/5 animate-pulse rounded-full bg-[#FEF8E2]/25" />
        </div>
      </div>
      <div className="min-h-96 animate-pulse border-t-2 border-black bg-[#e8dfc7] lg:col-span-5 lg:border-l-2 lg:border-t-0" />
    </div>
  </main>
)

export default PageSkeleton
