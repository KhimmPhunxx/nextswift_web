import React from 'react'

import bg_img from './../../assets/image/homePage/HeroSection.png'

import neat from './../../assets/image/homePage/neat.png'
import inno from './../../assets/image/homePage/inno.png'

function Banner01() {
  return (
    <>
    <main className=' w-full h-[730px] bg-red-500 mt-[-64px] rounded-b-[50%]'
        style={{
            backgroundImage: `url(${bg_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
       
        >     
   </main>
   <section className=' max-w-6xl h-96 mx-auto bg-white shadow-xl rounded-xl mt-[-300px] flex '>
        <div className=' h-full w-[27%] '>
            <img className=' w-full rounded-xl h-full object-cover' src={neat} alt="" />
        </div>
        <div className=' ml-20 py-10 space-y-5'>
           <div className=' h-12 w-72 flex items-center space-x-2'>
                <img className=' shadow-lg h-12 rounded-full w-12' src={inno} alt="" />
                <h1 className=' text-xl'>InnoNex Academy </h1>
            </div>
            <h1 className=' text-2xl font-bold text-black'>Kho Sodaneath</h1>
            <p className=' text-md text-gray-700 w-[600px]'>
                Habitant faucibus sollicitudin fames quam scelerisque amet urna non
                risus diam netus pellentesque ac sit malesuada risus nisi, aliquet rutrum
              scelerisque cras habitant lorem tortor sit mauris eu ac id enim urna, 
              adipiscing convallis viverra egestas.
            </p>
            <h1 className=' text-xl font-bold text-gray-700'>CEO of InnoNex Academy</h1>
        </div>
    </section>

   </>
  )
}

export default Banner01
