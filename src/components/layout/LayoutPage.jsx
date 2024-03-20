import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Fotter from './Fotter'

function LayoutPage() {
  return (
    <>
        <main className=' w-full bg-red-200 shadow-xl bg-opacity-60 z-50 sticky top-0'>
            <Navbar />
        </main>
        <Outlet />
        <footer >
          <Fotter />
        </footer>
        
    </>
  )
}

export default LayoutPage
