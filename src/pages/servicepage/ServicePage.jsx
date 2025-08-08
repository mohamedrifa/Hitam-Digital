import React from "react";
import HeroSectionOne from "../../components/herosection-one/HeroPageOne";
import MarketingInfo from "../../components/servicesection/MarketingInfo";
import MarketingServices from "../../components/servicesection/MarketingServices";
import ContactUs from "../../components/contactus/ContactUs";
import ServiceDetail from "../../components/servicesection/ServiceDetail";


const ServicePage = () => {
   
 return(
    <>
    <HeroSectionOne/>
    <MarketingInfo/>
    <MarketingServices/>
    <ServiceDetail/>
    </>
 )
}

export default ServicePage;