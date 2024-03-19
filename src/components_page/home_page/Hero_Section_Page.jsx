import React, { useEffect } from 'react'

import bg_img from './../../assets/image/homePage/HeroSection.png'
import bg_img2 from './../../assets/image/homePage/hs_1.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

function Hero_Section_Page() {

    useEffect(() => {
        Aos.init({
            duration : 900
        })
    }, [])

  return (
   <main className=' w-full h-[730px] bg-red-500 mt-[-64px]'
        style={{
            backgroundImage: `url(${bg_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
       
        >
 
            <section className=' grid grid-cols-2 max-w-6xl mx-auto pt-40'  data-aos="fade-up">
                <div className='space-y-10 mt-32'>
                  <div className=' space-y-4'>
                        <h1 className=' text-4xl font-bold text-black'>Digital Marketing Agency and IT Solution</h1>
                        <p className=' text-black text-lg'>We help your business grow faster and better.</p>
                  </div>
                   <div className=' space-x-5'>
                        <button className=' px-6 py-3 bg-red-600 hover:bg-red-500 duration-200 text-white rounded-lg'>Contact Us</button>
                        <button className=' px-6 py-3 border-2 border-red-500 hover:bg-red-400 duration-200 text-white rounded-lg'>Service</button>
                   </div>
                </div>
                <div className=' flex justify-center items-center'>
                    <div className=' h-[500px] w-[500px] rounded-xl bg-red-600'>
                        <img className=' w-full h-full object-cover rounded-xl hover:scale-110 duration-500 cursor-pointer' src={bg_img2} alt="" />
                    </div>
                </div>

            </section>
   </main>
  )
}

export default Hero_Section_Page
