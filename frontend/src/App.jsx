import NavBar from './components/navBar';
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Client from './components/client';
import Team from './components/teams';
import Contact from './pages/Contact'
import Footer from './components/footer'
import Exit from './pages/Exit';


import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="h-full w-full text-white scroll-smooth font-['Roboto']">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Client />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Exit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
