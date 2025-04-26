import React from 'react'
import LandingPage from './components/LandingPage.jsx'
import Discover from './components/Discover.jsx'
import Warranty from './components/Warranty.jsx'
import OurStore from './components/OurStore.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Lenis from 'lenis'
import { useEffect } from 'react'
import HorizontalScroll from './components/HorizontalScroll.jsx'

function App() {



  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      console.log("Hello");
      
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  },[])


    

  return (
    <div className=''>
      <Navbar/>
      <LandingPage/>
      <Discover/>

      <HorizontalScroll/>

      <Warranty/>
      <OurStore/>
      <Footer/>
      
    </div>
  )
}

export default App