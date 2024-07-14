import React from 'react'

function Modal(props) {
  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="1000" className='text-justify w-72 h-max p-7 duration-500 border-2 border-white hover:shadow-[0px_0px_40px_5px_rgba(255,255,255,0.3)] bg-[#252525] rounded-xl'>
        <div className='w-full flex justify-between items-center mb-5'>
          <div className='text-xl font-bold'>{props.title}</div>
          <img className='border-2 rounded-full w-10 h-10' src="" alt="logo" />
        </div>
        <div>
          <div className='border-l-2 border-blue-500 pl-4 text-lg font-normal'>{props.description}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
