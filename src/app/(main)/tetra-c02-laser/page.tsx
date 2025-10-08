"use client";

import { BannerSection } from "@/Components/commonComponents/bannerSection";
import React from "react";
import Container from "@/Components/commonComponents/Container";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import contact from "@/assets/contact/contact.png";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import DynamicTextSection from "@/Components/commonComponents/DynamicTextSection";
import poster from "@/assets/cards/videoThumnail.png";
import VideoSection from "@/Components/commonComponents/VideoSection";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import KeyBenefit from "@/Components/ServicesPage/KeyBenefit";
import WhatPeopleSaying from "@/Components/ServicesPage/WhatPeopleSaying";
import { useSubServiceDetailsQuery } from "@/redux/slices/cms/homeSlice";

const page = () => {
  const sectionBars = [
    { id: 1, path: "botox-treatment", label: "What is Tetra C02 Laser" },
    { id: 2, path: "choose", label: "Benefits" },
    { id: 3, path: "testimonial", label: "Testimonial" },
    { id: 3, path: "contact", label: "Contact us" },
  ];

    const { data, isLoading } = useSubServiceDetailsQuery("tetra-c02-laser");

  return (
    <>
      <Container>
        <BannerSection
          bgImages={[1, 2, 3].map(
            () => `${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.banner_image}`
          )}
          heading={data?.name}
          description={data?.banner_text}
        />
      </Container>

      <Container>
        <div id="botox-treatment" className="">
          <DynamicTextSection
            id="tetra-co2-laser"
            bgColor="bg-[#ebebeb]"
            title={data?.title}
            description={[`${data?.description}`]}
            buttonText="Speak With Esteves Aesthetics"
            buttonLink="#tetra-co2-laser"
            titleClassName="card_title_black"
            descriptionClassName="card_description"
            buttonClassName="card_button_black"
          />
        </div>
      </Container>

      <div className="bg-bg-pink py-4 3xl:mt-20">
        <Container>
          <div className="flex flex-wrap gap-4 items-center justify-center xl:justify-between text-sm xl:text-base">
            {sectionBars?.map((bar) => (
              <Link
                key={bar?.id}
                href={`#${bar?.path}`}
                scroll={true}
                className="flex justify-center items-center gap-1.5 xl:gap-3 font-family-gloock"
              >
                {bar?.label}
                <IoArrowForward />
              </Link>
            ))}
          </div>
        </Container>
      </div>

      <Container>
        <VideoSection
          title="Innovative Technology, Visible Results at Estevez Aesthetics"
          description="At Estevez Aesthetics, our Tetra PRO laser allows precise control over power, density, and pulse duration to customize each treatment perfectly delivering outstanding results tailored to your unique skin needs."
          poster={poster.src}
          videoSrc="https://res.cloudinary.com/dpis8rwos/video/upload/v1753527478/4713259-hd_1920_1080_30fps_jripzv.mp4"
          links={[
            "Fine Lines",
            "brown Spots",
            "scars (including acne scars)",
            "sun spots",
            "pigmentation",
            "Skin Tightening",
          ]}
        />
      </Container>

      <div id="choose" className="">
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
        />
      </div>

      <KeyBenefit />
      <div id="testimonial" className="">
        <WhatPeopleSaying />
      </div>

      {/* Contact */}
      <div id="contact">
        <DynamicContactUs image={contact} />
      </div>
    </>
  );
};

export default page;
