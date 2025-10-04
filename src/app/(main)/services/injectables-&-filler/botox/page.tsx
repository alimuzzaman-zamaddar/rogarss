import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import bgImg from "@/assets/cards/botoxhero.png";
import image from "@/assets/contact/contact.png";
import FaqSection from "@/Components/PageComponents/home/FaqSection";
import { IoArrowForward } from "react-icons/io5";
import Container from "@/Components/commonComponents/Container";
import img11 from "@/assets/cards/image6.png";
import img22 from "@/assets/cards/botox1.png";
import img23 from "@/assets/cards/botox2.png";
import InjectableServicesCard from "@/Components/commonComponents/InjectableServicesCard";
import InjectableServicesCardPink from "@/Components/commonComponents/InjectableServicesCardPink";

const sectionBars = [
  { id: 1, path: "botox-treatment", label: "What is botox" },
  { id: 2, path: "botox-benefits", label: "Benefits" },
  { id: 3, path: "botox-faq", label: "FAQ" },
];



export default function page() {
  return (
    <>
      {/* Banner  */}
      <Container>
        <BannerSection
          bgImages={[bgImg.src, bgImg.src, bgImg.src]}
          heading="botox"
          description="Smooth, Firm, and Restore Your Skin’s Youthful Glow"
        />
      </Container>

      {/* Tabs */}
      <div className="pt-10 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10">
        <h4
          data-aos="fade-up"
          className="section_title !mb-2 2xl:!mb-5 text-center"
        >
          Botox
        </h4>
        <p data-aos="fade-up" className="card_description text-center">
          Smooth, Firm, and Restore Your Skin’s Youthful Glow
        </p>

        <div className="bg-bg-pink py-4 mt-10 3xl:mt-20">
          <Container>
            <div className="flex flex-wrap gap-4 items-center justify-center xl:justify-between text-sm xl:text-base">
              {sectionBars?.map(bar => (
                <Link
                  key={bar?.id}
                  href={`#${bar?.path}`}
                  scroll={true}
                  className="link_text"
                >
                  {bar?.label}
                  <IoArrowForward />
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </div>

      {/* Dynamic Cards */}

      <InjectableServicesCard
        id="botox-treatment"
        image1={img11}
        image2={img22}
        title="Botox"
        description={[
          "Botox is an injectable treatment to temporarily relax muscles in the face, thereby reducing fine lines and wrinkles. By blocking nerve signals, it prevents muscles to contract, smoothing the skin and giving it a more youthful appearance. Commonly treated areas include forehead lines, crow’s feet, and frown lines. Botox is popular for those seeking a more refreshed and youthful look without surgery.",
          "Botox Treatment in Las Vegas, NV, can be used to treat dynamic wrinkles caused by muscle movement. It is normal to see results within 3 to 7 days after the treatment, and these usually last for three to four months. If you’re considering a non-surgical approach to facial rejuvenation, book an appointment at Estevez Aesthetics Medical Spa in Las Vegas, NV!",
        ]}
        buttonText="Book Now"
        buttonLink="#"
        titleClassName="card_title_black"
        descriptionClassName="card_description"
        buttonClassName="card_button_black"
        index={0}
      />
      <InjectableServicesCardPink
        id="botox-benefits"
        image1={img11}
        image2={img23}
        title="Botox Benefits"
        containerBg="bg-[#FBE0DA]"
        list={[
          "Fine lines and wrinkles are reduced",
          "Non-surgical and minimally invasive",
          "Quick treatment sessions",
          "Little to no downtime",
          "Results are visible within days",
          "Long-lasting effects",
          "Can prevent the formation of new wrinkles",
          "Customizable to individual needs",
          "Enhances the overall facial appearance",
          "Safe and FDA-approved",
        ]}
        titleClassName="card_title_black"
        descriptionClassName="card_description"
        index={0}
      />

      <div id="botox-faq" className="">
        <FaqSection />
      </div>
      <DynamicContactUs image={image} />
    </>
  );
}
