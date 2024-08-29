import React from 'react'
import { FaStar } from "react-icons/fa";

const Section6 = () => {
    return (
        <div className='ml-[10rem]  font-serif mt-[10rem]'>
            <div>
                <h1 className='text-6xl text-black mt-[3rem] '>
                    Hear from our satisfied customers
                </h1>
                <p className='mt-[2rem]  text-2xl '>
                    Discover what our clients have to say about their experience with us.
                </p>
            </div>

            <div className='flex  mr-[4rem] mt-[3rem]  text-2xl text-gray-700'>
                <div >
                    <div className='flex mb-[2rem]'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div >
                    <p className='mr-[15rem] ' >"Working with Akram studio was an absolute pleasure. Their attention to detail, creativity, and professionalism truly exceeded my expectations. From the initial consultation to the final reveal, every step of the process was seamless. I couldn't be happier with the transformation of my space. Highly recommend."
                    </p>
                </div>
                <div className='mr-[10rem]' >
                    <div className='flex mb-[2rem]'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <p className=''>"I am absolutely thrilled with the transformative design provided by Akram studio. They took my vision and turned it into a reality, creating a space that is not only beautiful but also functional. Thank you for making my house feel like a home !"</p>
                </div>

            </div>

            <div className='flex mt-[6rem]'>
                <div >
                     <h2 className='text-4xl mt-[3rem] ml-[1rem] font-serif'>Sarah Johnson</h2>
                <div class="group relative">
                    <p className='mt-[0rem]   ml-[1rem] font-thin text-1xl'>Directrice Marketing, Zen Corporation</p>
                    <div class="absolute top-0 h-[5rem] w-0.5  transition-all duration-300 bg-black mt-[-3rem]">
                    </div>
                </div>
                
                </div>

                <div className='ml-[35rem]'>
                     <h2 className='text-4xl mt-[3rem] ml-[1rem] font-serif'>Daniel Miller</h2>
                <div class="group relative">
                    <p className='mt-[0rem]  font-thin ml-[1rem] text-1xl'> PDG, InnovateTech Solutions</p>
                    <div class="absolute top-0 h-[5rem] w-0.5  transition-all duration-300 bg-black mt-[-3rem]">
                    </div>
                </div>
               
                </div>
               
            </div>


        </div>
    )
}

export default Section6
