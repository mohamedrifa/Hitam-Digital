import React from "react";
import HeroSectionOne from "../../components/herosection-one/HeroPageOne";
import MarketingInfo from "../../components/servicesection/MarketingInfo";
import ServiceDetail from "../../components/servicesection/ServiceDetail";
import OurClients from "../../components/homesection/OurClients";
import FAQSection from "../../components/homesection/FAQsection";
import BlogSection from "../../components/homesection/BlogSection";
import ServiceSection from "../../components/servicesection/ServiceCardde";



const ServicePage = () => {
   
 return(
    <>
    <HeroSectionOne/>
    <MarketingInfo/>
    <ServiceSection/>
    <ServiceDetail/>
    <OurClients/>
    <FAQSection/>
    <BlogSection/>
    </>
 )
}

export default ServicePage;