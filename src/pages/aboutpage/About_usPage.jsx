import React from 'react'
import HeroSec_AboutUS from '../../components_page/about_us/HeroSec_AboutUS'
import Our_Team from '../../components_page/about_us/Our_Team'

function About_usPage() {
  return (
   <main className=' w-full bg-gray-100'>

    <section className=' w-full mt-[-65px]'>
        <HeroSec_AboutUS />
    </section>

    <section className=' mt-20'>
        <Our_Team />
    </section>

   </main>
  )
}

export default About_usPage
