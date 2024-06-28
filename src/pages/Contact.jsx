import React from 'react'
import Address from '../components/address'
import Map from '../components/map'

function contact() {
  return (
    <div name='contact' className='flex justify-center items-center flex-col bg-zinc-900 rounded-3xl mx-4 my-20 md:m-20 pb-20'>
      <h1 className='text-6xl md:text-7xl py-10 font-bold'>Contact US</h1>
      <Address />
      <Map />
    </div>
  )
}

export default contact
