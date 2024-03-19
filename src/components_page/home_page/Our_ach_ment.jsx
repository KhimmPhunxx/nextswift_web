import React, { useEffect } from 'react'

import ment_01 from './../../assets/image/homePage/ment_01.png';
import ment_02 from './../../assets/image/homePage/ment_02.png';
import ment_03 from './../../assets/image/homePage/ment_03.png';
import ment_04 from './../../assets/image/homePage/ment_04.png';
import ment_05 from './../../assets/image/homePage/ment_05.png';
import ment_06 from './../../assets/image/homePage/ment_06.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Our_ach_ment() {

   useEffect(() => {
         AOS.init({
              duration : 900
         })
    }, [])

    const card = [
        {
            id: 1,
            image: ment_01

        },
        {
            id: 2,
            image: ment_02

        },
        {
            id: 3,
            image: ment_03

        },
        {
            id: 4,
            image: ment_04

        },
        {
            id: 5,
            image: ment_05

        },
        {
            id: 6,
            image: ment_06

        }
    ]
  return (
  <main>
    <section className='max-w-6xl mx-auto'>
        <h1 className=' text-3xl font-bold text-gray-700'>Our achievements</h1>

        <div className=' grid grid-cols-3 gap-6 mt-5'> 
            {
                card.map((item, index) => {
                    return (
                        <div key={index} className='border border-red-400 bg-white rounded-lg shadow-lg px-6 py-6 space-y-4 cursor-pointer' data-aos="fade-up">
                            <img src={item.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
    </section>
  </main>
  )
}

export default Our_ach_ment
