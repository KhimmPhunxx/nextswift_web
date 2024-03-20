import React, { useEffect } from 'react'

import ment_01 from './../../assets/image/homePage/ment_01.png';
import ment_02 from './../../assets/image/homePage/ment_02.png';
import ment_03 from './../../assets/image/homePage/ment_03.png';
import { HiArrowLongRight } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Latest_New() {

    useEffect(() => {
        AOS.init({
            duration : 900
        })
    }, [])

    const card = [ 
        {
            id: 1,
            title: "Monthly poster design package",
            desc: "40% discount on 3rd design package",
            image: ment_01

        },
        {
            id: 2,
            title: "Special discount package has arrived!",
            desc: "There are 3 types of monthly poster design service package according to customer needs:",
            image: ment_02

        },
        {
            id: 3,
            title: "Facebook Page Management Services",
            desc: "For more information, you can chat to Pak or contact by phone and telegram 096 212 960/068 892 207",
            image: ment_03

        }
    ]


  return (
   <main>
    <section className=' max-w-6xl mx-auto'>
        <h1 className=' text-2xl font-bold text-gray-800'>Latest New</h1>
        <div className=' grid grid-cols-3 gap-6 mt-5'> 
    
        {
            card.map((item, index) => {
                return (
                    <div key={index} className=' bg-white rounded-lg shadow-md p-5 border'
                        data-aos="fade-right">
                        <img className=' w-full h-[300px] object-cover rounded-lg' src={item.image} alt="" />
                        <div className='h-44'>
                            <h1 className=' text-lg font-bold mt-3 text-center'>{item.title}</h1>
                            <p className=' text-gray-600 mt-2 text-center'>{item.desc}</p>
                        </div>

                        <div className=' flex space-x-1'>
                            <NavLink className=' text-md text-red-500'>Read more </NavLink> <HiArrowLongRight className='text-red-500 text-2xl mt-1/2' />
                        </div>
                    </div>
                )
            })
        }

        </div>
    </section>

   </main>
  )
}

export default Latest_New
