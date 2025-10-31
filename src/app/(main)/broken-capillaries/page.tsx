"use client";

import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import Container from "@/Components/commonComponents/Container";

import TreatmentTechnologySection from "@/Components/commonComponents/TreatmentTechnologySection";
import { LineSvg } from "@/Components/SvgContainer/SvgContainer";
import FAQ from "@/Components/ServicesPage/FAQ";
import contactImg from "@/assets/contact/contact.png";
import FallbackImg from "@/assets/service/imagesecion.png";
import { useConditionTreatedDetailsQuery } from "@/redux/slices/cms/conditionSlice";
import DynamicCards from "@/Components/commonComponents/DynamicCards.tsx/page";

const ASSET = process.env.NEXT_PUBLIC_ASSET_URL ?? "";
const safe = (v?: string | null) =>
  v && v.toString().trim().toLowerCase() !== "null" ? v : "";
const url = (p?: string | null) =>
  safe(p) ? `${ASSET}/${p}`.replace(/([^:]\/)\/+/g, "$1") : "";

export default function Page() {
  const { data, isLoading, error } =
    useConditionTreatedDetailsQuery("broken-capillaries");

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

  const heading = safe(svc?.name) || safe(svc?.title) || "Vascular Lesions";
  const bannerDesc = safe(svc?.banner_text) || safe(svc?.description) || "";
  const bannerImg = url(svc?.banner_image) || FallbackImg.src;

  const tabs = [
    {
      id: 1,
      path: "ClearLift",
      label: "ClearLift",
      enabled:
        !!safe(det?.clear_lift_title) ||
        !!safe(det?.clear_lift_description) ||
        !!safe(det?.clear_lift_image),
    },
    {
      id: 2,
      path: "DyeVL",
      label: "Dye-VL",
      enabled:
        !!safe(det?.dyevl_title) ||
        !!safe(det?.dyevl_description) ||
        !!safe(det?.dyevl_image),
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
    (safe(det?.clear_lift_title) ||
      safe(det?.clear_lift_description) ||
      safe(det?.clear_lift_image)) && {
      id: "ClearLift",
      image: det?.clear_lift_image || FallbackImg.src,
      title: safe(det?.clear_lift_title) || "ClearLift",
      description:
        safe(det?.clear_lift_description) ||
        "ClearLift improves texture and reduces signs of aging with advanced laser rejuvenation.",
      buttonText: "Learn More",
      buttonClassName: "card_button_pink",
      titleClassName: "card_title_black",
      descriptionClassName: "card_description",
      buttonLink: "#",
    },
    (safe(det?.dyevl_title) ||
      safe(det?.dyevl_description) ||
      safe(det?.dyevl_image)) && {
      id: "DyeVL",
      image: det?.dyevl_image || FallbackImg.src,
      title: safe(det?.dyevl_title) || "Dye-VL",
      description:
        safe(det?.dyevl_description) ||
        "Dye-VL targets redness and vascular concerns with tailored light-based therapy.",
      buttonText: "Learn More",
      buttonClassName: "card_button_pink",
      titleClassName: "card_title_black",
      descriptionClassName: "card_description",
      buttonLink: "#",
    },
  ].filter(Boolean) as Array<{
    id: string;
    image: string;
    title: string;
    description: string;
    buttonText?: string;
    buttonClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    buttonLink?: string;
  }>;

  return (
    <>
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

        {tabs.length > 0 && (
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
        )}
      </div>

      {cardBlocks.length > 0 && (
        <div>
          {cardBlocks.map((b) => (
            <div key={`anchor-${b.id}`} id={b.id} />
          ))}
          <DynamicCards items={cardBlocks} />
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
        <DynamicContactUs image={contactImg} />
      </div>
    </>
  );
}
