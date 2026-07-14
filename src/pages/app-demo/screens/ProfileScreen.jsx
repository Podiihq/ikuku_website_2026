import {
  PiArrowLeft,
  PiBellSimple,
  PiCaretRight,
  PiPhoneFill,
  PiSignOut,
  PiTranslate,
  PiTrashFill,
} from 'react-icons/pi'

const profileActions = [
  { label: 'Language preferences', icon: PiTranslate },
  { label: 'Add recovery phone no.', icon: PiPhoneFill },
  { label: 'Logout', icon: PiSignOut },
  { label: 'Delete my account', icon: PiTrashFill },
]

const ProfileScreen = ({ onBack, onShowNotice }) => (
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
        Profile
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

    <div className="min-h-0 flex-1 overflow-y-auto px-[4.2cqw] pb-[4cqw] pt-[6cqw] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <section className="flex items-center justify-between gap-[4cqw]">
        <div className="min-w-0 flex-1">
          <h2 className="text-[5.1cqw] font-normal tracking-[-0.025em] text-[#29452f]">
            Odongo Michuki
          </h2>
          <div className="mt-[2.1cqw] space-y-[1.5cqw] text-[3.55cqw] text-[#9a9d9a]">
            <p>I am a Poultry Farmer</p>
            <p>
              Living in <span className="text-[#637066]">Nairobi County</span>
            </p>
            <p>My No. is 0701 234 567</p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center">
          <div
            aria-label="Odongo Michuki profile initial"
            className="grid size-[27cqw] place-items-center rounded-full bg-[#536756] text-[12cqw] font-normal text-[#fff9e7]"
          >
            M
          </div>
          <button
            className="mt-[2.1cqw] h-[10.8cqw] rounded-[2.2cqw] border border-[#007b2f] px-[4.4cqw] text-[4.1cqw] text-[#405244] transition active:scale-95 active:bg-[#f1f8f2]"
            onClick={() => onShowNotice('Edit Profile')}
            type="button"
          >
            Edit Profile
          </button>
        </div>
      </section>

      <section aria-label="Profile settings" className="mt-[9.5cqw] space-y-[3.3cqw]">
        {profileActions.map(({ icon: Icon, label }) => (
          <button
            className="flex h-[15cqw] w-full touch-manipulation items-center rounded-[4.2cqw] border border-[#e0e4e0] bg-white px-[3.4cqw] text-left transition active:scale-[0.98] active:bg-[#f8faf8]"
            key={label}
            onClick={() => onShowNotice(label)}
            type="button"
          >
            <Icon aria-hidden="true" className="shrink-0 text-[6cqw] text-[#00852f]" />
            <span className="ml-[6.2cqw] min-w-0 flex-1 text-[4.05cqw] text-[#29452f]">
              {label}
            </span>
            <PiCaretRight aria-hidden="true" className="shrink-0 text-[5cqw] text-[#bfc2bf]" />
          </button>
        ))}
      </section>
    </div>
  </>
)

export default ProfileScreen
