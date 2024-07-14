import React from 'react'

function hero() {
   
    return (
        <div name='home' className='heroimage w-full h-screen'>
            <div className='w-full h-screen flex justify-center md:pl-0 pl-10 md:items-center flex-col'>
                <div data-aos="zoom-in" data-aos-duration="2000" className="text-4xl md:text-5xl font-bold font-['Hind Madurai']">Welcome to <span className='text-[#106eea]'>SIPL</span></div>
                <div data-aos="zoom-in" data-aos-duration="2000" className='text-xl md:text-2xl mt-3'>We are team of talented designers providing web Solutions</div>
            </div>
        </div>
    )
}

export default hero