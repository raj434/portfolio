import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='bg-black text-white px-4 md:px-8 lg:px-16 fixed w-full top-0 z-10'>
      <div className='container py-3 flex justify-between items-center'>
        {/* Logo */}
           <div className='text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
          Raj Singh
        </div>
        
        {/* Links - Hidden on small screens */}
        <div className='hidden md:flex space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        
        {/* Connect Button - Hidden on small screens */}
        <button className='hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'>
          <a href="#contact">Contact</a>
        </button>

        {/* Hamburger Menu Icon - Visible on small screens */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden bg-black text-white text-center`}>
        <a href="#home" className='block py-2 hover:bg-gray-700'>Home</a>
        <a href="#about" className='block py-2 hover:bg-gray-700'>About Me</a>
        <a href="#service" className='block py-2 hover:bg-gray-700'>Services</a>
        <a href="#project" className='block py-2 hover:bg-gray-700'>Projects</a>
        <a href="#contact" className='block py-2 hover:bg-gray-700'>Contact</a>
        <button className='block w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 mt-2'>
         <a href="#contact" >Contact</a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
