import React from 'react'
import smile from '../assets/emoji-smile.svg'
import headset from '../assets/headset.svg'
import journal from '../assets/journal-richtext.svg'
import people from '../assets/people.svg'
import CountUp from 'react-countup'

function client() {
  return (
    <div>
      <div className='flex justify-evenly md:justify-evenly flex-wrap md:flex-nowrap items-center gap-10 mt-20 md:mt-0 px-5 md:px-24'>
        <Box text="Happy Clients" number="232" image={smile} />
        <Box text="Projects" number="521" image={headset} />
        <Box text="Hours Of Support" number="1463" image={journal} />
        <Box text="Hard Workers" number="15" image={people} />
      </div>
    </div>
  )
}

export default client

const Box = (props) => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" className='bg-zinc-800 flex justify-center items-center flex-col w-full rounded-3xl relative py-10 gap-4 shadow-[0px_0px_5px_5px_rgba(132,89,226,0.7)]'>
        <div className='bg-white p-3 rounded-full absolute -top-5'>
          <img className='w-7' src={props.image} alt="Icon" fill="blue" />
        </div>
        <div className='text-4xl pt-3 text-[#106eea] font-bold'>
          <CountUp start={0} duration={2} enableScrollSpy end={props.number} />
        </div>
        <div className='text-xl font-light'>
          {props.text}
        </div>
      </div>
    </>
  )
}
