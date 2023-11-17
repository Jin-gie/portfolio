import React from 'react'
import WeegiftImg from "../../assets/project_weegift.jpg"
import { IconQuestionMark, IconBulb, IconSearch, IconLayersSubtract, IconCode, IconHierarchy2 } from '@tabler/icons-react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import Celine from '../../assets/personas/Persona_Celine.png'
import Iva from '../../assets/personas/Persona_Iva.png'
import Guillaume from '../../assets/personas/Persona_Guillaume.png'
import LofiPaper from '../../assets/maquettes/papier2.png'
import LofiMobile from "../../assets/maquettes/Lofi_mobile.jpg"
import LofiDesktop from "../../assets/maquettes/Lofi_desktop.jpg"
import Colors from "../../assets/maquettes/colors.png"
import Gifty from "../../assets/maquettes/gifty-all.png"
import HifiMobile from "../../assets/maquettes/mockup-mobile.jpg"
import HifiWeb from "../../assets/maquettes/mockup-web.jpg"
import ProjectCard from '../Reusable/ProjectCard/ProjectCard';
import projects from '../../projects';
import OtherProjects from '../Reusable/OtherProjects/OtherProjects';

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <div className=''>
      {/* HERO */}
      <div className='container mt-40'>
        <div className='relative'>
          <img src={WeegiftImg} alt='Mockup of the project Weegift' />
          <div className='absolute top-0 right-0 bg-background-black/[.88] w-1/2 h-full flex flex-col justify-center px-10'>
            <h1 className='mb-0'>WeeGift</h1>
            <p>Conception et Développement d'une application web de gestion de cagnottes avec ou sans cadeaux</p>

            <h2 className='mb-0'>Cadre</h2>
            <p>Projet universitaire de fin d'études</p>

            <h2 className='mb-0'>Temps alloué</h2>
            <p>7 mois (septembre 2022 à mars 2023)</p>

            <h2 className='mb-0'>Outils</h2>
            <p>Figma, Draw.io, ReactJS, Firebase</p>
          </div>
        </div>
      </div>

      {/* PRESENTATION */}
      <section className='container flex justify-between gap-16'>
        <div className='flex flex-col items-center flex-1'>
          <IconQuestionMark size={50}/>
          <h2>Problème</h2>
          <p>Trouver les bons cadeaux, répartir les dépenses, se rembourser. L'organisation d'une cagnotte pour un anniversaire ou un pot de départ par exemple peut se révéler compliquée et de nombreux outils sont nécessaire pour réaliser ces différentes actions.</p>
        </div>

        <div className='flex flex-col items-center flex-1'>
          <IconBulb size={50}/>
          <h2>Solution</h2>
          <p>Nous avons désigné WeeGift, une application web qui permet de regrouper tous les outils nécessaire à l'organisation d'une cagnotte, avec ou sans cadeaux. Du choix des cadeaux, jusqu'au remboursement de tout le monde en passant par la répartition des dépenses, WeeGift permet de simplifier l'organisation de cagnottes.</p>
        </div>
      </section>

      {/* DESIGN PROCESS & CONTRIBUTION*/}
      <div className='light_background' id="design_process">
        <section className='container'>
          <div className='flex gap-16'>
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

              <p>J'ai ainsi participé à la recherche UX pour définir la population cible de notre application et ses besoins. Puis, lors du design de WeeGift j'ai réalisé les différents modèles (tâche et navigation) ainsi que les protocoles de test pour les retours utilisateur. Enfin, lors de la phase de réalisation, j'ai participé au développement de l'application.</p>
            </div>
          </div>
        </section>
      </div>

      {/* RECHERCHE */}
      <section className='container' id="research">
        <h1>Recherche</h1>
        <div className='flex justify-between gap-16'>
          <div className='mb-8'>
            <h2>Étude de l'existant</h2>
            <p>Dans la phase de recherche nous avons dans un premier temps réalisé une étude comparative, nous permettant de mieux cerner l'existant sur le marché, leurs points forts et points faibles. Pour chaque solution, nous avons évalué les fonctionnalités, la navigation et l'interface et design. Les solutions ainsi comparées sont Paypal, Mon Pot Commun, Gift Family et Gift Picker.</p>
          </div>

          <div>
            <h2>Segmentation</h2>
            <p>Bien connaître la population qui pourrait être susceptible d'utiliser une solution telle que WeeGift est essentiel afin de mieux cibler les personnes interrogées pour ensuite réaliser les personas. Nous avons donc réalisé une segmentation de la population à partir des chiffres disponibles sur le web. 3 critères principaux en ressortent : le sexe, l'âge et la catégorie socio-professionnelle </p>
          </div>
        </div>

        <h2>Analyse des besoins</h2>
        <p>pour mieux comprendre les besoins et nous permettre par la suite de réfléchir aux fonctionnalités indispensables de notre application, nous avons réalisé un questionnaire d'analyse des besoins (NAQ).</p>

        <div className='flex justify-center'>
          <Carousel 
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition='all .5'
            transitionDuration={500}
            containerClass='carousel-container-persona'
            deviceType={props.deviceType}
          >
            <div className='w-full'>
              <img src={Iva} alt="Fiche Persona d'Iva"/>
            </div>
            <div className='w-full'>
              <img src={Celine} alt="Fiche Persona de Céline"/>
            </div>
            <div className='w-full'>
              <img src={Guillaume} alt="Fiche Persona de Guillaume"/>
            </div>
          </Carousel>
        </div>
      </section>

      {/* DEFINITION */}
      <div className='light_background' id="definition">
        <section className='container'>
          <h1>Définition</h1>
          <h2>Diagramme de tâches</h2>
          <iframe className='w-full h-[500px] mb-16' src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Mod%C3%A8le%20de%20t%C3%A2ches#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1aOrbM2T4I3u2THVEA4rpGqEDW0SSSb9U%26export%3Ddownload"></iframe>
          <h2>Diagramme de navigation</h2>
          <iframe className='w-full h-[500px]' src="https://viewer.diagrams.net/?highlight=0000ff&nav=1&title=Mod%C3%A8le%20de%20navigation#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1i77GJBaaTAH7N1m986no1q0XhjrARlbo%26export%3Ddownload"></iframe>
        </section>
      </div>

      {/* IDÉATION */}
      <section className='container' id="ideation">
        <h1>Idéation</h1>
        <h2>Maquette Low-Fidelity (LoFi)</h2>
        <div className='flex gap-16 justify-between'>
          <div className='flex-1'>
              <p>
                La première maquette qui a été réalisée pour ce projet est une maquette LoFi, qui a connu plusieurs évolutions. Nous nous sommes dans un premier temps réunies autour d'un atelier de co-conception, en utilisant la méthode “six-to-one” afin de s'accorder sur les différentes vues que nous voulions proposer pour la conception de notre interface, et sur la manière d'organiser les différentes interactions entre les pages.
              </p>
          </div>
          <div className='flex-1'>
              <img src={LofiPaper} alt="Lofi on paper" />
          </div>
        </div>
        <div className='flex gap-16 justify-between mt-16'>
          <div className='flex-1'>
              <img src={LofiMobile} alt="Mockup de la maquette Lofi Mobile" className='mb-8'/>
              <img src={LofiDesktop} alt="Mockup de la maquette Lofi Desktop" />
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
          Les utilisateurs ont trouvé la navigation et la présentation des éléments explicites et faciles d'utilisation. Le score moyen obtenu lors du post-questionnaire est supérieur au jalon de 85,5. Les tâches ont été réalisées dans un temps respectable (moins de 5 minutes au total) et avec une moyenne de 2 erreurs. Ces erreurs ont cependant été réalisées et identifiées comme une mauvaise compréhension de certains éléments des pages. En effet, réaliser ces tests utilisateurs nous a permis d'avoir un retour sur certains termes qui étaient clairs pour nous, mais qui, pour un extérieur, présentent une certaine confusion.
        </p>
      </section>

      <div className='light_background' id="prototype">
        <section className='container'>
          <h1>Prototypage</h1>
          <h2>Charte graphique</h2>
          <div className='flex justify-between gap-16'>
            <div className='flex-1'>
              <p>
                WeeGift possède une personnalité bidimensionnelle. D'une part, WeeGift doit renvoyer une image chaleureuse et joyeuse car notre solution porte sur des cagnottes communes et de la recherche de cadeaux. D'autre part, comme il est question d'argent, son image doit également inspirer le sérieux et la confiance.
              </p>
              <p>
                Nous avons donc fait le choix de représenter ces deux dimensions avec l'utilisation de deux couleurs principales : une teinte plutôt chaude qui renvoie plutôt à un sentiment de joie et une teinte plus froide transmettant la sécurité, l'honnêteté et la confiance. Cette charte graphique permet aussi d'avoir de bons contrastes pour l'accessibilité du site.
              </p>
            </div>
            <div className='flex-1'>
              <img src={Colors} alt='Couleurs utilisées dans Weegift : Coral, Romantic, Pacific Blue, Opal et Magic Mint' />
            </div>
          </div>

          <div className='flex justify-between gap-16 mt-8'>
            <div className='flex-1'>
              <img src={Gifty} alt='Mascotte gifty avec ses émotions (content, joyeux, triste et père noël)' />
            </div>
            <div className='flex-1'>
              <p>
                Dans le but de renforcer la personnalité chaleureuse et heureuse de WeeGift, nous avons décidé de créer une mascotte nommée “Gifty”, aux airs kawaii. Cette mascotte permet d'humaniser le site en créant un lien émotionnel avec les utilisateurs et elle permet à certains endroits de guider les utilisateurs.
              </p>
            </div>
          </div>

          <h2 className='mt-16'>Maquette High-Fidelity (HiFi)</h2>
          <div className='flex justify-between gap-16'>
            <div className='flex-1'>
              <p>La maquette HiFi de WeeGift a été directement réalisée sur Figma et un prototypage (lien entre les différentes pages simulant les clics sur l'interface) a été mis en place afin de mieux se rendre compte du produit fini, mais aussi permettre la réalisation de tests utilisateurs.</p>
            </div>
            <div className='flex-1'>
              <img src={HifiMobile} alt="Mockup de la maquette Hifi Mobile" className='mb-8' />
              <img src={HifiWeb} alt="Mockup de la maquette Hifi Desktop" />
            </div>
          </div>

          <h2 className='mt-16'>Tests utilisateurs</h2>
            <p>Le déroulé des tests utilisateurs était le même que pour la maquette LoFi, avec des participants différents afin d'éviter un biais d'apprentissage.</p>
            <p>Une première analyse s'est faite sur les métriques du temps de réalisation, nombre de clics, nombre d'erreurs. Les utilisateurs tests ont réalisé des temps inférieurs aux temps maximaux définis dans les métriques ainsi qu'un nombre de clic correspondant à ce qui était imaginé. Un score au questionnaire SUS de 82,52 a été obtenu, traduisant des incohérences relevées sur les pages de recommandations de cadeaux.</p>
            <p>Des erreurs ont cependant été observées, nous permettant de mieux comprendre le cheminement de pensée d'utilisateurs qui découvrent notre solution et ainsi de rectifier le tir.</p>

        </section>
      </div>

      <OtherProjects current_project="weegift" />
    </div>
  )
}

export default Weegift