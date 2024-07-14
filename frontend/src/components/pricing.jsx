import React from 'react'
import check from '../assets/check-line.svg'

function pricing() {
    return (
        <div className='flex justify-center items-center flex-col md:gap-10 mb-40'>
            <div className='text-5xl text-center md:text-7xl font-bold'>Choose your <span className='text-[#106eea]'>PLAN</span></div>
            <div className='text-2xl md:text-4xl font-light py-7 md:py-0'>Unlock endless possibilities</div>
            <div className='flex shadow-lg justify-center items-center gap-12 flex-wrap'>

                <div data-aos="flip-right" data-aos-duration="1000" className='flex h-[36rem] justify-center items-center flex-col text-justify w-72 duration-500 hover:shadow-[0px_0px_5px_5px_rgba(132,89,226,0.7)] bg-zinc-800 rounded-xl hover:scale-105'>
                    <div className='text-[#106eea] text-center text-2xl border-b-2 font-bold w-full p-9'>
                        Static Website
                    </div>
                    <div className='flex justify-center flex-col w-full text-center p-6 gap-5 border-b-2'>
                        <div className='flex justify-center items-start gap-1'>
                            <span>₹</span>
                            <span className='text-3xl text-[#106eea] font-semibold'>15000</span>
                        </div>
                        <div className='text-center'>
                            <button className='rounded-3xl border-2 w-[90%] py-1 hover:bg-[#106eea] duration-500'>Buy Now</button>
                        </div>
                    </div>
                    <div className='w-full'>
                        <ol className='flex justify-center w-full items-left list-none flex-col text-sm font-light p-7 gap-5'>
                            <li className='flex gap-3 pl-12'>
                                <div className='bg-[#a9e7e1] flex rounded-full'><img className='w-5' src={check} alt='check' /></div>
                                <div className=''>Hosting*</div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex gap-3 pl-12'>
                                <div className='bg-[#a9e7e1] flex rounded-full'><img className='w-5' src={check} alt='check' /></div>
                                <div className=''>5-8 Static Page</div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex gap-3 pl-12'>
                                <div className='pl-8 line-through'>Control Panel</div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex gap-3 pl-12'>
                                <div className='pl-8 line-through'>Dynamic Pages</div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex gap-3 pl-12'>
                                <div className='pl-8 line-through'>Multiple Stake Holders</div>
                            </li>
                        </ol>
                    </div>
                </div>

                <div data-aos="flip-right" data-aos-duration="1000" className='flex h-[36rem] justify-center items-center flex-col text-justify w-72 duration-500 hover:shadow-[0px_0px_5px_5px_rgba(132,89,226,0.7)] bg-zinc-800 rounded-xl hover:scale-105'>
                    <div className='text-[#106eea] text-center text-2xl border-b-2 font-bold w-full p-8'>
                        Dynamic Website
                    </div>
                    <div className='flex justify-center flex-col w-full text-center p-6 gap-5 border-b-2'>
                        <div className='flex justify-center items-start gap-1'>
                            <span>₹</span>
                            <span className='text-3xl text-[#106eea] font-semibold'>25000</span>
                        </div>
                        <div className='text-center'>
                            <button className='rounded-3xl border-2 w-[90%] py-1 hover:bg-[#106eea] duration-500'>Buy Now</button>
                        </div>
                    </div>
                    <div className='w-full'>
                        <ol className='flex justify-center w-full items-left list-none flex-col text-sm font-light p-7 gap-5'>
                            <li className='flex gap-3 pl-12'>
                                <div className='bg-[#a9e7e1] flex rounded-full'><img className='w-5' src={check} alt='check' /></div>
                                <div className=''>Hosting*</div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex gap-3 pl-12'>
                                <div className='bg-[#a9e7e1] flex rounded-full'><img className='w-5' src={check} alt='check' /></div>
                                <div className=''>5-8 Static Page</div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex gap-3 pl-12'>
                                <div className='bg-[#a9e7e1] flex rounded-full'><img className='w-5' src={check} alt='check' /></div>
                                <div className=''>10 Dynamic Pages</div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex gap-3 pl-12'>
                                <div className='bg-[#a9e7e1] flex rounded-full'><img className='w-5' src={check} alt='check' /></div>
                                <div className=''>Control Panel</div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex gap-3 pl-12'>
                                <div className='pl-8 line-through'>Multiple Stake Holders</div>
                            </li>
                        </ol>
                    </div>
                </div>

                <div data-aos="flip-right" data-aos-duration="1000" className='flex h-[36rem] justify-center items-center flex-col text-justify w-72 duration-500 hover:shadow-[0px_0px_5px_5px_rgba(132,89,226,0.7)] bg-zinc-800 rounded-xl hover:scale-105'>
                    <div className='text-[#106eea] relative text-center text-2xl border-b-2 font-bold w-full p-6 mt-6'>
                        Customised ERP
                        <span className='text-white text-sm font-thin absolute -top-3 right-3 border-2 px-3 p-1 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50'>Advanced</span>
                    </div>
                    <div className='flex justify-center flex-col w-full text-center p-6 gap-5 border-b-2'>
                        <div>
                            <span className='text-3xl text-[#106eea] font-semibold'>Not Defined</span>
                        </div>
                        <div className='text-center'>
                            <button className='rounded-3xl border-2 w-[90%] py-1 hover:bg-[#106eea] duration-500'>Buy Now</button>
                        </div>
                    </div>
                    <div className='w-full'>
                        <ol className='flex justify-center w-full items-left list-none flex-col text-sm font-light px-6 p-7 gap-5'>
                            <li className='flex gap-3 pl-12'>
                                <div className='bg-[#a9e7e1] flex rounded-full'><img className='w-5' src={check} alt='check' /></div>
                                <div className=''>Hosting*</div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex gap-3 pl-12'>
                                <div className='bg-[#a9e7e1] flex rounded-full'><img className='w-5' src={check} alt='check' /></div>
                                <div className=''>Email Service from Portal</div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex gap-3 pl-12'>
                                <div className='bg-[#a9e7e1] flex rounded-full'><img className='w-5' src={check} alt='check' /></div>
                                <div className=''>SMS Service</div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex gap-3 pl-12'>
                                <div className='bg-[#a9e7e1] flex rounded-full'><img className='w-5' src={check} alt='check' /></div>
                                <div className=''>Control Panel</div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex gap-3 pl-12'>
                                <div className='bg-[#a9e7e1] flex rounded-full'><img className='w-5' src={check} alt='check' /></div>
                                <div className=''>Multiple Stake Holders</div>
                            </li>
                        </ol>
                    </div>
                </div>

                <div data-aos="flip-right" data-aos-duration="1000" className='flex h-[36rem] items-center flex-col pt-4 text-justify w-72 duration-500 hover:shadow-[0px_0px_5px_5px_rgba(132,89,226,0.7)] bg-zinc-800 rounded-xl hover:scale-105'>
                    <div className='text-[#106eea] relative text-center text-2xl border-b-2 font-bold w-full p-6 mt-3'>
                        QGEN
                        <span className='text-white text-sm font-thin absolute -top-5 right-3 border-2 px-3 p-1 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50'>Advanced</span>
                    </div>
                    <div className='flex justify-center flex-col w-full text-center p-6 gap-5 border-b-2'>
                        <div className='flex justify-center items-start gap-1'>
                            <span>₹</span>
                            <span className='text-3xl text-[#106eea] font-semibold'>120 <span className='text-white text-sm font-light'>/ month</span> </span>
                        </div>
                        <div className='text-center'>
                            <button className='rounded-3xl border-2 w-[90%] py-1 hover:bg-[#106eea] duration-500'>Buy Now</button>
                        </div>
                    </div>
                    <div className='w-full'>
                        <ol className='flex justify-center w-full items-left list-none flex-col text-sm font-light p-7 gap-5'>
                            <li className='flex gap-3 pl-12'>
                                <div className='bg-[#a9e7e1] flex rounded-full'><img className='w-5' src={check} alt='check' /></div>
                                <div className=''>Unlimited Question</div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex gap-3 pl-12'>
                                <div className='bg-[#a9e7e1] flex rounded-full'><img className='w-5' src={check} alt='check' /></div>
                                <div className=''>Online Practice</div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex gap-3 pl-12'>
                                <div className='bg-[#a9e7e1] flex rounded-full'><img className='w-5' src={check} alt='check' /></div>
                                <div className=''>Mock Test</div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pricing
