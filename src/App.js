import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import ContactMe from './pages/ContactMe';
import DesktopNav from './components/header/DesktopNav';
import MobileNav from './components/header/MobileNav';
import MobileFooter from './components/footer/MobileFooter';
import DesktopFooter from './components/footer/DesktopFooter';
import './App.css';
import { useState, useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
      <MobileFooter />
      <DesktopFooter />
      <ScrollToTop />
    </>
  );
}

export default App;
