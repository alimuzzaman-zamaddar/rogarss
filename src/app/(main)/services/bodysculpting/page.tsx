import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicServicesCategories from "@/Components/commonComponents/DynamicServicesCategories";
import React from "react";
import Container from "@/Components/commonComponents/Container";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import contact from "../../../../assets/contact/contact.png";

const page = () => {
  const injectableData = {
    title: "Body Sculpting",
    subtitle: "Your Guide to Radiant Skin & Timeless Beauty",
    categories: [
      { name: "Custom Facials", link: "/botox", description: "Learn More" },
      { name: "Tetra C02 Laser", link: "/dysport", description: "Learn More" },
      {
        name: "Chemical Peels",
        link: "/dermal-fillers",
        description: "Learn More",
      },
      {
        name: "Microneedling",
        link: "/lip-fillers",
        description: "Learn More",
      },
      {
        name: "Skin Tag Removal",
        link: "/sculptra",
        description: "Learn More",
      },
      {
        name: "Morpheus8 (Microneedling & Skin Tightening",
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
          heading="Body Sculpting"
          description="Your Guide to Radiant Skin & Timeless Beauty"
          bgImages={[
          " https://i.ibb.co.com/1YMzGnHq/bodysculpting.png",
          " https://i.ibb.co.com/1YMzGnHq/bodysculpting.png",
          " https://i.ibb.co.com/1YMzGnHq/bodysculpting.png",
          ]}
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
