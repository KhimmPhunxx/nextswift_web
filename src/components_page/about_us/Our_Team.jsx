import React from 'react'

import houy from './../../assets/image/about/houy.png';
import net from './../../assets/image/about/net.png';
import hak from './../../assets/image/about/hak.png';
import nisa from './../../assets/image/about/nisa.png';
import hok from './../../assets/image/about/hok.png';
import khim from './../../assets/image/about/khim.png';
import vann from './../../assets/image/about/vann.png';
import { FaFacebook, FaTelegram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Our_Team() {


    const card = [
        {
            id : 1,
            name : "Pov Kimhuoy",
            position : "Project management",
            image : houy,
            href_fb : "https://web.facebook.com/pov.kimhuoy.906"
        },
        {
            id : 2,
            name : "Chea Oun Raneth",
            position : "Graphic Designer",
            image : net
        },
        {
            id : 3,
            name : "Phen Kimhak",
            position : "Content Creator",
            image : hak
        },
        {
            id : 4,
            name : "Peang Nisa",
            position : "Video Editor",
            image : nisa
        },
        {
            id : 5,
            name : "Pich Menghok",
            position : "Web Developer",
            image : hok
        },
        {
            id : 6,
            name : "Im Vakhim",
            position : "Web Developer",
            image : khim
        },
        {
            id : 7,
            name : "Pean Sovann",
            position : "UX/UI and Web Developer",
            image : vann
        }
    ]

  return (
    <main>
        <h1 className=' text-3xl font-bold text-center text-gray-900'>Our Team</h1>

        <section className=' max-w-6xl mx-auto grid grid-cols-3 mt-5'>
            {
                card.map((item) => (
                    <div key={item.id} className=' w-72 overflow-hidden my-5 bg-gray-50 rounded'>
                        <img className=' w-full h-72 object-cover' src={item.image} alt="" />
                        <div className=' p-4 space-y-4'>
                            <h1 className=' text-center text-2xl font-bold'>{item.name}</h1>
                            <p className=' text-center text-lg text-gray-500'>{item.position}</p>
                            <div className=' flex justify-center space-x-3'>
                                <NavLink to={item.href_fb} target='_blank'><FaFacebook className=' text-3xl text-red-600' /></NavLink>
                                <NavLink to='/'><FaTelegram className=' text-3xl text-red-600' /></NavLink>
                            </div>
                        </div>

        
                    </div>
                ))
            }

        </section>
    </main>
  )
}

export default Our_Team
