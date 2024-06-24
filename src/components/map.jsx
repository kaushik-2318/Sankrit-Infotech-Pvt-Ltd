import React from 'react'

function map() {
  return (
    <div className='flex justify-center items-center flex-col py-10'>
      <h1 className='text-5xl font-semibold pb-10'>Find Us On Google Map</h1>
      <div className='w-full'>
        <iframe className='w-full px-5 md:px-0 md:w-[930px]' height={400} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6630.812909333805!2d85.304948!3d23.328694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e030957f7b27%3A0x8b9d4d65c44f6a5c!2sSankrit%20Infotech%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1718904300189!5m2!1sen!2sin"  allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default map
