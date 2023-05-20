import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SobreMim from './components/pages/SobreMim';
import Projetos from './components/pages/Projetos';
import Habilidades from './components/pages/Habilidades';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';

function App() {
  const [modoDL, setModoDL] = useState(false);
  return (
    <div className="App">
      <Router>
        <NavBar modoDL={modoDL} setModoDL={setModoDL}/>
          <Routes>
        
          <Route exact path="/" element={<Home modoDL={modoDL}/>} />

            <Route exact path="/sobremim" element={<SobreMim modoDL={modoDL}/>} />

            <Route exact path="/projetos" element={<Projetos modoDL={modoDL}/>} />

            <Route exact path="/habilidades" element={<Habilidades modoDL={modoDL}/>} />

          </Routes>
         
      </Router>
    </div>
  );
}

export default App;
