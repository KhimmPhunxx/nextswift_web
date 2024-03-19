import React from 'react'
import logo from './../../assets/image/logo/logo.png'

function Logo() {
  return (
    <div className='flex items-center space-x-3 cursor-pointer'>
        <div className=' h-full w-16 '>
            <img className=' w-full h-full object-cover' src={logo} alt="" />
        </div>
      <h1 className=' text-xl font-bold text-gray-900'>NexSwift Solutions</h1>
    </div>
  )
}

export default Logo
