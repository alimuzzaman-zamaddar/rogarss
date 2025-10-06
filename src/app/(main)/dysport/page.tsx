"use client";

import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import bgImg from "@/assets/service/imagesecion.png";
import bgImg2 from "@/assets/service/Dysport.png";
import image from "@/assets/contact/contact.png";
import image3 from "@/assets/service/Dysport2.png";
import image10 from "@/assets/service/botox-2.png";
import image4 from "@/assets/cards/image6.png";
import image7 from "@/assets/service/botox-3.png";
import IMG from "@/assets/service/imagesecion.png";
import DynamicImageSection from "@/Components/commonComponents/DynamicImageSecion";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import FaqSection from "@/Components/PageComponents/home/FaqSection";
import TreatmentTechnologySection from "@/Components/commonComponents/TreatmentTechnologySection";
import { IoArrowForward } from "react-icons/io5";
import Container from "@/Components/commonComponents/Container";
import { dynamicCardData } from "@/Components/Data/data";
import { BoltSvg, LineSvg } from "@/Components/SvgContainer/SvgContainer";
import Button from "@/Components/Tags/Button/Button";
import FAQ from "@/Components/ServicesPage/FAQ";
import { useGetSubServiceDetailsQuery } from "@/redux/slices/cms/homeSlice";
import Loader from "@/Components/Tags/Loader/loader";

const sectionBars = [
  { id: 1, path: "botox", label: "What Botox?" },
  { id: 2, path: "/dsport", label: "Benefits" },
  { id: 3, path: "/dermal", label: "Botox Candidates" },
  { id: 4, path: "/morpheus8", label: "Procedure" },
  { id: 5, path: "/plasma", label: "Result" },
  { id: 6, path: "/tetra", label: "FAQ" },
  { id: 7, path: "/botox", label: "Consultation" },
];

export default function page() {
  const { data, isLoading } = useGetSubServiceDetailsQuery("dysport");
  
  console.log(`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.sub_service_details?.definition_image}`);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          {/* Banner  */}
          <Container>
            <BannerSection
              bgImages={[1, 2, 3].map(
                () =>
                  `${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.banner_image}`
              )}
              heading={data?.name}
              description="Smooth away wrinkles with natural, lasting results"
            />
          </Container>
          {/* Tabs */}
          <div className="pt-10 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10">
            <Container>
              <h4
                data-aos="fade-up"
                className="text-center font-['Gloock'] text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-[color:var(--black,#1F1B1A)] mb-10"
              >
                {data?.title}
              </h4>
              <p
                data-aos="fade-up"
                className="text-center card_description w-[80%] mx-auto mb-10"
              >
                {data?.description}
              </p>
              <p
                data-aos="fade-up"
                className="text-center card_description w-[80%] mx-auto "
              >
                {data?.description}
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
          <div id="botox" className="">
            <DynamicCardSection
              image={`${process.env.NEXT_PUBLIC_ASSET_URL}/${data?.sub_service_details?.definition_image}`}
              title={data?.sub_service_details?.definition_title}
              description={data?.sub_service_details?.definition_description}
              sectionSubTitle={data?.sub_service_details?.definition_sub_title}
              titleClassName="card_title_black !text-[52px]"
              descriptionClassName="card_description"
              buttonLink="#"
              index={3}
            />
          </div>
          <Container>
            <h4
              data-aos="fade-up"
              className="text-center section_sub-title mb-10 my-35"
            >
              Dysport vs Botox
            </h4>
            <h4
              data-aos="fade-up"
              className="text-center font-['Gloock'] text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-[color:var(--black,#1F1B1A)] mb-10"
            >
              Which Treatment is Right for You?
            </h4>
            <p
              data-aos="fade-up"
              className="text-center card_description w-[80%} mx-auto"
            >
              Dysport and Botox are both popular injectable treatments designed
              to smooth wrinkles and fine lines by temporarily relaxing targeted
              facial muscles. While they work in similar ways, there are subtle
              differences that may make one more suitable for your unique goals.
              Dysport tends to spread more easily, making it an excellent choice
              for larger treatment areas like the forehead, while Botox offers
              precise targeting for smaller, more defined lines. The right
              option depends on your skin concerns, desired results, and how
              your body responds to each formula. At Esteves Aesthetics, our
              experienced team will guide you through the decision process,
              ensuring you receive a treatment plan that delivers the most
              natural, rejuvenating results possible.
            </p>
          </Container>
          <Container>
            <section className="py-16 bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)] my-25">
              <div className="text-center font-family-gloock text-[62px] font-normal [font-style:normal] leading-[132%] capitalize text-[color:var(--black,#1F1B1A)] mb-10 ">
                {/* Heading */}
                <h2 className="section_Title mb-10">
                  The Transformative Benefits of Dysport
                </h2>

                {/* Sub-heading */}
                <p className="section_description mb-8 w-[60%] mx-auto">
                  Experience the power of advanced aesthetic science to smooth
                  fine lines, refresh tired features, and restore a youthful,
                  natural-looking radiance that enhances your confidence every
                  day.
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
          <Container>
            <div className="my-35">
              <h4
                data-aos="fade-up"
                className="text-center font-['Gloock'] text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-[color:var(--black,#1F1B1A)] mb-10"
              >
                Dysport Candidates
              </h4>
              <p
                data-aos="fade-up"
                className="section_description w-[70%] mx-auto text-center"
              >
                Botox is an excellent option for individuals looking to reduce
                the appearance of fine lines and wrinkles caused by repetitive
                facial expressions, such as frowning, squinting, or smiling.
                Ideal candidates are generally healthy adults who wish to
                achieve a smoother, more refreshed look without surgery or
                extensive downtime. It is particularly effective for treating
                crow’s feet, forehead lines, and frown lines between the brows.
                Botox may also be suitable for those seeking to prevent the
                early signs of aging before wrinkles become deeply set. However,
                individuals who are pregnant, breastfeeding, or have certain
                neurological conditions should avoid Botox.
              </p>
            </div>
          </Container>
          <DynamicCardSection
            image={image7}
            title="What to Expect Before Your Dysport Treatment"
            description="Before receiving Botox, a thorough consultation is essential to ensure the treatment is safe, effective, and tailored to your needs. During your appointment, your provider will discuss your aesthetic goals, review your medical history, and assess your facial anatomy to determine the best injection sites and dosage for optimal results. This is also the time to address any questions or concerns you may have about the procedure, recovery, and expected outcomes. In preparation for Botox, you may be advised to avoid certain medications or supplements that can increase bruising such as aspirin, ibuprofen, vitamin E, and fish oil for about a week prior to your treatment.  "
            sectionSubTitle="Procedure"
            titleClassName="card_title_pink"
            descriptionClassName="card_description"
            buttonLink="#"
            index={0}
          />
          <Container>
            <div className="my-35 flex gap-10 px-30">
              <h4
                data-aos="fade-up"
                className="text-right font-family-gloock text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-[color:var(--black,#1F1B1A)] mb-10 flex-1"
              >
                What to Expect During Botox
              </h4>
              <p data-aos="fade-up" className="section_description  flex-1">
                At Esteves Aesthetics, the Botox procedure is quick, precise,
                and designed for your comfort. After a brief consultation to
                confirm your treatment plan, your provider will cleanse the area
                and may apply a topical numbing cream if desired. Using an
                ultra-fine needle, small amounts of Botox are carefully injected
                into the targeted muscles.
              </p>
            </div>
          </Container>
          <DynamicCardSection
            image={image3}
            title="What to Expect After Treatment"
            description="Botox is a popular, non-surgical cosmetic treatment that uses a purified form of botulinum toxin to temporarily relax targeted facial muscles, reducing the appearance of fine lines and wrinkles. It works by blocking nerve signals that cause muscles to contract, resulting in smoother, more youthful-looking skin. Commonly used to treat areas such as forehead lines, frown lines, and crow’s feet, Botox is a quick, minimally invasive procedure with little to no downtime. In addition to its aesthetic benefits, Botox is also used for various medical purposes, including treating migraines, excessive sweating, and muscle spasms. The results typically become visible within a few days and can last for several months, making it a highly sought-after solution for both cosmetic enhancement and therapeutic relief. "
            sectionSubTitle="Smooth Results and Expert Aftercare"
            titleClassName="card_title_black !text-[52px]"
            descriptionClassName="card_description"
            buttonLink="#"
            index={3}
          />
          <Container>
            <div className="my-35 flex gap-10 px-30">
              <h4
                data-aos="fade-up"
                className="text-right font-family-gloock text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-[#C98575] mb-10 flex-1"
              >
                What to Expect During Botox
              </h4>
              <p data-aos="fade-up" className="section_description  flex-1">
                At Esteves Aesthetics, the Botox procedure is quick, precise,
                and designed for your comfort. After a brief consultation to
                confirm your treatment plan, your provider will cleanse the area
                and may apply a topical numbing cream if desired. Using an
                ultra-fine needle, small amounts of Botox are carefully injected
                into the targeted muscles.
              </p>
            </div>
          </Container>
          <Container>
            <div className="my-35 px-20 py-30 bg-[#FBE0DA]">
              <h4
                data-aos="fade-up"
                className="text-center font-family-gloock text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-primary-black mb-10"
              >
                Schedule Your Lubbock Botox Consultation at Esteves Aesthetics
                Today
              </h4>
              <p
                data-aos="fade-up"
                className="section_description w-[70%] mx-auto text-center"
              >
                Experience the art of timeless beauty with a personalized Botox
                treatment plan designed just for you. Our expert team at Esteves
                Aesthetics is here to help you refresh your look, smooth fine
                lines, and restore youthful confidence because you deserve to
                feel as vibrant as you look.
              </p>

              <div className="flex justify-center items-center">
                <Button Txt="Book Now" className="card_button_black  mt-10" />
              </div>
            </div>
          </Container>
          <div className="py-30">
            <FAQ data={data?.service_faqs} />
          </div>
          <DynamicContactUs image={image} />
        </>
      )}
    </>
  );
}
