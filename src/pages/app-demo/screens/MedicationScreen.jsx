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

const MedicationScreen = ({ batch, data, onBack, onContinue, onDataChange }) => {
  const medicationOptions = ['New castle', 'Gumboro']
  const medicationStock = { 'New castle': 7, Gumboro: 7 }
  const birdGroupLabel = batch.birdType.toLowerCase().includes('broiler')
    ? 'broiler birds'
    : 'layer birds'
  const [medicationMenuOpen, setMedicationMenuOpen] = useState(false)
  const medicationMenuRef = useOutsideDismiss(
    medicationMenuOpen,
    setMedicationMenuOpen,
  )
  const [validationAttempted, setValidationAttempted] = useState(false)
  const { hasUsedMedicine, medicationAmounts, selectedMedication } = data

  const toggleMedication = (medication) => {
    const nextMedication = selectedMedication.includes(medication)
      ? selectedMedication.filter((item) => item !== medication)
      : [...selectedMedication, medication]
    onDataChange({ selectedMedication: nextMedication })
  }

  const setMedicationAmount = (medication, value) => {
    onDataChange({
      medicationAmounts: {
        ...medicationAmounts,
        [medication]: value,
      },
    })
  }

  const getValidationError = () => {
    if (hasUsedMedicine !== 'yes') return ''
    if (selectedMedication.length === 0) return 'Select at least one medicine used today.'

    for (const medication of selectedMedication) {
      const amount = parseNumber(medicationAmounts[medication] ?? '')
      if (amount === null) return `Enter the litres of ${medication} used.`
      if (amount <= 0) return `${medication} used must be greater than zero litres.`
      if (amount > medicationStock[medication]) {
        return `${medication} used cannot exceed the ${medicationStock[medication]} litres in stock.`
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
          aria-label="Back to previous report step"
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

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-[3.9cqw] pb-[2.8cqw] pt-[7.2cqw] scrollbar-none [&::-webkit-scrollbar]:hidden">
        <h2 className="text-[5.25cqw] font-normal tracking-tight text-[#536656]">
          Update medication used
        </h2>

        <section
          aria-label="Medication stock"
          className="mt-[6.6cqw] h-[27.5cqw] shrink-0 rounded-[4.3cqw] border border-[#d8d2bd] bg-[#fff9e6] px-[4cqw] pt-[3cqw]"
        >
          <h3 className="text-center text-[6cqw] font-normal leading-none">Medication</h3>
          <div className="mx-auto mt-[5.1cqw] grid w-[47cqw] grid-cols-[1fr_auto] gap-x-[7cqw] gap-y-[1.8cqw] text-[3.35cqw] text-[#5d6f60]">
            {medicationOptions.map((medication) => (
              <div className="contents" key={medication}>
                <span>{medication}</span>
                <span className="text-[#9ba7a0]">{medicationStock[medication]} Litres</span>
              </div>
            ))}
          </div>
        </section>

        <fieldset className="mt-[7.2cqw] shrink-0">
          <legend className="text-[4.15cqw] font-normal">
            Have you used any medicines today?
          </legend>
          <div className="mt-[6.1cqw] flex items-center justify-between px-[2.4cqw] pr-[25cqw]">
            {['Yes', 'No'].map((option) => (
              <label
                className="flex cursor-pointer touch-manipulation items-center gap-[3.1cqw] text-[4cqw]"
                key={option}
              >
                <input
                  checked={hasUsedMedicine === option.toLowerCase()}
                  className="size-[4.35cqw] shrink-0 appearance-none rounded-full border-[0.45cqw] border-[#7a7f7a] bg-white transition checked:border-[1.3cqw] checked:border-[#007b2f] focus-visible:outline-[0.55cqw] focus-visible:outline-offset-[0.8cqw] focus-visible:outline-[#9ebc32]"
                  name="medicine-used"
                  onChange={() => onDataChange({ hasUsedMedicine: option.toLowerCase() })}
                  type="radio"
                  value={option.toLowerCase()}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <AnimatePresence initial={false}>
          {hasUsedMedicine === 'yes' && (
            <motion.div
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              className="shrink-0 overflow-visible"
              exit={{ height: 0, opacity: 0, y: -8 }}
              initial={{ height: 0, opacity: 0, y: -8 }}
              key="medication-fields"
              transition={{ duration: 0.24, ease: 'easeOut' }}
            >
              <div className="relative mt-[7.5cqw]" ref={medicationMenuRef}>
                <p className="text-[2.8cqw]">
                  What medicine have you used for {birdGroupLabel}
                </p>
                <div className="relative mt-[2.4cqw] flex min-h-[8cqw] items-center border-b border-[#929792] pb-[1.4cqw]">
                  <button
                    aria-controls="medication-options-list"
                    aria-expanded={medicationMenuOpen}
                    aria-haspopup="listbox"
                    aria-label="Choose medicines used"
                    className="absolute inset-0 z-0 cursor-pointer touch-manipulation rounded-[1cqw] focus-visible:outline-[0.55cqw] focus-visible:outline-offset-[0.7cqw] focus-visible:outline-[#9ebc32]"
                    onClick={() => setMedicationMenuOpen((isOpen) => !isOpen)}
                    type="button"
                  />
                  <div className="pointer-events-none relative z-10 flex min-w-0 flex-1 flex-wrap gap-[2.1cqw]">
                    {selectedMedication.length === 0 && (
                      <span className="text-[3.5cqw] text-[#526454]">—select all that apply—</span>
                    )}
                    {selectedMedication.map((medication) => (
                      <span
                        className="flex items-center gap-[1.25cqw] rounded-full border border-[#4db66d] px-[2.3cqw] py-[0.9cqw] text-[3.35cqw] text-[#237a3f]"
                        key={medication}
                      >
                        {medication}
                        <button
                          aria-label={`Remove ${medication}`}
                          className="pointer-events-auto touch-manipulation rounded-full active:scale-90"
                          onClick={() => toggleMedication(medication)}
                          type="button"
                        >
                          <PiXCircleFill aria-hidden="true" className="text-[3.6cqw] text-[#5bae72]" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <span className="pointer-events-none relative z-10 grid size-[8cqw] shrink-0 place-items-center">
                    {medicationMenuOpen ? (
                      <PiCaretUpFill aria-hidden="true" className="text-[3.8cqw]" />
                    ) : (
                      <PiCaretDownFill aria-hidden="true" className="text-[3.8cqw]" />
                    )}
                  </span>
                </div>

                <AnimatePresence>
                  {medicationMenuOpen && (
                    <motion.div
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      aria-label="Medicines used"
                      aria-multiselectable="true"
                      className="absolute left-0 right-0 top-full z-50 mt-[1.5cqw] overflow-hidden rounded-[3cqw] border border-[#d3d8d2] bg-white p-[1.3cqw] shadow-[0_3cqw_8cqw_rgba(28,51,30,0.18)]"
                      exit={{ opacity: 0, scale: 0.98, y: -4 }}
                      id="medication-options-list"
                      initial={{ opacity: 0, scale: 0.98, y: -4 }}
                      role="listbox"
                    >
                      {medicationOptions.map((medication) => {
                        const isSelected = selectedMedication.includes(medication)
                        return (
                          <button
                            aria-selected={isSelected}
                            className="flex h-[10cqw] w-full touch-manipulation items-center justify-between rounded-[2cqw] px-[3cqw] text-left text-[3.6cqw] hover:bg-[#f4f7f2] active:bg-[#eaf2e7]"
                            key={medication}
                            onClick={() => toggleMedication(medication)}
                            role="option"
                            type="button"
                          >
                            <span>{medication}</span>
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

              <div className="mt-[7cqw] space-y-[7cqw]">
                {selectedMedication.map((medication) => (
                  <NumberField
                    id={`medication-${medication.toLowerCase().replace(' ', '-')}`}
                    key={medication}
                    label={`How many litres of ${medication.toLowerCase()} was used?`}
                    onChange={(value) => setMedicationAmount(medication, value)}
                    placeholder="Enter litres"
                    prefix="L"
                    value={medicationAmounts[medication] ?? ''}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {hasUsedMedicine && (
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

export default MedicationScreen
