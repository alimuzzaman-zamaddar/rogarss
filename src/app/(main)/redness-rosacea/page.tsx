import { BannerSection } from "@/Components/commonComponents/bannerSection";
import bgImg from "@/assets/service/imagesecion.png";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import image from "@/assets/contact/contact.png";
import DynamicImageSection from "@/Components/commonComponents/DynamicImageSecion";
import IMG from "@/assets/service/imagesecion.png";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import FaqSection from "@/Components/PageComponents/home/FaqSection";
import TreatmentTechnologySection from "@/Components/commonComponents/TreatmentTechnologySection";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import Container from "@/Components/commonComponents/Container";
import { dynamicCardData, sectionBars } from "@/Components/Data/data";

export default function ContactPage() {
  return (
    <>
      {/* Banner */}
      <Container>
        {" "}
        <BannerSection
          bgImages={[bgImg.src, bgImg.src, bgImg.src]}
          heading="Redness & Rosacea"
          description="Smooth, Firm, and Restore Your Skin’s Youthful Glow"
        />
      </Container>

      {/* Tabs */}
      <div className="pt-10 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10">
        <h4
          data-aos="fade-up"
          className="section_title !mb-2 2xl:!mb-5 text-center"
        >
          Redness & Rosacea
        </h4>
        <p data-aos="fade-up" className="card_description text-center">
          Smooth, Firm, and Restore Your Skin’s Youthful Glow
        </p>

        <div className="bg-bg-pink py-4 mt-10 3xl:mt-20">
          <Container>
            <div className="flex flex-wrap gap-4 items-center justify-center xl:justify-between text-sm xl:text-base">
              {sectionBars?.map((bar) => (
                <Link
                  key={bar?.id}
                  href={`#${bar?.path}`}
                  scroll={true}
                  className="link_text"
                >
                  {bar?.label}
                  <IoArrowForward />
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </div>

      {/* Dynamic Cards */}
      {dynamicCardData?.map((item, index) => (
        <div key={index}>
          <DynamicCardSection
            id={item?.id}
            image={item?.image2}
            title={item?.title}
            description={item?.description}
            buttonText={item?.buttonText}
            buttonClassName={item?.buttonClassName}
            titleClassName={item?.titleClassName}
            descriptionClassName={item?.descriptionClassName}
            buttonLink={item?.buttonLink}
            index={index}
          />
          {index === 0 && <DynamicImageSection img={IMG} />}
        </div>
      ))}

      <TreatmentTechnologySection
        title="CO2 Treatment & Technology at Estevez Aesthetics"
        title_des="At Estevez Aesthetics, we understand that today’s patients want transformative skin rejuvenation without the extended downtime. That’s why we offer the Tetra PRO CO2 laser, an advanced device delivering powerful 40W fractional resurfacing with precision and versatility. Featuring the award-winning CoolPeel® treatment and the innovative Moveo technology for smooth, in-motion application,"
        buttonText="Learn More"
        buttonLink="/treatment-technology"
      />
      <FaqSection />
      <DynamicContactUs image={image} />
    </>
  );
}
