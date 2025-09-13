import React from 'react'
import { FaFingerprint, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { PiTiktokLogoLight, PiTwitchLogoBold } from 'react-icons/pi'

import { RiFacebookCircleLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-gray-700 to-pink-950 text-gray-300 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-20'>
            {/* about */}
            <div className='text-left md:text-center'>
               <h3 className='text-lg font-bold mb-1'>About Us</h3>
               <ul className=''>
                <li className=''><a href="#" className='hover:text-white'>Resource</a></li>
                <li className=''><a href="#" className='hover:text-white'>Company</a></li>
                <li className=''><a href="#" className='hover:text-white'>Property</a></li>
                <li className=''><a href="#" className='hover:text-white'>Contact Us</a></li>
               </ul>
            </div>
            {/* contact */}
            <div className='text-left md:text-center'>
               <h3 className='text-lg font-bold mb-1'>Contact Us</h3>
               <p>hello abc@gmail.com</p>
               <p>+01223344556</p>
            </div>
            {/* fllow */}
            <div className='text-left md:text-center items-center'>
               <h3 className='text-lg font-bold mb-1 text-left'>Follow Us</h3>
               <div className='flex items-center text-center space-x-2  font-bold text-xl'>
                <a href="#" className='hover:text-white'> <RiFacebookCircleLine />
 </a>
                <a href="#" className='hover:text-white'> <FaFingerprint /></a>
                <a href="#" className='hover:text-white'> <FaWhatsapp /> </a>
                <a href="#" className='hover:text-white'> <PiTwitchLogoBold /> </a>
                <a href="#" className='hover:text-white'> <PiTiktokLogoLight /> </a>
               </div>
               <p className='mt-12'>@2025Havenix.All rights reserved</p>
            </div>
        </div>
       <div className="w-full t flex justify-center items-center">
  <h1 className="text-[15vw]  font-bold  whitespace-nowrap">
    <span className='text-gray-400'>Wize</span>tecBD
  </h1>
</div>

    </div>
  )
}

export default Footer