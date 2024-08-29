import React from 'react'
import main7 from '../assets/main7.avif'
import { MdOutlineArrowOutward } from "react-icons/md";


const Section7 = () => {
  return (
    <div className="bg-section-7 h-[38rem] w-[100rem] m-[10rem]  bg-no-repeat bg-cover bg-center">
     <div className=' pt-[4rem] ml-[8rem] '>
                   
                    <h1 className='text-7xl mt-7 font-serif text-white max-w-[60rem] '>Let's create  something extraordinary</h1>
                    <p className='font-light text-2xl mt-7 text-gray-200 max-w-[40rem]'>Ready to embark on a journey of transformation ? </p> 
                    <p className='font-light text-2xl  text-gray-200 max-w-[60rem]'>
                    Together, let's create something extraordinary that reflects your style, enhances your space, and enriches your life.</p>
                    <div className='flex text-2xl mt-[4rem]'>
                        <h4 className='font-light mt-7 font-semibold  text-gray-200 hover:underline'>Contact us</h4>
                        <MdOutlineArrowOutward className='ml-5 mt-7 text-white text-4xl hover:rotate-45' />

                    </div>
          </div>          
        

      
    </div>
  )
}

export default Section7
