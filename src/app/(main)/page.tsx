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
import image1 from "../../assets/home/why.png"
import { useHomeContentsQuery } from "@/redux/slices/cms/homeSlice";
import Loader from "@/Components/Tags/Loader/loader";

export default function LandingPage() {

  const { data, isLoading } = useHomeContentsQuery();
  

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BannerSection
            bgImages={[
              banner.src,
              banner2.src,
              banner3.src,
              banner4.src,
              banner5.src,
            ]}
            heading={data?.data?.banner?.title}
            description={data?.data?.banner?.description}
          />
          <ServicesSection />
          <AeshteticsSection />
          <NavigatetoFlawlessSection />
          <BeforeAfter before={data?.data} />
          <div className="mb-0 xl:mb-25">
            <DynamicCardSection
              sectionSubTitle={data?.data?.homeWhyChoose?.sub_title}
              image={
                `${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.data?.homeWhyChoose?.image_url}` ||
                image1.src
              }
              title={data?.data?.homeWhyChoose?.title}
              description={data?.data?.homeWhyChoose?.description}
              titleClassName="card_title_black"
              descriptionClassName="card_description"
              index={0}
            />
          </div>
          <div className="my-0 xl:my-50 ">
            <ClarityCareSectrion />
          </div>
          <div className="my-0 xl:my-50 ">
            <TestimonialSection />
          </div>
          <div className="mb-0 xl:mb-50">
            <SocialMediaSection />
          </div>
          <DynamicContactUs image={img} />;
        </>
      )}
    </>
  );
}