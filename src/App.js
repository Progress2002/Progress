import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import ContactMe from './pages/ContactMe';
import DesktopNav from './componets/header/DesktopNav';
import MobileNav from './componets/header/MobileNav';
import './App.css';

function App() {
  return (
    <>
      <DesktopNav />
      <MobileNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/contactme" element={<ContactMe/>} />
      </Routes>
    </>
  );
}

export default App;
