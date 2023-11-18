import './App.css';
import Home from './components/Home/Home';
import {
  Route,
  Routes,
} from 'react-router-dom'
import projects from './projects';
import Page from './components/Reusable/Page/Page';


function App() {

  const home_sections = [
    { to_display: "{à_propos}", ref: "about" },
    { to_display: "{compétences}", ref: "skills" },
    { to_display: "{projets}", ref: "projects" },
    { to_display: "{me_contacter}", ref: "contact_me" },
  ];
  
  return (
    <div>
        <Routes>

          {/* Home Page */}
          <Route exact path="/" 
            element={
              <Page 
                content={<Home />} 
                sections={home_sections} 
              />
            } 
          />

          {/* Project Pages */}
          {
            Object.keys(projects).map((key, index) => (
              <Route 
                key={key} 
                path={"/" + key} 
                element={
                  <Page 
                    content={projects[key]["element"]}
                    sections={projects[key]["sections"]}
                  />
                }
              />
            ))
          }
        </Routes>
    </div>
  );
}

export default App;
