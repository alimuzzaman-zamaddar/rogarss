import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { IoArrowForward } from "react-icons/io5";
import { DynamicCardSectionProps } from "@/types/api";

const DynamicCardSection = ({
  id,
  image1,
  image2,
  title,
  description,
  buttonText,
  buttonLink = "#",
  titleClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
  sectionSubTitle,
  index,
  isBox,
}: DynamicCardSectionProps) => {
  return (
    <section
      className={`py-10 md:py-14 xl:py-20 2xl:py-24 
        ${!isBox ? index % 2 !== 0 && "bg-[#F8F8F8]" : "bg-[#FBE0DA]"}
      `}
    >
      <Container>
        <div
          id={id}
          className={`flex flex-col justify-center items-center gap-5 xl:gap-10 3xl:gap-20 ${
            index % 2 !== 0 ? "xl:flex-row-reverse" : "xl:flex-row"
          }`}
        >
          {/* Left */}
          <div className="flex-1 w-full 3xl:w-[45%] flex relative">
            <div
              data-aos="fade-up"
              className={`absolute top-0 ${
                index % 2 !== 0 ? "right-0" : "left-0"
              }`}
            >
              <div className="hidden xl:block">
                <Image
                  className="h-[500px] 2xl:h-[650px] w-[260px] object-cover"
                  src={image1}
                  alt="contact image 1"
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              className={`xl:pt-25 z-20 w-full ${
                index % 2 == 0 ? "xl:pl-14" : "xl:pr-14"
              }`}
            >
              <Image
                className="h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[650px] w-full object-cover"
                src={image2}
                alt="contact image 2"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 3xl:w-[55%]">
            {sectionSubTitle && (
              <h5 className="section_sub-title">{sectionSubTitle}</h5>
            )}

            <h2 data-aos="fade-up" className={titleClassName}>
              {title}
            </h2>

            <p data-aos="fade-up" className={`${descriptionClassName}`}>
              {description}
            </p>

            {buttonText && (
              <button className={buttonClassName}>
                <Link href={buttonLink}>
                  <span className="flex items-center gap-1">
                    {buttonText}
                    <IoArrowForward />
                  </span>
                </Link>
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DynamicCardSection;
