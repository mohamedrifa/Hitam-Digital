import React from 'react'
import GrowthResults from '../../components/testimonial/GrowthResults'
import OurClients from '../../components/home/OurClients'
import TestimonialsGrid from '../../components/testimonial/TestimonialsGrid'
import CTASection from '../../components/Home/CTASection'
import HeroSectionOne from '../../components/herosection-one/HeroPageOne'

const Testimonial = () => {
  return (
    <>
    <HeroSectionOne/> 
    <GrowthResults />
    <OurClients />
    <TestimonialsGrid />
    </>
  )
}

export default Testimonial