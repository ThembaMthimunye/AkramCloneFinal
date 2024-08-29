import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import min8 from '../assets/sec8num2.png'
import min9 from '../assets/sec8num1.png'

const Section8 = () => {
  return (
<div className='ml-[10rem]  font-serif mt-[10rem]'>
    <div>
    <h6 className=' font-semibold text-[#803737]'>BLOG</h6>
        <h1 className='text-7xl text-black mt-[0.5rem] max-w-[70rem] leading-[6rem] '>
        Discovering the tips of interior spaces art.
        </h1>
        <p className='mt-[2rem]  text-2xl text-brown-200 '>
        Exploring trends, tips, and inspiration for your perfect home.
        </p>
    </div>

    <div className='flex  mr-[4rem] mt-[3rem] gap-10  '>
        <div >
            <div className=' flex  mb-[2rem] text-3xl hover:underline   '>
            The power of color : Transforming your Space
            <MdOutlineArrowOutward className='ml-5 mt-1  text-3xl hover:rotate-45' />
             
            </div >

           

            <p className='max-w-[50rem] font-light text-[20px] text-gray-400 ' >Discover how the strategic use of color can completely transform any room, influencing mood, perception, and even the functionality of the space.
            </p>
            <p className='mt-8 tont-light text-gray-400'>Jan 13, 2022</p>
            <img src={min9} className='h-[16rem]  w-[41rem] mt-8'/>

            
            
            
        </div>


        <div >
            <div className=' flex  mb-[2rem] text-3xl hover:underline   '>
            <p className='max-w-[40rem]'>Maximizing Small Spaces: Innovative Design Solutions</p>
            <MdOutlineArrowOutward className='  text-3xl hover:rotate-45' />
             
            </div >

           

            <p className='max-w-[100rem] font-light text-[20px] text-gray-400' >Explore creative and practical design strategies for making the most out of small living areas.</p>
            <p className='mt-8 tont-light text-gray-400'>Apr 8, 2022</p>
            <img src={min8} className='h-[16rem]  w-[41rem] mt-8'/>
            
            
        </div>

    </div>



</div>
  )
}

export default Section8
