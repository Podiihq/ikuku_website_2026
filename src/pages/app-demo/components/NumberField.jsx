import { useState } from 'react'
import { PiCaretDownFill, PiCaretUpFill } from 'react-icons/pi'

const NumberField = ({ id, label, onChange, placeholder, prefix, value }) => {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value !== '' && value !== null && value !== undefined
  const isLabelRaised = isFocused || hasValue

  const changeBy = (amount) => {
    const nextValue = Math.max(0, (Number(value) || 0) + amount)
    onChange(String(nextValue))
  }

  return (
    <div className="relative flex h-[13.8cqw] items-center rounded-[4.2cqw] border-[0.4cqw] border-[#c8ddcd] bg-white px-[4.2cqw] transition-[border-color,border-width] duration-150 focus-within:border-[0.65cqw] focus-within:border-[#078332]">
      <label
        className={`pointer-events-none absolute left-[3.4cqw] z-10 max-w-[calc(100%-6.8cqw)] bg-white px-[0.8cqw] text-[#526454] transition-all duration-150 ${
          isLabelRaised
            ? 'top-0 -translate-y-1/2 text-[2.8cqw] leading-none'
            : 'top-1/2 -translate-y-1/2 truncate text-[4cqw] leading-none'
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      {prefix && isLabelRaised && (
        <span className="mr-[2.4cqw] shrink-0 text-[4cqw] text-[#687369]">{prefix}</span>
      )}
      <input
        className="min-w-0 flex-1 bg-transparent text-[4.2cqw] text-[#415745] outline-none placeholder:text-[3.5cqw] placeholder:text-[#8b938c] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        id={id}
        min="0"
        onBlur={() => setIsFocused(false)}
        onChange={(event) => onChange(event.target.value)}
        onFocus={() => setIsFocused(true)}
        placeholder={isFocused ? placeholder : ''}
        type="number"
        value={value}
      />
      <span className="-mr-[2cqw] flex h-full w-[9cqw] shrink-0 flex-col items-center justify-center text-[#687369]">
        <button
          aria-label={`Increase ${label.toLowerCase()}`}
          className="grid h-1/2 w-full touch-manipulation place-items-center rounded-tr-[3cqw] active:text-[#007b2f]"
          onClick={() => changeBy(1)}
          type="button"
        >
          <PiCaretUpFill aria-hidden="true" className="text-[3.2cqw]" />
        </button>
        <button
          aria-label={`Decrease ${label.toLowerCase()}`}
          className="grid h-1/2 w-full touch-manipulation place-items-center rounded-br-[3cqw] active:text-[#007b2f]"
          onClick={() => changeBy(-1)}
          type="button"
        >
          <PiCaretDownFill aria-hidden="true" className="text-[3.2cqw]" />
        </button>
      </span>
    </div>
  )
}

export default NumberField
