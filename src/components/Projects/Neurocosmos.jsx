import React from 'react'
import { IconQuestionMark, IconBulb, IconSearch, IconLayersSubtract, IconCode, IconHierarchy2 } from '@tabler/icons-react'
import NeurocosmosImg from "../../assets/project_neurocosmo.jpg"
import ObjectifsPeda from "../../assets/neurocosmos/objectifs.png"
import Maquette from "../../assets/neurocosmos/maquette_neurocosmo.jpg"
import Scenario from "../../assets/neurocosmos/scénario_neurocosmo.jpg"
import UserStory from "../../assets/neurocosmos/user_story_neurocosmo.jpg"
import OtherProjects from '../Reusable/OtherProjects/OtherProjects';
import ProjectHero from './ProjectHero/ProjectHero';
import ProjectTimeline from '../ProjectTimeline/ProjectTimeline'

function Neurocosmos() {

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
    <div className=''>
      {/* HERO */}
      <ProjectHero 
        img={NeurocosmosImg}
        project="Neuro Cosmos"
        desc="Conception et Développement d'un jeu sérieux mêlant neurosciences et aide à la personne pour un public Licence."
        cadre="Projet universitaire"
        temps="24 heures (hackathon)"
        outils="Figma, Genially"
      />

      {/* PRESENTATION */}
      <section className='container two-cols'>
        <div className='flex flex-col items-center flex-1'>
          <IconQuestionMark size={50}/>
          <h2>Problème</h2>
          <p>Les Sciences Cognitives constituent une vaste discipline comprenant de nombreux aspects, interconnectés les uns aux autres. Il est alors intéressant de créer un jeu sérieux combinant deux de ces aspects pour permettre aux étudiants de Licence de mieux comprendre le Master Sciences Cognitives.</p>
        </div>

        <div className='flex flex-col items-center flex-1'>
          <IconBulb size={50}/>
          <h2>Solution</h2>
          <p>Nous avons créé un jeu sérieux lors d'une Game Jam de 24h, permettant de comprendre le lien entre les neurosciences et l'aide à la personne. Pour cela, nous avons fait le choix de traiter du sujet des ICO (Interface Cerveau-Ordinateur) et leur utilisation dans le cas des pathologies motrices.</p>
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
              <p>Au sein de ce projet j'ai eu une double casquette d'UX designer et de développeuse.</p>

              <p>J'ai ainsi participé à la recherche UX pour définir la population cible de notre application et ses besoins, ainsi que la définition des objectifs pédagogiques et l'élaboration de l'User Story. Lors de la phase de réalisation, j'ai participé au développement de l'application et aux tests utilisateurs.</p>
            </div>
          </div>
        </section>
      </div>

      {/* RECHERCHE */}
      <section className='container' id="research">
        <h1>Recherche</h1>
        <p>
          Étant donné le temps très court qui nous a été alloué pour ce projet (24h), la phase de recherche UX a été très courte et a consisté à prendre en compte le public cible et ses connaissances supposées. Le public cible étant les élèves de la licence précédent notre Master, nous avions ainsi une bonne idée de l'état des connaissances à ce moment.
        </p>
      </section>

      {/* DEFINITION */}
      <div className='light_background' id="definition">
        <section className='container'>
          <h1>Définition</h1>
          <h2>Objectifs pédagogiques</h2>
          <div className='two-cols'>
            <div className='flex-1'>
              <p>
                Neuro Cosmo est un jeu sérieux et a donc pour vocation d'apprendre des concepts en s'amusant. C'est pourquoi des objectifs pédagogiques ont été définis dès le début du projet, nous permettant de mieux orienter notre jeu pour y répondre. L'outil qui a été utilisé est le kit RLG, conçu spécifiquement pour aider à la réalisation de jeux sérieux.
              </p>
              <p>
                Deux objectifs communs pour le jeu ont ainsi été définis :
              </p>
              <ul className=''>
                <li>- comprendre comment les neurosciences peuvent participer à l'aide à la personne</li>
                <li>- savoir travailler en coopération</li>
              </ul>
            </div>
            <div className='flex-1'>
              <img loading='lazy' alt='Utilisation du kit RLG pour la définition des objectifs pédagogiques' src={ObjectifsPeda} />
            </div>
          </div>
        </section>
      </div>

      {/* IDÉATION */}
      <section className='container' id="ideation">
        <h1>Idéation</h1>
        <h2>Scénario d'utilisation</h2>
        <div className='two-cols'>
          <div className='flex-1'>
            <p>
              Malgré le temps restreint qui nous été alloué, la réalisation du scénario d'utilisation nous a permis d'avoir un aperçu des différentes étapes du jeu pour ne pas en oublier par la suite. Cette prise de recul au début du projet nous a finalement permis de gagner du temps par la suite.
            </p>
          </div>
          <div className='flex-1'>
            <img loading="lazy" src={Scenario} alt="Scénario d'utilisation sur tableau blanc" />
          </div>
        </div>
        <h2>User Story</h2>
        <div className='two-cols mt-16'>
          <div className='flex-1'>
            <p>
              L'étape suivante était la réalisation des User Stories du jeu. Il nous était demandé de réaliser un jeu pour 2 joueurs. Ce livrable nous a donc permis de séparer les tâches des deux joueurs et connaître leurs actions : le premier joueur a le rôle de lancer le jeu et de cliquer sur les zones pour placer les électrodes après avoir pris connaissance de la condition du patient. Le second joueur doit enregistrer l'électroencéphalogramme en cliquant lorsqu'un pic d'activité est observé.
            </p>
          </div>
          <div className='flex-1'>
              <img loading='lazy' src={UserStory} alt="User stories sur tableau blanc" className='mb-8'/>
          </div>
        </div>

      </section>

      <div className='light_background' id="prototype">
        <section className='container'>
          <h1>Prototypage</h1>
          <h2>Maquette Low Fidelity (LoFi)</h2>
          <img loading='lazy' src={Maquette} alt='Maquette Lofi réalisée sur tableau blanc' />

          <h2 className='mt-16'>Tests utilisateurs</h2>
          <p>
            Malgré les 24h qui nous ont été allouées pour réaliser ce projet, nous tenions à réaliser des tests utilisateurs sur la maquette afin d'avoir un premier retour sur l'enchaînement logique de nos vues mais aussi la compréhension du jeu. Nous avons donc réalisé un test avec des étudiants, basés sur le parcours dans l'interface et le nombre d'erreurs réalisées. Nous avons aussi pris des retours sur la compréhension de textes.
          </p>

        </section>
      </div>

      <section className='container'>
        <h1>Réalisation</h1>
        <div className='two-cols'>
          <div className='flex-1'>
              <h2>Développement web</h2>
              <p>
                Le projet final a été réalisé sur Genially, un outil en ligne permettant de créer des contenus pédagogiques interactifs. Cet outil est notamment largement utilisé par des enseignants pour réaliser des Escape Game dans le cadre de leurs cours. Genially nous a donc permis de réaliser un jeu en très peu de temps. Cependant, j'ai vite vu les limites de ces outils (utilisation de javascript plus poussé), me menant à utiliser des techniques pour insérer du javascript et aller au bout de notre projet.
              </p>
          </div>
          <div className='flex-1'>
            <h2>Tests utilisateurs</h2>
            <p>De même que pour notre maquette sur tableau, nous voulions avoir un retour utilisateur sur le jeu terminé. Je considère qu'il est important que réaliser des tests utilisateurs, qui permettent d'avoir des retours sur l'utilisation réelle du produit, même si parfois les retours sont à prendre avec des pincettes !</p>
            <p>Nous avons donc réalisé des tests avec un questionnaire inspiré du GEQ (Game Experience Questionnaire), parce qu'il ne faut pas oublier que dans Jeu Sérieux, il y a « Jeu » !</p>
            <p>Ce test nous a permis de confirmer nos hypothèses sur l'efficacité de notre jeu, mais nous a aussi montré que le fun n'était pas très présent dans Neuro Cosmo. Ces avis pourraient être pris en compte dans le cas où nous avions plus de 24h pour ce projet.</p>
          </div>
        </div>
      </section>

      <OtherProjects current_project="neurocosmos" />
    </div>
  )
}

export default Neurocosmos