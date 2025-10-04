import Link from "next/link";
import { BannerSection } from "@/Components/commonComponents/bannerSection";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import bgImg2 from "@/assets/service/lipsbg.png";
import before1 from "@/assets/service/before1.png";
import before3 from "@/assets/service/before2.png";
import before2 from "@/assets/service/before3.png";
import image from "@/assets/contact/contact.png";
import image3 from "@/assets/service/Dysport2.png";
import image10 from "@/assets/service/lipscard.png";
import image4 from "@/assets/cards/image6.png";
import image7 from "@/assets/service/botox-3.png";
import image8 from "@/assets/service/darmal-1.png";
import image11 from "@/assets/service/lip.png";
import DynamicCardSection from "@/Components/commonComponents/DynamicCardSectionBlack";
import Container from "@/Components/commonComponents/Container";
import { BoltSvg, LineSvg } from "@/Components/SvgContainer/SvgContainer";
import Button from "@/Components/Tags/Button/Button";
import FAQ from "@/Components/ServicesPage/FAQ";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

const sectionBars = [
  { id: 1, path: "/botox", label: "What Is Lip Villers?" },
  { id: 2, path: "/dsport", label: "Before & After" },
  { id: 3, path: "/dermal", label: "Your Options for Lip " },
  { id: 4, path: "/morpheus8", label: "Benefits" },
  { id: 4, path: "/morpheus8", label: "Result" },
  { id: 4, path: "/morpheus8", label: "Recovery" },
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
          heading="lip Villers"
          description="Restore Youthful Contours and Natural Balance"
        />
      </Container>

      {/* Tabs */}
      <div className="pt-10 lg:pt-14 2xl:pt-20 3xl:pt-30 pb-5 xl:pb-8 2xl:pb-10">
        <Container>
          <h4
            data-aos="fade-up"
            className="text-center font-['Gloock'] text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-secondary-black mb-10"
          >
            The Secret to Luscious Lips
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description w-[80%] mx-auto mb-10"
          >
            Enhance your natural beauty with smooth and easy-flowing lip fillers
            designed to give your lips a soft, plump, and youthful appearance.
            Our advanced lip filler treatments are tailored to create a natural
            look while ensuring comfort and precision.
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
        description="Enhance your lips with natural-looking volume and shape using smooth, easy-flowing fillers. These hyaluronic acid-based fillers glide effortlessly for even, soft results, improving symmetry, smoothing fine lines, and adding hydration. Ideal for anyone seeking fuller, youthful lips with minimal discomfort and immediate results. Effects typically last 6–12 months, and treatments are fully customizable to your desired look.
     "
        sectionSubTitle="What Is Lip Villers"
        titleClassName="card_title_black !text-[52px]"
        descriptionClassName="card_description"
        buttonLink="#"
        index={3}
      />

      <section className="py-30">
        <Container>
          <div className="">
            {/* Title */}
            <h2 className="card_title_black text-center mb-10">
              Lip Villers Before & After
            </h2>

            {/* Images */}
            <div className="flex gap-5">
              {/* Before Image */}
              <div className="relative">
                <Image
                  src={before1}
                  alt="Before"
                  width={600}
                  height={400}
                  className=" object-cover"
                />
              </div>

              <div className="relative">
                <Image
                  src={before2}
                  alt="After"
                  width={600}
                  height={400}
                  className="object-cover "
                />
              </div>
              <div className="relative">
                <Image
                  src={before3}
                  alt="After"
                  width={600}
                  height={400}
                  className="object-cover "
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="bg-white py-20 my-35">
        <Container>
          <h4
            data-aos="fade-up"
            className="text-center font-['Gloock'] text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-secondary-black mb-10"
          >
            The Secret to Plumper Lips
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description w-[70%] mx-auto"
          >
            Lip fillers are a non-surgical solution to enhance the fullness,
            shape, and definition of your lips. Using high-quality, clinically
            proven products, our skilled practitioners carefully administer each
            treatment to achieve a natural, youthful appearance. Every session
            is tailored to your unique facial features, ensuring results that
            are balanced and harmonious.
          </p>
          <p
            data-aos="fade-up"
            className="text-center card_description w-[70%] mx-auto"
          >
            At Estevez Aesthetics, we know that lip enhancement is personal.
            Whether you desire a subtle lift or a more noticeable pout, our
            specialists use precise techniques to ensure your lips feel soft,
            natural, and beautifully proportioned. Our goal is to enhance your
            natural beauty while allowing your lips to reflect your individual
            style and personality.
          </p>
        </Container>
      </div>

      <Container>
        <div className="my-50">
          <div className="">
            <h4
              data-aos="fade-up"
              className="text-center section_sub-title mb-10 "
            >
              Your Options for Lip Fillers
            </h4>
            <h4
              data-aos="fade-up"
              className="text-center font-['Gloock'] text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-secondary-black mb-10"
            >
              Kissable Lips, Effortlessly
            </h4>
            <p
              data-aos="fade-up"
              className="text-center card_description w-[80%] mx-auto mb-10"
            >
              Achieve soft, naturally full lips with minimal effort and maximum
              elegance.
            </p>
          </div>

          <div className="grid grid-cols-1  xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-4 sm:p-5 lg:p-6 h-[350px] flex flex-col items-center justify-center">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-4 sm:mb-5 lg:mb-6"
              >
                Revanesse@ LipsTM+
              </h4>
              <p
                data-aos="fade-up"
                className="text-center card_description !mb-0"
              >
                Revanesse@ LipsTM+ enhances your lips with smooth,
                natural-looking volume and definition. Using advanced hyaluronic
                acid technology, it adds fullness, improves symmetry, and
                refines contours. Treatments are tailored to your features,
                giving soft, flexible, and long-lasting results with minimal
                downtime.
              </p>
            </div>

            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-4 sm:p-5 lg:p-6 h-[350px] flex flex-col items-center justify-center">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-4 sm:mb-5 lg:mb-6"
              >
                Juvederm@ Ultra XC
              </h4>
              <p
                data-aos="fade-up"
                className="text-center card_description !mb-0"
              >
                Restylane@ISvsse enhances your lips with natural-looking volume,
                softness, and flexibility. Its advanced formulation ensures
                smooth, expressive results that move naturally with your lips.
                Perfect for adding definition, improving symmetry, and creating
                a youthful, kissable appearance with long-lasting effects.
              </p>
            </div>

            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-4 sm:p-5 lg:p-6 h-[350px] flex flex-col items-center justify-center">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-4 sm:mb-5 lg:mb-6"
              >
                Juvederm@ Ultra XC
              </h4>
              <p
                data-aos="fade-up"
                className="text-center card_description !mb-0"
              >
                Juvcdcrm@Ultra XC adds smooth, natural-looking volume and shape
                to your lips. Its hyaluronic acid formula ensures soft, plump
                results that move naturally with your expressions. Ideal for
                enhancing fullness, defining contours, and achieving a youthful,
                balanced appearance with long-lasting effects.
              </p>
            </div>

            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-4 sm:p-5 lg:p-6 h-[350px] flex flex-col items-center justify-center">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-4 sm:mb-5 lg:mb-6"
              >
                Juvederm@ Volbella
              </h4>
              <p
                data-aos="fade-up"
                className="text-center card_description !mb-0"
              >
                Juvederm@ volbella provides subtle, natural lip enhancement with
                soft, smooth results. Designed to add gentle volume and improve
                lip contours, it also helps smooth fine lines around the mouth.
                Perfect for a refined, youthful look with long-lasting, natural
                movement.
              </p>
            </div>

            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-4 sm:p-5 lg:p-6 h-[350px] flex flex-col items-center justify-center">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-4 sm:mb-5 lg:mb-6"
              >
                RHA@ 2
              </h4>
              <p
                data-aos="fade-up"
                className="text-center card_description !mb-0"
              >
                It is designed for subtle lip enhancement and the correction of
                fine lines around the mouth. Its smooth, resilient hyaluronic
                acid gel allows for natural movement, providing soft, balanced,
                and youthful results. Ideal for clients seeking gentle volume
                and refined definition.
              </p>
            </div>

            <div className="bg-white shadow-[0_2px_47px_-12px_rgba(0,0,0,0.15)] p-4 sm:p-5 lg:p-6 h-[350px] flex flex-col items-center justify-center">
              <h4
                data-aos="fade-up"
                className="text-center text-secondary-black font-family-gloock text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[132%] mb-4 sm:mb-5 lg:mb-6"
              >
                RHA@ 3
              </h4>
              <p
                data-aos="fade-up"
                className="text-center card_description !mb-0"
              >
                It is formulated for enhancing lip volume and correcting
                moderate lines around the mouth. Its smooth, resilient
                hyaluronic acid gel ensures natural movement, soft texture, and
                long-lasting results, giving lips a youthful, balanced
                appearance.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className=" py-20 my-35">
        <Container>
          <h4
            data-aos="fade-up"
            className="text-center font-['Gloock'] text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-secondary-black mb-10"
          >
            Perfect Your Pout
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description w-[80%] mx-auto"
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
                What Makes Revanesse Versa Unique?
              </h2>
              <div className="">
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px] font- font-normal leading-[132%] text-secondary-black"
                  >
                    Natural Volume
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Our advanced fillers add fullness to your lips while
                    maintaining a soft and natural appearance. Rather than
                    looking overdone, your lips will simply appear refreshed,
                    youthful, and perfectly balanced.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px] font- font-normal leading-[132%] text-secondary-black"
                  >
                    Defined Shape
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    We carefully enhance the natural contours of your lips to
                    create symmetry and definition. This subtle sculpting
                    highlights your smile, giving you a beautifully proportioned
                    pout that complements your overall facial features.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px] font- font-normal leading-[132%] text-secondary-black"
                  >
                    Hydration Boost
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Fine lines and wrinkles around the mouth are gently
                    softened, leaving your lips with a smooth, even surface.
                    This creates a more youthful, polished look that enhances
                    both your lips and the surrounding area.
                  </p>
                </div>
                <div className="">
                  <h4
                    data-aos="fade-up"
                    className="text-[24px] font- font-normal leading-[132%] text-secondary-black"
                  >
                    Hydration Boost
                  </h4>
                  <p data-aos="fade-up" className="section_description">
                    Formulated with hyaluronic acid, our fillers not only add
                    volume but also lock in moisture. This keeps your lips soft,
                    supple, and naturally hydrated for a healthier, more radiant
                    appearance.
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
                Who Is an Ideal Candidate?
              </h2>
              <p
                data-aos="fade-up"
                className="section_description !font-semibold !text-secondary-black mb-8"
              >
                Lip fillers are suitable for many people who want to enhance the
                natural beauty of their lips. You may be a great candidate if
                you
              </p>
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

      <div className="bg-white py-20 my-35">
        <Container>
          <h4
            data-aos="fade-up"
            className="text-center section_sub-title mb-10"
          >
            Result
          </h4>
          <h4
            data-aos="fade-up"
            className="text-center font-['Gloock'] text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-secondary-black mb-10"
          >
            What Results Can I Expect with Lip Filler?
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description w-[80%] mx-auto"
          >
            With lip fillers, you can expect fuller, naturally shaped lips with
            enhanced symmetry and definition. Fine lines around the mouth are
            smoothed, lips feel soft and hydrated, and your overall appearance
            looks refreshed and youthful. Results are immediate and can last
            6–12 months, depending on the product and individual factors.
          </p>
        </Container>
      </div>
      <Container>
        <div className="bg-white shadow-[0_2px_47px_11px_rgba(0,0,0,0.15)] p-20 my-35">
          <h4
            data-aos="fade-up"
            className="text-center section_sub-title mb-10"
          >
            Recovery
          </h4>
          <h4
            data-aos="fade-up"
            className="text-center font-['Gloock'] text-[62px] font-[400] [font-style:normal] leading-[132%] capitalize text-secondary-black mb-10"
          >
            Lip Fillers Recovery and Aftercare
          </h4>
          <p
            data-aos="fade-up"
            className="text-center card_description w-[80%] mx-auto"
          >
            Lip fillers are a non-surgical solution to enhance the fullness,
            shape, and definition of your lips. Using high-quality, clinically
            proven products, our skilled practitioners carefully administer each
            treatment to achieve a natural, youthful appearance. Every session
            is tailored to your unique facial features, ensuring results that
            are balanced and harmonious.
          </p>
          <p
            data-aos="fade-up"
            className="text-center card_description w-[80%] mx-auto mt-7 "
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

      <div className="py-30">
        <FAQ />
      </div>
      <DynamicContactUs image={image} />
    </>
  );
}
