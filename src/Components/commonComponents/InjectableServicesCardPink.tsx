"use client";

import Image, { StaticImageData } from "next/image";
import Container from "./Container";
import { ListIconSvg } from "../SvgContainer/SvgContainer";
import { Link } from "lucide-react";
import { IoArrowForward } from "react-icons/io5";

export type InjectableServicesCardPinkProps = {
  id?: string;
  image1: StaticImageData | string;
  image2: StaticImageData | string;
  title: string;
  subTitle?: string;
  containerBg: string;
  description?: string;
  list?: string[];
  titleClassName: string;
  descriptionClassName: string;
  index: number;
  CardClassName?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonClassName?: string;
};

const InjectableServicesCardPink = ({
  id,
  image1,
  image2,
  subTitle,
  containerBg,
  CardClassName,
  title,
  list,
  buttonLink,
  buttonClassName,
  buttonText,
  description,
  titleClassName = "",
  descriptionClassName = "",
}: InjectableServicesCardPinkProps) => {
  return (
    <section className="">
      <div className="py-10 md:py-14 xl:py-20 2xl:py-24">
        <Container>
          <div
            id={id}
            className={`flex flex-col  ${CardClassName} xl:justify-center  gap-10 xl:gap-20 xl:flex-row ${containerBg} p-5`}
          >
            {/* Left */}
            <div className=" w-full xl:w-[40%] flex relative">
              <div data-aos="fade-up" className="absolute top-0 right-0">
                <div className="hidden xl:block">
                  <Image
                    className="h-[500px] 2xl:h-[743px] w-[260px]"
                    src={image1}
                    alt="contact image 1"
                  />
                </div>
              </div>
              <div data-aos="fade-up" className="xl:py-15 z-20 w-full xl:pr-25">
                <Image
                  className="h-[300px] lg:h-[400px] 2xl:h-[644px] w-full"
                  src={image2}
                  alt="contact image 2"
                />
              </div>
            </div>
            {/* Right */}
            <div className="w-full xl:w-[60%]">
              <h4 className="text-[#1F1B1A] font-[Gilmer] text-[24px] font-semibold leading-[164%] tracking-[8px] uppercase">
                {subTitle}
              </h4>
              <h2 data-aos="fade-up" className={titleClassName}>
                {title}
              </h2>

              <div data-aos="fade-up" className={`${descriptionClassName} `}>
                <div className="">
                  <p className="mb-10">{description}</p>
                </div>

                {list?.map((desc, index) => (
                  <p
                    className=" mb-[13px] flex gap-4 items-center text-sub-light"
                    key={index}
                  >
                    <span>
                      <ListIconSvg />
                    </span>
                    {desc}
                  </p>
                ))}

                {buttonText && (
                  <button
                    className={`${buttonClassName} mt-10`}
                    onClick={() => (window.location.href = buttonLink || "#")}
                  >
                    <span className="flex items-center gap-1">
                      {buttonText}
                      <IoArrowForward />
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default InjectableServicesCardPink;
// src/Components/commonComponents/InjectableServicesCardPink.tsx
