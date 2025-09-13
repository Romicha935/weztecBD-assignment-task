import React from 'react'
import StateSection from './StateSection'

const HeroSection = () => {
  return (
    <div className='w-full bg-gradient-to-b from-[#861043] to-[#0f001a] text-white font-sans'>
          {/* hero section */}
          <section className='relative h-screen flex flex-col justify-center items-center text-center px-4'>
             <span className='bg-[#30044f] px-4 text-xs py-2 rounded-full uppercase'>Build for you</span>
             <h1 className='text-4xl md:text-6xl font-extrabold leading-tight mb-4 '>Built for <span className='text-gray-300'>Creators.</span> <br /> Powe<span className='text-gray-300'>red for Profit</span></h1>
            <p className='text-gray-300 max-w-2xl mb-16 '> Create and sell courses, consulting services, and communities – with
          Zero <br /> marketing cost and a built-in sales network.</p>
            {/* email input */}
            <div className='flex flex-col md:flex-row items-center gap-3 w-full max-w-md '>
              <input type="email" placeholder='Enter Your Email Here' className='px-4 py-3 bg-gray-700 rounded-full text-white md:w-72' />
                <button className='w-full md:w-auto md:px-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-700 to-blue-500 text-white text-center'>Start for free <br /> 
                <p className='md:text-xs text-[10px]'>No creadit card Require</p></button>

            </div>
            <p className="text-xs text-gray-400 mt-2">
          By proceeding you agree to our Platform Terms & Privacy Notice
        </p>
          </section> 
         <div className='px-10 pb-8 rounded-2xl'>
           <StateSection/>
         </div>
    </div>
  )
}

export default HeroSection