import React from 'react'
import eli from "../assets/Eli.avif"
import main from "../assets/main.avif"
import main2 from "../assets/main2.avif"
import { MdOutlineArrowOutward } from "react-icons/md";

const Section4 = () => {
  return (
    
    <div className='flex m-[15rem] '  >
         <div>
         <img src={main} alt="" className='h-[75rem] w-[165rem]' />

         </div>
    
       <div className='ml-[4rem]'>
         <h6 className=' font-semibold text-[#803737]'>Excellence is our standard</h6>
        <h1 className='text-7xl mt-7 font-serif'> What we offer</h1>    
        <ul>
            <li className=''>
                <h2 className='text-4xl mt-[3rem] font-serif'>Customized space planning</h2>
                <p className='mt-[2rem]  font-thin text-2xl'>Tailored space planning services to maximize functionality
                 and aesthetics, ensuring every square foot of your home or office is utilized
                 efficiently while reflecting your unique style and needs.</p>
                 <hr className="my-4 border-t-2 border-gray-300" />
            </li>

            <li className=''>
                <h2 className='text-4xl mt-[3rem] font-serif'>Interior decoration</h2>
                <p className='mt-[2rem]  font-thin text-2xl'>Comprehensive interior decoration
                     services, including furniture selection, color scheme development, and accessory
                      curation, to create cohesive and visually appealing spaces that harmonize with your lifestyle.</p>
                 <hr className="my-4 border-t-2 border-gray-300" />
            </li>

            <li className=''>
                <h2 className='text-4xl mt-[3rem] font-serif'>Renovation and Remodeling</h2>
                <p className='mt-[2rem]  font-thin text-2xl'>Expert renovation and remodeling services to breathe new 
                    life into your existing space. From minor updates to full-scale renovations, our team will handle 
                    every aspect of the project, from design conceptualization to construction management.</p>
                 <hr className="my-4 border-t-2 border-gray-300" />
            </li>
            <li className=''>
                <h2 className='text-4xl mt-[3rem] font-serif'>Smart home integration</h2>
                <p className='mt-[2rem]  font-thin text-2xl'>Cutting-edge smart home integration services to enhance comfort, convenience, and security.
                     From automated lighting and climate control systems to integrated entertainment setups, we'll help 
                     you transform your space into a modern and technologically advanced environment.</p>
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
