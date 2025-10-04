import React from "react";
import { IoArrowForward } from "react-icons/io5";

type peopleSayingProps = {
  title: string;
  sub_title: string;
  description: string;
  buttonText?: string;
  data?: SectionData[];
  buttonClassName?: string;
};
export interface SectionData {
  id: number;
  title: string;
  description: string;
}
const WhatPeopleSaying = ({
  title,
  sub_title,
  description,
  buttonText,
  buttonClassName = "card_button_pink",
  data = [],
}: peopleSayingProps) => {
  return (
    <div className="mb-10 lg:mb-14 xl:mb-20 2xl:mb-24 3xl:mb-32 pb-8 md:pb-10 xl:pb-20">
      <section
        className={`mt-10 lg:mt-14 xl:mt-20 2xl:mt-24 3xl:mt-32 px-5 pb-6 md:px-6 xl:px-10 pt-8 md:pt-10 xl:pt-20 bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.07)]`}
      >
        <div className={`max-w-[1396px] mx-auto`}>
          <h3 className="section_sub-title text-center">{sub_title}</h3>
          <p className="section_title text-center !mb-5">{title}</p>
          <p className="card_description text-center">{description}</p>
        </div>
        {buttonText && (
          <div className=" flex justify-center items-center my-7 ">
            <button className={`flex items-center ${buttonClassName}`}>
              <span>{buttonText} </span> <IoArrowForward/>
             </button>
          </div>
        )}
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 3xl:mt-25">
        {data.map((section: SectionData) => (
          <div key={section.id} className="p-10 bg-[#ebebeb]">
            <h3 className="text-lg md:text-xl xl:text-[32px] font-normal font-bold leading-[132%] font-family-gilmer text-primary-black mb-2">
              {section.title}
            </h3>
            <p className="section_description">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatPeopleSaying;
