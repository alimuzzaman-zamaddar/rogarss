"use client";

import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { ReactNode } from "react";


type BannerSectionProps = {
  bgImages: (StaticImageData | string)[];
  heading: string;
  description: string | ReactNode;
};

export const BannerSection = ({
  bgImages,
  heading,
  description,
}: BannerSectionProps) => {
  return (
    <section className=" h-[60vh] xl:h-screen relative">
      {/* Swiper Background Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="absolute inset-0 w-full h-full"
      >
        {bgImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center animate-zoom"
              style={{ backgroundImage: `url(${img})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#262221D0] to-transparent z-30" />

      {/* Content */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-40 ">
        <div className="flex flex-col justify-center items-center">
          <h1
            data-aos="fade-up"
            className="text-white text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-[94px] w-full xl:max-w-[1066px] mx-auto leading-[140%] font-family-gloock"
          >
            {heading}
          </h1>

          <p
            data-aos="fade-up"
            className="text-white lg:text-lg xl:text-xl 3xl:text-2xl"
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
