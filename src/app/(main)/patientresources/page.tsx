import { BannerSection } from "@/Components/commonComponents/bannerSection";
import Container from "@/Components/commonComponents/Container";
import contactImage from "../../../assets/contact/contact.png";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import bgImg from "@/assets/service/imagesecion.png";
import DynamicServicesCategories from "@/Components/commonComponents/DynamicServicesCategories";
import { RecentBlogs } from "@/Components/PageComponents/home/RecentBlogs";

export default function page() {
  const PatientResourcesData = {
    title: "Patient Resources",
    subtitle: "Your Guide To Radiant Skin & Timeless Beauty",
    categories: [
      {
        name: "Before & After Gallery",
        link: "/botox",
        description: "Learn More",
      },
      {
        name: "Financing Options",
        link: "/dysport",
        description: "Learn More",
      },
      {
        name: "Memberships / Packages",
        link: "/dermal-fillers",
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
            heading="Patient Resources"
            description="Your Guide to Radiant Skin & Timeless Beauty"
          />
        </div>
        {/* Pass the injectableData as props */}
        <DynamicServicesCategories
          title={PatientResourcesData.title}
          subtitle={PatientResourcesData.subtitle}
          categories={PatientResourcesData.categories}
        />
        <RecentBlogs />
        <DynamicContactUs image={contactImage} />.
      </Container>
    </section>
  );
}
