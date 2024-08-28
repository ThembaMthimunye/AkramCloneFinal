import React from 'react'

function section2() {
  return (
    <div>
            <div className='flex justfy-between pl-[17rem] pr-[14rem] '  >
                <div className=' mt-[10rem] '>
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
                        className="object-cover h-[47rem] w-[120rem] max-w-full"
                        src={eli}
                        alt="Eli"
                    />
                </div>
            </div>

    </div>
  )
}

export default section2

