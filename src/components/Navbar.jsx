import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png'

const Navbar = () => {
    const [isMenu,setIsMenu] = useState(false)

    const navLinks = [
        {name:'Buy', path:'/'},
        {name:'Rent', path:'/'},
        {name:'Sell', path:'/'},
        {name:'Agents', path:'/'},
        {name:'Blogs', path:'/'},
        {name:'Contact Us', path:'/'},
    ]
  return (
    <nav className=' bg-white fixed py-2 top-0 w-full md:py-4 z-50 shadow'>
        <div className='container relative mx-auto flex justify-between items-center'>
            <NavLink to='/' className='flex items-center gap-0'>
                <h1 className='text-2xl font-bold text-pink-700 pr-7 flex items-center'> <img className='h-8 w-8 text-pink-700' src={logo} alt="" /> WeztecBD</h1>
            </NavLink>

            {/* dekstop menu */}
            <div>
                <ul className='hidden md:flex lg:flex gap-6'>
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
            <div className='flex gap-4 md:mr-2'>
                <button className='hover:text-pink-600 flex items-center'><CiHeart /> Favourite</button>
                <Link to='/login'><button className='bg-pink-900 py-1.5 px-3 sm:py-2 sm:px-5 rounded-full text-white cursor-pointer text-xs sm:text-sm md:text-base '>Login Now</button></Link>
          

            {/* mobile menu button */}
           
         <button
         onClick={() => setIsMenu(!isMenu)}
           className="text-2xl text-gray-700 md:px-10 hover:text-pink-700 ml-2"
            >
            {isMenu ? <FaTimes /> : <FaBars />}
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