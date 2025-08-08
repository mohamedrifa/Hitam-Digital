import React from "react";
import HeroSectionOne from "../../components/herosection-one/HeroPageOne";
import MarketingInfo from "../../components/servicesection/MarketingInfo";
import MarketingServices from "../../components/servicesection/MarketingServices";
import ServiceDetail from "../../components/servicesection/ServiceDetail";
import OurClients from "../../components/home/OurClients";
import FAQSection from "../../components/Home/FAQsection";
import BlogSection from "../../components/home/BlogSection";


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