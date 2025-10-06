import { BannerSection } from "@/Components/commonComponents/bannerSection";
import Container from "@/Components/commonComponents/Container";
import React from "react";
import BgImage from "@/assets/cards/leserhero.png";
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

const sectionBars = [
  { id: 1, path: "botox-treatment", label: "What is Tetra C02 Laser" },
  { id: 2, path: "botox-benefits", label: "Benefits" },
  { id: 3, path: "botox-faq", label: "Tastimonial" },
  { id: 4, path: "botox-faq", label: "Contact us" },
];

const page = () => {
  return (
    <>
      <Container>
        <BannerSection
          heading="Clear Lift (Non-ablative rejuvenation)"
          description="Explore the Science Behind Laser Hair Removal and Why It’s One of the Most Popular Hair Reduction Methods Today"
          bgImages={[BgImage.src, BgImage.src, BgImage.src]}
        />

        <DynamicLaserBox
          title="Advanced Laser Hair Removal for Silky Skin Without the Hassle"
          sub_title="Laser Hair Removal with Esteves Aesthetics "
          description="Soprano ICE is a state-of-the-art laser hair removal system that offers
        a comprehensive and effective solution for unwanted hair. Available at
        Estevez Aesthetics Medical Spa in Las Vegas, NV, this advanced
        technology combines three distinct laser wavelengths in a single
        handpiece, allowing for the treatment of a wide range of patients and
        hair types. The system is designed to administer treatments quickly and
        comfortably, ensuring optimal clinical outcomes. Whether you want to
        remove hair from your face, arms, legs, or more intimate areas, Soprano
        ICE has you covered."
        />
      </Container>

      <div className="bg-bg-pink py-4">
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
        <DynamicHairRemoval
          title="Experience the Beauty of Smooth Skin"
          sub_title="What is Laser Hair Removal?"
          description={` Laser Hair Removal is a safe, effective treatment designed to reduce
          unwanted hair by targeting the hair follicles with concentrated light
          energy. This light is absorbed by the pigment in the hair, damaging
          the follicle to prevent future growth. Over a series of sessions,
          you'll enjoy smoother skin with significantly reduced hair regrowth.`}
        />
      </Container>

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

      <DynamicImageSection img={BgImage.src} isBox={true} />
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
