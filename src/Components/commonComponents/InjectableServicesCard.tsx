import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Container from "./Container";
import { IoArrowForward } from "react-icons/io5";

export type InjectableServicesCardProps = {
  id?: string;
  image1: StaticImageData | string;
  image2: StaticImageData | string;
  title: string;
  subTitle?: string;
  description: string[];
  buttonText: string;
  buttonLink?: string;
  titleClassName: string;
  descriptionClassName: string;
  buttonClassName: string;
  index: number;
  SectionBg?: string;
};

const InjectableServicesCard = ({
  id,
  image1,
  image2,
  subTitle,
  title,
  SectionBg = "bg-[#F8F8F8]",
  description,
  buttonText,
  buttonLink = "#",
  titleClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
  index,
}: InjectableServicesCardProps) => {
  return (
    <section className="section_padding">
      <div className={`py-10 md:py-14 xl:py-20 2xl:py-24 ${SectionBg}`}>
        <Container>
          <div
            id={id}
            className={`flex justify-center items-center gap-5 xl:gap-10 3xl:gap-20 flex-col-reverse xl:flex-row`}
          >
            {/* Left */}
            <div className="w-full 3xl:w-[60%]">
              <h4 className="text-[#1F1B1A] font-family-gilmer text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[24px] font-semibold leading-[164%] lg:tracking-[4px] xl:traking-[6px] 2xl:tracking-[8px] uppercase mb-10">
                {subTitle}
              </h4>
              <h2 data-aos="fade-up" className={titleClassName}>
                {title}
              </h2>

              <div
                data-aos="fade-up"
                className={`${descriptionClassName} mb-10`}
              >
                {description.map((desc, index) => (
                  <p className="mb-10" key={index}>
                    {desc}
                    {index < description.length - 1 && <br />}
                  </p>
                ))}
              </div>

              <button className={buttonClassName}>
                <Link href={buttonLink}>
                  <span className="flex items-center gap-1">
                    {buttonText}
                    <IoArrowForward />
                  </span>
                </Link>
              </button>
            </div>
            {/* Right */}
            <div className=" w-full 3xl:w-[40%] flex relative">
              <div data-aos="fade-up" className="absolute top-0 right-0">
                <div className="hidden xl:block">
                  <Image
                    className="h-[500px] 2xl:h-[650px] w-[260px]"
                    src={image1}
                    alt="contact image 1"
                  />
                </div>
              </div>
              <div data-aos="fade-up" className="xl:pt-25 z-20 w-full xl:pr-14">
                <Image
                  className="h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[650px] w-full"
                  src={image2}
                  alt="contact image 2"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default InjectableServicesCard;
