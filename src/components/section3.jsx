import React from 'react'
import eli from "../assets/Eli.avif"
import toppic from "../assets/top-section_3.avif"
import bottompic from "../assets/bottom-section_3.avif"
import { MdOutlineArrowOutward } from "react-icons/md";

function Section2() {
    return (


        <div className='flex  '  >

            <div className=' mt-[10rem] ml-[17rem] mr-[10rem] '>
                <h6 className=' font-semibold text-[#803737]'>Why us ?</h6>
                <h1 className='text-7xl mt-7 font-serif'> Why choose Akram studio?</h1>
                <h4 className='font-light text-2xl mt-7'>Experience the difference with us. With a passion for design and a commitment to excellence, we go above and beyond to exceed your expectations. 
                From our personalized approach to our unwavering dedication to quality, we are your trusted partner in creating spaces that not only look exceptional but also feel truly yours..</h4>
                <div className='flex text-2xl'>
                    <h4 className='font-light mt-7 hover:underline'>Discover Akram studio</h4>
                    <MdOutlineArrowOutward className='ml-5 mt-9 hover:rotate-45' />

                </div>
            </div>
            <div className='relative mr-[20rem] '>
                <img className='absolute ml-[9rem] w-[120rem] h-[30rem] mt-[7rem]' src={toppic} alt="" />
                <img className=' w-[100rem] h-[35rem] mt-[15rem]' src={bottompic} alt="" />
            </div>

        </div>


    )
}

export default Section2;

