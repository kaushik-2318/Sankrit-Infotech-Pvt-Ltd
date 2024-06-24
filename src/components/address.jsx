import React from 'react'
import envelop from '../assets/envelope.svg'
import call from '../assets/phone-call.svg'
import location from '../assets/map.svg'

function address() {
    return (
        <div className='flex justify-around flex-wrap w-full items-center'>
            <div className='flex justify-center items-left flex-col gap-10'>
                <div data-aos="fade-up" data-aos-duration="1000" className='flex h-32 rounded-3xl justify-start items-center gap-5 border-2 p-5 bg-[#20282f] shadow-[0px_0px_5px_5px_rgba(255,255,255,0.3)]'>
                    <div className='border-2 border-dotted border-blue-500 rounded-full w-10 h-10 flex justify-center items-center shadow-lg' >
                        <img src={call} alt="Icon" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='font-semibold text-xl'>Phone Number</div>
                        <div className='font-light'>+91 9430355900</div>
                        <div className='font-light'>+91 9835370848</div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className='flex h-32 rounded-3xl justify-start items-center gap-5 border-2 p-5 bg-[#20282f] shadow-[0px_0px_5px_5px_rgba(255,255,255,0.3)]'>
                    <div className='border-2 border-dotted border-blue-500 rounded-full w-10 h-10 flex justify-center items-center shadow-lg'>
                        <img src={envelop} alt="Icon" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='font-semibold text-xl'>Email Address</div>
                        <div className='font-light'>info@sankritinfotech.co.in</div>
                        <div className='font-light'>sankritinfotech@gmail.com</div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className='flex h-32  rounded-3xl justify-start items-center gap-5 border-2 p-5 bg-[#20282f] shadow-[0px_0px_5px_5px_rgba(255,255,255,0.3)]'>
                    <div className='border-2 border-dotted border-blue-500 rounded-full w-10 h-10 flex justify-center items-center shadow-lg'>
                        <img src={location} alt="Icon" />
                    </div>
                    <div>
                        <div className='font-semibold text-xl'>Loaction</div>
                        <div className='font-light'>B-2589, Sector-II,</div>
                        <div className='font-light'>HEC Township, Dhurwa,</div>
                        <div className='font-light'>Ranchi-834004</div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left" data-aos-duration="1000" data-aos-easing="ease-out" className='border-2 px-5 py-10 md:p-10 mx-8 mt-12 rounded-3xl bg-[#20282f] shadow-[0px_0px_5px_5px_rgba(255,255,255,0.3)]'>
                <form action='' method=''>
                    <div className='flex justify-center  flex-wrap md:flex-nowrap items-center gap-2'>
                        <input className='p-3 bg-[#37444f] w-full outline-none rounded-xl' type="text" name='name' placeholder='Full Name' />
                        <input className='p-3 bg-[#37444f] w-full outline-none rounded-xl' type="email" name='email' placeholder='Email' />
                    </div>
                    <div className='my-10'>
                        <input type="text" className='w-full outline-none p-3 bg-[#37444f] rounded-xl' name='subject' placeholder='Subject' />
                    </div>
                    <div>
                        <textarea className='w-full p-3 outline-none bg-[#37444f] rounded-xl' name="message" rows="4" placeholder='Message'></textarea>
                    </div>
                    <button className='mt-10 border-2 w-full rounded-xl p-3 text-blue-600 hover:text-white hover:bg-blue-500 duration-500' type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default address
