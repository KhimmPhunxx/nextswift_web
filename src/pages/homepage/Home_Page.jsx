import React from 'react'
import Hero_Section_Page from '../../components_page/home_page/Hero_Section_Page'
import Our_Service_Page from '../../components_page/home_page/Our_Service_Page'
import Our_ach_ment from '../../components_page/home_page/Our_ach_ment'
import Banner01 from '../../components_page/home_page/Banner01'
import Latest_New from '../../components_page/home_page/Latest_New'
import Colab_1 from '../../components_page/home_page/Colab_1'
import Pricing_ from '../../components_page/home_page/Pricing_'


function Home_Page() {
  return (
    <main className=' w-full pb-16 bg-gray-100'> 
      <section className=' max-w-ful mx-auto'>
        <Hero_Section_Page />
      </section>

      <section className=' max-w-ful mx-auto mt-10'>
        <Our_Service_Page />
      </section>

      <section className=' max-w-ful mx-auto mt-20'>
        <Our_ach_ment />
      </section>

      <section className=' max-w-ful mx-auto mt-44'>
        <Banner01 />
      </section>

      <section className=' max-w-ful mx-auto mt-20'>
        <Latest_New />
      </section>

      <section className=' max-w-ful mx-auto mt-20'>
        <Colab_1 />
      </section>

      <section className=' max-w-ful mx-auto mt-20'>
        <Pricing_ />
      </section>
      
    </main>
  )
}

export default Home_Page
