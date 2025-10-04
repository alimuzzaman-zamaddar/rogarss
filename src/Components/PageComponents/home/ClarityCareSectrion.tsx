"use client";
import Image from "next/image";
import Container from "@/Components/commonComponents/Container";
import AeshteticsSectionS from "../../../assets/service/ClarityCareSectrion.png";
import { IoArrowForward } from "react-icons/io5";

export const ClarityCareSectrion = () => {
  return (
    <div className="bg-bg-pink py-10 lg:py-14 xl:py-20">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row gap-7 xl:gap-10 3xl:gap-20">
          {/* Left */}
          <div className="flex-1 flex flex-col justify-center-center">
            <p data-aos="fade-up" className="section_sub-title">
              helpful stuff for patients
            </p>

            <h3
              data-aos="fade-up"
              className="section_title 2xl:!text-5xl !mb-5"
            >
              Clarity and Care for Your Aesthetic Choices
            </h3>

            <p data-aos="fade-up" className="section_description mb-10">
              At Ellevé Med Spa, we believe that informed patients make
              confident decisions. Our Patient Resources section is designed to
              provide you with comprehensive information about our services,
              financing options, and what to expect during your visits. Whether
              you're exploring treatment possibilities or preparing for your
              next appointment...
            </p>

            <button
              type="submit"
              className="px-5 w-fit md:px-10 3xl:px-20 py-2 md:py-2.5 3xl:py-4 bg-primary-black text-white md:text-lg  3xl:text-xl font-normal leading-[164%] capitalize border-[1.5px]  hover:border-alt-border hover:bg-[#F8F8F8] duration-500 flex items-center gap-4 hover:text-primary-black cursor-pointer"
            >
              <span>Learn More</span>
              <IoArrowForward />
            </button>
          </div>

          {/* Right */}
          <div data-aos="fade-up" className="flex-1">
            <Image
              src={AeshteticsSectionS}
              alt="contact image"
              className="w-full h-fit md:h-[500px] xl:h-[550px] 2xl:h-[650px] object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
