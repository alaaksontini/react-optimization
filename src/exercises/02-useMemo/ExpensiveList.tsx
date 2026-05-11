import { useState } from 'react'
import { useRenderCount } from '../../hooks/useRenderCount'

function expensiveCalc(n: number): number {
  let result = n
  for (let i = 0; i < 100_000; i++) {
    result = result + Math.sqrt(i)
  }
  return Math.round(result)
}

// TODO: À chaque frappe dans le champ de filtrage, la liste complète de 500
// nombres est recalculée — même si `multiplier` n'a pas changé.
// Enveloppez le calcul dans `useMemo` pour qu'il ne se recalcule que lorsque
// `multiplier` change vraiment.

function ExpensiveList() {
  const [multiplier, setMultiplier] = useState(1)
  const [filter, setFilter] = useState('')
  const renders = useRenderCount()

  const numbers = Array.from({ length: 500 }, (_, i) =>
    expensiveCalc((i + 1) * multiplier),
  )

  const visible = numbers.filter(n => String(n).includes(filter))

  return (
    <div className="exercise-demo">
      <span className="render-badge">rendus : {renders}</span>

      <div className="controls">
        <label>
          Multiplicateur :&nbsp;
          <input
            type="number"
            min={1}
            max={10}
            value={multiplier}
            onChange={e => setMultiplier(Number(e.target.value))}
            style={{ width: 60 }}
          />
        </label>
        <label>
          Filtrer les résultats :&nbsp;
          <input
            type="text"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            placeholder="ex. 42"
            style={{ width: 120 }}
          />
        </label>
      </div>

      <p className="hint">
        Tapez quelque chose dans "Filtrer les résultats". La page devient lente —
        <code>expensiveCalc</code> s'exécute 500 fois à chaque frappe même si
        <code>multiplier</code> n'a pas changé.
      </p>

      <p>Affichage de {visible.length} / 500 résultats</p>
      <ul className="number-list">
        {visible.slice(0, 20).map((n, i) => (
          <li key={i}>{n}</li>
        ))}
        {visible.length > 20 && <li>…et {visible.length - 20} de plus</li>}
      </ul>
    </div>
  )
}

export default ExpensiveList
