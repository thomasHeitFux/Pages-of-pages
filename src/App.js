import logo from './logo.svg';
import './App.css';
import ServicesComponent from './components/Services';
import ContactComponent from './components/Contacto';
import PortfolioComponent from './components/Portfolio';
import HomeComponent from './components/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route exact path="/" element={< HomeComponent/>}></Route>
      <Route exact path="/services" element={< ServicesComponent/>}></Route>
      <Route exact path="/contact" element={<ContactComponent/>}></Route>
      <Route exact path="/portfolio" element={< PortfolioComponent/>}></Route>
    </Routes>
  </BrowserRouter>
       );
}

export default App;
