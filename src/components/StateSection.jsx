import React from 'react'

const StateSection = () => {
  return (
   <div className='py-5 border rounded-3xl   border-gray-400'>
    <div className='flex justify-between items-center px-8'>
         <h2 className="text-lg text-gray-300 md:text-xl font-semibold text-center mb-6">
          Sell from day one – even with zero audience
        </h2>
        <button className='px-4 py-2 text-xs cursor-pointer rounded-full border border-gray-400'>Open calculator</button>
    </div>
     <div className='grid grid-cols-1 px-5 py-6  sm:grid-cols-2 md:grid-cols-4 gap-6 text-center'>
        <div className='bg-[#1e042e] py-4 text-left'>
            <p className='text-gray-400 text-sm'>CO-SELLERS IN NETWORK</p>
            <h3 className='font-bold text-2xl'>21,500+</h3>
            <p className='text-gray-400'>People who can co-promote</p>
        </div>
       
        <div className='bg-[#1e042e] p-4 text-left'>
            <p className='text-gray-400 text-sm'>EXPECTED BUYERS / MONTH</p>
            <h3 className='font-bold text-2xl'>86</h3>
            <p className='text-gray-400'>With zero personal audience</p>
        </div>
        <div className='bg-[#1e042e] p-4 text-left'>
            <p className='text-gray-400 text-sm'>EST. MRR AT US$9/MO</p>
            <h3 className='font-bold text-2xl'>US$774</h3>
            <p className='text-gray-400'>From membership sales</p>
        </div>
         <div className='bg-[#1e042e] p-4 text-left'>
            <p className='text-gray-400 text-sm'>EARN W/O A PRODUCT</p>
            <h3 className='font-bold text-2xl'>US$300</h3>
            <p className='text-gray-400'>Just by co-selling</p>
        </div>
        
    </div>
    <div>
            <button className='bg-amber-100 w-full text-black   py-3  text-sm text-center'>   Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and convert
          clients inside the platform so you can sell from day one.</button>
        </div>
   </div>
  )
}

export default StateSection