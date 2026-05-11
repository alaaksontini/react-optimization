import { memo } from 'react'
import { useRenderCount } from '../../hooks/useRenderCount'

interface ResultsPanelProps {
  onSearch: (query: string) => void
  lastResult: string
}

const ResultsPanel = memo(function ResultsPanel({ onSearch, lastResult }: ResultsPanelProps) {
  const renders = useRenderCount()

  return (
    <div className="results-panel">
      <span className="render-badge">rendus ResultsPanel : {renders}</span>
      <p>Dernier résultat : <strong>{lastResult || '—'}</strong></p>
      <button onClick={() => onSearch('react')}>Rechercher "react"</button>
      <button onClick={() => onSearch('hooks')}>Rechercher "hooks"</button>
    </div>
  )
})

export default ResultsPanel
