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