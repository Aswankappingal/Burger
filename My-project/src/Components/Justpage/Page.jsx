import React from 'react'
import './Page.scss'
import Navbar from '../Navbar/Navbar'
import Background from '../Background/Background'
import About from '../About/About'
import Our from '../OurMenu/Our'
import Reservation from '../Reservation/Reservation'
import Test from '../TEst/Test'
import Contact from '../CONTACT/Contact'

const Page = () => {
  return (
    <div>
     <Navbar/>
     <Background/>
     <About/>
     <Our/>
     <Reservation/>
     <Test/>
     <Contact/>


  
      
    </div>
  )
}

export default Page
