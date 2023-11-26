import React from 'react'
import WeegiftImg from "../../assets/project_weegift.jpg"
import { IconQuestionMark, IconBulb, IconSearch, IconLayersSubtract, IconCode, IconHierarchy2 } from '@tabler/icons-react'
import 'react-multi-carousel/lib/styles.css'
import LofiPaper from '../../assets/maquettes/papier2.png'
import LofiMobile from "../../assets/maquettes/Lofi_mobile.jpg"
import LofiDesktop from "../../assets/maquettes/Lofi_desktop.jpg"
import Colors from "../../assets/maquettes/colors.png"
import Gifty from "../../assets/maquettes/gifty-all.png"
import HifiMobile from "../../assets/maquettes/mockup-mobile.jpg"
import HifiWeb from "../../assets/maquettes/mockup-web.jpg"
import OtherProjects from '../Reusable/OtherProjects/OtherProjects';
import ProjectHero from './ProjectHero/ProjectHero';
import ProjectTimeline from '../ProjectTimeline/ProjectTimeline';

function Weegift(props) {
  const timelineSteps = [
    {
      icon: <IconSearch size={32} strokeWidth={1.5} />, 
      title: 'Recherche',
      description: String.raw`- Étude de l'existant
      - Segmentation de la population
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
      - Tests utilisateurs
      `,
    },
    {
      icon: <IconLayersSubtract size={32} strokeWidth={1.5} />, 
      title: 'Prototypage',
      description: String.raw`- Maquette « High Fidelity »
      - Tests utilisateurs
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
    <div className=''>
      {/* HERO */}
      <ProjectHero 
        img={WeegiftImg}
        project="WeeGift"
        desc="Conception et développement d'une application web de gestion de cagnottes avec ou sans cadeaux"
        cadre="Projet universitaire de fin d'études, réalisé en groupe"
        temps="7 mois (septembre 2022 à mars 2023)"
        outils="Figma, Draw.io, React.js, Firebase"
      />

      {/* PRESENTATION */}
      <section className='container two-cols'>
        <div className='flex flex-col items-center flex-1'>
          <IconQuestionMark size={50}/>
          <h2>Problème</h2>
          <p>Trouver les bons cadeaux, répartir les dépenses, se rembourser. L'organisation d'une cagnotte pour un anniversaire ou un pot de départ par exemple peut se révéler compliquée et de nombreux outils sont nécessaires pour réaliser ces différentes actions.</p>
        </div>

        <div className='flex flex-col items-center flex-1'>
          <IconBulb size={50}/>
          <h2>Solution</h2>
          <p>Nous avons designé WeeGift, une application web qui permet de regrouper tous les outils nécessaire à l'organisation d'une cagnotte, avec ou sans cadeaux. Du choix des cadeaux, jusqu'au remboursement de tout le monde en passant par la répartition des dépenses, WeeGift permet de simplifier l'organisation de cagnottes.</p>
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

              <p>J'ai ainsi participé à la recherche UX pour définir la population cible de notre application et ses besoins. Puis, lors du design de WeeGift j'ai réalisé les différents modèles (tâche et navigation) ainsi que les protocoles de test pour les retours utilisateur. Enfin, lors de la phase de réalisation, j'ai participé au développement de l'application web.</p>
            </div>
          </div>
        </section>
      </div>

      {/* RECHERCHE */}
      <section className='container' id="research">
        <h1>Recherche</h1>
        <div className='two-cols mb-16'>
          <div className='flex-1'>
            <h2>Étude de l'existant</h2>
            <p>Dans la phase de recherche nous avons dans un premier temps réalisé une étude comparative, nous permettant de mieux cerner l'existant sur le marché, leurs points forts et points faibles. Pour chaque solution, nous avons évalué les fonctionnalités, la navigation et l'interface et design. Les solutions ainsi comparées sont Paypal, Mon Pot Commun, Gift Family et Gift Picker.</p>
          </div>

          <div className='flex-1'>
            <h2>Segmentation</h2>
            <p> Il a été nécessaire de bien connaître la population qui pourrait être susceptible d'utiliser une solution telle que Weegift. Cela a permis de mieux cibler les personnes interrogées pour ensuite concevoir les personas. Nous avons donc réalisé une segmentation de la population à partir des chiffres disponibles sur le web. 3 critères principaux en ressortent : le sexe, l'âge et la catégorie socio-professionnelle </p>
          </div>
        </div>

        <h2>Analyse des besoins</h2>
        <p>Pour mieux comprendre les besoins et nous permettre par la suite de réfléchir aux fonctionnalités indispensables de notre application, nous avons réalisé un questionnaire d'analyse des besoins (NAQ).</p>
      </section>

      {/* DEFINITION */}
      <div className='light_background' id="definition">
        <section className='container'>
          <h1>Définition</h1>
          <h2>Diagramme de tâches</h2>
          <iframe className='w-full h-[500px] mb-16' title="Diagramme de tâches" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Mod%C3%A8le%20de%20t%C3%A2ches#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1aOrbM2T4I3u2THVEA4rpGqEDW0SSSb9U%26export%3Ddownload"></iframe>
          <h2>Diagramme de navigation</h2>
          <iframe className='w-full h-[500px]' title="Diagramme de navigation" src="https://viewer.diagrams.net/?highlight=0000ff&nav=1&title=Mod%C3%A8le%20de%20navigation#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1i77GJBaaTAH7N1m986no1q0XhjrARlbo%26export%3Ddownload"></iframe>
        </section>
      </div>

      {/* IDÉATION */}
      <section className='container' id="ideation">
        <h1>Idéation</h1>
        <h2>Maquette Low-Fidelity (LoFi)</h2>
        <div className='two-cols'>
          <div className='flex-1'>
              <p>
                La première maquette qui a été réalisée pour ce projet est une maquette LoFi, qui a connu plusieurs évolutions. Nous nous sommes dans un premier temps réunies autour d'un atelier de co-conception, en utilisant la méthode “six-to-one”. Cet atelier nous a permis de s'accorder sur les différentes vues que nous voulions proposer pour la conception de notre interface et sur la manière d'organiser les différentes interactions entre les pages.
              </p>
          </div>
          <div className='flex-1'>
              <img loading='lazy' src={LofiPaper} alt="Lofi on paper" />
          </div>
        </div>
        <div className='two-cols mt-16'>
          <div className='flex-1'>
              <img loading='lazy' src={LofiMobile} alt="Mockup de la maquette Lofi Mobile" className='mb-8'/>
              <img loading='lazy' src={LofiDesktop} alt="Mockup de la maquette Lofi Desktop" />
          </div>
          <div className='flex-1'>
              <p>
                Nous avons ensuite réalisé la LoFi sur Figma pour un résultat plus clair et accessible de n'importe où. Cette seconde maquette LoFi comporte cette fois des vues ordinateur et des vues mobile.
              </p>
              <p>
                Dans chaque test, nous avons veillé à réaliser les passations sur une population de test correspondant au mieux à nos personas, afin d'avoir des tests les plus représentatifs possibles de notre population cible. Nous avons aussi veillé à ce que les personnes réalisant les tests sur une étape du projet ne réalise pas les tests sur une autre étape par le suite, afin d'éviter un biais d'apprentissage de l'interface de WeeGift, ce qui pourrait fausser les résultats sur la facilité d'utilisation.
              </p>
          </div>
        </div>

        <h2 className='mt-16'>Tests utilisateurs</h2>
        <p>
          Les utilisateurs ont trouvé la navigation et la présentation des éléments explicites et faciles d'utilisation. Différentes métriques ont été utilisées (temps de parcours, nombre d'erreurs, etc.). Réaliser ces tests utilisateurs nous a permis d'avoir un retour sur certains termes qui étaient clairs pour nous, mais qui, pour un extérieur, présentent une certaine confusion.
        </p>
      </section>

      <div className='light_background' id="prototype">
        <section className='container'>
          <h1>Prototypage</h1>
          <h2>Charte graphique</h2>
          <div className='two-cols'>
            <div className='flex-1'>
              <p>
                WeeGift possède une personnalité bidimensionnelle. D'une part, WeeGift doit renvoyer une image chaleureuse et joyeuse car notre solution porte sur des cagnottes communes et de la recherche de cadeaux. D'autre part, comme il est question d'argent, son image doit également inspirer le sérieux et la confiance.
              </p>
              <p>
                Nous avons donc fait le choix de représenter ces deux dimensions avec l'utilisation de deux couleurs principales : une teinte plutôt chaude qui renvoie plutôt à un sentiment de joie et une teinte plus froide transmettant la sécurité, l'honnêteté et la confiance. Cette charte graphique permet aussi d'avoir de bons contrastes pour l'accessibilité du site.
              </p>
            </div>
            <div className='flex-1'>
              <img loading='lazy' src={Colors} alt='Couleurs utilisées dans Weegift : Coral, Romantic, Pacific Blue, Opal et Magic Mint' />
            </div>
          </div>

          <div className='two-cols mt-8'>
            <div className='flex-1'>
              <img loading='lazy' src={Gifty} alt='Mascotte gifty avec ses émotions (content, joyeux, triste et père noël)' />
            </div>
            <div className='flex-1'>
              <p>
                Dans le but de renforcer la personnalité chaleureuse et heureuse de WeeGift, nous avons décidé de créer une mascotte nommée “Gifty”, aux airs kawaii. Cette mascotte permet d'humaniser le site en créant un lien émotionnel avec les utilisateurs et elle permet à certains endroits de guider les utilisateurs.
              </p>
            </div>
          </div>

          <h2 className='mt-16'>Maquette High-Fidelity (HiFi)</h2>
          <div className='two-cols'>
            <div className='flex-1'>
              <p>La maquette HiFi de WeeGift a été directement réalisée sur Figma et un prototypage (lien entre les différentes pages simulant les clics sur l'interface) a été mis en place afin de mieux se rendre compte du produit fini, mais aussi permettre la réalisation de tests utilisateurs.</p>
            </div>
            <div className='flex-1'>
              <img loading='lazy' src={HifiMobile} alt="Mockup de la maquette Hifi Mobile" className='mb-8' />
              <img loading='lazy' src={HifiWeb} alt="Mockup de la maquette Hifi Desktop" />
            </div>
          </div>

          <h2 className='mt-16'>Tests utilisateurs</h2>
            <p>Le déroulé des tests utilisateurs était le même que pour la maquette LoFi, avec des participants différents afin d'éviter un biais d'apprentissage.</p>
            <p>Une première analyse s'est faite sur les métriques du temps de réalisation, nombre de clics, nombre d'erreurs. Puis, nous avons utilisé un questionnaire permettant d'obtenir un score. </p>
            <p>Des erreurs ont été observées, nous permettant de mieux comprendre le cheminement de pensée d'utilisateurs qui découvrent notre solution et ainsi de rectifier le tir.</p>

        </section>
      </div>

      <OtherProjects project_to_show="freyja" />
    </div>
  )
}

export default Weegift