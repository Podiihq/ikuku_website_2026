import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  PiArrowLeft,
  PiCaretDownFill,
  PiCaretUpFill,
  PiCheckCircleFill,
  PiXCircleFill,
} from 'react-icons/pi'

import NumberField from '../components/NumberField'
import ValidationMessage from '../components/ValidationMessage'
import { parseNumber, useOutsideDismiss } from '../formUtils'

const BirdCountScreen = ({ batch, data, onBack, onContinue, onDataChange }) => {
  const [reasonsOpen, setReasonsOpen] = useState(false)
  const reasonsContainerRef = useOutsideDismiss(reasonsOpen, setReasonsOpen)
  const [validationAttempted, setValidationAttempted] = useState(false)
  const { hasReduced, mortalityCount, selectedReasons, sellingPrice, soldCount } = data
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

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-[3.8cqw] pb-[2.8cqw] pt-[7.2cqw] scrollbar-none [&::-webkit-scrollbar]:hidden">
        <h2 className="pl-[1.3cqw] text-[5.25cqw] font-normal tracking-tight text-[#536656]">
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
                  className="size-[4.35cqw] shrink-0 appearance-none rounded-full border-[0.45cqw] border-[#7a7f7a] bg-white transition checked:border-[1.3cqw] checked:border-[#007b2f] focus-visible:outline-[0.55cqw] focus-visible:outline-offset-[0.8cqw] focus-visible:outline-[#9ebc32]"
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
                    className="absolute inset-0 z-0 cursor-pointer touch-manipulation rounded-[1cqw] focus-visible:outline-[0.55cqw] focus-visible:outline-offset-[0.7cqw] focus-visible:outline-[#9ebc32]"
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

export default BirdCountScreen
