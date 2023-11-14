import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import { IconChevronsUp } from "@tabler/icons-react"
import Button from './components/Reusable/Button';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      {/* NAVIGATION */}
      <Nav />

      <Header />
      
      <Home />


      <div className='graphic-circle' id="graph-circle-1"></div>

      {/* Arrow bottom right */}
      <Button text={<IconChevronsUp size={30}/>} link="#" className="fixed bottom-16 right-16 button__bottom__top"/>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
