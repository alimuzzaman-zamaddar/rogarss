"use client";

import Image, { StaticImageData } from "next/image";
import Container from "./Container";
import { IoArrowForward } from "react-icons/io5";

export type ReusableInfoCardProps = {
  id?: string;
  title: string;
  subTitle?: string;
  description?: string;
  list?: { title: string; description: string }[];
  buttonText?: string;
  buttonLink?: string;
  buttonClassName?: string;
  image1: StaticImageData | string;
  image2: StaticImageData | string;
  containerBg?: string;
  reverse?: boolean; // allows swapping image/text sides
};

const ReusableInfoCard = ({
  id,
  subTitle,
  title,
  description,
  list,
  buttonText,
  buttonLink = "#",
  buttonClassName = "card_button_black",
  image1,
  image2,
  containerBg = "bg-bg-pink", // use your defined --color-bg-pink
  reverse = false,
}: ReusableInfoCardProps) => {
  return (
    <section id={id} className={`section_padding ${containerBg}`}>
      <Container>
        <div
          className={`flex flex-col ${
            reverse ? "xl:flex-row-reverse" : "xl:flex-row"
          } items-center gap-10 xl:gap-20`}
        >
          {/* Left: Text */}
          <div className="w-full xl:w-3/5">
            {subTitle && <h4 className="section_sub-title">{subTitle}</h4>}
            <h2 className="section_title !mb-8">{title}</h2>

            {description && (
              <p className="section_description">{description}</p>
            )}

            {list && (
              <div className="space-y-6 mb-8">
                {list.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold text-lg text-primary-black mb-1">
                      {item.title}
                    </h3>
                    <p className="section_description">{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {buttonText && (
              <a href={buttonLink}>
                <button
                  className={`${buttonClassName} flex items-center gap-2`}
                >
                  {buttonText} <IoArrowForward />
                </button>
              </a>
            )}
          </div>

          {/* Right: Image */}
          <div className="relative w-full xl:w-2/5 flex justify-center">
            <div className="w-full flex relative">
              <div data-aos="fade-up" className="absolute top-0 right-0">
                <div className="hidden xl:block">
                  <Image
                    className="h-[500px] 2xl:h-[743px] w-[260px]"
                    src={image1}
                    alt="background element"
                  />
                </div>
              </div>
              <div data-aos="fade-up" className="xl:pt-25 z-20 w-full xl:pr-25">
                <Image
                  className="h-[300px] lg:h-[600px] 2xl:h-[700px] w-full"
                  src={image2}
                  alt={title}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReusableInfoCard;
