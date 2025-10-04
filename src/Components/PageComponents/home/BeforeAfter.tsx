"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Container from "@/Components/commonComponents/Container";
import Image from "next/image";
import { data } from "@/Components/Data/data";

export const BeforeAfter = () => {
  return (
    <section className="xl:pt-10 pb-10 lg:pb-20 2xl:pb-32">
      <Container>
        <div className="flex flex-col xl:flex-row gap-5 lg:gap-7 xl:gap-10 3xl:gap-20">
          {/* Left */}
          <div className="flex-1 w-full xl:w-1/2">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="before-after-swiper"
            >
              {data.map((d, key) => (
                <SwiperSlide key={key}>
                  <div className="flex flex-col sm:flex-row gap-5 mb-10">
                    {/* First image */}
                    <div className="relative w-full">
                      <Image
                        src={d.imag1}
                        alt={d.texts1}
                        width={600}
                        height={500}
                        className="w-full h-[350px] md:h-[400px] lg:h-[450px] 2xl:h-[500px] 3xl:h-[630px] object-cover"
                      />
                      <div className="absolute left-0 bottom-5 w-full">
                        <p className="bg-black/10 backdrop-blur-[23.12px] text-center text-white py-3 w-full">
                          {d.texts1}
                        </p>
                      </div>
                    </div>

                    {/* Second image */}
                    <div className="relative w-full">
                      <Image
                        src={d.imag2}
                        alt={d.texts2}
                        width={600}
                        height={500}
                        className="w-full h-[350px] md:h-[400px] lg:h-[450px] 2xl:h-[500px] 3xl:h-[630px] object-cover"
                      />
                      <div className="absolute left-0 bottom-5 w-full">
                        <p className="bg-black/10 backdrop-blur-[23.12px] text-center text-white py-3 w-full">
                          {d.texts2}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right */}
          <div className="flex-1 w-full xl:w-1/2 flex flex-col justify-center">
            <p className="section_sub-title">before & after</p>
            <h3 className="section_title !mb-5 2xl:!mb-7">
              The Art of Transformation
            </h3>
            <p className="section_description">
              At Esteveza Aesthetics, transformation is more than just visual —
              it's a journey toward renewed confidence and authentic beauty.
              Every image you see below reflects the subtle artistry, precision,
              and personalized care we pour into each treatment. Explore our
              gallery of real clients and real results, and discover the quiet
              power of expert refinement.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
