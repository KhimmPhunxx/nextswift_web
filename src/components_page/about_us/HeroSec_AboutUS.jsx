import React from 'react'

import bg1 from './../../assets/image/about/bg1.png'
import bg2 from './../../assets/image/about/bg2.png'

function HeroSec_AboutUS() {
  return (
    <>
        <main className=' w-full h-96 bg-gray-400'
                style={{
                    backgroundImage: `url(${bg1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
        >
            <section className=' flex items-center justify-center pt-56 space-x-4'>
                <h1 className=' text-3xl font-bold text-gray-800'>About Us</h1>
                <h1 className=' text-3xl font-bold text-gray-800'>|</h1> 
                <h1 className=' text-3xl font-bold text-gray-800'>Home</h1>
            </section>

        </main>

        <section className=' w-full '>
            <div className=' max-w-6xl mx-auto grid grid-cols-2 gap-10 py-20'> 
                <div className=' space-y-5'>
                    <h1 className=' text-xl font-medium'>WHAT WE DO</h1>
                    <p className=' text-3xl font-bold'>Cambodian Digital Marketing Agency</p>
                </div>
                <p className=' text-lg'>
                 NexSwift Solution is Cambodia s premier digital marketing agency 
                 for brands and businesses looking to establish, build upon, or
                  scale up an online presence. All digital marketing agency team 
                  supports you in all your projects so that you can achieve your objectives.
                </p>
            </div>
        </section>

        <section className=' w-full h-[500px] bg-red-500'
                style={{
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
        > 
        <div className=' w-full h-full bg-white bg-opacity-20 py-40 px-40 space-y-6'> 
            <h1 className=' text-3xl font-bold text-center text-gray-100'>Mission</h1>
            <p className=' text-xl text-gray-200 font-medium text-center'>To provide comprehensive and innovative digital marketing
                 services that help businesses reach
                  their target audience and achieve their goals.</p>
        </div>

        </section>
    </>
  )
}

export default HeroSec_AboutUS
