import { PiBellSimple } from 'react-icons/pi'

import batchIcon from '../../../assets/images/mobile-demo-assets/dashboard-icons/batch_icon.svg'
import extensionServicesIcon from '../../../assets/images/mobile-demo-assets/dashboard-icons/extension-services-icon.svg'
import farmReportIcon from '../../../assets/images/mobile-demo-assets/dashboard-icons/farm-report-icon.svg'
import farmStoreIcon from '../../../assets/images/mobile-demo-assets/dashboard-icons/farm-store-icon.svg'
import financialSummaryIcon from '../../../assets/images/mobile-demo-assets/dashboard-icons/financial-summary-icon.svg'
import smartTipsIcon from '../../../assets/images/mobile-demo-assets/dashboard-icons/smart-tips-icon.svg'
import chickenIcon from '../../../assets/images/mobile-demo-assets/summary-icons/chicken-icon.svg'
import eggsIcon from '../../../assets/images/mobile-demo-assets/summary-icons/eggs-icon.svg'
import feedsIcon from '../../../assets/images/mobile-demo-assets/summary-icons/feeds-icon.svg'

const summaryItemDefinitions = [
  { key: 'birds', label: 'Birds', icon: chickenIcon },
  { key: 'feeds', label: 'Feeds', icon: feedsIcon },
  { key: 'eggs', label: 'Eggs', icon: eggsIcon },
]

const quickActions = [
  { label: 'Add Chick Batch', icon: batchIcon },
  { label: 'Farm Report', icon: farmReportIcon },
  { label: 'Farm Store', icon: farmStoreIcon },
  { label: 'Financial Summary', icon: financialSummaryIcon },
  { label: 'Smart Tips', icon: smartTipsIcon },
  { label: 'Extension Services', icon: extensionServicesIcon },
]

const DashboardScreen = ({
  farmSummary,
  onOpenFarmReport,
  onOpenFinancialSummary,
  onOpenSmartTips,
  onShowNotice,
}) => (
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
      <h2 className="text-[5cqw] font-normal">Kuku Farm</h2>
      <div className="mt-[2.3cqw] grid grid-cols-3">
        {summaryItemDefinitions.map((item) => (
          <div
            className="flex flex-col items-center first:items-start last:items-end"
            key={item.label}
          >
            <div className="flex items-center gap-[0.2cqw] text-[3.65cqw] font-medium text-[#00681d]">
              <img alt="" className="size-[5.1cqw] object-contain" src={item.icon} />
              <span>{item.label}</span>
            </div>
            <span className="mt-[1cqw] text-[6.2cqw] font-normal leading-none tracking-[-0.04em] tabular-nums">
              {farmSummary[item.key]}
            </span>
          </div>
        ))}
      </div>
    </section>

    <section className="flex min-h-0 flex-1 flex-col px-[3.4cqw] pt-[4.2cqw]">
      <h2 className="pl-[5.2cqw] text-[4.65cqw] font-medium text-[#586b59]">Quick Actions</h2>
      <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-3 pb-[1.5cqw] pt-[3.3cqw]">
        {quickActions.map((action) => {
          const isFarmReport = action.label === 'Farm Report'
          const isFinancialSummary = action.label === 'Financial Summary'
          const isSmartTips = action.label === 'Smart Tips'

          return (
            <button
              className={`group relative flex touch-manipulation flex-col items-center justify-center self-stretch rounded-[4cqw] px-[1cqw] transition duration-150 active:scale-[0.94] ${
                isFarmReport
                  ? 'mx-[1.2cqw] my-[0.8cqw] bg-[linear-gradient(145deg,#fff8df_0%,#fff1b9_100%)] ring-[0.55cqw] ring-inset ring-[#ffb51c] shadow-[0_1.8cqw_4cqw_rgba(158,188,50,0.24)] active:brightness-95'
                  : 'active:bg-[#f7f8f5]'
              }`}
              key={action.label}
              onClick={() => {
                if (isFarmReport) onOpenFarmReport()
                else if (isFinancialSummary) onOpenFinancialSummary()
                else if (isSmartTips) onOpenSmartTips()
                else onShowNotice(action.label)
              }}
              type="button"
            >
              {isFarmReport && (
                <span
                  aria-hidden="true"
                  className="absolute right-[2.4cqw] top-[1.8cqw] rounded-full bg-[#00681d] px-[2.2cqw] py-[0.75cqw] text-[2.05cqw] font-bold uppercase tracking-[0.08em] text-white shadow-sm"
                >
                  Start here
                </span>
              )}
              <img
                alt=""
                className={`size-[15.15cqw] shrink-0 select-none object-contain transition duration-150 group-active:scale-95 ${
                  isFarmReport ? 'drop-shadow-[0_1cqw_1.2cqw_rgba(0,104,29,0.2)]' : ''
                }`}
                draggable="false"
                src={action.icon}
              />
              <span
                className={`mt-[1.3cqw] max-w-full text-[3.55cqw] leading-tight ${
                  isFarmReport ? 'font-bold text-[#00681d]' : 'font-normal'
                }`}
              >
                {action.label}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  </>
)

export default DashboardScreen
