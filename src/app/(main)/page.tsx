"use client";
import banner from "../../assets/banner/banner-img.jpg";
import banner2 from "../../assets/banner/banner5.png";
import banner3 from "../../assets/banner/banner-6.jpg";
import banner4 from "../../assets/banner/bannerimage.png";
import banner5 from "../../assets/banner/banner-7.jpg";
import ServicesSection from "@/Components/PageComponents/home/ServicesSection";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import { AeshteticsSection } from "@/Components/PageComponents/home/AeshteticsSection";
import { NavigatetoFlawlessSection } from "@/Components/PageComponents/home/NavigatetoFlawlessSection";
import { BeforeAfter } from "@/Components/PageComponents/home/BeforeAfter";
import { ClarityCareSectrion } from "@/Components/PageComponents/home/ClarityCareSectrion";
import { SocialMediaSection } from "@/Components/PageComponents/home/SocialMediaSection";
import TestimonialSection from "@/Components/PageComponents/home/TestimonialSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import img from "../../assets/contact/contact.png";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";

import image2 from "../../assets/home/Image (3).png"
import image1 from "../../assets/home/why.png"

export default function LandingPage() {
  return (
    <>
      <BannerSection
        bgImages={[
          banner.src,
          banner2.src,
          banner3.src,
          banner4.src,
          banner5.src,
        ]}
        heading="Aesthetic & Wellness in Perfect Harmony"
        description="Estevez Aesthetics Medical Spa, Las Vegas, NV."
      />
      <ServicesSection />
      <AeshteticsSection />
      <NavigatetoFlawlessSection />
      <BeforeAfter />
      <div className="mb-0 xl:mb-25">
        <DynamicCardSection
          sectionSubTitle="Nothing Basic About Esteves Aesthetics"
          image1={image2}
          image2={image1}
          title="Why choose us?"
          description="At Esteves Aesthetics, your beauty journey is our priority. We combine cutting-edge technology, proven techniques, and a personalized approach to deliver results that are both natural and transformative. Our commitment to safety, comfort, and excellence ensures every treatment is tailored to your unique needs. With a team of highly trained experts and a passion for helping you feel confident in your own skin, we’re not just enhancing your appearance we’re elevating your entire self-care experience. "
          titleClassName="card_title_black"
          descriptionClassName="card_description"
          index={0}
        />
      </div>
      <div className="my-0 xl:my-50 ">
        <ClarityCareSectrion />
      </div>
      {/* <RecentBlogs /> */}
      <div className="my-0 xl:my-50 ">
        <TestimonialSection />
      </div>
      <div className="mb-0 xl:mb-50">
        <SocialMediaSection />
      </div>
      {/* <FAQSection /> */}
      <DynamicContactUs image={img} />;
    </>
  );
}