import React from 'react'
import ProjectHero from './ProjectHero/ProjectHero'
import ShinobiImg from "../../assets/project_shinobi.jpg"

function Shinobi() {
  return (
    <div>
      <ProjectHero 
        img={ShinobiImg}
        project="Shinobi Wat-AAH"
        cadre="Adaptation du jeu de société Shinobi Wat-AAH (Théo Rivière, 2014) sur la plateforme de jeux de société en ligne Board Game Arena."
        temps="A définir"
        outils="HTML/CSS, JavaScript, PHP, Framework BGA"
      />

      <section className='container'>
        <h1>Réalisation du projet en cours, description à venir.</h1>
      </section>
    </div>
  )
}

export default Shinobi