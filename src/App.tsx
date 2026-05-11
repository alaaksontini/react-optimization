import './App.css'
import ParentCounter from './exercises/01-memo/ParentCounter'
import ExpensiveList from './exercises/02-useMemo/ExpensiveList'
import SearchParent from './exercises/03-useCallback/SearchParent'
import AppShell from './exercises/04-lazy/AppShell'

interface ExerciseProps {
  number: number
  title: string
  concept: string
  description: string
  children: React.ReactNode
}

function Exercise({ number, title, concept, description, children }: ExerciseProps) {
  return (
    <section className="exercise">
      <header className="exercise-header">
        <span className="exercise-number">Exercise {number}</span>
        <h2>{title}</h2>
        <span className="concept-tag">{concept}</span>
        <p className="exercise-description">{description}</p>
      </header>
      <div className="exercise-body">{children}</div>
    </section>
  )
}

function App() {
  return (
    <div className="lesson">
      <header className="lesson-header">
        <h1>Optimisation des performances React</h1>
        <p>
          Chaque exercice ci-dessous contient un composant volontairement mal écrit. Utilisez
          le badge de comptage de rendus pour observer les re-rendus inutiles, lisez le
          commentaire <code>TODO</code> dans le fichier source, puis appliquez la bonne
          optimisation.
        </p>
      </header>

      <Exercise
        number={1}
        title="Éviter les re-rendus inutiles d'un composant enfant"
        concept="React.memo"
        description={`ChildProfile ne dépend que de la prop "theme", mais il se re-rend à chaque
          fois que le compteur du parent change. Corrigez-le en enveloppant ChildProfile dans React.memo.`}
      >
        <ParentCounter />
      </Exercise>

      <Exercise
        number={2}
        title="Mettre en cache un calcul coûteux"
        concept="useMemo"
        description={`La liste de 500 nombres est recalculée à chaque rendu — même quand vous tapez
          simplement dans le champ de filtrage. Corrigez-le en enveloppant le calcul dans useMemo.`}
      >
        <ExpensiveList />
      </Exercise>

      <Exercise
        number={3}
        title="Stabiliser la référence d'une fonction callback"
        concept="useCallback"
        description={`ResultsPanel est déjà enveloppé dans React.memo, mais il se re-rend à chaque
          frappe clavier car sa prop onSearch reçoit une nouvelle référence de fonction à chaque rendu.
          Corrigez-le en enveloppant onSearch dans useCallback dans SearchParent.`}
      >
        <SearchParent />
      </Exercise>

      <Exercise
        number={4}
        title="Découpage du code avec le chargement différé"
        concept="React.lazy"
        description={`HeavyDashboard est importé de façon statique, donc son code est chargé
          immédiatement au démarrage, même s'il n'est pas visible. Corrigez-le en convertissant
          l'import en React.lazy pour que le code ne soit chargé qu'au clic sur "Afficher le tableau de bord".`}
      >
        <AppShell />
      </Exercise>
    </div>
  )
}

export default App
