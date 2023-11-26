import React from 'react'
import { IconQuestionMark, IconBulb, IconSearch, IconLayersSubtract, IconCode, IconHierarchy2 } from '@tabler/icons-react'
import ProjectHero from './ProjectHero/ProjectHero';
import FreyjaImg from "../../assets/project_freyja.jpg";
import OtherProjects from '../Reusable/OtherProjects/OtherProjects';
import ProjectTimeline from '../ProjectTimeline/ProjectTimeline';

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
        img={FreyjaImg}
        project="Freyja"
        desc="Conception et développement d'une application web mobile-only de suivi quotidien de la consommation personnelle d'eau"
        cadre="Projet universitaire, réalisé en groupe"
        temps="2 mois"
        outils="Figma, Draw.io, React.js, Directus"
      />

      {/* PRESENTATION */}
      <section className='container two-cols'>
        <div className='flex flex-col items-center flex-1'>
          <IconQuestionMark size={50}/>
          <h2>Problème</h2>
          <p>La problématique principale de ce projet était de réfléchir et développer une application web innovante autour de la santé. Nous avions pour se projet une contrainte de technologies, à savoir utiliser React.js et Directus.</p>
        </div>

        <div className='flex flex-col items-center flex-1'>
          <IconBulb size={50}/>
          <h2>Solution</h2>
          <p>Boire de l'eau en bonne quantité tous les jours est important, c'est pourquoi nous avons réfléchi et conçu une application web permettant de suivre la consommation quotidienne d'eau. L'application Freyja permet aussi de prendre des mesures physiologiques, à l'aide notamment d'une montre connectée, pour adapter les besoins en eau selon un utilisateur donné.</p>
        </div>
      </section>

      {/* DESIGN PROCESS & CONTRIBUTION*/}
      <div className='light_background' id="design_process">
        <section className='container'>
          <div className='two-cols'>
            <div className='flex-1'>
              <h1>Design Process</h1>
              <ProjectTimeline timelineSteps={timelineSteps} />
            </div>
            <div className='flex-1'>
              <h1>Ma Contribution</h1>
              <p>Au sein de ce projet j'ai majoritairement contribué à la phase de recherche et de développement.</p>

              <p>J'ai ainsi participé à la recherche UX en réalisant une étude de l'existant, puis la définition des besoins utilisateurs. Lors de la phase de définition, j'ai aidé à la réalisation des modèles de l'application. Enfin, lors de la phase de réalisation, j'ai participé au développement de l'application.</p>
            </div>
          </div>
        </section>
      </div>

      <OtherProjects project_to_show="weegift" />
    </div>
  )
}

export default Freyja