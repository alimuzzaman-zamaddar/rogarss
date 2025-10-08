
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
import Image from "next/image";
import { useSubServiceDetailsQuery } from "@/redux/slices/cms/homeSlice";

  const sectionBars = [
    { id: 1, path: "what-is", label: "What Is Sculptra?" },
    { id: 2, path: "procedure", label: "Sculptra Procedure" },
    { id: 3, path: "benefits", label: "Benefits" },
    { id: 4, path: "candidate", label: "Candidate" },
    { id: 5, path: "result", label: "Result" },
    { id: 6, path: "choose", label: "Why Choose us" },
    { id: 7, path: "faq", label: "FAQ" },
    { id: 8, path: "consultation", label: "Consultation" },
  ];


export default function page() {

    const { data, isLoading } = useSubServiceDetailsQuery("sculptra");
  return (
    <>
      {/* Banner  */}
      <Container>
        <BannerSection
          bgImages={[1, 2, 3].map(
            () => `${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.banner_image}`
          )}
          heading={data?.name}
          description="Restore Youthful Volume Naturally"
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
        <div className="bg-[#FBFBFB] py-4 mt-10 3xl:mt-20 my-50">
          <Container>
            <div className="flex flex-wrap gap-4 items-center justify-center xl:justify-between text-sm xl:text-base">
              {sectionBars?.map((bar, index) => (
                <Link
                  key={bar?.id}
                  href={`#${bar?.path}`}
                  scroll={true}
                  className="link_text"
                >
                  {bar?.label}
                  {index === 0 && <LineSvg />}
                  {/* Only show LineSvg for the first child */}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </div>

      <div id="what-is" className="">
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

      <div id="procedure" className="bg-white py-10 xl:py-20 xl:my-35">
        <Container>
          <h4
            data-aos="fade-up"
            className="text-center card_title_black mb-6 xl:mb-10"
          >
            {data?.sub_service_details?.procedure_title}
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[70%] mx-auto"
          >
            {data?.sub_service_details?.procedure_description}
          </p>
        </Container>
      </div>
      <div className="bg-white py-10 xl:py-20 xl:my-35">
        <Container>
          <h4
            data-aos="fade-up"
            className="text-center card_title_black mb-6 xl:mb-10"
          >
            Perfect Your Pout
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[70%] mx-auto"
          >
            Bring out the beauty of your lips with treatments designed to
            enhance volume, shape, and symmetry. Using advanced, smooth-flowing
            fillers, we create a soft, natural look that complements your facial
            features. Whether you want a subtle boost or a more defined pout,
            our personalized approach ensures your lips look youthful, balanced,
            and effortlessly kissable.
          </p>
        </Container>
      </div>

      <section
        id="benefits"
        className="py-10 md:py-14 xl:py-20 2xl:py-24 bg-[#F8F8F8]"
      >
        <Container>
          <div className="flex flex-col justify-center items-center gap-5 xl:gap-10 3xl:gap-20 xl:flex-row">
            {/* Left */}
            <div className="flex-1 w-full xl:w-[35%] flex relative">
              <div className="xl:pt-25 z-20 w-full xl:pl-14">
                <Image
                  className="h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[650px] w-full object-cover"
                  src={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.sub_service_details?.benefits_image}`}
                  alt="contact image 2"
                  height={700}
                  width={700}
                />
              </div>
            </div>

            {/* Right */}
            <div className="w-full xl:w-[65%]">
              <h5 className="section_sub-title">
                {data?.sub_service_details?.benefits_sub_title}
              </h5>
              {/* Static subtitle */}
              <h2 className="card_title_black mb-10">
                {data?.sub_service_details?.benefits_title}
              </h2>
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

      <section
        id="candidate"
        className="py-10 md:py-14 xl:py-20 2xl:py-24 bg-[#F8F8F8]"
      >
        <Container>
          <div className="flex flex-col justify-center items-center gap-5 xl:gap-10 3xl:gap-20 xl:flex-row">
            {/* Right */}
            <div className="w-full xl:w-[60%]">
              <h5 className="section_sub-title">
                {data?.sub_service_details?.candidate_sub_title}
              </h5>
              {/* Static subtitle */}
              <h2 className="card_title_black mb-10">
                {data?.sub_service_details?.candidate_title}
              </h2>
              <p
                data-aos="fade-up"
                className="section_description !font-semibold !text-secondary-black mb-8"
              >
                {data?.sub_service_details?.candidate_description}
              </p>
              <div className="grid grid-cols-1  gap-3">
                {data?.sub_service_candidates.map(
                  (benefit: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 text-gray-700"
                    >
                      <span className="text-base">
                        <BoltSvg />
                      </span>
                      <span className="section_description">
                        {benefit.candidate_name}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Left */}
            <div className="flex-1 w-full xl:w-[40%] flex relative">
              <div className="xl:pt-25 xl:pb-20 z-20 w-full xl:pr-14">
                <Image
                  className="h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[650px] w-full object-cover"
                  src={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.sub_service_details?.candidate_image}`}
                  alt="contact image 2"
                  height={700}
                  width={700}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="result"
        className="py-10 md:py-14 xl:py-20 2xl:py-24 bg-[#F8F8F8]"
      >
        <Container>
          <div className="flex flex-col justify-center items-center gap-5 xl:gap-10 3xl:gap-20 xl:flex-row">
            {/* Left */}
            <div className="flex-1 w-full xl:w-[30%] flex relative">
              <div className="xl:pt-25 z-20 w-full xl:pl-14">
                <Image
                  className="h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[650px] w-full object-cover"
                  src={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.sub_service_details?.result_image}`}
                  alt="contact image 2"
                  height={700}
                  width={700}
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex-1 xl:w-[70%]">
              <h5 className="section_sub-title">
                {data?.sub_service_details?.result_sub_title}
              </h5>
              {/* Static subtitle */}
              <h2 className="card_title_black mb-10">
                {data?.sub_service_details?.result_title}
              </h2>
              {data?.sub_service_results?.map((benefit: any, i: number) => (
                <div key={i} className="mb-4">
                  <h4 className="text-lg sm:text-xl font-normal text-secondary-black mb-2">
                    {benefit.result_name}
                  </h4>
                  <p className="section_description">
                    {benefit.result_description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div
          id="choose"
          className="bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)] p-4 xl:p-20 my-15 xl:my-35"
        >
          <h4
            data-aos="fade-up"
            className="text-center section_sub-title mb-10"
          >
            {data?.sub_service_details?.choose_sub_title}
          </h4>
          <h4
            data-aos="fade-up"
            className="text-center card_title_black mb-6 xl:mb-10"
          >
            {data?.sub_service_details?.choose_title}
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[80%] mx-auto"
          >
            {data?.sub_service_details?.choose_description}
          </p>
        </div>
      </Container>

      <Container>
        <div className="my-20 sm:my-28 xl:my-35 px-4 sm:px-8 xl:px-20 py-10 sm:py-16 xl:py-30 bg-[#FBE0DA]">
          <h4
            data-aos="fade-up"
            className="
        text-center font-['Gloock']
        text-2xl sm:text-3xl md:text-4xl xl:text-[62px]
        font-[400] leading-[132%] capitalize
        text-primary-black mb-6 sm:mb-8 xl:mb-10
      "
          >
            {data?.sub_service_details?.consultation_title}
          </h4>

          <p
            data-aos="fade-up"
            className="
        section_description
        w-[95%] sm:w-[80%] xl:w-[70%]
        mx-auto text-center
        text-sm sm:text-base
      "
          >
            {data?.sub_service_details?.consultation_description}
          </p>

          <div className="flex justify-center items-center">
            <Button
              Txt="Book Now"
              className="card_button_black mt-6 sm:mt-8 xl:mt-10"
            />
          </div>
        </div>
      </Container>

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
