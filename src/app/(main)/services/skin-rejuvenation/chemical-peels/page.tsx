import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import bgImg2 from "@/assets/service/custombanner.png";
import bgImg22 from "@/assets/products/product2.png";
import image from "@/assets/contact/contact.png";
import image4 from "@/assets/cards/image6.png";
import image14 from "@/assets/cards/image3.png";
import image111 from "@/assets/service/benefites-tatoo.png";
import candidate from "@/assets/products/Ideal-Candidates.png";
import Container from "@/Components/commonComponents/Container";
import { BoltSvg, LineSvg } from "@/Components/SvgContainer/SvgContainer";
import Button from "@/Components/Tags/Button/Button";
import FAQ from "@/Components/ServicesPage/FAQ";
import Image from "next/image";

const sectionBars = [
  { id: 1, path: "/botox", label: "What is Chemical Peels?" },
  { id: 2, path: "/dsport", label: "Benefits" },
  { id: 4, path: "/morpheus8", label: "The Process" },
  { id: 4, path: "/morpheus8", label: "Candidacy" },
  { id: 4, path: "/morpheus8", label: "Aftercare & Results" },
  { id: 6, path: "/tetra", label: "Why Choose Us?" },
  { id: 7, path: "/botox", label: "FAQ" },
  { id: 7, path: "/botox", label: "Contact" },
];


export default function page() {
  return (
    <>
      {/* Banner  */}
      <Container>
        <BannerSection
          bgImages={[bgImg2.src, bgImg2.src, bgImg2.src]}
          heading="Chemical Peels"
          description="Our expert practitioners use advanced formulations to address a variety of skin concerns safely and effectively—helping you achieve a radiant, renewed appearance with minimal downtime."
        />
      </Container>

      {/* Tabs */}
      <div className="pt-10 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10">
        <Container>
          <h4 data-aos="fade-up" className="text-center card_title_black mb-10">
            Reveal Your Skin’s Natural Radiance
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[80%] mx-auto xl:mb-10"
          >
            Chemical peels are a time-tested, transformative treatment designed
            to rejuvenate your skin by exfoliating damaged outer layers and
            revealing smoother, brighter, and more youthful skin beneath.
            Whether you're looking to reduce fine lines, fade hyperpigmentation,
            or simply refresh your complexion, Esteves Aesthetics offers
            medical-grade chemical peels tailored to your unique skin needs.
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
            What Are Chemical Peels?
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
            A chemical peel is a professional skin-resurfacing treatment that
            uses a carefully formulated solution to exfoliate the skin. As the
            outer layers peel away, they reveal healthier, more even-toned skin
            underneath. This process stimulates collagen production, improving
            skin texture, tone, and clarity over time.
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
              Types of Chemical Peels
            </h4>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-19 items-center ">
            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 xl:h-[300px]">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-5"
              >
                Refresh Peel (Light)
              </h4>

              <p
                data-aos="fade-up"
                className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 "
              >
                Ideal for first-time peel patients or those seeking mild
                exfoliation and a quick glow. Perfect for regular maintenance.
              </p>
            </div>
            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 xl:h-[300px]">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-5"
              >
                Renew Peel (Medium)
              </h4>

              <p
                data-aos="fade-up"
                className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10"
              >
                Addresses hyperpigmentation, sun damage, and fine lines with a
                more intensive exfoliation process.
              </p>
            </div>
            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 xl:h-[300px]">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-5"
              >
                Corrective Peel (Medium-Deep)
              </h4>

              <p
                data-aos="fade-up"
                className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10"
              >
                Formulated to improve the appearance of deeper wrinkles,
                significant sun damage, and acne scars. Each peel is selected
                based on your skin type, concerns, and desired outcome.
              </p>
            </div>
            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 xl:h-[300px]">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock 
               text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-6 sm:mb-8 lg:mb-5"
              >
                What Are Chemical Peels?
              </h4>

              <p
                data-aos="fade-up"
                className="text-center card_description w-[95%] sm:w-[85%] lg:w-[80%] mx-auto 
               text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10"
              >
                Formulated to improve the appearance of deeper wrinkles,
                significant sun damage, and acne scars. Each peel is selected
                based on your skin type, concerns, and desired outcome.
              </p>
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
                Benefits of Chemical Peels
              </h2>
              <p data-aos="fade-up" className="section_description mb-6">
                Choosing to remove a tattoo can be a powerful decision for your
                self-confidence and lifestyle. Benefits include
              </p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Impro skin texture and tone",
                  "Diminishes the appearance of fine lines and wrinkles",
                  "Fades dark spots, sun damage, and hyperpigmentation",
                  "Reduces the look of acne scars and large pores",
                  "Boosts collagen production for firmer skin",
                  "Enhances overall radiance and clarity",
                  "Minimal downtime with customizable treatment depth",
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
        <div className="bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)] p-4 xl:p-20 my-15 xl:my-35">
          <h4
            data-aos="fade-up"
            className="text-center section_sub-title mb-10"
          >
            The Process
          </h4>
          <h4
            data-aos="fade-up"
            className="text-center card_title_black mb-6 xl:mb-10"
          >
            What to Expect During Treatment
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description xl:w-[80%] mx-auto"
          >
            Your treatment will begin with a thorough skin cleanse. The chemical
            solution is then applied evenly to your skin. You may feel a mild
            tingling or warming sensation during the process. Depending on the
            peel depth, the procedure can take between 15–45 minutes. Once the
            solution is removed, a soothing cream or serum is applied to calm
            the skin. 
          </p>
        </div>
      </Container>

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
              <div className="grid grid-cols-1 gap-3">
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
