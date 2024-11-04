import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

export default function SliderOne({ data, className }) {
  return (
    <section className={`slider-block ${classNames(className)}`}>
      <div className="container">
        <div className="flex max-xl:flex-col-reverse gap-8">
          <div className="xl:w-1/3 w-full xl:pr-[15px]">
            <div className="text">
              <h2 className="heading2 xl:pr-[55px]">Unlock the path to better outcomes</h2>
              <div className="body2 mt-4">Boost efficiency and cut costs with our tailored IT and BPO services. We provide innovative solutions to streamline your operations and drive success. Partner with us for seamless technology and outsourcing support.</div>
            </div>
            <div className="block-button xl:mt-10 mt-6 flex gap-4 flex-wrap">
              <Link className="button-main" href="pages/contact-us">Get in touch </Link>
              <Link className="button-main bg-grey" href="/ourServices">Our services</Link>
            </div>
          </div>
          <div className="xl:w-2/3 w-full xl:pl-[15px]">
            <div className="bg-img w-full rounded-xl overflow-hidden max-sm:h-[300px]">
              <Image width={5000} height={50000} className="w-full max-sm:h-full object-cover" src="/images/services/Team.jpeg" alt="slider1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
