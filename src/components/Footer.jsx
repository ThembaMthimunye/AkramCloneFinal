import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#1a0a07] h-[17rem] mt-[5rem] ]'>
        <div className='flex justify-around text-white font-serif text-6xl  '>

           <p className='mt-[6rem]'>Agency</p>
           <p  className='mt-[6rem]'>Projects</p>
           <p  className='mt-[6rem]'>Blog</p>
           <p  className='mt-[6rem]'>Contact</p>

        </div>
        <hr  className='w-[99rem] ml-[9rem] mt-10 border-[#803737]'/>
        <div className=' text-[#803737]'>
             <p className=' ml-[9rem] mt-3'>© 2023 Akram Studio. All rights reserved.</p>
             <p className='ml-[100rem] '>Terms of use </p>
             <p>CGV</p>
        </div>
    </div>
  )
}

export default Footer
