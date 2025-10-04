import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

interface Category {
  name: string;
  link: string;
  description: string;
}
interface InjectableSectionProps {
  title: string;
  subtitle: string;
  categories: Category[];
}
const DynamicServicesCategories: React.FC<InjectableSectionProps> = ({
  title,
  subtitle,
  categories,
}) => {
  return (
      <section className="section_padding">
        {/* Title and Subtitle */}
        <div className="text-center section_padding">
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[62px] font-normal not-italic leading-[164%] tracking-[2.48px] font-family-gloock text-pink-border mb-1 xl:mb-2.5">
            {title}
          </h2>
          <p className="text-sm md:text-base lg:text-xl xl:text-[24px] font-normal not-italic leading-[164%] text-sub-text capitalize font-family-gilmer ">
            {subtitle}
          </p>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-4 xl:p-6 bg-white text-black hover:bg-bg-pink duration-500
                          

                ${
                  categories.length === 1
                    ? "border-l border-l-alt-border border-r border-r-alt-border"
                    : ""
                }
              ${
                index % 2 === 0 ||
                (categories.length % 2 === 1 && index === categories.length - 1)
                  ? "border-r border-alt-borderCategory"
                  : ""
              }
              ${
                categories.length % 2 === 0
                  ? index === categories.length - 1
                    ? ""
                    : index === categories.length - 2
                    ? ""
                    : "border-b border-alt-borderCategory"
                  : index !== categories.length - 1
                  ? "border-b border-alt-borderCategory"
                  : ""
              }`}
            >
              <div
                data-aos="fade-up"
                className="flex flex-col justify-center items-center p-0 lg:p-7 xl:p-10 "
              >
                <h3 className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] font-normal not-italic leading-[132%] tracking-[1.6px] capitalize font-family-gloock text-primary-black text-center mb-2 lg:mb-7 xl:mb-10">
                  {category.name}
                </h3>
                <Link
                  href={category.link}
                  className="mt-0 md:mt-2 xl:mt-4 text-xs md:text-base lg:text-xl xl:text-[24px] font-normal not-italic leading-[164%] capitalize text-sub-text text-center font-family-gilmer flex items-center gap-1 xl:gap-3"
                >
                  {category.description}
                  <span>
                    <IoArrowForward />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default DynamicServicesCategories;
