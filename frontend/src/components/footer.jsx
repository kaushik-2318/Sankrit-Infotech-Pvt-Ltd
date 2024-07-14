import React from 'react'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import skype from '../assets/skype.svg'
import linkedin from '../assets/linkedin.svg'
import logo from '../assets/sipl.png'
import { Link } from 'react-router-dom';

function footer() {
    return (
        <>
            <div className='bg-[#14084c] w-full flex md:flex-row pl-10 md:pl-0 gap-4 md:gap-0 flex-col justify-around items-start pt-20 md:pb-16 pb-10'>
                <div className='flex  justify-center items-center gap-2 rounded-full relative -top-10'>
                    <img src={logo} width={45} alt="Logo" />
                    <div className='text-5xl font-bold'>SIPL</div>
                </div>
                <div className='flex justify-left items-left flex-col'>
                    <div className='text-2xl font-bold pb-2'>Useful Links</div>
                    <ul className='flex font-light pl-4 justify-center items-start flex-col gap-3'>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/about'><li>About US</li></Link>
                        <Link to='/services'><li>Services</li></Link>
                        <Link to='#'><li>Terms of Service</li></Link>
                        <Link to='#'><li>Privacy Policy</li></Link>
                    </ul>
                </div>
                <div>
                    <div className='text-2xl font-bold pb-2'>Our Services</div>
                    <ul className='flex font-light pl-4 justify-center items-start flex-col gap-3'>
                        <li>Web Design</li>
                        <li>Web Development</li>
                        <li>Product Managemnet</li>
                        <li>Marketing</li>
                        <li>Graphic Design</li>
                    </ul>
                </div>
                <div>
                    <div className='text-2xl font-bold pb-2'>Our Social Network</div>
                    <div className='w-60 text-justify'>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</div>
                    <div>
                        <ul className='flex pt-10 md:pt-5 justify-start p-2 items-center gap-5'>
                            <li>
                                <Link href="URL"><img src={twitter} width={40} alt="twitter" /></Link>
                            </li>
                            <li>
                                <Link href="URL"><img src={facebook} width={40} alt="facebook" /></Link>
                            </li>
                            <li>
                                <Link href="URL"><img src={instagram} width={40} alt="instagram" /></Link>
                            </li>
                            <li>
                                <Link href="URL"><img src={skype} width={40} alt="skype" /></Link>
                            </li>
                            <li>
                                <Link href="URL"><img src={linkedin} width={40} alt="linkedin" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex bg-[#0a072c] md:justify-between md:items-start justify-center items-center px-2 text-center md:px-20 py-5'>
                <div>© 2021 Copyright</div>
                <div>Terms and Conditions | Privacy Policy</div>
                <div> Designed by SIPL</div>
            </div>
        </>
    )
}

export default footer
