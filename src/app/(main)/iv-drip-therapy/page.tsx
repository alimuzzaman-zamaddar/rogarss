"use client";

import Link from "next/link";
import Image from "next/image";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import image from "@/assets/contact/contact.png";
import Container from "@/Components/commonComponents/Container";
import DynamicHairRemoval from "@/Components/commonComponents/DynamicHairRemoval";
import FAQ from "@/Components/ServicesPage/FAQ";
import { BoltSvg, LineSvg } from "@/Components/SvgContainer/SvgContainer";
import { useSubServiceDetailsQuery } from "@/redux/slices/cms/homeSlice";
import DynamicLaserBox from "@/Components/commonComponents/DynamicLaserBox";
export default function ContactPage() {
  const { data, isLoading, error } =
    useSubServiceDetailsQuery("iv-drip-therapy");

  const s = data?.sub_service_details;

  const sectionBars = [
    {
      id: 1,
      path: "definition",
      label: "What is Facial Balancing?",
    },
    { id: 2, path: "benefits", label: "Benefits" },
    { id: 3, path: "candidacy", label: "Candidacy" },
    { id: 6, path: "why-us", label: "Why Choose Us?" },

    { id: 7, path: "faq", label: "FAQ" },

    { id: 8, path: "contact", label: "Contact" },
  ];

  const ASSET = process.env.NEXT_PUBLIC_ASSET_URL ?? "";

  if (isLoading) {
    return (
      <>
        <Container>
          <div className="py-20 text-center">
            <p>Loading…</p>
          </div>
        </Container>
      </>
    );
  }

  if (error) {
    return (
      <Container>
        <div className="py-20 text-center">
          <p>Failed to load content.</p>
        </div>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <BannerSection
          bgImages={[1, 2, 3].map(() =>
            `${ASSET}/${data?.banner_image ?? ""}`
              .replace(/\/+$/, "")
              .replace(/([^:]\/)\/+/g, "$1")
          )}
          heading={data?.name}
          description="Achieve Your Weight Loss Goals with Expert Semaglutide Treatment"
        />
      </Container>

      <DynamicLaserBox
        title={data?.title}
        sub_title={data?.sub_title}
        description={data?.description}
      />

      <div className="bg-[#FBFBFB] py-4 mt-10 3xl:mt-20 my-50">
        <Container>
          <div className="flex flex-wrap gap-4 items-center justify-center xl:justify-between text-sm xl:text-base">
            {sectionBars.map((bar, index) => (
              <Link
                key={`${bar.id}-${bar.path}`}
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

      <Container>
        <section id="definition" className="bg-white text-center">
          <div className="bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)] p-5 xl:p-20 mb-20">
            {s?.definition_sub_title && (
              <h5
                data-aos="fade-up"
                className="section_sub-title tracking-widest"
              >
                {s.definition_sub_title}
              </h5>
            )}

            {s?.definition_title && (
              <h2 data-aos="fade-up" className="card_title_black">
                {s.definition_title}
              </h2>
            )}

            {s?.definition_description && (
              <p data-aos="fade-up" className="card_description mx-auto mb-12">
                {s.definition_description}
              </p>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-5 xl:gap-20">
            {data?.sub_service_treatments?.map((item: any, idx: number) => (
              <div
                key={idx}
                className="p5 xl:p-10 w-full md:w-[47.5%] bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)]"
              >
                <h3
                  data-aos="fade-up"
                  className="font-normal md:text-xl text-lg font-family-gloock lg:text-2xl xl:text-[32px] mb-5 text-center"
                >
                  {item.treatment_name}
                </h3>
                <p
                  data-aos="fade-up"
                  className="section_description text-center"
                >
                  {item.treatment_description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <div id="dsport">
        <Container>
          <div className="my-10 sm:my-16 lg:my-20">
            <h4
              data-aos="fade-up"
              className="text-center font-['Gloock'] text-3xl sm:text-4xl md:text-5xl xl:text-[62px] font-[400] leading-[132%] capitalize text-secondary-black mb-6 sm:mb-10"
            >
              Types of Bodytite
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-stretch">
              {data?.sub_service_types?.map((item: any, index: number) => (
                <div
                  key={index}
                  className={`bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] 
                  p-5 sm:p-8 lg:p-10 
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
                    className="text-secondary-black font-family-gloock 
                   text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-normal 
                   leading-[132%] mb-4 sm:mb-6"
                  >
                    {item?.type_title}
                  </h4>
                  <p
                    data-aos="fade-up"
                    className="card_description w-full sm:w-[85%] lg:w-[80%] 
                   text-sm sm:text-base lg:text-lg"
                  >
                    {item?.type_description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <section
        id="benefits"
        className="py-10 md:py-14 xl:py-20 2xl:py-24 bg-[#F8F8F8]"
      >
        <Container>
          <div className="flex flex-col justify-center items-center gap-5 xl:gap-10 3xl:gap-20 xl:flex-row">
            <div className="flex-1 w-full xl:w-[35%] flex relative">
              <div className="xl:pt-25 z-20 w-full xl:pl-14">
                <Image
                  className="h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[650px] w-full object-cover"
                  src={`${ASSET}/${s?.benefits_image ?? ""}`}
                  alt="Benefits"
                  height={700}
                  width={700}
                />
              </div>
            </div>

            <div className="w-full xl:w-[65%]">
              {s?.benefits_sub_title && (
                <h5 className="section_sub-title">{s.benefits_sub_title}</h5>
              )}
              {s?.benefits_title && (
                <h2 className="card_title_black mb-10">{s.benefits_title}</h2>
              )}
              {s?.benefits_description && (
                <h2 className="card_description mb-10">
                  {s.benefits_description}
                </h2>
              )}

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
      <Container>
        <section id="definition" className="bg-white text-center">
          <div className="bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)] p-5 xl:p-20 mb-20">
            {s?.definition_sub_title && (
              <h5
                data-aos="fade-up"
                className="section_sub-title tracking-widest"
              >
                {s.definition_sub_title}
              </h5>
            )}

            {s?.definition_title && (
              <h2 data-aos="fade-up" className="card_title_black">
                {s.definition_title}
              </h2>
            )}

            {s?.definition_description && (
              <p data-aos="fade-up" className="card_description mx-auto mb-12">
                {s.definition_description}
              </p>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-5 xl:gap-20">
            {data?.sub_service_treatments?.map((item: any, idx: number) => (
              <div
                key={idx}
                className="p5 xl:p-10 w-full md:w-[47.5%] bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)]"
              >
                <h3
                  data-aos="fade-up"
                  className="font-normal md:text-xl text-lg font-family-gloock lg:text-2xl xl:text-[32px] mb-5 text-center"
                >
                  {item.treatment_name}
                </h3>
                <p
                  data-aos="fade-up"
                  className="section_description text-center"
                >
                  {item.treatment_description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <section
        id="candidacy"
        className="py-10 md:py-14 xl:py-20 2xl:py-24 bg-[#F8F8F8]"
      >
        <Container>
          <div className="flex flex-col justify-center items-center gap-5 xl:gap-10 3xl:gap-20 xl:flex-row">
            <div className="w-full xl:w-[60%]">
              {s?.candidate_sub_title && (
                <h5 className="section_sub-title">{s.candidate_sub_title}</h5>
              )}
              {s?.candidate_title && (
                <h2 className="card_title_black mb-10">{s.candidate_title}</h2>
              )}
              {s?.candidate_description && (
                <p
                  data-aos="fade-up"
                  className="section_description !font-semibold !text-secondary-black mb-8"
                >
                  {s.candidate_description}
                </p>
              )}

              <div className="grid grid-cols-1 gap-3">
                {data?.sub_service_candidates?.map(
                  (cand: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 text-gray-700"
                    >
                      <span className="text-base">
                        <BoltSvg />
                      </span>
                      <span className="section_description">
                        {cand.candidate_name}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="flex-1 w-full xl:w-[40%] flex relative">
              <div className="xl:pt-25 xl:pb-20 z-20 w-full xl:pr-14">
                <Image
                  className="h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[650px] w-full object-cover"
                  src={`${ASSET}/${s?.candidate_image ?? ""}`}
                  alt="Candidacy"
                  height={700}
                  width={700}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className={`relative ${"3xl:mb-80"}`}>
        <Image
          className="w-full h-[400px] lg:h-[450px] 2xl:h-[90vh] object-cover"
          src={`${ASSET}/${s?.recovery_image ?? ""}`}
          alt="section image"
          width={1800}
          height={700}
        />
        <div className="h-12 bg-bg-pink w-full"></div>

        <Container>
          <div className="3xl:absolute 3xl:-bottom-96 3xl:left-0 3xl:right-0 mx-auto w-fit">
            <DynamicHairRemoval
              title={
                s?.recovery_title || "Experience the Beauty of Smooth Skin"
              }
              sub_title={
                s?.recovery_sub_title ||
                "Consultation & Preparation at Esteves Aesthetics"
              }
              description={
                s?.recovery_description ||
                `Every journey begins with a thorough consultation. During your visit, our team will assess your tattoo's size, color, age, and depth, as well as your skin type and medical history. We’ll also outline a treatment plan tailored to your needs and discuss what to expect before, during, and after the procedure—so you feel confident every step of the way.`
              }
              buttonText="Book Now"
              buttonClassName={"card_button_pink"}
            />
          </div>
        </Container>
      </section>

      {/* <Container>
        <section id="why-us" className="bg-white text-center">
          <div className="shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)] p-5 xl:p-20 mb-20">
            {s?.choose_sub_title && (
              <h5
                data-aos="fade-up"
                className="section_sub-title tracking-widest"
              >
                {s.choose_sub_title}
              </h5>
            )}
            {s?.choose_title && (
              <h2 data-aos="fade-up" className="card_title_black">
                {s.choose_title}
              </h2>
            )}
            {s?.choose_description && (
              <p data-aos="fade-up" className="card_description mx-auto mb-12">
                {s.choose_description}
              </p>
            )}
          </div>
        </section>
      </Container> */}

      <div id="faq" className="py-10 sm:py-30">
        <FAQ data={data?.service_faqs} />
      </div>

      <div id="contact">
        <DynamicContactUs image={image} />
      </div>
    </>
  );
}
