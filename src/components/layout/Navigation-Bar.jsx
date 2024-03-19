import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation_Bar() {
  return (
    <main className=' flex space-x-16  items-center py-2'>
        <nav>
            <ul className=' space-x-10 font-semibold'>
                <NavLink className=" text-black hover:text-red-500" to={"/"}>Home</NavLink>
                <NavLink className=" text-black hover:text-red-500" to={""}>About Us</NavLink>
                <NavLink className=" text-black hover:text-red-500" to={""}>Service</NavLink>
                <NavLink className=" text-black hover:text-red-500" to={""}>Blog</NavLink>
            </ul>
        </nav>
        <button className='px-6 rounded-full py-3 bg-red-600 hover:bg-red-400 duration-200 text-white'>Contact</button>
    </main>
  )
}

export default Navigation_Bar
