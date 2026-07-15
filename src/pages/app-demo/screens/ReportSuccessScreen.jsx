import successIllustration from '../../../assets/images/mobile-demo-assets/others/Success.svg'

const ReportSuccessScreen = ({ batch, onBackToReports }) => (
  <div className="flex min-h-0 flex-1 flex-col bg-white px-[4cqw] pb-[7cqw] pt-[16cqw]">
    <img
      alt="Report completed successfully"
      className="mx-auto h-auto w-[60cqw]"
      src={successIllustration}
    />

    <p className="mt-[10cqw] text-center text-[4cqw] leading-normal text-black">
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

export default ReportSuccessScreen
