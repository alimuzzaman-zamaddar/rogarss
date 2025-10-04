import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import bgImg2 from "@/assets/service/custombanner.png";
import bgImg22 from "@/assets/products/product2.png";
import image from "@/assets/contact/contact.png";
import image4 from "@/assets/cards/image6.png";
import image14 from "@/assets/cards/image3.png";
import image111 from "@/assets/service/benefites-tatoo.png";;
import candidate from "@/assets/products/Ideal-Candidates.png";
import Container from "@/Components/commonComponents/Container";
import { BoltSvg, LineSvg } from "@/Components/SvgContainer/SvgContainer";
import Button from "@/Components/Tags/Button/Button";
import FAQ from "@/Components/ServicesPage/FAQ";
import Image from "next/image";

const sectionBars = [
  { id: 1, path: "/botox", label: "What is Facial Balancing?" },
  { id: 2, path: "/dsport", label: "Benefits" },
  { id: 4, path: "/morpheus8", label: "Candidacy" },
  { id: 4, path: "/morpheus8", label: "The Process" },
  { id: 4, path: "/morpheus8", label: "Aftercare & Results" },
  { id: 6, path: "/tetra", label: "Why Choose Us?" },
  { id: 7, path: "/botox", label: "FAQ" },
  { id: 7, path: "/botox", label: "Contact" },
];
const dynamicCardData = [
  {
    id: "botox",
    image1: image14,
    image2: image111,
    title: "Botox Treatments for a Refreshed, Youthful Look",
    description:
      "Botox is an injectable treatment to temporarily relax muscles in the face, thereby reducing fine lines and wrinkles. By blocking nerve signals, it prevents muscles to contract, smoothing the skin and giving it a more youthful appearance. Commonly treated areas include forehead lines, crow’s feet, and frown lines. Botox is popular for those seeking a more refreshed and youthful look without surgery.",
    buttonText: "Learn More",
    buttonClassName: "card_button_pink",
    titleClassName: "card_title_black",
    descriptionClassName: "card_description",
    buttonLink: "#",
  },
];


export default function page() {
  return (
    <>
      {/* Banner  */}
      <Container>
        <BannerSection
          bgImages={[bgImg2.src, bgImg2.src, bgImg2.src]}
          heading="Custom Facials"
          description="We believe in enhancing what makes you unique. Our treatments are tailored to bring symmetry, restore volume, and create a naturally lifted, youthful glow."
        />
      </Container>

      {/* Tabs */}
      <div className="pt-10 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10">
        <Container>
          <h4 data-aos="fade-up" className="text-center card_title_black mb-10">
            Harmonize Your Natural Beauty
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[80%] mx-auto xl:mb-10"
          >
            Facial Balancing at Esteves Aesthetics is a refined, artistic
            approach to enhancing your natural features while restoring harmony
            and proportion to your face. As we age, volume loss, skin laxity,
            and changes in facial structure can create imbalance. Our expert
            practitioners use a combination of advanced injectables and
            cutting-edge techniques to rejuvenate and rebalance your
            appearance—helping you look like the best version of yourself,
            refreshed and radiant.
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
        <div className=" p-4 xl:p-8 my-15 xl:my-10">
          <h4
            data-aos="fade-up"
            className="text-center section_sub-title mb-10"
          >
            What is Facial Balancing?
          </h4>
          <h4
            data-aos="fade-up"
            className="text-center card_title_black mb-6 xl:mb-10"
          >
            It’s All About Harmony
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[80%] mx-auto mt-7 "
          >
            Facial balancing is a customized, non-surgical treatment plan
            designed to improve facial symmetry, replace lost volume, and create
            smoother contours. It goes beyond addressing individual wrinkles or
            lines it takes a holistic view of your face to ensure all your
            features work in harmony.
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
              Our Facial Balancing Treatments Include
            </h4>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-19 items-center ">
            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 xl:h-[300px]">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-5"
              >
                Dermal Fillers
              </h4>

              <p
                data-aos="fade-up"
                className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 "
              >
                Hyaluronic acid-based fillers replace lost volume, smooth deep
                lines, and enhance facial contours for a naturally youthful
                appearance.
              </p>
            </div>
            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 xl:h-[300px]">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-5"
              >
                Neurotoxins
              </h4>

              <p
                data-aos="fade-up"
                className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10"
              >
                Ideal for reducing the appearance of dynamic wrinkles—such as
                frown lines and crow's feet—by relaxing overactive facial
                muscles.
              </p>
            </div>
            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 xl:h-[300px]">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-5"
              >
                Lip Enhancement
              </h4>

              <p
                data-aos="fade-up"
                className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10"
              >
                Subtly add volume, shape, and definition to lips while
                maintaining natural movement and expression.
              </p>
            </div>
            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 xl:h-[300px]">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-5"
              >
                Non-Surgical Lifting
              </h4>

              <p
                data-aos="fade-up"
                className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10"
              >
                Using advanced techniques and products like threads or
                collagen-stimulating fillers to lift and redefine the jawline,
                cheeks, and midface.
              </p>
            </div>

            <div className="col-span-2  ">
              <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 w-[50%] mx-auto xl:h-[300px]">
                <h4
                  data-aos="fade-up"
                  className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-5"
                >
                  Laser & Energy-Based Treatments
                </h4>

                <p
                  data-aos="fade-up"
                  className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10"
                >
                  Complementary treatments like laser resurfacing or
                  radiofrequency to improve skin tone, texture, and tightness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

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
                    Personalized Results
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Tailored to your unique facial structure and goals.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px]  font-normal leading-[132%] text-secondary-black"
                  >
                    Natural-Looking Enhancement
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                     Achieve subtle, refreshed results—never overdone.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px] font-normal leading-[132%] text-secondary-black"
                  >
                    Minimal Downtime
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Most treatments require little to no recovery time.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px] font-normal leading-[132%] text-secondary-black"
                  >
                    Boost in Confidence
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                     Feel more like yourself—balanced, revitalized, and radiant.
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
            <div className="w-full xl:w-[65%]">
              <h5 className="section_sub-title">Ideal Candidates</h5>
              {/* Static subtitle */}
              <h2 className="card_title_black mb-10">
                Facial balancing is perfect for those who
              </h2>
              <p
                data-aos="fade-up"
                className="section_description !font-semibold !text-secondary-black mb-8"
              >
                Want to address early signs of aging like volume loss or skin
                laxity
              </p>
              <div className="grid grid-cols-1  gap-3">
                {[
                  "Desire more facial symmetry and proportion",
                  "Wish to enhance their features without surgery",
                  "Desire more facial symmetry and proportion",
                  "Wish to enhance their features without surgery.",
                  "Preve a subtle, natural-looking refresh over dramatic change",
                  "Need a skin-safe treatment for pregnancy, post-surgery, or reactive skin",
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
      <div className="">
        <div className="relative z-10">
          <Image src={bgImg22} height={800} width={1920} alt="any" />
        </div>
        <div className="-mt-[250px] relative z-50 ">
          <Container>
            <div className="bg-white p-4 xl:p-20 shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)]">
              <h4
                data-aos="fade-up"
                className="text-center section_sub-title mb-10"
              >
                Aftercare & Recovery
              </h4>
              <h4
                data-aos="fade-up"
                className="text-center card_title_black mb-6 xl:mb-10"
              >
                What to Expect During Your Treatment
              </h4>
              <p
                data-aos="fade-up"
                className="text-center card_description xl:w-[80%] mx-auto mt-7 "
              >
                Recovery is generally minimal. You may experience mild swelling,
                redness, or bruising, but these usually resolve within a few
                days. We’ll provide detailed aftercare instructions, which may
                include avoiding strenuous exercise, excessive sun exposure, and
                certain skincare products temporarily. Most clients return to
                their daily routine right away.
              </p>
            </div>
          </Container>
        </div>
      </div>

      <Container>
        <div className="bg-white p-4 xl:p-20 my-15 xl:my-20">
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
            We combine an artistic eye with medical expertise. Our practitioners
            are highly trained in advanced injection techniques and facial
            anatomy, ensuring beautiful, safe, and natural-looking results. We
            take the time to listen and create a plan that’s perfectly tailored
            to you.
          </p>
        </div>
      </Container>





      <div className="">
        <FAQ />
      </div>
      <Container>
        <div className=" p-4 xl:p-20 my-15 xl:my-35 bg-bg-pink">
          <h4
            data-aos="fade-up"
            className="text-center card_title_black mb-6 xl:mb-10"
          >
            Ready to Restore Your Balance?
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
