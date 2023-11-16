import WeegiftImg from "./assets/project_weegift.jpg"
import RespirationImg from "./assets/project_respiration.jpg"
import NeurocosmosImg from "./assets/project_neurocosmo.jpg"
import Weegift from "./components/Projects/Weegift"
import Neurocosmos from "./components/Projects/Neurocosmos"
import Respiration from "./components/Projects/Respiration"

const projects = {
  "weegift" : {
    title: "WeeGift",
    subtitle : "UX Design - ReactJS",
    description : "Projet universitaire visant à simplifier l'organisation de cagnottes.",
    picture: WeegiftImg,
    element: <Weegift />,
    sections: [
      { to_display: "{à_propos}", ref: "#about" },
    ]
  },
  "neurocosmos" : {
    title: "Neuro Cosmos",
    subtitle : "UX Design",
    description : "Jeu sérieux mêlant neurosciences et aide à la personne.",
    picture: NeurocosmosImg,
    element: <Neurocosmos />,
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
    sections: [
      { to_display: "{à_propos}", ref: "#about" },
    ]
  },
}


export default projects