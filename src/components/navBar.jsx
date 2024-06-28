import React, { useState, useEffect } from 'react'
import menu from '../assets/menu-3-line.svg'
import close from '../assets/close-fill.svg'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [sidepanel, setsidepanel] = useState(false);
  const toggle = () => {
    setsidepanel(!sidepanel);
  };
  const logotoggle = () => {
    setsidepanel(false);
  }
  useGSAP(() => {
    gsap.from('.nava', {
      y: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.5,
    });
    gsap.from('.navside', {
      x: 50,
      opacity: 0,
      duration: 1,
    });
  })

  return (
    <div className='relative flex justify-center'>
      <div className='fixed text-white m-4 p-4 px-8 w-[97%] border-b-2 z-20 backdrop-blur-sm shadow-xl'>
        <div className='flex flex-row justify-between items-center'>
          <Link to="/" activeClass="a" onClick={logotoggle}><div className='navside cursor-pointer text-xl font-bold'>Sankrit Infotech Pvt Ltd.</div></Link>
          <div className='hidden md:block'>
            <ul className='flex flex-row gap-7'>
              <Link to="/" activeClass="active" className='nava hover:border-b-2 cursor-pointer'><li>Home</li></Link>
              <Link to="/about" activeClass="active" className='nava hover:border-b-2 cursor-pointer'><li>About</li></Link>
              <Link to="/services" activeClass="active" className='nava cursor-pointer hover:border-b-2'><li>Services</li></Link>
              <Link to="/portfolio" activeClass="active" className='nava cursor-pointer hover:border-b-2'><li>Portfolio</li></Link>
              <Link to="/team" activeClass="active" className='nava cursor-pointer hover:border-b-2'><li>Team</li></Link>
              <Link to="/contact" activeClass="active" className='nava cursor-pointer hover:border-b-2'><li>Contact</li></Link>
            </ul>
          </div>
          <div className='block md:hidden'>
            <img src={sidepanel ? close : menu} width={30} alt="hamburger" onClick={toggle} />
          </div>
        </div>
      </div>
      <div className={`side fixed h-screen z-10 flex justify-center items-center backdrop-blur-lg shadow-xl flex-col transition-all ease-in-out duration-500 md:hidden ${sidepanel ? `left-0` : `left-96 hidden`}`}>
        <div className=''>
          <ul className='flex h-screen justify-center items-center flex-col w-screen'>
            <Link to='/' activeClass="active" onClick={toggle}><li className='px-24 py-5 hover:border-b-white hover:border-b-2' >Home</li></Link>
            <Link to='/about' onClick={toggle} activeClass="active"><li className='px-24 py-5 hover:border-b-white hover:border-b-2' >About</li></Link>
            <Link to='/services' activeClass="active" onClick={toggle}><li className='px-24 py-5 hover:border-b-white hover:border-b-2' >Services</li></Link>
            <Link to='/portfolio' activeClass="active" onClick={toggle}><li className='px-24 py-5 hover:border-b-white hover:border-b-2' >Portfolio</li></Link>
            <Link to='/team' activeClass="active" onClick={toggle}><li className='px-24 py-5 hover:border-b-white hover:border-b-2' >Team</li></Link>
            <Link to='/contact' activeClass="active" onClick={toggle}><li className='px-24 py-5 hover:border-b-white hover:border-b-2' >Contact</li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
