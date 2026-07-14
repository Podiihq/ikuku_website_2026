import { PiCaretDownFill, PiCaretUpFill } from 'react-icons/pi'

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

export default NumberField
