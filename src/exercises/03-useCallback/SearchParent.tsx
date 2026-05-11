import { useState } from 'react'
import { useRenderCount } from '../../hooks/useRenderCount'
import ResultsPanel from './ResultsPanel'

// TODO: `ResultsPanel` est déjà enveloppé dans React.memo, donc il ne devrait
// se re-rendre que lorsque ses props changent. Mais `onSearch` est recréée à
// chaque rendu de ce composant parent, lui donnant une nouvelle référence à
// chaque fois — ce qui empêche le memo de ResultsPanel de fonctionner.
// Enveloppez `onSearch` dans `useCallback` pour que sa référence reste stable
// entre les rendus, sauf si ses dépendances changent.

function SearchParent() {
  const [query, setQuery] = useState('')
  const [lastResult, setLastResult] = useState('')
  const renders = useRenderCount()

  const onSearch = (term: string) => {
    setLastResult(`Results for "${term}"`)
  }

  return (
    <div className="exercise-demo">
      <span className="render-badge parent-badge">rendus SearchParent : {renders}</span>

      <div className="controls">
        <label>
          Tapez quelque chose (force le re-rendu du parent) :&nbsp;
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="tapez ici…"
          />
        </label>
      </div>

      <p className="hint">
        Tapez dans le champ pour re-rendre le parent, puis cliquez sur l'un des
        boutons de recherche. Remarquez que <code>ResultsPanel</code> se re-rend
        à chaque frappe même si sa prop <code>onSearch</code> n'a pas changé logiquement.
      </p>

      <ResultsPanel onSearch={onSearch} lastResult={lastResult} />
    </div>
  )
}

export default SearchParent
