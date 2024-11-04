import LayoutOne from "@/components/Layout/LayoutOne";
import testimonialData from "@/data/testimonial/data.json";
import ContactOne from "@/components/Sections/Contact/ContactOne";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import TestimonialItem from "@/components/Testimonial/TestimonialItem";
import OutstandingCaseStudies from "@/components/HeadingSubpage/OutstandingCaseStudies";
import caseData from "@/data/case-study/data.json";
import Image from 'next/image'

export default function Testimonials() {
  const data = caseData[10];
  const data2 = caseData[caseData.length - 2];
  const data3 = caseData[caseData.length - 1];

  return (
    <>
      <LayoutOne className="-style-1">
        <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
        <HeadingSubpage
          classname={"lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] sm:pb-12 pb-8"}
          title={"About Us"}
          desc={
            " Empowering Your Business with Expert IT and BPO Solutions for Unmatched Customer Support and Operational Excellence"
          }
        />

        <OutstandingCaseStudies data={data} showDesc />
        <br />
        <br />
        <br />
        <div className="heading-content">
          <div className="container">
            <div className="content-main style-one block bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="flex max-lg:flex-col items-center justify-between relative">
                {/* Image on Left */}
                <div className="lg:w-1/2 h-full lg:absolute top-0 left-0">
                  <div className="bg-img h-full">
                    <Image
                      width={5000}
                      height={5000}
                      className="w-full h-full object-cover"
                      src={data2.thumbImage}
                      alt={data2.thumbImage}
                    />
                  </div>
                </div>

                {/* Text on Right */}
                <div className="lg:w-1/2 lg:ml-auto">
                  <div className="text-content lg:p-20 max-lg:px-8 max-lg:py-10">
                    <div className="tag text-label">{data2.category}</div>
                    <div className="desc body2 text-surface1 mt-4">
                      {data2.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="heading-content">
          <div className="container">
            <div className="content-main style-one block bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="flex max-lg:flex-col-reverse items-center justify-between relative">
                <div className="lg:w-1/2">
                  <div className="text-content lg:p-20 max-lg:px-8 max-lg:py-10">
                    <div className="tag text-label">{data3.category}</div>
                    <div className="desc body2 text-surface1 mt-4">
                      {data3.title}
                      <br />
                      <br />
                      {data3.sub1}
                      <br />
                      <br />
                      {data3.sub2}
                      <br />
                      <br />
                      {data3.sub3}
                      <br />
                      <br />
                      {data3.sub4}
                    </div>
                    {/* {showDesc && (
                    <div className="desc body2 text-surface1 mt-4">
                      {data3.description}
                    </div>
                  )} */}
                  </div>
                </div>
                <div className="lg:w-1/2 h-full lg:absolute top-0 right-0">
                  <div className="bg-img h-full">
                    <Image
                      width={5000}
                      height={5000}
                      className="w-full h-full object-cover"
                      src={data3.thumbImage}
                      alt={data3.thumbImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <ContactOne classname={"bg-linear-blue"} />
      </LayoutOne>
    </>
  );
}
