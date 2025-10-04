import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicServicesCategories from "@/Components/commonComponents/DynamicServicesCategories";
import bgImg from "../../../../assets/service/prp.png";
import React from "react";
import Container from "@/Components/commonComponents/Container";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import contact from "../../../../assets/contact/contact.png";

const page = () => {
  const injectableData = {
    title: "Wellness & PRP",
    subtitle: "Your Guide to Radiant Skin & Timeless Beauty",
    categories: [
      {
        name: "Semaglutide (Medical Weight Loss)",
        link: "/botox",
        description: "Learn More",
      },
      {
        name: "Hormone Replacement Therapy",
        link: "/dysport",
        description: "Learn More",
      },
      {
        name: "Hormone Replacement Therapy",
        link: "/dermal-fillers",
        description: "Learn More",
      },
      {
        name: "Alma Duo (Sexual Wellness)",
        link: "/lip-fillers",
        description: "Learn More",
      },
      { name: "IV Drip Therapy", link: "/sculptra", description: "Learn More" },
      {
        name: "PRP Regenerative Treatments",
        link: "/sculptra",
        description: "Learn More",
      },
      {
        name: "Opus Plasma (Skin Resurfacing)",
        link: "/sculptra",
        description: "Learn More",
      },
    ],
  };

  return (
    <div>
      <Container>
        <BannerSection
          heading="Laser & Light Treatments"
          description="Your Guide to Radiant Skin & Timeless Beauty"
          bgImages={[bgImg.src, bgImg.src, bgImg.src]}
        />

        {/* Pass the injectableData as props */}
        <DynamicServicesCategories
          title={injectableData.title}
          subtitle={injectableData.subtitle}
          categories={injectableData.categories}
        />

        <DynamicContactUs image={contact} />
      </Container>
    </div>
  );
};

export default page;
