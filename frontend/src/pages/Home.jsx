import React from 'react'
import Hero from '../components/hero';
import Main from '../components/main';
import Pricing from '../components/pricing';
import Slider from '../components/slider';

function Home() {
    return (
        <div className='bg-[#05071a] h-full' >
            <Hero />
            <Main />
            <Pricing />
            <Slider />
        </div>
    )
}

export default Home
