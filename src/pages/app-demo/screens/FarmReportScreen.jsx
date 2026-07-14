import { PiArrowLeft, PiBellSimple, PiCaretRight, PiPlus } from 'react-icons/pi'

const FarmReportScreen = ({ onAddReport, onBack, onOpenReport, onShowNotice, reports }) => (
  <>
    <header className="relative flex h-[14cqw] shrink-0 items-center justify-between px-[2.2cqw]">
      <button
        aria-label="Back to dashboard"
        className="grid size-[10cqw] touch-manipulation place-items-center rounded-full text-[6.5cqw] transition active:scale-90 active:bg-[#eef3ec]"
        onClick={onBack}
        type="button"
      >
        <PiArrowLeft aria-hidden="true" />
      </button>
      <h1 className="absolute left-1/2 -translate-x-1/2 text-[4.2cqw] font-normal tracking-[-0.02em]">Farm report</h1>
      <button
        aria-label="Notifications"
        className="relative grid size-[10cqw] touch-manipulation place-items-center rounded-full text-[6.4cqw] transition active:scale-90 active:bg-[#eef3ec]"
        onClick={() => onShowNotice('Notifications')}
        type="button"
      >
        <PiBellSimple aria-hidden="true" />
        <span className="absolute right-[1.5cqw] top-[1.35cqw] size-[1.55cqw] rounded-full bg-[#f9b420] ring-[0.55cqw] ring-white" />
      </button>
    </header>

    <div className="min-h-0 flex-1 overflow-y-auto px-[3cqw] pb-[4cqw] pt-[7.2cqw] scrollbar-none [&::-webkit-scrollbar]:hidden">
      <section>
        <h2 className="text-[4.2cqw] font-medium">To do&nbsp; Today</h2>
        <button
          className="mt-[2.15cqw] flex h-[13cqw] w-full touch-manipulation items-center gap-[3.2cqw] rounded-[2.3cqw] bg-[linear-gradient(100deg,#ffb51c_0%,#f4bd1b_44%,#9ebc32_100%)] px-[4.3cqw] text-left text-[4.4cqw] font-medium text-[#17351f] transition active:scale-[0.98] active:brightness-95"
          onClick={onAddReport}
          type="button"
        >
          <PiPlus aria-hidden="true" className="shrink-0 text-[6cqw]" />
          <span>Add a farm report</span>
        </button>
      </section>

      <section className="mt-[9cqw]">
        <div className="flex items-center justify-between">
          <h2 className="text-[4.2cqw] font-medium">Previous Reports</h2>
          <button
            className="touch-manipulation rounded px-[0.5cqw] py-[1cqw] text-[2.8cqw] font-medium text-[#00681d] underline underline-offset-[0.45cqw] transition active:scale-95"
            onClick={() => onShowNotice('All farm reports')}
            type="button"
          >
            SEE ALL
          </button>
        </div>

        <div className="mt-[3.6cqw]">
          {reports.map((report) => (
            <button
              className="flex h-[15.2cqw] w-full touch-manipulation items-center justify-between rounded-[1.5cqw] text-left transition active:scale-[0.985] active:bg-[#f4f6f2]"
              key={report.id}
              onClick={() => onOpenReport(report)}
              type="button"
            >
              <span className="flex min-w-0 flex-col">
                <span className="truncate text-[3.65cqw] font-normal">{report.name}</span>
                <span className="mt-[1.55cqw] flex items-center gap-[1.5cqw] text-[2.65cqw] text-[#637064]">
                  <span>{report.date}</span>
                  <span className="size-[0.9cqw] rounded-full bg-[#637064]" />
                  <span>{report.type}</span>
                </span>
              </span>
              <PiCaretRight aria-hidden="true" className="mr-[0.6cqw] shrink-0 text-[5.4cqw] text-[#526b56]" />
            </button>
          ))}
        </div>
      </section>
    </div>
  </>
)

export default FarmReportScreen
