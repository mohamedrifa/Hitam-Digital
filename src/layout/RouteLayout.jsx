import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../template/Footer'
import Navbar from './Navbar'

const RouteLayout = () => {
  return (
    <> 
        <Navbar/>
        <Outlet/>
        <Footer/>
    
    </>
  )
}

export default RouteLayout