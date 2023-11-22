import React from 'react'
import Photo from '../../assets/photo_forme.png'
import ProjectCard from '../Reusable/ProjectCard/ProjectCard'
import projects from '../../projects'
import "./Home.css"
import HomeHeader from "../HomeHeader/HomeHeader"
import PDF from "../../assets/Erin_Bernardoni_CV.pdf";
import ContactForm from '../ContactForm/ContactForm'
import { IconBulb, IconSearch, IconLayersSubtract, IconCode, IconHierarchy2 } from '@tabler/icons-react'
import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaFigma, FaTrello, FaGithub, FaNodeJs, FaLinkedinIn } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import SkillIcon from '../SkillIcon/SkillIcon'

function Home() {
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

  const iconsize = 25;

  return (
    <div>
      {/* HEADER */}
      <header>
        <HomeHeader />
      </header>

      {/* ABOUT */}
      <section className='light_background' id='about'>
        <div className='container flex justify-between items-center'>
          <div className='max-w-[66%]'>
            <h1>À propos de moi</h1>
            <p>Bonjour ! Passionnée depuis de nombreuses années par le numérique, j'ai suivi une formation en informatique et je suis diplômée depuis peu d'un Master en Sciences Cognitives.</p>
            <p className='mb-12'>J'ai conscience de l'importance de prendre en compte le besoin utilisateur lors de la conception de solutions, pour avoir des produits utiles, utilisables et utilisés ! C'est pourquoi je m'assure de créer des interfaces utilisateurs aussi élégantes et intuitives, qu'accessibles pour assurer une expérience utilisateur optimale.</p>
            <a href={PDF} rel='noopener noreferrer' target='_blank' type='button' className='button button__left__right'>
              Mon CV
            </a>
          </div>
          <div>
            <img loading='lazy' src={Photo} alt="Moi" className='grayscale hover:grayscale-0'/>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className='' id='skills'>
      <div className='container'>
        <div>
          <h1>Mes Compétences</h1>
          <div className='two-cols'>
            <div className='flex-1'>
              <h2>Mon Design Process UX</h2>
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
              <h2>Techs & Outils</h2>
              <div className=''>
                <div className='mb-12'>
                  <h3 className="">Frontend</h3>
                  <div className='flex gap-8 flex-wrap'>
                    <SkillIcon icon={<FaHtml5 size={iconsize}/>} name="HTML" />
                    <SkillIcon icon={<FaCss3Alt size={iconsize} />} name="CSS" />
                    <SkillIcon icon={<IoLogoJavascript size={iconsize} />} name="JavaScript" />
                    <SkillIcon icon={<FaReact size={iconsize} />} name="React.js" />
                    <SkillIcon icon={<TbBrandNextjs size={iconsize} />} name="Next.js" />
                    <SkillIcon icon={<SiTailwindcss size={iconsize} />} name="Tailwind CSS" />
                  </div>
                </div>
                <div className='mb-12'>
                  <h3 className="">Backend</h3>
                  <div className='flex gap-8 flex-wrap'>
                    <SkillIcon icon={<FaNodeJs size={iconsize} />} name="Node.js" />
                    <SkillIcon icon={<FaPhp size={iconsize} />} name="PHP" />
                    <SkillIcon icon={<GrMysql size={iconsize} />} name="MySQL" />
                    <SkillIcon icon={<BiLogoPostgresql size={iconsize} />} name="PostgreSQL" />
                  </div>
                </div>
                <div className='mb-12'>
                  <h3 className="">Outils</h3>
                  <div className='flex gap-8 flex-wrap'>
                    <SkillIcon icon={<FaFigma size={iconsize} />} name="Figma" />
                    <SkillIcon icon={<FaGithub size={iconsize} />} name="Github" />
                    <SkillIcon icon={<FaTrello size={iconsize} />} name="Trello" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      </section>


      {/* PROJECTS */}
      <section className='light_background' id='projects'>
        <div className="container">
          <h1>Mes projets</h1>
          <div className='flex gap-8 flex-wrap'>
            {
              Object.keys(projects).map((key, index) => (
                <ProjectCard el={projects[key]} path={key} key={key} />
              ))
            }
          </div>
        </div>
      </section>


      {/* CONTACT ME */}
      <section id='contact_me'>
        <div className="container">
          <h1>Me contacter</h1>
          <div className='two-cols mt-8'>
            <div className='flex-1'>
              Mon profil vous plaît ? N'hésitez pas à me contacter via mes différents réseaux !
              <div className='flex gap-8 mt-8'>
                <a href='https://linkedin.com/in/erin-bernardoni'>
                  <FaLinkedinIn size={30} />
                </a>
                <a href='https://github.com/Jin-gie'>
                  <FaGithub size={30}/>
                </a>
                <a href='mailto:erin.bernardoni@outlook.fr'>
                  <MdAlternateEmail size={30} />
                </a>
              </div>
            </div>
            <div className='flex-1'>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default Home