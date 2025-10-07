"use client";

import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import image from "@/assets/contact/contact.png";
import image3 from "@/assets/service/botox-2.png";
import image4 from "@/assets/cards/image6.png";
import image7 from "@/assets/service/botox-3.png";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import Container from "@/Components/commonComponents/Container";
import { BoltSvg, LineSvg } from "@/Components/SvgContainer/SvgContainer";
import Button from "@/Components/Tags/Button/Button";
import FAQ from "@/Components/ServicesPage/FAQ";
import { useGetSubServiceDetailsQuery } from "@/redux/slices/cms/homeSlice";
import { accordionData } from "@/Components/Data/data";
import Loader from "@/Components/Tags/Loader/loader";

const sectionBarss = [
  { id: 1, path: "botox", label: "What Botox?" },
  { id: 2, path: "benefits", label: "Benefits" },
  { id: 3, path: "candidates", label: "Botox Candidates" },
  { id: 4, path: "procedure", label: "Procedure" },
  { id: 6, path: "faq", label: "FAQ" },
  { id: 7, path: "contact", label: "Consultation" },
];

export default function page() {
  const { data, isLoading } = useGetSubServiceDetailsQuery("botox");
  console.log(data, "botox");

  const accordionDatas = accordionData;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Container>
            <BannerSection
              bgImages={[1, 2, 3].map(
                () =>
                  `${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.banner_image}`
              )}
              heading={data?.name}
              description="Smooth, Firm, and Restore Your Skin’s Youthful Glow"
            />
          </Container>

          {/* Top Section */}
          <div className="pt-6 sm:pt-8 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10">
            <Container>
              <h4
                data-aos="fade-up"
                className="text-center font-['Gloock'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] leading-[132%] capitalize text-black mb-6 sm:mb-10"
              >
                {data?.title}
              </h4>

              <p
                data-aos="fade-up"
                className="text-center font-family-gilmer text-base sm:text-lg md:text-xl xl:text-[24px] leading-[164%] capitalize text-black w-[90%] sm:w-[80%] mx-auto mb-6 sm:mb-10"
              >
                {data?.sub_title}
              </p>

              <p
                data-aos="fade-up"
                className="text-center font-family-gilmer text-sm sm:text-base md:text-lg xl:text-[24px] leading-[164%] capitalize text-[#7D7B79] w-[90%] sm:w-[80%] mx-auto"
              >
                {data?.description}
              </p>
            </Container>

            {/* Section Tabs */}
            <div className="bg-[#FBFBFB] py-3 sm:py-4 mt-6 sm:mt-10 3xl:mt-20">
              <Container>
                <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center xl:justify-between text-xs sm:text-sm xl:text-base">
                  {sectionBarss?.map((bar, index) => (
                    <Link
                      key={bar?.id}
                      href={`#${bar?.path}`}
                      scroll={true}
                      className="link_text"
                    >
                      {bar?.label}
                      {index === 0 && <LineSvg />}
                    </Link>
                  ))}
                </div>
              </Container>
            </div>
          </div>

          {/* Dynamic Card Section */}
          <div className="" id="botox">
            <DynamicCardSection
              image={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.sub_service_details?.definition_image}`}
              title={data?.sub_service_details?.definition_title}
              description={data?.sub_service_details?.definition_description}
              sectionSubTitle={data?.sub_service_details?.definition_sub_title}
              titleClassName="card_title_black xl:text-[52px]"
              descriptionClassName="card_description"
              buttonLink="#"
              index={3}
            />
          </div>

          {/* Benefits Section */}
          <Container>
            <section
              id="benefits"
              className="py-10 sm:py-16 bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)] my-10 sm:my-25"
            >
              <div className="text-center">
                <h2 className="section_Title text-3xl sm:text-4xl xl:text-[62px] mb-6 sm:mb-10">
                  {data?.sub_service_details?.benefits_title}
                </h2>

                <p className="section_description text-sm sm:text-base md:text-lg xl:text-[20px] mb-8 w-[90%] sm:w-[60%] mx-auto">
                  {data?.sub_service_details?.benefits_description}
                </p>

                <div className="flex justify-center items-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-20 gap-y-4 text-center">
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

          {/* Botox Candidates */}
          <Container>
            <div id="candidates" className="my-10 sm:my-35">
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

          {/* Other Sections remain unchanged */}
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

          {/* FAQ & Contact */}
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
