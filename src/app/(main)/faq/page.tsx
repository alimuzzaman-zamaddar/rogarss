
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import bgImg from "@/assets/products/brunette-girl-posing-with-flowers.png";
import Container from "@/Components/commonComponents/Container";
import FAQ from "@/Components/ServicesPage/FAQ";


export default function page() {
  return (
    <>
      <Container>
        <BannerSection
          bgImages={[bgImg.src, bgImg.src, bgImg.src]}
          heading="FAQ"
          description="Know Before You Glow"
        />
      </Container>
      <div className="my-20 xl:my-[250px]">
        <FAQ></FAQ>
      </div>
    </>
  );
}
