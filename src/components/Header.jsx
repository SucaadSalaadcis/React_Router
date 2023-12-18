import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='text-white px-5 py-6 bg-sky-500 flex justify-between'>
    <h1 className='text-5xl font-bold'>Somali <span className='text-rose-400'>Quotes</span></h1>
   
    <ul className='hidden sm:flex  sm:mt-0 sm:space-y-0 flex-col sm:flex-row  mt-16 space-y-6 sm:space-x-12 text-4xl'>
       <li className='hover:underline cursor-pointer'><NavLink to="/home">Home</NavLink> </li>
       <li className='hover:underline cursor-pointer'><NavLink to="/about">About</NavLink></li>
       <li className='hover:underline cursor-pointer'><NavLink to="/service">Services</NavLink> </li>
       <li className='hover:underline cursor-pointer'><NavLink to="/contact">Contact</NavLink></li>
    </ul>
   </div>
  )
}

export default Header