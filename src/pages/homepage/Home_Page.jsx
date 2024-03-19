import React from 'react'
import Hero_Section_Page from '../../components_page/home_page/Hero_Section_Page'
import Our_Service_Page from '../../components_page/home_page/Our_Service_Page'
import Our_ach_ment from '../../components_page/home_page/Our_ach_ment'
import Banner01 from '../../components_page/home_page/Banner01'

function Home_Page() {
  return (
    <main className=' w-full pb-16'> 
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
      
    </main>
  )
}

export default Home_Page
