import React from 'react'
import LandingPage from './components/LandingPage'
import Discover from './components/Discover'
import Warranty from './components/Warranty'
import OurStore from './components/OurStore'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Lenis from 'lenis'
import { useEffect } from 'react'
import HorizontalScroll from './components/HorizontalScroll.jsx'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])


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