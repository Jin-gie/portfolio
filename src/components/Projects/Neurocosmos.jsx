import React from 'react'
import { IconQuestionMark, IconBulb, IconSearch, IconLayersSubtract, IconCode, IconHierarchy2 } from '@tabler/icons-react'
import projects from '../../projects';
import ProjectCard from '../Reusable/ProjectCard/ProjectCard';
import NeurocosmosImg from "../../assets/project_neurocosmo.jpg"
import ObjectifsPeda from "../../assets/neurocosmos/objectifs.png"
import Maquette from "../../assets/neurocosmos/maquette_neurocosmo.jpg"
import Scenario from "../../assets/neurocosmos/scénario_neurocosmo.jpg"
import UserStory from "../../assets/neurocosmos/user_story_neurocosmo.jpg"
import OtherProjects from '../Reusable/OtherProjects/OtherProjects';

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
      <div className='container mt-40'>
        <div className='relative'>
          <img src={NeurocosmosImg} alt='Screen from the game Neurocosmos' />
          <div className='absolute top-0 right-0 bg-background-black/[.88] w-1/2 h-full flex flex-col justify-center px-10'>
            <h1 className='mb-0'>Neuro Cosmos</h1>
            <p>Conception et Développement d'un jeu sérieux mêlant neurosciences et aide à la personne pour un public Licence.</p>

            <h2 className='mb-0'>Cadre</h2>
            <p>Projet universitaire</p>

            <h2 className='mb-0'>Temps alloué</h2>
            <p>24 heures</p>

            <h2 className='mb-0'>Outils</h2>
            <p>Figma, Genially</p>
          </div>
        </div>
      </div>

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
          <p>Nous avons créé un jeu sérieux lors d'une Game Jam de 24h, permettant de comprendre le lien entre les neurosciences et l'aide à la personne. Pour cela, nous avons fait le choix de traiter du sujet des BCI (Brain-Computer-Interface) et leur utilisation dans le cas des pathologies motrices.</p>
        </div>
      </section>

      {/* DESIGN PROCESS & CONTRIBUTION*/}
      <div className='light_background' id="design_process">
        <section className='container'>
          <div className='two-cols'>
            <div className='flex-1'>
              <h1>Design Process</h1>
              {timelineSteps.map((step, index) => {
                return (
                  <div className="flex mb-8" key={index}>
                    <div className="text-center mr-4">
                      <div className="bg-background-black text-white rounded-full p-4">
                        {step.icon}
                      </div>
                    </div>
                    <div className="w-4/5">
                      <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                      <p className="text-gray-400" dangerouslySetInnerHTML={{ __html: step.description.replace(/\n/g, '<br>') }} />
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='flex-1'>
              <h1>Ma Contribution</h1>
              <p>Au sein de ce projet j'ai eu une double casquette d'UX designer et de développeur.</p>

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
                2 objectifs communs pour le jeu ont ainsi été définis :
              </p>
              <ul className=''>
                <li>- comprendre comment les neurosciences peuvent participer à l'aide à la personne</li>
                <li>- savoir travailler en coopération</li>
              </ul>
              <p>
                De manière plus précise, le premier objectif a été détaillé en « comprendre le lien entre placement des électrodes et l'analyse des signaux dans le cas d'une pathologie motrice ». Ce concept est en effet à la base des BCI (Brain-Computer-Interface), sujet que l'on a décidé de traiter, et est donc important à comprendre à notre sens.
              </p>
            </div>
            <div className='flex-1'>
              <img alt='Utilisation du kit RLG pour la définition des objectifs pédagogiques' src={ObjectifsPeda} />
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
            <img src={Scenario} alt="Scénario d'utilisation sur tableau blanc" />
          </div>
        </div>
        <h2>User Story</h2>
        <div className='two-cols mt-16'>
          <div className='flex-1'>
            <p>
              L'étape suivante était la réalisation des User Stories du jeu. Il nous était demandé de réaliser un jeu pour 2 joueurs. Ce livrable nous a donc permis de séparer les tâches des deux joueurs et connaître leurs actions : le premier joueur a le rôle de lancer le jeu et de cliquer sur les zones pour placer les électrodes après avoir pris connaissance de la condition du patient, alors que le second joueur doit enregistrer l'électroencéphalogramme en cliquant lorsqu'un pic d'activité est observé.
            </p>
          </div>
          <div className='flex-1'>
              <img src={UserStory} alt="User stories sur tableau blanc" className='mb-8'/>
          </div>
        </div>

      </section>

      <div className='light_background' id="prototype">
        <section className='container'>
          <h1>Prototypage</h1>
          <h2>Maquette Low Fidelity (LoFi)</h2>
          <img src={Maquette} alt='Maquette Lofi réalisée sur tableau blanc' />

          <h2 className='mt-16'>Tests utilisateurs</h2>
          <p>
            Malgré les 24h qui nous ont été allouées pour réaliser ce projet, nous tenions à réaliser des tests utilisateurs sur la maquette afin d'avoir un premier retour sur l'enchaînement logique de nos vues mais aussi la compréhension du jeu. Nous avons donc réalisé un test avec des étudiants présents dans les couloirs, basés sur le parcours dans l'interface et le nombre d'erreurs réalisées. Nous avons aussi pris des retours sur la compréhension de textes.
          </p>

        </section>
      </div>

      <section className='container'>
        <h1>Réalisation</h1>
        <div className='two-cols'>
          <div className='flex-1'>
              <h2>Développement web</h2>
              <p>
                Le projet final a été réalisé sur Genially, un outil en ligne permettant de créer des contenus pédagogiques interactifs. Cet outil est notamment largement utilisé par des enseignants pour réaliser des Escape Game dans le cadre de leurs cours. Cet outil nous a donc permis de réaliser un jeu en très peu de temps. Cependant, j'ai vite vu les limites de ces outils (utilisation de javascript plus poussé), ce qui m'a poussée à utiliser des techniques pour insérer du javascript et aller au bout de notre projet.
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

      <div className='light_background'>
        <section className='container'>
          <h1>Ce que j'ai appris</h1>
          <p>
            Travailler vite et bien. Plus sérieusement, ce projet très court m'a permis de me rendre compte de l'importance d'une gestion de projet très carrée et du travail en sprint courts, permettant d'avancer petit à petit mais globalement sur le projet. En effet, le but était d'avoir un jeu qui tournait et qui était jouable, quel que soit le degré de détails et de finitions. Au lieu d'effectuer des finitions sur chaque vue et chaque partie du jeu, j'ai donc ici d'abord développé le jeu globalement, puis travaillé sur des parties de la plus importante à la moins importante.
          </p>
          <p>
            Je me suis aussi rendu compte que même sur un petit projet, l'expérience utilisateur est très utile mais aussi évaluable. Pour faciliter les phases de prototypage et de développement, il nous a été très utile de prendre du temps en début de projet pour réaliser correctement les phases de recherche et d'idéation.
          </p>
        </section>
      </div>

      <OtherProjects current_project="neurocosmos" />
    </div>
  )
}

export default Neurocosmos