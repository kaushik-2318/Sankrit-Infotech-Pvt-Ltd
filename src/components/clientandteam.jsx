import React from 'react'
import Client from './client'
import Team from './teams'

function clientandteam() {
    return (
        <>
            <div className='h-full client rounded-3xl ml-4 md:ml-16 overflow-x-auto'>
                <Client />
                <Team />
            </div>
        </>
    )
}

export default clientandteam
