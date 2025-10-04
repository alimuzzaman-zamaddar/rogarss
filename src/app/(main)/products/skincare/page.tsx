import { BannerSection } from "@/Components/commonComponents/bannerSection";
import Container from "@/Components/commonComponents/Container";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import DynamicServicesCategories from "@/Components/commonComponents/DynamicServicesCategories";
import contactImage from "../../../../assets/contact/contact.png";
import bgImg from "../../../../assets/blogPost/brunette-girl-posing-with-flowers.png";


export default function page() {
  const PatientResourcesData = {
    title: "Skincare",
    subtitle: "Your Guide To Radiant Skin & Timeless Beauty",
    categories: [
      {
        name: "Brightening Serum",
        link: "/botox",
        description: "Learn More",
      },
      {
        name: "Pigment Control Creme",
        link: "/dysport",
        description: "Learn More",
      },
      {
        name: "Gentle Cleanser",
        link: "/dermal-fillers",
        description: "Learn More",
      },
      {
        name: "Soothing Antioxidant Mist",
        link: "/botox",
        description: "Learn More",
      },
      {
        name: "Exfoliating Pads",
        link: "/dysport",
        description: "Learn More",
      },
      {
        name: "Tretinol Serum",
        link: "/dermal-fillers",
        description: "Learn More",
      },
      {
        name: "Growth Factor Cream",
        link: "/botox",
        description: "Learn More",
      },
      {
        name: "Carboxy Mask",
        link: "/dysport",
        description: "Learn More",
      },
      {
        name: "CBD Kit",
        link: "/dermal-fillers",
        description: "Learn More",
      },
      {
        name: "Acne Kit",
        link: "/botox",
        description: "Learn More",
      },
      {
        name: "Anti-Aging Kit",
        link: "/dysport",
        description: "Learn More",
      },
      {
        name: "Anti-Aging Kit",
        link: "/dysport",
        description: "Learn More",
      },
    ],
  };

  return (
    <section>
      <Container>
        <div className="">
          <BannerSection
            bgImages={[bgImg.src, bgImg.src, bgImg.src]}
            heading="Skincare"
            description="Your Guide to Radiant Skin & Timeless Beauty"
          />
        </div>
        {/* Pass the injectableData as props */}
        <DynamicServicesCategories
          title={PatientResourcesData.title}
          subtitle={PatientResourcesData.subtitle}
          categories={PatientResourcesData.categories}
        />
        <DynamicContactUs image={contactImage} />.
      </Container>
    </section>
  );
}
