"use client";

import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import image from "@/assets/contact/contact.png";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import Container from "@/Components/commonComponents/Container";
import { BoltSvg, LineSvg } from "@/Components/SvgContainer/SvgContainer";
import Button from "@/Components/Tags/Button/Button";
import FAQ from "@/Components/ServicesPage/FAQ";
import { useSubServiceDetailsQuery } from "@/redux/slices/cms/homeSlice";
import Loader from "@/Components/Tags/Loader/loader";

const sectionBars = [
  { id: 1, path: "dysport", label: "What Dysport?" },
  { id: 2, path: "becefits", label: "Benefits" },
  { id: 3, path: "candidate", label: "Dysport Candidates" },
  { id: 4, path: "procedure", label: "Procedure" },
  { id: 5, path: "result", label: "Result" },
  { id: 6, path: "faq", label: "FAQ" },
  { id: 7, path: "contact", label: "Consultation" },
];

export default function Page() {
  const { data, isLoading } = useSubServiceDetailsQuery("dysport");

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Banner */}
          <Container>
            <BannerSection
              bgImages={[1, 2, 3].map(
                () =>
                  `${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.banner_image}`
              )}
              heading={data?.name}
              description="Smooth away wrinkles with natural, lasting results"
            />
          </Container>

          {/* Tabs Section */}
          <div className="pt-6 sm:pt-8 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10">
            <Container>
              <h4
                data-aos="fade-up"
                className="text-center font-['Gloock'] text-3xl sm:text-4xl md:text-5xl xl:text-[62px] leading-[132%] capitalize text-black mb-6 sm:mb-10"
              >
                {data?.title}
              </h4>

              <p
                data-aos="fade-up"
                className="text-center card_description text-sm sm:text-base md:text-lg xl:text-[20px] w-[90%] sm:w-[80%] mx-auto mb-6 sm:mb-10"
              >
                {data?.description}
              </p>
            </Container>

            {/* Navigation Tabs */}
            <div className="bg-[#FBFBFB] py-3 sm:py-4 mt-6 sm:mt-10 3xl:mt-20">
              <Container>
                <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center xl:justify-between text-xs sm:text-sm xl:text-base">
                  {sectionBars?.map((bar, index) => (
                    <Link
                      key={bar.id}
                      href={`#${bar.path}`}
                      scroll={true}
                      className="link_text"
                    >
                      {bar.label}
                      {index === 0 && <LineSvg />}
                    </Link>
                  ))}
                </div>
              </Container>
            </div>
          </div>

          {/* Definition Section */}
          <div id="dysport">
            <DynamicCardSection
              image={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.sub_service_details?.definition_image}`}
              title={data?.sub_service_details?.definition_title}
              description={data?.sub_service_details?.definition_description}
              sectionSubTitle={data?.sub_service_details?.definition_sub_title}
              titleClassName="card_title_black "
              descriptionClassName="card_description"
              buttonLink="#"
              index={3}
            />
          </div>

          {/* Difference Section */}
          <Container>
            <h4
              data-aos="fade-up"
              className="text-center section_sub-title text-base sm:text-lg md:text-xl mb-6 sm:mb-10 mt-8 sm:mt-16"
            >
              {data?.sub_service_details?.difference_sub_title}
            </h4>

            <h4
              data-aos="fade-up"
              className="text-center font-['Gloock'] text-3xl sm:text-4xl md:text-5xl xl:text-[62px] leading-[132%] capitalize text-black mb-6 sm:mb-10"
            >
              {data?.sub_service_details?.difference_title}
            </h4>

            <p
              data-aos="fade-up"
              className="text-center card_description text-sm sm:text-base md:text-lg w-[90%] sm:w-[80%] mx-auto"
            >
              {data?.sub_service_details?.difference_description}
            </p>
          </Container>

          {/* Benefits Section */}
          <Container>
            <section
              id="becefits"
              className="py-10 sm:py-16 bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)] my-10 sm:my-25"
            >
              <div className="text-center">
                <h2 className="section_Title text-3xl sm:text-4xl xl:text-[62px] mb-6 sm:mb-10">
                  {data?.sub_service_details?.benefits_title}
                </h2>

                <p className="section_description text-sm sm:text-base md:text-lg xl:text-[20px] mb-8 w-[90%] sm:w-[60%] mx-auto">
                  {data?.sub_service_details?.benefits_description}.
                </p>

                <div className="flex justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-20 gap-y-4 text-left">
                    {data?.sub_service_benefits.map(
                      (benefit: any, index: number) => (
                        <div
                          key={index}
                          className="flex items-start space-x-2 text-gray-700"
                        >
                          <span className="text-sm sm:text-base">
                            <BoltSvg />
                          </span>
                          <span className="section_description text-sm sm:text-base">
                            {benefit.benefit_title}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>
          </Container>

          {/* Candidates Section */}
          <Container>
            <div id="candidate" className="my-10 sm:my-20">
              <h4
                data-aos="fade-up"
                className="text-center font-['Gloock'] text-3xl sm:text-4xl md:text-5xl xl:text-[62px] leading-[132%] capitalize text-black mb-6 sm:mb-10"
              >
                {data?.sub_service_details?.candidate_title}
              </h4>

              <p
                data-aos="fade-up"
                className="section_description text-sm sm:text-base md:text-lg w-[90%] sm:w-[70%] mx-auto text-center"
              >
                {data?.sub_service_details?.candidate_description}
              </p>
            </div>
          </Container>

          <div id="procedure" className="">
            <DynamicCardSection
              image={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.sub_service_details?.procedure_image}`}
              title={data?.sub_service_details?.procedure_title}
              description={data?.sub_service_details?.procedure_description}
              sectionSubTitle={data?.sub_service_details?.procedure_sub_title}
              titleClassName="card_title_pink"
              descriptionClassName="card_description"
              buttonLink="#"
              index={0}
            />
          </div>

          <Container>
            <div
              id="candidates"
              className="my-10 sm:my-35 xl:flex justify-center items-center"
            >
              <h4
                data-aos="fade-up"
                className="flex-1 text-center xl:text-right font-['Gloock'] text-3xl sm:text-4xl md:text-5xl xl:text-[62px] leading-[132%] capitalize text-black mb-6 sm:mb-10"
              >
                {data?.sub_service_details?.recovery_title}
              </h4>

              <p
                data-aos="fade-up"
                className="flex-1 section_description text-sm sm:text-base md:text-lg w-[90%] sm:w-[70%] mx-auto text-center"
              >
                {data?.sub_service_details?.recovery_description}
              </p>
            </div>
          </Container>

          {/* Result Section */}
          <div id="result" className="">
            <DynamicCardSection
              image={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.sub_service_details?.result_image}`}
              title={data?.sub_service_details?.result_title}
              description={data?.sub_service_details?.result_description}
              sectionSubTitle={data?.sub_service_details?.result_sub_title}
              titleClassName="card_title_black "
              descriptionClassName="card_description"
              buttonLink="#"
              index={3}
            />
          </div>

          <Container>
            <div
              id="candidates"
              className="my-10 sm:my-35 xl:flex justify-center items-center xl:gap-10"
            >
              <h4
                data-aos="fade-up"
                className="flex-1 text-center xl:text-right font-['Gloock'] text-3xl sm:text-4xl md:text-5xl xl:text-[62px] leading-[132%] capitalize text-pink-border mb-6 sm:mb-10"
              >
                {data?.sub_service_details?.choose_title}
              </h4>

              <p
                data-aos="fade-up"
                className="flex-1 section_description text-sm sm:text-base md:text-lg w-[90%] sm:w-[70%] mx-auto text-center xl:text-left"
              >
                {data?.sub_service_details?.choose_description}
              </p>
            </div>
          </Container>

          {/* CTA Section */}
          <Container>
            <div className="my-10 sm:my-20 px-4 sm:px-10 py-10 sm:py-20 bg-[#FBE0DA]">
              <h4
                data-aos="fade-up"
                className="text-center font-['Gloock'] text-3xl sm:text-4xl md:text-5xl xl:text-[62px] leading-[132%] capitalize text-primary-black mb-6 sm:mb-10"
              >
                {data?.sub_service_details?.consultation_title}
              </h4>

              <p
                data-aos="fade-up"
                className="section_description text-sm sm:text-base md:text-lg w-[90%] sm:w-[70%] mx-auto text-center"
              >
                {data?.sub_service_details?.consultation_description}
              </p>

              <div className="flex justify-center mt-6 sm:mt-10">
                <Button Txt="Book Now" className="card_button_black" />
              </div>
            </div>
          </Container>

          {/* FAQ Section */}
          <div id="faq" className="py-10 sm:py-30">
            <FAQ data={data?.service_faqs} />
          </div>
          <div id="contact" className="">
            <DynamicContactUs image={image} />
          </div>
        </>
      )}
    </>
  );
}
