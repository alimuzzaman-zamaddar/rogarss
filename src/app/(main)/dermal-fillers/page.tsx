"use client";

import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import image from "@/assets/contact/contact.png";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import Container from "@/Components/commonComponents/Container";
import { BoltSvg, LineSvg } from "@/Components/SvgContainer/SvgContainer";
import Button from "@/Components/Tags/Button/Button";
import FAQ from "@/Components/ServicesPage/FAQ";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "@/Components/Tags/Loader/loader";
import { useGetSubServiceDetailsQuery } from "@/redux/slices/cms/homeSlice";


const sectionBars = [
  { id: 1, path: "botox", label: "What Is Dermal?" },
  { id: 2, path: "dsport", label: "Dermal Filler Options" },
  { id: 3, path: "dermal", label: "Revanesse@ Versa TM" },
  { id: 4, path: "morpheus8", label: "Procedure" },
  { id: 6, path: "tetra", label: "FAQ" },
  { id: 7, path: "consultation", label: "Consultation" },
];

export default function Page() {
const { data, isLoading } = useGetSubServiceDetailsQuery("dermal-fillers");

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Banner */}
          <Container>
            <BannerSection
              bgImages={[1, 2, 3].map(
                () =>
                  `${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.banner_image}`
              )}
              heading={data?.name}
              description="Smooth away wrinkles with natural, lasting results"
            />
          </Container>

          {/* Tabs */}
          <div className="pt-6 sm:pt-10 lg:pt-14 2xl:pt-20 pb-5 xl:pb-8 2xl:pb-10">
            <Container>
              <h4
                data-aos="fade-up"
                className="text-center font-['Gloock'] text-3xl sm:text-4xl md:text-5xl xl:text-[62px] font-[400] leading-[132%] capitalize text-[color:var(--black,#1F1B1A)] mb-6 sm:mb-10"
              >
                {data?.title}
              </h4>
              <p
                data-aos="fade-up"
                className="text-center card_description w-full sm:w-[80%] mx-auto mb-6 sm:mb-10"
              >
                {data?.description}
              </p>
            </Container>

            <div className="bg-[#FBFBFB] py-3 sm:py-4 mt-6 sm:mt-10">
              <Container>
                <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center xl:justify-between text-sm xl:text-base">
                  {sectionBars.map((bar, index) => (
                    <Link
                      key={bar.id}
                      href={`#${bar.path}`}
                      scroll={true}
                      className="link_text"
                    >
                      {bar.label}
                      {index === 0 && <LineSvg />}
                    </Link>
                  ))}
                </div>
              </Container>
            </div>
          </div>

          {/* What Is Dermal */}
          <div id="botox">
            <DynamicCardSection
              image={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.sub_service_details?.definition_image}`}
              title={data?.sub_service_details?.definition_title}
              description={data?.sub_service_details?.definition_description}
              sectionSubTitle={data?.sub_service_details?.definition_sub_title}
              titleClassName="card_title_black text-2xl sm:text-3xl lg:text-4xl"
              descriptionClassName="card_description text-sm sm:text-base lg:text-lg"
              buttonLink="#"
              index={3}
            />
          </div>

          <div id="dsport">
            <Container>
              <div className="my-10 sm:my-16 lg:my-20">
                <h4
                  data-aos="fade-up"
                  className="text-center font-['Gloock'] text-3xl sm:text-4xl md:text-5xl xl:text-[62px] font-[400] leading-[132%] capitalize text-secondary-black mb-6 sm:mb-10"
                >
                  {data?.sub_service_details?.option_title}
                </h4>
                <p
                  data-aos="fade-up"
                  className="text-center card_description w-full sm:w-[80%] mx-auto mb-6 sm:mb-10"
                >
                  {data?.sub_service_details?.option_description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-center">
                  {data?.sub_service_options?.map(
                    (item: any, index: number) => (
                      <div
                        key={index}
                        className={`bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-5 sm:p-8 lg:p-10 
                  ${
                    index === data.sub_service_options.length - 1 &&
                    data.sub_service_options.length % 2 !== 0
                      ? "sm:col-span-2 sm:w-[80%] lg:w-[50%] mx-auto"
                      : ""
                  }`}
                      >
                        <h4
                          data-aos="fade-up"
                          className="text-center text-secondary-black font-family-gloock text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-normal leading-[132%] mb-4 sm:mb-6"
                        >
                          {item?.option_name}
                        </h4>
                        <p
                          data-aos="fade-up"
                          className="text-center card_description w-full sm:w-[85%] lg:w-[80%] mx-auto text-sm sm:text-base lg:text-lg"
                        >
                          {item?.option_description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </Container>
          </div>

          {/* Versa */}
          <div id="dermal">
            <div className="bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)] py-10 sm:py-16 lg:py-20">
              <Container>
                <h4
                  data-aos="fade-up"
                  className="text-center section_sub-title mb-4"
                >
                  {data?.sub_service_details?.versa_sub_title}
                </h4>
                <h4
                  data-aos="fade-up"
                  className="text-center font-['Gloock'] text-3xl sm:text-4xl md:text-5xl xl:text-[62px] font-[400] leading-[132%] capitalize text-secondary-black mb-6"
                >
                  {data?.sub_service_details?.versa_title}
                </h4>
                <p
                  data-aos="fade-up"
                  className="text-center card_description w-full sm:w-[80%] mx-auto"
                >
                  {data?.sub_service_details?.versa_description}
                </p>
              </Container>
            </div>
          </div>

          <div id="morpheus8">
            <section className="py-10 sm:py-14 xl:py-20 bg-[#F8F8F8]">
              <Container>
                <div className="flex flex-col xl:flex-row justify-center items-center gap-6 sm:gap-10 xl:gap-20">
                  <div className="w-full xl:w-[35%] flex relative">
                    <div className="xl:pt-10 z-20 w-full">
                      <Image
                        className="h-[250px] sm:h-[400px] lg:h-[500px] xl:h-[650px] w-full object-cover"
                        src={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.sub_service_details?.procedure_image}`}
                        alt="procedure"
                        height={700}
                        width={400}
                      />
                    </div>
                  </div>

                  <div className="w-full xl:w-[65%]">
                    <h5 className="section_sub-title">
                      {data?.sub_service_details?.procedure_sub_title}
                    </h5>
                    <h2 className="card_title_black mb-6 sm:mb-10">
                      {data?.sub_service_details?.procedure_title}
                    </h2>
                    <div className="grid grid-cols-1 gap-3">
                      {data?.sub_service_procedures.map(
                        (benefit: any, index: number) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <span className="text-base">
                              <BoltSvg />
                            </span>
                            <span className="section_description">
                              {benefit?.procedure_name}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          </div>

          <div id="consultation">
            <Container>
              <div className="my-10 sm:my-16 lg:my-20 px-4 sm:px-10 py-10 sm:py-16 lg:py-20 bg-[#FBE0DA]">
                <h4
                  data-aos="fade-up"
                  className="text-center font-['Gloock'] text-3xl sm:text-4xl md:text-5xl xl:text-[62px] leading-[132%] capitalize text-primary-black mb-6 sm:mb-10"
                >
                  {data?.sub_service_details?.consultation_title}
                </h4>

                <p
                  data-aos="fade-up"
                  className="section_description text-sm sm:text-base md:text-lg w-full sm:w-[70%] mx-auto text-center"
                >
                  {data?.sub_service_details?.consultation_description}
                </p>

                <div className="flex justify-center mt-6 sm:mt-10">
                  <Button Txt="Book Now" className="card_button_black" />
                </div>
              </div>
            </Container>
          </div>

          <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] py-10">
            <Container>
              <div className="flex flex-col xl:flex-row gap-6 xl:gap-10">
                <h4
                  data-aos="fade-up"
                  className="text-center xl:text-right font-family-gloock text-3xl sm:text-4xl md:text-5xl xl:text-[62px] font-[400] leading-[132%] capitalize text-[color:var(--black,#1F1B1A)] flex-1"
                >
                  {data?.sub_service_details?.recovery_title}
                </h4>
                <p
                  data-aos="fade-up"
                  className="section_description flex-1 text-center xl:text-left"
                >
                  {data?.sub_service_details?.recovery_description}
                </p>
              </div>
            </Container>
          </div>

          <div id="tetra">
            <div className="py-8 sm:py-16 lg:py-20">
              <FAQ data={data?.service_faqs} />
            </div>
          </div>

          <div id="contact">
            <DynamicContactUs image={image} />
          </div>
        </>
      )}
    </>
  );
}
