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
    useConditionTreatedDetailsQuery("slow-metabolism");

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

  // API shape: { success, message, data: { faqs:[], subConditionTreats:{...} } }
  const root = data?.data;
  const svc = root?.subConditionTreats;
  const det = svc?.sub_condition_treat_details;

  const heading = safe(svc?.name) || safe(svc?.title) || "Weight Gain";
  const bannerDesc = safe(svc?.banner_text) || safe(svc?.description) || "";
  const bannerImg = url(svc?.banner_image) || FallbackImg.src;

  // Tabs (only show when a section actually has content)
  const tabs = [
    {
      id: 1,
      path: "Semaglutide",
      label: "Semaglutide",
      enabled:
        !!safe(det?.semaglutide_title) ||
        !!safe(det?.semaglutide_description) ||
        !!safe(det?.semaglutide_image),
    },
    {
      id: 2,
      path: "CO2",
      label: "CO2 Treatment",
      enabled:
        !!safe(det?.co2_treatment_title) ||
        !!safe(det?.co2_treatment_description),
    },
    {
      id: 3,
      path: "faq",
      label: "FAQ",
      enabled: (root?.faqs?.length ?? 0) > 0,
    },
    { id: 4, path: "contact", label: "Contact", enabled: true },
  ].filter((t) => t.enabled);

  // Alternating cards (uses your DynamicCards)
  const cardBlocks = [
    (safe(det?.semaglutide_title) ||
      safe(det?.semaglutide_description) ||
      safe(det?.semaglutide_image)) && {
      id: "Semaglutide",
      image: url(det?.semaglutide_image) || FallbackImg.src,
      title:
        safe(det?.semaglutide_title) ||
        "Transform your health journey with Semaglutide.",
      description:
        safe(det?.semaglutide_description) ||
        "Semaglutide supports metabolic balance and overall vitality.",
      buttonText: "Learn More",
      buttonClassName: "card_button_pink",
      titleClassName: "card_title_black",
      descriptionClassName: "card_description",
      buttonLink: "#",
    },
  ].filter(Boolean) as any[];

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

      {/* Title + Tabs */}
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

      {/* Alternating Cards (Semaglutide) */}
      {cardBlocks.length > 0 && (
        <>
          {/* Anchors for tabs */}
          {cardBlocks.map((b) => (
            <div key={b.id} id={b.id} />
          ))}
          <DynamicCards items={cardBlocks} />
        </>
      )}

      {/* CO2 Treatment block */}
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

      {/* FAQ */}
      {(root?.faqs?.length ?? 0) > 0 && (
        <div id="faq" className="py-10">
          <FAQ data={root?.faqs} />
        </div>
      )}

      {/* Contact */}
      <div id="contact">
        <DynamicContactUs image={contactImg} />
      </div>
    </>
  );
}
