"use client";

import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import bgImg from "@/assets/service/imagesecion.png";
import image from "@/assets/contact/contact.png";
import IMG from "@/assets/service/imagesecion.png";
import DynamicImageSection from "@/Components/commonComponents/DynamicImageSecion";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import TreatmentTechnologySection from "@/Components/commonComponents/TreatmentTechnologySection";
import Container from "@/Components/commonComponents/Container";
import { LineSvg } from "@/Components/SvgContainer/SvgContainer";
import FAQ from "@/Components/ServicesPage/FAQ";
import { useConditionTreatedDetailsQuery } from "@/redux/slices/cms/conditionSlice";

const ASSET = process.env.NEXT_PUBLIC_ASSET_URL ?? "";

const safe = (v?: string | null) =>
  v && v.toString().trim().toLowerCase() !== "null" ? v : "";

const url = (p?: string | null) =>
  safe(p) ? `${ASSET}/${p}`.replace(/([^:]\/)\/+/g, "$1") : "";

export default function Page() {
  const { data, isLoading } = useConditionTreatedDetailsQuery(
    "loose-skin-on-arms-abdomen-thighs"
  );

  if (isLoading) {
    return (
      <Container>
        <div className="py-20 text-center">Loading…</div>
      </Container>
    );
  }

  const root = data?.data;
  const svc = root?.subConditionTreats;
  const det = svc?.sub_condition_treat_details;

  const heading = safe(svc?.name) || safe(svc?.title) || "Service";
  const bannerDesc = safe(svc?.banner_text) || safe(svc?.description) || "";
  const bannerImg = url(svc?.banner_image) || bgImg.src;

  const sectionBars = [
    {
      id: 1,
      path: "BodyTite",
      label: "BodyTite",
      enabled: !!(
        safe(det?.bodytite_title) ||
        safe(det?.bodytite_description) ||
        safe(det?.bodytite_image)
      ),
    },

    {
      id: 2,
      path: "Morpheus8",
      label: "Morpheus8",
      enabled: !!(
        safe(det?.morpheus_title) ||
        safe(det?.morpheus_description) ||
        safe(det?.morpheus_image)
      ),
    },

    {
      id: 3,
      path: "CO2",
      label: "CO2 Treatment",
      enabled: !!(
        safe(det?.co2_treatment_title) || safe(det?.co2_treatment_description)
      ),
    },

    {
      id: 4,
      path: "faq",
      label: "FAQ",
      enabled: (root?.faqs?.length ?? 0) > 0,
    },

    {
      id: 5,
      path: "contact",
      label: "Contact",
      enabled: true,
    },
  ].filter((x) => x.enabled);

  const dynamicCardData = [
    safe(det?.bodytite_title) ||
    safe(det?.bodytite_description) ||
    safe(det?.bodytite_image)
      ? {
          id: "BodyTite",
          image: url(det?.bodytite_image) || IMG,
          title: safe(det?.bodytite_title) || "BodyTite",
          description:
            safe(det?.bodytite_description) ||
            "BodyTite is a revolutionary, minimally invasive body contouring procedure.",
          buttonText: "Learn More",
          buttonClassName: "card_button_pink",
          titleClassName: "card_title_black",
          descriptionClassName: "card_description",
          buttonLink: "#",
        }
      : null,
    safe(det?.morpheus_title) ||
    safe(det?.morpheus_description) ||
    safe(det?.morpheus_image)
      ? {
          id: "Morpheus8",
          image: url(det?.morpheus_image) || IMG,
          title: safe(det?.morpheus_title) || "Morpheus8",
          description:
            safe(det?.morpheus_description) ||
            "Morpheus8 is a deep fractional RF treatment for tightening and remodeling.",
          buttonText: "Learn More",
          buttonClassName: "card_button_pink",
          titleClassName: "card_title_black",
          descriptionClassName: "card_description",
          buttonLink: "#",
        }
      : null,
  ].filter(Boolean) as Array<{
    id: string;
    image: any;
    title: string;
    description: string;
    buttonText: string;
    buttonClassName: string;
    titleClassName: string;
    descriptionClassName: string;
    buttonLink: string;
  }>;

  return (
    <>
      {/* Banner */}
      <Container>
        <BannerSection
          bgImages={[bannerImg, bannerImg, bannerImg]}
          heading={heading}
          description={bannerDesc}
        />
      </Container>

      <div className="pt-10 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10">
        <h4 className="section_title !mb-2 2xl:!mb-5 text-center">
          {safe(svc?.title) || heading}
        </h4>
        <p className="card_description text-center">
          {safe(svc?.description) ||
            "Smooth, Firm, and Restore Your Skin’s Youthful Glow"}
        </p>

        <div className="bg-[#FBFBFB] py-4 mt-10 3xl:mt-20 my-50">
          <Container>
            <div className="flex flex-wrap gap-4 items-center justify-center xl:justify-between text-sm xl:text-base">
              {sectionBars.map((bar, index) => (
                <Link
                  key={`${bar.id}-${bar.path}`}
                  href={`#${bar.path}`}
                  scroll
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

      <div className="">
        {dynamicCardData.map((item, index) => (
          <div key={item.id} id={item.id}>
            <DynamicCardSection
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
              buttonClassName={item.buttonClassName}
              titleClassName={item.titleClassName}
              descriptionClassName={item.descriptionClassName}
              buttonLink={item.buttonLink}
              index={index}
            />
            {index === 0 && <DynamicImageSection img={IMG} />}
          </div>
        ))}
      </div>

      {(safe(det?.co2_treatment_title) ||
        safe(det?.co2_treatment_description)) && (
        <div id="CO2">
          <TreatmentTechnologySection
            title={
              safe(det?.co2_treatment_title) ||
              "CO2 Treatment & Technology at Estevez Aesthetics"
            }
            title_des={
              safe(det?.co2_treatment_description) ||
              "Advanced fractional resurfacing with precision and versatility."
            }
            buttonText="Learn More"
            buttonLink="/treatment-technology"
          />
        </div>
      )}

      {(root?.faqs?.length ?? 0) > 0 && (
        <div id="faq" className="py-10">
          <FAQ data={root?.faqs} />
        </div>
      )}

      <div id="contact">
        <DynamicContactUs image={image} />
      </div>
    </>
  );
}
