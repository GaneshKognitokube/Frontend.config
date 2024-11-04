'use client'

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import Image from "next/image";
import Link from "next/link";

const logos = [
  "/images/brand/brand.png",
  "/images/brand/brand.png",
  "/images/brand/brand.png",
  "/images/brand/brand.png",
  "/images/brand/brand.png",
  "/images/brand/brand.png"
]

export default function BrandOne({ classname }) {
  return (
    <section className={`section-brand ${classname}`}>
      <div className="container">
        <h5 className="heading5 text-center"></h5>
        <div className="flex items-center justify-center mt-7">
          <div className="list lg:w-11/12 w-full">
        
          </div>
        </div>
      </div>
    </section>
  );
}
