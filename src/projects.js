import WeegiftImg from "./assets/project_weegift.jpg"
import RespirationImg from "./assets/project_respiration.jpg"
import NeurocosmosImg from "./assets/project_neurocosmo.jpg"
import ShinobiImg from "./assets/project_shinobi.jpg"
import FreyjaImg from "./assets/project_freyja.jpg"
import Weegift from "./components/Projects/Weegift"
import Neurocosmos from "./components/Projects/Neurocosmos"
import Respiration from "./components/Projects/Respiration"
import Shinobi from "./components/Projects/Shinobi"
import Freyja from "./components/Projects/Freyja"

const projects = {
  "weegift" : {
    title: "WeeGift",
    subtitle : "UX Design - React.js",
    description : "Projet universitaire visant à simplifier l'organisation de cagnottes.",
    picture: WeegiftImg,
    element: <Weegift />,
    tags : ["ux", "react"],
    sections: [
      // { to_display: "{design_process}", ref: "#design_process" },
      // { to_display: "{recherche}", ref: "#research" },
      // { to_display: "{définition}", ref: "#definition" },
      // { to_display: "{idéation}", ref: "#ideation" },
      // { to_display: "{prototypage}", ref: "#prototype" },
    ]
  },
  "freyja" : {
    title: "Freyja",
    subtitle : "UX Design - React.js",
    description : "Projet universitaire innovant de suivi quotidien de la consommation d'eau personnelle.",
    picture: FreyjaImg,
    element: <Freyja />,
    tags: ["ux", "react"],
    sections: [
      // { to_display: "{à_propos}", ref: "#about" },
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
      // { to_display: "{à_propos}", ref: "#about" },
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
      // { to_display: "{à_propos}", ref: "#about" },
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
      // { to_display: "{à_propos}", ref: "#about" },
    ]
  },
}


export default projects