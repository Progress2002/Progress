import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import ContactMe from './pages/ContactMe';
import DesktopNav from './componets/header/DesktopNav';
import MobileNav from './componets/header/MobileNav';
import './App.css';
import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(false)
  const location = useLocation()
  const isActiveRoute = (route) => location.pathname === route;
  return (
    <>
      <div className='relative bg-sc-color h-20'>
        <DesktopNav isActiveRoute={isActiveRoute} isActive={isActive} setIsActive={setIsActive} />
        <MobileNav isActiveRoute={isActiveRoute} isActive={isActive} setIsActive={setIsActive} />
      </div>
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
