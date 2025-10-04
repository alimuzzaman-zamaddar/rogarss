import React from "react";
import Container from "../commonComponents/Container";

const Results = () => {
  return (
    <section className="mb-5 mt-16 2xl:my-24 3xl:my-32 py-10 xl:py-20 bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.07)]">
      <Container>
        <div className="relative max-w-[1140px] mx-auto">
          <div className="flex flex-col xl:flex-row gap-5 xl:gap-10 3xl:gap-20">
            {/* Left */}
            <div className="relative shrink-0 w-full xl:w-[350px] 2xl:w-[502px]">
              <p className="section_title !mb-0">
                Results That Speak for Themselves
              </p>
            </div>

            {/* Right */}
            <div className="grow flex flex-col">
              <h5
                data-aos="fade-up"
                className="!text-primary-black section_description mb-3"
              >
                Post-Treatment Results & Care
              </h5>
              <p
                data-aos="fade-up"
                className="xl:text-lg 2xl:text-xl leading-[164%] text-sub-text mb-5 2xl:mb-10 3xl:mb-12"
              >
                At Esteves Aesthetics & Med Spa, our clients enjoy real, visible
                transformations — smoother skin, reduced hair growth, and
                long-lasting confidence with every session. Backed by advanced
                laser technology and a personalized approach, our results are
                not only seen but truly felt.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Results;
