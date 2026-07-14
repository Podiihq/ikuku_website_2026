import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PiArrowLeft } from 'react-icons/pi'

import NumberField from '../components/NumberField'
import ValidationMessage from '../components/ValidationMessage'
import { parseNumber } from '../formUtils'

const EggStoreScreen = ({ batch, data, onBack, onContinue, onDataChange }) => {
  const [validationAttempted, setValidationAttempted] = useState(false)
  const { brokenEggs, collectedEggs, deformedEggs, largeEggs, shouldGrade, smallEggs } = data

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

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-[3cqw] pb-[2.8cqw] pt-[7.2cqw] scrollbar-none [&::-webkit-scrollbar]:hidden">
        <h2 className="pl-[2.1cqw] text-[5.25cqw] font-normal tracking-tight text-[#536656]">
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
                  className="size-[4.35cqw] shrink-0 appearance-none rounded-full border-[0.45cqw] border-[#7a7f7a] bg-white transition checked:border-[1.3cqw] checked:border-[#007b2f] focus-visible:outline-[0.55cqw] focus-visible:outline-offset-[0.8cqw] focus-visible:outline-[#9ebc32]"
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

export default EggStoreScreen
