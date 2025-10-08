"use client";

import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import image from "@/assets/contact/contact.png";
import image4 from "@/assets/cards/image6.png";
import image8 from "@/assets/service/darmal-1.png";
import image11 from "@/assets/service/lip.png";
import Container from "@/Components/commonComponents/Container";
import { BoltSvg, LineSvg } from "@/Components/SvgContainer/SvgContainer";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import FAQ from "@/Components/ServicesPage/FAQ";
import Image from "next/image";
import { useSubServiceDetailsQuery } from "@/redux/slices/cms/homeSlice";

const sectionBars = [
  { id: 1, path: "what-is-lip", label: "What Is Lip Fillers?" },
  { id: 2, path: "before-after", label: "Before & After" },
  { id: 3, path: "options", label: "Your Options for Lip" },
  { id: 4, path: "benefits", label: "Benefits" },
  { id: 5, path: "result", label: "Result" },
  { id: 6, path: "recovery", label: "Recovery" },
  { id: 7, path: "faq", label: "FAQ" },
  { id: 8, path: "consultation", label: "Consultation" },
];

export default function Page() {
  const { data, isLoading } = useSubServiceDetailsQuery("lip-fillers");

  return (
    <>
      {/* Banner */}
      <Container>
        <BannerSection
          bgImages={[1, 2, 3].map(
            () => `${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.banner_image}`
          )}
          heading={data?.name}
          description="Smooth away wrinkles with natural, lasting results"
        />
      </Container>

      {/* Tabs */}
      <div className="pt-10 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10">
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

        <div className="bg-[#FBFBFB] py-4 mt-10 3xl:mt-20">
          <Container>
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center xl:justify-between text-xs sm:text-sm xl:text-base">
              {sectionBars.map((bar, index) => (
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

      {/* What is Lip */}
      <div id="what-is-lip" className="">
        <DynamicCardSection
          image={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.sub_service_details?.definition_image}`}
          title={data?.sub_service_details?.definition_title}
          description={data?.sub_service_details?.definition_description}
          sectionSubTitle={data?.sub_service_details?.definition_sub_title}
          titleClassName="card_title_black !text-[32px] sm:!text-[40px] lg:!text-[52px]"
          descriptionClassName="card_description"
          buttonLink="#"
          index={3}
        />
      </div>

      {/* Before & After */}
      <section id="before-after" className="py-16 sm:py-20">
        <Container>
          <h2 className="card_title_black text-center mb-8 sm:mb-10">
            {data?.sub_service_details?.after_before_title}
          </h2>

          <div className="flex flex-col sm:flex-row gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative w-full sm:w-1/3">
                <Image
                  src={`${process.env.NEXT_PUBLIC_ASSET_URL}/${
                    data?.sub_service_details?.[`after_before_image_${i}`]
                  }`}
                  alt={`Image ${i}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Description */}
      <div className="bg-white py-14 sm:py-20">
        <Container>
          <h4
            data-aos="fade-up"
            className="text-center font-['Gloock'] text-3xl sm:text-4xl xl:text-[62px] leading-[132%] capitalize text-secondary-black mb-6 sm:mb-10"
          >
            The Secret to Plumper Lips
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description w-[90%] sm:w-[70%] mx-auto mb-6"
          >
            Lip fillers are a non-surgical solution to enhance the fullness,
            shape, and definition of your lips...
          </p>
          <p
            data-aos="fade-up"
            className="text-center card_description w-[90%] sm:w-[70%] mx-auto"
          >
            At Estevez Aesthetics, we know that lip enhancement is personal...
          </p>
        </Container>
      </div>

      {/* Options */}
      <Container>
        <div id="options" className="my-16">
          <h4 data-aos="fade-up" className="text-center section_sub-title mb-6">
            {data?.sub_service_details?.option_sub_title}
          </h4>
          <h4
            data-aos="fade-up"
            className="text-center font-['Gloock'] text-3xl sm:text-4xl xl:text-[62px] leading-[132%] capitalize text-secondary-black mb-6"
          >
            {data?.sub_service_details?.option_title}
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description w-[90%] sm:w-[80%] mx-auto mb-10"
          >
            {data?.sub_service_details?.option_description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-stretch">
            {data?.sub_service_options?.map((item: any, index: number) => (
              <div
                key={index}
                className={`bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)]
                  p-5 sm:p-6 lg:p-10 
                  h-full flex flex-col justify-center items-center text-center
                  ${
                    index === data.sub_service_options.length - 1 &&
                    data.sub_service_options.length % 2 !== 0
                      ? "sm:col-span-2 sm:w-[80%] lg:w-[50%] mx-auto"
                      : ""
                  }`}
              >
                <h4
                  data-aos="fade-up"
                  className="text-secondary-black font-family-gloock text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-[132%] mb-4 sm:mb-6"
                >
                  {item?.option_name}
                </h4>
                <p
                  data-aos="fade-up"
                  className="card_description w-full sm:w-[85%] lg:w-[80%] text-sm sm:text-base lg:text-lg"
                >
                  {item?.option_description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Benefits */}
      <section id="benefits" className="py-14 sm:py-20 bg-[#F8F8F8]">
        <Container>
          <div className="flex flex-col-reverse xl:flex-row items-center gap-8 xl:gap-10">
            {/* Image */}
            <div className="w-full xl:w-[35%] flex justify-center">
              <Image
                className="h-[250px] sm:h-[350px] md:h-[450px] xl:h-[650px] w-auto object-cover"
                src={image8}
                alt="benefit image"
              />
            </div>

            {/* Text */}
            <div className="w-full xl:w-[65%] text-center xl:text-left">
              <h5 className="section_sub-title">
                {data?.sub_service_details?.benefits_sub_title}
              </h5>
              <h2 className="card_title_black mb-6 sm:mb-10">
                {data?.sub_service_details?.benefits_title}
              </h2>
              <p className="card_description mb-6">
                {data?.sub_service_details?.benefits_description}
              </p>

              {data?.sub_service_benefits?.map((benefit: any, i: number) => (
                <div key={i} className="mb-4">
                  <h4 className="text-lg sm:text-xl font-normal text-secondary-black mb-2">
                    {benefit.benefit_title}
                  </h4>
                  <p className="section_description">
                    {benefit.benefit_description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <div id="faq" className="py-10 sm:py-20">
        <FAQ data={data?.service_faqs} />
      </div>

      {/* Contact */}
      <div id="contact">
        <DynamicContactUs image={image} />
      </div>
    </>
  );
}
