import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isMenu,setIsMenu] = useState(false)

    const navLinks = [
        {name:'Buy', path:'/'},
        {name:'Rent', path:'/rent'},
        {name:'Sell', path:'/sell'},
        {name:'Agents', path:'/agents'},
        {name:'Blogs', path:'/blog'},
        {name:'Contact Us', path:'/contact'},
    ]
  return (
    <nav className='bg-white fixed py-2 top-0 w-full md:py-4 z-50 shadow'>
        <div className='container relative mx-auto flex justify-between items-center'>
            <NavLink to='/' className='flex items-center gap-0'>
                <h1 className='text-2xl font-bold text-pink-700'>WeztecBD</h1>
            </NavLink>

            {/* dekstop menu */}
            <div>
                <ul className='hidden md:flex gap-6'>
                {navLinks.map((link)=> (
                    <NavLink key={link.name} to={link.path} className="text-pink-700"
                    // className={({isActive})=> isActive ? "text-pink-500" : "text-white"}
                    >
                    {link.name}
                    </NavLink>
                ))}
                </ul>
            </div>

            {/* right side */}
            <div className='flex gap-4'>
                <button className='hover:text-pink-600 flex items-center'><CiHeart /> Favourite</button>
                <button className='bg-pink-900 py-1 px-4 rounded-full text-white'>Login Now</button>
          

            {/* mobile menu button */}
            <button onClick={()=> setIsMenu(!isMenu)} 
            className='md:hidden px-10 mr-6 text-2xl text-gray-700 hover:text-pink-700'>
                {isMenu ? <FaTimes/> : <FaBars/> }
            </button>
            </div>
              </div>

            {/* mobile menu */}
            {isMenu && (
                <div className='md:hidden bg-white w-1/2 pt-10 shadow-lg absolute text-black right-2 mr-6'>
                <ul className=' flex flex-col gap-2'>
                {navLinks.map((link)=> (
                    <NavLink key={link.name} to={link.path} className="text-pink-700"
                    // className={({isActive})=> isActive ? "text-pink-500" : "text-white"}
                     onClick={()=> setIsMenu(false)}
                    >
                    {link.name}
                    </NavLink>
                ))}
                </ul>
            </div>
            )}

        
    </nav>
  );
}

export default Navbar