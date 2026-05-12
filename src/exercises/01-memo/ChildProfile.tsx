import React from 'react'
import { useRenderCount } from '../../hooks/useRenderCount'

interface ChildProfileProps {
  theme: 'light' | 'dark'
}

// TODO: Ce composant ne dépend que de la prop `theme`, mais il se re-rend à
// chaque fois que l'état `count` du parent change. Enveloppez ce composant
// dans React.memo pour qu'il ne se re-rende que lorsque `theme` change vraiment.

function ChildProfile({ theme }: ChildProfileProps) {
  const renders = useRenderCount()

  return (
    <div className={`profile-card theme-${theme}`}>
      <span className="render-badge">rendus : {renders}</span>
      <p>Profil utilisateur</p>
      <p>Thème : <strong>{theme}</strong></p>
    </div>
  )
}

export default React.memo(ChildProfile)
