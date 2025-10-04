import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { testimonials } from "@/Components/Data/data";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import type { Swiper as SwiperType } from "swiper";
import Container from "@/Components/commonComponents/Container";

export default function TestimonialSection() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [navigationReady, setNavigationReady] = useState(false);
  useEffect(() => {
    setNavigationReady(true);
  }, []);

  return (
    <section className="py-10 lg:py-16 xl:py-20 bg-secondary-bg">
      <Container>
        <div>
          <p className="section_sub-title">testimonial</p>
          <h3 className="section_title">What People Are Saying</h3>
        </div>

        <div className="relative">
          <div className="flex gap-3 2xl:gap-4 mb-5 lg:mb-10 z-50 justify-end">
            <button
              ref={prevRef}
              className="w-10 lg:w-14 2xl:w-20 h-8 lg:h-10 xl:text-[22px] flex items-center text-primary-black justify-center duration-500  hover:bg-bg-pink bg-white border border-alt-border hover:border-bg-pink hover:text-black transition cursor-pointer"
            >
              <IoArrowBack />
            </button>
            <button
              ref={nextRef}
              className="w-10 lg:w-14 2xl:w-20 h-8 lg:h-10 xl:text-[22px] flex items-center text-primary-black justify-center duration-500  hover:bg-bg-pink bg-white border border-alt-border hover:border-bg-pink hover:text-black transition cursor-pointer"
            >
              <IoArrowForward />
            </button>
          </div>

          <div>
            {navigationReady && (
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={1}
                slidesPerGroup={1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onInit={(swiper: SwiperType) => {
                  if (
                    typeof swiper.params.navigation === "object" &&
                    swiper.params.navigation !== null &&
                    prevRef.current &&
                    nextRef.current
                  ) {
                    const nav = swiper.params.navigation as {
                      prevEl: HTMLElement | null;
                      nextEl: HTMLElement | null;
                    };
                    nav.prevEl = prevRef.current;
                    nav.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper h-fit"
              >
                {testimonials.map((t, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-10 2xl:gap-20">
                      <div className="grow flex flex-col">
                        <p
                          data-aos="fade-up"
                          className="lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-light text-sub-light mb-5 2xl:mb-10 3xl:mb-12"
                        >
                          {t.message}
                        </p>
                        <h5
                          data-aos="fade-up"
                          className="text-xl xl:text-2xl 2xl:text-3xl font-normal leading-[164%] font-family-gloock tracking-[1.28px] text-primary-black"
                        >
                          {t.name}
                        </h5>
                        <h5
                          data-aos="fade-up"
                          className="text-sub-text section_description"
                        >
                          {t.role}
                        </h5>
                      </div>

                      {/* Right */}
                      <div className="relative shrink-0 w-full lg:w-[300px] xl:w-[350px] 2xl:w-[402px]">
                        <Image
                          data-aos="fade-up"
                          src={t.imageUrl}
                          alt={t.name}
                          className="w-full h-[300px] md:h-[350px] xl:h-[400px] 2xl:h-[450px]"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
