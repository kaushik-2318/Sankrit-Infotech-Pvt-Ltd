import React from 'react'
import Done from '../components/done'
import Skill from '../components/skill'

function about() {
    return (
        <>
            <div className='bg-[#05071a]'>
                <div className="backgroundabout">
                    <div name='about' className={`font-['Sora'] md:h-screen pt-40 md:pt-0 flex justify-center md:items-center flex-col`}>
                        <div className="md:text-7xl md:w-[60%] md:text-center text-4xl pl-3 md:pl-0">
                            <span>Revolutionze</span> your digital products with us.
                        </div>
                        <div className='font-extralight md:pt-10 pt-5 text-sm md:text-lg pl-3 md:pl-0'>
                            Create stunning professional quality websites in record time with ouw powerful UI kiit.
                        </div>
                    </div>
                    <div className="border-2 flex justify-center items-center flex-col mx-2 mt-24 md:m-24 py-12  rounded-3xl bg-[#060a1e] border-[#1c244c] shadow-[inset_0px_-10px_40px_rgb(28,36,76)]">
                        <div className="text-center text-5xl md:text-7xl font-['Nunito Sans']">Find Out More <span className='text-[#106eea] font-serif'>About US</span> </div>
                        <div className='p-4 text-justify mt-2 md:mt-10 md:mx-10 relative'>
                            <div className='absolute bg-[url("./assets/sipl.png")] bg-no-repeat bg-center w-full h-full opacity-30 left-0 top-0'></div>
                            <div className="flex text-sm md:text-base gap-7 justify-center flex-col items-center font-['Montserrat']">
                                <p>
                                    Sankrit Infotech Pvt. Limited (SIPL), established in 2011, has carved a niche for itself in the education sector by crafting customized software solutions. Their impressive client list is a testament to their ability to understand and fulfill the specific needs of educational institutions. One of their most notable clients is the esteemed BIT Mesra, highlighting SIPL's commitment to providing high-quality services.
                                </p>
                                <p>
                                    SIPL's core strength lies in its ability to move beyond generic, off-the-shelf software. They understand that educational institutions have unique requirements, and a one-size-fits-all approach simply doesn't work. Instead, SIPL takes the time to closely collaborate with their clients, meticulously analyzing their workflows, challenges, and long-term goals. This in-depth understanding allows them to tailor software solutions that seamlessly integrate into existing systems and address the specific needs of each institution.
                                </p>
                                <p>
                                    Imagine a scenario where a university struggles with a cumbersome admissions process, riddled with manual data entry and prone to errors. SIPL would step in, working with the admissions department to understand their pain points. They might develop a customized software solution that streamlines the application process, automates tasks, and provides a user-friendly interface for both students and administrators. This could involve features like online application forms, document management systems, and real-time progress tracking.
                                </p>

                                <p>
                                    SIPL's expertise extends beyond admissions. They can create customized software solutions for various departments within an educational institution, including:

                                    <ul className='flex justify-center items-center flex-col gap-3 list-disc pl-10 mt-5'>
                                        <li>

                                            Learning Management Systems (LMS): SIPL can develop platforms that facilitate online learning, allowing institutions to deliver course content, conduct assessments, and foster student-faculty interaction remotely.
                                        </li>
                                        <li>

                                            Library Management Systems: Their software can streamline library operations, automating tasks like book borrowing, cataloging, and inventory management. This can significantly improve efficiency and enhance the user experience for students and staff.
                                        </li>
                                        <li>

                                            Fee Management Systems: SIPL can design software that simplifies fee collection, automates payment reminders, and provides students and parents with a transparent view of their financial obligations.
                                        </li>
                                        <li>
                                            Student Information Systems (SIS): They can create comprehensive systems that manage student data, track academic progress, and generate reports. This can empower educators and administrators to make informed decisions regarding student performance and curriculum development.

                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    The benefits of SIPL's customized software solutions go beyond just streamlining operations. By automating tedious tasks and improving data management, SIPL's software can free up valuable time and resources for educators. This allows them to focus on what matters most – providing quality education to their students. Additionally, customized software can enhance communication and collaboration between students, faculty, and staff, fostering a more connected and efficient learning environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Skill />
                <Done />
            </div>
        </>
    )
}

export default about
