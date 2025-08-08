import React from 'react'
import Navbar from './layout/Navbar'
import HeroSection from './components/homepage/HeroSection'
import HowWeWork from './components/homepage/HowWeWork'
import PortfolioSection from './components/homepage/PortfolioSection'


const App = () => {
  return (
    <>
    <Navbar />
    
    <HeroSection />
    <HowWeWork />
    <PortfolioSection />
    </>
  )
}

export default App
