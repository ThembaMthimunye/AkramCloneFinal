import React from 'react'
import eli from "../assets/Eli.avif"
import { MdOutlineArrowOutward } from "react-icons/md";

const HeroSection = () => {
    return (
        <div className='bg-[#FCF5F0]'>
            <div className='flex justfy-between pl-[17rem] pr-[14rem] mt-20'  >
                <div className=' mt-[13rem] '>
                    <h6 className=' font-semibold text-[#803737]'>Where Design Transforms Living</h6>
                    <h1 className='text-7xl mt-7 font-serif'> Transform your space & elevate your Life with Akram studio</h1>
                    <h4 className='font-light text-2xl mt-7'>Experience the power of inspired spaces.</h4>
                    <div className='flex text-2xl'>
                        <h4 className='font-light mt-7 hover:underline'>Find out how we work</h4>
                        <MdOutlineArrowOutward className='ml-5 mt-9 hover:rotate-45' />

                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        className="object-cover h-[60rem] w-[120rem] max-w-full"
                        src={eli}
                        alt="Eli"
                    />
                </div>
            </div>
            <div className='flex'>

            </div>
            <div className=''>


                <div className="relative overflow-hidden h-[12rem] flex items-center mt-16  mb-4">
                    <div className="w-full ml-[17rem]">
                        <p className="font-semibold text-[#803737] ">+ 238 loyal customers</p>
                        <h2 className="font-semibold text-4xl mt-2 mr-[75rem]">
                            Exceptional customers all over the world
                        </h2>
                    </div>
                    <div className="absolute whitespace-nowrap animate-scroll text-4xl ml-[70rem]">
                        <p>flowTheSun flowTheSun  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection

