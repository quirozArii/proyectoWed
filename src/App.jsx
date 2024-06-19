import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./index/Home";
import Contact from "./index/Contact";
import Introduccion from "./index/Introduccion";
import Galeria from './index/Galeria';
import Inicio from './index/Inicio';



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Introduccion" element={<Introduccion />} />
          <Route path="/Inicio" element={<Inicio />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;