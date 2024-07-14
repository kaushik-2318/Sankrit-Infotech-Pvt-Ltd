import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from 'react-countup'
gsap.registerPlugin(ScrollTrigger)


function Skill() {
    const progressbar = [
        {
            name: "HTML",
            progress: "100"
        },
        {
            name: "CSS",
            progress: "90"
        },
        {
            name: "JAVASCRIPT",
            progress: "70"
        },
    ]
    const progresscircle = [
        {
            name: "PHP",
            progress: "80"
        },
        {
            name: "WORDPRESS/CMS",
            progress: "90"
        },
        {
            name: "PHOTOSHOP",
            progress: "55"
        },
    ]

    useGSAP(() => {
        gsap.from('.bar', {
            width: "0%",
            duration: 2.5,
            scrollTrigger: {
                trigger: ".trigger",
                scroller: "body",
                start: "top 90%",
            }
        });

        const circle1 = 100;
        gsap.to('.circle', {
            attr: { strokeDashoffset: circle1 },
        });

    })

    return (
        <>
            <div className='flex justify-center items-center flex-col gap-10 mx-2 mt-24 md:m-24 py-10 md:pb-20 rounded-3xl bg-[#060a1e] border-[#1c244c] shadow-[inset_0px_-10px_40px_rgb(28,36,76)]'>
                <div className="text-5xl md:text-7xl font-['Hind Madurai']">What We <span className='text-[#106eea] font-serif'>USE</span></div>
                <div className='flex justify-center items-center flex-col md:flex-row gap-20 px-7 md:px-24 w-full '>
                    <div className='trigger flex justify-center items-left flex-col w-full md:w-1/2 gap-10'>
                        {
                            progressbar.map((e, index) => (
                                <div key={index} className='flex justify-center items-left gap-3 flex-col'>
                                    <span className='pl-5 flex justify-between items-center'>
                                        <div>{e.name}</div>
                                        <div>
                                            <CountUp start={0} duration={3} enableScrollSpy end={e.progress} />
                                        </div>
                                    </span>
                                    <Bar progress={e.progress} />
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-1/2 '>
                        <div className='flex justify-center items-center gap-4 flex-wrap'>
                            {
                                progresscircle.map((e, index) => (
                                    <div key={index} className='flex justify-center items-center flex-col'>
                                        <CircularBar progress={e.progress} />
                                        <div>{e.name}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill

const Bar = (props) => {
    return (
        <>
            <div className="bg-white rounded-full overflow-hidden w-full">
                <span className="bg-[rgb(230, 226, 226)] block">
                    <span className={`bar w-[${props.progress}%] block bg-[#106eea] p-[5px]`}></span>
                </span>
            </div>
        </>
    )
}

const CircularBar = (props) => {
    return (
        <div className="relative size-40">
            <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2"></circle>
                <g className="origin-center -rotate-90 transform">
                    <circle cx="18" cy="18" r="16" fill="none" className="circle stroke-current text-blue-600" strokeWidth="2" strokeDasharray="100" strokeDashoffset={`${100-props.progress}`}></circle>
                </g>
            </svg>
            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <span className="text-center text-2xl font-bold text-white">
                    <CountUp start={0} duration={2} enableScrollSpy end={props.progress} />
                </span>
            </div>
        </div>
    )
}