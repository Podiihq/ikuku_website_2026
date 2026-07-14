import { PiArrowLeft, PiCalendarBlank, PiLinkSimple } from 'react-icons/pi'

const SummarySection = ({ onEdit, rows, title }) => (
  <section className="mt-[6.3cqw]">
    <div className="flex items-center justify-between px-[4cqw]">
      <h2 className="text-[3.55cqw] font-normal uppercase text-[#657466]">{title}</h2>
      {onEdit && (
        <button
          className="touch-manipulation text-[3.25cqw] font-medium text-[#007b2f] underline underline-offset-[0.5cqw] transition active:scale-95"
          onClick={onEdit}
          type="button"
        >
          EDIT ITEMS
        </button>
      )}
    </div>
    <div className="mt-[2.6cqw] rounded-[2cqw] bg-white px-[6.2cqw] py-[4.5cqw] shadow-[0_1.3cqw_1.4cqw_-1cqw_rgba(0,104,29,0.24)]">
      <dl className="space-y-[3.8cqw]">
        {rows.map((row) => (
          <div className="flex items-center justify-between gap-[4cqw]" key={row.label}>
            <dt className="text-[3.55cqw] text-[#344b38]">{row.label}</dt>
            <dd className="text-right text-[3.55cqw] text-[#007b2f] tabular-nums">
              {row.value || '—'}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
)

const ReportSummaryScreen = ({
  batch,
  data,
  onBack,
  onEdit,
  onFinish,
  preparedAt,
  reportDate,
  readOnly = false,
}) => {
  const isBroilerBatch = batch.birdType.toLowerCase().includes('broiler')
  const birdRows =
    data.birds.hasReduced === 'yes'
      ? [
        ...(data.birds.selectedReasons.includes('Sold')
          ? [
            { label: 'Sold', value: data.birds.soldCount },
            { label: 'Selling price / bird', value: `Ksh ${data.birds.sellingPrice}` },
          ]
          : []),
        ...(data.birds.selectedReasons.includes('Mortality')
          ? [{ label: 'Died', value: data.birds.mortalityCount }]
          : []),
      ]
      : [{ label: 'Birds reduced', value: 'No' }]

  const eggRows = [
    { label: 'Collected', value: data.eggs.collectedEggs },
    { label: 'Broken', value: data.eggs.brokenEggs },
    ...(data.eggs.shouldGrade === 'yes'
      ? [
        { label: 'Small', value: data.eggs.smallEggs },
        { label: 'Deformed', value: data.eggs.deformedEggs },
        { label: 'Large', value: data.eggs.largeEggs },
      ]
      : [{ label: 'Graded', value: 'No' }]),
  ]

  const medicationRows =
    data.medication.hasUsedMedicine === 'yes'
      ? data.medication.selectedMedication.map((medication) => ({
        label: medication,
        value: `${data.medication.medicationAmounts[medication] || '—'} L`,
      }))
      : [{ label: 'Medication used', value: 'None' }]

  return (
    <>
      <header className="relative flex h-[14cqw] shrink-0 items-center border-b border-[#f3f3f3] px-[2.2cqw]">
        <button
          aria-label={readOnly ? 'Back to previous reports' : 'Back to medication'}
          className="grid size-[10cqw] touch-manipulation place-items-center rounded-full text-[6.5cqw] transition active:scale-90 active:bg-[#eef3ec]"
          onClick={onBack}
          type="button"
        >
          <PiArrowLeft aria-hidden="true" />
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[4.2cqw] font-normal tracking-[-0.02em]">
          Farm report
        </h1>
      </header>

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-[#fbfbfb] px-[5.5cqw] pb-[3cqw] pt-[6cqw] scrollbar-none [&::-webkit-scrollbar]:hidden">
        <section className="rounded-[2.2cqw] bg-[#fff9e6] px-[6cqw] py-[5.2cqw]">
          <h2 className="text-[5cqw] font-normal text-[#007b2f]">Kuku’s Farm report</h2>
          <div className="mt-[3.2cqw] flex flex-wrap items-center gap-x-[4.2cqw] gap-y-[1.5cqw] text-[3cqw] text-[#657466]">
            <span className="flex items-center gap-[1cqw]">
              <PiCalendarBlank aria-hidden="true" className="text-[3.7cqw]" />
              {reportDate}
            </span>
            <span className="flex items-center gap-[1cqw]">
              <PiLinkSimple aria-hidden="true" className="text-[3.7cqw]" />
              {batch.name} – {batch.birdType}
            </span>
          </div>
        </section>

        <SummarySection
          onEdit={readOnly ? undefined : () => onEdit('birds')}
          rows={birdRows}
          title={`Birds– ${batch.birdType}`}
        />
        {!isBroilerBatch && (
          <SummarySection
            onEdit={readOnly ? undefined : () => onEdit('eggs')}
            rows={eggRows}
            title="Eggs"
          />
        )}
        <SummarySection
          onEdit={readOnly ? undefined : () => onEdit('medication')}
          rows={medicationRows}
          title="Medication Used"
        />

        <p className="mt-[7cqw] text-center text-[3.55cqw] leading-loose text-[#344b38]">
          This report was prepared by Mwangi
          <br />
          on {preparedAt}
        </p>

        {!readOnly && (
          <button
            className="mt-[5.5cqw] flex h-[11.2cqw] w-full shrink-0 touch-manipulation items-center justify-center rounded-[2.2cqw] bg-[linear-gradient(100deg,#ffb51c_0%,#f4bd1b_48%,#9ebc32_100%)] text-[3.8cqw] font-bold uppercase tracking-[0.02em] text-[#17351f] transition active:scale-[0.98] active:brightness-95"
            onClick={onFinish}
            type="button"
          >
            Finish Reporting
          </button>
        )}
      </div>
    </>
  )
}

export default ReportSummaryScreen
