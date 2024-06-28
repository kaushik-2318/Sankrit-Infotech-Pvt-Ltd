import NavBar from './components/navBar';
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Client from './components/client';
import Team from './components/teams';
import Contact from './pages/Contact'
import Footer from './components/footer'

import { Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="h-full w-full bg-black text-white scroll-smooth font-['Roboto']">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Client />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
