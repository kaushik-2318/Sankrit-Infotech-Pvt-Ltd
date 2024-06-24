import './App.css';
import NavBar from './components/navBar';
import Hero from './components/hero';
import Main from './components/main';
import Pricing from './components/pricing';
import About from './components/about';
import Skill from './components/skill';
import Done from './components/done';
import Services from './components/services';
import Slider from './components/slider';
import Clientandteam from './components/clientandteam';
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="h-full w-full bg-black text-white scroll-smooth font-['Roboto']">
      <NavBar />
      <Hero />
      <Main />
      <Pricing />
      <About />
      <Skill />
      <Done />
      <Services />
      <Slider />
      <Clientandteam />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
