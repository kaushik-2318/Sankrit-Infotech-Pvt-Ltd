import React from 'react'
import Modal from './modal'

function main() {
  return (
    <>
      <div className='bg-[#05071a] '>
        <div className='h-28'></div>
        <div name='team' className='client rounded-3xl ml-4 md:ml-16 overflow-x-auto flex justify-center items-center flex-col pt-16'>
          <div className='flex justify-center items-center flex-col '>
            <div className='text-4xl font-bold w-full pl-7 md:pl-0'>Our Hardworking <span className='text-[#106eea]'>Team</span></div>
            <div className='rounded-3xl flex shadow-lg flex-wrap justify-center items-center gap-12 py-10 pl-6 overflow-y-hidden'>
              <Modal title="Abhay Kuamr" description="Director" />
              <Modal title="Ravikar Shayam" description="Director" />
              <Modal title="William Anderson" description="CTO" />
              <Modal title="Amanda Jepson" description="Accountant" />
            </div>
          </div>
        </div>
        <div className='h-20'></div>
      </div>
    </>
  )
}

export default main