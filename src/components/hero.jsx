import React, { useEffect } from 'react'

function hero() {
    return (
        <div name='home' className='heroimage w-full h-screen'>
            <div className='w-full h-screen flex justify-center md:pl-0 pl-10 md:items-center flex-col'>
                <div className="text-4xl md:text-5xl font-bold font-['Hind Madurai']">Welcome to <span className='text-[#106eea]'>SIPL</span></div>
                <div className='text-xl md:text-2xl mt-3'>We are team of talented designers providing web Solutions</div>
            </div>
        </div>
    )
}

export default hero