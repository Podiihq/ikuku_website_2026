import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  PiArrowDown,
  PiArrowLeft,
  PiArrowUp,
  PiBellSimple,
  PiCaretDownFill,
  PiCoins,
  PiWarehouse,
} from 'react-icons/pi'

const financialBreakdowns = {
  Income: [
    { label: 'Eggs', amount: '60000(40%)', percentage: 40 },
    { label: 'Chicken', amount: '43000(40%)', percentage: 40 },
    { label: 'Manure', amount: '1000(10%)', percentage: 10 },
  ],
  Expenses: [
    { label: 'Feeds', amount: '45000(55%)', percentage: 55 },
    { label: 'Medication', amount: '22600(27%)', percentage: 27 },
    { label: 'Labour', amount: '15000(18%)', percentage: 18 },
  ],
}

const batchGrowthItems = [
  { name: 'Batch 1', type: 'kienyeji', status: 'Active', tone: 'bg-[#f1ffc8] text-[#6d7b42]' },
  { name: 'Batch 2', type: 'kienyeji', status: 'Growing', tone: 'bg-[#fff9df] text-[#7c765a]' },
  { name: 'Batch 2', type: 'kienyeji', status: 'Completed Cycle', tone: 'bg-[#eff1ef] text-[#69716b]' },
]

const FinancialSummaryScreen = ({ onBack, onShowNotice }) => {
  const [activeTab, setActiveTab] = useState('Income')
  const breakdownItems = financialBreakdowns[activeTab]
  const isIncome = activeTab === 'Income'

  return (
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
        <h1 className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[4.2cqw] font-normal tracking-[-0.02em]">
          Financial Summary
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

      <div className="min-h-0 flex-1 overflow-y-auto px-[4cqw] pb-[6cqw] pt-[8cqw] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="grid grid-cols-2 gap-[8cqw]">
          <FinancialFilter label="Select batches" defaultValue="all">
            <option value="all">All Batches</option>
            <option value="batch-1">Batch 1</option>
            <option value="batch-2">Batch 2</option>
          </FinancialFilter>
          <FinancialFilter label="Select reporting period" defaultValue="3-months">
            <option value="3-months">3 Months</option>
            <option value="6-months">6 Months</option>
            <option value="1-year">1 Year</option>
          </FinancialFilter>
        </div>

        <section className="mt-[9cqw] rounded-[4cqw] border border-[#d9eadc] bg-[#effff4] px-[2.3cqw] py-[3.2cqw] shadow-[0_1.2cqw_3cqw_rgba(28,61,35,0.04)]">
          <div className="flex items-center gap-[2.2cqw] text-[3.65cqw] text-[#5f6f62]">
            <PiCoins aria-hidden="true" className="text-[5cqw] text-[#008d36]" />
            <span>Total Revenue</span>
          </div>
          <p className="ml-[7.8cqw] mt-[2.3cqw] text-[5.8cqw] leading-none text-[#243b25]">Ksh 167,400</p>
        </section>

        <div className="mt-[2.6cqw] grid grid-cols-2 gap-[5.8cqw]">
          <FinancialTotalCard
            icon={<PiArrowUp aria-hidden="true" className="text-[4.2cqw] text-[#9dbd28]" />}
            label="Total Income"
            tone="border-[#e5ecc9] bg-[#fbffe8]"
            value="Ksh 250,000"
          />
          <FinancialTotalCard
            icon={<PiArrowDown aria-hidden="true" className="text-[4.2cqw] text-[#ffac00]" />}
            label="Total Expenses"
            tone="border-[#efe5cc] bg-[#fff9e7]"
            value="Ksh 82,600"
          />
        </div>

        <section className="mt-[12cqw]">
          <div className="grid grid-cols-2 text-center text-[4cqw]">
            {['Income', 'Expenses'].map((tab) => (
              <button
                className={`h-[8.5cqw] touch-manipulation transition active:scale-95 ${
                  activeTab === tab ? 'font-medium text-[#007b2f]' : 'text-[#243b25]'
                }`}
                key={tab}
                onClick={() => setActiveTab(tab)}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative h-[1.2cqw] overflow-hidden rounded-full bg-[#d8d8d8]">
            <motion.span
              animate={{ x: isIncome ? '0%' : '100%' }}
              className={`absolute inset-y-0 left-0 w-1/2 rounded-full ${isIncome ? 'bg-[#00852f]' : 'bg-[#f2a900]'}`}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            />
          </div>

          <div className="mt-[9cqw] space-y-[5cqw]">
            {breakdownItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between gap-[3cqw]">
                  <span className="text-[4cqw]">{item.label}</span>
                  <span className="text-[3.2cqw] text-black">{item.amount}</span>
                </div>
                <div className="mt-[2.7cqw] h-[2.7cqw] overflow-hidden rounded-full bg-[#eeeeee]">
                  <motion.div
                    animate={{ width: `${item.percentage}%` }}
                    className={`h-full rounded-full ${isIncome ? 'bg-[#9bc637]' : 'bg-[#f3b526]'}`}
                    initial={{ width: 0 }}
                    transition={{ duration: 0.42, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-[13cqw] rounded-[4cqw] border border-[#e6ebce] bg-[#fbffe7] px-[2.4cqw] py-[3.2cqw] shadow-[0_1.2cqw_3cqw_rgba(28,61,35,0.04)]">
          <div className="flex items-center gap-[3cqw] text-[3.65cqw] text-[#475a49]">
            <PiWarehouse aria-hidden="true" className="text-[5.8cqw] text-[#008d36]" />
            <span>Total Cost Of Items In Store</span>
          </div>
          <p className="mt-[3.2cqw] text-center text-[5.8cqw] text-[#007b2f]">Ksh 23400</p>
        </section>

        <section className="mt-[10cqw]">
          <h2 className="pl-[2cqw] text-[4.5cqw] font-medium text-[#637265]">Batch Growth Summary</h2>
          <div className="mt-[5cqw] space-y-[4cqw] rounded-[4cqw] border border-[#e4e6e3] px-[2.4cqw] py-[3cqw]">
            {batchGrowthItems.map((batch, index) => (
              <div className="flex items-start justify-between gap-[3cqw]" key={`${batch.name}-${batch.status}-${index}`}>
                <div>
                  <h3 className="text-[3.8cqw]">{batch.name}</h3>
                  <p className="mt-[1cqw] text-[3cqw] text-[#778079]">{batch.type}</p>
                </div>
                <span className={`rounded-[0.8cqw] px-[1.2cqw] py-[0.8cqw] text-[2.8cqw] ${batch.tone}`}>
                  {batch.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

    </>
  )
}

const FinancialFilter = ({ children, defaultValue, label }) => (
  <label className="relative block">
    <span className="sr-only">{label}</span>
    <select
      className="h-[11cqw] w-full appearance-none rounded-[1cqw] border border-[#aeb2ae] bg-white px-[2.3cqw] pr-[8cqw] text-[4cqw] outline-none focus:border-[#007b2f] focus:ring-[0.45cqw] focus:ring-[#9ebc32]/40"
      defaultValue={defaultValue}
    >
      {children}
    </select>
    <PiCaretDownFill
      aria-hidden="true"
      className="pointer-events-none absolute right-[3.1cqw] top-1/2 -translate-y-1/2 text-[3.8cqw]"
    />
  </label>
)

const FinancialTotalCard = ({ icon, label, tone, value }) => (
  <section className={`rounded-[4cqw] border px-[2.2cqw] py-[3cqw] shadow-[0_1.2cqw_3cqw_rgba(28,61,35,0.05)] ${tone}`}>
    <div className="flex items-center gap-[1.8cqw] text-[3.65cqw] text-[#5f6f62]">
      {icon}
      <span>{label}</span>
    </div>
    <p className="mt-[2.6cqw] text-center text-[5.1cqw] leading-none">{value}</p>
  </section>
)

export default FinancialSummaryScreen
