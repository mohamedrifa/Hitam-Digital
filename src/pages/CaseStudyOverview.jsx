import React from 'react'
import CaseStudyDetail from '../components/case_study/CaseStudyDetail'

import { CASE_STUDIES } from '../utils/home';
import HeroSectionCaseStudy from '../components/case_study/HeroSectionCaseStudy';
import { useParams } from 'react-router-dom';
import OurClients from '../components/home/OurClients';
import CTASection from '../components/home/CTASection';

const CaseStudyOverview = () => {

const { slug } = useParams();
  const cs = CASE_STUDIES.find((c) => c.slug === slug);


  return (
    <>
        <HeroSectionCaseStudy cs={cs}/>
        <CaseStudyDetail cs={cs}/>
          <OurClients/>
          <CTASection/>

    
    </>
  )
}

export default CaseStudyOverview