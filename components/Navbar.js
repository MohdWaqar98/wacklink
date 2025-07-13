"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // lucide-react for icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className='bg-purple-700 text-white'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
        <div className='font-bold text-xl'>
          <Link href="/">WackLink</Link>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-6 items-center'>
          <Link href="/"><li className='hover:underline'>Home</li></Link>
          <Link href="/about"><li className='hover:underline'>About</li></Link>
          <Link href="/generate"><li className='hover:underline'>Shorten</li></Link>
          <Link href="/contact"><li className='hover:underline'>Contact Us</li></Link>
          <li className='flex gap-3'>
            <Link href="/generate">
              <button className='bg-purple-500 rounded-lg shadow px-4 py-1 hover:bg-purple-600 transition'>Try Now</button>
            </Link>
            <Link href="/github">
              <button className='bg-purple-500 rounded-lg shadow px-4 py-1 hover:bg-purple-600 transition'>Github</button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {menuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className='flex flex-col md:hidden bg-purple-800 text-white px-4 py-2 gap-4'>
          <Link href="/" onClick={toggleMenu}><li>Home</li></Link>
          <Link href="/about" onClick={toggleMenu}><li>About</li></Link>
          <Link href="/generate" onClick={toggleMenu}><li>Shorten</li></Link>
          <Link href="/contact" onClick={toggleMenu}><li>Contact Us</li></Link>
          <li className='flex flex-col gap-2'>
            <Link href="/generate">
              <button className='bg-purple-500 rounded-lg px-4 py-2'>Try Now</button>
            </Link>
            <Link href="/github">
              <button className='bg-purple-500 rounded-lg px-4 py-2'>Github</button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
