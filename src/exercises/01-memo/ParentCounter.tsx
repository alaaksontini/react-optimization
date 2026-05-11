import { useState } from 'react'
import { useRenderCount } from '../../hooks/useRenderCount'
import ChildProfile from './ChildProfile'

function ParentCounter() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const renders = useRenderCount()

  return (
    <div className="exercise-demo">
      <span className="render-badge parent-badge">rendus parent : {renders}</span>

      <div className="controls">
        <button onClick={() => setCount(c => c + 1)}>
          Incrémenter le compteur : {count}
        </button>
        <button onClick={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}>
          Changer le thème
        </button>
      </div>

      <p className="hint">
        Cliquez sur "Incrémenter le compteur" et observez combien de fois <code>ChildProfile</code> se
        re-rend — même si sa prop <code>theme</code> n'a pas changé.
      </p>

      <ChildProfile theme={theme} />
    </div>
  )
}

export default ParentCounter
