import React from 'react'
import Modal from './modal'

function main() {
    return (
        <>
            <div className='bg-[#05071a] h-full'>
                <div className='h-28'></div>
                <div name='portfolio' className='client  rounded-3xl ml-4 md:ml-16 overflow-x-auto flex justify-center items-center pl-7 md:pl-0 flex-col'>
                    <div className='flex justify-center items-center flex-col pt-16'>
                        <div className='text-4xl font-bold w-full'>Check our <span className='text-[#106eea]'>Clients</span></div>
                        <div className='flex shadow-lg justify-center items-center flex-wrap gap-12 py-10 md:pl-6 overflow-y-hidden'>
                            <Modal title="BIT Mesra" description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi" />
                            <Modal title="JGTR" description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" />
                            <Modal title="DSE, Ranchi" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" />
                            <Modal title="JSTCDC" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis" />
                        </div>
                    </div>
                </div>
                <div className='h-20'></div>
            </div>
        </>
    )
}

export default main