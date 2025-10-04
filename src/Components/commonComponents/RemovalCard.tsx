import Image from "next/image";
import Container from "./Container";
import { DynamicCardSectionProps } from "@/types/api";

const DynamicCardSection = ({
  id,
  image1,
  image2,
  title,
  description,
  titleClassName = "",
  descriptionClassName = "",
}: DynamicCardSectionProps) => {
  return (
    <section className={`py-10 md:py-14 xl:py-20 2xl:py-24`}>
      <Container>
        <div
          id={id}
          className={`flex flex-col xl:flex-row justify-center items-center gap-5 xl:gap-10 3xl:gap-20 xl:px-10 xl:py-20 xl:bg-white xl:shadow-[0_2px_47px_11px_rgba(0,0,0,0.1)]`}
        >
          {/* Left */}
          <div className="flex-1 w-full 3xl:w-[45%] flex relative">
            <div data-aos="fade-up" className={`absolute top-0 right-0`}>
              <div className="hidden xl:block">
                <Image
                  className="h-[500px] 2xl:h-[650px] w-[260px]"
                  src={image1}
                  alt="contact image 1"
                />
              </div>
            </div>
            <div data-aos="fade-up" className={`xl:pt-25 z-20 w-full xl:pr-14`}>
              <Image
                className="h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[650px] w-full"
                src={image2}
                alt="contact image 2"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 3xl:w-[55%]">
            <h2 data-aos="fade-up" className={titleClassName}>
              {title}
            </h2>

            <p data-aos="fade-up" className={`${descriptionClassName}`}>
              {description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DynamicCardSection;
