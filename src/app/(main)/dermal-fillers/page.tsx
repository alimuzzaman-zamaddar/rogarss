import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import bgImg2 from "@/assets/service/darmal.png";
import image from "@/assets/contact/contact.png";
import image3 from "@/assets/service/Dysport2.png";
import image10 from "@/assets/service/botox-2.png";
import image4 from "@/assets/cards/image6.png";
import image7 from "@/assets/service/botox-3.png";
import image8 from "@/assets/service/darmal-1.png";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import Container from "@/Components/commonComponents/Container";
import { BoltSvg, LineSvg } from "@/Components/SvgContainer/SvgContainer";
import Button from "@/Components/Tags/Button/Button";
import FAQ from "@/Components/ServicesPage/FAQ";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

const sectionBars = [
  { id: 1, path: "/botox", label: "What Is Dermal?" },
  { id: 2, path: "/dsport", label: "Dermal Filler Options" },
  { id: 3, path: "/dermal", label: "Revanesse@ Versa TM" },
  { id: 4, path: "/morpheus8", label: "Procedure" },
  { id: 6, path: "/tetra", label: "FAQ" },
  { id: 7, path: "/botox", label: "Consultation" },
];

export default function page() {
  return (
    <>
      {/* Banner  */}
      <Container>
        <BannerSection
          bgImages={[bgImg2.src, bgImg2.src, bgImg2.src]}
          heading="Dermal Fillers"
          description="Smooth away wrinkles with natural, lasting results"
        />
      </Container>

      {/* Tabs */}
      <div className="pt-10 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10">
        <Container>
          <h4
            data-aos="fade-up"
            className="text-center font-['Gloock'] text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-secondary-black mb-10"
          >
            Dermal Fillers at Esteves Aesthetics
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description w-[80%] mx-auto mb-10"
          >
            Dermal fillers at Esteves Aesthetics are designed to refresh your
            appearance by restoring lost volume, softening lines, and enhancing
            your natural features. Our approach is centered on subtle,
            natural-looking results that highlight your best self. With advanced
            techniques and high-quality products, our specialists deliver safe,
            precise treatments that help you feel more confident and radiant.
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
        title="Restoring Volume and Fullness"
        description="Aging often leads to hollow or sunken areas in the face, particularly around the cheeks, lips, and under the eyes. Dermal fillers are carefully placed to restore fullness, improve facial balance, and create a more vibrant, youthful look. From subtle touch-ups to more defined enhancements, our treatments are designed to lift and smooth while maintaining your natural expressions.
     "
        sectionSubTitle="What is Dysport"
        titleClassName="card_title_black !text-[52px]"
        descriptionClassName="card_description"
        buttonLink="#"
        index={3}
      />

      <Container>
        <div className="my-50">
          <div className="">
            <h4
              data-aos="fade-up"
              className="text-center font-['Gloock'] text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-secondary-black mb-10"
            >
              Dermal Filler Options
            </h4>
            <p
              data-aos="fade-up"
              className="text-center card_description w-[80%] mx-auto mb-10"
            >
              We provide a wide variety of dermal fillers to address different
              areas of concern. Each option is chosen based on your goals and
              aesthetic needs
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-19 items-center ">
            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 ">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-10"
              >
                Dermal Filler Options
              </h4>

              <p
                data-aos="fade-up"
                className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10"
              >
                We provide a wide variety of dermal fillers to address different
                areas of concern. Each option is chosen based on your goals and
                aesthetic needs
              </p>
            </div>
            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 ">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-10"
              >
                Dermal Filler Options
              </h4>

              <p
                data-aos="fade-up"
                className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10"
              >
                We provide a wide variety of dermal fillers to address different
                areas of concern. Each option is chosen based on your goals and
                aesthetic needs
              </p>
            </div>
            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 ">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-10"
              >
                Dermal Filler Options
              </h4>

              <p
                data-aos="fade-up"
                className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10"
              >
                We provide a wide variety of dermal fillers to address different
                areas of concern. Each option is chosen based on your goals and
                aesthetic needs
              </p>
            </div>
            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 ">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-10"
              >
                Dermal Filler Options
              </h4>

              <p
                data-aos="fade-up"
                className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10"
              >
                We provide a wide variety of dermal fillers to address different
                areas of concern. Each option is chosen based on your goals and
                aesthetic needs
              </p>
            </div>
            <div className="col-span-2  ">
              <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 w-[50%] mx-auto ">
                <h4
                  data-aos="fade-up"
                  className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-10"
                >
                  Dermal Filler Options
                </h4>

                <p
                  data-aos="fade-up"
                  className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10"
                >
                  We provide a wide variety of dermal fillers to address
                  different areas of concern. Each option is chosen based on
                  your goals and aesthetic needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)] py-20 my-35">
        <Container>
          <h4
            data-aos="fade-up"
            className="text-center section_sub-title mb-10 "
          >
            Revanesse@ Versa TM
          </h4>
          <h4
            data-aos="fade-up"
            className="text-center font-['Gloock'] text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-secondary-black mb-10"
          >
            What is Revanesse Versa?
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description w-[80%} mx-auto"
          >
            Revanesse Versa is an innovative dermal filler designed to reduce
            wrinkles and folds, especially in the nose-to-mouth area. Its unique
            formula helps minimize swelling and provides smooth, natural
            results. Many patients prefer Versa for its refined finish and
            reliable outcomes, making it a great option for those looking for
            subtle yet noticeable improvements.
          </p>
        </Container>
      </div>
      <div className="bg-white py-20 my-35">
        <Container>
          <h4
            data-aos="fade-up"
            className="text-center font-['Gloock'] text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-secondary-black mb-10"
          >
            What is Juvéderm?
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description w-[80%} mx-auto"
          >
            Juvéderm is a family of dermal fillers made with hyaluronic acid, a
            substance naturally found in your skin. It’s used to smooth lines,
            restore volume, and enhance features like lips and cheeks. Known for
            its smooth consistency and lasting results, Juvéderm is a trusted
            option for patients who want a refreshed appearance with natural,
            youthful contours.
          </p>
        </Container>
      </div>

      <Container>
        <section className="py-16 bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)] my-25">
          <div className="text-center font-family-gloock text-[62px] font-normal [font-style:normal] leading-[132%] capitalize text-secondary-black mb-10 ">
            {/* Heading */}
            <h2 className="section_Title mb-10">
              The Transformative Benefits of Dysport
            </h2>

            {/* Sub-heading */}
            <p className="section_description mb-8 w-[60%] mx-auto">
              Experience the power of advanced aesthetic science to smooth fine
              lines, refresh tired features, and restore a youthful,
              natural-looking radiance that enhances your confidence every day.
            </p>

            {/* Benefits List */}
            <div className="flex justify-center items-center  ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 text-center">
                {[
                  "Boosts self-confidence and appearance",
                  "Prevents wrinkles from forming",
                  "Suitable for both men and women",
                  "Effects last up to four months",
                  "Results appear within a few days",
                  "Wrinkles and fine lines are reduced",
                  "It provides a more youthful and refreshed look",
                  "Non-surgical treatment with minimal downtime",
                  "Frown lines, crow's feet, and forehead wrinkles can all be treated",
                  "Quick procedure, usually completed within 15-20 minutes",
                  "The Transformative Benefits of  Dysport",
                  "Non-surgical and minimally invasive",
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
          </div>
        </section>
      </Container>

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
                What Makes Revanesse Versa Unique?
              </h2>
              <div className="grid grid-cols-1 text-center gap-3">
                {[
                  "Boosts self-confidence and appearance",
                  "Prevents wrinkles from forming",
                  "Effects last up to four months",
                  "Suitable for both men and women",
                  "Results appear within a few days",
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
          </div>
        </Container>
      </section>
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

      <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] py-5 ">
        <Container>
          <div className="my-35 flex gap-10 px-30">
            <h4
              data-aos="fade-up"
              className="text-right font-family-gloock text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-[color:var(--black,#1F1B1A)] mb-10 flex-1"
            >
              Are Fillers Right for You?
            </h4>
            <p data-aos="fade-up" className="section_description  flex-1">
              Dermal fillers are suitable for men and women looking to reduce
              signs of aging, restore facial balance, or enhance natural
              features—all without surgery. Ideal candidates are generally
              healthy, have realistic expectations, and want natural results. At
              Esteves Aesthetics, we’ll evaluate your concerns and design a
              treatment plan personalized to your goals.
            </p>
          </div>
        </Container>
      </div>
      <div className="py-30">
        <FAQ />
      </div>
      <DynamicContactUs image={image} />
    </>
  );
}
