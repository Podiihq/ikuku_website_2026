import { useState } from 'react'
import {
  PiArrowLeft,
  PiArrowRight,
  PiCheckCircleFill,
  PiMagnifyingGlass,
  PiPlusCircleFill,
} from 'react-icons/pi'

import { formatCount, formatReportDate } from '../data'

const SelectBatchScreen = ({
  batches,
  onBack,
  onOpenReport,
  onSelectBatch,
  onShowNotice,
  reports,
}) => {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()
  const today = formatReportDate(new Date())
  const completedReportsByBatch = new Map()

  reports.forEach((report) => {
    if (report.date === today && !completedReportsByBatch.has(report.batchId)) {
      completedReportsByBatch.set(report.batchId, report)
    }
  })

  const visibleBatches = batches.filter((batch) =>
    `${batch.name} ${batch.birdCount} ${batch.birdType} ${batch.age}`
      .toLowerCase()
      .includes(normalizedQuery),
  )

  return (
    <>
      <header className="relative flex h-[14cqw] shrink-0 items-center px-[2.2cqw]">
        <button
          aria-label="Back to farm reports"
          className="grid size-[10cqw] touch-manipulation place-items-center rounded-full text-[6.5cqw] transition active:scale-90 active:bg-[#eef3ec]"
          onClick={onBack}
          type="button"
        >
          <PiArrowLeft aria-hidden="true" />
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[4.2cqw] font-normal tracking-[-0.02em]">Select Batch</h1>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-[4.1cqw] pt-[6.2cqw] scrollbar-none [&::-webkit-scrollbar]:hidden">
        <h2 className="text-[5.25cqw] font-normal tracking-tight">Select the type of birds</h2>

        <label className="relative mt-[5cqw] block">
          <span className="sr-only">Search batch name</span>
          <PiMagnifyingGlass
            aria-hidden="true"
            className="pointer-events-none absolute left-[4.5cqw] top-1/2 z-10 -translate-y-1/2 text-[6.2cqw]"
          />
          <input
            autoComplete="off"
            className="h-[12.8cqw] w-full rounded-[4.2cqw] bg-[#f3f3f3] pl-[14.3cqw] pr-[4cqw] text-[3.55cqw] text-[#243b25] outline-none placeholder:text-[#536656] focus:ring-[0.55cqw] focus:ring-[#9ebc32]"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Batch name"
            type="search"
            value={query}
          />
        </label>

        <div className="mt-[6.3cqw] flex items-center justify-between">
          <h2 className="text-[4cqw] font-normal text-[#586b59]">Batches</h2>
          <button
            className="flex touch-manipulation items-center gap-[1.4cqw] rounded-full px-[0.5cqw] py-[1cqw] text-[3.7cqw] transition active:scale-95 active:bg-[#f4f6f2]"
            onClick={() => onShowNotice('Add new batch')}
            type="button"
          >
            <PiPlusCircleFill aria-hidden="true" className="text-[5.3cqw]" />
            <span>Add new batch</span>
          </button>
        </div>

        <div className="mt-[3.5cqw] space-y-[4.1cqw] pb-[4cqw]">
          {visibleBatches.map((batch) => {
            const completedReport = completedReportsByBatch.get(batch.id)

            return (
              <button
                className="flex h-[20.4cqw] w-full touch-manipulation items-center justify-between rounded-[4cqw] border border-[#d3d8d2] px-[2.9cqw] text-left transition active:scale-[0.985] active:bg-[#f7f8f6]"
                key={batch.name}
                onClick={() => completedReport ? onOpenReport(completedReport) : onSelectBatch(batch)}
                type="button"
              >
                <span className="flex min-w-0 flex-col">
                  <span className="text-[4.1cqw] font-normal">{batch.name}</span>
                  <span className="mt-[1.7cqw] flex items-center gap-[4.8cqw] whitespace-nowrap text-[3.65cqw] text-[#5d6f60]">
                    <span>{formatCount(batch.birdCount)} {batch.birdType}</span>
                    <span>{batch.age}</span>
                  </span>
                </span>
                <span className="ml-[2cqw] flex shrink-0 items-center gap-[1.6cqw] text-[3cqw] font-medium text-[#007b2f]">
                  <span>{completedReport ? 'View report' : 'Start report'}</span>
                  {completedReport ? (
                    <PiCheckCircleFill aria-hidden="true" className="text-[4.5cqw] text-[#9ac33c]" />
                  ) : (
                    <PiArrowRight aria-hidden="true" className="text-[4.8cqw]" />
                  )}
                </span>
              </button>
            )
          })}

          {visibleBatches.length === 0 && (
            <p className="py-[10cqw] text-center text-[3.7cqw] text-[#637064]">No batches match “{query}”.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default SelectBatchScreen
