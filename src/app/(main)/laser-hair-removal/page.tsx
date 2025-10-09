"use client";

import { BannerSection } from "@/Components/commonComponents/bannerSection";
import Container from "@/Components/commonComponents/Container";
import React from "react";
import bgImg from "@/assets/cards/leserhero.png";
import DynamicLaserBox from "@/Components/commonComponents/DynamicLaserBox";
import DynamicHairRemoval from "@/Components/commonComponents/DynamicHairRemoval";
import RemovalCard from "@/Components/commonComponents/RemovalCard";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import img11 from "@/assets/cards/image6.png";
import img22 from "@/assets/cards/botox1.png";
import DynamicImageSection from "@/Components/commonComponents/DynamicImageSecion";
import FAQ from "@/Components/ServicesPage/FAQ";
import Results from "@/Components/ServicesPage/Results";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import image from "@/assets/contact/contact.png";
import { useSubServiceDetailsQuery } from "@/redux/slices/cms/homeSlice";
import Image from "next/image";
import { BoltSvg } from "@/Components/SvgContainer/SvgContainer";

const sectionBars = [
  { id: 1, path: "botox-treatment", label: "What is Tetra C02 Laser" },
  { id: 2, path: "botox-benefits", label: "Benefits" },
  { id: 3, path: "botox-faq", label: "Tastimonial" },
  { id: 4, path: "botox-faq", label: "Contact us" },
];

const page = () => {
  const { data, isLoading } = useSubServiceDetailsQuery("laser-hair-removal");
  // console.log(data, "laser-hair-removal");

  return (
    <>
      <Container>
        <BannerSection
          bgImages={[1, 2, 3].map(
            () => `${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.banner_image}`
          )}
          heading={data?.name}
          description="Explore the Science Behind Laser Hair Removal and Why It’s One of the Most Popular Hair Reduction Methods Today"
        />

        <DynamicLaserBox
          title={data?.title}
          sub_title={data?.sub_title}
          description={data?.description}
          buttonText="Book now"
        />
      </Container>

      <div className="bg-bg-pink py-4">
        <Container>
          <div className="flex flex-wrap gap-4 items-center justify-center xl:justify-between text-sm xl:text-base">
            {sectionBars?.map((bar) => (
              <Link
                key={bar?.id}
                href={`#${bar?.path}`}
                scroll={true}
                className="link_text"
              >
                {bar?.label}
                <IoArrowForward />
              </Link>
            ))}
          </div>
        </Container>
      </div>

      <Container>
        <DynamicHairRemoval
          title={data?.sub_service_details?.definition_title}
          sub_title={data?.sub_service_details?.definition_sub_title}
          description={` ${data?.sub_service_details?.definition_description}`}
        />
      </Container>

      <DynamicCardSection
        image={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.sub_service_details?.definition_image}`}
        title={data?.sub_service_details?.definition_title}
        description={data?.sub_service_details?.definition_description}
        sectionSubTitle={data?.sub_service_details?.definition_sub_title}
        buttonText="Book Now"
        buttonClassName="card_button_black"
        titleClassName="card_title_black"
        descriptionClassName="card_description"
        buttonLink="#"
        index={1}
      />
      <div id="morpheus8">
        <section className="py-10 sm:py-14 xl:py-20 bg-[#F8F8F8]">
          <Container>
            <div className="flex flex-col xl:flex-row justify-center items-center gap-6 sm:gap-10 xl:gap-20">
              <div className="w-full xl:w-[35%] flex relative">
                <div className="xl:pt-10 z-20 w-full">
                  <Image
                    className="h-[250px] sm:h-[400px] lg:h-[500px] xl:h-[650px] w-full object-cover"
                    src={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.sub_service_details?.treatment_image}`}
                    alt="procedure"
                    height={700}
                    width={400}
                  />
                </div>
              </div>

              <div className="w-full xl:w-[65%]">
                <h5 className="section_sub-title">
                  {data?.sub_service_details?.treatment_sub_title}
                </h5>
                <h2 className="card_title_black mb-6 sm:mb-10">
                  {data?.sub_service_details?.treatment_title}
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {data?.sub_service_treatments.map(
                    (benefit: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-base">
                          <BoltSvg />
                        </span>
                        <span className="section_description">
                          {benefit?.treatment_name}
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

      <DynamicImageSection
        img={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.sub_service_details?.others_image}`}
        isBox={true}
        cardData={data}
      />

      <div id="faq" className="py-10 sm:py-30">
        <FAQ data={data?.service_faqs} />
      </div>

      <section className="mb-5 mt-16 2xl:my-24 3xl:my-32 py-10 xl:py-20 bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.07)]">
        <Container>
          <div className="relative max-w-[1140px] mx-auto">
            <div className="flex flex-col xl:flex-row gap-5 xl:gap-10 3xl:gap-20">
              {/* Left */}
              <div className="relative shrink-0 w-full xl:w-[350px] 2xl:w-[502px]">
                <p className="section_title !mb-0">
                  {data?.sub_service_details?.result_title}
                </p>
              </div>

              {/* Right */}
              <div className="grow flex flex-col">
                <h5
                  data-aos="fade-up"
                  className="!text-primary-black section_description mb-3"
                >
                  {data?.sub_service_details?.result_sub_title}
                </h5>
                <p
                  data-aos="fade-up"
                  className="xl:text-lg 2xl:text-xl leading-[164%] text-sub-text mb-5 2xl:mb-10 3xl:mb-12"
                >
                  {data?.sub_service_details?.result_description}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="mb-20">
        <DynamicCardSection
          image={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.sub_service_details?.choose_image}`}
          title={data?.sub_service_details?.choose_title}
          description={data?.sub_service_details?.choose_description}
          buttonText="Book Now"
          buttonClassName="card_button_black"
          titleClassName="card_title_black"
          descriptionClassName="card_description"
          buttonLink="#"
          index={1}
          isBox={true}
        />
      </div>

      <DynamicContactUs image={image} />
    </>
  );
};

export default page;
