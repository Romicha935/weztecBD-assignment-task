import React, { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const navLinks = [
    { name: 'Buy', path: '/' },
    { name: 'Rent', path: '/rent' },
    { name: 'Sell', path: '/sell' },
    { name: 'Agents', path: '/agents' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className='bg-white fixed top-0 w-full z-50 shadow'>
      <div className='container mx-auto flex justify-between items-center py-3 px-4 md:py-4 relative'>
        {/* Logo */}
        <NavLink to='/' className='flex items-center gap-2'>
          <img className='h-8 w-8' src={logo} alt='logo' />
          <h1 className='text-2xl font-bold text-pink-700'>WeztecBD</h1>
        </NavLink>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-6'>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className='text-pink-700 hover:text-pink-900'
            >
              {link.name}
            </NavLink>
          ))}
        </ul>

        {/* Right section */}
        <div className='flex items-center gap-3'>
          <button className='hidden sm:flex items-center gap-1 hover:text-pink-600'>
            <CiHeart /> Favourite
          </button>

          <Link to='/login'>
            <button className='bg-pink-900 py-1.5 px-3 sm:py-2 sm:px-5 rounded-full text-white text-xs sm:text-sm md:text-base'>
              Login Now
            </button>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenu(!isMenu)}
            className='md:hidden text-2xl text-gray-700 hover:text-pink-700'
          >
            {isMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

       
        {isMenu && (
          <div className='md:hidden absolute top-full right-0 w-48 bg-white shadow-lg rounded-lg mt-2'>
            <ul className='flex flex-col gap-2 p-4'>
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className='text-pink-700 hover:text-pink-900'
                  onClick={() => setIsMenu(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
