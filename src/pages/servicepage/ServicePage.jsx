import React from "react";
import HeroSectionOne from "../../components/herosection-one/HeroPageOne";
import MarketingInfo from "../../components/servicesection/MarketingInfo";
import MarketingServices from "../../components/servicesection/MarketingServices";
import ServiceDetail from "../../components/servicesection/ServiceDetail";
import OurClients from "../../components/homesection/OurClients";
import FAQSection from "../../components/homesection/FAQsection";
import BlogSection from "../../components/homesection/BlogSection";



const ServicePage = () => {
   
 return(
    <>
    <HeroSectionOne/>
    <MarketingInfo/>
    <MarketingServices/>
    <ServiceDetail/>
    <OurClients/>
    <FAQSection/>
    <BlogSection/>
    </>
 )
}

export default ServicePage;