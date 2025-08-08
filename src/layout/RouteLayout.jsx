import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../template/Footer'

const RouteLayout = () => {
  return (
    <>
        <Outlet/>
        <Footer/>
    
    </>
  )
}

export default RouteLayout