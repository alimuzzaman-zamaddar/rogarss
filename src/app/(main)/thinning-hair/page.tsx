"use client";

import Link from "next/link";
import Image from "next/image";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import Container from "@/Components/commonComponents/Container";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import TreatmentTechnologySection from "@/Components/commonComponents/TreatmentTechnologySection";
import { LineSvg } from "@/Components/SvgContainer/SvgContainer";
import FAQ from "@/Components/ServicesPage/FAQ";
import image from "@/assets/contact/contact.png";
import FallbackImg from "@/assets/service/imagesecion.png";
import { useConditionTreatedDetailsQuery } from "@/redux/slices/cms/conditionSlice";

const ASSET = process.env.NEXT_PUBLIC_ASSET_URL ?? "";
const safe = (v?: string | null) =>
  v && v.toString().trim().toLowerCase() !== "null" ? v : "";
const url = (p?: string | null) =>
  safe(p) ? `${ASSET}/${p}`.replace(/([^:]\/)\/+/g, "$1") : "";

export default function Page() {
  const { data, isLoading, error } =
    useConditionTreatedDetailsQuery("thinning-hair");

  if (isLoading) {
    return (
      <Container>
        <div className="py-20 text-center">Loading…</div>
      </Container>
    );
  }
  if (error) {
    return (
      <Container>
        <div className="py-20 text-center">Failed to load content.</div>
      </Container>
    );
  }

  const root = data?.data;
  const svc = root?.subConditionTreats;
  const det = svc?.sub_condition_treat_details;

  const heading = safe(svc?.name) || safe(svc?.title) || "Thinning Hair";
  const bannerDesc = safe(svc?.banner_text) || safe(svc?.description) || "";
  const bannerImg = url(svc?.banner_image) || FallbackImg.src;

  const tabs = [
    {
      id: 1,
      path: "PRP",
      label: "PRP Hair Restoration",
      enabled:
        !!safe(det?.prp_hair_restoration_title) ||
        !!safe(det?.prp_hair_restoration_description) ||
        !!safe(det?.prp_hair_restoration_image),
    },
    {
      id: 2,
      path: "AlmaDuo",
      label: "Alma Duo",
      enabled:
        !!safe(det?.alma_duo_title) ||
        !!safe(det?.alma_duo_description) ||
        !!safe(det?.alma_duo_image),
    },
    {
      id: 3,
      path: "CO2",
      label: "CO2 Treatment",
      enabled:
        !!safe(det?.co2_treatment_title) ||
        !!safe(det?.co2_treatment_description),
    },
    {
      id: 4,
      path: "faq",
      label: "FAQ",
      enabled: (root?.faqs?.length ?? 0) > 0,
    },
    { id: 5, path: "contact", label: "Contact", enabled: true },
  ].filter((t) => t.enabled);

  const cardBlocks = [
    safe(det?.prp_hair_restoration_title) ||
    safe(det?.prp_hair_restoration_description) ||
    safe(det?.prp_hair_restoration_image)
      ? {
          id: "PRP",
          image: url(det?.prp_hair_restoration_image) || FallbackImg,
          title:
            safe(det?.prp_hair_restoration_title) || "PRP Hair Restoration",
          description:
            safe(det?.prp_hair_restoration_description) ||
            "PRP stimulates follicles and supports natural hair growth.",
          buttonText: "Learn More",
          buttonClassName: "card_button_pink",
          titleClassName: "card_title_black",
          descriptionClassName: "card_description",
          buttonLink: "#",
        }
      : null,
    safe(det?.alma_duo_title) ||
    safe(det?.alma_duo_description) ||
    safe(det?.alma_duo_image)
      ? {
          id: "AlmaDuo",
          image: url(det?.alma_duo_image) || FallbackImg,
          title: safe(det?.alma_duo_title) || "Alma Duo",
          description:
            safe(det?.alma_duo_description) ||
            "Alma Duo is a non-invasive option that supports wellness and vitality.",
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
              {tabs.map((bar, index) => (
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

      {cardBlocks.length > 0 && (
        <div>
          {cardBlocks.map((item, idx) => (
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
                index={idx}
              />
            </div>
          ))}
        </div>
      )}

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
