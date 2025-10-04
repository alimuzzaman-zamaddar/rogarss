import { laserBoxProps } from "@/types/api";
import React from "react";

const DynamicLaserBox = ({ title, sub_title, description,buttonText }: laserBoxProps) => {
  return (
    <section className="section_padding max-w-[1240px] mx-auto">
      <h4 data-aos="fade-up" className="section_sub-title text-center">
        {sub_title}
      </h4>
      <p
        data-aos="fade-up"
        className="card_title_black text-center !mb-5 xl:!mb-10"
      >
        {title}
      </p>
      <p data-aos="fade-up" className="card_description">
        {description}
      </p>
      <p data-aos="fade-up" className="card_description">
        {description}
      </p>
      <div className="flex justify-center items-center py-3">
        {buttonText && (
          <div className="text-center mt-5">
            <button className="card_button_pink">
              <span>{buttonText} </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DynamicLaserBox;
