import { Suspense, useState } from 'react'
import HeavyDashboard from './HeavyDashboard'

// TODO: `HeavyDashboard` est importé de façon statique, ce qui signifie qu'il
// est inclus dans le bundle et chargé immédiatement même si l'utilisateur n'a
// pas encore cliqué sur "Afficher le tableau de bord".
//
// Étapes pour corriger :
//   1. Supprimez l'import statique ci-dessus.
//   2. Remplacez-le par :  const HeavyDashboard = React.lazy(() => import('./HeavyDashboard'))
//   3. Le wrapper <Suspense> est déjà en place ci-dessous — assurez-vous simplement
//      que React.lazy est importé depuis 'react'.

function AppShell() {
  const [show, setShow] = useState(false)

  return (
    <div className="exercise-demo">
      <div className="controls">
        <button onClick={() => setShow(s => !s)}>
          {show ? 'Masquer' : 'Afficher'} le tableau de bord
        </button>
      </div>

      <p className="hint">
        Ouvrez l'onglet Réseau de votre navigateur et rechargez la page. Remarquez
        que le code du tableau de bord est chargé immédiatement — avant même que
        vous cliquiez sur le bouton. Après votre correction, le chunk ne devrait
        apparaître dans l'onglet Réseau qu'au clic sur "Afficher le tableau de bord".
      </p>

      <Suspense fallback={<p>Chargement du tableau de bord…</p>}>
        {show && <HeavyDashboard />}
      </Suspense>
    </div>
  )
}

export default AppShell
