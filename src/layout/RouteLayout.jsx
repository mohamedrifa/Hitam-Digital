import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import CTASection from './CTASection'

const RouteLayout = () => {
  return (
    <> 
        <Navbar/>
        <Outlet/>
        <CTASection/>
        <Footer/>
    </>
  )
}

export default RouteLayout