"use client";

import Image from "next/image";
import { service } from "@/Components/Data/data";
import Container from "@/Components/commonComponents/Container";

export default function ServicesSection() {
  return (
    <section className="section_padding">
      <Container>
        <div className="flex justify-start items-start">
          <div className="">
            <p className="section_sub-title">our services</p>
            <h3 className="section_title max-w-[930px]">
              Discover Aesthetic & Wellness Excellence
            </h3>
          </div>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {service.map((t, index) => (
            <div key={index}>
              <div
                className="relative group overflow-hidden duration-300 transform transition-all"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={`${index * 200}`} // Add staggered delay for a flowing effect
                data-aos-once="true" // Ensures animation happens only once when visible
              >
                <Image
                  src={t.imageUrl}
                  alt={t.title}
                  className="object-cover h-[350px] lg:h-[400px] 2xl:h-[500px] w-full"
                  width={600}
                  height={700}
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_-18.16%,#140F0A_103.86%)] 
                  text-white flex items-center justify-center p-5 3xl:p-10
                  opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 
                  transition-all duration-500 ease-in-out"
                >
                  <ul className="space-y-2 text-center flex flex-col justify-center items-center">
                    {t.tags.map((i, key) => (
                      <li
                        key={key}
                        className="flex gap-3 text-sm lg:text-base 3xl:text-lg font-family-gloock tracking-[1.8px] cursor-pointer text-center"
                      >
                        <span className="text-center">{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <span className="lg:text-lg xl:text-xl 2xl:text-2xl font-family-gloock leading-[164%] text-primary-black inline-block mt-3 lg:mt-4 xl:mt-6">
                  {t.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// "use client";
// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Image from "next/image";
// import { IoArrowBack, IoArrowForward } from "react-icons/io5";
// import { service } from "@/Components/Data/data";
// import Container from "@/Components/commonComponents/Container";
// import type { Swiper as SwiperType } from "swiper";

// export default function ServicesSection() {
//   const prevRef = useRef<HTMLButtonElement | null>(null);
//   const nextRef = useRef<HTMLButtonElement | null>(null);

//   return (
//     <section className="section_padding">
//       <Container>
//         <div>
//           <p className="section_sub-title">our services</p>
//           <h3 className="section_title max-w-[930px]">
//             Discover Aesthetic & Wellness Excellence
//           </h3>
//         </div>

//         <div className="relative">
//           <Swiper
//             spaceBetween={20}
//             slidesPerView={1}
//             slidesPerGroup={1}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: true,
//             }}
//             onInit={(swiper: SwiperType) => {
//               if (
//                 swiper.params.navigation &&
//                 typeof swiper.params.navigation === "object"
//               ) {
//                 swiper.params.navigation.prevEl = prevRef.current;
//                 swiper.params.navigation.nextEl = nextRef.current;
//                 swiper.navigation.init();
//                 swiper.navigation.update();
//               }
//             }}
//             breakpoints={{
//               576: { slidesPerView: 2, spaceBetween: 20 },
//               1024: { slidesPerView: 3, spaceBetween: 20 },
//               1280: { slidesPerView: 4, spaceBetween: 30 },
//               1680: { slidesPerView: 5, spaceBetween: 30 },
//             }}
//             modules={[Autoplay, Navigation]}
//             className="mySwiper"
//           >
//             {service.map((t, index) => (
//               <SwiperSlide key={index}>
//                 <div className="relative group overflow-hidden">
//                   <Image
//                     src={t.imageUrl}
//                     alt={t.title}
//                     className="object-cover h-[350px] lg:h-[400px] 2xl:h-[500px] w-full"
//                     width={600}
//                     height={700}
//                     data-aos="fade-up"
//                   />
//                   <div
//                     className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_-18.16%,#281F17_103.86%)] text-white flex items-end justify-center p-5 3xl:p-10
//                     opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0
//                     transition-all duration-500 ease-in-out"
//                   >
//                     <ul className="space-y-2">
//                       {t.tags.map((i, key) => (
//                         <li
//                           className="flex gap-3 text-sm lg:text-base 3xl:text-lg font-family-gloock tracking-[1.8px] cursor-pointer"
//                           key={key}
//                         >
//                           {`0${key + 1}`} <span className="underline">{i}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//                 <div>
//                   <span className="lg:text-lg xl:text-xl 2xl:text-2xl font-family-gloock leading-[164%] text-primary-black inline-block mt-3 lg:mt-4 xl:mt-6">
//                     {t.title}
//                   </span>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation buttons */}
//           <div className="flex gap-3 2xl:gap-4 mt-10 2xl:mt-16 3xl:mt-20 z-50 justify-end">
//             <button
//               ref={prevRef}
//               className="w-10 lg:w-14 2xl:w-20 h-8 lg:h-10 xl:text-[22px] flex items-center text-primary-black justify-center duration-500 hover:bg-bg-pink bg-white border border-alt-border hover:border-bg-pink hover:text-black transition cursor-pointer"
//             >
//               <IoArrowBack />
//             </button>
//             <button
//               ref={nextRef}
//               className="w-10 lg:w-14 2xl:w-20 h-8 lg:h-10 xl:text-[22px] flex items-center text-primary-black justify-center duration-500 hover:bg-bg-pink bg-white border border-alt-border hover:border-bg-pink hover:text-black transition cursor-pointer"
//             >
//               <IoArrowForward />
//             </button>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
