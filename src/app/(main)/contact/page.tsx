import { BannerSection } from "@/Components/commonComponents/bannerSection";
import Container from "@/Components/commonComponents/Container";
import bgImg from "@/assets/contact-page/contact.png"
import { GetInTouch } from "@/Components/PageComponents/contact/GetInTouch";
import { LocationSection } from "@/Components/PageComponents/contact/LocationSection";

export default function ContactPage() {
  return (
    <section>
      <Container>
        <div className="">
          <BannerSection
            bgImages={[bgImg.src, bgImg.src, bgImg.src]}
            heading="Contact"
            description="Estevez Aesthetics"
          />
        </div>
        <GetInTouch />
        <LocationSection />
      </Container>
    </section>
  );
};
