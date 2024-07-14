import React from 'react'
import world from '../assets/world.svg'
import file from '../assets/file.svg'
import money from '../assets/money.svg'
import envelop from '../assets/envelope.svg'
import book from '../assets/book.svg'
import briefcase from '../assets/briefcase.svg'

function services() {
    return (
        <>
            <div className='bg-[#05071a]'>
                <div className="backgroundservices h-screen flex justify-center items-center font-bold text-7xl font-['Roboto']">
                    SERVICES
                </div>
                <div name='services' className='flex justify-center items-center flex-col gap-10 pt-32'>
                    <div className="text-6xl text-center md:text-7xl font-bold md:mb-5 font-['Roboto']">Check our <span className="text-[#106eea]">Services</span></div>
                    <div className='flex shadow-lg justify-center items-center gap-12 flex-wrap mb-20'>
                        <Box text="Web Hosting" desc="Your website's reliable home. Get secure, professional web hosting for your business." image={world} />
                        <Box text="Bulk SMS" desc="Reach more customers instantly. Powerful bulk SMS marketing and alerts." image={file} />
                        <Box text="Payment Gateway" desc="Secure online checkout. Accept payments easily. Happy customers, happy you." image={money} />
                        <Box text="Corporate Email" desc="Professional email for your business. Build trust with custom addresses and secure, reliable service." image={envelop} />
                        <Box text="Training" desc="Level up your coding skills. Become a developer with expert training." image={book} />
                        <Box text="Internship" desc="Gain hands-on skills in your field, build your resume, and explore career options." image={briefcase} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default services

const Box = (props) => {
    return (
        <>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex p-5 h-80 py-16 gap-5 w-80 md:w-96 justify-center items-center flex-col md:hover:shadow-[0px_0px_5px_5px_rgba(132,89,226,0.7)] bg-zinc-800 rounded-xl md:hover:scale-110 duration-500'>
                <div className='bg-white flex justify-center items-center p-4 rounded-xl'>
                    <img className='w-7' src={props.image} alt="icon" />
                </div>
                <div className='text-[#106eea] font-medium text-3xl'>
                    <h2>{props.text}</h2>
                </div>
                <div className='text-center'>
                    {props.desc}
                </div>
            </div>
        </>
    )
}
