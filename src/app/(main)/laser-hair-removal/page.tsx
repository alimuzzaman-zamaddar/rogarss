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

const sectionBars = [
  { id: 1, path: "botox-treatment", label: "What is Tetra C02 Laser" },
  { id: 2, path: "botox-benefits", label: "Benefits" },
  { id: 3, path: "botox-faq", label: "Tastimonial" },
  { id: 4, path: "botox-faq", label: "Contact us" },
];

const page = () => {
  const { data, isLoading } = useSubServiceDetailsQuery("laser-hair-removal");
  console.log(data, "laser-hair-removal");

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
        index={0}
      />

      <RemovalCard
        image={img22}
        title="Tailored Hair Removal Coverage"
        description="Laser Hair Removal offers a safe, long-lasting solution for reducing unwanted hair on virtually any area of the body. Unlike shaving or waxing, which provide only temporary results, laser treatments target the hair follicle to significantly reduce regrowth over time. This means smoother skin with fewer ingrown hairs, less irritation, and no more daily maintenance. The treatment is precise, fast, and increasingly comfortable thanks to advanced laser technology — making it ideal even for sensitive areas. With each session, you'll notice your skin becoming softer, more even-toned."
        buttonText="Book Now"
        buttonClassName="card_button_black"
        titleClassName="card_title_black"
        descriptionClassName="card_description"
        buttonLink="#"
        index={0}
        isBox={true}
        isBtn={false}
      />

      <DynamicImageSection img={bgImg.src} isBox={true} />
      <FAQ />
      <Results />

      <div className="mb-20">
        <DynamicCardSection
          image={img22}
          title="Silky to the Touch"
          description="Laser Hair Removal offers a safe, long-lasting solution for reducing unwanted hair on virtually any area of the body. Unlike shaving or waxing, which provide only temporary results, laser treatments target the hair follicle to significantly reduce regrowth over time. This means smoother skin with fewer ingrown hairs, less irritation, and no more daily maintenance. The treatment is precise, fast, and increasingly comfortable thanks to advanced laser technology — making it ideal even for sensitive areas. With each session, you'll notice your skin becoming softer, more even-toned, and virtually hair-free. Whether you're looking to simplify your beauty routine or enhance your confidence, Laser Hair Removal is a convenient, effective choice that delivers lasting results you can both see and feel."
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
