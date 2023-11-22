import React from 'react'
import { IconQuestionMark, IconBulb, IconSearch, IconLayersSubtract, IconCode, IconHierarchy2 } from '@tabler/icons-react'
import ProjectHero from './ProjectHero/ProjectHero';

function Freyja(props) {
  const timelineSteps = [
    {
      icon: <IconSearch size={32} strokeWidth={1.5} />, 
      title: 'Recherche',
      description: String.raw`- Étude de l'existant
      - Analyse des besoins
      - Personas et scénarii d'utilisation`,
    },
    {
      icon: <IconHierarchy2 size={32} strokeWidth={1.5} />, 
      title: 'Définition',
      description: String.raw`- Modèle de tâches
      - Modèle de navigation`,
    },
    {
      icon: <IconBulb size={32} strokeWidth={1.5} />, 
      title: 'Idéation',
      description: String.raw`- Maquette « Low Fidelity »
      `,
    },
    {
      icon: <IconLayersSubtract size={32} strokeWidth={1.5} />, 
      title: 'Prototypage',
      description: String.raw`- Maquette « High Fidelity »
      `,
    },
    {
      icon: <IconCode size={32} strokeWidth={1.5} />,
      title: 'Réalisation',
      description: String.raw`- Développement web
      - Tests utilisateurs
      `,
    },
  ];


  return (
    <div>
      <ProjectHero 
        
      />
    </div>
  )
}

export default Freyja