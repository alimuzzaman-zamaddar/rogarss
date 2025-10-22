"use client";

import Link from "next/link";
import Image from "next/image";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import image from "@/assets/contact/contact.png";
import DynamicImageSection from "@/Components/commonComponents/DynamicImageSecion";
import Container from "@/Components/commonComponents/Container";
import DynamicHairRemoval from "@/Components/commonComponents/DynamicHairRemoval";
import FAQ from "@/Components/ServicesPage/FAQ";
import { BoltSvg, LineSvg } from "@/Components/SvgContainer/SvgContainer";
import { useSubServiceDetailsQuery } from "@/redux/slices/cms/homeSlice";
import DynamicLaserBox from "@/Components/commonComponents/DynamicLaserBox";



export default function ContactPage() {
  const { data, isLoading, error } =
    useSubServiceDetailsQuery("skin-tag-removal");

  const s = data?.sub_service_details;

  const sectionBars = [
    {
      id: 1,
      path: "definition",
      label: s?.definition_sub_title || "What is Facial Balancing?",
    },
    { id: 2, path: "benefits", label: s?.benefits_sub_title || "Benefits" },
    { id: 3, path: "candidacy", label: s?.candidate_sub_title || "Candidacy" },
    { id: 4, path: "process", label: s?.process_sub_title || "The Process" },
    {
      id: 5,
      path: "results",
      label: s?.result_sub_title || "Aftercare & Results",
    },
    { id: 6, path: "why-us", label: s?.choose_sub_title || "Why Choose Us?" },
    ...(Array.isArray(data?.service_faqs) && data.service_faqs.length
      ? [{ id: 7, path: "faq", label: "FAQ" }]
      : []),
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
      {/* Banner */}
      <Container>
        <BannerSection
          bgImages={[1, 2, 3].map(() =>
            `${ASSET}/${data?.banner_image ?? ""}`
              .replace(/\/+$/, "")
              .replace(/([^:]\/)\/+/g, "$1")
          )}
          heading={data?.name}
          description={
            <>
              <span className="xl:block hidden section_description !text-white">
                Experience custom facials tailored to your skin’s unique needs
                at Esteves Aesthetics. Whether you're seeking hydration, acne
                treatment, anti-aging, or overall rejuvenation, our expert
                facial therapies are designed to restore your skin's natural
                glow with precision and care.
              </span>
              <span className="xl:hidden section_description !text-white">
                Experience custom facials tailored to your skin’s needs.
              </span>
            </>
          }
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

      <div id="process">
        <Container>
          <DynamicHairRemoval
            title={s?.process_title}
            sub_title={s?.process_sub_title}
            description={`${s?.process_description ?? ""}`}
          />
        </Container>
      </div>

      <DynamicImageSection
        img={`${ASSET}/${s?.how_works_image ?? ""}`}
        isBox={true}
        cardData={data}
      />

      <section
        id="results"
        className="py-10 md:py-14 xl:py-20 2xl:py-24 bg-[#F8F8F8]"
      >
        <Container>
          {(s?.result_title ||
            s?.result_description ||
            s?.result_sub_title) && (
            <div className="max-w-4xl mx-auto text-center">
              {s?.result_sub_title && (
                <h5 className="section_sub-title">{s.result_sub_title}</h5>
              )}
              <h2 className="card_title_black">
                {s?.result_title || "Results & Recovery"}
              </h2>
              {s?.result_description && (
                <p className="card_description mt-4">{s.result_description}</p>
              )}
            </div>
          )}
        </Container>
      </section>

      <Container>
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
      </Container>

      <div id="faq" className="py-10 sm:py-30">
        <FAQ data={data?.service_faqs} />
      </div>

      <div id="contact">
        <DynamicContactUs image={image} />
      </div>
    </>
  );
}
