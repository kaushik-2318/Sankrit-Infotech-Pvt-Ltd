import React, { useRef } from 'react'
import smile from '../assets/emoji-smile.svg'
import headset from '../assets/headset.svg'
import journal from '../assets/journal-richtext.svg'
import people from '../assets/people.svg'
import CountUp from 'react-countup'

function client() {
  return (
    <>
      <div className='flex justify-evenly md:justify-evenly flex-wrap md:flex-nowrap items-center gap-10 mt-20 md:mt-0 px-5 md:px-24 pb-20'>
        <Box key="happy-clients" text="Happy Clients" number="232" image={smile} />
        <Box key="projects" text="Projects" number="521" image={headset} />
        <Box key="hours-of-support" text="Hours Of Support" number="1463" image={journal} />
        <Box key="hard-workers" text="Hard Workers" number="15" image={people} />
      </div>
    </>
  )
}

export default client

const Box = (props) => {
  const countUpRef = useRef(null);

  return (
    <>
      <div className='flex justify-center items-center flex-col w-full rounded-3xl relative py-10 gap-4 bg-[#060a1e] border-[#1c244c] shadow-[inset_0px_-10px_40px_rgb(28,36,76)]'>
        <div className='bg-white p-3 rounded-full absolute -top-5'>
          <img className='w-7' src={props.image} alt="Icon" fill="blue" />
        </div>
        <div className='text-4xl pt-3 text-[#106eea] font-bold'>
          <CountUp ref={countUpRef} start={0} duration={2} enableScrollSpy end={props.number} />
        </div>
        <div className='text-xl font-light'>
          {props.text}
        </div>
      </div>
    </>
  )
}
