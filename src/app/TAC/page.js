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
          <h3 className="heading3 text-center mt-3">Aspiretech terms of use</h3>
          <br />
          <div className="text-justify mt-3">
            <p>
              This privacy statement is effective as of October 18, 2024. Please
              note that this privacy statement will regularly be updated to
              reflect any changes in the way we handle your personal data or any
              changes in applicable laws.
            </p>
            <br />
            <p>
              Unless stated otherwise, this privacy statement applies to all of
              Aspiretech’s externally facing applications, services, games,
              tools, websites and other data processing activities where
              Aspiretech is acting as a data controller (or any local
              equivalent).
            </p>
            <br />
            <p>
              This page and its sub-pages tell you everything you need to know
              about how Aspiretech PLC and/or its affiliates, subsidiaries and
              newly acquired companies ("Aspiretech"; "we") protect the personal
              data we process and control relating to you (“your personal data”;
              "your data") and which rights you have in relation to the
              processing of your personal data.
            </p>
            <br />
            <p>
              If the Aspiretech entity acting as the controller of your personal
              data is located outside the European Union and Switzerland, if
              applicable, Aspiretech Global Holdings Limited will represent it
              in data privacy matters.
            </p>
            <br />
            <p>
              <b>1. How does Aspiretech protect your personal data?</b>
              <br />
              Aspiretech attaches great importance to your right to privacy and
              the protection of your personal data. We want you to feel secure
              that when you deal with Aspiretech, your personal data are in good
              hands. Aspiretech protects your personal data in accordance with
              applicable laws and our data privacy policies. In addition,
              Aspiretech maintains the appropriate technical and organisational
              measures to protect your personal data against unauthorised or
              unlawful processing and/or against accidental loss, alteration,
              disclosure or access, or accidental or unlawful destruction of or
              damage thereto. **Which categories of personal data do we collect
              and how do we process such personal data?** We collect personal
              data of our employees, potential employees, clients and their
              current/former/prospective employees/directors, suppliers,
              business contacts, shareholders and website users. If the data we
              collect are not listed in this privacy statement, we will give
              individuals (when required by law) appropriate notice of which
              other data will be collected and how they will be used.
            </p>
            <br />
            <table className="min-w-full border border-gray-300 text-left text-sm text-gray-700">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 font-semibold border border-gray-300">
                    Category of Personal Information
                  </th>
                  <th className="px-4 py-3 font-semibold border border-gray-300">
                    Types of Personal Information Captured
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Personal details, contact details, and identifiers
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Name, pronoun, all identifiers and contact details (e-mail,
                    phone, address), and, when necessary, gender, date of birth,
                    age, place of birth.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Commercial information
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Product/service history, account-related correspondence, and
                    communication via AI-supported channels (e.g., for account
                    receivable payments and follow-up).
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Marketing and research information
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>
                        Identifiers (IP address, social media handle, etc.),
                        e-mail/phone for direct marketing
                      </li>
                      <li>Demographics (income, family status, etc.)</li>
                      <li>Web browsing history, preferences</li>
                      <li>Social media content</li>
                      <li>Analytics and profiles</li>
                      <li>Voice-enabled services (non-stored)</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Sensitive data and biometric information
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Health/medical details (disability/dietary requirements),
                    biometric data (e.g., fingerprint authentication), as
                    legally permitted or with consent.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Audiovisual materials, including transcriptions
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Photographs, CCTV images/footage, voice search recordings,
                    recordings of workshops/events, and transcription of
                    audio/video from meetings.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Position and professional or employment-related information
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Current job position, title, employer, location, and
                    Accenture contact(s).
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    System and application access data and network activity
                    information
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Access data (System ID, LAN ID, e-mail, instant messaging,
                    mainframe ID, passwords), internet activity logs, and
                    electronic content produced using Accenture systems.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Cookies and geolocation data
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Geolocation data and cookies (see Cookie Policy for
                    details).
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Accenture alumni-related information
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Registration and profile data</li>
                      <li>Correspondence</li>
                      <li>Posts on the Alumni Site</li>
                      <li>Survey responses</li>
                      <li>
                        Former compensation details, position, Enterprise ID,
                        office location, contact details, and education or
                        training for verification purposes.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>
              In addition, for **recruitment/employment purposes** and to
              provide assessment and consultancy services to our clients,
              Aspiretech may process the personal information set out in the
              below table.
            </p>
            <br />
            <table className="min-w-full border border-gray-300 text-left text-sm text-gray-700">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 font-semibold border border-gray-300">
                    Category
                  </th>
                  <th className="px-4 py-3 font-semibold border border-gray-300">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Additional personal details, contact details, and
                    identifiers/demographics
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Additional personal details for recruitment/employment
                    purposes, such as national ID, social security number,
                    insurance information, marital status, dependents, emergency
                    contacts, military history, and professional/personal
                    scheduling information.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Education information and professional/employment-related
                    information
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Education background, employment history.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Sensitive data for recruitment purposes or for providing
                    assessment/consultancy services
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Sensitive information (health, trade union membership,
                    religion, ethnicity, criminal history) collected under local
                    law or with consent, such as for diversity, background
                    checks, disability accommodation, or benefits.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Documentation required under immigration laws
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Citizenship, passport data, residency or work permit
                    information (physical or electronic copy).
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Financial information for payroll/benefits purposes
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Banking and other financial details necessary for
                    payroll/benefits.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Talent management information
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Background checks, performance evaluations, training
                    programs, driver's license, and biography-related
                    information.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Requested recruitment information
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Information requested during recruitment, where permitted by
                    law.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Recruitment information you submit
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Résumés/CVs, letters, writing samples, and other materials
                    submitted by you, including photographs.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Information generated by us during recruitment or
                    assessments
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Notes and assessments by interviewers and recruiters,
                    including information from Internet searches if legally
                    permitted.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Recruitment information received from third parties
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Information from third-party recruiters, job-search sites,
                    or clients where applicable.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Audiovisual materials
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Photographs, and images/audio/footage from CCTV or video
                    systems in offices, recruitment events, interviews, or
                    workshops.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Recommendations
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Recommendations provided on your behalf by others.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Immigration
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Documentation and information as required under immigration
                    laws.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Employment history and background checks
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Prior employment, education, credit history, criminal
                    records, and other data from background checks.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Diversity-related information
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Race, ethnicity, religion, disability, gender, sexual
                    orientation data for government reporting, diversity
                    analytics, and anti-discrimination compliance.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Assessment information
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Data from psychological, technical, or behavioral
                    assessments (information provided prior to participation).
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>
              Except for certain information that is required by law or by
              Aspiretech policies (including management of an employment
              relationship with Aspiretech), your decision to provide any
              personal data to us is voluntary. You will therefore not be
              subject to adverse consequences if you do not wish to provide us
              with your personal data. However, please note that if you do not
              provide certain information, we may not be able to accomplish some
              or all of the purposes outlined in this privacy statement, and you
              may not be able to use certain tools and systems which require the
              use of such personal data. If you provide us with personal data of
              another person (for instance, a potential employee/referral), you
              are responsible for ensuring that such person is made aware of the
              information contained in this privacy statement and that the
              person has given you his/her consent for sharing the information
              with Aspiretech. The above-mentioned categories of personal data
              have been obtained either directly from you (for example, when you
              provide information to sign up for a newsletter or register to
              comment on a forum website) or indirectly from certain third
              parties (for example, through our website’s technology). Such
              third parties include our affiliates, public authorities, public
              websites and social media, suppliers, clients and vendors. Except
              where certain information is required by law or by Aspiretech
              policies (including management of an employment relationship with
              Aspiretech), your decision to provide any personal data to us is
              voluntary. Please note that if you do not provide certain
              information, we may not be able to accomplish some or all of the
              purposes outlined in this privacy statement, and you may not be
              able to use certain tools and systems which require the use of
              such personal data. <br />
              <br />
              <b>
                For which purposes and on which legal basis do we use your
                personal data?
              </b>
              <br />
              Aspiretech uses your personal data only where required for
              specific purposes. Please view the table below for (i) a list of
              the purposes for which Accenture uses your personal data and (ii)
              an overview of the legal basis for each such purpose.
            </p>
            <br />
            <table className="min-w-full border border-gray-300 text-left text-sm text-gray-700">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 font-semibold border border-gray-300">
                    Purpose
                  </th>
                  <th className="px-4 py-3 font-semibold border border-gray-300">
                    Legal Basis
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Managing our contractual and/or employment relationship with
                    you.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Necessary for the performance of a contract to which you are
                    a party.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Facilitating communication with you, including AI-powered
                    support capabilities (such as meetings, email content
                    suggestions, etc.).
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on the basis of our legitimate interests in
                    ensuring proper communication and emergency handling.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Operating and managing our business operations, including
                    surveys, assessments, data analytics, and marketing
                    research.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on the basis of our legitimate interests for the
                    proper functioning of our business operations.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Complying with legal requirements.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Necessary for compliance with a legal obligation.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Monitoring your use of our systems (e.g., website and apps
                    usage).
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on the basis of our legitimate interests in
                    avoiding non-compliance and protecting our reputation.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Social listening on Aspiretech's brand and our clients on
                    social media (public content only).
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on the basis of our legitimate interest in
                    protecting our brand on social media.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Improving security and functionality of our website,
                    networks, and information.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on the basis of our legitimate interests for
                    excellent user experience and security.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Undertaking data analytics to improve business performance,
                    including marketing and event organization.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on the basis of our legitimate interests in proper
                    business operations.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Marketing products and services to you (unless you object).
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on the basis of our legitimate interests to
                    conduct and grow our business.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Capturing audio, video, and transcription during events and
                    meetings (virtual or live) for stakeholders.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Based on your informed consent obtained prior to the event.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300 font-semibold">
                    Specific Recruitment/Employment Purposes
                  </td>
                  <td className="px-4 py-3 border border-gray-300 font-semibold">
                    Legal Basis
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Assessing your suitability for employment roles.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on Aspiretech’s legitimate interests in recruiting
                    appropriate employees.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Managing your application.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on Aspiretech’s legitimate interests in recruiting
                    appropriate employees.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Facilitating communication with you.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on Aspiretech’s legitimate interests in ensuring
                    proper communication.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Performing administrative functions (e.g., reimbursements).
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on Aspiretech’s legitimate interests in recruiting
                    appropriate employees.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Performing data analytics for better understanding and
                    recruitment.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on Aspiretech’s legitimate interests in improving
                    recruitment processes.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Recording online interviews for additional review.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on Aspiretech’s legitimate interests in recruiting
                    appropriate employees.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Registering you on the Careers website to receive position
                    updates.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on Aspiretech’s legitimate interests in recruiting
                    appropriate employees.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Transferring your contact and employment information to
                    Aspiretech Talent Connection.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on Aspiretech’s legitimate interests in recruiting
                    appropriate employees.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Administration of employee benefits.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on Aspiretech’s legitimate interests in ensuring
                    employees receive benefits.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Performing legally-required reporting and responding to
                    legal processes.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Compliance with a legal obligation.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300 font-semibold">
                    Specific Alumni Information Related Purposes
                  </td>
                  <td className="px-4 py-3 border border-gray-300 font-semibold">
                    Legal Basis
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Enabling alumni search and connections via the directory.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on the basis of our legitimate interests for
                    Alumni Site features.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Providing a personalized experience on the Alumni Site.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on the basis of our legitimate interests in
                    personalization.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Analyzing alumni demographics and interests for site
                    improvement.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on the basis of our legitimate interests in better
                    understanding alumni.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">
                    Periodically contacting alumni with relevant updates and
                    opportunities.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on the basis of our legitimate interest in
                    communication with alumni.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-gray-300">
                    Sharing alumni data with Aspiretech’s internal sales tool
                    for industry communication.
                  </td>
                  <td className="px-4 py-3 border border-gray-300">
                    Justified on the basis of our legitimate interest in
                    communication and marketing to alumni.
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>
              <b>What about sensitive data?</b> <br /> We do not generally seek
              to collect sensitive data as defined in the second paragraph below
              (also known as special categories within the EEA) through this
              site or otherwise. In the limited cases where we do seek to
              collect such data, we will do this in accordance with data privacy
              law requirements and/or ask for your consent. The term "sensitive
              data" refers to the various categories of personal data identified
              by data privacy laws as requiring special treatment, including in
              some circumstances the need to obtain explicit consent from you.
              These categories include racial or ethnic origin, political
              opinions, religious, philosophical or other similar beliefs,
              membership of a trade union, physical or mental health, biometric
              or genetic data, sexual life or orientation, or criminal
              convictions and offences (including information about suspected
              criminal activities). <br />
              <br /> <b>What about data security?</b>
              <br />
              We maintain organizational, physical and technical security
              arrangements for all the personal data we hold. We have protocols,
              controls and relevant policies, procedures and guidance to
              maintain these arrangements taking into account the risks
              associated with the categories of personal data and the processing
              we undertake. We adopt market leading security measures to protect
              your personal data. This includes (without being limitative): - We
              hold an ISO27001 certification, which indicates that we adhere to
              the highest and strictest information security standards. This is
              a security standard awarded by the British Standards Institution
              (“BSI”) that serves as international certification that Aspiretech
              adheres to the highest and strictest standards. This certification
              is the only auditable international standard that defines the
              requirements for an Information Security Management System
              (“ISMS”) and confirms that Aspiretech’s processes and security
              controls provide an effective framework for protecting our
              clients’ and our own information. - We have a global Client Data
              Protection (“CDP”) program in place which governs the stewardship
              of client information and systems entrusted to us. - We have
              regular penetration testing performed by a third party provider,
              which continues to show the strength of our technical defenses.
              <br />
              <br />
              <b>Where will your personal data be processed?</b>
              <br />
              As a global organization with offices and operations throughout
              the world, personal data we collect may be transferred or be
              accessible internationally throughout Aspiretech's global business
              and between its entities and affiliates. Any such transfers
              throughout Aspiretech’s global business take place in accordance
              with the applicable data privacy laws and in accordance with our
              Binding Corporate Rules (“BCR”). Our BCR reflect the standards
              contained in European data privacy laws (including the General
              Data Protection Regulation). Having our BCR means that all our
              group entities which have signed up to our BCR have to comply with
              the same internal rules. It also means that your rights (see
              “Which rights do you have with respect to the processing of your
              personal data?”) stay the same no matter where your data are
              processed by Aspiretech.
            </p>
          </div>
        </div>
      </LayoutOne>
    </>
  );
}
