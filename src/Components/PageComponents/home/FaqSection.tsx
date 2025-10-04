"use client";
import Container from "@/Components/commonComponents/Container";
import { accordionData } from "@/Components/Data/data";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import imageUrl from "../../../assets/testimonial/faq.png";

const FaqSection: React.FC = () => {
  const accordionDatas = accordionData;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="section_padding">
      <Container>
        <div className="flex gap-8 flex-col xl:flex-row 2xl:gap-10 3xl:gap-16">
          {/* Left Image */}
          <div
            data-aos="fade-up"
            className="w-full xl:w-[400px] 2xl:w-[450px] 3xl:w-[530px] shrink-0"
          >
            <Image
              src={imageUrl}
              alt="FAQ Illustration"
              className="w-full h-fit md:h-[500px] 2xl:h-[600px]"
            />
          </div>

          {/* Right Accordion */}
          <div data-aos="fade-up" className="grow">
            <div>
              <Paragraph Txt="Faq" className="section_sub-title" />
              <Heading
                Txt="Frequently Asked Questions?"
                className="section_title !mb-5 lg:!mb-7"
              />
            </div>

            <div className="space-y-2 2xl:space-y-4">
              {accordionDatas.map((item, index) => (
                <div key={index} className="border-b border-gray-200 ">
                  {/* Accordion Header */}
                  <div
                    className={`flex justify-between items-center cursor-pointer transition-all duration-1000 p-3 2xl:p-5 ${
                      activeIndex === index
                        ? "bg-secondary-bg text-primary-black"
                        : ""
                    }`}
                    onClick={() => handleToggle(index)}
                  >
                    <h3 className=" xl:text-lg 2xl:text-xl 3xl:text-2xl font-family-gilmer leading-[132%] font-normal xl:font-semibold">
                      {item.question}
                    </h3>
                    <span
                      className={`rounded-full p-1 transition-transform duration-500 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <IoIosArrowDown />
                    </span>
                  </div>
                  {/* Accordion Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      activeIndex === index
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="section_description bg-secondary-bg px-3 2xl:px-5 pb-5">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
