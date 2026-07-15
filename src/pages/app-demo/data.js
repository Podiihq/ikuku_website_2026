const initialReportData = {
  birds: {
    hasReduced: '',
    selectedReasons: [],
    mortalityCount: '',
    soldCount: '',
    sellingPrice: '',
  },
  eggs: {
    collectedEggs: '',
    brokenEggs: '',
    shouldGrade: '',
    deformedEggs: '',
    smallEggs: '',
    largeEggs: '',
  },
  medication: {
    hasUsedMedicine: '',
    selectedMedication: [],
    medicationAmounts: {},
  },
}

const defaultBatches = [
  {
    id: 'kienyeji-coop-1',
    name: 'Kienyeji Coop 1',
    birdCount: 2000,
    birdType: 'Layers',
    age: '1 day old',
    feedKg: 1200,
    eggCount: 180,
  },
  {
    id: 'kienyeji-coop-2',
    name: 'Kienyeji Coop 2',
    birdCount: 1500,
    birdType: 'Layers',
    age: '2 weeks old',
    feedKg: 900,
    eggCount: 125,
  },
  {
    id: 'kienyeji-coop-3',
    name: 'Kienyeji Coop 3',
    birdCount: 260,
    birdType: 'Layers',
    age: '5 weeks old',
    feedKg: 180,
    eggCount: 24,
  },
  {
    id: 'broiler-batch-1',
    name: 'Broiler Batch 1',
    birdCount: 520,
    birdType: 'Broilers',
    age: '3 weeks old',
    feedKg: 360,
    eggCount: 0,
  },
]

const emptyMedicationData = {
  hasUsedMedicine: 'no',
  selectedMedication: [],
  medicationAmounts: {},
}

const defaultReports = [
  {
    id: 'demo-report-1',
    batchId: 'kienyeji-coop-1',
    name: 'Kienyeji Coop 1',
    date: '13th July 2026',
    completedAt: '2026-07-13T06:15:00+03:00',
    type: 'Layers',
    batchSnapshot: { ...defaultBatches[0], birdCount: 2012 },
    data: {
      birds: {
        hasReduced: 'yes',
        selectedReasons: ['Mortality'],
        mortalityCount: '12',
        soldCount: '',
        sellingPrice: '',
      },
      eggs: {
        collectedEggs: '180',
        brokenEggs: '4',
        shouldGrade: 'yes',
        deformedEggs: '6',
        smallEggs: '45',
        largeEggs: '125',
      },
      medication: {
        hasUsedMedicine: 'yes',
        selectedMedication: ['New castle'],
        medicationAmounts: { 'New castle': '1.5' },
      },
    },
  },
  {
    id: 'demo-report-2',
    batchId: 'broiler-batch-1',
    name: 'Broiler Batch 1',
    date: '12th July 2026',
    completedAt: '2026-07-12T17:40:00+03:00',
    type: 'Broilers',
    batchSnapshot: { ...defaultBatches[3], birdCount: 528 },
    data: {
      birds: {
        hasReduced: 'yes',
        selectedReasons: ['Mortality'],
        mortalityCount: '8',
        soldCount: '',
        sellingPrice: '',
      },
      eggs: {
        collectedEggs: '0',
        brokenEggs: '0',
        shouldGrade: 'no',
        deformedEggs: '',
        smallEggs: '',
        largeEggs: '',
      },
      medication: emptyMedicationData,
    },
  },
]

export const DEMO_STORAGE_KEY = 'ikuku-interactive-demo-v1'
const activeDefaultReportIds = new Set(defaultReports.map((report) => report.id))

export const cloneData = (data) => JSON.parse(JSON.stringify(data))

const createInitialFarmData = () => ({
  batches: cloneData(defaultBatches),
  reports: cloneData(defaultReports),
})

export const createEmptyReportData = () => cloneData(initialReportData)

export const loadFarmData = () => {
  try {
    const storedData = window.localStorage.getItem(DEMO_STORAGE_KEY)
    if (!storedData) return createInitialFarmData()

    const parsedData = JSON.parse(storedData)
    if (!Array.isArray(parsedData.batches) || !Array.isArray(parsedData.reports)) {
      return createInitialFarmData()
    }

    return {
      ...parsedData,
      reports: parsedData.reports.filter(
        (report) =>
          !report.id?.startsWith('demo-report-') ||
          activeDefaultReportIds.has(report.id),
      ),
    }
  } catch {
    return createInitialFarmData()
  }
}

export const formatCount = (value) => new Intl.NumberFormat('en-KE').format(value)

export const formatReportDate = (date) => {
  const day = date.getDate()
  const ordinal = day % 10 === 1 && day !== 11
    ? 'st'
    : day % 10 === 2 && day !== 12
      ? 'nd'
      : day % 10 === 3 && day !== 13
        ? 'rd'
        : 'th'
  const month = new Intl.DateTimeFormat('en-KE', { month: 'long' }).format(date)
  return `${day}${ordinal} ${month} ${date.getFullYear()}`
}

export const formatReportTimestamp = (dateString) => new Intl.DateTimeFormat('en-KE', {
  dateStyle: 'medium',
  timeStyle: 'short',
}).format(new Date(dateString))

export const getReportAdjustments = (batch, report) => {
  const mortality = report.birds.selectedReasons.includes('Mortality')
    ? Number(report.birds.mortalityCount) || 0
    : 0
  const sold = report.birds.selectedReasons.includes('Sold')
    ? Number(report.birds.soldCount) || 0
    : 0
  const birdDecrease = report.birds.hasReduced === 'yes' ? mortality + sold : 0
  const remainingBirds = Math.max(0, batch.birdCount - birdDecrease)
  const usableEggs = Math.max(
    0,
    (Number(report.eggs.collectedEggs) || 0) - (Number(report.eggs.brokenEggs) || 0),
  )
  const feedUsedKg = Math.min(batch.feedKg, Math.round(remainingBirds * 0.11))

  return { birdDecrease, feedUsedKg, remainingBirds, usableEggs }
}
