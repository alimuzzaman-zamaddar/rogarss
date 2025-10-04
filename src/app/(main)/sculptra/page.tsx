import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import image from "@/assets/contact/contact.png";
import image10 from "@/assets/service/Image (9).png";
import image4 from "@/assets/cards/image6.png";
import image8 from "@/assets/service/Image (12).png";
import image13 from "@/assets/service/Image (11).png";
import image11 from "@/assets/service/Image (10).png";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import Container from "@/Components/commonComponents/Container";
import { BoltSvg, LineSvg } from "@/Components/SvgContainer/SvgContainer";
import Button from "@/Components/Tags/Button/Button";
import FAQ from "@/Components/ServicesPage/FAQ";
import Image from "next/image";

const sectionBars = [
  { id: 1, path: "/botox", label: "What Is Sculptra?" },
  { id: 2, path: "/dsport", label: "Sculptra Procedure" },
  { id: 4, path: "/morpheus8", label: "Benefits" },
  { id: 4, path: "/morpheus8", label: "Candidate" },
  { id: 4, path: "/morpheus8", label: "Result" },
  { id: 4, path: "/morpheus8", label: "Why Choose us" },
  { id: 6, path: "/tetra", label: "FAQ" },
  { id: 7, path: "/botox", label: "Consultation" },
];

export default function page() {
  return (
    <>
      {/* Banner  */}
      <Container>
        <BannerSection
          bgImages={[
            "https://i.ibb.co.com/MyJx3DL5/scalpta-1.png",
            "https://i.ibb.co.com/MyJx3DL5/scalpta-1.png",
            "https://i.ibb.co.com/MyJx3DL5/scalpta-1.png",
          ]}
          heading="Sculptra"
          description="Restore Youthful Volume Naturally"
        />
      </Container>

      {/* Tabs */}
      <div className="pt-10 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10">
        <Container>
          <h4 data-aos="fade-up" className="text-center card_title_black mb-10">
            Sculptra in Lubbock, TX
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[80%] mx-auto xl:mb-10"
          >
            As we age, our skin loses collagen the essential protein that keeps
            it firm, smooth, and youthful. This gradual decline often leads to
            sagging, hollow areas, and deep wrinkles. Sculptra is a
            collagen-stimulating injectable treatment designed to restore volume
            and improve skin quality over time, giving you results that are
            natural-looking and long-lasting. At Glo & Spa-rkle Aesthetics & Med
            Spa, we’re proud to offer some of the best Sculptra treatments in
            Lubbock to help you refresh and rejuvenate your look.
          </p>
        </Container>
        <div className="bg-[#FBFBFB] py-4 mt-10 3xl:mt-20 my-50">
          <Container>
            <div className="flex flex-wrap gap-4 items-center justify-center xl:justify-between text-sm xl:text-base">
              {sectionBars?.map((bar, index) => (
                <Link
                  key={bar?.id}
                  href={`#${bar?.path}`}
                  scroll={true}
                  className="link_text"
                >
                  {bar?.label}
                  {index === 0 && <LineSvg />}
                  {/* Only show LineSvg for the first child */}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </div>

      <DynamicCardSection
        image1={image4}
        image2={image10}
        title="Smooth and Easy-Flowing Lip Fillers"
        description="Sculptra is an FDA-approved injectable made of poly-L-lactic acid (PLLA), a biocompatible material that works beneath the skin to stimulate your body’s natural collagen production. Unlike traditional fillers that deliver immediate volume, Sculptra works gradually, building a foundation of collagen that enhances facial structure and skin quality over several months.The result? A subtle, natural rejuvenation that develops over time and can last up to two years or more.
     "
        sectionSubTitle="What is Sculptra"
        titleClassName="card_title_black "
        descriptionClassName="card_description"
        buttonLink="#"
        index={3}
      />

      <div className="bg-white py-10 xl:py-20 xl:my-35">
        <Container>
          <h4
            data-aos="fade-up"
            className="text-center card_title_black mb-6 xl:mb-10"
          >
            The Sculptra Procedure
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[70%] mx-auto"
          >
            Your Sculptra treatment is performed in-office and typically takes
            about 30–45 minutes. A series of small injections are placed in
            targeted areas to stimulate collagen growth. For optimal results,
            most patients benefit from a series of 2–3 sessions, spaced several
            weeks apart.
          </p>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[70%] mx-auto"
          >
            Numbing cream or local anesthetic may be used to maximize comfort,
            and you can return to your normal routine shortly after treatment.
          </p>
        </Container>
      </div>
      <div className="bg-white py-10 xl:py-20 xl:my-35">
        <Container>
          <h4
            data-aos="fade-up"
            className="text-center card_title_black mb-6 xl:mb-10"
          >
            Perfect Your Pout
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[70%] mx-auto"
          >
            Bring out the beauty of your lips with treatments designed to
            enhance volume, shape, and symmetry. Using advanced, smooth-flowing
            fillers, we create a soft, natural look that complements your facial
            features. Whether you want a subtle boost or a more defined pout,
            our personalized approach ensures your lips look youthful, balanced,
            and effortlessly kissable.
          </p>
        </Container>
      </div>

      <section className="py-10 md:py-14 xl:py-20 2xl:py-24 bg-[#F8F8F8]">
        <Container>
          <div className="flex flex-col justify-center items-center gap-5 xl:gap-10 3xl:gap-20 xl:flex-row">
            {/* Left */}
            <div className="flex-1 w-full xl:w-[30%] flex relative">
              <div className="absolute top-0 left-0">
                <div className="hidden xl:block">
                  <Image
                    className="h-[500px] 2xl:h-[650px] w-[260px] object-cover"
                    src={image4}
                    alt="contact image 1"
                  />
                </div>
              </div>
              <div className="xl:pt-25 z-20 w-full xl:pl-14">
                <Image
                  className="h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[650px] w-full object-cover"
                  src={image8}
                  alt="contact image 2"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex-1 xl:w-[70%]">
              <h5 className="section_sub-title">Procedure</h5>
              {/* Static subtitle */}
              <h2 className="card_title_black mb-10">
                Lips worth a second glance
              </h2>
              <div className="space-y-5">
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px]  font-normal leading-[132%] text-secondary-black"
                  >
                    Collagen Stimulation
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Encourages natural collagen growth for long-term
                    improvement.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px]  font-normal leading-[132%] text-secondary-black"
                  >
                    Gradual, Natural Results
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Enhances your appearance subtly, without looking “overdone.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px] font-normal leading-[132%] text-secondary-black"
                  >
                    Long-Lasting Effects
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Results can last up to two years, longer than many fillers.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px]  font-normal leading-[132%] text-secondary-black"
                  >
                    Restores Facial Volume
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Improves hollow cheeks, temples, and jawline definition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-14 xl:py-20 2xl:py-24 bg-[#F8F8F8]">
        <Container>
          <div className="flex flex-col justify-center items-center gap-5 xl:gap-10 3xl:gap-20 xl:flex-row">
            {/* Right */}
            <div className="flex-1 xl:w-[65%]">
              <h5 className="section_sub-title">Candidate</h5>
              {/* Static subtitle */}
              <h2 className="card_title_black mb-10">
                Who is a Candidate for Sculptra?
              </h2>
              <p
                data-aos="fade-up"
                className="section_description !font-semibold !text-secondary-black mb-8"
              >
                Sculptra is an excellent option for men and women who want to
              </p>
              <div className="grid grid-cols-1  gap-3">
                {[
                  "Restore lost volume caused by aging",
                  "Improve skin firmness and elasticity",
                  "Soften deep wrinkles and folds",
                  "Achieve long-lasting, natural-looking rejuvenation",
                  "Are in good overall health with realistic expectations",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 text-gray-700"
                  >
                    <span className="text-base">
                      <BoltSvg />
                    </span>
                    <span className="section_description">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Left */}
            <div className="flex-1 w-full xl:w-[35%] flex relative">
              <div className="absolute top-0 right-0">
                <div className="hidden xl:block">
                  <Image
                    className="h-[500px] 2xl:h-[650px] w-[260px] object-cover"
                    src={image4}
                    alt="contact image 1"
                  />
                </div>
              </div>
              <div className="xl:pt-25 xl:pb-20 z-20 w-full xl:pr-14">
                <Image
                  className="h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[650px] w-full object-cover"
                  src={image11}
                  alt="contact image 2"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-14 xl:py-20 2xl:py-24 bg-[#F8F8F8]">
        <Container>
          <div className="flex flex-col justify-center items-center gap-5 xl:gap-10 3xl:gap-20 xl:flex-row">
            {/* Left */}
            <div className="flex-1 w-full xl:w-[30%] flex relative">
              <div className="absolute top-0 left-0">
                <div className="hidden xl:block">
                  <Image
                    className="h-[500px] 2xl:h-[650px] w-[260px] object-cover"
                    src={image4}
                    alt="contact image 1"
                  />
                </div>
              </div>
              <div className="xl:pt-25 z-20 w-full xl:pl-14">
                <Image
                  className="h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[650px] w-full object-cover"
                  src={image13}
                  alt="contact image 2"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex-1 xl:w-[70%]">
              <h5 className="section_sub-title">Procedure</h5>
              {/* Static subtitle */}
              <h2 className="card_title_black mb-10">
                Lips worth a second glance
              </h2>
              <div className="space-y-5">
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px]  font-normal leading-[132%] text-secondary-black"
                  >
                    Collagen Stimulation
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Encourages natural collagen growth for long-term
                    improvement.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px]  font-normal leading-[132%] text-secondary-black"
                  >
                    Gradual, Natural Results
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Enhances your appearance subtly, without looking “overdone.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px] font-normal leading-[132%] text-secondary-black"
                  >
                    Long-Lasting Effects
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Results can last up to two years, longer than many fillers.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px]  font-normal leading-[132%] text-secondary-black"
                  >
                    Restores Facial Volume
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Improves hollow cheeks, temples, and jawline definition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)] p-4 xl:p-20 my-15 xl:my-35">
          <h4
            data-aos="fade-up"
            className="text-center section_sub-title mb-10"
          >
            Why Choose us
          </h4>
          <h4
            data-aos="fade-up"
            className="text-center card_title_black mb-6 xl:mb-10"
          >
            Why Choose Esteves Aesthetics for Sculptra?
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[80%] mx-auto"
          >
            At Esteves Aesthetics, we take pride in delivering personalized,
            natural-looking results. Our experienced injectors understand the
            artistry behind facial balance and work with you to create a
            treatment plan that enhances your beauty without compromising your
            unique features.
          </p>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[80%] mx-auto mt-7 "
          >
            At Estevez Aesthetics, we know that lip enhancement is personal.
            Whether you desire a subtle lift or a more noticeable pout, our
            specialists use precise techniques to ensure your lips feel soft,
            natural, and beautifully proportioned. Our goal is to enhance your
            natural beauty while allowing your lips to reflect your individual
            style and personality.
          </p>
        </div>
      </Container>

      <Container>
        <div className="my-35 px-20 py-30 bg-[#FBE0DA]">
          <h4
            data-aos="fade-up"
            className="text-center font-['Gloock'] text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-primary-black mb-10"
          >
            Schedule Your Lubbock Botox Consultation at Esteves Aesthetics Today
          </h4>
          <p
            data-aos="fade-up"
            className="section_description w-[70%] mx-auto text-center"
          >
            Experience the art of timeless beauty with a personalized Botox
            treatment plan designed just for you. Our expert team at Esteves
            Aesthetics is here to help you refresh your look, smooth fine lines,
            and restore youthful confidence because you deserve to feel as
            vibrant as you look.
          </p>

          <div className="flex justify-center items-center">
            <Button Txt="Book Now" className="card_button_black  mt-10" />
          </div>
        </div>
      </Container>

      <div className="py-30">
        <FAQ />
      </div>
      <DynamicContactUs image={image} />
    </>
  );
}
