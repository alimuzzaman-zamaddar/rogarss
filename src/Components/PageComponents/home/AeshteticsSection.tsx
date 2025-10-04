"use client";
import Image from "next/image";
import Container from "@/Components/commonComponents/Container";
import AeshteticsSectionS from "../../../assets/AeshteticsSection/AeshteticsSection.png";
import { IoArrowForward } from "react-icons/io5";

export const AeshteticsSection = () => {
  return (
    <div className="bg-[#F8F8F8] py-10 lg:py-14 2xl:py-20 3xl:py-28">
      <Container>
        <div className="flex flex-col lg:flex-row gap-7 xl:gap-10 3xl:gap-20">
          {/* Left */}
          <div className="flex-1">
            <Image
              data-aos="fade-up"
              src={AeshteticsSectionS}
              alt="contact image"
              className="w-full h-fit md:h-[500px] xl:h-[550px] 2xl:h-[650px] 3xl:h-[800px] object-cover"
            />
          </div>

          {/* Right */}
          <div className="flex-1">
            <div>
              <p data-aos="fade-up" className="section_sub-title">
                Estevez Aeshtetics Las Vegas NV
              </p>

              <h3 data-aos="fade-up" className="section_title !mb-5 2xl:!mb-10">
                Unleash Your True Potential
              </h3>

              <p
                data-aos="fade-up"
                className="section_description mb-5 md:mb-7 2xl:mb-10"
              >
                At Estevez Aesthetics in Las Vegas, we combine advanced
                treatments with holistic wellness to help you look and feel your
                best. Led by Dr. Roger Estevez, our team offers personalized
                care that bridges health and beauty. Our services include
                Morpheus8, Opus Plasma skin rejuvenation, and wellness options
                like hormone therapy and IV infusions.
              </p>

              <button
                type="submit"
                className="px-5 md:px-10 3xl:px-20 py-2 md:py-2.5 3xl:py-4 bg-primary-black text-white md:text-lg  3xl:text-xl font-normal leading-[164%] capitalize border-[1.5px]  hover:border-alt-border hover:bg-[#F8F8F8] duration-500 flex items-center gap-4 hover:text-primary-black cursor-pointer"
              >
                <span>Learn More</span>
                <IoArrowForward />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
