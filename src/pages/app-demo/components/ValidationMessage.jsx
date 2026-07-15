const ValidationMessage = ({ children }) => (
  <p
    aria-live="polite"
    className="mb-[2.5cqw] rounded-[2cqw] bg-[#fff0ed] px-[3cqw] py-[2.2cqw] text-[3cqw] leading-snug text-[#a3291f]"
    role="alert"
  >
    {children}
  </p>
)

export default ValidationMessage
