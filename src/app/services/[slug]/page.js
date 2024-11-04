"use client";

import LayoutOne from "@/components/Layout/LayoutOne";
import BenefitSeven from "@/components/Sections/Benefit/BenefitSeven";
import BrandOne from "@/components/Sections/Brand/BrandOne";
import testimonialData from "@/data/testimonial/data.json";
import serviceData from "@/data/service/data.json";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import BenefitAbout from "@/components/Sections/Benefit/BenefitAbout";
import AboutSevenFirst from "@/components/Sections/About/AboutSevenFirst";
import AboutSevenSecond from "@/components/Sections/About/AboutSevenSecond";
import TestimonialOne from "@/components/Sections/Testimonial/TestimonialOne";
import PricingSeven from "@/components/Sections/Pricing/PricingSeven";
import CaseStudyOne from "@/components/Sections/CaseStudy/CaseStudyOne";
import caseStudyData from "@/data/case-study/data.json";
import serviceHeadingsData from "@/data/service/data2.json"
import ContactOne from "@/components/Sections/Contact/ContactOne";
import { getPostByTitle } from "@/common/postSelect";
import { useState, useEffect } from "react";

export default function ServiceDtail({ params: { slug } }) {
    // Decode URL
    const decodedSlug = decodeURIComponent(slug);
    const [getSubserviceData, setSubserviceData] = useState()


    // handle with ' and "
    const cleanedSlug = decodedSlug.replace(/['"]/g, "'");

    const foundPost = getPostByTitle(serviceData, cleanedSlug);
    console.log("foundPost: ",foundPost)
    const foundObj = serviceHeadingsData.find((obj) => obj.id === foundPost[0].id);
    // useEffect(() => {
    //     const foundObj = serviceHeadingsData.find((obj) => obj.id === foundPost[0].id);
    //     console.log(foundObj)
    //     setSubserviceData(foundObj)
    // }, [])
      

    return (
        <>
            <LayoutOne className="-style-1">
                <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
                <HeadingSubpage classname={'lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] md:pb-12 pb-8'} title={foundPost[0].title} desc={foundPost[0].desc} />
                <BenefitSeven background="bg-linear" data={foundObj}/>
                <BrandOne classname={'lg:pt-20 md:pt-14 pt-10 style-subpage'} />
                <AboutSevenFirst data={foundObj}/>
                <AboutSevenSecond data={foundObj}/>
                {/* <BenefitAbout /> */}
                <TestimonialOne classname={'style-service sm:py-[60px] max-sm:pb-10 bg-linear sm:rounded-3xl rounded-t-full rounded-b-3xl'} data={testimonialData} />
                {/* <PricingSeven classname={'bg-linear'} />
                <CaseStudyOne classname={'lg:py-20 sm:py-14 py-10'} data={caseStudyData} start={0} limit={5} /> */}
                <ContactOne classname={'bg-linear-blue'} />
            </LayoutOne>
        </>
    );
}
