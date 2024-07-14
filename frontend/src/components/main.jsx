import React from 'react'

function main() {
    return (
        <div className='modal flex justify-center md:flex-nowrap flex-wrap items-center gap-12 pt-5 p-32'>
            <MainModal title="Web Hosting" description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi" />
            <MainModal title="VPS" description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" />
            <MainModal title="Customised ERP" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" />
            <MainModal title="QGEN" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis" />
        </div>
    )
}
export default main

function MainModal(props) {
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1000" className='text-justify w-72 p-7 duration-500 hover:shadow-[0px_0px_5px_5px_rgba(132,89,226,0.7)] bg-[#252525] rounded-xl hover:scale-105'>
                <div className='mb-5 text-2xl font-bold'>{props.title}</div>
                <div className='text-lg font-normal'>{props.description}</div>
            </div>
        </div>
    )
}