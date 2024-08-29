import React from 'react'
import eli from "../assets/Eli.avif"
import toppic from "../assets/top.avif"
import bottompic from "../assets/bottom.avif"
import { MdOutlineArrowOutward } from "react-icons/md";

function Section2() {
    return (


        <div className='flex  pl-[17rem] pr-[14rem]'  >
            <div className='relative  '>
                <img className='absolute ml-[10rem] w-[50rem] h-[20rem] mt-[7rem]' src={toppic} alt="" />
                <img className=' w-[100rem] h-[35rem] mt-[10rem]' src={bottompic} alt="" />
            </div>

            <div className=' mt-[10rem] ml-[30rem] '>
                <h6 className=' font-semibold text-[#803737]'>A design which made the difference</h6>
                <h1 className='text-7xl mt-7 font-serif'> Elevate your space with unique interior designs</h1>
                <h4 className='font-light text-2xl mt-7'>At Akram studio, we don't just design spaces; we create experiences.
                    Our mission is to elevate your living or working environment to new heights, crafting bespoke designs that
                    inspire, comfort, and energize. From concept to completion, we blend creativity with functionality to transform
                    your vision into reality.</h4>
                <div className='flex text-2xl'>
                    <h4 className='font-light mt-7 hover:underline'>Discover our project</h4>
                    <MdOutlineArrowOutward className='ml-5 mt-9 hover:rotate-45' />

                </div>
            </div>

        </div>


    )
}

export default Section2;

