"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import { accordionData } from "@/Components/Data/data";
import Container from "../commonComponents/Container";

const FAQ = (data: any) => {
  console.log(data, "from faq");
  const accordionDatas = accordionData;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section>
      <Container>
        <div className="mb-5 md:mb-10">
          <Paragraph Txt="Faq" className="section_sub-title text-center" />
          <Heading
            Txt="Curious About the Process? Start Here"
            className="section_title !mb-5 lg:!mb-7 text-center"
          />
        </div>

        <div className="grid xl:grid-cols-2 items-start gap-5">
          {data?.data.map((item:any, index:any) => (
            <div
              key={index}
              className="bg-white px-4 md:px-7 py-3 md:py-5 border rounded border-gray-100 shadow-[0_2px_22.1px_-6px_rgba(0, 0, 0, 0.15)]"
            >
              <div
                className={`flex justify-between items-center cursor-pointer transition-all duration-1000`}
                onClick={() => handleToggle(index)}
              >
                <h3 className="xl:text-lg 3xl:text-xl font-family-gilmer leading-[132%] font-semibold">
                  {item.question}
                </h3>
                <span
                  className={`rounded-full p-1 text-sm md:text-base transition-transform duration-500 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <IoIosArrowDown />
                </span>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? "max-h-screen opacity-100 mt-3 md:mt-5"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="section_description">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;



