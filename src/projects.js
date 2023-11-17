import WeegiftImg from "./assets/project_weegift.jpg"
import RespirationImg from "./assets/project_respiration.jpg"
import NeurocosmosImg from "./assets/project_neurocosmo.jpg"
import ShinobiImg from "./assets/project_shinobi.jpg"
import Weegift from "./components/Projects/Weegift"
import Neurocosmos from "./components/Projects/Neurocosmos"
import Respiration from "./components/Projects/Respiration"
import Shinobi from "./components/Projects/Shinobi"

const projects = {
  "weegift" : {
    title: "WeeGift",
    subtitle : "UX Design - ReactJS",
    description : "Projet universitaire visant à simplifier l'organisation de cagnottes.",
    picture: WeegiftImg,
    element: <Weegift />,
    tags : ["ux", "react"],
    sections: [
      
    ]
  },
  "neurocosmos" : {
    title: "Neuro Cosmos",
    subtitle : "UX Design",
    description : "Jeu sérieux mêlant neurosciences et aide à la personne.",
    picture: NeurocosmosImg,
    element: <Neurocosmos />,
    tags: ["ux"],
    sections: [
      { to_display: "{à_propos}", ref: "#about" },
    ]
  },
  "respiration" : {
    path : "weegit",
    title: "La Respiration",
    subtitle : "UX Design - Unity",
    description : "Environnement virtuel à destination d'élèves de 5e, pour mieux comprendre la respiration.",
    picture: RespirationImg,
    element: <Respiration />,
    tags : ["ux", "vr"],
    sections: [
      { to_display: "{à_propos}", ref: "#about" },
    ]
  },
  "shinobi" : {
    path : "shinobi-wat-aah",
    title: "Shinobi Wat-AAH!",
    subtitle : "JS - PHP",
    description : "Adaptation du jeu de société Shinobi Wat-AAH! sur le site Board Game Arena",
    picture: ShinobiImg,
    element: <Shinobi />,
    tags : ["php"],
    sections: [
      { to_display: "{à_propos}", ref: "#about" },
    ]
  },
}


export default projects