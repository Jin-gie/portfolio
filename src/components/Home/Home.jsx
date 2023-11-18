import React, { useState } from 'react'
import Photo from '../../assets/photo_forme.png'
import Button from '../Reusable/Button'
import ProjectCard from '../Reusable/ProjectCard/ProjectCard'
import projects from '../../projects'
import "./Home.css"
import HomeHeader from "../HomeHeader/HomeHeader"

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log('Form submitted:', formData);
  };

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
            <Button text="Mon CV" />
          </div>
          <div>
            <img loading='lazy' src={Photo} alt="Moi" className='grayscale hover:grayscale-0'/>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className='' id='skills'>
      <div className='container'>
        <div >
          <h1>Mes Compétences</h1>
          <p>Ma formation et mes expériences m'ont permis d'acquérir de nombreuses compétences complémentaires, me permettant d'être autonome et polyvalente.</p>
          <p>C'est pourquoi aujourd'hui je suis aussi bien capable de concevoir une interface web ou mobile que de développer une interface web responsive.</p>
          <p className='mb-12'>
            L'informatique étant un domaine en constante évolution, mes compétences elles aussi évoluent de jour en jour ! 
          </p>

          <div className='two-cols'>
            {/* UX DESIGN */}
            <div className='content__square flex-1'>
              <h2>UX Design</h2>
              <p>&gt; Analyse de la population et des besoins utilisateurs</p>
              <p>&gt; Personas, tests utilisateurs</p>
              <p>&gt; Prototypage {'('}LoFi, HiFi{')'}: <span className='font-bold'>Figma</span></p>
              <p>&gt; Étude des fonctions cognitives et du comportement humain</p>
              <p>&gt; Modéliser un domaine de compétences, scénariser une ressource numérique d'apprentissage </p>
            </div>

            {/* Dev Fullstack */}
            <div className='content__square flex-1'>
              <h2>Développement FullStack</h2>
              <p>&gt; Frontend : <span className='font-bold'>HTML, CSS, JS, React</span></p>
              <p>&gt; Backend : <span className='font-bold'>PHP, MySQL, MariaDB, Firebase, GraphQL</span></p>
              <p>&gt; Analyse de données et IA : <span className='font-bold'>Python</span> (pandas, numpy, scikit-learn, tensorflow, matplotlib)</p>
              <p>&gt; Versioning de code : <span className='font-bold'>Git</span> (Github, Gitlab)</p>
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
          <form onSubmit={handleSubmit} id="contact-form">
            <label>
              Nom:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <br />
            <label>
              E-mail:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <label>
              Message:
              <textarea name="message" value={formData.message} onChange={handleChange} />
            </label>
            <br />
            <Button text="Envoyer" type="submit"/>
          </form>
        </div>
      </section>
    </div>
    
  )
}

export default Home