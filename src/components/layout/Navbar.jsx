import React from 'react'
import Navigation_Bar from './Navigation-Bar'
import Logo from './Logo'

function Navbar() {
  return (
    <div className=' max-w-6xl mx-auto flex justify-between'>
        <div>
            <Logo />
        </div>
        <div>
            <Navigation_Bar />
        </div>
      
    </div>
  )
}

export default Navbar
