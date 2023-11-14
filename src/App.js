import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import { IconChevronsUp } from "@tabler/icons-react"
import Button from './components/Reusable/Button';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import projects from './projects';
import Page from './components/Reusable/Page/Page';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Page content={<Home />} />} />
          {
            Object.keys(projects).map((key, index) => (
              <Route key={key} path={key} element={projects[key]["element"]} />
            ))
          }
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
