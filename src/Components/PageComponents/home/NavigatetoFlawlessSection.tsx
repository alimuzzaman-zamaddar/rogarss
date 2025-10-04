"use client";

import Image from "next/image";
import Container from "@/Components/commonComponents/Container";
// import AeshteticsSectionS from "../../../assets/service/Image+Shadow.png";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import { sectionBars } from "@/Components/Data/data";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import image1 from "../../../assets/home/Image (2).png"
import image2 from "../../../assets/home/Image (3).png"
import StickyLinkSection from "@/Components/commonComponents/StickyLinkSection";

export const NavigatetoFlawlessSection = () => {
  return (
    <div className="section_padding">
      <div>
        <h3
          data-aos="fade-up"
          className="section_title !mb-5 3xl:!mb-7 text-center"
        >
          Navigate to Flawless Skin
        </h3>

        <p
          data-aos="fade-up"
          className="section_description mb-7 xl:mb-10 2xl:mb-12 3xl:mb-20 max-w-[1125px] text-center mx-auto"
        >
          Wondering what treatment will help you achieve your desired look? Why
          not book a free consultation? You can even opt for a cool 3D
          photography session to capture your face and body. This way, you’ll
          get a clear idea of what to expect with some awesome "before" photos
          to kick off your aesthetic journey, and later, "after" photos to track
          your progress. Let’s make your aesthetic goals a reality!
        </p>
      </div>

      <div className="bg-bg-pink py-4 mt-10 3xl:mt-20">
        <Container>
          <div className="flex flex-wrap gap-4 items-center justify-center xl:justify-between text-sm xl:text-base">
            {sectionBars?.map(bar => (
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

      <DynamicCardSection
        image1={image2}
        image2={image1}
        title="Morpheus8"
        description="Reveal smoother, firmer, and more youthful-looking skin with Morpheus8 at Estevez Aesthetics. Our skilled providers use this cutting-edge treatment to help you regain confidence in your skin without surgery. "
        buttonText="Learn More"
        sectionSubTitle="Pdo thread lifts in Lubbock"
        buttonClassName="card_button_pink"
        titleClassName="card_title_pink"
        descriptionClassName="card_description"
        buttonLink="#"
        index={1}
      />

    </div>
  );
};


        // <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-7 xl:gap-10 3xl:gap-20">
        //   {/* Left */}
        //   <div className="flex-1 flex flex-col justify-center">
        //     <p data-aos="fade-up" className="section_sub-title">
        //       Pdo thread lifts in Lubbock
        //     </p>

        //     <h3
        //       data-aos="fade-up"
        //       className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-[44px] text-[#E08D81] mb-3 md:mb-5"
        //     >
        //       Morpheus8
        //     </h3>

        //     <p
        //       data-aos="fade-up"
        //       className="section_description mb-5 lg:mb-10 2xl:w-[80%]"
        //     >
        //       Reveal smoother, firmer, and more youthful-looking skin with
        //       Morpheus8 at Estevez Aesthetics. Our skilled providers use this
        //       cutting-edge treatment to help you regain confidence in your skin
        //       without surgery.
        //     </p>

        //     <button
        //       type="submit"
        //       className="px-5 w-fit md:px-10 3xl:px-20 py-2 md:py-2.5 3xl:py-4 bg-bg-pink  text-primary-black md:text-lg 3xl:text-xl font-normal leading-[164%] capitalize hover:bg-transparent border border-transparent hover:border-alt-border  duration-500 flex items-center gap-4 cursor-pointer"
        //     >
        //       Learn More
        //       <span>
        //         <IoArrowForward />
        //       </span>
        //     </button>
        //   </div>

        //   {/* Right */}
        //   <div className="flex-1">
        //     <Image
        //       data-aos="fade-up"
        //       src={AeshteticsSectionS}
        //       alt="contact image"
        //       className="w-full h-fit md:h-[500px] xl:h-[550px] 2xl:h-[650px] object-cover"
        //     />
        //   </div>
        // </div>;