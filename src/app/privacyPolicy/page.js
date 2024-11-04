import React from "react";
import LayoutOne from "@/components/Layout/LayoutOne";
import SliderOne from "@/components/Sections/Slider/SliderOne";
import AboutOne from "@/components/Sections/About/AboutOne";
import BenefitOne from "@/components/Sections/Benefit/BenefitOne";
import benefitData from "@/data/benefit/data.json";
import SolutionOne from "@/components/Sections/Solution/SolutionOne";
import serviceData from "@/data/service/data.json";
import ServiceOne from "@/components/Sections/Service/ServiceOne";
import CaseStudyOne from "@/components/Sections/CaseStudy/CaseStudyOne";
import caseStudyData from "@/data/case-study/data.json";
import BannerOne from "@/components/Sections/Banner/BannerOne";
import BrandOne from "@/components/Sections/Brand/BrandOne";
import TestimonialOne from "@/components/Sections/Testimonial/TestimonialOne";
import testimonialData from "@/data/testimonial/data.json";
import ContactOne from "@/components/Sections/Contact/ContactOne";

export default function page() {
  return (
    <>
      <LayoutOne className="-style-1">
        <div className="container text-center">
          <br />
          <h3 className="heading3 text-center mt-3">
            Aspiretech Privacy Policy
          </h3>
          <br />
          <div className="text-justify mt-3">
            <p>
              By accessing and using this site, you accept the following terms
              and conditions, without limitation or qualification. Unless
              otherwise stated, the contents of this site including, but not
              limited to, the text and images contained herein and their
              arrangement are the property of Aspiretech. All trademarks used or
              referred to in this website are the property of their respective
              owners. Nothing contained in this site shall be construed as
              conferring by implication, estoppel, or otherwise, any license or
              right to any copyright, patent, trademark, or other proprietary
              interest of Aspiretech or any third party. This site and the
              content provided in this site, including, but not limited to,
              graphic images, audio, video, html code, buttons, and text, may
              not be copied, reproduced, republished, uploaded, posted,
              transmitted, or distributed in any way, without the prior written
              consent of Aspiretech, except that you may download, display, and
              print one copy of the materials on any single computer solely for
              your personal, non-commercial use, provided that you do not modify
              the material in any way and you keep intact all copyright,
              trademark, and other proprietary notices.
            </p>
            <br />
            <p>
              The information provided on this site is free of charge and for
              informational purposes only and does not create a business or
              professional services relationship between you and Aspiretech.
              Links on this site may lead to services or sites not operated by
              Aspiretech. No judgment or warranty is made with respect to such
              other services or sites, and Aspiretech takes no responsibility
              for such other sites or services. A link to another site or
              service is not an endorsement of that site or service. Any use you
              make of the information provided on this site, or any site or
              service linked to by this site, is at your own risk. This site and
              its contents are provided "as is," and Aspiretech makes no
              representation or warranty of any kind with respect to this site
              or any site or service accessible through this site. Aspiretech
              expressly disclaims all express and implied warranties, including
              but not limited to, the implied warranties of merchantability,
              fitness for a particular purpose, title, and non-infringement.
            </p>
          </div>
        </div>
      </LayoutOne>
    </>
  );
}
