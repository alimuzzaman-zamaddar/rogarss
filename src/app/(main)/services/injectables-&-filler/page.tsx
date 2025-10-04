import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicServicesCategories from "@/Components/commonComponents/DynamicServicesCategories";
import React from "react";
import Container from "@/Components/commonComponents/Container";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import contact from "../../../../assets/contact/contact.png"

const page = () => {

  const injectableData = {
    title: "Injectables & Filler",
    subtitle: "Your Guide To Radiant Skin & Timeless Beauty",
    categories: [
      {
        name: "Botox",
        link: "/services/injectables-&-filler/botox",
        description: "Learn More",
      },
      {
        name: "Dysport",
        link: "/services/injectables-&-filler/dysport",
        description: "Learn More",
      },
      {
        name: "Dermal Fillers",
        link: "/services/injectables-&-filler/dermal-fillers",
        description: "Learn More",
      },
      {
        name: "Sculptra",
        link: "/services/injectables-&-filler/sculptra",
        description: "Learn More",
      },
    ],
  };

  return (
    <div>
      <Container>
        <BannerSection
          heading="Injectables & Filler"
          description="Your Guide to Radiant Skin & Timeless Beauty"
          bgImages={[
            "https://i.ibb.co.com/SXzxrDC9/Injectables-Filler.png",
            "https://i.ibb.co.com/SXzxrDC9/Injectables-Filler.png",
            "https://i.ibb.co.com/SXzxrDC9/Injectables-Filler.png",
            
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
