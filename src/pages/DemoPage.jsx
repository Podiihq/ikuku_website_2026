import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  PiAlarmFill,
  PiArrowLeft,
  PiArrowRight,
  PiBatteryFullFill,
  PiBellSimple,
  PiBluetoothFill,
  PiCalendarBlank,
  PiCaretDownFill,
  PiCaretRight,
  PiCaretUpFill,
  PiCheckCircleFill,
  PiCellSignalFullFill,
  PiHouseFill,
  PiLinkSimple,
  PiMagnifyingGlass,
  PiPlus,
  PiPlusCircleFill,
  PiStorefrontFill,
  PiUserCircleFill,
  PiWifiHighFill,
  PiXCircleFill,
} from 'react-icons/pi'

import batchIcon from '../assets/images/mobile-demo-assets/dashboard-icons/batch_icon.svg'
import extensionServicesIcon from '../assets/images/mobile-demo-assets/dashboard-icons/extension-services-icon.svg'
import farmReportIcon from '../assets/images/mobile-demo-assets/dashboard-icons/farm-report-icon.svg'
import farmStoreIcon from '../assets/images/mobile-demo-assets/dashboard-icons/farm-store-icon.svg'
import financialSummaryIcon from '../assets/images/mobile-demo-assets/dashboard-icons/financial-summary-icon.svg'
import smartTipsIcon from '../assets/images/mobile-demo-assets/dashboard-icons/smart-tips-icon.svg'
import chickenIcon from '../assets/images/mobile-demo-assets/summary-icons/chicken-icon.svg'
import eggsIcon from '../assets/images/mobile-demo-assets/summary-icons/eggs-icon.svg'
import feedsIcon from '../assets/images/mobile-demo-assets/summary-icons/feeds-icon.svg'
import successIllustration from '../assets/images/mobile-demo-assets/others/Success.svg'

const summaryItems = [
  { label: 'Birds', value: '120', icon: chickenIcon },
  { label: 'Feeds', value: '20kgs', icon: feedsIcon },
  { label: 'Eggs', value: '40', icon: eggsIcon },
]

const quickActions = [
  { label: 'Add Chick Batch', icon: batchIcon },
  { label: 'Farm Report', icon: farmReportIcon },
  { label: 'Farm Store', icon: farmStoreIcon },
  { label: 'Financial Summary', icon: financialSummaryIcon },
  { label: 'Smart Tips', icon: smartTipsIcon },
  { label: 'Extension Services', icon: extensionServicesIcon },
]

const bottomNavigation = [
  { label: 'Home', icon: PiHouseFill, active: true },
  { label: 'My Shop', icon: PiStorefrontFill },
  { label: 'Profile', icon: PiUserCircleFill },
]

const previousReports = [
  { name: 'Kienyeji Coop 1', date: '7th March 2026', type: 'Kienyeji' },
  { name: 'Broiler Batch', date: '7th March 2026', type: 'Broiler' },
  { name: 'Kienyeji Coop 2', date: '7th March 2026', type: 'Kienyeji' },
  { name: 'Broiler Batch', date: '6th March 2026', type: 'Broiler' },
  { name: 'Kienyeji Coop 1', date: '6th March 2026', type: 'Kienyeji' },
]

const batches = [
  { name: 'Batch 1', birds: '2000 Layers', birdCount: 2000, birdType: 'Layers', age: '1 day old', action: 'Start report' },
  { name: 'Batch 2', birds: '1500 Layers', birdCount: 1500, birdType: 'Layers', age: '2 weeks old', action: 'Start report' },
  { name: 'Batch 3', birds: '260 Layers', birdCount: 260, birdType: 'Layers', age: '1 day old', action: 'View report', complete: true },
  { name: 'Batch 4', birds: '520 Broilers', birdCount: 520, birdType: 'Broilers', age: '1 day old', action: 'View report', complete: true },
]

const initialReportData = {
  birds: {
    hasReduced: '',
    selectedReasons: [],
    mortalityCount: '',
    soldCount: '',
    sellingPrice: '',
  },
  eggs: {
    collectedEggs: '',
    brokenEggs: '',
    shouldGrade: '',
    deformedEggs: '',
    smallEggs: '',
    largeEggs: '',
  },
  medication: {
    hasUsedMedicine: '',
    selectedMedication: [],
    medicationAmounts: {},
  },
}

const screenVariants = {
  enter: (direction) => ({
    opacity: direction > 0 ? 1 : 0.85,
    x: direction > 0 ? '100%' : '-28%',
  }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({
    opacity: direction > 0 ? 0.85 : 1,
    x: direction > 0 ? '-28%' : '100%',
  }),
}

const DashboardScreen = ({ onOpenFarmReport, onShowNotice }) => (
  <>
    <header className="flex h-[12.5cqw] shrink-0 items-center justify-between px-[3.5cqw]">
      <h1 className="text-[5cqw] font-medium tracking-[-0.04em]">Dashboard</h1>
      <button
        aria-label="Notifications"
        className="grid size-[9cqw] touch-manipulation place-items-center rounded-full text-[6.3cqw] transition active:scale-90 active:bg-[#eef3ec]"
        onClick={() => onShowNotice('Notifications')}
        type="button"
      >
        <PiBellSimple aria-hidden="true" />
      </button>
    </header>

    <section className="relative z-10 h-[31cqw] shrink-0 rounded-b-[4.2cqw] bg-white px-[3cqw] pt-[3cqw] shadow-[0_4cqw_6cqw_-2.5cqw_rgba(0,0,0,0.18)]">
      <h2 className="text-[4cqw] font-normal">Kuku Farm</h2>
      <div className="mt-[2.3cqw] grid grid-cols-3">
        {summaryItems.map((item) => (
          <div
            className="flex flex-col items-center first:items-start last:items-end"
            key={item.label}
          >
            <div className="flex items-center gap-[0.2cqw] text-[3.65cqw] font-medium text-[#00681d]">
              <img alt="" className="size-[3.1cqw] object-contain" src={item.icon} />
              <span>{item.label}</span>
            </div>
            <span className="mt-[0.65cqw] text-[6.2cqw] font-normal leading-none tracking-[-0.04em] tabular-nums">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>

    <section className="flex min-h-0 flex-1 flex-col px-[3.4cqw] pt-[4.2cqw]">
      <h2 className="pl-[5.2cqw] text-[4.65cqw] font-medium text-[#586b59]">Quick Actions</h2>
      <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-3 pb-[1.5cqw] pt-[3.3cqw]">
        {quickActions.map((action) => (
          <button
            className="group flex touch-manipulation flex-col items-center justify-center self-stretch rounded-[4cqw] px-[1cqw] transition duration-150 active:scale-[0.94] active:bg-[#f7f8f5]"
            key={action.label}
            onClick={() =>
              action.label === 'Farm Report'
                ? onOpenFarmReport()
                : onShowNotice(action.label)
            }
            type="button"
          >
            <img
              alt=""
              className="size-[15.15cqw] shrink-0 select-none object-contain transition duration-150 group-active:scale-95"
              draggable="false"
              src={action.icon}
            />
            <span className="mt-[1.3cqw] max-w-full text-[3.55cqw] font-normal leading-tight">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </section>

    <nav aria-label="App navigation" className="relative z-20 grid h-[17cqw] shrink-0 grid-cols-3 bg-white px-[2cqw]">
      {bottomNavigation.map((item) => {
        const Icon = item.icon
        return (
          <button
            aria-current={item.active ? 'page' : undefined}
            className={`flex touch-manipulation flex-col items-center justify-center gap-[0.55cqw] rounded-[3cqw] transition active:scale-95 ${
              item.active ? 'text-[#007b2f]' : 'text-[#9d9d9d]'
            }`}
            key={item.label}
            onClick={() => !item.active && onShowNotice(item.label)}
            type="button"
          >
            <Icon aria-hidden="true" className="text-[7.3cqw]" />
            <span className={`text-[2.7cqw] ${item.active ? 'font-medium' : 'font-normal'}`}>
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  </>
)

const FarmReportScreen = ({ onAddReport, onBack, onShowNotice }) => (
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
      <h1 className="absolute left-1/2 -translate-x-1/2 text-[4.2cqw] font-normal tracking-[-0.02em]">
        Farm report
      </h1>
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

    <div className="min-h-0 flex-1 px-[3cqw] pt-[7.2cqw]">
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
          {previousReports.map((report, index) => (
            <button
              className="flex h-[15.2cqw] w-full touch-manipulation items-center justify-between rounded-[1.5cqw] text-left transition active:scale-[0.985] active:bg-[#f4f6f2]"
              key={`${report.name}-${report.date}-${index}`}
              onClick={() => onShowNotice(report.name)}
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

const SelectBatchScreen = ({ onBack, onSelectBatch, onShowNotice }) => {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()
  const visibleBatches = batches.filter((batch) =>
    `${batch.name} ${batch.birds} ${batch.age}`.toLowerCase().includes(normalizedQuery),
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
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[4.2cqw] font-normal tracking-[-0.02em]">
          Select Batch
        </h1>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-[4.1cqw] pt-[6.2cqw] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <h2 className="text-[5.25cqw] font-normal tracking-[-0.025em]">
          Select the type of birds
        </h2>

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
          {visibleBatches.map((batch) => (
            <button
              className="flex h-[20.4cqw] w-full touch-manipulation items-center justify-between rounded-[4cqw] border border-[#d3d8d2] px-[2.9cqw] text-left transition active:scale-[0.985] active:bg-[#f7f8f6]"
              key={batch.name}
              onClick={() =>
                batch.name === 'Batch 1'
                  ? onSelectBatch(batch)
                  : onShowNotice(`${batch.action} for ${batch.name}`)
              }
              type="button"
            >
              <span className="flex min-w-0 flex-col">
                <span className="text-[4.1cqw] font-normal">{batch.name}</span>
                <span className="mt-[1.7cqw] flex items-center gap-[4.8cqw] whitespace-nowrap text-[3.65cqw] text-[#5d6f60]">
                  <span>{batch.birds}</span>
                  <span>{batch.age}</span>
                </span>
              </span>
              <span className="ml-[2cqw] flex shrink-0 items-center gap-[1.6cqw] text-[3cqw] font-medium text-[#007b2f]">
                <span>{batch.action}</span>
                {batch.complete ? (
                  <PiCheckCircleFill aria-hidden="true" className="text-[4.1cqw] text-[#9ac33c]" />
                ) : (
                  <PiArrowRight aria-hidden="true" className="text-[4.8cqw]" />
                )}
              </span>
            </button>
          ))}

          {visibleBatches.length === 0 && (
            <p className="py-[10cqw] text-center text-[3.7cqw] text-[#637064]">
              No batches match “{query}”.
            </p>
          )}
        </div>
      </div>
    </>
  )
}

const NumberField = ({ id, label, onChange, placeholder, prefix, value }) => {
  const changeBy = (amount) => {
    const nextValue = Math.max(0, (Number(value) || 0) + amount)
    onChange(String(nextValue))
  }

  return (
    <div>
      <label className="block text-[2.8cqw] text-[#687369]" htmlFor={id}>
        {label}
      </label>
      <div className="mt-[1cqw] flex h-[8.4cqw] items-center border-b border-[#929792]">
        {prefix && <span className="mr-[2.4cqw] text-[4cqw] text-[#777d78]">{prefix}</span>}
        <input
          className="min-w-0 flex-1 bg-transparent text-[4cqw] text-[#415745] outline-none placeholder:text-[3.5cqw] placeholder:text-[#8b938c] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          id={id}
          min="0"
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          type="number"
          value={value}
        />
        <span className="flex h-full w-[9cqw] flex-col items-center justify-center text-[#777d78]">
          <button
            aria-label={`Increase ${label.toLowerCase()}`}
            className="grid h-1/2 w-full touch-manipulation place-items-center active:text-[#007b2f]"
            onClick={() => changeBy(1)}
            type="button"
          >
            <PiCaretUpFill aria-hidden="true" className="text-[3.2cqw]" />
          </button>
          <button
            aria-label={`Decrease ${label.toLowerCase()}`}
            className="grid h-1/2 w-full touch-manipulation place-items-center active:text-[#007b2f]"
            onClick={() => changeBy(-1)}
            type="button"
          >
            <PiCaretDownFill aria-hidden="true" className="text-[3.2cqw]" />
          </button>
        </span>
      </div>
    </div>
  )
}

const parseNumber = (value) => {
  if (value === '') return null
  const parsedValue = Number(value)
  return Number.isFinite(parsedValue) ? parsedValue : null
}

const ValidationMessage = ({ children }) => (
  <p
    aria-live="polite"
    className="mb-[2.5cqw] rounded-[2cqw] bg-[#fff0ed] px-[3cqw] py-[2.2cqw] text-[3cqw] leading-snug text-[#a3291f]"
    role="alert"
  >
    {children}
  </p>
)

const useOutsideDismiss = (isOpen, setIsOpen) => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, setIsOpen])

  return containerRef
}

const BirdCountScreen = ({ batch, data, onBack, onContinue, onDataChange }) => {
  const [reasonsOpen, setReasonsOpen] = useState(false)
  const reasonsContainerRef = useOutsideDismiss(reasonsOpen, setReasonsOpen)
  const [validationAttempted, setValidationAttempted] = useState(false)
  const {
    hasReduced,
    mortalityCount,
    selectedReasons,
    sellingPrice,
    soldCount,
  } = data
  const reasonOptions = ['Mortality', 'Sold']
  const displayedReasons = ['Sold', 'Mortality'].filter((reason) =>
    selectedReasons.includes(reason),
  )

  const toggleReason = (reason) => {
    const nextReasons = selectedReasons.includes(reason)
      ? selectedReasons.filter((currentReason) => currentReason !== reason)
      : [...selectedReasons, reason]
    onDataChange({ selectedReasons: nextReasons })
  }

  const mortalityValue = parseNumber(mortalityCount)
  const soldValue = parseNumber(soldCount)
  const sellingPriceValue = parseNumber(sellingPrice)

  const getValidationError = () => {
    if (hasReduced !== 'yes') return ''
    if (selectedReasons.length === 0) return 'Select at least one reason for the decrease.'

    if (selectedReasons.includes('Mortality')) {
      if (mortalityValue === null) return 'Enter the number of birds that died.'
      if (!Number.isInteger(mortalityValue) || mortalityValue < 0) {
        return 'Mortality must be a whole number of zero or more.'
      }
    }

    if (selectedReasons.includes('Sold')) {
      if (soldValue === null) return 'Enter the number of birds that were sold.'
      if (!Number.isInteger(soldValue) || soldValue < 0) {
        return 'Birds sold must be a whole number of zero or more.'
      }
      if (sellingPriceValue === null || sellingPriceValue <= 0) {
        return 'Enter a selling price greater than zero.'
      }
    }

    const totalDecrease =
      (selectedReasons.includes('Mortality') ? mortalityValue : 0) +
      (selectedReasons.includes('Sold') ? soldValue : 0)

    if (totalDecrease <= 0) return 'The total decrease must be greater than zero.'
    if (totalDecrease > batch.birdCount) {
      return `The decrease total (${totalDecrease}) cannot exceed the current flock of ${batch.birdCount} birds.`
    }

    return ''
  }

  const validationError = getValidationError()

  const handleContinue = () => {
    setValidationAttempted(true)
    if (validationError) return
    onContinue()
  }

  return (
    <>
      <header className="relative flex h-[14cqw] shrink-0 items-center px-[2.2cqw]">
        <button
          aria-label="Back to select batch"
          className="grid size-[10cqw] touch-manipulation place-items-center rounded-full text-[6.5cqw] transition active:scale-90 active:bg-[#eef3ec]"
          onClick={onBack}
          type="button"
        >
          <PiArrowLeft aria-hidden="true" />
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[4.2cqw] font-normal tracking-[-0.02em]">
          {batch.name.replace('Batch', 'Batch No.')}
        </h1>
      </header>

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-[3.8cqw] pb-[2.8cqw] pt-[7.2cqw] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <h2 className="pl-[1.3cqw] text-[5.25cqw] font-normal tracking-[-0.025em] text-[#536656]">
          Update Number of Birds
        </h2>

        <section
          aria-label="Selected batch bird summary"
          className="mt-[6.6cqw] flex h-[21.2cqw] shrink-0 items-start justify-between rounded-[4.3cqw] border border-[#d8d2bd] bg-[#fff9e6] px-[3.2cqw] pt-[3.5cqw]"
        >
          <div className="flex flex-col">
            <span className="text-[3.45cqw] text-[#647064]">Type of Bird</span>
            <span className="mt-[1.1cqw] text-[5.9cqw] font-normal leading-none text-[#536656]">
              {batch.birdType}
            </span>
          </div>
          <div className="flex flex-col items-end pr-[1.1cqw]">
            <span className="text-[3.45cqw] text-[#647064]">No of birds</span>
            <span className="mt-[1.1cqw] text-[6.2cqw] font-normal leading-none text-[#536656] tabular-nums">
              {batch.birdCount}
            </span>
          </div>
        </section>

        <fieldset className="mt-[8.7cqw] shrink-0">
          <legend className="text-[4.15cqw] font-normal">
            Has the number of birds reduced?
          </legend>
          <div className="mt-[6.1cqw] flex items-center justify-between px-[2.4cqw] pr-[27cqw]">
            {['Yes', 'No'].map((option) => (
              <label
                className="flex cursor-pointer touch-manipulation items-center gap-[3.1cqw] text-[4cqw]"
                key={option}
              >
                <input
                  checked={hasReduced === option.toLowerCase()}
                  className="size-[4.35cqw] shrink-0 appearance-none rounded-full border-[0.45cqw] border-[#7a7f7a] bg-white transition checked:border-[1.3cqw] checked:border-[#007b2f] focus-visible:outline focus-visible:outline-[0.55cqw] focus-visible:outline-offset-[0.8cqw] focus-visible:outline-[#9ebc32]"
                  name="bird-count-reduced"
                  onChange={() => onDataChange({ hasReduced: option.toLowerCase() })}
                  type="radio"
                  value={option.toLowerCase()}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <AnimatePresence initial={false}>
          {hasReduced === 'yes' && (
            <motion.div
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              className="shrink-0 overflow-visible"
              exit={{ height: 0, opacity: 0, y: -8 }}
              initial={{ height: 0, opacity: 0, y: -8 }}
              key="decrease-fields"
              transition={{ duration: 0.24, ease: 'easeOut' }}
            >
              <div className="relative mt-[7.5cqw]" ref={reasonsContainerRef}>
                <p className="text-[2.8cqw]">Reasons for the decrease in number</p>
                <div className="relative mt-[2.7cqw] flex min-h-[8cqw] items-center border-b border-[#007b2f] pb-[1.7cqw]">
                  <button
                    aria-controls="decrease-reasons-list"
                    aria-expanded={reasonsOpen}
                    aria-haspopup="listbox"
                    aria-label="Choose reasons for decrease"
                    className="absolute inset-0 z-0 cursor-pointer touch-manipulation rounded-[1cqw] focus-visible:outline focus-visible:outline-[0.55cqw] focus-visible:outline-offset-[0.7cqw] focus-visible:outline-[#9ebc32]"
                    onClick={() => setReasonsOpen((isOpen) => !isOpen)}
                    type="button"
                  />
                  <div className="pointer-events-none relative z-10 flex min-w-0 flex-1 flex-wrap gap-[2.1cqw]">
                    {displayedReasons.length === 0 && (
                      <span className="text-[3.4cqw] text-[#7a857c]">Select reasons</span>
                    )}
                    {displayedReasons.map((reason) => (
                      <span
                        className="flex items-center gap-[1.25cqw] rounded-full border border-[#4db66d] px-[2.3cqw] py-[0.9cqw] text-[3.35cqw] text-[#237a3f]"
                        key={reason}
                      >
                        {reason}
                        <button
                          aria-label={`Remove ${reason}`}
                          className="pointer-events-auto touch-manipulation rounded-full active:scale-90"
                          onClick={() => toggleReason(reason)}
                          type="button"
                        >
                          <PiXCircleFill aria-hidden="true" className="text-[3.6cqw] text-[#5bae72]" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <span className="pointer-events-none relative z-10 grid size-[8cqw] shrink-0 place-items-center">
                    {reasonsOpen ? (
                      <PiCaretUpFill aria-hidden="true" className="text-[3.8cqw]" />
                    ) : (
                      <PiCaretDownFill aria-hidden="true" className="text-[3.8cqw]" />
                    )}
                  </span>
                </div>

                <AnimatePresence>
                  {reasonsOpen && (
                    <motion.div
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      aria-label="Reasons for decrease"
                      aria-multiselectable="true"
                      className="absolute left-0 right-0 top-full z-50 mt-[1.5cqw] overflow-hidden rounded-[3cqw] border border-[#d3d8d2] bg-white p-[1.3cqw] shadow-[0_3cqw_8cqw_rgba(28,51,30,0.18)]"
                      exit={{ opacity: 0, scale: 0.98, y: -4 }}
                      initial={{ opacity: 0, scale: 0.98, y: -4 }}
                      id="decrease-reasons-list"
                      role="listbox"
                    >
                      {reasonOptions.map((reason) => {
                        const isSelected = selectedReasons.includes(reason)
                        return (
                          <button
                            aria-selected={isSelected}
                            className="flex h-[10cqw] w-full touch-manipulation items-center justify-between rounded-[2cqw] px-[3cqw] text-left text-[3.6cqw] hover:bg-[#f4f7f2] active:bg-[#eaf2e7]"
                            key={reason}
                            onClick={() => toggleReason(reason)}
                            role="option"
                            type="button"
                          >
                            <span>{reason}</span>
                            {isSelected && (
                              <PiCheckCircleFill aria-hidden="true" className="text-[4.5cqw] text-[#67a847]" />
                            )}
                          </button>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-[6.2cqw] space-y-[7.8cqw]">
                {selectedReasons.includes('Mortality') && (
                  <NumberField
                    id="mortality-count"
                    label="How many birds died?"
                    onChange={(value) => onDataChange({ mortalityCount: value })}
                    placeholder="Enter number"
                    value={mortalityCount}
                  />
                )}
                {selectedReasons.includes('Sold') && (
                  <>
                    <NumberField
                      id="sold-count"
                      label="How many birds were sold?"
                      onChange={(value) => onDataChange({ soldCount: value })}
                      placeholder="Enter number"
                      value={soldCount}
                    />
                    <NumberField
                      id="selling-price"
                      label="What was the selling price per bird?"
                      onChange={(value) => onDataChange({ sellingPrice: value })}
                      placeholder="Enter price"
                      prefix="Ksh"
                      value={sellingPrice}
                    />
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {hasReduced && (
          <div className="mt-auto shrink-0 pt-[8cqw]">
            {validationAttempted && validationError && (
              <ValidationMessage>{validationError}</ValidationMessage>
            )}
            <button
              className="flex h-[11.2cqw] w-full touch-manipulation items-center justify-center rounded-[4.2cqw] bg-[linear-gradient(100deg,#ffb51c_0%,#f4bd1b_48%,#9ebc32_100%)] text-[3.5cqw] font-bold uppercase tracking-[0.02em] text-[#17351f] transition active:scale-[0.98] active:brightness-95"
              onClick={handleContinue}
              type="button"
            >
              Save &amp; Continue
            </button>
          </div>
        )}
      </div>
    </>
  )
}

const EggStoreScreen = ({ batch, data, onBack, onContinue, onDataChange }) => {
  const [validationAttempted, setValidationAttempted] = useState(false)
  const {
    brokenEggs,
    collectedEggs,
    deformedEggs,
    largeEggs,
    shouldGrade,
    smallEggs,
  } = data

  const remainingAfter = (total, removed) => {
    const totalCount = parseNumber(total)
    const removedCount = parseNumber(removed)
    if (totalCount === null || removedCount === null) return null
    return Math.max(0, totalCount - removedCount)
  }

  const collectedCount = parseNumber(collectedEggs)
  const brokenCount = parseNumber(brokenEggs)
  const deformedCount = parseNumber(deformedEggs)
  const smallCount = parseNumber(smallEggs)
  const largeCount = parseNumber(largeEggs)
  const remainingAfterBroken = remainingAfter(collectedEggs, brokenEggs)
  const remainingAfterDeformed =
    remainingAfterBroken === null
      ? null
      : remainingAfter(String(remainingAfterBroken), deformedEggs)
  const remainingAfterSmall =
    remainingAfterDeformed === null
      ? null
      : remainingAfter(String(remainingAfterDeformed), smallEggs)

  const getValidationError = () => {
    if (collectedCount === null) return 'Enter the number of eggs collected today.'
    if (!Number.isInteger(collectedCount) || collectedCount <= 0) {
      return 'Eggs collected must be a whole number greater than zero.'
    }
    if (brokenCount === null) return 'Enter the number of broken eggs.'
    if (!Number.isInteger(brokenCount) || brokenCount < 0) {
      return 'Broken eggs must be a whole number of zero or more.'
    }
    if (brokenCount > collectedCount) {
      return 'Broken eggs cannot exceed the number of eggs collected.'
    }

    if (shouldGrade === 'yes') {
      if (deformedCount === null || smallCount === null || largeCount === null) {
        return 'Enter the deformed, small, and large egg quantities.'
      }
      if (
        !Number.isInteger(deformedCount) ||
        !Number.isInteger(smallCount) ||
        !Number.isInteger(largeCount) ||
        deformedCount < 0 ||
        smallCount < 0 ||
        largeCount < 0
      ) {
        return 'All graded egg quantities must be whole numbers of zero or more.'
      }

      const eggsAvailableForGrading = collectedCount - brokenCount
      const gradedTotal = deformedCount + smallCount + largeCount
      if (gradedTotal !== eggsAvailableForGrading) {
        return `Graded quantities total ${gradedTotal}, but they must add up to ${eggsAvailableForGrading} eggs.`
      }
    }

    return ''
  }

  const validationError = getValidationError()

  const handleContinue = () => {
    setValidationAttempted(true)
    if (validationError) return
    onContinue()
  }

  return (
    <>
      <header className="relative flex h-[14cqw] shrink-0 items-center px-[2.2cqw]">
        <button
          aria-label="Back to bird count"
          className="grid size-[10cqw] touch-manipulation place-items-center rounded-full text-[6.5cqw] transition active:scale-90 active:bg-[#eef3ec]"
          onClick={onBack}
          type="button"
        >
          <PiArrowLeft aria-hidden="true" />
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[4.2cqw] font-normal tracking-[-0.02em]">
          {batch.name.replace('Batch', 'Batch No.')}
        </h1>
      </header>

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-[3cqw] pb-[2.8cqw] pt-[7.2cqw] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <h2 className="pl-[2.1cqw] text-[5.25cqw] font-normal tracking-[-0.025em] text-[#536656]">
          Update Eggs in Store
        </h2>

        <section
          aria-label="Selected batch egg summary"
          className="mx-[1cqw] mt-[6.6cqw] flex h-[21.2cqw] shrink-0 items-start justify-between rounded-[4.3cqw] border border-[#d8d2bd] bg-[#fff9e6] px-[3.2cqw] pt-[3.5cqw]"
        >
          <div className="flex flex-col">
            <span className="text-[3.45cqw] text-[#647064]">Type of Bird</span>
            <span className="mt-[1.1cqw] text-[5.9cqw] font-normal leading-none text-[#536656]">
              {batch.birdType}
            </span>
          </div>
          <div className="flex flex-col items-end pr-[1.1cqw]">
            <span className="text-[3.45cqw] text-[#647064]">No of birds</span>
            <span className="mt-[1.1cqw] text-[6.2cqw] font-normal leading-none text-[#536656] tabular-nums">
              {batch.birdCount}
            </span>
          </div>
        </section>

        <div className="mt-[7.7cqw] space-y-[6.7cqw]">
          <NumberField
            id="collected-eggs"
            label="How many eggs have you collected today?"
            onChange={(value) => onDataChange({ collectedEggs: value })}
            placeholder="Enter number"
            value={collectedEggs}
          />
          <NumberField
            id="broken-eggs"
            label={
              collectedCount === null
                ? 'How many eggs were broken?'
                : `How many eggs out of ${collectedCount} were broken?`
            }
            onChange={(value) => onDataChange({ brokenEggs: value })}
            placeholder="Enter number"
            value={brokenEggs}
          />
        </div>

        <fieldset className="mt-[7.3cqw] shrink-0">
          <legend className="text-[4.15cqw] font-normal">Would you like to grade them</legend>
          <div className="mt-[6.1cqw] flex items-center justify-between px-[2.4cqw] pr-[25cqw]">
            {['Yes', 'No'].map((option) => (
              <label
                className="flex cursor-pointer touch-manipulation items-center gap-[3.1cqw] text-[4cqw]"
                key={option}
              >
                <input
                  checked={shouldGrade === option.toLowerCase()}
                  className="size-[4.35cqw] shrink-0 appearance-none rounded-full border-[0.45cqw] border-[#7a7f7a] bg-white transition checked:border-[1.3cqw] checked:border-[#007b2f] focus-visible:outline focus-visible:outline-[0.55cqw] focus-visible:outline-offset-[0.8cqw] focus-visible:outline-[#9ebc32]"
                  name="grade-eggs"
                  onChange={() => onDataChange({ shouldGrade: option.toLowerCase() })}
                  type="radio"
                  value={option.toLowerCase()}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <AnimatePresence initial={false}>
          {shouldGrade === 'yes' && (
            <motion.div
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              className="shrink-0 overflow-hidden"
              exit={{ height: 0, opacity: 0, y: -8 }}
              initial={{ height: 0, opacity: 0, y: -8 }}
              key="egg-grading-fields"
              transition={{ duration: 0.24, ease: 'easeOut' }}
            >
              <div className="mt-[7.2cqw] space-y-[6.7cqw]">
                <NumberField
                  id="deformed-eggs"
                  label={
                    remainingAfterBroken === null
                      ? 'How many eggs were deformed?'
                      : `How many eggs out of ${remainingAfterBroken} were deformed?`
                  }
                  onChange={(value) => onDataChange({ deformedEggs: value })}
                  placeholder="Enter number"
                  value={deformedEggs}
                />
                <NumberField
                  id="small-eggs"
                  label={
                    remainingAfterDeformed === null
                      ? 'How many of the remaining eggs were small?'
                      : `How many eggs of the remaining ${remainingAfterDeformed} were small?`
                  }
                  onChange={(value) => onDataChange({ smallEggs: value })}
                  placeholder="Enter number"
                  value={smallEggs}
                />
                <NumberField
                  id="large-eggs"
                  label={
                    remainingAfterSmall === null
                      ? 'How many of the remaining eggs were large?'
                      : `How many eggs of the remaining ${remainingAfterSmall} were large?`
                  }
                  onChange={(value) => onDataChange({ largeEggs: value })}
                  placeholder="Enter number"
                  value={largeEggs}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {shouldGrade && (
          <div className="mt-auto shrink-0 pt-[7.2cqw]">
            {validationAttempted && validationError && (
              <ValidationMessage>{validationError}</ValidationMessage>
            )}
            <button
              className="flex h-[11.2cqw] w-full touch-manipulation items-center justify-center rounded-[4.2cqw] bg-[linear-gradient(100deg,#ffb51c_0%,#f4bd1b_48%,#9ebc32_100%)] text-[3.5cqw] font-bold uppercase tracking-[0.02em] text-[#17351f] transition active:scale-[0.98] active:brightness-95"
              onClick={handleContinue}
              type="button"
            >
              Save &amp; Continue
            </button>
          </div>
        )}
      </div>
    </>
  )
}

const MedicationScreen = ({ batch, data, onBack, onContinue, onDataChange }) => {
  const medicationOptions = ['New castle', 'Gumboro']
  const medicationStock = { 'New castle': 7, Gumboro: 7 }
  const [medicationMenuOpen, setMedicationMenuOpen] = useState(false)
  const medicationMenuRef = useOutsideDismiss(
    medicationMenuOpen,
    setMedicationMenuOpen,
  )
  const [validationAttempted, setValidationAttempted] = useState(false)
  const { hasUsedMedicine, medicationAmounts, selectedMedication } = data

  const toggleMedication = (medication) => {
    const nextMedication = selectedMedication.includes(medication)
      ? selectedMedication.filter((item) => item !== medication)
      : [...selectedMedication, medication]
    onDataChange({ selectedMedication: nextMedication })
  }

  const setMedicationAmount = (medication, value) => {
    onDataChange({
      medicationAmounts: {
        ...medicationAmounts,
        [medication]: value,
      },
    })
  }

  const getValidationError = () => {
    if (hasUsedMedicine !== 'yes') return ''
    if (selectedMedication.length === 0) return 'Select at least one medicine used today.'

    for (const medication of selectedMedication) {
      const amount = parseNumber(medicationAmounts[medication] ?? '')
      if (amount === null) return `Enter the litres of ${medication} used.`
      if (amount <= 0) return `${medication} used must be greater than zero litres.`
      if (amount > medicationStock[medication]) {
        return `${medication} used cannot exceed the ${medicationStock[medication]} litres in stock.`
      }
    }

    return ''
  }

  const validationError = getValidationError()

  const handleContinue = () => {
    setValidationAttempted(true)
    if (validationError) return
    onContinue()
  }

  return (
    <>
      <header className="relative flex h-[14cqw] shrink-0 items-center px-[2.2cqw]">
        <button
          aria-label="Back to eggs in store"
          className="grid size-[10cqw] touch-manipulation place-items-center rounded-full text-[6.5cqw] transition active:scale-90 active:bg-[#eef3ec]"
          onClick={onBack}
          type="button"
        >
          <PiArrowLeft aria-hidden="true" />
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[4.2cqw] font-normal tracking-[-0.02em]">
          {batch.name.replace('Batch', 'Batch No.')}
        </h1>
      </header>

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-[3.9cqw] pb-[2.8cqw] pt-[7.2cqw] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <h2 className="text-[5.25cqw] font-normal tracking-[-0.025em] text-[#536656]">
          Update medication used
        </h2>

        <section
          aria-label="Medication stock"
          className="mt-[6.6cqw] h-[27.5cqw] shrink-0 rounded-[4.3cqw] border border-[#d8d2bd] bg-[#fff9e6] px-[4cqw] pt-[3cqw]"
        >
          <h3 className="text-center text-[6cqw] font-normal leading-none">Medication</h3>
          <div className="mx-auto mt-[5.1cqw] grid w-[47cqw] grid-cols-[1fr_auto] gap-x-[7cqw] gap-y-[1.8cqw] text-[3.35cqw] text-[#5d6f60]">
            {medicationOptions.map((medication) => (
              <div className="contents" key={medication}>
                <span>{medication}</span>
                <span className="text-[#9ba7a0]">{medicationStock[medication]} Litres</span>
              </div>
            ))}
          </div>
        </section>

        <fieldset className="mt-[7.2cqw] shrink-0">
          <legend className="text-[4.15cqw] font-normal">
            Have you used any medicines today?
          </legend>
          <div className="mt-[6.1cqw] flex items-center justify-between px-[2.4cqw] pr-[25cqw]">
            {['Yes', 'No'].map((option) => (
              <label
                className="flex cursor-pointer touch-manipulation items-center gap-[3.1cqw] text-[4cqw]"
                key={option}
              >
                <input
                  checked={hasUsedMedicine === option.toLowerCase()}
                  className="size-[4.35cqw] shrink-0 appearance-none rounded-full border-[0.45cqw] border-[#7a7f7a] bg-white transition checked:border-[1.3cqw] checked:border-[#007b2f] focus-visible:outline focus-visible:outline-[0.55cqw] focus-visible:outline-offset-[0.8cqw] focus-visible:outline-[#9ebc32]"
                  name="medicine-used"
                  onChange={() => onDataChange({ hasUsedMedicine: option.toLowerCase() })}
                  type="radio"
                  value={option.toLowerCase()}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <AnimatePresence initial={false}>
          {hasUsedMedicine === 'yes' && (
            <motion.div
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              className="shrink-0 overflow-visible"
              exit={{ height: 0, opacity: 0, y: -8 }}
              initial={{ height: 0, opacity: 0, y: -8 }}
              key="medication-fields"
              transition={{ duration: 0.24, ease: 'easeOut' }}
            >
              <div className="relative mt-[7.5cqw]" ref={medicationMenuRef}>
                <p className="text-[2.8cqw]">What medicine have you used for layer birds</p>
                <div className="relative mt-[2.4cqw] flex min-h-[8cqw] items-center border-b border-[#929792] pb-[1.4cqw]">
                  <button
                    aria-controls="medication-options-list"
                    aria-expanded={medicationMenuOpen}
                    aria-haspopup="listbox"
                    aria-label="Choose medicines used"
                    className="absolute inset-0 z-0 cursor-pointer touch-manipulation rounded-[1cqw] focus-visible:outline focus-visible:outline-[0.55cqw] focus-visible:outline-offset-[0.7cqw] focus-visible:outline-[#9ebc32]"
                    onClick={() => setMedicationMenuOpen((isOpen) => !isOpen)}
                    type="button"
                  />
                  <div className="pointer-events-none relative z-10 flex min-w-0 flex-1 flex-wrap gap-[2.1cqw]">
                    {selectedMedication.length === 0 && (
                      <span className="text-[3.5cqw] text-[#526454]">—select all that apply—</span>
                    )}
                    {selectedMedication.map((medication) => (
                      <span
                        className="flex items-center gap-[1.25cqw] rounded-full border border-[#4db66d] px-[2.3cqw] py-[0.9cqw] text-[3.35cqw] text-[#237a3f]"
                        key={medication}
                      >
                        {medication}
                        <button
                          aria-label={`Remove ${medication}`}
                          className="pointer-events-auto touch-manipulation rounded-full active:scale-90"
                          onClick={() => toggleMedication(medication)}
                          type="button"
                        >
                          <PiXCircleFill aria-hidden="true" className="text-[3.6cqw] text-[#5bae72]" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <span className="pointer-events-none relative z-10 grid size-[8cqw] shrink-0 place-items-center">
                    {medicationMenuOpen ? (
                      <PiCaretUpFill aria-hidden="true" className="text-[3.8cqw]" />
                    ) : (
                      <PiCaretDownFill aria-hidden="true" className="text-[3.8cqw]" />
                    )}
                  </span>
                </div>

                <AnimatePresence>
                  {medicationMenuOpen && (
                    <motion.div
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      aria-label="Medicines used"
                      aria-multiselectable="true"
                      className="absolute left-0 right-0 top-full z-50 mt-[1.5cqw] overflow-hidden rounded-[3cqw] border border-[#d3d8d2] bg-white p-[1.3cqw] shadow-[0_3cqw_8cqw_rgba(28,51,30,0.18)]"
                      exit={{ opacity: 0, scale: 0.98, y: -4 }}
                      id="medication-options-list"
                      initial={{ opacity: 0, scale: 0.98, y: -4 }}
                      role="listbox"
                    >
                      {medicationOptions.map((medication) => {
                        const isSelected = selectedMedication.includes(medication)
                        return (
                          <button
                            aria-selected={isSelected}
                            className="flex h-[10cqw] w-full touch-manipulation items-center justify-between rounded-[2cqw] px-[3cqw] text-left text-[3.6cqw] hover:bg-[#f4f7f2] active:bg-[#eaf2e7]"
                            key={medication}
                            onClick={() => toggleMedication(medication)}
                            role="option"
                            type="button"
                          >
                            <span>{medication}</span>
                            {isSelected && (
                              <PiCheckCircleFill aria-hidden="true" className="text-[4.5cqw] text-[#67a847]" />
                            )}
                          </button>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-[7cqw] space-y-[7cqw]">
                {selectedMedication.map((medication) => (
                  <NumberField
                    id={`medication-${medication.toLowerCase().replace(' ', '-')}`}
                    key={medication}
                    label={`How many litres of ${medication.toLowerCase()} was used?`}
                    onChange={(value) => setMedicationAmount(medication, value)}
                    placeholder="Enter litres"
                    prefix="L"
                    value={medicationAmounts[medication] ?? ''}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {hasUsedMedicine && (
          <div className="mt-auto shrink-0 pt-[7.2cqw]">
            {validationAttempted && validationError && (
              <ValidationMessage>{validationError}</ValidationMessage>
            )}
            <button
              className="flex h-[11.2cqw] w-full touch-manipulation items-center justify-center rounded-[4.2cqw] bg-[linear-gradient(100deg,#ffb51c_0%,#f4bd1b_48%,#9ebc32_100%)] text-[3.5cqw] font-bold uppercase tracking-[0.02em] text-[#17351f] transition active:scale-[0.98] active:brightness-95"
              onClick={handleContinue}
              type="button"
            >
              Save &amp; Continue
            </button>
          </div>
        )}
      </div>
    </>
  )
}

const SummarySection = ({ onEdit, rows, title }) => (
  <section className="mt-[6.3cqw]">
    <div className="flex items-center justify-between px-[4cqw]">
      <h2 className="text-[3.55cqw] font-normal uppercase text-[#657466]">{title}</h2>
      <button
        className="touch-manipulation text-[3.25cqw] font-medium text-[#007b2f] underline underline-offset-[0.5cqw] transition active:scale-95"
        onClick={onEdit}
        type="button"
      >
        EDIT ITEMS
      </button>
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

const ReportSummaryScreen = ({ batch, data, onBack, onEdit, onFinish }) => {
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
          aria-label="Back to medication"
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

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-[#fbfbfb] px-[5.5cqw] pb-[3cqw] pt-[6cqw] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <section className="rounded-[2.2cqw] bg-[#fff9e6] px-[6cqw] py-[5.2cqw]">
          <h2 className="text-[5cqw] font-normal text-[#007b2f]">Kuku’s Farm report</h2>
          <div className="mt-[3.2cqw] flex flex-wrap items-center gap-x-[4.2cqw] gap-y-[1.5cqw] text-[3cqw] text-[#657466]">
            <span className="flex items-center gap-[1cqw]">
              <PiCalendarBlank aria-hidden="true" className="text-[3.7cqw]" />
              23rd May 2025
            </span>
            <span className="flex items-center gap-[1cqw]">
              <PiLinkSimple aria-hidden="true" className="text-[3.7cqw]" />
              {batch.name} – {batch.birdType}
            </span>
          </div>
        </section>

        <SummarySection
          onEdit={() => onEdit('birds')}
          rows={birdRows}
          title={`Birds– ${batch.birdType}`}
        />
        <SummarySection onEdit={() => onEdit('eggs')} rows={eggRows} title="Eggs" />
        <SummarySection
          onEdit={() => onEdit('medication')}
          rows={medicationRows}
          title="Medication Used"
        />

        <p className="mt-[7cqw] text-center text-[3.55cqw] leading-[2] text-[#344b38]">
          This report was prepared by Mwangi
          <br />
          on 24/06/2022 at 6:00am
        </p>

        <button
          className="mt-[5.5cqw] flex h-[11.2cqw] w-full shrink-0 touch-manipulation items-center justify-center rounded-[2.2cqw] bg-[linear-gradient(100deg,#ffb51c_0%,#f4bd1b_48%,#9ebc32_100%)] text-[3.8cqw] font-bold uppercase tracking-[0.02em] text-[#17351f] transition active:scale-[0.98] active:brightness-95"
          onClick={onFinish}
          type="button"
        >
          Finish Reporting
        </button>
      </div>
    </>
  )
}

const ReportSuccessScreen = ({ batch, onBackToReports }) => (
  <div className="flex min-h-0 flex-1 flex-col bg-white px-[4cqw] pb-[7cqw] pt-[16cqw]">
    <img
      alt="Report completed successfully"
      className="mx-auto h-auto w-[60cqw]"
      src={successIllustration}
    />

    <p className="mt-[10cqw] text-center text-[4cqw] leading-[1.5] text-black">
      Yay! You are done reporting for {batch.name}!
    </p>

    <button
      className="mt-auto flex h-[11.2cqw] w-full shrink-0 touch-manipulation items-center justify-center rounded-[4.5cqw] bg-[linear-gradient(100deg,#ffb51c_0%,#f4bd1b_48%,#9ebc32_100%)] text-[3.65cqw] font-bold uppercase tracking-[0.02em] text-[#17351f] transition active:scale-[0.98] active:brightness-95"
      onClick={onBackToReports}
      type="button"
    >
      Go Back to Farm Reports
    </button>
  </div>
)

function DemoPage() {
  const [notice, setNotice] = useState('')
  const [screen, setScreen] = useState('dashboard')
  const [direction, setDirection] = useState(1)
  const [reportData, setReportData] = useState(initialReportData)
  const [editingSection, setEditingSection] = useState(null)
  const [selectedBatch, setSelectedBatch] = useState(batches[0])

  useEffect(() => {
    if (!notice) return undefined

    const timeout = window.setTimeout(() => setNotice(''), 1800)
    return () => window.clearTimeout(timeout)
  }, [notice])

  const showNotice = (label) => {
    setNotice(`${label} is coming in the next demo screen`)
  }

  const updateReportData = (section, changes) => {
    setReportData((currentData) => ({
      ...currentData,
      [section]: {
        ...currentData[section],
        ...changes,
      },
    }))
  }

  const openFarmReport = () => {
    setNotice('')
    setDirection(1)
    setScreen('farm-report')
  }

  const returnToDashboard = () => {
    setNotice('')
    setDirection(-1)
    setScreen('dashboard')
  }

  const openSelectBatch = () => {
    setNotice('')
    setDirection(1)
    setScreen('select-batch')
  }

  const returnToFarmReport = () => {
    setNotice('')
    setDirection(-1)
    setScreen('farm-report')
  }

  const openBirdCount = (batch) => {
    setNotice('')
    setSelectedBatch(batch)
    setDirection(1)
    setScreen('bird-count')
  }

  const returnToSelectBatch = () => {
    setNotice('')
    setDirection(-1)
    setScreen('select-batch')
  }

  const openEggStore = () => {
    setNotice('')
    setDirection(1)
    setScreen('egg-store')
  }

  const returnToBirdCount = () => {
    setNotice('')
    setDirection(-1)
    setScreen('bird-count')
  }

  const openMedication = () => {
    setNotice('')
    setDirection(1)
    setScreen('medication')
  }

  const returnToEggStore = () => {
    setNotice('')
    setDirection(-1)
    setScreen('egg-store')
  }

  const openSummary = () => {
    setNotice('')
    setEditingSection(null)
    setDirection(1)
    setScreen('summary')
  }

  const returnToMedication = () => {
    setNotice('')
    setEditingSection(null)
    setDirection(-1)
    setScreen('medication')
  }

  const finishReport = () => {
    setNotice('')
    setEditingSection(null)
    setDirection(1)
    setScreen('success')
  }

  const returnToFarmReports = () => {
    setNotice('')
    setEditingSection(null)
    setDirection(-1)
    setScreen('farm-report')
  }

  const returnToSummary = () => {
    setNotice('')
    setEditingSection(null)
    setDirection(1)
    setScreen('summary')
  }

  const editReportSection = (section) => {
    const targetScreen = {
      birds: 'bird-count',
      eggs: 'egg-store',
      medication: 'medication',
    }[section]

    setNotice('')
    setEditingSection(section)
    setDirection(-1)
    setScreen(targetScreen)
  }

  return (
    <main className="relative flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#fffdf3_0%,#f8f0d8_48%,#e8dcc1_100%)] p-3 text-[#243b25]">
      <a
        aria-label="Go back to the i-Kuku homepage"
        className="absolute left-4 top-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-[#ffb51c] font-bold uppercase leading-none text-black shadow-[6px_6px_0_#0a0a0a] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#0a0a0a] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#007a35] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#0a0a0a] sm:h-14 sm:w-auto sm:gap-3 sm:px-6"
        href="#/"
      >
        <PiArrowLeft aria-hidden="true" className="shrink-0 text-xl" />
        <span className="hidden sm:inline">Back to homepage</span>
      </a>

      <section
        aria-label="Interactive i-Kuku mobile application demo"
        className="relative h-[min(844px,calc(100dvh-24px),calc((100vw-24px)*844/390))] aspect-[390/844] [container-type:inline-size]"
      >
        <span className="absolute -left-[1.15cqw] top-[18cqw] h-[7.5cqw] w-[1.4cqw] rounded-l-[1cqw] bg-[#222] shadow-[inset_1px_0_1px_#555]" />
        <span className="absolute -left-[1.15cqw] top-[29cqw] h-[12.5cqw] w-[1.4cqw] rounded-l-[1cqw] bg-[#222] shadow-[inset_1px_0_1px_#555]" />
        <span className="absolute -left-[1.15cqw] top-[43cqw] h-[12.5cqw] w-[1.4cqw] rounded-l-[1cqw] bg-[#222] shadow-[inset_1px_0_1px_#555]" />
        <span className="absolute -right-[1.15cqw] top-[31cqw] h-[20cqw] w-[1.4cqw] rounded-r-[1cqw] bg-[#222] shadow-[inset_-1px_0_1px_#555]" />

        <div className="relative h-full w-full rounded-[13cqw] bg-[linear-gradient(145deg,#404040_0%,#090909_18%,#000_72%,#333_100%)] p-[2.05cqw] shadow-[0_3.5cqw_9cqw_rgba(31,39,24,0.34),inset_0_0_0_0.35cqw_#5b5b5b]">
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[10.95cqw] bg-white">
            <div className="pointer-events-none absolute left-1/2 top-[2.1cqw] z-30 h-[7.2cqw] w-[25.6cqw] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_-0.3cqw_0.5cqw_#272727]">
              <span className="absolute right-[2.1cqw] top-1/2 size-[1.7cqw] -translate-y-1/2 rounded-full bg-[#101922] shadow-[inset_0_0_0_0.35cqw_#162b43]" />
            </div>

            <div className="relative z-20 flex h-[12cqw] shrink-0 items-center justify-between px-[4.3cqw] pt-[1cqw] text-[3.1cqw] font-bold">
              <time dateTime="17:13">5:13 PM</time>
              <div aria-label="Phone status" className="flex items-center gap-[1.3cqw] text-[3.55cqw]">
                <PiAlarmFill aria-hidden="true" />
                <PiBluetoothFill aria-hidden="true" />
                <PiWifiHighFill aria-hidden="true" />
                <PiCellSignalFullFill aria-hidden="true" />
                <PiBatteryFullFill aria-hidden="true" className="text-[4.1cqw]" />
              </div>
            </div>

            <div className="relative min-h-0 flex-1 overflow-hidden bg-white">
              <AnimatePresence custom={direction} initial={false} mode="sync">
                <motion.div
                  animate="center"
                  className="absolute inset-0 flex flex-col bg-white"
                  custom={direction}
                  exit="exit"
                  initial="enter"
                  key={screen}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  variants={screenVariants}
                >
                  {screen === 'dashboard' ? (
                    <DashboardScreen
                      onOpenFarmReport={openFarmReport}
                      onShowNotice={showNotice}
                    />
                  ) : screen === 'farm-report' ? (
                    <FarmReportScreen
                      onAddReport={openSelectBatch}
                      onBack={returnToDashboard}
                      onShowNotice={showNotice}
                    />
                  ) : screen === 'select-batch' ? (
                    <SelectBatchScreen
                      onBack={returnToFarmReport}
                      onSelectBatch={openBirdCount}
                      onShowNotice={showNotice}
                    />
                  ) : screen === 'bird-count' ? (
                    <BirdCountScreen
                      batch={selectedBatch}
                      data={reportData.birds}
                      onBack={editingSection === 'birds' ? returnToSummary : returnToSelectBatch}
                      onContinue={editingSection === 'birds' ? returnToSummary : openEggStore}
                      onDataChange={(changes) => updateReportData('birds', changes)}
                    />
                  ) : screen === 'egg-store' ? (
                    <EggStoreScreen
                      batch={selectedBatch}
                      data={reportData.eggs}
                      onBack={editingSection === 'eggs' ? returnToSummary : returnToBirdCount}
                      onContinue={editingSection === 'eggs' ? returnToSummary : openMedication}
                      onDataChange={(changes) => updateReportData('eggs', changes)}
                    />
                  ) : screen === 'medication' ? (
                    <MedicationScreen
                      batch={selectedBatch}
                      data={reportData.medication}
                      onBack={editingSection === 'medication' ? returnToSummary : returnToEggStore}
                      onContinue={openSummary}
                      onDataChange={(changes) => updateReportData('medication', changes)}
                    />
                  ) : screen === 'summary' ? (
                    <ReportSummaryScreen
                      batch={selectedBatch}
                      data={reportData}
                      onBack={returnToMedication}
                      onEdit={editReportSection}
                      onFinish={finishReport}
                    />
                  ) : (
                    <ReportSuccessScreen
                      batch={selectedBatch}
                      onBackToReports={returnToFarmReports}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex h-[5.2cqw] shrink-0 items-start justify-center bg-white pt-[1.2cqw]">
              <span className="h-[1.25cqw] w-[34cqw] rounded-full bg-black" />
            </div>

            <div
              aria-live="polite"
              className={`pointer-events-none absolute bottom-[21cqw] left-1/2 z-40 max-w-[80cqw] -translate-x-1/2 rounded-full bg-[#243b25] px-[4cqw] py-[2.2cqw] text-center text-[3.1cqw] font-medium text-white shadow-lg transition-all duration-200 ${
                notice ? 'translate-y-0 opacity-100' : 'translate-y-[2cqw] opacity-0'
              }`}
              role="status"
            >
              {notice}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DemoPage
