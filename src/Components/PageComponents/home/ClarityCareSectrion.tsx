"use client";
import Image from "next/image";
import Container from "@/Components/commonComponents/Container";
import { IoArrowForward } from "react-icons/io5";
import { useHomeContentsQuery } from "@/redux/slices/cms/homeSlice";

export const ClarityCareSectrion = () => {
   const { data, isLoading } = useHomeContentsQuery();
  return (
    <div className="bg-bg-pink py-10 lg:py-14 xl:py-20">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row gap-7 xl:gap-10 3xl:gap-20">
          <div className="flex-1 flex flex-col justify-center-center">
            <p data-aos="fade-up" className="section_sub-title">
              {data?.data?.stuff?.title}
            </p>

            <h3
              data-aos="fade-up"
              className="section_title 2xl:!text-5xl !mb-5"
            >
              {data?.data?.stuff?.sub_title}
            </h3>

            <p data-aos="fade-up" className="section_description mb-10">
              {data?.data?.stuff?.description}
            </p>
            <button
              type="submit"
              className="px-5 w-fit md:px-10 3xl:px-20 py-2 md:py-2.5 3xl:py-4 bg-primary-black text-white md:text-lg  3xl:text-xl font-normal leading-[164%] capitalize border-[1.5px]  hover:border-alt-border hover:bg-[#F8F8F8] duration-500 flex items-center gap-4 hover:text-primary-black cursor-pointer"
            >
              <span>Learn More</span>
              <IoArrowForward />
            </button>
          </div>
          <div data-aos="flip-left" data-aos-duration="1000" className="flex-1">
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.data?.stuff?.image_url}`}
              height={800}
              width={800}
              alt="contact image"
              className="w-full h-fit md:h-[500px] xl:h-[550px] 2xl:h-[650px] object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
