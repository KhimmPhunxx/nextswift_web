import React, { useEffect } from 'react'
import { TbMessageStar } from "react-icons/tb";
import { TiLightbulb } from "react-icons/ti";
import { FaEarthAfrica } from "react-icons/fa6";
import { IoMdVideocam } from "react-icons/io";
import { FaPenNib } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

import logo1 from './../../assets/image/logo/logo.png';
import logo2 from './../../assets/image/logo/logo2.png';
import banner1 from './../../assets/image/homePage/Banner1.png';

import AOS from 'aos';
import 'aos/dist/aos.css';


function Our_Service_Page() {

    useEffect(() => {
        AOS.init({
            duration : 900
        })
    }, [])

    const card = [
        {
            title : "Social Media Management",
            desc : "Social media campaigns",
            icon : <TbMessageStar />

        },
        {
            title : "Social Content Idea",
            desc : "The best content starts with a great story",
            icon : <TiLightbulb /> 

        },
        {
            title : "Website Development",
            desc : "Accelerate your project development with modern technology in social media worldwide.",
            icon : <FaEarthAfrica />

        },
        {
            title : "Promotional video",
            desc : "The creative video will make your brand stand out and attract.",
            icon : <IoMdVideocam />

        },
        {
            title : "Creative Graphic Design",
            desc : "Creative graphic design to attract a large audience on social media.",
            icon : <FaPenNib />

        },
        {
            title : "UX/UI design",
            desc : "The art and science of user satisfaction.",
            icon : <FaPenNib />

        },
    ]

  return (
   <main>
    <section className=' max-w-6xl mx-auto'>
        <div className=' space-y-2'>
            <h1 className=' text-3xl font-bold text-gray-800 text-center'>Our Service</h1>
            <p className=' text-lg text-gray-700 text-center'>The complete social media management service at an affordable price for every business.</p>
        </div>
       <div className=' grid grid-cols-3 gap-6 mt-5'>
            {
                card.map((item, index) => {
                    return (
                        <div key={index} className=' bg-white rounded-lg shadow-lg px-8 py-10 space-y-4 border cursor-pointer' data-aos="fade-up">
                            <div className='items-center space-x-2'>
                                <div className=' h-12 w-12 rounded-full text-3xl text-red-500 flex justify-center items-center mx-auto'>
                                    {item.icon}
                                </div>
                                <h1 className=' text-xl font-bold text-gray-800 text-center'>{item.title}</h1>
                            </div>
                            <p className=' text-gray-700 text-center'>{item.desc}</p>
                        </div>
                    )
                })
            }
       </div>
       <div className=' mt-10 space-y-5'>
         <h1 className=' text-3xl font-bold text-gray-800 text-center'>
             Reaching more than 1,000,000 people on social media
         </h1>
         <p className='text-xl text-gray-600 text-center'>Our team has helped many brands expand their audience, attract more customers and earn more money.</p>
       </div>
       <div className='w-[50%] h-12 mx-auto mt-8 flex justify-around'>
            <div className=' h-full w-[40%] flex'>
                <img className='h-full w-12' src={logo1} alt="" />
                <div className=' space-y-1'>
                    <h1 className='flex space-x-2'>
                        <IoStar className='text-yellow-500 text-2xl' />
                        <IoStar className='text-yellow-500 text-2xl' />
                        <IoStar className='text-yellow-500 text-2xl' />
                        <IoStar className='text-yellow-500 text-2xl' />
                        <IoStar className='text-yellow-500 text-2xl' />
                    </h1>
                    <p className='text-sm text-gray-800 text-center'>4.9 of 5 (4800 reviews)</p>
                </div>
            </div>

            <div className=' h-full w-[40%] flex'>
                <img className='h-full w-12' src={logo2} alt="" />
                <div className=' space-y-1'>
                    <h1 className='flex space-x-2'>
                        <IoStar className='text-yellow-500 text-2xl' />
                        <IoStar className='text-yellow-500 text-2xl' />
                        <IoStar className='text-yellow-500 text-2xl' />
                        <IoStar className='text-yellow-500 text-2xl' />
                        <IoStar className='text-yellow-500 text-2xl' />
                    </h1>
                    <p className='text-sm text-gray-800 text-center'>5 of 5 (1655 reviews)</p>
                </div>
            </div>
       </div>
       <div 
       style={{
        backgroundImage: `url(${banner1})`,
       }}
       className=' w-full h-[590px] mt-20 bg-repeat bg-cover bg-center cursor-pointer hover:scale-105 duration-300'></div>
    </section>

   </main>
  )
}

export default Our_Service_Page
