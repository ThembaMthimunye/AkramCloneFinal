import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";


const Section9 = () => {
    return (
        <div>

            <div className='flex  '  >

                <div className=' mt-[10rem] ml-[17rem] '>
                    <h1 className='text-7xl mt-7 font-serif text-black  max-w-[40rem] '>Your questions answered</h1>
                    <p className='font-light text-2xl mt-7 text-gray-600 max-w-[40rem]'>Expert guidance to navigate your interior design journey. </p>

                    <div className='flex text-2xl mt-[4rem]'>
                        <h4 className='font-light mt-7 font-semibold  text-gray-600 hover:underline'>Contact us</h4>
                        <MdOutlineArrowOutward className='ml-5 mt-7 text-gray-600  hover:rotate-45' />

                    </div>



                </div>
                <div className='mt-[10rem] mr-[10rem] '>
                    <ul>
                        <li className=' ml-[15rem]'>
                            <div className='flex'>
                                <h2 className='text-3xl text-black mt-[3rem] font-serif'>How Much Does Interior Design Cost?</h2>
                                <MdOutlineArrowOutward className='text-7xl text-black mt-[2rem] ml-[10rem]' />
                            </div>
                            <hr className="w-[50rem] h-0.1  border-black" />
                        </li>

                        <li className=' ml-[15rem]'>
                            <div className='flex'>
                                <h2 className='text-3xl text-black mt-[3rem] font-serif '>Why Should I Hire an Interior Designer ?</h2>
                                <MdOutlineArrowOutward className='text-7xl text-black mt-[2rem] ml-[10rem]' />
                            </div>
                            <hr className="w-[50rem] h-1  border-black" />
                        </li>

                        <li className=' ml-[15rem]'>
                            <div className='flex '>
                                <h2 className='text-3xl text-black mt-[3rem] font-serif max-w-[35rem]'>How Do I Choose the Right Interior Designer for My Project?</h2>
                                <MdOutlineArrowOutward className='text-7xl text-black mt-[2rem] ml-[10rem]' />
                            </div>
                            <hr className="w-[50rem] h-1  border-black" />
                        </li>
                        <li className=' ml-[15rem]'>
                            <div className='flex'>
                                <h2 className='text-3xl text-black mt-[3rem] font-serif'>What Should I Expect During the Design Process?</h2>
                                <MdOutlineArrowOutward className='text-7xl text-black mt-[2rem] ml-[7rem]' />
                            </div>
                            <hr className="w-[50rem] h-1  border-black" />
                        </li>
                    </ul>
                </div>

            </div>





        </div>
    )
}

export default Section9
