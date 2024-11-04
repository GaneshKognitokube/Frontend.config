import LayoutOne from "@/components/Layout/LayoutOne";
import SliderOne from "@/components/Sections/Slider/SliderOne";
import AboutOne from "@/components/Sections/About/AboutOne";
import BenefitOne from "@/components/Sections/Benefit/BenefitOne";
import benefitData from "@/data/benefit/data.json"
import SolutionOne from "@/components/Sections/Solution/SolutionOne";
import serviceData from "@/data/service/data.json"
import ServiceOne from "@/components/Sections/Service/ServiceOne";
import CaseStudyOne from "@/components/Sections/CaseStudy/CaseStudyOne";
import caseStudyData from "@/data/case-study/data.json"
import BannerOne from "@/components/Sections/Banner/BannerOne";
import BrandOne from "@/components/Sections/Brand/BrandOne";
import TestimonialOne from "@/components/Sections/Testimonial/TestimonialOne";
import testimonialData from "@/data/testimonial/data.json";
import ContactOne from "@/components/Sections/Contact/ContactOne";

export default function Home() {
  return (
    <>
      <LayoutOne className="-style-1">
        <SolutionOne data={serviceData} start={6} limit={16} title="Industries We Serve" display={false}/>
        {/* <ServiceOne data={serviceData} start={6} limit={16}/> */}
      </LayoutOne>
    </>
  );
}
