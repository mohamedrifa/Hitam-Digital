import React from "react";
import HeroSectionOne from "../../components/herosection-one/HeroPageOne";
import MarketingInfo from "../../components/servicesection/MarketingInfo";
import ServiceDetail from "../../components/servicesection/ServiceDetail";
import OurClients from "../../components/home/OurClients";
import FAQSection from "../../components/home/FAQsection";
import BlogSection from "../../components/home/BlogSection";
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