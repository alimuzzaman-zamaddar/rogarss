import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import bgImg2 from "@/assets/service/tattooRemoval.png";
import before1 from "@/assets/service/before1.png";
import before3 from "@/assets/service/before2.png";
import before2 from "@/assets/service/before3.png";
import image from "@/assets/contact/contact.png";
import image3 from "@/assets/service/Dysport2.png";
import image10 from "@/assets/service/Image (9).png";
import image4 from "@/assets/cards/image6.png";
import image14 from "@/assets/cards/image3.png";
import image7 from "@/assets/service/botox-3.png";
import image8 from "@/assets/service/technology.png";
import image111 from "@/assets/service/benefites-tatoo.png";
import image13 from "@/assets/service/Image (11).png";
import image11 from "@/assets/service/Image (10).png";
import candidate from "@/assets/cards/candidate.png";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import Container from "@/Components/commonComponents/Container";
import { BoltSvg, LineSvg } from "@/Components/SvgContainer/SvgContainer";
import Button from "@/Components/Tags/Button/Button";
import FAQ from "@/Components/ServicesPage/FAQ";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";


const sectionBars = [
  { id: 1, path: "/botox", label: "What Is Tattoo removeal?" },
  { id: 2, path: "/dsport", label: "Benefits" },
  { id: 4, path: "/morpheus8", label: "The Technology " },
  { id: 4, path: "/morpheus8", label: "Candidacy" },
  { id: 4, path: "/morpheus8", label: "The Process" },
  { id: 4, path: "/morpheus8", label: "Aftercare & Results" },
  { id: 6, path: "/tetra", label: "Why Choose Us?" },
  { id: 7, path: "/botox", label: "FAQ" },
  { id: 7, path: "/botox", label: "Contact" },
];
{/* <a href="https://ibb.co.com/rK1XbjjS"><img src="https://i.ibb.co.com/rK1XbjjS/tattoo-Removal.png" alt="tattoo-Removal" border="0"></a> */}
export default function page() {
  return (
    <>
      {/* Banner  */}
      <Container>
        <BannerSection
          bgImages={[
            "https://i.ibb.co.com/spMX5ffG/tattoo-Removal.png",
            "https://i.ibb.co.com/spMX5ffG/tattoo-Removal.png",
            "https://i.ibb.co.com/spMX5ffG/tattoo-Removal.png",
          ]}
          heading="Tattoo Removal"
          description="Restore Confidence in Your Hands and Feet with Advanced Laser Treatment"
        />
      </Container>

      {/* Tabs */}
      <div className="pt-10 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10">
        <Container>
          <h4 data-aos="fade-up" className="text-center card_title_black mb-10">
            Reveal the Skin You Were Meant to Have
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[80%] mx-auto xl:mb-10"
          >
             At Esteves Aesthetics, we combine cutting-edge laser technology
            with our deep understanding of skin health. We don’t just remove
            ink; we care for your skin throughout the process, ensuring a result
            you can feel confident about.
          </p>
        </Container>
        <div className="bg-[#FBFBFB] py-4 mt-10 3xl:mt-20 my-10 xl:my-20">
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

      <Container>
        <div className="bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)] p-4 xl:p-20 my-15 xl:my-20">
          <h4
            data-aos="fade-up"
            className="text-center section_sub-title mb-10"
          >
            What is Tattoo Removal?
          </h4>
          <h4
            data-aos="fade-up"
            className="text-center card_title_black mb-6 xl:mb-10"
          >
            Understand the Laser Tattoo removal
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[80%] mx-auto mt-7 "
          >
            A tattoo is created by depositing ink particles permanently into the
            dermis layer of the skin. Laser tattoo removal works by targeting
            these particles with highly concentrated beams of light. The laser
            energy breaks the ink into tiny fragments, which are then naturally
            flushed away by your body’s immune system over the following weeks.
            This process gradually fades the tattoo with each treatment session.
          </p>
        </div>
      </Container>

      <section className="py-10 md:py-14 xl:py-20 2xl:py-24 bg-[#F8F8F8]">
        <Container>
          <div className="flex flex-col-reverse justify-center items-center gap-5 xl:gap-10 3xl:gap-20 xl:flex-row">
            {/* Right */}
            <div className="w-full xl:w-[60%]">
              <h5 className="section_sub-title">The Technology</h5>
              {/* Static subtitle */}
              <h2 className="card_title_black mb-10">
                The Technology Behind the Transformation
              </h2>
              <p data-aos="fade-up" className="section_description mb-6">
                At Esteves Aesthetics, we utilize cutting-edge Q-Switched
                Nd:YAG Laser technology. This system is renowned for its
                precision and effectiveness across a wide spectrum of ink
                colors.
              </p>
              <div className="space-y-5">
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px] font-normal leading-[132%] text-secondary-black"
                  >
                    Precision Targeting
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Our laser emits specific wavelengths of light that are
                    selectively absorbed by the tattoo pigment, leaving the
                    surrounding skin tissue largely unaffected.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px]  font-normal leading-[132%] text-secondary-black"
                  >
                    Versatility
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Our laser emits specific wavelengths of light that are
                    selectively absorbed by the tattoo pigment, leaving the
                    surrounding skin tissue largely unaffected.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px] font-normal leading-[132%] text-secondary-black"
                  >
                    Speed and Comfort
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Ultra-short pulse durations shatter ink particles
                    efficiently, making treatments faster and more comfortable
                    compared to older technologies.
                  </p>
                </div>
              </div>
            </div>
            {/* Left */}
            <div className=" w-full xl:w-[40%] flex relative">
              <div className="absolute top-0 right-0">
                <div className="hidden xl:block">
                  <Image
                    className="h-[500px] 2xl:h-[650px] w-[260px] object-cover"
                    src={image4}
                    alt="contact image 1"
                  />
                </div>
              </div>
              <div className="xl:pt-25 z-20 w-full xl:pr-14">
                <Image
                  className="h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[650px] w-full object-cover"
                  src={image8}
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
            <div className=" w-full xl:w-[40%] flex relative">
              <div className="absolute top-0 left-0">
                <div className="hidden xl:block">
                  <Image
                    className="h-[500px] 2xl:h-[650px] w-[260px] object-cover"
                    src={image14}
                    alt="contact image 1"
                  />
                </div>
              </div>
              <div className="xl:pt-25 z-20 w-full xl:pl-14">
                <Image
                  className="h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[650px] w-full object-cover"
                  src={image111}
                  alt="contact image 2"
                />
              </div>
            </div>
            {/* Right */}
            <div className="w-full xl:w-[60%]">
              <h5 className="section_sub-title">Benefits</h5>
              {/* Static subtitle */}
              <h2 className="card_title_black mb-10">
                Benefits of Tattoo Removal
              </h2>
              <p data-aos="fade-up" className="section_description mb-6">
                Choosing to remove a tattoo can be a powerful decision for your
                self-confidence and lifestyle. Benefits include
              </p>
              <div className="space-y-5">
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px]  font-normal leading-[132%] text-secondary-black"
                  >
                    Renewed Confidence
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Feel comfortable and confident in your own skin, without the
                    reminder of a past regret.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px]  font-normal leading-[132%] text-secondary-black"
                  >
                    Professional Freedom
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Remove visible tattoos for career opportunities that may
                    have strict appearance policies.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px] font-normal leading-[132%] text-secondary-black"
                  >
                    A Clean Slate
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Make room for new beginnings, whether that’s bare skin or a
                    brand-new cover-up tattoo you’ll love forever.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px] font-normal leading-[132%] text-secondary-black"
                  >
                    Skin Rejuvenation
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Our laser technology can also stimulate collagen production,
                    potentially improving the texture and tone of the treated
                    area over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="my-10 xl:my-24">
          <h4
            data-aos="fade-up"
            className="text-center card_title_black  mb-10"
          >
            Consultation and Preparation
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[80%] mx-auto xl:mb-10"
          >
            Your journey begins with a comprehensive consultation. We will
            examine your tattoo, discuss your goals, review your medical
            history, and create a fully customized treatment plan. We’ll provide
            pre-care instructions, which typically include avoiding sun exposure
            and certain skincare products before your appointment.
          </p>
        </div>
      </Container>

      <Container>
        <div className="my-20">
          <div className="">
            <h4
              data-aos="fade-up"
              className="text-center font-['Gloock'] text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-secondary-black mb-10"
            >
              The Procedure Explained
            </h4>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-19 items-center ">
            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 xl:h-[300px]">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-5"
              >
                Comfort First
              </h4>

              <p
                data-aos="fade-up"
                className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 "
              >
                A topical numbing cream is applied to the area to ensure your
                comfort throughout the session.
              </p>
            </div>
            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 xl:h-[300px]">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-5"
              >
                Laser Treatment
              </h4>

              <p
                data-aos="fade-up"
                className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10"
              >
                Our specialist will use the laser handpiece to deliver precise
                pulses of light to the tattoo. You may feel a sensation similar
                to the snapping of a rubber band.
              </p>
            </div>

            <div className="col-span-2  ">
              <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 w-[50%] mx-auto xl:h-[300px]">
                <h4
                  data-aos="fade-up"
                  className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-5"
                >
                  Immediate Aftermath
                </h4>

                <p
                  data-aos="fade-up"
                  className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10"
                >
                  The area may appear red and swollen, with possible pinpoint
                  bleeding or whitening of the skin. This is normal and subsides
                  quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className="py-10 md:py-14 xl:py-20 2xl:py-24 bg-[#F8F8F8]">
        <Container>
          <div className="flex flex-col justify-center items-center gap-5 xl:gap-10 3xl:gap-20 xl:flex-row">
            {/* Right */}
            <div className="w-full xl:w-[65%]">
              <h5 className="section_sub-title">Ideal Candidates</h5>
              {/* Static subtitle */}
              <h2 className="card_title_black mb-10">The Candidates</h2>
              <p
                data-aos="fade-up"
                className="section_description !font-semibold !text-secondary-black mb-8"
              >
                Tattoo removal is a great option for many, but the best
                candidates generally are
              </p>
              <div className="grid grid-cols-1  gap-3">
                {[
                  "Have realistic expectations about the number of sessions needed and the gradual fading process.",
                  "Individuals with a history of keloid scarring may require a special consultation.",
                  "Free of active skin infections or conditions in the treatment area.",
                  "In good general health.",
                  "Not pregnant or breastfeeding.",
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
            <div className=" w-full xl:w-[35%] flex relative">
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
                  src={candidate}
                  alt="contact image 2"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] py-5 ">
        <Container>
          <div className="my-35 flex gap-10 px-30">
            <div className="w-full flex items-center">
              <h4
                data-aos="fade-up"
                className="text-right font-family-gloock text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-[color:var(--black,#1F1B1A)] mb-10 flex-1"
              >
                Aftercare and Recovery
              </h4>
            </div>
            <div className="w-full">
              <h5 className="section_sub-title">Aftercare & Results</h5>
              <p data-aos="fade-up" className="section_description  flex-1">
                Dermal fillers are suitable for men and women looking to reduce
                signs of aging, restore facial balance, or enhance natural
                features—all without surgery. Ideal candidates are generally
                healthy, have realistic expectations, and want natural results.
                At Esteves Aesthetics, we’ll evaluate your concerns and design a
                treatment plan personalized to your goals.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className=" p-4 xl:p-20 my-15 xl:my-20">
          <h4
            data-aos="fade-up"
            className="text-center section_sub-title mb-10"
          >
            Why choose US
          </h4>
          <h4
            data-aos="fade-up"
            className="text-center card_title_black mb-6 xl:mb-10"
          >
            Why choose Esteves Aesthetics
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[80%] mx-auto mt-7 "
          >
            If you’re ready to restore youthful fullness and boost your skin’s
            natural collagen, Sculptra may be the perfect treatment for you.
            Contact Esteves Aesthetics today to book your consultation and begin
            your journey toward a naturally refreshed appearance.
          </p>
        </div>
      </Container>
      <div className="">
        <FAQ />
      </div>
      <Container>
        <div className=" p-4 xl:p-20 my-15 xl:my-20 bg-bg-pink">
          <h4
            data-aos="fade-up"
            className="text-center card_title_black mb-6 xl:mb-10"
          >
            Ready to Reveal Your Skin’s Story?
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[80%] mx-auto mt-7 "
          >
            Take the first step toward a blank canvas. Schedule your
            confidential consultation with our tattoo removal specialists at
            Esteves Aesthetics today.
          </p>
          <div className="flex justify-center items-center">
            <Button Txt="Book Now" className="card_button_black  mt-10" />
          </div>
        </div>
      </Container>

      <DynamicContactUs image={image} />
    </>
  );
}
