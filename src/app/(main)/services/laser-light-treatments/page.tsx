import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicServicesCategories from "@/Components/commonComponents/DynamicServicesCategories";
import bgImg from "../../../../assets/service/laser/Lasertreatments.png";
import React from "react";
import Container from "@/Components/commonComponents/Container";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import contact from "../../../../assets/contact/contact.png";

const page = () => {
  const injectableData = {
    title: "Laser & Light Treatments",
    subtitle: "Your Guide to Radiant Skin & Timeless Beauty",
    categories: [
      {
        name: "Tetra C02 Laser",
        link: "/tetra-co2-laser",
        description: "Learn More",
      },
      {
        name: "Laser Hair Removal",
        link: "/laser-hair-removal",
        description: "Learn More",
      },
      {
        name: "ClearLift (Non-Ablative Rejuvenation)",
        link: "/clear-lift",
        description: "Learn More",
      },
      {
        name: "Dye-VL (Pigmentation & Vascular Lesions)",
        link: "/lip-fillers",
        description: "Learn More",
      },
      { name: "Tattoo Removal", link: "/sculptra", description: "Learn More" },
      {
        name: "Nail Fungus Laser",
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
