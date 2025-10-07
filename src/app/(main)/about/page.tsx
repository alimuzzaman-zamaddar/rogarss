import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import image from "../../../assets/contact/contact.png";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import Container from "@/Components/commonComponents/Container";
import { sectionBars } from "@/Components/Data/data";
import DynamicCardSectionAbout from "@/Components/commonComponents/DynamicCardSectionAbout";
import image1 from "../../../assets/about/aboutpagesection.png";
import image2 from "../../../assets/cards/image6.png";
import image3 from "../../../assets/about/about-doctor.png";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* Banner */}
      <Container>
        <BannerSection
          bgImages={[
            "https://i.ibb.co.com/hxXPNNKG/about.png",
            "https://i.ibb.co.com/hxXPNNKG/about.png",
            "https://i.ibb.co.com/hxXPNNKG/about.png", 
          ]}
          heading="About"
          description="About in las vegas, nv"
        />
      </Container>

      {/* Tabs */}
      <div className="pt-10 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10 ">
        <h4
          data-aos="fade-up"
          className="section_title !mb-2 2xl:!mb-5 text-center"
        >
          Mission Statement
        </h4>
        <p
          data-aos="fade-up"
          className="card_description text-center xl:w-[70%] mx-auto px-3"
        >
          At Esteves Aesthetics, our mission is to help every client look and
          feel their absolute best by blending advanced medical aesthetics with
          a personalized, compassionate approach. We are dedicated to delivering
          safe, effective, and innovative treatments that enhance natural
          beauty, promote confidence, and support overall well-being. Every
          procedure we offer is guided by our commitment to excellence,
          integrity, and client satisfaction because your trust and results are
          at the heart of everything we do.
        </p>

        <div className="bg-bg-pink py-4 mt-10 3xl:mt-40">
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
        <Container>
          <div className="bg-transparent shadow-[0_2.767px_2.214px_0_rgba(0,0,0,0.02),0_6.65px_5.32px_0_rgba(0,0,0,0.03),0_12.522px_10.017px_0_rgba(0,0,0,0.04),0_22.336px_17.869px_0_rgba(0,0,0,0.04),0_41.778px_33.422px_0_rgba(0,0,0,0.05),0_100px_80px_0_rgba(0,0,0,0.07)] pt-10 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10 mt-25">
            <h4
              data-aos="fade-up"
              className="section_title !mb-2 2xl:!mb-5 text-center"
            >
              Vision
            </h4>
            <p
              data-aos="fade-up"
              className="card_description text-center xl:w-[70%] mx-auto px-3"
            >
              Our vision at Esteves Aesthetics is to become the premier
              destination for luxury medical aesthetics, recognized for
              redefining beauty standards through innovation, artistry, and
              care. We aim to create an environment where science and elegance
              meet offering cutting-edge treatments in a relaxing,
              client-focused setting. By continually advancing our skills,
              technology, and personalized approach, we strive to inspire
              confidence, empower self-expression, and set the benchmark for
              excellence in the aesthetic industry.
            </p>
          </div>
        </Container>
      </div>

      <div className="my-25">
        <DynamicCardSectionAbout
          image1={image2}
          image2={image1}
          title="How We Were Founded"
          description={[
            "Estevez Aesthetics was born from Jenn Estevez’s passion for combining advanced aesthetic care with a deeply personal touch. With years of experience in the beauty and wellness industry, Jenn saw a need for a space where clients could receive not only effective treatments, but also genuine guidance and support. She envisioned a boutique practice where results would be natural, care would be honest, and each person’s journey would be truly respected.",
            "From the beginning, her mission was to offer more than just cosmetic enhancements; she aimed to build confidence, educate clients, and create a welcoming environment rooted in trust and transparency. What started as a solo vision has now grown into a trusted name in aesthetic care, proudly helping people look and feel their best every day.",
          ]}
          sectionSubTitle="Our Beginning"
          titleClassName="card_title_pink"
          descriptionClassName="card_description"
          index={1}
        />
      </div>

      <div className="">
        <section className="p-5 sm:py-10 md:py-14 xl:py-20 2xl:py-24 ">
          <Container>
            <div className="flex flex-col xl:flex-row justify-center items-center gap-5 xl:gap-10 3xl:gap-20">
              <div data-aos="fade-up" className="flex-1 xl:w-[40%]">
                <Image
                  className="w-full object-cover"
                  src={image1}
                  alt="contact image 2"
                />
              </div>
              {/* Right */}
              <div className="flex-1 xl:w-[60%]">
                <h2
                  data-aos="fade-up"
                  className="section_title mb-5 xl:mb-6 2xl:mb-10"
                >
                  Your Team Of Aesthetic Experts In The Heart Of Las Vegas​
                </h2>

                <p className="section_description">
                  In the dynamic field of aesthetics, the skill and passion of
                  the practitioner make all the difference. Our Las Vegas team
                  is a perfect mix of talent and expertise, led by Dr. Roger
                  Estevez and featuring the talented aesthetician Ruby Mendez.
                  Ruby, known for her meticulous care and artistic touch in
                  treatments, alongside our skilled professionals, is not just
                  versed in the latest aesthetic technologies like laser skin
                  rejuvenation and non-surgical treatments; they’re artists who
                  view each client as a unique canvas.
                </p>
                <p className="section_description mt-10">
                  Our approach is holistic and personal. We see beyond the
                  treatments, focusing on how they enhance your overall
                  well-being. Services like Botox, dermal fillers, advanced body
                  sculpting, custom facials, and chemical peels are more than
                  procedures they are tools to help you reflect your inner
                  beauty on the outside.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </div>

      <Container>
        <div className="bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)] p-4 md:p-10 xl:p-20 my-10 xl:my-[250px]">
          <Image
            className="w-full object-cover"
            src={image3}
            alt="contact image 2"
          />
          <h4
            data-aos="fade-up"
            className="section_title !mb-2 2xl:!mb-5 text-center mt-6"
          >
            Meet Dr. Roger Estevez
          </h4>
          <p data-aos="fade-up" className="card_description text-center">
            Our vision at Esteves Aesthetics is to become the premier
            destination for luxury medical aesthetics, recognized for redefining
            beauty standards through innovation, artistry, and care. We aim to
            create an environment where science and elegance meet offering
            cutting-edge treatments in a relaxing, client-focused setting. By
            continually advancing our skills, technology, and personalized
            approach, we strive to inspire confidence, empower self-expression,
            and set the benchmark for excellence in the aesthetic industry.
          </p>
        </div>
      </Container>

      <DynamicContactUs image={image} />
    </>
  );
}
