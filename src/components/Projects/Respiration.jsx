import React from 'react'
import { IconQuestionMark, IconBulb, IconSearch, IconLayersSubtract, IconCode, IconHierarchy2 } from '@tabler/icons-react'
import RespirationImg from "../../assets/project_respiration.jpg"
import ProjectCard from '../Reusable/ProjectCard/ProjectCard';
import projects from '../../projects';
import Cotes from "../../assets/respiration/cotes_ouvert.png";
import Piece from "../../assets/respiration/piece_scifi.png";
import Popup from "../../assets/respiration/popup2.png"
import OtherProjects from '../Reusable/OtherProjects/OtherProjects';
import ProjectHero from './ProjectHero/ProjectHero';

function Respiration() {
  const timelineSteps = [
    {
      icon: <IconSearch size={32} strokeWidth={1.5} />, 
      title: 'Recherche',
      description: String.raw`- Connaissance des utilisateurs cibles`
    },
    {
      icon: <IconHierarchy2 size={32} strokeWidth={1.5} />, 
      title: 'Définition',
      description: String.raw`- Objectifs pédagogiques`,
    },
    {
      icon: <IconBulb size={32} strokeWidth={1.5} />, 
      title: 'Idéation',
      description: String.raw`- Scénario
      - User Story
      `,
    },
    {
      icon: <IconLayersSubtract size={32} strokeWidth={1.5} />, 
      title: 'Prototypage',
      description: String.raw`- Maquette « Low Fidelity »
      - Tests utilisateurs
      `,
    },
    {
      icon: <IconCode size={32} strokeWidth={1.5} />,
      title: 'Réalisation',
      description: String.raw`- Développement
      - Tests utilisateurs
      `,
    },
  ];

  return (
    <div>
      {/* HERO */}
      <ProjectHero 
        img={RespirationImg}
        project="La Respiration"
        desc="Conception et Développement d'un environnement virtuel permettant à des élèves de 5e de mieux comprendre la respiration."
        cadre="Projet universitaire en groupe de VR"
        temps="2 mois"
        outils="Figma, Blender, Unity 3D"
      />

      {/* PRESENTATION */}
      <section className='container two-cols'>
        <div className='flex flex-col items-center flex-1'>
          <IconQuestionMark size={50}/>
          <h2>Problème</h2>
          <p>Des outils immersifs peuvent permettre de mieux percevoir le fonctionnement de nombreuses choses, notamment du vivant. C'est pourquoi un collège à proximité de Nancy a fait appel à l'Université de Lorraine pour réaliser des applications en réalité virtuelle ou augmentée reprenant des concepts de cours.</p>
        </div>

        <div className='flex flex-col items-center flex-1'>
          <IconBulb size={50}/>
          <h2>Solution</h2>
          <p>Le groupe dans lequel j'étais a réalisé une application de réalité virtuelle, permettant de répondre à la problématique de la connaissance du fonctionnement des muscles du diaphragme, des côtes et du gonflement des poumons. Designée pour un public de 5e au collège, cette application immersive permet de voir les mouvements respiratoires et d'en apprendre plus sur les différents organes.</p>
        </div>
      </section>

      {/* REALISATION */}
      <div className='light_background'>
        <section className='container'>
          <h1>Réalisation</h1>
          <h2>Environnement 3D</h2>
          <div className='two-cols'>
            <div className='flex-1'>
              <h3>Nos choix de représentation</h3>
              <p>
                Nous avons délibérément choisi de représenter un modèle humain en transparence, offrant ainsi une vue détaillée des poumons et de la cage thoracique. Cette approche immersive permet aux élèves de visualiser en temps réel les mécanismes complexes de la respiration, offrant une compréhension approfondie du fonctionnement du système respiratoire.
              </p>
              <p>
                De manière interactive, les utilisateurs ont également la possibilité de retirer la cage thoracique, offrant ainsi une perspective encore plus détaillée des poumons en action. Cette fonctionnalité permet aux élèves de mieux saisir les relations anatomiques et de visualiser les changements internes qui se produisent lors de l'inspiration et de l'expiration.
              </p>
              <p>
                En plus de l'aspect visuel, notre projet 'La Respiration' propose des affichages informatifs et des anecdotes amusantes directement intégrés à l'environnement virtuel. Ces informations supplémentaires permettent d'enrichir l'expérience éducative en fournissant des détails sur les poumons, les côtes, et d'autres aspects liés à la respiration.
              </p>
            </div>
            <div className='flex-1'>
              <img src={Cotes} alt="Modèle 3D du buste" className='max-w-xs mb-8'/>
              <img src={Popup} alt="Popup donnant des indications sur les poumons" className='max-w-xs'/>
            </div>
          </div>

          <div className='two-cols mt-16'>
            <div className='flex-1'>
              <img src={Piece} alt="Environnement virtuel 3D (pièce futuriste)" />
            </div>
            <div className='flex-1'>
              <h3>Technologies utilisées</h3>
              <p>Pour réaliser ce projet nous avons utilisé Blender pour adapter le modèle 3D à partir de modèles trouvés dans des librairie. Il était par exemple nécessaire de découper les côtes pour leur mouvement.</p>
              <p>L'environnement virtuel a été réalisé sur Unity 3D.</p>
            </div>
          </div>

          <h2 className='mt-16'>Tests utilisateurs</h2>
          <p>Nous avons eu la chance de faire tester notre environnement virtuel a une classe d'élèves de 5e, ce qui nous a permis d'avoir des retours sur cette environnement ainsi que de son utilité.</p>
          <p>Pour évaluer l'utilisabilié de l'environnement virtuel, nous avons utilisé le test System Usability Scale de Brooke. Les élèves étaient finalement plutôt satisfaits. Ils ont notamment évoqué une meilleure compréhension de l'implication et du fonctionnement des organes dans la respiration. Des problèmes dans les interactions ont aussi été relevés, ce qui donne des pistes d'amélioration à notre projet.</p>
        </section>
      </div>


      <OtherProjects current_project="respiration" />
    </div>
  )
}

export default Respiration