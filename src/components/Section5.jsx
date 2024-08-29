import React from 'react'
import eli from "../assets/Eli.avif"
import { MdOutlineArrowOutward } from "react-icons/md";
import main from "../assets/main-image.avif"
import { HiArrowLongRight } from "react-icons/hi2";



const Section5 = () => {
    return (
        <div className='flex items-center bg-[#1a0a07]'>
            <div className='justfy-between ml-[10rem] '  >
                <ul>
                    <li className=''>
                        <div className='flex'>
                            <h2 className='text-4xl text-white mt-[3rem] font-serif'>ModaMeadows</h2>
                            <HiArrowLongRight className='text-7xl text-white mt-[3rem] ml-[30rem]'/>
                        </div>
                        <hr className="w-[50rem] h-0.1  border-gray-100" />
                    </li>

                    <li className=''>
                        <div className='flex'>
                            <h2 className='text-4xl text-white mt-[3rem] font-serif'>ZenithSpaces</h2>
                            <HiArrowLongRight className='text-7xl text-white mt-[3rem] ml-[32rem] font-serif'/>
                        </div>
                        <hr className="w-[50rem] h-1  border-gray-300" />
                    </li>

                    <li className=''>
                        <div className='flex'>
                            <h2 className='text-4xl text-white mt-[3rem] font-serif'>VerveVilla</h2>
                            <HiArrowLongRight className='text-7xl text-white mt-[3rem] ml-[35rem] font-serif'/>
                        </div>
                        <hr className="w-[50rem] h-1  border-gray-300" />
                    </li>
                    <li className=''>
                        <div className='flex'>
                            <h2 className='text-4xl text-white mt-[3rem] font-serif'>EcoHaven Studios</h2>
                            <HiArrowLongRight className='text-7xl text-white mt-[3rem] ml-[27rem] font-thin'/>
                        </div>
                        <hr className="w-[50rem] h-1   border-gray-300" />
                    </li>

                    <li className=''>
                        <div className='flex'>
                            <h2 className='text-4xl text-white mt-[3rem] font-serif'>LuxeLoft</h2>
                            <HiArrowLongRight className='text-7xl text-white mt-[3rem] ml-[36rem] font-serif'/>
                        </div>
                        <hr className="w-[50rem] h-1  border-gray-300" />
                    </li>

                    <li className=''>
                        <div className='flex'>
                            <h2 className='text-4xl text-white mt-[3rem] font-serif'>Beaverdale </h2>
                            <HiArrowLongRight className='text-7xl text-white mt-[3rem] ml-[34rem] font-serif'/>
                        </div>
                        <hr className="w-[50rem] h-1  border-gray-300" />
                    </li>

                </ul>
                <div className='flex text-2xl mt-[3rem] mb-[3rem]'>
                    <h4 className='text-white font-light mt-7 hover:underline'>All our projects</h4>
                    <MdOutlineArrowOutward className='ml-5 mt-9 hover:rotate-45 text-white' />
                </div>
            </div>
            <div className="flex justify-center ml-[5rem]  pt-5">
                <img
                    className="object-cover h-[55rem] w-[45rem] max-w-full"
                    src={main}
                    alt="Eli"
                />
            </div>
        </div>
    )
}

export default Section5

