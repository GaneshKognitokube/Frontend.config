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
          <h3 className="heading3 text-center mt-3">Aspiretech Cookies</h3>
          <br />
          <div className="text-justify mt-3">
            <p>
              <b>
                Below is information about how Aspiretech PLC and its affiliates
                (“we”) use cookies and other similar technology on this website.
              </b>
              <br />
              This policy is effective as of July 8 2024. Please note that this
              privacy statement will be updated from time to time. We can place
              cookies and other similar technology on your device, including
              mobile device, in accordance with your preferences set on our on
              cookie consent manager your mobile device, the following
              information may be collected through cookies or similar
              technology: your unique device identifier, mobile device IP
              address, information about your device’s operating system, mobile
              carrier and your location information (to the extent permissible
              under applicable law).
            </p>
            <br />
            <p>
              <div>
                <h1 className="text-2xl font-semibold mb-2">
                  What are cookies?
                </h1>
                <p className="mb-4">
                  Cookies are text files containing small amounts of information
                  that are downloaded to your computer or mobile device when you
                  visit a site. They allow a site to recognize your device.
                  Cookies managed by Aspiretech only are called “first-party
                  cookies,” whereas cookies from third parties are called
                  “third-party cookies,” as explained below.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">
                  Why do we use cookies and similar technologies?
                </h2>
                <p className="mb-4">
                  Cookies perform various tasks, such as allowing you to
                  navigate between pages efficiently, remembering your
                  preferences, and generally improving the user experience. They
                  can also help ensure that the advertisements you see online
                  are more relevant to you and your interests. Additionally,
                  cookies help us analyze the use of our websites and online
                  content (analytics cookies) and facilitate/track interaction
                  on our websites with social media (e.g., links to social media
                  sites, like buttons, etc.).
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">
                  Does Aspiretech use cookies for marketing and analytics?
                </h2>
                <p className="mb-4">
                  Yes, we may use information collected from our cookies to
                  identify user behavior and to serve content and offers based
                  on your profile and for other purposes, to the extent legally
                  permissible in certain jurisdictions.
                </p>
                <p className="mb-4">
                  In some cases, we can associate cookie information (including
                  information from cookies placed via our advertisements on
                  third-party sites) with an identifiable individual. For
                  example:
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    If we send you a targeted email with web beacons, cookies,
                    or similar technologies, we will know whether you open,
                    read, or delete the message.
                  </li>
                  <li>
                    When you click a link in a marketing e-mail from Aspiretech,
                    we use a cookie to log what pages you view and what content
                    you download from our websites, even if you are not
                    registered or signed in.
                  </li>
                  <li>
                    <strong>Combining and analyzing personal data</strong> – As
                    described above, we may combine data from publicly available
                    sources and from different e-mail, website, and personal
                    interactions with you (including data from sites like our
                    careers and corporate sites or social media logins like
                    LinkedIn). We use this combined data to better assess your
                    experience with Aspiretech and perform other activities as
                    described in our privacy policy.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">
                  Do you use any cookies from third-party companies?
                </h2>
                <p className="mb-4">
                  Some cookies, web beacons, and other tracking and storage
                  technologies that we use are from third-party companies
                  (third-party cookies) such as Facebook, Microsoft, Marketo
                  Munchkin Tracking, Twitter, Knotch, YouTube, Instagram,
                  Yoptima, and LinkedIn Analytics. These provide us with web
                  analytics and intelligence about our sites, which may also be
                  used for measurement services and targeted ads. These
                  companies use programming code to collect information about
                  your interaction with our sites, like the pages you visit, the
                  links you click on, and your time spent on our sites. This
                  code is active only while you are on an Aspiretech website.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">
                  Does Aspiretech use any tracking technologies similar to
                  cookies?
                </h2>
                <p className="mb-4">
                  We may also use web beacons (including conversion pixels) or
                  other technologies for similar purposes. These may be included
                  on our sites, in marketing email messages, newsletters, or
                  affiliated websites, to track whether messages have been
                  opened and links clicked. Web beacons do not place information
                  on your device, but they may work with cookies to monitor
                  website activity. The information provided below about cookies
                  also applies to web beacons and similar technologies.
                  Conversion pixels are small codes on a web page triggered when
                  someone visits, leading to an increase in the conversion
                  count.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">
                  What types of cookies does the site use?
                </h2>
                <p className="mb-4">
                  The cookies used on Aspiretech sites are categorized in the
                  table below. Not all cookies may be used in all jurisdictions
                  or websites.
                </p>

                <table className="min-w-full border-collapse border border-gray-300 mt-4">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">
                        Category
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        Strictly Necessary cookies
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        These cookies are essential for enabling you to move
                        around the site and use its features, such as accessing
                        secure areas of the site. Without these cookies,
                        services you have asked for cannot be provided.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        First party analytics cookies
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        These cookies allow us to employ data analytics so we
                        can measure and improve the performance of our site and
                        provide more relevant content to you. These cookies
                        don't collect information that identifies a visitor down
                        to an individual level that is available to us.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        Performance cookies
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Performance cookies are generally third-party cookies
                        that collect information about your visit and use of the
                        Aspiretech website, for instance which pages you visit
                        the most often, and if you get error messages from web
                        pages.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        Functionality cookies
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        These cookies allow a site to remember choices you make
                        (such as your username, language, or the region you are
                        in) and provide more enhanced, personal features.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        Advertising and social media cookies
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Advertising and social media cookies are used to deliver
                        advertisements more relevant to you and your interests;
                        limit the number of times you see an advertisement; help
                        measure the effectiveness of the advertising campaign;
                        and understand people’s behavior after they view an
                        advertisement.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </p>
          </div>
        </div>
      </LayoutOne>
    </>
  );
}
