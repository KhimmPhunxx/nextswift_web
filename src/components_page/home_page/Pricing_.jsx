import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Pricing_() {

    useEffect(() => {
        AOS.init({
            duration : 900
        })
    }, [])

    const card = [
        {
            id : 1,
            name: "Basic",
            desc : [
                "Get Facebook Page Management",
                "Get 1 photo design / week",
                "Get 1 short video production (30 seconds to 1 minute)",
                "Get Caption with poster and video",
                "Get support 4h / week (Reply comment and chat)"
            ],
            price: 120
        },
        {
            id : 2,
            name: "Standard",
            desc : [
                "Get Facebook Page Management",
                "Get 2 photo design / week",
                "Get 2 short video production (30 seconds to 1 minute)",
                "Get Caption with poster and video",
                "Get support 8h / week (Reply comment and chat)"
            ],
            price: 250
        },
        {
            id : 3,
            name: "Premium",
            desc : [
                "Get Facebook Page Management",
                "Get 4 photo design / week",
                "Get 4 short video production (30 seconds to 1 minute)",
                "Get Caption with poster and video",
                "Get support 16h / week (Reply comment and chat)"
            ],
            price: 500
        }
    ]

  return (
   <main className=' w-full'>
        <section className=' max-w-6xl mx-auto'>
            <h1 className=' text-3xl font-bold text-gray-800 text-center'>Pricing</h1>
            <div className=' grid grid-cols-3 gap-6 mt-8'>
                {
                    card.map((item, index) => {
                        return (
                            <div key={index} className=' bg-white rounded-2xl shadow-md p-8 border border-red-500 py-16 space-y-5'
                                data-aos="fade-left">
                                <h1 className=' text-xl font-[400] text-center text-gray-800'>{item.name}</h1>
                                <p className=' font-bold text-3xl text-center text-gray-600 mt-2'>${item.price}</p>
                                <ul className=' mt-5 space-y-2'>
                                    {
                                        item.desc.map((item, index) => {
                                            return (
                                                <li key={index} className=' flex items-center space-x-2'>
                                                    <span className=' text-gray-700'>•</span>
                                                    <p className=' text-gray-700'>{item}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                    
                                <div className='pt-10'>
                                    <button className=' bg-red-500 px-8 py-2 text-white rounded-lg'>Get more</button>
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

export default Pricing_
