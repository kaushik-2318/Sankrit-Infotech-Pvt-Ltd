import React from 'react'
import Hero from '../components/hero';
import Main from '../components/main';
import Pricing from '../components/pricing';
import Slider from '../components/slider';

function Home() {
    return (
        <div>
            <Hero />
            <Main />
            <Pricing />
            <Slider />
        </div>
    )
}

export default Home
