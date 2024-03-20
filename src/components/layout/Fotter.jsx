import React from 'react'

import logo from './../../assets/image/logo/logo.png';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';
import { IoCall, IoLocation, IoMail, IoStarSharp } from "react-icons/io5";

function Fotter() {
  return (
    <footer className=' w-full bg-gray-900 '>
        <section className=' w-full grid grid-cols-4 '>
            
            <div className='py-10 px-12 space-y-8'>
                <img className=' w-20 h-120 object-cover mx-auto' src={logo} alt="" />
                <h1 className=' text-3xl text-white'>NexSwift Solutions</h1>
                <p className=' text-md text-gray-100'>The complete social media management service at an affordable price for every business.</p>
                <div className=' flex space-x-5'>
                  <FaFacebook className=' text-3xl text-pink-500' />
                  <FaTelegram className=' text-3xl text-pink-500' />
                  <FaTwitter className=' text-3xl text-pink-500' />
                  <FaInstagram className=' text-3xl text-pink-500' />
                </div>
            </div>

            <div className='py-16 px-12 space-y-8'>
                <h1 className=' text-white text-2xl '>Support</h1>
                <div className=' space-y-5'>
                  <div className=' flex space-x-5'>
                    <IoStarSharp className=' text-white text-xl' /> <p className=' text-gray-100'>About Us</p>
                  </div>
                  <div className=' flex space-x-5'>
                    <IoStarSharp className=' text-white text-xl' /> <p className=' text-gray-100'> Blog</p>
                  </div>
                  <div className=' flex space-x-5'>
                    <IoStarSharp className=' text-white text-xl' /> <p className=' text-gray-100'> Contact Us</p>
                  </div>
                  <div className=' flex space-x-5'>
                    <IoStarSharp className=' text-white text-xl' /> <p className=' text-gray-100'>Service</p>
                  </div>
                  <div className=' flex space-x-5'>
                    <IoStarSharp className=' text-white text-xl' /> <p className=' text-gray-100'>News</p>
                  </div>
                    
                </div>
            </div>


            <div className='py-16 px-12 space-y-8'>
                <h1 className=' text-white text-2xl '>Service</h1>
                <div className=' space-y-5'>
                  <div className=' flex space-x-5'>
                    <IoStarSharp className=' text-white text-xl' /> <p className=' text-gray-100'>Social Content Idea</p>
                  </div>
                  <div className=' flex space-x-5'>
                    <IoStarSharp className=' text-white text-xl' /> <p className=' text-gray-100'> Digital Media Buyer</p>
                  </div>
                  <div className=' flex space-x-5'>
                    <IoStarSharp className=' text-white text-xl' /> <p className=' text-gray-100'>Photo Shooting</p>
                  </div>
                  <div className=' flex space-x-5'>
                    <IoStarSharp className=' text-white text-xl' /> <p className=' text-gray-100'>Promotional video</p>
                  </div>
                  <div className=' flex space-x-5'>
                    <IoStarSharp className=' text-white text-xl' /> <p className=' text-gray-100'>Graphic Design</p>
                  </div>
                    
                </div>
            </div>

            <div className='py-16 px-12 space-y-8'>
                <h1 className=' text-white text-2xl '>Contact</h1>
                <div className=' space-y-5'>
                  <div className=' flex space-x-5'>
                    <IoLocation className=' text-pink-500 text-xl' /> <p className=' text-gray-100'>Phnom Penh, Cambodia</p>
                  </div>
                  <div className=' flex space-x-5'>
                    <IoCall className=' text-pink-500 text-xl' /> <p className=' text-gray-100'> 12345678</p>
                  </div>
                  <div className=' flex space-x-5'>
                    <IoMail className=' text-pink-500 text-xl' /> <p className=' text-gray-100'>chhlat@market.com</p>
                  </div>
          
                    
                </div>
            </div>
        </section>
        <p className=' py-5 text-center text-lg text-gray-200'>Copyright @ 2023 NexSwift Solutions All Right Reserved</p>
    </footer>
  )
}

export default Fotter
