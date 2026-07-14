import { useEffect, useState } from 'react'

import PhoneFrame from './components/PhoneFrame'
import {
  cloneData,
  createEmptyReportData,
  DEMO_STORAGE_KEY,
  formatCount,
  formatReportDate,
  formatReportTimestamp,
  getReportAdjustments,
  loadFarmData,
} from './data'
import BirdCountScreen from './screens/BirdCountScreen'
import DashboardScreen from './screens/DashboardScreen'
import EggStoreScreen from './screens/EggStoreScreen'
import FarmReportScreen from './screens/FarmReportScreen'
import FinancialSummaryScreen from './screens/FinancialSummaryScreen'
import MedicationScreen from './screens/MedicationScreen'
import ReportSuccessScreen from './screens/ReportSuccessScreen'
import ReportSummaryScreen from './screens/ReportSummaryScreen'
import SelectBatchScreen from './screens/SelectBatchScreen'

const AppDemoPage = () => {
  const [farmData, setFarmData] = useState(loadFarmData)
  const [notice, setNotice] = useState('')
  const [screen, setScreen] = useState('dashboard')
  const [direction, setDirection] = useState(1)
  const [reportData, setReportData] = useState(createEmptyReportData)
  const [editingSection, setEditingSection] = useState(null)
  const [selectedBatch, setSelectedBatch] = useState(() => farmData.batches[0])
  const [selectedHistoryReport, setSelectedHistoryReport] = useState(null)
  const [reportDetailOrigin, setReportDetailOrigin] = useState('farm-report')
  const [draftStartedAt, setDraftStartedAt] = useState(() => new Date().toISOString())

  const farmSummary = {
    birds: formatCount(farmData.batches.reduce((total, batch) => total + batch.birdCount, 0)),
    feeds: `${formatCount(farmData.batches.reduce((total, batch) => total + batch.feedKg, 0))}kg`,
    eggs: formatCount(farmData.batches.reduce((total, batch) => total + batch.eggCount, 0)),
  }

  useEffect(() => {
    try {
      window.localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(farmData))
    } catch {
      // Keep the demo usable if storage is unavailable or full.
    }
  }, [farmData])

  useEffect(() => {
    if (!notice) return undefined
    const timeout = window.setTimeout(() => setNotice(''), 1800)
    return () => window.clearTimeout(timeout)
  }, [notice])

  const navigate = (targetScreen, nextDirection, options = {}) => {
    setNotice('')
    setDirection(nextDirection)
    if (options.clearEditing) setEditingSection(null)
    setScreen(targetScreen)
  }

  const showNotice = (label) => setNotice(`${label} is coming in the next demo screen`)

  const updateReportData = (section, changes) => {
    setReportData((currentData) => ({
      ...currentData,
      [section]: { ...currentData[section], ...changes },
    }))
  }

  const openSelectBatch = () => {
    setReportData(createEmptyReportData())
    setDraftStartedAt(new Date().toISOString())
    navigate('select-batch', 1)
  }

  const openBirdCount = (batch) => {
    setSelectedBatch(batch)
    navigate('bird-count', 1)
  }

  const continueFromBirdCount = () => {
    navigate(
      selectedBatch.birdType.toLowerCase().includes('broiler') ? 'medication' : 'egg-store',
      1,
    )
  }

  const returnFromMedication = () => {
    navigate(
      selectedBatch.birdType.toLowerCase().includes('broiler') ? 'bird-count' : 'egg-store',
      -1,
    )
  }

  const openSummary = () => navigate('summary', 1, { clearEditing: true })

  const finishReport = () => {
    const completedAt = new Date().toISOString()
    const adjustments = getReportAdjustments(selectedBatch, reportData)
    const updatedBatch = {
      ...selectedBatch,
      birdCount: adjustments.remainingBirds,
      eggCount: selectedBatch.eggCount + adjustments.usableEggs,
      feedKg: Math.max(0, selectedBatch.feedKg - adjustments.feedUsedKg),
    }
    const completedReport = {
      id: `report-${Date.now()}`,
      batchId: selectedBatch.id,
      name: selectedBatch.name,
      date: formatReportDate(new Date(completedAt)),
      completedAt,
      type: selectedBatch.birdType,
      batchSnapshot: cloneData(updatedBatch),
      data: cloneData(reportData),
      adjustments,
    }

    setFarmData((currentFarmData) => ({
      batches: currentFarmData.batches.map((batch) =>
        batch.id === updatedBatch.id ? updatedBatch : batch,
      ),
      reports: [completedReport, ...currentFarmData.reports],
    }))
    setSelectedBatch(updatedBatch)
    navigate('success', 1, { clearEditing: true })
  }

  const openPreviousReport = (report, origin = 'farm-report') => {
    setSelectedHistoryReport(report)
    setReportDetailOrigin(origin)
    navigate('report-detail', 1)
  }

  const editReportSection = (section) => {
    setEditingSection(section)
    navigate({ birds: 'bird-count', eggs: 'egg-store', medication: 'medication' }[section], -1)
  }

  const returnToSummary = () => navigate('summary', 1, { clearEditing: true })

  const renderScreen = () => {
    if (screen === 'dashboard') {
      return <DashboardScreen farmSummary={farmSummary} onOpenFarmReport={() => navigate('farm-report', 1)} onOpenFinancialSummary={() => navigate('financial-summary', 1)} onShowNotice={showNotice} />
    }
    if (screen === 'financial-summary') {
      return <FinancialSummaryScreen onBack={() => navigate('dashboard', -1)} onShowNotice={showNotice} />
    }
    if (screen === 'farm-report') {
      return <FarmReportScreen onAddReport={openSelectBatch} onBack={() => navigate('dashboard', -1)} onOpenReport={openPreviousReport} onShowNotice={showNotice} reports={farmData.reports} />
    }
    if (screen === 'select-batch') {
      return <SelectBatchScreen batches={farmData.batches} onBack={() => navigate('farm-report', -1)} onOpenReport={(report) => openPreviousReport(report, 'select-batch')} onSelectBatch={openBirdCount} onShowNotice={showNotice} reports={farmData.reports} />
    }
    if (screen === 'bird-count') {
      return (
        <BirdCountScreen
          batch={selectedBatch}
          data={reportData.birds}
          onBack={editingSection === 'birds' ? returnToSummary : () => navigate('select-batch', -1)}
          onContinue={editingSection === 'birds' ? returnToSummary : continueFromBirdCount}
          onDataChange={(changes) => updateReportData('birds', changes)}
        />
      )
    }
    if (screen === 'egg-store') {
      return (
        <EggStoreScreen
          batch={selectedBatch}
          data={reportData.eggs}
          onBack={editingSection === 'eggs' ? returnToSummary : () => navigate('bird-count', -1)}
          onContinue={editingSection === 'eggs' ? returnToSummary : () => navigate('medication', 1)}
          onDataChange={(changes) => updateReportData('eggs', changes)}
        />
      )
    }
    if (screen === 'medication') {
      return (
        <MedicationScreen
          batch={selectedBatch}
          data={reportData.medication}
          onBack={editingSection === 'medication' ? returnToSummary : returnFromMedication}
          onContinue={openSummary}
          onDataChange={(changes) => updateReportData('medication', changes)}
        />
      )
    }
    if (screen === 'summary') {
      return <ReportSummaryScreen batch={selectedBatch} data={reportData} onBack={() => navigate('medication', -1, { clearEditing: true })} onEdit={editReportSection} onFinish={finishReport} preparedAt={formatReportTimestamp(draftStartedAt)} reportDate={formatReportDate(new Date(draftStartedAt))} />
    }
    if (screen === 'report-detail' && selectedHistoryReport) {
      return <ReportSummaryScreen batch={selectedHistoryReport.batchSnapshot} data={selectedHistoryReport.data} onBack={() => navigate(reportDetailOrigin, -1)} preparedAt={formatReportTimestamp(selectedHistoryReport.completedAt)} readOnly reportDate={selectedHistoryReport.date} />
    }
    return <ReportSuccessScreen batch={selectedBatch} onBackToReports={() => navigate('farm-report', -1, { clearEditing: true })} />
  }

  return (
    <PhoneFrame direction={direction} notice={notice} screen={screen}>
      {renderScreen()}
    </PhoneFrame>
  )
}

export default AppDemoPage
