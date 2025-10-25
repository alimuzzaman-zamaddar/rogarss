"use client";

import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import image from "@/assets/contact/contact.png";
import IMG from "@/assets/service/imagesecion.png";
import DynamicImageSection from "@/Components/commonComponents/DynamicImageSecion";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import TreatmentTechnologySection from "@/Components/commonComponents/TreatmentTechnologySection";
import Container from "@/Components/commonComponents/Container";
import { useConditionTreatedDetailsQuery } from "@/redux/slices/cms/conditionSlice";
import { LineSvg } from "@/Components/SvgContainer/SvgContainer";
import DynamicCardSectionPink from "@/Components/commonComponents/DynamicCardSectionPink";
import FaqSection from "@/Components/PageComponents/home/FaqSection";

export default function page() {
  const { data, isLoading } = useConditionTreatedDetailsQuery("melasma");

  const sectionBars = [
    { id: 1, path: "condition_treat", label: "Condition Treat" },
    { id: 2, path: "dyevl_title", label: "Dyevl" },
    { id: 3, path: "tetra_co2", label: "Tetra Co2" },
    { id: 6, path: "faq", label: "FAQ" },
    { id: 7, path: "contact", label: "Contact" },
  ];
  return (
    <>
      {!isLoading && data && (
        <>
          {/* Banner  */}
          <Container>
            <BannerSection
              bgImages={[1, 2, 3].map(
                () =>
                  `${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.data?.subConditionTreats?.banner_image}`
              )}
              heading={data?.data?.subConditionTreats?.name}
              description={data?.data?.subConditionTreats?.banner_text}
            />
          </Container>
          {/* Tabs */}
          <div className="pt-10 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10">
            <h4
              data-aos="fade-up"
              className="section_title !mb-2 2xl:!mb-5 text-center"
            >
              {data?.data?.subConditionTreats?.title}
            </h4>
            <p data-aos="fade-up" className="card_description text-center">
              {data?.data?.subConditionTreats?.description}
            </p>

            <div className="bg-[#FBFBFB] hidden lg:block py-3 sm:py-4 mt-6 sm:mt-10 3xl:mt-20">
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
          <div id="condition_treat">
            <DynamicCardSection
              image={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.data?.subConditionTreats?.sub_condition_treat_details?.chemical_peels_image}`}
              title={
                data?.data?.subConditionTreats?.sub_condition_treat_details
                  ?.chemical_peels_title
              }
              description={
                data?.data?.subConditionTreats?.sub_condition_treat_details
                  ?.chemical_peels_description
              }
            />
          </div>
          <DynamicImageSection img={IMG} />
          <div id="dyevl">
            <DynamicCardSectionPink
              image={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.data?.subConditionTreats?.sub_condition_treat_details?.dyevl_image}`}
              title={
                data?.data?.subConditionTreats?.sub_condition_treat_details
                  ?.dyevl_title
              }
              description={
                data?.data?.subConditionTreats?.sub_condition_treat_details
                  ?.dyevl_description
              }
            />
          </div>
          <div id="tetra_co2">
            <DynamicCardSectionPink
              image={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.data?.subConditionTreats?.sub_condition_treat_details?.tetra_co2_image}`}
              title={
                data?.data?.subConditionTreats?.sub_condition_treat_details
                  ?.tetra_co2_title
              }
              description={
                data?.data?.subConditionTreats?.sub_condition_treat_details
                  ?.tetra_co2_description
              }
            />
          </div>
          <TreatmentTechnologySection
            title={
              data?.data?.subConditionTreats?.sub_condition_treat_details
                ?.co2_treatment_title
            }
            title_des={
              data?.data?.subConditionTreats?.sub_condition_treat_details
                ?.co2_treatment_description
            }
            buttonText="Learn More"
            buttonLink="/treatment-technology"
          />
          <div className="" id="faq">
            {" "}
            <FaqSection faq={data?.data?.faqs} />
          </div>
          <div className="" id="contact">
            <DynamicContactUs image={image} />
          </div>
        </>
      )}
    </>
  );
}
