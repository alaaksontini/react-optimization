import { useRenderCount } from '../../hooks/useRenderCount'

const ITEMS = Array.from({ length: 200 }, (_, i) => `Élément du tableau de bord #${i + 1}`)

function HeavyDashboard() {
  const renders = useRenderCount()

  return (
    <div className="heavy-dashboard">
      <span className="render-badge">rendus HeavyDashboard : {renders}</span>
      <p>Voici un composant volumineux — imaginez qu'il contient des graphiques, des tableaux et des dépendances lourdes.</p>
      <ul className="number-list">
        {ITEMS.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default HeavyDashboard
