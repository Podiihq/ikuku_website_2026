import { PiHouseFill, PiStorefrontFill, PiUserCircleFill } from 'react-icons/pi'

const navigationItems = [
  { key: 'dashboard', label: 'Home', icon: PiHouseFill },
  { key: 'shop', label: 'My Shop', icon: PiStorefrontFill },
  { key: 'profile', label: 'Profile', icon: PiUserCircleFill },
]

const BottomNavigation = ({ activeTab, onNavigate, onShowNotice }) => (
  <nav
    aria-label="App navigation"
    className="relative z-20 grid h-[17cqw] shrink-0 grid-cols-3 bg-white px-[2cqw]"
  >
    {navigationItems.map(({ icon: Icon, key, label }) => {
      const isActive = activeTab === key

      return (
        <button
          aria-current={isActive ? 'page' : undefined}
          className={`flex touch-manipulation flex-col items-center justify-center gap-[0.55cqw] rounded-[3cqw] transition active:scale-95 ${
            isActive ? 'text-[#007b2f]' : 'text-[#9d9d9d]'
          }`}
          key={key}
          onClick={() => {
            if (isActive) return
            if (key === 'shop') onShowNotice(label)
            else onNavigate(key)
          }}
          type="button"
        >
          <Icon aria-hidden="true" className="text-[7.3cqw]" />
          <span className={`text-[2.7cqw] ${isActive ? 'font-medium' : 'font-normal'}`}>
            {label}
          </span>
        </button>
      )
    })}
  </nav>
)

export default BottomNavigation
