import React from 'react'
import { Link } from 'react-router-dom'

function Exit() {
    return (
        <>
            <div className='h-screen bg-zinc-900 flex flex-col justify-center items-center'>
                <div className=' flex justify-center w-full h-[85%] items-center flex-col'>
                    <div className='text-white font-bold text-9xl text-center'>
                        404
                    </div>
                    <div className='text-white font-bold text-5xl text-center'>
                        Looks like you're lost
                    </div>

                </div>
                <Link to='/'>
                    <button className='border-2 bg-zinc-600 p-4 rounded-full'>Return Back to Home</button>
                </Link>
            </div>
        </>
    )
}

export default Exit
