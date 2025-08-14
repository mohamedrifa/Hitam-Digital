import React from 'react'
import WhyChooseHitam from '../../components/about_us/WhyChooseHitam'
import HitamSection from '../../components/about_us/HitamSection'
import MarketingImpact from '../../components/about_us/MarketingImpact'
import WhyDigitalMarketing from '../../components/about_us/MarketingSection'
import HeroSectionOne from '../../components/herosection-one/HeroPageOne'



const Aboutus = () => {
  return (
    <>
    <HeroSectionOne/> 
    <WhyChooseHitam />
    <MarketingImpact />
    <WhyDigitalMarketing />
    <HitamSection />
    
    </>
  )
}

export default Aboutus