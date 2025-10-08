"use client";
import React from "react";
import Container from "../commonComponents/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useSubServiceDetailsQuery } from "@/redux/slices/cms/homeSlice";

const WhatPeopleSaying = () => {
      const { data, isLoading } = useSubServiceDetailsQuery("tetra-c02-laser");
  return (
    <section className="mb-5 mt-16 2xl:my-24 3xl:my-32 py-20 bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.07)]">
      <Container>
        <div className="relative max-w-[1440px] mx-auto">
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={1}
              slidesPerGroup={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="co2-swiper"
            >
              {data?.sub_service_testimonials.map((t: any, index: number) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 3xl:gap-20">
                    {/* Left */}
                    <div className="relative shrink-0 w-full lg:w-[300px] xl:w-[350px] 2xl:w-[502px]">
                      <h3 className="section_sub-title">testimonial</h3>
                      <p className="section_title !mb-0">
                        What People Are Saying
                      </p>
                    </div>

                    {/* Right */}
                    <div className="grow flex flex-col">
                      <p
                        data-aos="fade-up"
                        className="xl:text-lg 2xl:text-xl leading-[164%] text-primary-black mb-5 2xl:mb-10 3xl:mb-12"
                      >
                        {t.testimonial}
                      </p>
                      <h5
                        data-aos="fade-up"
                        className="text-xl xl:text-2xl 2xl:text-3xl font-normal leading-[164%] font-family-gloock tracking-[1.28px] text-primary-black"
                      >
                        {t.customer_name}
                      </h5>
                      <h5
                        data-aos="fade-up"
                        className="text-sub-text section_description"
                      >
                        {t.service_name}
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatPeopleSaying;
