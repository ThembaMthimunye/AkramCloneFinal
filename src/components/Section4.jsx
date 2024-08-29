import React from 'react'
import eli from "../assets/Eli.avif"
import main from "../assets/main.avif"
import main2 from "../assets/main2.avif"
import { MdOutlineArrowOutward } from "react-icons/md";

const Section4 = () => {
    return (

        <div className='flex m-[15rem] '  >
            <div>
                <img src={main} alt="" className='h-[75rem] w-[165rem] ' />

            </div>

            <div className='ml-[4rem]'>
                <h6 className=' font-semibold text-[#803737]'>Excellence is our standard</h6>
                <h1 className='text-7xl mt-7 font-serif'> What we offer</h1>
                <ul>
                    <li className=''>
                        <h2 className='text-4xl mt-[3rem] font-serif'>Customized space planning</h2>
                        <div class="group relative">
                            <p className='mt-[2rem] ml-[2rem] font-thin text-2xl'>Tailored space planning services to maximize functionality
                                and aesthetics, ensuring every square foot of your home or office is utilized
                                efficiently while reflecting your unique style and needs.</p>
                            <div class="absolute top-0 h-full w-0.5 bg-transparent transition-all duration-800 group-hover:bg-black">       
                            </div>
                        </div>
                        <hr className="my-4 border-t-2 border-gray-300" />

                    </li>

                    <li className=''>
                        <h2 className='text-4xl mt-[3rem] font-serif'>Customized space planning</h2>
                        <div class="group relative">
                            <p className='mt-[2rem] ml-[2rem] font-thin text-2xl'>Tailored space planning services to maximize functionality
                                and aesthetics, ensuring every square foot of your home or office is utilized
                                efficiently while reflecting your unique style and needs.</p>
                            <div class="absolute top-0 h-full w-0.5 bg-transparent transition-all duration-300 group-hover:bg-black">       
                            </div>
                        </div>
                        <hr className="my-4 border-t-2 border-gray-300" />

                    </li>

                    <li className=''>
                        <h2 className='text-4xl mt-[3rem] font-serif'>Customized space planning</h2>
                        <div class="group relative">
                            <p className='mt-[2rem] ml-[2rem] font-thin text-2xl'>Tailored space planning services to maximize functionality
                                and aesthetics, ensuring every square foot of your home or office is utilized
                                efficiently while reflecting your unique style and needs.</p>
                            <div class="absolute top-0 h-full w-0.5 bg-transparent transition-all duration-300 group-hover:bg-black">       
                            </div>
                        </div>
                        <hr className="my-4 border-t-2 border-gray-300" />

                    </li>


                    <li className=''>
                        <h2 className='text-4xl mt-[3rem] font-serif'>Customized space planning</h2>
                        <div class="group relative">
                            <p className='mt-[2rem] ml-[2rem] font-thin text-2xl'>Tailored space planning services to maximize functionality
                                and aesthetics, ensuring every square foot of your home or office is utilized
                                efficiently while reflecting your unique style and needs.</p>
                            <div class="absolute top-0 h-full w-0.5 bg-transparent transition-all duration-300 group-hover:bg-black">       
                            </div>
                        </div>
                        <hr className="my-4 border-t-2 border-gray-300" />

                    </li>

                </ul>
                <div className='flex text-2xl'>
                    <h4 className='font-light mt-7 hover:underline'>More information</h4>
                    <MdOutlineArrowOutward className='ml-5 mt-9 hover:rotate-45' />

                </div>


            </div>



        </div>

    )
}

export default Section4
