import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import image from "@/assets/contact/contact.png";
import FaqSection from "@/Components/PageComponents/home/FaqSection";
import { IoArrowForward } from "react-icons/io5";
import Container from "@/Components/commonComponents/Container";
import img11 from "@/assets/cards/image6.png";
import img22 from "@/assets/cards/sculptra.png";
import img23 from "@/assets/cards/botox2.png";
import InjectableServicesCard from "@/Components/commonComponents/InjectableServicesCard";
import InjectableServicesCardPink from "@/Components/commonComponents/InjectableServicesCardPink";

const sectionBars = [
  { id: 1, path: "botox-treatment", label: "What is botox" },
  { id: 2, path: "botox-benefits", label: "Benefits" },
  { id: 3, path: "botox-faq", label: "FAQ" },
];

export default function page() {
  return (
    <>
      {/* Banner  */}
      <Container>
        <BannerSection
          bgImages={[
            "https://i.ibb.co.com/bMP77F0H/flower.png",
            "https://i.ibb.co.com/bMP77F0H/flower.png",
            "https://i.ibb.co.com/bMP77F0H/flower.png",
          ]}
          heading="botox"
          description="Smooth, Firm, and Restore Your Skin’s Youthful Glow"
        />
      </Container>

      {/* Tabs */}
      <div className="pt-10 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10">
        <h4
          data-aos="fade-up"
          className="section_title !mb-2 2xl:!mb-5 text-center"
        >
          Botox
        </h4>
        <p data-aos="fade-up" className="card_description text-center">
          Smooth, Firm, and Restore Your Skin’s Youthful Glow
        </p>

        <div className="bg-bg-pink py-4 mt-10 3xl:mt-20">
          <Container>
            <div className="flex flex-wrap gap-4 items-center justify-center xl:justify-between text-sm xl:text-base">
              {sectionBars?.map(bar => (
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

      <InjectableServicesCard
        id="botox-treatment"
        image1={img11}
        image2={img22}
        subTitle="Louisville Sculptra at Scout Aesthetics"
        title="Rediscover Youthful Skin"
        description={[
          "Sculptra is an FDA-approved injectable that gradually restores facial volume by stimulating your body’s natural collagen production. Unlike traditional fillers, Sculptra works deep within the skin to smooth wrinkles and improve skin texture over time, providing a subtle and long-lasting rejuvenation..",
        ]}
        buttonText="Book Now"
        buttonLink="#"
        titleClassName="card_title_black"
        descriptionClassName="card_description"
        buttonClassName="card_button_black"
        index={0}
      />
      <InjectableServicesCardPink
        id="botox-benefits"
        image1={img11}
        image2={img23}
        title="What are the Benefits of Sculptra?"
        subTitle="Restore Laxity"
        containerBg=""
        description="If you're looking to revitalize your skin and improve facial or body tissue firmness, Sculptra could be the transformative solution you've been waiting for. Safe and suitable for adults of all ages, Sculptra delivers natural-looking results that help you appear youthful, refreshed, and confident."
        list={[
          "Fine lines and wrinkles are reduced",
          "Non-surgical and minimally invasive",
          "Quick treatment sessions",
          "Little to no downtime",
          "Results are visible within days",
          "Long-lasting effects",
        ]}
        titleClassName="card_title_black"
        descriptionClassName="card_description"
        index={0}
      />
      <InjectableServicesCard
        id="botox-treatment"
        image1={img11}
        image2={img22}
        subTitle="Your Sculptra Procedure"
        SectionBg="bg-[#FBE0DA]"
        title="Tighter Skin"
        description={[
          "Sculptra treatments are tailored to your skin’s condition and aesthetic goals. Jenn will assess your face or body to determine where and how deeply to inject for the best results. Superficial injections improve skin texture and health, while deeper injections restore volume and firmness. Each session is personalized to give you smoother, tighter, and naturally refreshed skin.",
        ]}
        buttonText="Learn More"
        buttonLink="#"
        titleClassName="card_title_black"
        descriptionClassName="card_description"
        buttonClassName="card_button_black"
        index={0}
      />

      <div id="botox-faq" className="">
        <FaqSection />
      </div>
      <DynamicContactUs image={image} />
    </>
  );
}
