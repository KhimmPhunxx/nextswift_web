import React from 'react'

import cha from './../../assets/image/homePage/cha.png';
import cam from './../../assets/image/homePage/cam.png';
import inno from './../../assets/image/homePage/inno.png';

function Colab_1() {


    const card = [
        {
            id : 1,
            image: cha
        },
        {
            id : 2,
            image: cam
        },
        {
            id : 3,
            image: inno
        }
    ]

  return (
  <main className=' w-full bg-white'>
    <section className=' max-w-4xl mx-auto py-10'>
    <h1 className=' text-3xl font-bold text-center'>COLLABORATIVE PARTNERS</h1>
    <div className=' mx-auto w-[600px] flex justify-around gap-6 mt-5 p-5'> 
        {
            card.map((item, index) => {
                return (
                    <div key={index} className='rounded-full py-5'>
                        <img className=' w-[150px] h-[150px] object-cover rounded-lg' src={item.image} alt="" />
                    </div>
                )
            })
        }
    </div>
    </section>

  </main>
  )
}

export default Colab_1
