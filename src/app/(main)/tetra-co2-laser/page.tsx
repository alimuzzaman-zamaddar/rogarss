import { BannerSection } from "@/Components/commonComponents/bannerSection";
import bgImg from "@/assets/cards/leserhero.png";
import React from "react";
import Container from "@/Components/commonComponents/Container";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import contact from "@/assets/contact/contact.png";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import DynamicTextSection from "@/Components/commonComponents/DynamicTextSection";
import img11 from "@/assets/cards/image6.png";
import img22 from "@/assets/cards/botox1.png";
import poster from "@/assets/cards/videoThumnail.png";
import VideoSection from "@/Components/commonComponents/VideoSection";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import KeyBenefit from "@/Components/ServicesPage/KeyBenefit";
import WhatPeopleSaying from "@/Components/ServicesPage/WhatPeopleSaying";

const page = () => {
  const sectionBars = [
    { id: 1, path: "botox-treatment", label: "What is Tetra C02 Laser" },
    { id: 2, path: "botox-benefits", label: "Benefits" },
    { id: 3, path: "botox-faq", label: "Testimonial" },
    { id: 3, path: "botox-faq", label: "Contact us" },
  ];

  return (
    <>
      <Container>
        <BannerSection
          heading="Tetra C02 Laser"
          description="A Revolutionary Laser Treatment for Skin Resurfacing, Wrinkle Reduction, and Total Rejuvenation"
          bgImages={[bgImg.src, bgImg.src, bgImg.src]}
        />
      </Container>

      <Container>
        <DynamicTextSection
          id="tetra-co2-laser"
          bgColor="bg-[#ebebeb]"
          title="Award-Winning CO2 Treatment & Technology at Estevez Aesthetics"
          description={[
            "At Estevez Aesthetics, we understand that today’s patients want transformative skin rejuvenation without the extended downtime. That’s why we offer the Tetra PRO CO2 laser, an advanced device delivering powerful 40W fractional resurfacing with precision and versatility. Featuring the award-winning Cool Peel treatment and the innovative Move technology for smooth, in-motion application, Tetra PRO sets a new standard in skin renewal. Ideal for all ages, it’s the perfect choice for brighter, smoother skin faster.",
          ]}
          buttonText="Speak With Esteves Aesthetics"
          buttonLink="#tetra-co2-laser"
          titleClassName="card_title_black"
          descriptionClassName="card_description"
          buttonClassName="card_button_black"
        />
      </Container>

      <div className="bg-bg-pink py-4 3xl:mt-20">
        <Container>
          <div className="flex flex-wrap gap-4 items-center justify-center xl:justify-between text-sm xl:text-base">
            {sectionBars?.map(bar => (
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

      <DynamicCardSection
        image1={img11}
        image2={img22}
        title="Key Benefits of the Tetra PRO CO₂ Laser at Estevez Aesthetics"
        description="Botox is an injectable treatment to temporarily relax muscles in the face, thereby reducing fine lines and wrinkles. By blocking nerve signals, it prevents muscles to contract, smoothing the skin and giving it a more youthful appearance. Commonly treated areas include forehead lines, crow’s feet, and frown lines. Botox is popular for those seeking a more refreshed and youthful look without surgery."
        buttonText="Book Now"
        buttonClassName="card_button_black"
        titleClassName="card_title_black"
        descriptionClassName="card_description"
        buttonLink="#"
        index={1}
      />

      <KeyBenefit />
      <WhatPeopleSaying />
      <DynamicContactUs image={contact} />
    </>
  );
};

export default page;
