import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
// import bgImg from "@/assets/service/imagesecion.png";
import bgImg1 from "@/assets/products/Facial-Balancing.png";
import image from "@/assets/contact/contact.png";
import IMG from "@/assets/service/imagesecion.png";
import DynamicImageSection from "@/Components/commonComponents/DynamicImageSecion";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import FaqSection from "@/Components/PageComponents/home/FaqSection";
import TreatmentTechnologySection from "@/Components/commonComponents/TreatmentTechnologySection";
import { IoArrowForward } from "react-icons/io5";
import Container from "@/Components/commonComponents/Container";
import {
  dynamicCardData,
  facialBalancingInfo,
  infoTextSections,
  sectionBars,
} from "@/Components/Data/data";
import InfoTextSection from "@/Components/common/InfoTextSection";
import InfoGridSection from "@/Components/common/InfoGridSection";
import InjectableServicesCardPink from "@/Components/commonComponents/InjectableServicesCardPink";
import img11 from "@/assets/cards/image6.png";
import img23 from "@/assets/products/product.png";
import img24 from "@/assets/products/Ideal-Candidates.png";
import img25 from "@/assets/products/product1.png";
import img26 from "@/assets/products/product3.png";
import imgDynamic from "@/assets/products/product2.png";
import WhatPeopleSaying from "@/Components/commonComponents/DynamicHairRemoval";
import ReusableInfoCard from "@/Components/commonComponents/ReusableInfoCard";
import FAQ from "@/Components/ServicesPage/FAQ";

export default function ContactPage() {
  return (
    <>
      {/* Banner  */}
      <Container>
        <BannerSection
          bgImages={[bgImg1.src, bgImg1.src, bgImg1.src]}
          heading="Custom Facials"
          description={
            <>
              <span className="xl:block hidden section_description !text-white">
                Experience custom facials tailored to your skin’s unique needs
                at Esteves Aesthetics. Whether you're seeking hydration, acne
                treatment, anti-aging, or overall rejuvenation, our expert
                facial therapies are designed to restore your skin's natural
                glow with precision and care.
              </span>
              <span className="xl:hidden section_description !text-white">
                Experience custom facials tailored to your skin’s needs.
              </span>
            </>
          }
        />
      </Container>

      <Container>
        <div>
          {infoTextSections.map((service, idx) => (
            <InfoTextSection key={idx} {...service} buttonVariant="pink" />
          ))}
        </div>
      </Container>

      <div className="bg-bg-pink py-4 mt-10 3xl:mt-20">
        <Container>
          <div
            data-aos="fade-up"
            className="flex flex-wrap gap-4 items-center justify-center xl:justify-between text-sm xl:text-base"
          >
            {sectionBars?.map((bar) => (
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

      <Container>
        <InfoGridSection {...facialBalancingInfo} />
      </Container>

      <InjectableServicesCardPink
        id="botox-benefits"
        image1={img11}
        image2={img23}
        buttonClassName="card_button_black"
        subTitle="Benefits of Our Custom Facials"
        title="What Makes Custom Facials Worth It"
        description="Removing a tattoo doesn’t just change your skin—it can change how you feel. Laser tattoo removal at Esteves Aesthetics offers:"
        containerBg="bg-white"
        list={[
          "Deep Cleansing of the Skin",
          "Improved Skin Hydration",
          "Enhanced Skin Tone and Texture",
          "Reduction in Acne and Breakouts",
          "Minimized Pores",
          "Anti-Aging Benefits",
          "Improved Blood Circulation",
          "Stress Reduction",
          "Detoxification",
        ]}
        titleClassName="card_title_black"
        descriptionClassName="card_description"
        index={0}
      />
      <InjectableServicesCardPink
        id="botox-benefits"
        image1={img11}
        image2={img24}
        subTitle="Ideal Candidates"
        buttonText="Book Now"
        buttonClassName="card_button_black"
        buttonLink="#"
        CardClassName="xl:flex-row-reverse"
        title="Is This Facial Right for You?"
        containerBg="bg-white"
        list={[
          "Wish to enhance the effects of other aesthetic treatments like peels or laser therapy",
          "Want a tailored, non-invasive solution to improve your skin's appearance",
          "Are experiencing skin concerns such as dryness, acne, congestion, dullness, or sensitivity",
          "Need a skin-safe treatment for pregnancy, post-surgery, or reactive skin",
        ]}
        titleClassName="card_title_black"
        descriptionClassName="card_description"
        index={0}
      />
      <InjectableServicesCardPink
        id="botox-benefits"
        image1={img11}
        image2={img25}
        buttonLink="#"
        subTitle="Are You a Good Candidate?"
        title="Who’s a Fit for Laser Tattoo Removal at Esteves Aesthetics?"
        description="If you're generally healthy and ready to part ways with your tattoo, you're likely a candidate. Ideal individuals include those who"
        containerBg="bg-white"
        list={[
          "Wish to enhance the effects of other aesthetic treatments like peels or laser therapy",
          "Are experiencing skin concerns such as dryness, acne, congestion, dullness, or sensitivity",
          "Need a skin-safe treatment for pregnancy, post-surgery, or reactive skin",
          "Are looking for ongoing skin maintenance and nourishment",
        ]}
        titleClassName="card_title_black"
        descriptionClassName="card_description"
        index={0}
      />
      <DynamicImageSection
        img={imgDynamic}
        isBox={true}
        cardData={{
          title: "Your Personalized Experience Begins Here",
          subTitle: "Consultation & Preparation at Esteves Aesthetics",
          description:
            "Every journey begins with a thorough consultation. During your visit, our team will assess your tattoo's size, color, age, and depth, as well as your skin type and medical history. We’ll also outline a treatment plan tailored to your needs and discuss what to expect before, during, and after the procedure—so you feel confident every step of the way.",
          buttonText: "Book Now",
          buttonClassName: "card_button_black",
        }}
      />

      <ReusableInfoCard
        subTitle="Recovery, Aftercare, and Long-Term Results"
        title="Gentle Healing, Bold Results"
        list={[
          {
            title: "Keeping the Area Clean and Dry",
            description: "Prevents infection and promotes healing",
          },
          {
            title: "Applying Sunscreen",
            description:
              "Shields sensitive skin from UV exposure and pigment changes.",
          },
          {
            title: "Moisturizing",
            description:
              "Keeps skin hydrated and aids recovery without irritation.",
          },
        ]}
        buttonText="Book Now"
        buttonLink="#"
        buttonClassName="card_button_black"
        image1={img11}
        image2={img26}
        containerBg="bg-[#FCE8E8]"
      />

      <Container>
        <div className="flex gap-10 mt-8 xl:mt-10">
          <div className=" p-6 w-full md:w-[47.5%] bg-bg-pink">
            <h3 className="font-semibold md:text-xl text-lg  lg:text-2xl xl:text-[32px] mb-5 ">
              Seeing Results
            </h3>
            <p className="section_description">
              Most clients notice lightening after just a few sessions, with
              complete fading over time. Factors like ink color, depth, and age
              will influence results.
            </p>
          </div>
          <div className=" p-6 w-full md:w-[47.5%] bg-bg-pink ">
            <h3 className="font-semibold md:text-xl text-lg  lg:text-2xl xl:text-[32px] mb-5">
              Maintaining Results
            </h3>
            <p className="section_description">
              Follow-up care and spacing sessions correctly ensures your skin
              heals safely and beautifully. Avoid sun exposure, follow product
              recommendations, and stay patient true transformation takes time.
            </p>
          </div>
        </div>
      </Container>

      <div className="py-10 xl:py-40">
        <FAQ />
      </div>
      <Container>
        <WhatPeopleSaying
          sub_title="Say Goodbye to the Past — Start Fresh Today"
          title="Take the First Step Toward Clearer Skin"
          description="Ready to remove the ink and rediscover your skin? At Esteves Aesthetics, we’re here to help you feel more confident in your appearance with results you can see and feel. Schedule your consultation today and begin the journey toward a tattoo-free future—on your terms."
          buttonText="Book Now"
          buttonClassName="card_button_black"
        />
      </Container>
      {/* Dynamic Cards */}

      <DynamicContactUs image={image} />
    </>
  );
}
